import express from "express";
import nodemailer from "nodemailer";
import { createServer as createViteServer } from "vite";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

const isProduction = process.env.NODE_ENV === "production";
const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 4173);
const distDir = path.resolve(__dirname, "dist");
const publicDir = path.resolve(__dirname, "public");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const defaultContactTo = "info@aurmak.com";
const liveHostnames = new Set(["aurmak.com", "www.aurmak.com"]);
const knownStaticRoutes = new Set([
  "/",
  "/about",
  "/services",
  "/how-we-work",
  "/solutions",
  "/case-studies",
  "/insights",
  "/lab",
  "/team",
  "/careers",
  "/contact",
  "/privacy",
  "/cookies",
  "/terms",
]);
const knownCaseStudyRoutes = new Set([
  "/case-study-metrikus-smart-building",
  "/case-study-cutover-orchestration",
  "/case-study-rbs-travel-portal",
  "/case-study-cisco-stealthwatch",
  "/case-study-al-jazeera-itsm",
  "/case-study-castrol-carlounge",
  "/case-study-gtt-saas-iaas",
  "/case-study-dubai-trade",
]);
const knownCareerRoutes = new Set([
  "/careers/senior-ai-product-engineer",
  "/careers/enterprise-solutions-architect",
  "/careers/full-stack-product-engineer",
]);

app.disable("x-powered-by");
app.use(express.json({ limit: "1mb" }));

function isIndexingEnabledForHost(hostname = "") {
  const normalizedHostname = hostname.toLowerCase();
  const allowIndexing = (process.env.ALLOW_INDEXING ?? process.env.VITE_ALLOW_INDEXING) === "true";

  return allowIndexing && liveHostnames.has(normalizedHostname);
}

function isKnownAppRoute(pathname) {
  return (
    knownStaticRoutes.has(pathname) ||
    knownCaseStudyRoutes.has(pathname) ||
    knownCareerRoutes.has(pathname)
  );
}

function isHtmlRoute(pathname) {
  if (
    pathname.startsWith("/@vite") ||
    pathname.startsWith("/@react-refresh") ||
    pathname.startsWith("/@fs/") ||
    pathname.startsWith("/src/") ||
    pathname.startsWith("/node_modules/")
  ) {
    return false;
  }

  return pathname === "/" || !path.extname(pathname);
}

function stripAngles(value) {
  return String(value ?? "").replace(/[<>]/g, "").trim();
}

function cleanField(value, maxLength) {
  return stripAngles(value).slice(0, maxLength);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getLondonTimestamp() {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

function getContactPayload(body) {
  return {
    fullName: cleanField(body.fullName, 120),
    email: cleanField(body.email, 160).toLowerCase(),
    company: cleanField(body.company, 160),
    service: cleanField(body.service, 120),
    brief: cleanField(body.brief, 4000),
    website: cleanField(body.website, 120),
  };
}

function validateContactPayload(payload) {
  if (payload.website) {
    return "Submission rejected.";
  }

  if (!payload.fullName) {
    return "Full name is required.";
  }

  if (!payload.email || !emailPattern.test(payload.email)) {
    return "A valid work email is required.";
  }

  if (!payload.service) {
    return "Please select a service requirement.";
  }

  if (!payload.brief) {
    return "Please enter a project brief.";
  }

  return null;
}

function buildContactText(payload, submittedAt) {
  return [
    "AURMAK contact enquiry",
    "",
    `Full Name: ${payload.fullName}`,
    `Work Email: ${payload.email}`,
    `Company / Organisation: ${payload.company || "Not provided"}`,
    `Service Requirement: ${payload.service}`,
    `Project Brief: ${payload.brief}`,
    `Submitted At (Europe/London): ${submittedAt}`,
  ].join("\n");
}

function buildContactHtml(payload, submittedAt) {
  const rows = [
    ["Full Name", payload.fullName],
    ["Work Email", payload.email],
    ["Company / Organisation", payload.company || "Not provided"],
    ["Service Requirement", payload.service],
    ["Project Brief", payload.brief],
    ["Submitted At (Europe/London)", submittedAt],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:12px;border:1px solid #dbe4f0;background:#f4f7fb;">${escapeHtml(label)}</th><td style="padding:12px;border:1px solid #dbe4f0;">${escapeHtml(value).replace(/\n/g, "<br />")}</td></tr>`
    )
    .join("");

  return `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:24px;background:#eef3f8;font-family:Arial,sans-serif;color:#0f172a;">
    <div style="max-width:720px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #dbe4f0;">
      <div style="padding:24px 28px;background:#0f172a;color:#f8fafc;">
        <h1 style="margin:0;font-size:22px;">AURMAK Contact Enquiry</h1>
      </div>
      <div style="padding:24px 28px;">
        <table style="width:100%;border-collapse:collapse;">${tableRows}</table>
      </div>
    </div>
  </body>
</html>`;
}

function getMailerConfig() {
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (smtpHost && smtpUser && smtpPass) {
    return {
      transporter: nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      }),
      from: process.env.CONTACT_FROM || smtpUser,
      to: process.env.CONTACT_TO || defaultContactTo,
      mode: "smtp",
    };
  }

  if (!isProduction) {
    return {
      transporter: nodemailer.createTransport({
        streamTransport: true,
        newline: "unix",
        buffer: true,
      }),
      from: process.env.CONTACT_FROM || "local@aurmak.test",
      to: process.env.CONTACT_TO || defaultContactTo,
      mode: "log",
    };
  }

  throw new Error("Contact email transport is not configured.");
}

app.post("/api/contact", async (req, res) => {
  const payload = getContactPayload(req.body ?? {});
  const validationMessage = validateContactPayload(payload);

  if (validationMessage) {
    res.status(400).json({ message: validationMessage });
    return;
  }

  try {
    const submittedAt = getLondonTimestamp();
    const { transporter, from, to, mode } = getMailerConfig();

    const info = await transporter.sendMail({
      from,
      to,
      replyTo: payload.email,
      subject: `AURMAK Enquiry | ${payload.fullName} | ${payload.company || "No Company"}`,
      text: buildContactText(payload, submittedAt),
      html: buildContactHtml(payload, submittedAt),
    });

    if (mode === "log" && info.message) {
      console.log("Contact enquiry email preview\n%s", info.message.toString());
    }

    res.status(200).json({
      message: "Enquiry submitted successfully. Our team will contact you shortly.",
    });
  } catch (error) {
    console.error("Contact submission failed", error);
    res.status(500).json({
      message: "Unable to submit your enquiry right now. Please email info@aurmak.com.",
    });
  }
});

app.use((req, res, next) => {
  const indexingEnabled = isIndexingEnabledForHost(req.hostname);

  res.locals.indexingEnabled = indexingEnabled;

  if (!indexingEnabled) {
    res.setHeader("X-Robots-Tag", "noindex, nofollow");
  }

  next();
});

app.get("/robots.txt", (req, res) => {
  const body = res.locals.indexingEnabled
    ? "User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: https://www.aurmak.com/sitemap.xml\n"
    : "User-agent: *\nDisallow: /\n";

  res.type("text/plain").send(body);
});

app.get("/sitemap.xml", async (_req, res, next) => {
  if (!res.locals.indexingEnabled) {
    res.status(404).type("text/plain").send("Not found.");
    return;
  }

  try {
    const sitemapPath = isProduction
      ? path.join(distDir, "sitemap.xml")
      : path.join(publicDir, "sitemap.xml");
    const sitemap = await fs.readFile(sitemapPath, "utf8");

    res.type("application/xml").send(sitemap);
  } catch (error) {
    next(error);
  }
});

app.get("/job-detail", (req, res) => {
  const slug = typeof req.query.job === "string" ? req.query.job : "";

  if (slug && knownCareerRoutes.has(`/careers/${slug}`)) {
    res.redirect(301, `/careers/${slug}`);
    return;
  }

  res.redirect(302, "/careers");
});

async function renderAppShell(req, res, next, vite) {
  const routeExists = isKnownAppRoute(req.path);
  const statusCode = routeExists ? 200 : 404;

  if (statusCode === 404) {
    res.setHeader("X-Robots-Tag", "noindex, nofollow");
  }

  try {
    if (isProduction) {
      res.status(statusCode).sendFile(path.join(distDir, "index.html"));
      return;
    }

    const templatePath = path.resolve(__dirname, "index.html");
    const template = await fs.readFile(templatePath, "utf8");
    const html = await vite.transformIndexHtml(req.originalUrl, template);

    res.status(statusCode).setHeader("Content-Type", "text/html");
    res.end(html);
  } catch (error) {
    if (vite) {
      vite.ssrFixStacktrace(error);
    }
    next(error);
  }
}

if (isProduction) {
  app.use(express.static(distDir, { index: false }));

  app.get(/^\/(?:.*)?$/, (req, res, next) => {
    if (!isHtmlRoute(req.path) || req.path.startsWith("/api/")) {
      next();
      return;
    }

    renderAppShell(req, res, next);
  });
} else {
  const vite = await createViteServer({
    server: {
      middlewareMode: true,
    },
    appType: "custom",
  });

  app.get(/^\/(?:.*)?$/, (req, res, next) => {
    if (!isHtmlRoute(req.path) || req.path.startsWith("/api/")) {
      next();
      return;
    }

    renderAppShell(req, res, next, vite);
  });

  app.use(vite.middlewares);
}

app.use((req, res) => {
  if (req.originalUrl.startsWith("/api/")) {
    res.status(404).json({ message: "Not found." });
    return;
  }

  res.status(404).send("Not found.");
});

app.use((error, req, res, _next) => {
  console.error("Unhandled server error", error);

  if (req.originalUrl.startsWith("/api/")) {
    res.status(500).json({ message: "Internal server error." });
    return;
  }

  res.status(500).send("Internal server error.");
});

app.listen(port, host, () => {
  console.log(`AURMAK server running at http://${host}:${port}/`);
});
