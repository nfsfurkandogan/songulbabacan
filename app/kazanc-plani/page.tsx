import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import JoinTrigger from "@/components/join-trigger";
import JsonLd from "@/components/json-ld";
import storyOne from "@/assets/img/aa1f31c2-e723-4df8-bf0c-7e10294a3822.jpeg";

export const metadata = createMetadata({
  title: "Kazanç Planı",
  description:
    "Farmasi kazanç planı, prim ve liderlik hedefleri. Gelir modelinizi adım adım oluşturun.",
  path: "/kazanc-plani"
});

export default function EarningsPlanPage() {
  return (
    <>
      <section className="section bg-hero-sheen hero-compact">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="section-kicker">Kazanç Planı</p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Gelir modelinizi sistemli bir plana dönüştürün.
            </h1>
            <p className="max-w-2xl text-ink-muted md:text-lg">
              Farmasi’de gelir; kişisel satış, ekip performansı ve liderlik hedeflerinin birleşiminden
              oluşur. Burada şeffaf bir yol haritası ve hedef odaklı planlama sunuyorum.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp ile Detay Al
                </Link>
              </Button>
              <JoinTrigger variant="outline">Üye Ol</JoinTrigger>
            </div>
          </div>
          <div className="glass-card mx-auto max-w-sm overflow-hidden lg:mx-0">
            <Image
              src={storyOne}
              alt="Farmasi kazanç sistemi görseli"
              width={520}
              height={680}
              className="h-[360px] w-full object-cover md:h-[420px]"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Kişisel satış",
              desc: "Ürün satışından anlık kazanç ve hızlı nakit akışı sağlar."
            },
            {
              title: "Ekip primleri",
              desc: "Ekibinizin performansına göre liderlik bonusları oluşturur."
            },
            {
              title: "Liderlik adımları",
              desc: "Seviye hedefleriyle sürdürülebilir büyüme ve istikrar."
            }
          ].map((item) => (
            <div key={item.title} className="glass-card p-6">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-ink-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-section-glow">
        <div className="container grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="section-kicker">Hedef Planı</p>
            <h2 className="section-title">İlk 90 gün planlaması</h2>
            <p className="text-ink-muted">
              Gelir hedefinizi haftalık ölçümle takip ediyor, satış ve ekip büyümesini aynı anda
              yönetiyoruz.
            </p>
            <div className="glass-card space-y-3 p-5 text-sm text-ink-muted">
              <p className="font-semibold text-ink">Bu plan kimler için?</p>
              <p>Yeni başlayanlar ve ilk 3 ayını net hedeflerle yürütmek isteyenler.</p>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              "Hafta 1-2: Ürün eğitimi, kişisel hedefler ve başlangıç listesi",
              "Hafta 3-6: Satış ritmi, içerik planı ve referans sistemi",
              "Hafta 7-10: Ekip kurma, liderlik görüşmeleri ve performans takibi",
              "Hafta 11-13: Hedef güncelleme ve büyüme stratejisi"
            ].map((item) => (
              <div key={item} className="glass-card p-5 text-sm text-ink-muted">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-8">
          <div className="space-y-4">
            <h2 className="section-title">Kazanç planı görseli</h2>
            <p className="text-ink-muted">
              Güncel kazanç tablosu, prim oranları ve liderlik adımlarını tek görselde inceleyin.
            </p>
          </div>
          <div className="glass-card overflow-hidden">
            <Image
              src="/kazanclar.jpg"
              alt="Farmasi kazanç planı görseli"
              width={1200}
              height={1600}
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="cta-card flex flex-wrap items-center justify-between gap-4 p-6">
            <div>
              <p className="text-sm font-semibold text-ink">Detaylı bilgi almak ister misiniz?</p>
              <p className="text-sm text-ink-muted">
                Planı birlikte değerlendirmek için WhatsApp üzerinden yazabilirsiniz.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp ile Yaz
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/iletisim">İletişim Formu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Farmasi Kazanç Planı",
          provider: {
            "@type": "Person",
            name: siteConfig.name
          },
          areaServed: "TR",
          url: `${siteConfig.url}/kazanc-plani`
        }}
      />
    </>
  );
}
