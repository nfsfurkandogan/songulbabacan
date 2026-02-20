import Image from "next/image";
import Link from "next/link";
import { Instagram, MessageCircle, Send } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import FarmasiKayitFormuForm from "@/components/farmasi-kayit-formu-form";
import uyelikImage from "@/assets/img/uyelik.jpeg";
import trafikImage from "@/assets/img/trafik.jpeg";
import uzmanlikImage from "@/assets/img/uzmanlik.jpeg";
import farmasiAracImage from "@/assets/img/farmasi-arac.jpeg";
import kisiselHikayeImage from "@/assets/img/kisisel-hikaye.jpeg";
import nedenBenImage from "@/assets/img/neden-ben.jpeg";
import farmasiLogo from "@/assets/img/farmasi-logo.png";

export const metadata = createMetadata({
  title: "Farmasi Üyelik Başvuru Formu",
  description:
    "Farmasi üyelik, askıda alma, kazanç planı, katalog ve blog için hızlı erişim menüsü ve üyelik başvuru formu.",
  path: "/farmasi-uyelik-formu"
});

const quickLinks = [
  {
    title: "Ücretsiz Üye Ol",
    href: "#basvuru-formu",
    image: uyelikImage,
    external: false
  },
  {
    title: "Askıda Mısın?",
    href: "/farmasi-askidan-alma",
    image: trafikImage,
    external: false
  },
  {
    title: "Üye Girişi",
    href: "https://www.farmasi.com.tr/kayit-ol",
    image: uzmanlikImage,
    external: true
  },
  {
    title: "Kazanç Planı",
    href: "/kazanc-plani",
    image: farmasiAracImage,
    external: false
  },
  {
    title: "Katalog",
    href: "/katalog",
    image: kisiselHikayeImage,
    external: false
  },
  {
    title: "Blog",
    href: "/blog",
    image: nedenBenImage,
    external: false
  }
] as const;

const socialLinks = [
  {
    title: "Instagram",
    href: siteConfig.social.instagram,
    icon: Instagram
  },
  {
    title: "WhatsApp",
    href: siteConfig.contact.whatsapp,
    icon: MessageCircle
  },
  {
    title: "Telegram",
    href: siteConfig.social.telegram,
    icon: Send
  }
] as const;

export default function FarmasiKayitFormuPage() {
  return (
    <>
      <section className="section bg-hero-sheen hero-compact">
        <div className="container max-w-4xl space-y-6">
          <div className="space-y-4 text-center">
            <Image
              src={farmasiLogo}
              alt="Farmasi logo"
              width={260}
              height={80}
              className="mx-auto h-auto w-44 md:w-52"
              priority
            />
            <p className="section-kicker">Farmasi Üyelik Uygulaması</p>
            <h1 className="text-balance text-3xl font-semibold md:text-5xl">
              Hızlı Menü ve Üyelik Başvuru Sayfası
            </h1>
            <div className="overflow-hidden rounded-full border border-border bg-white/80 px-4 py-2 text-sm text-ink-muted">
              Farmasi üyelik ve kayıt uygulamamıza hoş geldiniz.
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group overflow-hidden rounded-3xl border border-border bg-white shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative aspect-square">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                  />
                </div>
                <div className="px-4 py-3 text-center text-sm font-semibold text-ink">{item.title}</div>
              </Link>
            ))}
          </div>

          <div className="rounded-3xl border border-border bg-white/90 p-4 md:p-5">
            <div className="grid gap-3 md:grid-cols-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                if (!item.href) return null;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-ink/90"
                  >
                    <Icon className="h-4 w-4" />
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>

          <div id="basvuru-formu" className="gradient-border rounded-3xl p-[1px]">
            <div className="glass-card p-6">
              <FarmasiKayitFormuForm />
              <p className="mt-4 text-xs text-ink-muted">
                Bilgileriniz yalnızca başvuru süreci için kullanılır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Farmasi Üyelik Başvuru Formu",
          description:
            "Farmasi üyelik, askıda alma, kazanç planı, katalog ve blog için hızlı erişim menüsü ve üyelik başvuru formu.",
          url: `${siteConfig.url}/farmasi-uyelik-formu`,
          inLanguage: "tr-TR"
        }}
      />
    </>
  );
}
