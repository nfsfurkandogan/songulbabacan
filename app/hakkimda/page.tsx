import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import CtaStrip from "@/components/cta-strip";
import JoinTrigger from "@/components/join-trigger";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Hakkımda",
  description: "Kazanmak için başla. Çünkü sen buna değersin.",
  path: "/hakkimda"
});

const journeyHighlights = [
  {
    title: "Girişimcilik ve Kişisel Gelişim Yolculuğum",
    description:
      "Evli iki çocuk annesi bir girişimci anne olarak, network marketing ve kişisel gelişim alanlarında yıllardır edindiğim deneyimleri ilham vermek ve yol göstermek için paylaşıyorum."
  },
  {
    title: "Başlangıç ve Girişimcilik Yolculuğu",
    description:
      "İş dünyasına ilk adım attığımda, hedefim sadece bir iş kurmak değil; insanlara ilham verecek bir lider olmaktı."
  },
  {
    title: "Kişisel Gelişim ve Sürekli Öğrenme",
    description:
      "Kariyerimde elde ettiğim başarının temelinde, kişisel gelişim ve sürekli öğrenmeye olan bağlılığım yatıyor."
  },
  {
    title: "Network Marketing’de Liderlik",
    description:
      "Bir ekibi motive etmek ve onların potansiyelini açığa çıkarmak, en güçlü yanlarımdan biri."
  }
];

const serviceItems = [
  "Network marketing ve kişisel gelişim alanında rehberlik",
  "Motivasyon, öz disiplin ve zaman yönetimi eğitimleri",
  "Takım kurma, ekip yönetimi ve liderlik desteği",
  "Kendi başarı hikayenizi yazmanız için stratejik planlama"
];

export default function AboutMePage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <p className="section-kicker">Hakkımda</p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Songül Babacan kimdir? Girişimcilik, liderlik ve kişisel gelişim yolculuğu.
            </h1>
            <p className="text-ink-muted md:text-lg">
              Kariyerime adım attığım ilk günden itibaren, hem kendimi geliştirme hem de çevremdeki
              insanlara destek olma misyonunu benimsedim. Şu anda, kişisel gelişim ve network
              marketing alanında sunduğum eğitimlerle, başkalarına da kendi başarı hikayelerini
              yazmaları için rehberlik ediyorum.
            </p>
            <div className="flex flex-wrap gap-3">
              <JoinTrigger>Üye Ol</JoinTrigger>
              <Button asChild variant="outline">
                <Link
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp ile Yaz
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/hizmetlerim">Hizmetlerim</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />
            <Image
              src="/portrait.png"
              alt="Songül Babacan"
              width={520}
              height={620}
              className="rounded-2xl border border-white/60 object-cover shadow-lift"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="section-kicker">Yolculuğum</p>
            <h2 className="section-title">Girişimcilik ve liderlik yaklaşımım</h2>
            <p className="text-ink-muted">
              Network marketing ile tanışmam, hedeflerime ulaşmamda büyük bir dönüm noktası oldu.
              Bu iş modelinin sunduğu özgürlük ve esneklik, bana hem kendi işimi kurma hem de
              başkalarının hayatlarına dokunma fırsatı sundu. Kısa sürede edindiğim tecrübeler ve
              geliştirdiğim stratejilerle, network marketing dünyasında sağlam bir yer edindim ve
              pek çok kişiye ilham oldum.
            </p>
          </div>
          <div className="grid gap-4">
            {journeyHighlights.map((item) => (
              <div key={item.title} className="glass-card p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-section-glow">
        <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="section-kicker">Kişisel Gelişim</p>
            <h2 className="section-title">Sürekli öğrenme ile güçlenen liderlik</h2>
            <p className="text-ink-muted">
              Hayat boyu öğrenmenin, sadece iş hayatında değil, tüm yaşam alanlarında başarıya
              giden yol olduğunu savunuyorum. Bu inancımla, başkalarına da motivasyon, öz disiplin,
              zaman yönetimi ve liderlik gibi konularda eğitimler veriyorum.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold">Sunduğum Hizmetler</h3>
            <p className="mt-2 text-sm text-ink-muted">
              Hedefim, başarıya ulaşma yolunda doğru stratejileri uygulamanız için size yol
              göstermek.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-muted">
              {serviceItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CtaStrip
            title="Başarı hikayenizi birlikte yazalım."
            description="Hedeflerinize ulaşmanız için mentorluk, eğitim ve ekip desteğiyle yanınızdayım."
          />
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: siteConfig.name,
          url: `${siteConfig.url}/hakkimda`,
          description:
            "Girişimcilik, network marketing ve kişisel gelişim alanlarında mentorluk.",
          sameAs: Object.values(siteConfig.social).filter(Boolean)
        }}
      />
    </>
  );
}
