import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/json-ld";

export const metadata = createMetadata({
  title: "Farmasi",
  description:
    "Farmasi'ye ücretsiz üye olun, mentorluk desteğiyle satış ve ekip yönetiminde hızlıca başlayın.",
  path: "/farmasi"
});

export default function FarmasiPage() {
  return (
    <>
      <section className="section bg-hero-sheen hero-compact">
        <div className="container space-y-6">
          <p className="section-kicker">Farmasi</p>
          <h1 className="text-4xl font-semibold md:text-5xl">Farmasi'ye ücretsiz üye olun.</h1>
          <p className="max-w-2xl text-ink-muted md:text-lg">
            Hızlı kayıt, güçlü ürün desteği ve mentorlukla işinizi güvenle büyütün.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/kayit-ol">Hemen Kayıt Ol</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp ile Sor
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 md:grid-cols-3">
          {[
            { title: "Ücretsiz katılım", desc: "Herhangi bir giriş ücreti olmadan başlarsınız." },
            { title: "Eğitim & destek", desc: "Başlangıç eğitimleri ve sürekli mentorluk." },
            { title: "Sistem kurma", desc: "Satış ve ekip yönetiminde yapılandırılmış plan." }
          ].map((item) => (
            <div key={item.title} className="glass-card p-6">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-ink-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-section-glow">
        <div className="container space-y-6">
          <p className="section-kicker">Nasıl Başlanır</p>
          <h2 className="section-title">3 adımda Farmasi başlangıcı</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Tanışma", desc: "Hedeflerinizi belirliyoruz." },
              { title: "Kurulum", desc: "Kayıt + eğitim sürecini başlatıyoruz." },
              { title: "Büyüme", desc: "Satış ve ekip planını uyguluyoruz." }
            ].map((item) => (
              <div key={item.title} className="glass-card p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Farmasi Üyelik",
          provider: {
            "@type": "Person",
            name: siteConfig.name
          },
          url: `${siteConfig.url}/farmasi`
        }}
      />
    </>
  );
}
