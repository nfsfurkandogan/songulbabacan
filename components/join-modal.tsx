"use client";

import { useEffect, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { joinModalEvent } from "@/lib/events";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

const benefits = [
  "Ücretsiz üyelik ve hızlı başlangıç",
  "Kişisel hedeflere göre mentorluk",
  "Ekip kurma ve liderlik desteği",
  "Dijital satış ve içerik planı"
];

const steps = [
  {
    title: "Tanışma",
    desc: "Hedeflerinizi netleştiriyor, size özel bir plan oluşturuyoruz."
  },
  {
    title: "Kurulum",
    desc: "Üyelik, ürün ve dijital altyapı adımlarını birlikte tamamlıyoruz."
  },
  {
    title: "Büyüme",
    desc: "Satış ritmi ve ekip liderliği ile sürdürülebilir kazanç sağlıyoruz."
  }
];

const sponsorCode = siteConfig.sponsorCode ?? "0001109";

function QuickJoinForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [hint, setHint] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setHint("");

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();

    if (!name || !phone) {
      setStatus("error");
      setHint("Lütfen isim ve telefon alanlarını doldurun.");
      return;
    }

    const message = [
      "Farmasi Hızlı Başvuru",
      `Sponsor Kod: ${sponsorCode}`,
      `İsim Soyisim: ${name}`,
      `Telefon: ${phone}`,
      `E-posta: ${email || "-"}`
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: email || undefined,
          phone,
          message
        })
      });

      if (!response.ok) throw new Error("Gönderilemedi");
      setStatus("success");
      setHint("Başvurunuz alındı. En kısa sürede dönüş yapacağım.");
    } catch (error) {
      setStatus("error");
      setHint("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="rounded-2xl border border-border bg-white/90 px-4 py-3 text-xs text-ink-muted">
        Sponsor Kodu: <span className="font-semibold text-ink">{sponsorCode}</span>
      </div>
      <div className="grid gap-4">
        <label className="space-y-2 text-sm font-semibold text-ink">
          <span>İsim Soyisim</span>
          <Input name="name" autoComplete="name" required disabled={status === "success"} />
        </label>
        <label className="space-y-2 text-sm font-semibold text-ink">
          <span>Telefon</span>
          <Input
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            required
            disabled={status === "success"}
          />
        </label>
        <label className="space-y-2 text-sm font-semibold text-ink">
          <span>E-posta (opsiyonel)</span>
          <Input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="ornek@email.com"
            disabled={status === "success"}
          />
        </label>
      </div>
      <Button type="submit" className="w-full" disabled={status !== "idle"}>
        {status === "loading"
          ? "Gönderiliyor..."
          : status === "success"
            ? "Başvuru Alındı"
            : "Başvuruyu Gönder"}
      </Button>
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

export default function JoinModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(joinModalEvent, handler);
    return () => window.removeEventListener(joinModalEvent, handler);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[90vh] overflow-hidden p-0">
        <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative hidden bg-cta-gradient px-6 py-8 text-white md:block md:px-8 md:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Üyelik</p>
            <DialogTitle className="mt-3 text-2xl text-white md:text-3xl">
              Farmasi ile güvenli bir başlangıç yapın.
            </DialogTitle>
            <DialogDescription className="mt-3 text-sm text-white/80">
              Sizi dinleyip hedeflerinize göre bir yol haritası çıkarıyoruz. Kişisel mentorluk ve
              ekip desteği ile sürdürülebilir kazanç modeli oluşturuyoruz.
            </DialogDescription>
            <ul className="mt-5 space-y-3 text-sm">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="bg-white text-brand hover:bg-white/90">
                <Link
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  WhatsApp ile Başla
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href="/kayit-ol" onClick={() => setOpen(false)}>
                  Detaylı Kayıt
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-5 px-5 py-6 md:px-8 md:py-10">
            <div className="rounded-2xl border border-border bg-cta-gradient/10 p-4 md:hidden">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-muted">
                Üyelik
              </p>
              <p className="mt-2 text-lg font-semibold text-ink">
                Farmasi ile güvenli bir başlangıç yapın.
              </p>
              <p className="mt-2 text-sm text-ink-muted">
                Kısa bir görüşmeyle hedeflerinizi netleştirip planınızı oluşturuyoruz.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                {benefits.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl">Hızlı Başvuru</DialogTitle>
              <DialogDescription>
                Sadece isim ve telefon ile başvurunuzu hemen gönderin.
              </DialogDescription>
            </DialogHeader>
            <QuickJoinForm />
            <div className="hidden rounded-2xl border border-border bg-white/80 p-4 text-sm text-ink-muted md:block">
              Detaylı kayıt tercih ederseniz, kayıt sayfasından tüm alanları doldurabilirsiniz.
            </div>
            <div className="hidden space-y-3 md:block">
              <p className="text-sm font-semibold text-ink">Üyelik yolculuğu</p>
              <div className="grid gap-3 md:grid-cols-3">
                {steps.map((item, index) => (
                  <div key={item.title} className="glass-card p-4">
                    <div className="text-xs font-semibold text-brand">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="mt-2 text-sm font-semibold">{item.title}</p>
                    <p className="mt-1 text-xs text-ink-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden items-center gap-3 rounded-2xl border border-border bg-white/80 p-4 md:flex">
              <Image
                src="/portrait.png"
                alt="Songül Babacan"
                width={56}
                height={56}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">Songül Babacan</p>
                <p className="text-xs text-ink-muted">Mentorunuz & ekip lideri</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link href="/kazanc-plani">Kazanç Planı</Link>
              </Button>
              <Button asChild variant="soft">
                <Link href="/kayit-ol">Kayıt Sayfası</Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
