import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import JoinTrigger from "@/components/join-trigger";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Farmasi Hoşgeldin Hediyeleri",
  description: "Kazanmak için başla. Çünkü sen buna değersin.",
  path: "/farmasi-hosgeldin-hediyeleri"
});

const highlights = [
  {
    title: "Düşük maliyetle başlangıç",
    description: "Yeni girişimciler için cazip başlangıç fırsatları."
  },
  {
    title: "Özel indirimler",
    description: "İlk siparişlerde avantajlı indirimler ve fırsatlar."
  },
  {
    title: "Sürpriz hediyeler",
    description: "Hoşgeldin kampanyalarına özel sürpriz hediyeler."
  },
  {
    title: "Geniş ürün yelpazesi",
    description: "Kozmetik ve sağlık ürünlerinde geniş seçenekler."
  }
];

const faq = [
  {
    question: "Hoşgeldin kampanyası kimler için?",
    answer:
      "Farmasi ailesine yeni katılan girişimciler için hazırlanmış özel bir başlangıç fırsatıdır."
  },
  {
    question: "Kampanya avantajları neler?",
    answer:
      "Düşük maliyetli başlangıç, özel indirimler ve hoşgeldin hediyeleri ile güçlü bir başlangıç sağlar."
  },
  {
    question: "Nasıl başvurabilirim?",
    answer:
      "Kayıt formunu doldurarak ya da WhatsApp üzerinden benimle iletişime geçerek başvurabilirsiniz."
  }
];

export default function WelcomeGiftsPage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <p className="section-kicker">Farmasi Hoşgeldin Kampanyaları</p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Girişimciler için eşsiz fırsatlar.
            </h1>
            <p className="text-ink-muted md:text-lg">
              Farmasi Hoşgeldin Kampanyaları, yeni girişimciler için düşük maliyetlerle iş kurma,
              özel indirimler ve sürpriz hediyeler sunar. İlk adımlarınızı güçlü bir şekilde
              atmanıza yardımcı olur.
            </p>
            <div className="flex flex-wrap gap-3">
              <JoinTrigger>Üye Ol</JoinTrigger>
              <Button asChild variant="outline">
                <Link href="/katalog">Kataloğu Gör</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />
            <Image
              src="/product-2.jpg"
              alt=""
              width={520}
              height={520}
              className="rounded-2xl border border-white/60 object-cover shadow-lift"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          {highlights.map((item) => (
            <div key={item.title} className="glass-card p-6">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-section-glow">
        <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="section-kicker">Hoşgeldin Avantajı</p>
            <h2 className="section-title">Güçlü bir başlangıç modeli</h2>
            <p className="text-ink-muted">
              Farmasi’nin sunduğu bu özel kampanya, yeni girişimcilerin ilk adımlarını atarken
              kazançlı ve güvenli bir şekilde başlamalarına olanak tanır.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold">Sık sorulan sorular</h3>
            <div className="mt-4 space-y-4 text-sm text-ink-muted">
              {faq.map((item) => (
                <div key={item.question}>
                  <p className="font-semibold text-ink">{item.question}</p>
                  <p className="mt-1">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Farmasi Hoşgeldin Hediyeleri",
          description: "Farmasi hoşgeldin kampanyaları ve yeni girişimci avantajları.",
          url: `${siteConfig.url}/farmasi-hosgeldin-hediyeleri`,
          inLanguage: "tr-TR"
        }}
      />
    </>
  );
}
