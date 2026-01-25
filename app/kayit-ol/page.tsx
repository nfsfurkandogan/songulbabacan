import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/json-ld";
import JoinApplicationForm from "@/components/join-application-form";

export const metadata = createMetadata({
  title: "Farmasi Kayıt Ol",
  description: "Farmasi Türkiye girişimci başvuru formu. Sponsor Kod: 0001109.",
  path: "/kayit-ol"
});

const requirements = ["İsim Soyisim", "Telefon", "Şehir (opsiyonel)", "Not (opsiyonel)"];

export default function SignupPage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-2 text-xs font-semibold text-ink-muted">
              <span>Farmasi Türkiye Girişimci Başvurusu</span>
              <span className="h-1 w-1 rounded-full bg-brand/70" />
              <span>
                Sponsor Kod: <strong className="text-ink">{siteConfig.sponsorCode}</strong>
              </span>
            </div>
            <p className="section-kicker">Farmasi Kayıt</p>
            <h1 className="text-4xl font-semibold md:text-5xl">Ücretsiz Başvuru Formu</h1>
            <p className="text-ink-muted md:text-lg">
              Sponsor Kod: <strong>{siteConfig.sponsorCode}</strong>. Formu doldurun; başvurunuzu
              WhatsApp veya e-posta ile hızlıca gönderin.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={`tel:${siteConfig.contact.phone}`}>Ara</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />
            <Image
              src="/ig/ig-09.jpg"
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
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-4">
            <p className="section-kicker">Neler gerekiyor?</p>
            <h2 className="section-title">Başvuru için sadece 2 bilgi yeterli: isim ve telefon.</h2>
            <ul className="space-y-2 text-sm text-ink-muted">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-ink-muted">
              Gönder dediğinizde WhatsApp açılır ve mesaj otomatik hazırlanır (backend yok).
            </p>
          </div>
          <div className="glass-card p-6">
            <JoinApplicationForm />
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Farmasi Kayıt Ol",
          url: `${siteConfig.url}/kayit-ol`
        }}
      />
    </>
  );
}
