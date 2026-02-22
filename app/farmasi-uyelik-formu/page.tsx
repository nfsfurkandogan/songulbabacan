import Image from "next/image";
import Link from "next/link";
import { Instagram, Lock, MessageCircle, Send } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import FarmasiKayitFormuForm from "@/components/farmasi-kayit-formu-form";

export const metadata = createMetadata({
  title: "Farmasi Üyelik Başvuru Formu",
  description:
    "Bağımsız Farmasi danışman sayfası, üyelik, askıdan alma, sponsor kod ve blog rehber içerikleri.",
  path: "/farmasi-uyelik-formu"
});

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

type PromoCard = {
  src: string;
  alt: string;
  href: string;
  cta: string;
  glow?: boolean;
  helper?: string;
};

const promoCards: PromoCard[] = [
  {
    src: "/uyelik2.jpeg",
    alt: "Farmasi ücretsiz üyelik görseli",
    href: "#uyelik-formu",
    cta: "Farmasi Üyelik İçin Tıkla",
    glow: true,
    helper: "Ücretsiz üyeliğini oluştur"
  },
  {
    src: "/uyelik3.jpeg",
    alt: "Farmasi askıdan alma görseli",
    href: "#aski-formu",
    cta: "Farmasi Askıdan Al",
    glow: true,
    helper: "Askıdan Kendini Al"
  },
  {
    src: "/uyelik4.jpeg",
    alt: "Farmasi kazanç planı görseli",
    href: "/kazanc-plani",
    cta: "Farmasi Kazanç Planı"
  },
  {
    src: "/uyelik5.jpeg",
    alt: "Farmasi sponsor kod görseli",
    href: "#sponsor-kod",
    cta: "Farmasi Sponsor Kod"
  }
];

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

          <div className="mx-auto w-full max-w-3xl space-y-4 rounded-3xl border border-border bg-white/85 p-5 shadow-soft md:p-8">
            <p className="text-sm font-semibold text-ink-muted md:text-base">
              Bağımsız Farmasi Danışman Sayfası
            </p>
            <h1 className="text-balance text-3xl font-semibold md:text-5xl">Ücretsiz Üye Ol</h1>
            <p className="text-base text-ink-muted md:text-xl">İndirimli Alışverişe veya Ek Gelire Başla</p>
            <Link
              href="#uyelik-formu"
              className="glow-blink-btn inline-flex min-h-12 w-full max-w-xs items-center justify-center rounded-2xl px-4 py-3 text-center text-sm font-semibold leading-tight text-white sm:max-w-sm md:w-auto md:max-w-none md:px-8 md:text-base"
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

          <div className="gradient-border rounded-3xl p-[1px] text-left" id="ilk-ekran-formu">
            <div className="glass-card p-4 md:p-6">
              <FarmasiKayitFormuForm
                kicker="Üyelik Formu"
                title="İlk Ekran Üyelik Formu"
                description="İlk adımı hızlıca atmak için formu doldurun, size hemen dönüş yapalım."
                submitTopic="Farmasi Üyelik Başvurusu"
              />
              <p className="mt-4 text-xs text-ink-muted">
                Bilgileriniz yalnızca başvuru süreci için kullanılır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container max-w-4xl space-y-6">
          {promoCards.map((item) => (
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
                <div className="absolute inset-x-0 bottom-4 flex flex-col items-center gap-2 px-3 text-center md:bottom-6 md:px-4">
                  <span
                    className={`${item.glow ? "glow-blink-btn" : "bg-ink/90 hover:bg-ink"} inline-flex min-h-11 w-full max-w-[16rem] items-center justify-center rounded-2xl px-4 py-2.5 text-center text-sm font-semibold leading-tight text-white transition sm:max-w-[18rem] md:min-h-12 md:max-w-[20rem] md:px-8 md:py-3 md:text-base`}
                  >
                    {item.cta}
                  </span>
                  {item.helper && (
                    <span className="inline-flex items-center gap-2 text-xs text-white/95 md:text-sm">
                      <Lock className="h-4 w-4" />
                      {item.helper}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}

          <div className="text-center">
            <Link
              href="#blog-bolumu"
              className="inline-flex min-h-11 w-full max-w-[14rem] items-center justify-center rounded-2xl bg-ink px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-ink/90 md:min-h-12 md:max-w-none md:px-8 md:py-3 md:text-base"
            >
              Blog
            </Link>
          </div>
        </div>
      </section>

      <section id="uyelik-formu" className="section scroll-mt-24 pt-0">
        <div className="container max-w-4xl space-y-6">
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-semibold md:text-4xl">Farmasi Üyelik</h2>
            <p className="mx-auto max-w-3xl text-base text-ink-muted md:text-lg">
              Farmasi ailesine katılmak için aşağıdaki formu doldurabilirsiniz.
            </p>
            <p className="mx-auto max-w-3xl text-base text-ink-muted md:text-lg">
              Üyelik tamamen ücretsizdir. İsterseniz avantajlı alışveriş yapabilir, isterseniz kendi
              ek gelir yolculuğunuza güvenle başlayabilirsiniz.
            </p>
          </div>
          <div className="gradient-border rounded-3xl p-[1px]">
            <div className="glass-card p-4 md:p-6">
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

      <section id="aski-formu" className="section scroll-mt-24 pt-0">
        <div className="container max-w-4xl space-y-6">
          <div className="space-y-3 text-center">
            <p className="section-kicker">FARMASİ</p>
            <h2 className="text-2xl font-semibold md:text-4xl">Hesabını Aktifleştir</h2>
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
            <div className="glass-card p-4 md:p-6">
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

      <section id="sponsor-kod" className="section scroll-mt-24 pt-0">
        <div className="container max-w-4xl space-y-6">
          <div className="space-y-3 text-center">
            <p className="section-kicker">Farmasi</p>
            <h2 className="text-2xl font-semibold md:text-4xl">Sponsor Kod ile Kayıt Olun</h2>
            <p className="mx-auto max-w-3xl text-base text-ink-muted md:text-lg">
              Resmi Farmasi kaydınızı sponsor kodum 4023520 (Berika Seher Babacan) üzerinden
              oluşturarak ekibime katılabilirsiniz.
            </p>
            <p className="mx-auto max-w-3xl text-base text-ink-muted md:text-lg">
              Kayıt sonrası süreciniz, size atanan özel danışmanınız tarafından birebir takip edilir ve
              büyüme yolculuğunuz boyunca destek sağlanır.
            </p>
          </div>
          <div className="gradient-border rounded-3xl p-[1px]">
            <div className="glass-card p-4 md:p-6">
              <FarmasiKayitFormuForm
                kicker="Üyelik Formu"
                title="Sponsor Kod Başvuru Formu"
                description="Sponsor kod ile kayıt talebiniz için formu doldurun, sizinle iletişime geçelim."
                submitTopic="Farmasi Sponsor Kod ile Kayıt Başvurusu"
              />
              <p className="mt-4 text-xs text-ink-muted">
                Bilgileriniz yalnızca kayıt ve danışmanlık süreci için kullanılır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="blog-bolumu" className="section scroll-mt-24 pt-0">
        <div className="container max-w-4xl space-y-5">
          <h2 className="text-center text-2xl font-semibold md:text-4xl">
            Songül Babacan Blog Sayfasına Hoş Geldiniz
          </h2>
          <p className="text-base text-ink-muted md:text-lg">
            Bu blog; girişimcilik, liderlik gelişimi ve mentorluk bakış açısıyla hazırlanmış kapsamlı
            rehber içerikler sunar. Amacımız yalnızca bilgi paylaşmak değil; doğru sistemle ilerlemek
            isteyenlere net bir yol haritası oluşturmaktır. Bilgiye dayalı hareket edenlerin daha sağlam
            adımlar attığına inanıyoruz.
          </p>
          <p className="text-base text-ink-muted md:text-lg">
            Burada sosyal medya ile büyüme stratejileri, ekip kurma teknikleri, kişisel gelişim
            farkındalığı ve sürdürülebilir bir iş modeli oluşturma üzerine içerikler bulabilirsiniz.
            Bilinçli adım atmak, istikrarlı ilerlemek ve uzun vadeli başarı inşa etmek isteyenler için
            yol gösterici paylaşımlar yer alır. Çünkü girişimcilik sadece kazanç değil; aynı zamanda
            disiplin, vizyon ve doğru rehberlik sürecidir.
          </p>
          <h3 className="text-2xl font-semibold">Farmasi Rehberi ve Güncel Bilgiler</h3>
          <p className="text-base text-ink-muted md:text-lg">
            Aynı zamanda bu blogda; Farmasi üyelik süreci, sponsor kod ile kayıt adımları, askı
            işlemleri, Farmasi kazanç planı detayları ve güncel katalog bilgileri hakkında kapsamlı ve
            doğru bilgiler sunulmaktadır. Yeni başlayanlar için temel rehberler, mevcut danışmanlar için
            ise sistemi büyütmeye yönelik stratejik içerikler yer alır.
          </p>
          <p className="text-base text-ink-muted md:text-lg">
            Farmasi ile ek gelir elde etmek, danışmanlık sürecini doğru yönetmek ve sistemli bir ekip
            yapısı kurmak isteyenler için adım adım rehber niteliğinde paylaşımlar hazırlanır. Network
            marketing mantığını doğru anlamak, satış odaklı değil değer odaklı ilerlemek ve sosyal
            medyada güven oluşturmak bu sürecin temel taşlarıdır.
          </p>
          <h3 className="text-2xl font-semibold">Mentorluk ve Büyüme Süreci</h3>
          <p className="text-base text-ink-muted md:text-lg">
            Bu blog yalnızca teknik bilgi alanı değildir. Aynı zamanda mentorluk yaklaşımı, liderlik
            gelişimi ve ekip yönetimi üzerine farkındalık kazandırmayı amaçlar. Başarı, tek başına
            ilerlemekten değil; doğru rehberlik ve sürdürülebilir sistem kurmaktan geçer.
          </p>
          <p className="text-base text-ink-muted md:text-lg">Burada bulacağınız içerikler:</p>
          <ul className="space-y-2 text-base text-ink-muted md:text-lg">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
              <span>Farmasi üyelik ve sponsor kod süreçleri</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
              <span>Askıdan alma ve hesap aktifleştirme rehberleri</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
              <span>Kazanç planı ve prim sistemi açıklamaları</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
              <span>Sosyal medya ile satış ve marka konumlandırma stratejileri</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
              <span>Ekip kurma ve liderlik gelişimi önerileri</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
              <span>Güncel Farmasi katalog ve kampanya bilgileri</span>
            </li>
          </ul>
          <p className="text-base text-ink-muted md:text-lg">
            Bilgiyle büyümek isteyenler için hazırlanmış bu alan, yalnızca kayıt olmak değil; bilinçli
            bir iş modeli kurmak isteyenlere hitap eder.
          </p>
          <p className="text-base text-ink-muted md:text-lg">
            Bu blog, doğru adımlarla ilerlemek isteyen herkes için bir rehberdir.
          </p>
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex min-h-11 w-full max-w-[14rem] items-center justify-center rounded-2xl bg-ink px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-ink/90 md:min-h-12 md:max-w-none md:px-8 md:py-3 md:text-base"
            >
              Bloga Git
            </Link>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Farmasi Üyelik Başvuru Formu",
          description:
            "Bağımsız Farmasi danışman sayfası, üyelik, askıdan alma, sponsor kod ve blog rehber içerikleri.",
          url: `${siteConfig.url}/farmasi-uyelik-formu`,
          inLanguage: "tr-TR"
        }}
      />
    </>
  );
}
