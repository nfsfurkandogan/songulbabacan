import Image from "next/image";
import Link from "next/link";
import { Instagram, MessageCircle, Send } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import FarmasiKayitFormuForm from "@/components/farmasi-kayit-formu-form";

export const metadata = createMetadata({
  title: "Farmasi Üyelik Başvuru Formu",
  description:
    "Bağımsız Farmasi danışman sayfası, ücretsiz üyelik başvurusu ve hızlı erişim menüsü.",
  path: "/farmasi-uyelik-formu"
});

const quickLinks = [
  {
    title: "Ücretsiz Üye Ol",
    href: "/farmasi-uyelik-formu#uyelik-formu",
    image: "/generated/uyelik-card.svg",
    external: false
  },
  {
    title: "Askıda Mısın?",
    href: "/farmasi-uyelik-formu#aski-formu",
    image: "/generated/askida-card.svg",
    external: false
  },
  {
    title: "Üye Girişi",
    href: "https://www.farmasi.com.tr/kayit-ol",
    image: "/generated/giris-card.svg",
    external: true
  },
  {
    title: "Kazanç Planı",
    href: "/kazanc-plani",
    image: "/generated/kazanc-card.svg",
    external: false
  },
  {
    title: "Katalog",
    href: "/katalog",
    image: "/generated/katalog-card.svg",
    external: false
  },
  {
    title: "Blog",
    href: "/blog",
    image: "/generated/blog-card.svg",
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

const promoImages = [
  {
    src: "/uyelik2.jpeg",
    alt: "Farmasi ücretsiz üyelik görseli",
    href: "#uyelik-formu",
    cta: "Farmasi Üyelik İçin Tıkla"
  },
  {
    src: "/uyelik3.jpeg",
    alt: "Farmasi askıdan alma görseli",
    href: "#aski-formu",
    cta: "Farmasi Askıdan Al"
  },
  {
    src: "/uyelik4.jpeg",
    alt: "Farmasi başarı görseli"
  },
  {
    src: "/uyelik5.jpeg",
    alt: "Farmasi ekibe katıl görseli",
    href: "#uyelik-formu",
    cta: "Ekibime Katıl"
  }
] as const;

export default function FarmasiKayitFormuPage() {
  return (
    <>
      <section className="section bg-hero-sheen hero-compact">
        <div className="container max-w-5xl space-y-6 text-center">
          <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-lift">
            <Image
              src="/uyelik1.jpeg"
              alt="Farmasi ana görseli"
              width={1536}
              height={709}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 1200px"
              priority
            />
          </div>
          <p className="section-kicker">Bağımsız Farmasi Danışman Sayfası</p>
          <h1 className="text-balance text-3xl font-semibold md:text-5xl">Ücretsiz Üye Ol</h1>
          <p className="text-base text-ink-muted md:text-xl">İndirimli Alışverişe veya Ek Gelire Başla</p>
          <div className="space-y-3">
            <Link
              href="#uyelik-formu"
              className="glow-blink-btn inline-flex min-h-12 items-center justify-center rounded-2xl px-8 py-3 text-base font-semibold text-white"
            >
              Farmasi Üyelik İçin Tıkla
            </Link>
            <p className="text-sm font-medium text-ink-muted">Ücretsiz üyeliğini oluştur</p>
          </div>
          <div className="rounded-3xl border border-border bg-white/90 p-4 md:p-5">
            <div className="grid gap-3 sm:grid-cols-3">
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
        </div>
      </section>

      <section className="section pt-0">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            {promoImages.map((item) =>
              "href" in item ? (
                <Link
                  key={item.src}
                  href={item.href}
                  className="group relative block overflow-hidden rounded-3xl border border-border bg-white shadow-lift"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 900px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#201132]/52 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-6 flex justify-center px-4">
                      <span className="glow-blink-btn inline-flex min-h-12 items-center justify-center rounded-2xl px-8 py-3 text-base font-semibold text-white">
                        {"cta" in item ? item.cta : "Detay"}
                      </span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div
                  key={item.src}
                  className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-lift"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 900px"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section id="aski-formu" className="section pt-0">
        <div className="container max-w-4xl space-y-6">
          <div className="space-y-3 text-center">
            <p className="section-kicker">FARMASİ</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Hesabını Aktifleştir</h2>
            <p className="mx-auto max-w-3xl text-base text-ink-muted md:text-lg">
              Askıya alınan hesabınızı yeniden aktif hale getirmek için aşağıdaki formu doldurun.
            </p>
            <p className="mx-auto max-w-3xl text-base text-ink-muted md:text-lg">
              Herhangi bir sorun yaşıyorsanız form üzerinden bize ulaşabilir, size atanan özel
              danışmanınızla süreciniz boyunca destek alabilirsiniz.
            </p>
            <p className="mx-auto max-w-3xl text-base text-ink-muted md:text-lg">
              Tüm bilgileriniz gizlilikle korunur ve resmi sistem üzerinden işleme alınır.
            </p>
          </div>
          <div className="gradient-border rounded-3xl p-[1px]">
            <div className="glass-card p-6">
              <FarmasiKayitFormuForm
                kicker="Üyelik Formu"
                title="Üyelik Formu"
                description="Hesap aktivasyon süreciniz için formu gönderin, size hızlıca dönüş sağlayalım."
                submitTopic="Farmasi Askıdan Alma Başvurusu"
              />
              <p className="mt-4 text-xs text-ink-muted">
                Bilgileriniz yalnızca hesap aktivasyon süreci için kullanılır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="uyelik-formu" className="section pt-0">
        <div className="container max-w-4xl space-y-6">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Farmasi Üyelik</h2>
            <p className="mx-auto max-w-3xl text-base text-ink-muted md:text-lg">
              Farmasi ailesine katılmak için aşağıdaki formu doldurabilirsiniz.
            </p>
            <p className="mx-auto max-w-3xl text-base text-ink-muted md:text-lg">
              Üyelik tamamen ücretsizdir. İsterseniz avantajlı alışveriş yapabilir, isterseniz kendi
              ek gelir yolculuğunuza güvenle başlayabilirsiniz.
            </p>
          </div>
          <div id="basvuru-formu" className="gradient-border rounded-3xl p-[1px]">
            <div className="glass-card p-6">
              <FarmasiKayitFormuForm
                kicker="Üyelik Formu"
                title="Başvuru Formu"
                description="Bilgilerinizi doldurun, size en kısa sürede dönüş yapalım."
                submitTopic="Farmasi Üyelik Başvurusu"
              />
              <p className="mt-4 text-xs text-ink-muted">
                Bilgileriniz yalnızca başvuru süreci için kullanılır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="hizli-menu" className="section pt-0">
        <div className="container max-w-6xl space-y-5">
          <p className="section-kicker text-center">Hızlı Erişim</p>
          <h2 className="text-center text-2xl font-semibold md:text-3xl">Bağlantı Menüsü</h2>
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
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Farmasi Üyelik Başvuru Formu",
          description:
            "Bağımsız Farmasi danışman sayfası, ücretsiz üyelik başvurusu ve hızlı erişim menüsü.",
          url: `${siteConfig.url}/farmasi-uyelik-formu`,
          inLanguage: "tr-TR"
        }}
      />
    </>
  );
}
