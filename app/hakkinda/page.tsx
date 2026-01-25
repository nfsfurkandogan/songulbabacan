import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import { prImages } from "@/lib/pr-images";

export const metadata = createMetadata({
  title: "Hakkında",
  description:
    "Songül Babacan'ın girişimcilik yolculuğu, mentorluk yaklaşımı ve kadın girişimcilere sağladığı destek.",
  path: "/hakkinda"
});

const heroImage = prImages[2];
const galleryImages = [prImages[9], prImages[10]];

export default function AboutPage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <p className="section-kicker">Hakkında</p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Başarıyı sistemleştiren, ilham veren bir mentorluk yaklaşımı.
            </h1>
            <p className="text-ink-muted md:text-lg">
              Songül Babacan, kadın girişimcilerin sürdürülebilir gelir modeli kurmasına ve ekip
              liderliğini geliştirmesine odaklanan bir mentordur. Farmasi ile işini büyütmek isteyen
              herkese stratejik yol haritası sunar.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />
            <Image
              src={heroImage}
              alt="Songül Babacan"
              width={520}
              height={620}
              className="rounded-2xl border border-white/60 object-cover shadow-lift"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Misyon",
              desc: "Kadın girişimcilerin ekonomik bağımsızlığını güçlendirecek sistemler kurmak."
            },
            {
              title: "Vizyon",
              desc: "Topluluk odaklı liderlik kültürüyle örnek bir girişimcilik ağı oluşturmak."
            },
            {
              title: "Yaklaşım",
              desc: "Veriye dayalı planlama, düzenli takip ve kişiye özel strateji geliştirme."
            }
          ].map((item) => (
            <div key={item.title} className="glass-card p-6">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-ink-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container space-y-6">
          <div className="max-w-2xl space-y-3">
            <p className="section-kicker">Galeri</p>
            <h2 className="section-title">Mentorluk yolculuğundan anlar</h2>
            <p className="text-ink-muted">
              Ekip buluşmaları ve sahne arkası kareleri.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {galleryImages.map((src, index) => (
              <div
                key={src}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-soft"
              >
                <Image
                  src={src}
                  alt={`Songül Babacan mentorluk kareleri ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 36vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-section-glow">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="section-kicker">Mentorluk</p>
            <h2 className="section-title">Ekiplerinizi büyüten rehberlik</h2>
            <p className="text-ink-muted">
              Mentor görüşmeleri, haftalık aksiyon planı ve performans ölçümüyle büyümeyi takip
              ediyoruz. Hedeflerinize göre içerik planı, satış kanalları ve ekip yönetimi
              yapılandırılıyor.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              "Haftalık takip ve performans değerlendirmesi",
              "Yeni başlayanlar için hızlı başlangıç programı",
              "Dijital görünürlük ve içerik stratejisi",
              "Ekip motivasyonu ve liderlik becerisi geliştirme"
            ].map((item) => (
              <div key={item} className="glass-card p-5 text-sm text-ink-muted">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: siteConfig.name,
          url: `${siteConfig.url}/hakkinda`,
          description: siteConfig.description,
          sameAs: Object.values(siteConfig.social).filter(Boolean)
        }}
      />
    </>
  );
}
