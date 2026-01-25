"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { joinModalEvent } from "@/lib/events";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
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

export default function JoinModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(joinModalEvent, handler);
    return () => window.removeEventListener(joinModalEvent, handler);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden p-0">
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
                <Link href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp ile Başla
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10"
              >
                <Link href="/iletisim">Kısa Form</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 px-8 py-10">
            <DialogHeader>
              <DialogTitle className="text-2xl">Üyelik yolculuğu</DialogTitle>
              <DialogDescription>
                3 adımda planlı, ölçülebilir ve sürdürülebilir bir sistem kuruyoruz.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
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
