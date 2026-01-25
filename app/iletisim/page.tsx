import Link from "next/link";
import ContactForm from "@/components/contact-form";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/json-ld";

export const metadata = createMetadata({
  title: "İletişim",
  description: "Songül Babacan ile iletişime geçin. WhatsApp, e-posta ve form üzerinden ulaşın.",
  path: "/iletisim"
});

export default function ContactPage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-5">
            <p className="section-kicker">İletişim</p>
            <h1 className="text-4xl font-semibold md:text-5xl">Hedeflerinizi birlikte planlayalım.</h1>
            <p className="text-ink-muted md:text-lg">
              Sorularınızı yanıtlamak ve uygun bir mentorluk planı oluşturmak için buradayım.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp ile İletişim
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={`mailto:${siteConfig.contact.email}`}>E-posta Gönder</Link>
              </Button>
            </div>
          </div>
          <div className="glass-card p-6">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-card flex items-center justify-center p-10 text-center text-sm text-ink-muted">
            Harita alanı için yer tutucu (Google Maps embed eklenebilir)
          </div>
          <div className="space-y-4">
            <h2 className="section-title">İletişim Bilgileri</h2>
            <p className="text-ink-muted">Türkiye genelinde dijital mentorluk ve ekip yönetimi.</p>
            <div className="space-y-2 text-sm text-ink-muted">
              <p>{siteConfig.contact.phoneDisplay}</p>
              <p>{siteConfig.contact.email}</p>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "İletişim",
          url: `${siteConfig.url}/iletisim`
        }}
      />
    </>
  );
}
