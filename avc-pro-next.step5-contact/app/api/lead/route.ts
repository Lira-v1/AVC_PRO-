import { NextResponse } from "next/server";
import { leadSchema, normalize } from "@/lib/validation/lead";
import { sendLeadEmail } from "@/lib/mailer";
import { sendTelegramMessage } from "@/lib/telegram";

export async function POST(req: Request) {
  try {
    const payload = await req.json().catch(() => ({}));
    const normalized = normalize(payload);
    if (normalized.website) {
      return NextResponse.json({ ok: true, received: true });
    }

    const parsed = leadSchema.safeParse(normalized);
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }
    const data = parsed.data;

    const to = process.env.EMAIL_TO;
    const from = process.env.EMAIL_FROM || "no-reply@localhost";
    if (!to) return NextResponse.json({ ok: false, error: "EMAIL_TO is not configured" }, { status: 500 });

    const subject = `Новая заявка • ${data.name}${data.service ? " • " + data.service : ""}`;
    const html = `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system">
        <h2>Новая заявка с сайта AVC PRO</h2>
        <table style="border-collapse:collapse">
          <tr><td style="padding:4px 8px;color:#555">Имя</td><td style="padding:4px 8px"><b>${escapeHtml(data.name)}</b></td></tr>
          <tr><td style="padding:4px 8px;color:#555">Телефон</td><td style="padding:4px 8px"><b>${escapeHtml(data.phone)}</b></td></tr>
          ${data.email ? `<tr><td style="padding:4px 8px;color:#555">Email</td><td style="padding:4px 8px">${escapeHtml(data.email)}</td></tr>` : ""}
          ${data.service ? `<tr><td style="padding:4px 8px;color:#555">Услуга</td><td style="padding:4px 8px">${escapeHtml(data.service)}</td></tr>` : ""}
          ${data.message ? `<tr><td style="padding:4px 8px;color:#555">Сообщение</td><td style="padding:4px 8px;white-space:pre-wrap">${escapeHtml(data.message)}</td></tr>` : ""}
        </table>
        <p style="color:#888;font-size:12px">Отправлено: ${new Date().toISOString()}</p>
      </div>
    `;

    const messageId = await sendLeadEmail({ from, to, subject, html });

    const tgText = [
      "<b>Новая заявка • AVC PRO</b>",
      `Имя: <b>${escapeHtml(data.name)}</b>`,
      `Телефон: <b>${escapeHtml(data.phone)}</b>`,
      data.email ? `Email: ${escapeHtml(data.email)}` : null,
      data.service ? `Услуга: ${escapeHtml(data.service)}` : null,
      data.message ? `—\n${escapeHtml(data.message)}` : null,
      "",
      `<i>${new Date().toISOString()}</i>`,
    ].filter(Boolean).join("\n");
    await sendTelegramMessage(tgText);

    return NextResponse.json({ ok: true, messageId });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
