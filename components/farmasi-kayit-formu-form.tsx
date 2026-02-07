"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/siteConfig";

export default function FarmasiKayitFormuForm() {
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
    const address = String(formData.get("address") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();

    const message = "Farmasi Ücretsiz Kayıt Başvurusu";
    const fallbackMessage = [
      "Farmasi Ücretsiz Kayıt",
      `Ad Soyad: ${name}`,
      `Telefon: ${phone}`,
      `Şehir Adresi: ${address}`,
      `E-posta: ${email || "-"}`
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          message
        })
      });

      if (!response.ok) throw new Error("Form gönderilemedi");
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      const subject = encodeURIComponent("Farmasi Ücretsiz Kayıt");
      const body = encodeURIComponent(fallbackMessage);
      setFallbackMailto(`mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <p className="section-kicker">Farmasi Ücretsiz Kayıt</p>
        <h2 className="text-xl font-semibold">Hızlı Form</h2>
        <p className="text-sm text-ink-muted">
          1 dakika içinde tamamlayın. Bilgileriniz sadece kayıt süreci için kullanılır.
        </p>
      </div>
      <div className="grid gap-4">
        <label className="space-y-2 text-sm font-semibold text-ink">
          <span>Adı - Soyadı</span>
          <Input name="name" placeholder="Ad Soyad" autoComplete="name" required />
        </label>
        <label className="space-y-2 text-sm font-semibold text-ink">
          <span>Telefon No</span>
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
          <span>Şehir Adresi</span>
          <Textarea
            name="address"
            autoComplete="street-address"
            rows={3}
            placeholder="İl / İlçe ve açık adres"
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
