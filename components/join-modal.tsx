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

function QuickJoinForm({ onSuccess }: { onSuccess?: () => void }) {
  const [status, setStatus] = useState<"idle" | "error">("idle");
  const [hint, setHint] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    setHint("");

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();

    if (!name || !phone) {
      setStatus("error");
      setHint("Lütfen isim ve telefon alanlarını doldurun.");
      return;
    }

    const message = [
      "Farmasi Hızlı Başvuru",
      `Sponsor Kod: ${sponsorCode}`,
      `İsim Soyisim: ${name}`,
      `Telefon: ${phone}`
    ].join("\n");

    const whatsappUrl = `${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    const popup = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (!popup) {
      setStatus("error");
      setHint("Tarayıcı açılır pencereyi engelledi. Lütfen tekrar deneyin.");
      return;
    }

    event.currentTarget.reset();
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="rounded-2xl border border-border bg-white/90 px-4 py-3 text-xs text-ink-muted">
        Sponsor Kodu: <span className="font-semibold text-ink">{sponsorCode}</span>
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
      </div>
      <Button type="submit" className="w-full">
        WhatsApp ile Gönder
      </Button>
      {hint && (
        <p className={`text-sm ${status === "error" ? "text-red-600" : "text-ink-muted"}`}>
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
      <DialogContent className="max-h-[90vh] overflow-y-auto p-0">
        <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative bg-cta-gradient px-8 py-10 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Üyelik</p>
            <DialogTitle className="mt-4 text-3xl text-white">
              Farmasi ile güvenli bir başlangıç yapın.
            </DialogTitle>
            <DialogDescription className="mt-3 text-sm text-white/80">
              Sizi dinleyip hedeflerinize göre bir yol haritası çıkarıyoruz. Kişisel mentorluk ve
              ekip desteği ile sürdürülebilir kazanç modeli oluşturuyoruz.
            </DialogDescription>
            <ul className="mt-6 space-y-3 text-sm">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
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
          <div className="space-y-6 px-8 py-10">
            <DialogHeader>
              <DialogTitle className="text-2xl">Hızlı Başvuru</DialogTitle>
              <DialogDescription>
                Sadece isim ve telefon ile WhatsApp başvurunuzu hemen oluşturun.
              </DialogDescription>
            </DialogHeader>
            <QuickJoinForm onSuccess={() => setOpen(false)} />
            <div className="rounded-2xl border border-border bg-white/80 p-4 text-sm text-ink-muted">
              Detaylı kayıt tercih ederseniz, kayıt sayfasından tüm alanları doldurabilirsiniz.
            </div>
            <div className="space-y-4">
              <p className="text-sm font-semibold text-ink">Üyelik yolculuğu</p>
              {steps.map((item, index) => (
                <div key={item.title} className="glass-card flex gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-ink-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-white/80 p-4">
              <Image
                src="/portrait.png"
                alt="Songül Babacan"
                width={72}
                height={72}
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
