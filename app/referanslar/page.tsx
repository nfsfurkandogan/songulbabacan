import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import CtaStrip from "@/components/cta-strip";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Referanslar",
  description: "Kazanmak için başla. Çünkü sen buna değersin.",
  path: "/referanslar"
});

const referenceAreas = [
  {
    title: "Ekip başarı hikayeleri",
    description: "Gelir ve ekip kurma sürecinde oluşan deneyimler ve dönüşümler."
  },
  {
    title: "Müşteri geri bildirimleri",
    description: "Ürün deneyimi ve mentorluk sürecine dair notlar."
  },
  {
    title: "Eğitim & topluluk etkisi",
    description: "Eğitim programlarının ve topluluğun sağladığı gelişim adımları."
  }
];

export default function ReferencesPage() {
  return (
    <>
      <section className="section bg-hero-sheen hero-compact">
        <div className="container space-y-6">
          <p className="section-kicker">Referanslar</p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Güven ve sonuç odaklı bir gelişim yolculuğu.
          </h1>
          <p className="max-w-2xl text-ink-muted md:text-lg">
            Kazanmak için başla. Çünkü sen buna değersin. Burada, ekip ve iş ortaklarımın
            deneyimlerine dair özetleri paylaşıyorum. Yeni referanslar eklendikçe sayfa
            güncellenecektir.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/iletisim">Referans Paylaş</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/basari-hikayem">Başarı Hikayem</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 md:grid-cols-3">
          {referenceAreas.map((item) => (
            <div key={item.title} className="glass-card p-6">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-section-glow">
        <div className="container">
          <CtaStrip
            title="Deneyiminizi bizimle paylaşmak ister misiniz?"
            description="Görüşlerinizi ve başarı hikayenizi eklemek için iletişim sayfasından bana ulaşabilirsiniz."
          />
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Referanslar",
          description: "Songül Babacan referans ve başarı geri bildirimleri.",
          url: `${siteConfig.url}/referanslar`,
          inLanguage: "tr-TR"
        }}
      />
    </>
  );
}
