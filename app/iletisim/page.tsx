import Link from "next/link";
import ContactForm from "@/components/contact-form";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/json-ld";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = createMetadata({
  title: "İletişim",
  description: "Songül Babacan ile iletişime geçin. WhatsApp, e-posta ve form üzerinden ulaşın.",
  path: "/iletisim"
});

export default function ContactPage() {
  const mapQuery = "Turkey";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;

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
          <div className="glass-card overflow-hidden">
            <div className="aspect-[4/3] w-full">
              <iframe
                title="Google Maps"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <h2 className="section-title">İletişim Bilgileri</h2>
              <p className="text-ink-muted">Türkiye genelinde dijital mentorluk ve ekip yönetimi.</p>
            </div>
            <div className="glass-card space-y-4 p-5 text-sm text-ink-muted">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                    Telefon
                  </p>
                  <p className="text-ink">{siteConfig.contact.phoneDisplay}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                    E-posta
                  </p>
                  <p className="text-ink">{siteConfig.contact.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                    Çalışma Alanı
                  </p>
                  <p className="text-ink">Türkiye genelinde dijital mentorluk</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp ile Yaz
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/kayit-ol">Üye Ol</Link>
              </Button>
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
