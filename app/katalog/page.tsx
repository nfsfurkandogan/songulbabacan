import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import CtaStrip from "@/components/cta-strip";

const catalogPdf = "https://songulbabacan.com/wp-content/uploads/2024/10/EKIM_2024_KATALOG.pdf";

const categories = [
  {
    title: "Makyaj",
    desc: "Fondoten, ruj, far ve trend makyaj urunleri."
  },
  {
    title: "Cilt Bakimi",
    desc: "Serumlar, nemlendiriciler ve temizleyiciler."
  },
  {
    title: "Sac Bakimi",
    desc: "Sampuan, maske, serum ve ozel bakim serileri."
  },
  {
    title: "Kisisel Bakim",
    desc: "Vucut, el, ayak bakimi ve hijyen urunleri."
  },
  {
    title: "Ev & Temizlik",
    desc: "Dogal icerikli ev temizligi urunleri."
  },
  {
    title: "Takviye",
    desc: "Omega 3, D2K3, B12 ve diger destekler."
  }
];

const steps = [
  "Katalogu PDF olarak goruntuleyip urunleri inceleyin.",
  "Istediginiz urunleri not alin ve bana iletin.",
  "Size ozel fiyat/avantaj bilgisini paylasayim.",
  "Siparis ve teslimat surecini birlikte planlayalim."
];

export const metadata = createMetadata({
  title: "Katalog",
  description: "Farmasi katalogu ile urunleri, kampanyalari ve sezon firsatlarini kesfedin.",
  path: "/katalog"
});

export default function CatalogPage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="section-kicker">Katalog</p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Farmasi katalogu ile sezon firsatlarini yakalayin.
            </h1>
            <p className="max-w-2xl text-ink-muted md:text-lg">
              Her ay guncellenen katalog ile urun gruplarini, kampanyalari ve yeni lansmanlari tek
              sayfada goruntuleyin.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={catalogPdf} target="_blank" rel="noopener noreferrer">
                  PDF'i Goruntule
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp ile Bilgi Al
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["/product-1.jpg", "/product-2.jpg", "/product-3.jpg", "/hero-spa.jpg"].map(
              (src) => (
                <div key={src} className="glass-card overflow-hidden">
                  <Image
                    src={src}
                    alt="Farmasi urun"
                    width={320}
                    height={240}
                    className="h-full w-full object-cover"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="section-kicker">Kategoriler</p>
            <h2 className="section-title">Katalogda neler var?</h2>
            <p className="text-ink-muted">
              Kozmetikten temizlik urunlerine kadar genis bir yelpaze. Ihtiyaciniza uygun setleri
              birlikte belirleyelim.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((item) => (
              <div key={item.title} className="glass-card p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-section-glow">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="section-kicker">Erisim</p>
            <h2 className="section-title">Katalogu nasil kullanirsiniz?</h2>
            <p className="text-ink-muted">
              Size uygun urunleri birlikte secip, fiyat avantajlarini planlayalim.
            </p>
            <div className="space-y-3">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-xs font-semibold text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-ink-muted">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold">PDF onizleme</h3>
            <p className="mt-2 text-sm text-ink-muted">
              PDF dosyasini yeni sekmede acarak indirip paylasabilirsiniz.
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Farmasi katalog"
                src={catalogPdf}
                className="h-96 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CtaStrip
            title="Katalogu birlikte inceleyelim."
            description="Ihtiyac duydugunuz urunler icin size ozel fiyat ve kampanya bilgisini paylasayim."
          />
        </div>
      </section>
    </>
  );
}
