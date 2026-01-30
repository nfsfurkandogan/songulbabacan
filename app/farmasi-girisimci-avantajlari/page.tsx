import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import JoinTrigger from "@/components/join-trigger";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Farmasi Girişimci Avantajları",
  description: "Kazanmak için başla. Çünkü sen buna değersin.",
  path: "/farmasi-girisimci-avantajlari"
});

const advantages = [
  {
    title: "Güçlü kazanç planları",
    description: "Hedeflere uygun planlama ile sürdürülebilir gelir modeli."
  },
  {
    title: "Esnek çalışma saatleri",
    description: "Kendi programınıza göre çalışma esnekliği."
  },
  {
    title: "Dijital destek",
    description: "Dijital içerik ve mentorluk ile görünürlük desteği."
  },
  {
    title: "Düşük maliyetli başlangıç",
    description: "Düşük maliyetlerle kendi işinizi kurma fırsatı."
  }
];

const faq = [
  {
    question: "Farmasi girişimciliği kimler için uygun?",
    answer:
      "Kendi işini kurmak isteyen, esnek çalışma modeli arayan ve gelişime açık herkes için uygundur."
  },
  {
    question: "Kazanç planları nasıl işler?",
    answer:
      "Satış ve ekip performansına göre kurgulanan kazanç planları ile hedeflerinizi netleştirebilirsiniz."
  },
  {
    question: "Dijital destek neleri kapsar?",
    answer:
      "İçerik planı, sosyal medya görünürlüğü ve eğitim desteği ile dijital büyüme sağlanır."
  }
];

export default function EntrepreneurAdvantagesPage() {
  return (
    <>
      <section className="section bg-hero-sheen hero-compact">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <p className="section-kicker">Farmasi Girişimci Avantajları</p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Kendi işinizi kurmanın yolu.
            </h1>
            <p className="text-ink-muted md:text-lg">
              Farmasi, girişimcilere sunduğu iş fırsatları ile kendi işini kurmak isteyenlere büyük
              avantajlar sağlıyor. Güçlü kazanç planları, esnek çalışma saatleri ve dijital
              desteklerle hedeflerinize ulaşmanıza yardımcı oluyor.
            </p>
            <div className="flex flex-wrap gap-3">
              <JoinTrigger>Üye Ol</JoinTrigger>
              <Button asChild variant="outline">
                <Link href="/kazanc-plani">Kazanç Planı</Link>
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
              src="/hero-handshake.png"
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
          {advantages.map((item) => (
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
            <h2 className="section-title">Finansal özgürlüğe giden yol</h2>
            <p className="text-ink-muted">
              Günümüz dünyasında kendi işini kurmak ve finansal özgürlüğe ulaşmak pek çok insanın
              hayali. Farmasi, girişimciliği destekleyen iş modeliyle düşük maliyetlerle kendi
              işinizi kurmanıza olanak tanır.
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
          name: "Farmasi Girişimci Avantajları",
          description: "Farmasi girişimci avantajları ve iş fırsatları.",
          url: `${siteConfig.url}/farmasi-girisimci-avantajlari`,
          inLanguage: "tr-TR"
        }}
      />
    </>
  );
}
