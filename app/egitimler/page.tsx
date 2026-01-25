import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import CtaStrip from "@/components/cta-strip";
import JoinTrigger from "@/components/join-trigger";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Eğitimler",
  description: "Kazanmak için başla. Çünkü sen buna değersin.",
  path: "/egitimler"
});

const trainingAreas = [
  {
    title: "Kişisel Gelişim Eğitimi",
    description: "Öz disiplin, motivasyon ve güçlü hedef yönetimi."
  },
  {
    title: "Liderlik Eğitimi",
    description: "Ekip kurma, yönlendirme ve sürdürülebilir liderlik yaklaşımı."
  },
  {
    title: "Satış Eğitimi",
    description: "Müşteri ilişkileri, güven oluşturma ve etkili satış süreçleri."
  },
  {
    title: "Network Marketing",
    description: "Strateji, sistem kurma ve büyüme adımları."
  }
];

export default function TrainingsPage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <p className="section-kicker">Eğitimler</p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Girişimci Songül Babacan'ın eğitimleri ile kişisel ve profesyonel gelişiminizi
              destekleyin.
            </h1>
            <p className="text-ink-muted md:text-lg">
              Kişisel gelişim ve profesyonel başarıya ulaşmak için kapsamlı eğitim içeriklerine
              erişim sağlayan abonelik fırsatlarımızı şimdi keşfedin. Songül Babacan’ın sunduğu
              özel içeriklerle hedeflerinize ulaşmanız daha kolay olacak.
            </p>
            <div className="flex flex-wrap gap-3">
              <JoinTrigger>Üye Ol</JoinTrigger>
              <Button asChild variant="outline">
                <Link href="/iletisim">Bilgi Al</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/hizmetlerim">Hizmetlerim</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trainingAreas.map((item) => (
              <div key={item.title} className="glass-card p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="section-kicker">Eğitim Yaklaşımı</p>
            <h2 className="section-title">Net hedefler, sürdürülebilir gelişim</h2>
            <p className="text-ink-muted">
              Eğitim içerikleri; kişisel gelişim, liderlik, satış ve network marketing alanlarında
              gelişim sağlayacak şekilde yapılandırılır. Hedefleriniz doğrultusunda ilerleyerek
              güçlü bir sistem kurmanıza destek oluruz.
            </p>
          </div>
          <div className="glass-card space-y-4 p-6">
            <h3 className="text-xl font-semibold">Neler kazanırsınız?</h3>
            <ul className="space-y-2 text-sm text-ink-muted">
              {[
                "Dijital görünürlük ve içerik planlama",
                "Ekip motivasyonu ve liderlik becerileri",
                "Düzenli takip ve gelişim odaklı planlama",
                "Satış ve iletişim becerilerinde netlik"
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-section-glow">
        <div className="container">
          <CtaStrip
            title="Eğitim planınızı birlikte oluşturabiliriz."
            description="Hedefinize uygun içerik ve mentorluk için iletişime geçin."
          />
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Eğitimler",
          description:
            "Kişisel gelişim, liderlik, satış ve network marketing alanlarında eğitim içerikleri.",
          url: `${siteConfig.url}/egitimler`,
          inLanguage: "tr-TR"
        }}
      />
    </>
  );
}
