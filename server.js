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
const basePath = "/website";
const distDir = path.resolve(__dirname, "dist");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const defaultContactTo = "info@aurmak.com";

app.disable("x-powered-by");
app.use(express.json({ limit: "1mb" }));

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

app.get("/", (_req, res) => {
  res.redirect(302, `${basePath}/`);
});

if (isProduction) {
  app.use(basePath, express.static(distDir, { index: false }));

  app.get(/^\/website(?:\/.*)?$/, (_req, res) => {
    res.sendFile(path.join(distDir, "index.html"));
  });
} else {
  const vite = await createViteServer({
    server: {
      middlewareMode: true,
    },
    appType: "custom",
  });

  app.get(/^\/website(?:\/.*)?$/, async (req, res, next) => {
    try {
      const templatePath = path.resolve(__dirname, "index.html");
      const template = await fs.readFile(templatePath, "utf8");
      const html = await vite.transformIndexHtml(req.originalUrl, template);
      res.status(200).setHeader("Content-Type", "text/html");
      res.end(html);
    } catch (error) {
      vite.ssrFixStacktrace(error);
      next(error);
    }
  });

  app.use(vite.middlewares);
}

app.use((req, res) => {
  if (req.originalUrl.startsWith("/api/")) {
    res.status(404).json({ message: "Not found." });
    return;
  }

  res.redirect(302, `${basePath}/`);
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
  console.log(`AURMAK server running at http://${host}:${port}${basePath}/`);
});
