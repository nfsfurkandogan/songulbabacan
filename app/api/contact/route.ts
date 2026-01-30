import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  if (!name || !message) {
    return NextResponse.json({ error: "Eksik alan" }, { status: 400 });
  }

  const safeEmail = typeof email === "string" ? email.trim() : "";
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
    subject: `Yeni İletişim: ${name}`,
    html: `
        <strong>Ad:</strong> ${name}<br />
        <strong>E-posta:</strong> ${safeEmail || "-"}<br />
        <strong>Telefon:</strong> ${phone ?? "-"}<br /><br />
        <strong>Mesaj:</strong><br />
        ${message}
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
