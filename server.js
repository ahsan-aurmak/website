import express from "express";
import multer from "multer";
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
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const defaultContactTo = "info@aurmak.com";
const defaultCareersTo = "careers@aurmak.com";
const liveHostnames = new Set(["aurmak.com", "www.aurmak.com"]);
const allowedCvExtensions = new Set([".pdf", ".doc", ".docx"]);
const allowedCvMimeTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const rateLimitStore = new Map();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
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
  "/smart-building-platform",
  "/orchestration-management-platform",
  "/premium-travel-portal",
  "/stealthwatch-educational-portal",
  "/it-service-management-platform",
  "/carlounge-experience",
  "/enterprise-saas-iaas-platform",
  "/government-services-portal",
]);
const legacyCaseStudyRedirects = new Map([
  ["/case-study-metrikus-smart-building", "/smart-building-platform"],
  ["/case-study-cutover-orchestration", "/orchestration-management-platform"],
  ["/case-study-rbs-travel-portal", "/premium-travel-portal"],
  ["/case-study-cisco-stealthwatch", "/stealthwatch-educational-portal"],
  ["/case-study-al-jazeera-itsm", "/it-service-management-platform"],
  ["/case-study-castrol-carlounge", "/carlounge-experience"],
  ["/case-study-gtt-saas-iaas", "/enterprise-saas-iaas-platform"],
  ["/case-study-dubai-trade", "/government-services-portal"],
]);
const knownCareerRoutes = new Set([
  "/careers/senior-ai-product-engineer",
  "/careers/enterprise-solutions-architect",
  "/careers/full-stack-product-engineer",
]);
const knownInsightRoutes = new Set([
  "/insights/scaling-enterprise-saas-design-patterns",
  "/insights/ux-barriers-saas-revenue-growth",
  "/insights/integrating-ux-into-agile-delivery",
  "/insights/ux-testing-business-risk",
]);

app.disable("x-powered-by");
app.use(express.json({ limit: "1mb" }));

app.use((req, res, next) => {
  const redirectTarget = legacyCaseStudyRedirects.get(req.path);
  if (redirectTarget) {
    res.redirect(301, redirectTarget);
    return;
  }
  next();
});

function isIndexingEnabledForHost(hostname = "") {
  const normalizedHostname = hostname.toLowerCase();
  const allowIndexing = (process.env.ALLOW_INDEXING ?? process.env.VITE_ALLOW_INDEXING) === "true";

  return allowIndexing && liveHostnames.has(normalizedHostname);
}

function isKnownAppRoute(pathname) {
  return (
    knownStaticRoutes.has(pathname) ||
    knownCaseStudyRoutes.has(pathname) ||
    knownCareerRoutes.has(pathname) ||
    knownInsightRoutes.has(pathname)
  );
}

function getSitemapEntries() {
  return [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/about", changefreq: "monthly", priority: "0.9" },
    { path: "/services", changefreq: "monthly", priority: "0.9" },
    { path: "/solutions", changefreq: "monthly", priority: "0.8" },
    { path: "/how-we-work", changefreq: "monthly", priority: "0.8" },
    { path: "/case-studies", changefreq: "weekly", priority: "0.9" },
    ...Array.from(knownCaseStudyRoutes).map((path) => ({ path, changefreq: "monthly", priority: "0.7" })),
    { path: "/team", changefreq: "monthly", priority: "0.7" },
    { path: "/careers", changefreq: "weekly", priority: "0.8" },
    ...Array.from(knownCareerRoutes).map((path) => ({ path, changefreq: "weekly", priority: "0.6" })),
    { path: "/insights", changefreq: "weekly", priority: "0.7" },
    ...Array.from(knownInsightRoutes).map((path) => ({ path, changefreq: "monthly", priority: "0.6" })),
    { path: "/lab", changefreq: "monthly", priority: "0.6" },
    { path: "/contact", changefreq: "yearly", priority: "0.8" },
    { path: "/privacy", changefreq: "yearly", priority: "0.3" },
    { path: "/cookies", changefreq: "yearly", priority: "0.3" },
    { path: "/terms", changefreq: "yearly", priority: "0.3" },
  ];
}

function buildSitemapXml() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const entries = getSitemapEntries()
    .map(
      ({ path: routePath, changefreq, priority }) => `  <url>
    <loc>https://www.aurmak.com${routePath}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join("\n\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
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

function normaliseFilename(value) {
  const cleaned = String(value ?? "")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return cleaned || "attachment";
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

function getApplicationPayload(body) {
  return {
    fullName: cleanField(body.fullName, 120),
    email: cleanField(body.email, 160).toLowerCase(),
    phone: cleanField(body.phone, 40),
    location: cleanField(body.location, 120),
    portfolio: cleanField(body.portfolio, 240),
    note: cleanField(body.note, 4000),
    website: cleanField(body.website, 120),
    jobTitle: cleanField(body.jobTitle, 160),
    jobCode: cleanField(body.jobCode, 40),
  };
}

function getRequestKey(req) {
  const forwardedFor = String(req.headers["x-forwarded-for"] || "")
    .split(",")[0]
    .trim();

  return forwardedFor || req.ip || "unknown";
}

function createRateLimiter({ bucket, windowMs, maxRequests, message }) {
  return (req, res, next) => {
    const key = `${bucket}:${getRequestKey(req)}`;
    const now = Date.now();
    const entry = rateLimitStore.get(key);

    if (!entry || entry.expiresAt <= now) {
      rateLimitStore.set(key, { count: 1, expiresAt: now + windowMs });
      next();
      return;
    }

    if (entry.count >= maxRequests) {
      res.status(429).json({ message });
      return;
    }

    entry.count += 1;
    next();
  };
}

function validateCvFile(file) {
  if (!file) {
    return "A CV file is required.";
  }

  const extension = path.extname(file.originalname || "").toLowerCase();

  if (!allowedCvExtensions.has(extension)) {
    return "CV must be PDF, DOC, or DOCX format.";
  }

  if (!allowedCvMimeTypes.has(file.mimetype)) {
    return "CV file type is not supported.";
  }

  return null;
}

function applyUploadMiddleware(req, res, next) {
  upload.single("cv")(req, res, (error) => {
    if (error instanceof multer.MulterError && error.code === "LIMIT_FILE_SIZE") {
      res.status(400).json({ message: "CV file must be less than 5MB." });
      return;
    }

    if (error) {
      next(error);
      return;
    }

    next();
  });
}

const contactRateLimiter = createRateLimiter({
  bucket: "contact",
  windowMs: 15 * 60 * 1000,
  maxRequests: 8,
  message: "Too many contact submissions. Please wait a few minutes and try again.",
});

const applyRateLimiter = createRateLimiter({
  bucket: "apply",
  windowMs: 60 * 60 * 1000,
  maxRequests: 4,
  message: "Too many application attempts. Please wait and try again later.",
});

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

function validateApplicationPayload(payload, file) {
  if (payload.website) {
    return "Submission rejected.";
  }

  if (!payload.fullName) {
    return "Full name is required.";
  }

  if (!payload.email || !emailPattern.test(payload.email)) {
    return "A valid work email is required.";
  }

  if (!payload.phone) {
    return "Phone number is required.";
  }

  if (!file) {
    return "A CV file is required.";
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

function buildApplicationText(payload, submittedAt, file) {
  return [
    "AURMAK careers application",
    "",
    `Role: ${payload.jobTitle || "Not provided"}`,
    `Job Code: ${payload.jobCode || "Not provided"}`,
    `Full Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Current Location: ${payload.location || "Not provided"}`,
    `Portfolio or LinkedIn: ${payload.portfolio || "Not provided"}`,
    `Application Note: ${payload.note || "Not provided"}`,
    `CV Filename: ${file?.originalname || "Not provided"}`,
    `Submitted At (Europe/London): ${submittedAt}`,
  ].join("\n");
}

function buildApplicationHtml(payload, submittedAt, file) {
  const rows = [
    ["Role", payload.jobTitle || "Not provided"],
    ["Job Code", payload.jobCode || "Not provided"],
    ["Full Name", payload.fullName],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Current Location", payload.location || "Not provided"],
    ["Portfolio or LinkedIn", payload.portfolio || "Not provided"],
    ["Application Note", payload.note || "Not provided"],
    ["CV Filename", file?.originalname || "Not provided"],
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
        <h1 style="margin:0;font-size:22px;">AURMAK Careers Application</h1>
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
      careersTo: process.env.CAREERS_TO || process.env.CONTACT_TO || defaultCareersTo,
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
      careersTo: process.env.CAREERS_TO || process.env.CONTACT_TO || defaultCareersTo,
    };
  }

  throw new Error("Contact email transport is not configured.");
}

app.post("/api/contact", contactRateLimiter, async (req, res) => {
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

app.post("/api/apply", applyRateLimiter, applyUploadMiddleware, async (req, res) => {
  const payload = getApplicationPayload(req.body ?? {});
  const validationMessage = validateApplicationPayload(payload, req.file);
  const cvValidationMessage = validateCvFile(req.file);

  if (validationMessage) {
    res.status(400).json({ message: validationMessage });
    return;
  }

  if (cvValidationMessage) {
    res.status(400).json({ message: cvValidationMessage });
    return;
  }

  try {
    const submittedAt = getLondonTimestamp();
    const { transporter, from, careersTo, mode } = getMailerConfig();

    const info = await transporter.sendMail({
      from,
      to: careersTo,
      replyTo: payload.email,
      subject: `AURMAK Application | ${payload.jobTitle || "General"} | ${payload.fullName}`,
      text: buildApplicationText(payload, submittedAt, req.file),
      html: buildApplicationHtml(payload, submittedAt, req.file),
      attachments: req.file
        ? [
            {
              filename: normaliseFilename(req.file.originalname),
              content: req.file.buffer,
              contentType: req.file.mimetype,
            },
          ]
        : [],
    });

    if (mode === "log" && info.message) {
      console.log("Careers application email preview\n%s", info.message.toString());
    }

    res.status(200).json({
      message: "Application submitted successfully. Our team will review your profile and respond shortly.",
    });
  } catch (error) {
    console.error("Application submission failed", error);
    res.status(500).json({
      message: "Unable to submit your application right now. Please email careers@aurmak.com.",
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
    res.type("application/xml").send(buildSitemapXml());
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
