import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import CtaStrip from "@/components/cta-strip";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Hakkında",
  description:
    "Farmasi'nin tarihçesi, ürün grupları, çevre dostu yaklaşımı ve girişimcilik modeli hakkında genel bakış.",
  path: "/hakkinda"
});

const heroImage = "/hero-spa.jpg";

const highlights = [
  {
    title: "1950'lerden bugüne",
    desc: "Dr. Cevdet Tuna tarafından temelleri atılan Farmasi, yerli üretim gücüyle büyüyen küresel bir markadır."
  },
  {
    title: "Geniş ürün yelpazesi",
    desc: "Cilt bakımı, makyaj, kişisel bakım, sağlık ve temizlik kategorilerinde geniş seçenekler sunar."
  },
  {
    title: "Güven ve kalite",
    desc: "ISO ve GMP standartları, dermatolojik testler ve cruelty-free yaklaşımı ile güvenilir içerikler."
  }
];

const seriesHighlights = [
  {
    title: "Dr. Cevdet Tuna Çay Ağacı Serisi",
    desc: "Yağlı ve problemli ciltler için arındırıcı ve dengeleyici bakım."
  },
  {
    title: "BB Krem Serisi",
    desc: "Günlük kullanım için hafif dokulu, doğal bitişli makyaj çözümleri."
  },
  {
    title: "Age Reversist",
    desc: "Yaşlanma karşıtı bakımla daha canlı ve toparlanmış cilt görünümü."
  },
  {
    title: "Naturelle Aloe Vera",
    desc: "Hassas ciltler için nemlendirme ve yatıştırma desteği."
  }
];

const categories = [
  "Cilt bakımı ve serumlar",
  "Makyaj ve günlük kozmetik",
  "Kişisel bakım ve hijyen",
  "Saç bakımı ve besleyici seriler",
  "Parfüm ve ev temizlik ürünleri"
];

const growthItems = [
  "Dijitalde görünürlük ve satış stratejileri",
  "Ekip kurma ve liderlik gelişimi",
  "Eğitim programları ve sürekli destek",
  "Esnek çalışma ve ek gelir modeli"
];

export default function AboutPage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <p className="section-kicker">Hakkında</p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Farmasi hakkında: güvenilir içerikler, güçlü üretim ve girişimcilik fırsatları.
            </h1>
            <p className="text-ink-muted md:text-lg">
              Farmasi; doğal içeriklere, yerli üretime ve geniş ürün gamına odaklanan bir kozmetik
              markasıdır. Kişisel bakımdan sağlık ürünlerine uzanan portföyü ve girişimcilik modeli
              ile hem tüketicilere hem de temsilcilere yeni fırsatlar sunar.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/kayit-ol">Üye Ol</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp ile Sor
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />
            <Image
              src={heroImage}
              alt="Farmasi ürünleri"
              width={520}
              height={620}
              className="rounded-2xl border border-white/60 object-cover shadow-lift"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="glass-card p-6">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-ink-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="section-kicker">Ürün Yelpazesi</p>
            <h2 className="section-title">Her ihtiyaca uygun Farmasi kategorileri</h2>
            <p className="text-ink-muted">
              Farmasi, hem günlük bakım ihtiyaçlarını hem de profesyonel kozmetik beklentilerini
              karşılayacak geniş bir ürün ailesi sunar.
            </p>
            <ul className="space-y-2 text-sm text-ink-muted">
              {categories.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["/product-1.jpg", "/product-2.jpg", "/product-3.jpg", "/hero-spa.jpg"].map(
              (src, index) => (
                <div
                  key={src}
                  className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-soft"
                >
                  <Image
                    src={src}
                    alt={`Farmasi ürün görseli ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 36vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="section bg-section-glow">
        <div className="container space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="section-kicker">Seriler</p>
            <h2 className="section-title">Öne çıkan Farmasi serileri</h2>
            <p className="text-ink-muted">
              En çok tercih edilen bakım serileriyle rutininizi güçlendirin.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {seriesHighlights.map((item) => (
              <div key={item.title} className="glass-card p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="section-kicker">Girişimcilik</p>
            <h2 className="section-title">Network marketing ile girişimcilik fırsatları</h2>
            <p className="text-ink-muted">
              Farmasi; bireylerin kendi işlerini kurmasına, dijital kanallarda görünür olmasına ve
              liderlik becerilerini geliştirmesine destek olur.
            </p>
            <div className="glass-card p-6 text-sm text-ink-muted">
              Global pazarlardaki güçlü ağı ve dijital altyapısı ile Farmasi, temsilcilerine
              sürdürülebilir gelir modeli kurma fırsatı sunar.
            </div>
          </div>
          <div className="space-y-3">
            {growthItems.map((item) => (
              <div key={item} className="glass-card p-5 text-sm text-ink-muted">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CtaStrip
            title="Farmasi ile güçlü bir başlangıç yapın."
            description="Ücretsiz üyelik ve mentorluk desteğiyle ilk adımı birlikte planlayalım."
          />
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Farmasi Hakkında",
          url: `${siteConfig.url}/hakkinda`,
          description:
            "Farmasi'nin tarihçesi, ürün kategorileri, doğal içerik yaklaşımı ve girişimcilik modeli."
        }}
      />
    </>
  );
}
