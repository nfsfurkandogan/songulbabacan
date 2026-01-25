import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import JoinTrigger from "@/components/join-trigger";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Başarı Hikayem",
  description: "Başarı yolculuğum: zorlukları öğrenme fırsatına çevirmek, liderlik ve dijital stratejiler.",
  path: "/basari-hikayem"
});

const timeline = [
  {
    title: "Zorluklar, fırsata dönüştü",
    desc: "İş hayatımda karşılaştığım zorlukları fırsatlara çevirmenin yolu; kararlılık ve doğru strateji geliştirmekti."
  },
  {
    title: "Kişisel gelişim, başarının anahtarı",
    desc: "Sürekli öğrenme ve gelişim; hem iş hem de hayat tarafında en güçlü kaldıraç oldu."
  },
  {
    title: "Liderlik & ekip kurma",
    desc: "Doğru iletişim ve sistem kurma, ekip motivasyonu ve sürdürülebilir büyümenin temelidir."
  },
  {
    title: "Dijital stratejiler",
    desc: "Online dünyada görünürlük: düzenli içerik, net mesaj ve hedef odaklı planlama ile güçlenir."
  }
];

const supportItems = [
  "1:1 yol haritası ve takip",
  "İçerik & dijital büyüme planı",
  "Ekip kurma, eğitim ve sistem"
];

export default function SuccessStoryPage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="section-kicker">Başarı Hikayem</p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Başarı Yolculuğum Nasıl Başladı?
            </h1>
            <p className="max-w-2xl text-ink-muted md:text-lg">
              Kariyerime adım attığım ilk günden beri hem kendime yatırım yapmayı hem de
              başkalarının hayatlarına dokunmayı amaç edindim.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/iletisim">Benimle Çalış</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/farmasi">Farmasi</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />
            <Image
              src="/hero-spa.jpg"
              alt=""
              width={520}
              height={520}
              className="rounded-2xl border border-white/60 object-cover shadow-lift"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="section-kicker">Dönüm Noktaları</p>
            <h2 className="section-title">Her adım yeni bir öğrenme</h2>
            <p className="text-ink-muted">
              Öğrendiklerimi, sizin yolculuğunuza fayda olacak şekilde paylaşıyorum.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {timeline.map((item) => (
              <div key={item.title} className="glass-card p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-section-glow">
        <div className="container grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <h2 className="section-title">Sizin için ne yapabiliriz?</h2>
            <p className="text-ink-muted">Hedefinize göre şekillenen bir çalışma düzeni.</p>
            <ul className="space-y-2 text-sm text-ink-muted">
              {supportItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <JoinTrigger>Kayıt Ol</JoinTrigger>
              <Button asChild variant="ghost">
                <Link href={`tel:${siteConfig.contact.phone}`}>Ara</Link>
              </Button>
            </div>
          </div>
          <div className="glass-card p-6">
            <Image
              src="/product-1.jpg"
              alt=""
              width={420}
              height={520}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Başarı Hikayem",
          author: {
            "@type": "Person",
            name: siteConfig.name
          },
          url: `${siteConfig.url}/basari-hikayem`
        }}
      />
    </>
  );
}
