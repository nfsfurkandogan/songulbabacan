"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const sponsorCode = siteConfig.sponsorCode ?? "0001109";

const buildMessage = (formData: FormData) => {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const city = String(formData.get("city") ?? "").trim();
  const note = String(formData.get("note") ?? "").trim();

  const lines = [
    "Farmasi Başvuru Formu",
    `Sponsor Kod: ${sponsorCode}`,
    `İsim Soyisim: ${name}`,
    `Telefon: ${phone}`
  ];

  if (city) lines.push(`Şehir: ${city}`);
  if (note) lines.push(`Not: ${note}`);

  return lines.join("\n");
};

export default function JoinApplicationForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [hint, setHint] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    setHint("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const submitter = (event.nativeEvent as SubmitEvent).submitter as
      | HTMLButtonElement
      | null;
    const channel = submitter?.value ?? "whatsapp";

    const name = String(formData.get("name") ?? "").trim();
    if (!name) {
      setStatus("error");
      setHint("Lütfen isim soyisim alanını doldurun.");
      return;
    }

    const message = buildMessage(formData);

    if (channel === "email") {
      const subject = encodeURIComponent("Farmasi Başvuru Formu");
      const body = encodeURIComponent(message);
      window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      setHint("E-posta istemciniz açıldı. Mesajınızı gönderebilirsiniz.");
      return;
    }

    const whatsappUrl = `${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setStatus("success");
    setHint("WhatsApp açıldı. Mesajınızı kontrol edip gönderebilirsiniz.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <p className="section-kicker">Farmasi Başvuru</p>
        <h3 className="text-xl font-semibold">Form</h3>
      </div>
      <div className="grid gap-4">
        <label className="space-y-2 text-sm font-semibold text-ink">
          <span>İsim Soyisim</span>
          <Input name="name" autoComplete="name" required />
        </label>
        <label className="space-y-2 text-sm font-semibold text-ink">
          <span>Telefon</span>
          <Input name="phone" autoComplete="tel" inputMode="tel" required />
        </label>
        <label className="space-y-2 text-sm font-semibold text-ink">
          <span>Şehir (opsiyonel)</span>
          <Input name="city" autoComplete="address-level2" />
        </label>
        <label className="space-y-2 text-sm font-semibold text-ink">
          <span>Not (opsiyonel)</span>
          <Textarea name="note" rows={3} placeholder="Kısa bir not yazabilirsiniz..." />
        </label>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button type="submit" name="channel" value="whatsapp">
          WhatsApp ile Gönder
        </Button>
        <Button type="submit" name="channel" value="email" variant="outline">
          E-posta ile Gönder
        </Button>
      </div>
      {hint && (
        <p
          className={`text-sm ${
            status === "error" ? "text-red-600" : "text-ink-muted"
          }`}
        >
          {hint}
        </p>
      )}
    </form>
  );
}
