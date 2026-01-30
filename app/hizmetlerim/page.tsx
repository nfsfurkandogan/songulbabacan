import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import CtaStrip from "@/components/cta-strip";
import JoinTrigger from "@/components/join-trigger";
import { Button } from "@/components/ui/button";
import { prImages } from "@/lib/pr-images";
import storyOne from "@/assets/img/aa1f31c2-e723-4df8-bf0c-7e10294a3822.jpeg";
import storyTwo from "@/assets/img/222ee8b2-6a94-4877-a568-2d39eeaac24e.jpeg";
import storyThree from "@/assets/img/b4f852e6-0770-47a4-ab9b-a93275fd095b.jpeg";
import storyFour from "@/assets/img/f9caa5f3-19ac-4529-8cb4-d1342d1a582e.jpeg";

export const metadata = createMetadata({
  title: "Hizmetlerim",
  description: "Kazanmak için başla. Çünkü sen buna değersin.",
  path: "/hizmetlerim"
});

const serviceHighlights = [
  {
    title: "Mentorluk planı",
    description: "Kişisel hedeflere göre yol haritası ve haftalık takip."
  },
  {
    title: "Ekip gelişimi",
    description: "Topluluk desteği, eğitim ritmi ve sürdürülebilir motivasyon."
  },
  {
    title: "Dijital görünürlük",
    description: "İçerik planı ve satış kanalı optimizasyonu."
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
    title: "Motivasyon ve zaman yönetimi",
    description:
      "Günlük disiplin, önceliklendirme ve sürdürülebilir çalışma rutini oluşturma."
  }
];

const heroImage = storyTwo;
const galleryImages = [storyOne, storyThree, storyFour, prImages[9]];

export default function ServicesPage() {
  return (
    <>
      <section className="section bg-hero-sheen hero-compact">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <p className="section-kicker">Hizmetlerim</p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Mentorluk, ekip yönetimi ve dijital büyüme desteği.
            </h1>
            <p className="text-ink-muted md:text-lg">
              Net bir hedef, doğru strateji ve düzenli mentorlukla sürdürülebilir bir gelir modeli
              kurmanıza yardımcı oluyorum. Başlangıçtan büyümeye kadar tüm adımlarda yanınızdayım.
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
          <div className="space-y-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-lift">
              <Image
                src={heroImage}
                alt="Songül Babacan mentorluk"
                width={520}
                height={620}
                className="h-[420px] w-full object-cover md:h-[460px]"
                priority
              />
            </div>
            <ul className="space-y-3 text-sm text-ink-muted">
              {serviceHighlights.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                  <div>
                    <p className="font-semibold text-ink">{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-8">
          <div className="space-y-3">
            <p className="section-kicker">Hizmetler</p>
            <h2 className="section-title">Net, uygulanabilir bir gelişim planı</h2>
            <p className="text-ink-muted">
              Hedeflerinize göre sade bir yol haritası çiziyor, her adımda ölçülebilir sonuçlar
              hedefliyoruz.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold">Network Marketing</h3>
              <p className="mt-3 text-sm text-ink-muted">
                Doğru strateji, ürün bilgisi ve ekip yönetimiyle güçlü bir temel kuruyoruz.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold">Kişisel Gelişim</h3>
              <p className="mt-3 text-sm text-ink-muted">
                Hedef netliği, disiplin ve sürdürülebilir motivasyonla büyümeyi destekliyoruz.
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
              Hedeflerinize ulaşmanız için buradayım.
            </p>
            <p className="text-sm text-ink-muted md:text-base">
              Size özel bir plan oluşturmak için iletişime geçebilir ya da hızlı başvuru formunu
              doldurabilirsiniz.
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
                key={typeof src === "string" ? src : src.src}
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
