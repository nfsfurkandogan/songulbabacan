import { NextResponse } from "next/server";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  const { name, email, phone, message, address } = await request.json();

  if (!name || !message) {
    return NextResponse.json({ error: "Eksik alan" }, { status: 400 });
  }

  const safeEmail = typeof email === "string" ? email.trim() : "";
  const safeNamePlain = String(name).trim();
  const safeName = escapeHtml(safeNamePlain);
  const safePhone = escapeHtml(String(phone ?? "-").trim() || "-");
  const safeAddress = escapeHtml(String(address ?? "-").trim() || "-");
  const safeMessageRaw = escapeHtml(String(message ?? "").trim());
  const safeMessage = safeMessageRaw ? safeMessageRaw.replace(/\n/g, "<br />") : "";
  const to = process.env.CONTACT_TO_EMAIL ?? "officialsongulbabacan@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Songul Babacan <onboarding@resend.dev>";
  const resendKey = process.env.RESEND_API_KEY;

  if (!resendKey) {
    return NextResponse.json(
      { error: "E-posta servisi yapılandırılmadı." },
      { status: 500 }
    );
  }

  const payload: Record<string, unknown> = {
    from,
    to: [to],
    subject: `Yeni Form: ${safeNamePlain || "Başvuru"}`,
    html: `
        <div style="background:#f6f7fb;padding:24px;font-family:Inter,Arial,sans-serif;">
          <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;border:1px solid #e5e7eb;padding:24px;">
            <h2 style="margin:0 0 6px;color:#111827;">Yeni Form Başvurusu</h2>
            <p style="margin:0 0 20px;color:#6b7280;font-size:14px;">
              Farmasi ücretsiz kayıt formundan yeni bir başvuru geldi.
            </p>
            <table style="width:100%;border-collapse:separate;border-spacing:0 8px;font-size:14px;">
              <tr>
                <td style="color:#6b7280;width:160px;">Ad Soyad</td>
                <td style="font-weight:600;color:#111827;">${safeName}</td>
              </tr>
              <tr>
                <td style="color:#6b7280;">Telefon</td>
                <td style="font-weight:600;color:#111827;">${safePhone}</td>
              </tr>
              <tr>
                <td style="color:#6b7280;">Şehir Adresi</td>
                <td style="font-weight:600;color:#111827;">${safeAddress}</td>
              </tr>
              <tr>
                <td style="color:#6b7280;">E-posta</td>
                <td style="font-weight:600;color:#111827;">${escapeHtml(safeEmail || "-")}</td>
              </tr>
            </table>
            ${
              safeMessage
                ? `<div style="margin-top:16px;border:1px solid #eef2f7;border-radius:12px;padding:12px 16px;background:#f9fafb;">
                    <p style="margin:0 0 6px;color:#111827;font-weight:600;">Mesaj</p>
                    <p style="margin:0;color:#374151;font-size:14px;line-height:1.5;">${safeMessage}</p>
                  </div>`
                : ""
            }
          </div>
        </div>
      `
  };

  if (safeEmail) {
    payload.reply_to = safeEmail;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    return NextResponse.json({ error: "E-posta gönderilemedi" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
