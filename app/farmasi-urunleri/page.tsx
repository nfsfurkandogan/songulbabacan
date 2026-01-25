import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import JoinTrigger from "@/components/join-trigger";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Farmasi Ürünleri",
  description: "Kazanmak için başla. Çünkü sen buna değersin.",
  path: "/farmasi-urunleri"
});

const productHighlights = [
  {
    title: "Cilt Dostu Formüller",
    description:
      "Paraben, alkol ve yapay renk maddeleri içermeyen seçenekler; hassas ciltler için ideal."
  },
  {
    title: "Uzun Süreli Koruma",
    description:
      "Gün boyu tazelik hedefleyen formüller, terlemeyi kontrol etmeye ve kötü kokuyu önlemeye yardımcı olur."
  },
  {
    title: "Doğal İçerikler",
    description:
      "Bitkisel özler ve doğal bileşenler ile hem cilt hem de çevre dostu yaklaşım."
  },
  {
    title: "Çeşitli Seçenekler",
    description:
      "Klasik, ferah ve spor kullanıma uygun alternatiflerle farklı ihtiyaçlara cevap verir."
  },
  {
    title: "Ekonomik ve Etkili",
    description:
      "Yüksek performansı bütçe dostu fiyatlarla buluşturarak ulaşılabilir kalite sunar."
  }
];

const categoryCards = [
  {
    title: "Kişisel Bakım",
    description: "Deodorant, vücut bakım ve günlük rutin ürünleri.",
    image: "/product-1.jpg"
  },
  {
    title: "Kozmetik",
    description: "Makyaj ve cilt ürünlerinde pratik çözümler.",
    image: "/product-2.jpg"
  },
  {
    title: "Parfüm & Koku",
    description: "Günlük kullanım için kalıcı ve hafif seçenekler.",
    image: "/product-3.jpg"
  }
];

export default function FarmasiProductsPage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <p className="section-kicker">Farmasi Ürünleri</p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Farmasi ürünleri ile günlük bakımda güvenilir çözümler.
            </h1>
            <p className="text-ink-muted md:text-lg">
              Farmasi, kozmetik ve kişisel bakım ürünlerinde uzun yıllardır kaliteli ürünleriyle
              tanınan bir markadır. Özellikle deo altyapılı ürünler, cilt dostu formülleri ve uzun
              süreli koruma sağlayan yapılarıyla dikkat çeker.
            </p>
            <div className="flex flex-wrap gap-3">
              <JoinTrigger>Üye Ol</JoinTrigger>
              <Button asChild variant="outline">
                <Link href="/katalog">Kataloğu Gör</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {categoryCards.map((card) => (
              <div key={card.title} className="glass-card p-4">
                <Image
                  src={card.image}
                  alt=""
                  width={320}
                  height={240}
                  className="h-40 w-full rounded-xl object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="section-kicker">Öne Çıkan Özellikler</p>
            <h2 className="section-title">Deo altyapılı Farmasi ürünleri</h2>
            <p className="text-ink-muted">
              Farmasi deodorantları, cildin doğal dengesini koruyacak şekilde formüle edilmiştir.
              Doğal içerikler, uzun süreli koruma ve ekonomik fiyatlar bu ürünlerin öne çıkan
              özelliklerindendir. Doğru ürünü seçerek hem konforlu hem de sağlıklı bir bakım
              deneyimi yaşayabilirsiniz.
            </p>
          </div>
          <div className="grid gap-4">
            {productHighlights.map((item) => (
              <div key={item.title} className="glass-card p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-section-glow">
        <div className="container grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <p className="section-kicker">Katalog & Destek</p>
            <h2 className="section-title">Ürünleri yakından inceleyin</h2>
            <p className="text-ink-muted">
              Farmasi ürünlerini kategorilere göre incelemek, detaylı bilgi almak ve ihtiyaçlarınıza
              uygun seçimler yapmak için katalogu kullanabilirsiniz. Yardımcı olmamı isterseniz
              WhatsApp üzerinden hızlıca ulaşabilirsiniz.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/katalog">Kataloğu Aç</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/iletisim">İletişime Geç</Link>
              </Button>
            </div>
          </div>
          <div className="glass-card p-5">
            <Image
              src="/product-2.jpg"
              alt=""
              width={520}
              height={420}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Farmasi Ürünleri",
          description: "Farmasi kişisel bakım ve kozmetik ürünleri hakkında bilgiler.",
          url: `${siteConfig.url}/farmasi-urunleri`,
          inLanguage: "tr-TR"
        }}
      />
    </>
  );
}
