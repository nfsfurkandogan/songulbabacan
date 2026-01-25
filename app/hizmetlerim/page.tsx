import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import CtaStrip from "@/components/cta-strip";
import JoinTrigger from "@/components/join-trigger";
import { Button } from "@/components/ui/button";
import { prImages } from "@/lib/pr-images";

export const metadata = createMetadata({
  title: "Hizmetlerim",
  description: "Kazanmak için başla. Çünkü sen buna değersin.",
  path: "/hizmetlerim"
});

const serviceHighlights = [
  {
    title: "Network Marketing Rehberliği",
    description:
      "Doğru strateji ve eğitimle sürdürülebilir büyüme, yeni pazarlama yöntemleriyle görünürlük."
  },
  {
    title: "Kişisel Gelişim Mentorluğu",
    description:
      "İş hayatı, ilişkiler ve kariyer gelişiminde rehberlik ile güçlü bir dönüşüm."
  },
  {
    title: "Takım Kurma Becerileri",
    description: "Takım kurma becerilerinizi güçlendirerek sağlam bir ekip altyapısı kurma."
  },
  {
    title: "Sürekli Gelişim",
    description: "Kendinizi sürekli geliştirerek network marketing’de fark yaratma."
  }
];

const serviceDetails = [
  {
    title: "Eğitim ve mentorluk programları",
    description:
      "Başlangıçtan ileri seviyeye kadar satış, ürün bilgisi ve ekip yönetimi eğitimleri."
  },
  {
    title: "Ekip yönetimi ve liderlik becerileri",
    description:
      "Takım kurma, hedef koyma ve sürdürülebilir motivasyon için liderlik desteği."
  },
  {
    title: "Online strateji ve dijital pazarlama",
    description:
      "Sosyal medya içerik planı, görünürlük ve dijital satış kanalı optimizasyonu."
  },
  {
    title: "Kendini tanıma ve hedef belirleme",
    description:
      "Kişisel hedeflerin netleşmesi, güçlü yanların ortaya çıkarılması ve yol haritası."
  },
  {
    title: "Motivasyon ve zaman yönetimi",
    description:
      "Günlük disiplin, önceliklendirme ve sürdürülebilir çalışma rutini oluşturma."
  },
  {
    title: "Stres yönetimi ve öz farkındalık",
    description:
      "Zorlu süreçlerde dengeyi koruma, iç motivasyonu güçlendirme ve zihinsel dayanıklılık."
  }
];

const galleryImages = [prImages[0], prImages[2], prImages[8], prImages[9]];

export default function ServicesPage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <p className="section-kicker">Hizmetlerim</p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Network marketing ve kişisel gelişim odağında profesyonel hizmetler.
            </h1>
            <p className="text-ink-muted md:text-lg">
              İş dünyasında başarılı olmanın en önemli yollarından biri, kendinizi sürekli
              geliştirmeniz ve doğru stratejilerle hareket etmenizdir. Özellikle Network marketing
              gibi hızla büyüyen bir sektörde hem kişisel gelişim hem de etkili pazarlama
              yöntemleriyle fark yaratmanız gerekiyor. Network marketing ve kişisel gelişim
              hizmetlerim, işinizde yükselmenize ve hedeflerinize ulaşmanıza yardımcı olmak için
              tasarlandı.
            </p>
            <div className="flex flex-wrap gap-3">
              <JoinTrigger>Üye Ol</JoinTrigger>
              <Button asChild variant="outline">
                <Link
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/kazanc-plani">Kazanç Planı</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {serviceHighlights.map((item) => (
              <div key={item.title} className="glass-card p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-8">
          <div className="space-y-3">
            <p className="section-kicker">Hizmetler</p>
            <h2 className="section-title">
              Network Marketing ve Kişisel Gelişim Alanında Profesyonel Hizmetlerimle Başarıya
              Ulaşın!
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold">Network Marketing</h3>
              <p className="mt-3 text-sm text-ink-muted">
                Network marketing, doğru strateji ve eğitimle inanılmaz fırsatlar sunan bir iş
                modelidir. Ancak başarıya ulaşmak için kendinizi bu alanda sürekli geliştirmeniz,
                yeni pazarlama yöntemlerini öğrenmeniz ve takım kurma becerilerinizi güçlendirmeniz
                gerekir. İşte bu noktada sunduğum Network Marketing hizmetleri devreye giriyor.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold">Kişisel Gelişim</h3>
              <p className="mt-3 text-sm text-ink-muted">
                Network marketing’de başarılı olmanın en önemli şartlarından biri, güçlü bir
                kişisel gelişim yolculuğuna çıkmaktır. İş hayatında, ilişkilerde ve kariyer
                gelişiminde size rehberlik edecek kişisel gelişim hizmetlerim, sadece iş dünyasında
                değil, hayatın her alanında daha güçlü olmanıza yardımcı olur.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {serviceDetails.map((item) => (
              <div key={item.title} className="glass-card p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="cta-card space-y-4 p-7">
            <p className="text-sm font-semibold text-brand-600">
              Hedeflerinize ulaşmanız için buradayım!
            </p>
            <p className="text-sm text-ink-muted md:text-base">
              Network marketing ve kişisel gelişim alanında sunduğum profesyonel hizmetlerle işinizi
              ve kendinizi bir sonraki seviyeye taşımak için bana ulaşabilirsiniz. Hizmetlerim
              hakkında daha fazla bilgi almak ya da size özel bir program oluşturmak için iletişim
              sayfamdan bana ulaşabilirsiniz.
            </p>
            <p className="text-sm text-ink-muted md:text-base">
              Hemen başlayın! Bu fırsat için başvuru formunu doldurun, network marketing dünyasında
              fark yaratan bir lider olun.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="section-kicker">Mentorluk Anları</p>
            <h2 className="section-title">Ekip çalışmaları ve sahne arkası kareler</h2>
            <p className="text-ink-muted">
              Gerçek toplantılar, ilham veren buluşmalar ve birlikte büyüdüğümüz anlar.
            </p>
            <Button asChild variant="outline">
              <Link href="/basari-hikayem">Başarı Hikayemi Oku</Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {galleryImages.map((src, index) => (
              <div
                key={src}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-soft"
              >
                <Image
                  src={src}
                  alt={`Songül Babacan mentorluk fotoğrafı ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-section-glow">
        <div className="container">
          <CtaStrip
            title="Hedef odaklı bir gelişim planı oluşturalım."
            description="Doğru strateji, düzenli mentorluk ve güçlü bir ekip yapısı ile yolculuğunuzu birlikte planlayalım."
          />
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Network Marketing ve Kişisel Gelişim Hizmetleri",
          description:
            "Network marketing ve kişisel gelişim hizmetleriyle hedeflerinize ulaşmanız için rehberlik.",
          provider: {
            "@type": "Person",
            name: siteConfig.name,
            url: `${siteConfig.url}/hizmetlerim`
          },
          areaServed: "TR"
        }}
      />
    </>
  );
}
