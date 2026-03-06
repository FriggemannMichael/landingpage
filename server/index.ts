import "dotenv/config";
import express, { type Request, type Response } from "express";
import nodemailer from "nodemailer";

const app = express();
const port = Number(process.env.API_PORT || 8787);

app.use(express.json({ limit: "64kb" }));

type DemoPayload = {
  name?: string;
  email?: string;
  phone?: string;
  targetGroup?: string;
  notes?: string;
  requestType?: string;
};

const allowedTargetGroups = new Set(["Handwerk", "Zeitarbeit"]);
const allowedRequestTypes = new Set(["demo", "callback", "contact"]);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

const smtpHost = requireEnv("SMTP_HOST");
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpSecure = process.env.SMTP_SECURE === "true";
const smtpUser = requireEnv("SMTP_USER");
const smtpPass = requireEnv("SMTP_PASS");
const mailTo = requireEnv("MAIL_TO");
const mailFrom = process.env.MAIL_FROM || smtpUser;

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ ok: true });
});

app.post("/api/demo", async (req: Request, res: Response) => {
  const body = (req.body || {}) as DemoPayload;
  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();
  const targetGroup = body.targetGroup?.trim();
  const notes = body.notes?.trim();
  const requestType = body.requestType?.trim() || "demo";

  if (!name || !email || !targetGroup) {
    return res.status(400).json({ ok: false, error: "missing_fields" });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).json({ ok: false, error: "invalid_email" });
  }
  if (!allowedTargetGroups.has(targetGroup)) {
    return res.status(400).json({ ok: false, error: "invalid_target_group" });
  }
  if (!allowedRequestTypes.has(requestType)) {
    return res.status(400).json({ ok: false, error: "invalid_request_type" });
  }
  if (requestType === "callback" && !phone) {
    return res.status(400).json({ ok: false, error: "missing_phone_for_callback" });
  }

  const requestTypeLabel =
    requestType === "callback"
      ? "Rückruf"
      : requestType === "contact"
        ? "Kontakt"
        : "Demo";
  const requestTitle =
    requestType === "callback"
      ? "Neue Rückruf-Anfrage"
      : requestType === "contact"
        ? "Neue Kontakt-Anfrage"
        : "Neue Demo-Anfrage";

  const text = [
    requestTitle,
    "",
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Telefon: ${phone || "-"}`,
    `Zielgruppe: ${targetGroup}`,
    `Anfragetyp: ${requestTypeLabel}`,
    `Notizen: ${notes || "-"}`,
  ].join("\n");

  const html = `
    <h2>${requestTitle}</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>E-Mail:</strong> ${email}</p>
    <p><strong>Telefon:</strong> ${phone || "-"}</p>
    <p><strong>Zielgruppe:</strong> ${targetGroup}</p>
    <p><strong>Anfragetyp:</strong> ${requestTypeLabel}</p>
    <p><strong>Notizen:</strong> ${notes || "-"}</p>
  `;

  try {
    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: email,
      subject: `${requestTitle} - MitarbeiterApp Pro`,
      text,
      html,
    });

    return res.json({ ok: true });
  } catch (error) {
    console.error("mail_send_failed", error);
    return res.status(500).json({ ok: false, error: "mail_send_failed" });
  }
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
