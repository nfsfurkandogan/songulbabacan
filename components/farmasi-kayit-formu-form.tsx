"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/lib/siteConfig";

type FarmasiKayitFormuFormProps = {
  kicker?: string;
  title?: string;
  description?: string;
  submitTopic?: string;
};

export default function FarmasiKayitFormuForm({
  kicker = "Farmasi Üyelik",
  title = "Hızlı Başvuru Formu",
  description = "Ücretsiz danışmanlık ve indirim şifreniz için formu doldurabilirsiniz.",
  submitTopic = "Farmasi Üyelik Başvurusu"
}: FarmasiKayitFormuFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [fallbackMailto, setFallbackMailto] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFallbackMailto(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const city = String(formData.get("city") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();

    const message = submitTopic;
    const fallbackMessage = [
      submitTopic,
      `Ad Soyad: ${name}`,
      `Telefon: ${phone}`,
      `Şehir: ${city}`,
      `E-posta: ${email || "-"}`
    ].join("\n");

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          city,
          message
        })
      });

      if (!response.ok) throw new Error("Form gönderilemedi");
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      const subject = encodeURIComponent(submitTopic);
      const body = encodeURIComponent(fallbackMessage);
      setFallbackMailto(`mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <p className="section-kicker">{kicker}</p>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-ink-muted">{description}</p>
      </div>
      <div className="grid gap-4">
        <label className="space-y-2 text-sm font-semibold text-ink">
          <span>Ad - Soyad</span>
          <Input name="name" placeholder="Ad Soyad" autoComplete="name" required />
        </label>
        <label className="space-y-2 text-sm font-semibold text-ink">
          <span>Telefon Numarası</span>
          <Input
            name="phone"
            type="tel"
            placeholder="05xx xxx xx xx"
            autoComplete="tel"
            inputMode="tel"
            required
          />
        </label>
        <label className="space-y-2 text-sm font-semibold text-ink">
          <span>Şehir</span>
          <Input
            name="city"
            autoComplete="address-level2"
            placeholder="İl / İlçe"
            required
          />
        </label>
        <label className="space-y-2 text-sm font-semibold text-ink">
          <span>Mail Adresi (opsiyonel)</span>
          <Input name="email" type="email" placeholder="ornek@mail.com" autoComplete="email" />
        </label>
      </div>
      <Button type="submit" disabled={status === "loading"} className="w-full">
        {status === "loading" ? "Gönderiliyor..." : "Formu Gönder"}
      </Button>
      <p className="text-xs text-ink-muted">
        Göndererek KVKK metnini kabul etmiş olursunuz. <a className="font-semibold text-ink" href="/kvkk">KVKK</a>
      </p>
      {status === "success" && (
        <p className="text-sm text-ink-muted">
          Formunuz alındı. En kısa sürede sizinle iletişime geçeceğim.
        </p>
      )}
      {status === "error" && (
        <div className="space-y-2 text-sm text-red-600">
          <p>Bir hata oluştu. Lütfen tekrar deneyin.</p>
          {fallbackMailto && (
            <a className="inline-flex items-center gap-2 font-semibold text-ink" href={fallbackMailto}>
              E-posta ile gönder
            </a>
          )}
        </div>
      )}
    </form>
  );
}
