"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/siteConfig";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [fallbackMailto, setFallbackMailto] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFallbackMailto(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message
        })
      });

      if (!response.ok) throw new Error("Form gönderilemedi");
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      const subject = encodeURIComponent("Yeni İletişim Formu");
      const body = encodeURIComponent(
        [
          `Ad Soyad: ${name}`,
          `E-posta: ${email}`,
          `Telefon: ${phone || "-"}`,
          "",
          message
        ].join("\n")
      );
      setFallbackMailto(`mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Input name="name" placeholder="Ad Soyad" required />
        <Input name="email" type="email" placeholder="E-posta" required />
      </div>
      <Input name="phone" placeholder="Telefon" />
      <Textarea name="message" placeholder="Mesajınız" required />
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Gönderiliyor..." : "Gönder"}
      </Button>
      {status === "success" && (
        <p className="text-sm text-ink-muted">Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağım.</p>
      )}
      {status === "error" && (
        <div className="space-y-2 text-sm text-red-600">
          <p>Bir hata oluştu. Lütfen tekrar deneyin.</p>
          {fallbackMailto && (
            <a
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink"
              href={fallbackMailto}
            >
              E-posta ile gönder
            </a>
          )}
        </div>
      )}
    </form>
  );
}
