import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import JoinTrigger from "@/components/join-trigger";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Farmasi Teşvik Kampanyaları",
  description: "Kazanmak için başla. Çünkü sen buna değersin.",
  path: "/farmasi-tesvik-kampanyalari"
});

const highlights = [
  {
    title: "Düzenli teşvik fırsatları",
    description: "Başarıları ödüllendiren kampanyalarla motivasyonu artırır."
  },
  {
    title: "Kariyer basamakları",
    description: "Hedef odaklı ilerleme ile kariyerinizi hızla ileri taşıyın."
  },
  {
    title: "Kişisel gelişim",
    description: "Süreç boyunca öğrenme ve gelişimle daha güçlü bir liderlik."
  },
  {
    title: "Büyüme stratejileri",
    description: "Ekip ve satış planlarıyla sürdürülebilir büyüme sağlar."
  }
];

const faq = [
  {
    question: "Teşvik kampanyaları kimler için?",
    answer:
      "Farmasi girişimcileri için düzenli olarak sunulur ve başarıyı desteklemeyi hedefler."
  },
  {
    question: "Teşviklerden nasıl faydalanılır?",
    answer:
      "Hedef ve performans kriterlerine göre kampanyalara dahil olarak teşviklerden yararlanabilirsiniz."
  },
  {
    question: "Neler kazanılır?",
    answer:
      "Kazanç fırsatları, ödüller ve kariyer basamaklarında ilerleme imkanı sunar."
  }
];

export default function IncentiveCampaignsPage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <p className="section-kicker">Teşvik Kampanyaları</p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Başarılı girişimciler için kazanç fırsatları.
            </h1>
            <p className="text-ink-muted md:text-lg">
              Farmasi, girişimcilerini motive etmek ve başarılarını ödüllendirmek amacıyla düzenli
              olarak teşvik kampanyaları sunar. Bu kampanyalar sadece kazanç elde etmekle sınırlı
              kalmaz; aynı zamanda kariyer basamaklarını hızla tırmanmanızı sağlar.
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
              src="/product-1.jpg"
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
            <p className="section-kicker">Motivasyon</p>
            <h2 className="section-title">Başarıyı ödüllendiren sistem</h2>
            <p className="text-ink-muted">
              Farmasi’nin teşvik kampanyaları, hedeflerinize ulaşırken sizi motive eder ve kariyer
              yolculuğunuzda güçlü adımlar atmanızı sağlar.
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
          name: "Farmasi Teşvik Kampanyaları",
          description: "Farmasi teşvik kampanyaları ve girişimci motivasyonu.",
          url: `${siteConfig.url}/farmasi-tesvik-kampanyalari`,
          inLanguage: "tr-TR"
        }}
      />
    </>
  );
}
