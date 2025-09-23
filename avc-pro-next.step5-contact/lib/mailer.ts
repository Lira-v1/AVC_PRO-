import nodemailer from "nodemailer";

export function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    throw new Error("SMTP is not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS.");
  }
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function sendLeadEmail(opts: { from: string; to: string; subject: string; html: string; }) {
  const t = getTransport();
  const info = await t.sendMail({ from: opts.from, to: opts.to, subject: opts.subject, html: opts.html });
  return info.messageId;
}
