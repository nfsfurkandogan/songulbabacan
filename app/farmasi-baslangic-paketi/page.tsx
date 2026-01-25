import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import JoinTrigger from "@/components/join-trigger";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Farmasi Başlangıç Paketi",
  description: "Kazanmak için başla. Çünkü sen buna değersin.",
  path: "/farmasi-baslangic-paketi"
});

const highlights = [
  {
    title: "Düşük maliyetli başlangıç",
    description:
      "Girişimcilik yolculuğunuza düşük maliyetli paketlerle avantajlı bir başlangıç yapın."
  },
  {
    title: "Esnek çalışma saatleri",
    description: "Kendi planınıza uygun şekilde esnek bir çalışma düzeni kurun."
  },
  {
    title: "Doğal ürünler",
    description: "Geniş ürün yelpazesiyle müşterilerinize güvenle hizmet verin."
  },
  {
    title: "Dijital destek",
    description: "Dijital içerik ve mentorluk desteğiyle işinizi büyütün."
  }
];

const faq = [
  {
    question: "Farmasi Başlangıç Paketi ne sağlar?",
    answer:
      "Düşük maliyetle girişimciliğe adım atmanızı, ürünleri tanıyarak güvenle satışa başlamanızı sağlar."
  },
  {
    question: "Kimler için uygundur?",
    answer:
      "Girişimcilik dünyasına adım atmak isteyen, esnek çalışma modeli arayan herkes için uygundur."
  },
  {
    question: "Nasıl başlayabilirim?",
    answer:
      "Kayıt formunu doldurarak ya da WhatsApp üzerinden benimle iletişime geçerek süreci başlatabilirsiniz."
  }
];

export default function StarterKitPage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <p className="section-kicker">Farmasi Başlangıç Paketi</p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Girişimcilik yolunda ilk adımınızı atın.
            </h1>
            <p className="text-ink-muted md:text-lg">
              Farmasi Başlangıç Paketi, girişimcilik yolculuğunuza avantajlı bir başlangıç yapmanızı
              sağlar. Düşük maliyetli paketlerle hem kazanç elde edebilir hem de geniş ürün
              yelpazesiyle müşterilerinize güvenle hizmet verebilirsiniz.
            </p>
            <div className="flex flex-wrap gap-3">
              <JoinTrigger>Üye Ol</JoinTrigger>
              <Button asChild variant="outline">
                <Link href="/katalog">Kataloğu Gör</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />
            <Image
              src="/product-3.jpg"
              alt=""
              width={520}
              height={520}
              className="rounded-2xl border border-white/60 object-cover shadow-lift"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          {highlights.map((item) => (
            <div key={item.title} className="glass-card p-6">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-section-glow">
        <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="section-kicker">Fırsatlar</p>
            <h2 className="section-title">Avantajlı bir başlangıç modeli</h2>
            <p className="text-ink-muted">
              Farmasi, düşük maliyetli iş kurma fırsatları ve zengin ürün yelpazesiyle girişimciler
              için güçlü bir model sunar. Esnek çalışma saatleri ve mentorluk desteği ile
              sürdürülebilir bir sistem kurabilirsiniz.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold">Sık sorulan sorular</h3>
            <div className="mt-4 space-y-4 text-sm text-ink-muted">
              {faq.map((item) => (
                <div key={item.question}>
                  <p className="font-semibold text-ink">{item.question}</p>
                  <p className="mt-1">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Farmasi Başlangıç Paketi",
          description: "Farmasi başlangıç paketi ile girişimcilik fırsatları.",
          url: `${siteConfig.url}/farmasi-baslangic-paketi`,
          inLanguage: "tr-TR"
        }}
      />
    </>
  );
}
