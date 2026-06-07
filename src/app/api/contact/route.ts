import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const service = body.service?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  // Server-side validation
  if (!name || !phone || !email || !service || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }
  if (phone.replace(/[^0-9]/g, "").length < 8) {
    return NextResponse.json({ error: "Invalid phone number." }, { status: 400 });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_SECURE,
    CONTACT_TO,
    CONTACT_FROM,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("[contact] SMTP environment variables are not configured.");
    return NextResponse.json(
      { error: "Email service is not configured on the server." },
      { status: 500 },
    );
  }

  const to = CONTACT_TO || "mp.elect.w@gmail.com";
  const port = Number(SMTP_PORT) || 587;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows: [string, string][] = [
    ["Name", name],
    ["Company", company || "—"],
    ["Phone", phone],
    ["Email", email],
    ["Service Required", service],
    ["Message", message],
  ];

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#0c1722;max-width:560px">
      <h2 style="color:#06182b;margin:0 0 16px">New enquiry — MP Electric Works</h2>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([k, v]) =>
              `<tr>
                 <td style="padding:8px 12px;border:1px solid #e3e8ee;background:#f5f7fa;font-weight:600;width:160px;vertical-align:top">${escapeHtml(
                   k,
                 )}</td>
                 <td style="padding:8px 12px;border:1px solid #e3e8ee;white-space:pre-wrap">${escapeHtml(
                   v,
                 )}</td>
               </tr>`,
          )
          .join("")}
      </table>
      <p style="color:#7c8a98;font-size:12px;margin-top:18px">Sent from the mpelectricworks.com contact form.</p>
    </div>`;

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    await transporter.sendMail({
      from: CONTACT_FROM || `"MP Electric Works Website" <${SMTP_USER}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `New Enquiry: ${service} — ${name}`,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Failed to send email:", err);
    return NextResponse.json({ error: "Failed to send your enquiry." }, { status: 502 });
  }
}
