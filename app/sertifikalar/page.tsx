import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import CtaStrip from "@/components/cta-strip";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Sertifikalar",
  description: "Kazanmak için başla. Çünkü sen buna değersin.",
  path: "/sertifikalar"
});

const certificateFocus = [
  {
    title: "Güvenli Üretim",
    description: "Ürün güvenliği ve sağlık standartları, sertifikalarımız ile desteklenir."
  },
  {
    title: "Kalite Yaklaşımı",
    description: "Ürün geliştirme ve kalite süreçlerinde sistematik kontrol uygulanır."
  },
  {
    title: "Sorumlu Üretim",
    description: "Sağlık ve güvenliği önceleyen sorumlu üretim anlayışı."
  }
];

export default function CertificatesPage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container space-y-6">
          <p className="section-kicker">Sertifikalar</p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Sertifikalarımızı inceleyin.
          </h1>
          <p className="max-w-2xl text-ink-muted md:text-lg">
            Farmasi’de güvenliğiniz ve sağlığınız sertifikalarımız ile garanti altındadır. Ürün
            kalitesi ve güvenliği için sürdürülen süreçleri burada topluyoruz.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/katalog">Kataloğu Gör</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/iletisim">Bilgi Al</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 md:grid-cols-3">
          {certificateFocus.map((item) => (
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
            title="Sertifika detayları için bizimle iletişim kurun."
            description="Güvenlik ve kalite standartları hakkında detaylı bilgi almak için iletişim sayfasını kullanabilirsiniz."
          />
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Sertifikalar",
          description: "Farmasi ürün sertifikaları ve kalite güvencesi.",
          url: `${siteConfig.url}/sertifikalar`,
          inLanguage: "tr-TR"
        }}
      />
    </>
  );
}
