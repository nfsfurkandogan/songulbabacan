import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import JoinTrigger from "@/components/join-trigger";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Farmasi Askıdan Alma",
  description: "Kazanmak için başla. Çünkü sen buna değersin.",
  path: "/farmasi-askidan-alma"
});

const steps = [
  {
    title: "Girişimci girişine ulaşın",
    description: "www.farmasi.com.tr üzerinden Girişimci Girişi sayfasını açın."
  },
  {
    title: "Bilgilerinizle giriş yapın",
    description: "T.C. kimlik numaranız ve şifreniz ile sisteme giriş yapın."
  },
  {
    title: "Siparişinizi aktifleştirin",
    description: "“Siparişinizi aktifleştirmek” alanını tıklayın ve etkinleştirme adımına geçin."
  },
  {
    title: "Sponsor kodunu girin",
    description: "Sponsor kodu olarak 0001109 yazın ve “Sponsor’u Getir” butonuna basın."
  },
  {
    title: "Kayıt onayı verin",
    description: "BABACANLAR GRUP KOZMETİK VE DANIŞMANLIK SAN.TİC.LTD.ŞTİ. çıktığında onaylayın."
  }
];

const contactNumbers = [
  { label: "+90 549 507 91 99", href: "tel:+905495079199" },
  { label: "+90 542 394 38 38", href: "tel:+905423943838" }
];

const suspensionReasons = [
  "180 gün boyunca sipariş verilmemesi",
  "İlk siparişin 500 TL puan altında kalması ve 180 gün geçmesi",
  "İlk sipariş sonrası 6 ay sipariş verilmemesi"
];

const membershipBenefits = [
  "%30 indirim fırsatları",
  "Farmasi teşvik hediyeleri",
  "Yeni başlayanlara özel hoşgeldin hediyeleri",
  "Ürünleri tanıtarak ek gelir elde etme imkânı"
];

const popularProducts = [
  "Cilt bakım ürünleri (Sağlık Bakanlığı onaylı)",
  "Mat rujlar ve aydınlatıcı pudralar",
  "Transparan pudralar ve dudak kalemleri",
  "Erkek parfümleri ve göz altı kremleri"
];

export default function FarmasiActivationPage() {
  return (
    <>
      <section className="section bg-hero-sheen hero-compact">
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-5">
            <p className="section-kicker">Farmasi Askıdan Alma</p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Farmasi askıdan alma nasıl yapılır?
            </h1>
            <p className="text-ink-muted md:text-lg">
              Farmasi’de askıya alınan üyeliklerin tekrar aktif hale getirilmesi iki farklı yöntemle
              yapılabilir. Aşağıdaki adımları izleyerek hesabınızı kendiniz de aktifleştirebilir,
              ihtiyaç halinde ekibimizden destek alabilirsiniz.
            </p>
            <div className="flex flex-wrap gap-3">
              <JoinTrigger>Üye Ol</JoinTrigger>
              <Button asChild variant="outline">
                <Link
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp ile Yaz
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/iletisim">İletişime Geç</Link>
              </Button>
            </div>
          </div>
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold">Kendi kendine askıdan alma</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Üyeliğiniz askıya alındıysa aşağıdaki adımları takip ederek hesabınızı yeniden
              aktif hale getirebilirsiniz.
            </p>
            <ol className="mt-4 space-y-3 text-sm text-ink-muted">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-xs font-semibold text-brand">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{step.title}</p>
                    <p className="text-ink-muted">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="section-kicker">Destek</p>
            <h2 className="section-title">Sizi askıdan alabiliriz</h2>
            <p className="text-ink-muted">
              Eğer girişimciliğinizi askıdan alamazsanız bizimle iletişime geçebilir, hesabınızı
              askıdan aldırabilirsiniz. Şifrenizi unuttuysanız şifrenizi güncelleyip hesabınızı
              yeniden aktif hale getiriyoruz.
            </p>
            <div className="flex flex-wrap gap-3">
              {contactNumbers.map((item) => (
                <Button key={item.href} asChild variant="outline">
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="glass-card space-y-4 p-6">
            <h3 className="text-lg font-semibold">Üyelik neden askıya alınır?</h3>
            <p className="text-sm text-ink-muted">
              Farmasi üyelikleri, 180 gün boyunca sipariş verilmemesi durumunda askıya alınır.
              İlk sipariş sonrası 6 ay sipariş verilmediğinde üyelik tekrar askıya alınabilir.
            </p>
            <ul className="space-y-2 text-sm text-ink-muted">
              {suspensionReasons.map((reason) => (
                <li key={reason} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-section-glow">
        <div className="container grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <p className="section-kicker">Üyelik Avantajları</p>
            <h2 className="section-title">Farmasi üyeliği ve avantajları</h2>
            <p className="text-ink-muted">
              Üye olduğunuzda ürünleri indirimli satın alma, kampanyalardan yararlanma ve danışman
              olarak ekip kurma fırsatına sahip olursunuz.
            </p>
            <ul className="space-y-2 text-sm text-ink-muted">
              {membershipBenefits.map((benefit) => (
                <li key={benefit} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <JoinTrigger>Kayıt Ol</JoinTrigger>
              <Button asChild variant="ghost">
                <Link href="/katalog">Kataloğu Gör</Link>
              </Button>
            </div>
          </div>
          <div className="glass-card space-y-4 p-6">
            <h3 className="text-lg font-semibold">En popüler Farmasi ürünleri</h3>
            <ul className="space-y-2 text-sm text-ink-muted">
              {popularProducts.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-card space-y-4 p-7">
            <p className="text-sm font-semibold text-brand-600">Online Sipariş</p>
            <p className="text-sm text-ink-muted md:text-base">
              Farmasi üzerinden online sipariş vermek oldukça basittir. Üye olduktan sonra indirimli
              ürünlerden yararlanabilir ve dilediğiniz ürünü sipariş edebilirsiniz. Sipariş işlemleri
              sırasında ürün kodunu dikkatlice girip ödeme yöntemini seçtikten sonra siparişinizi
              tamamlayabilirsiniz. Siparişleriniz ortalama 3–5 iş günü içerisinde adresinize teslim
              edilir.
            </p>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Farmasi askıdan alma nasıl yapılır?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Farmasi girişimci girişinden kimlik numarası ve şifre ile giriş yapıp siparişinizi aktifleştirmek adımlarını tamamlayarak hesabınızı yeniden aktif hale getirebilirsiniz."
              }
            },
            {
              "@type": "Question",
              name: "Farmasi üyelik neden askıya alınır?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "180 gün boyunca sipariş verilmemesi veya ilk siparişin 500 TL puan altında kalması durumunda üyelik askıya alınabilir."
              }
            }
          ]
        }}
      />
    </>
  );
}
