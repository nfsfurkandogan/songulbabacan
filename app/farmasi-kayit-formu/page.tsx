import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import FarmasiKayitFormuForm from "@/components/farmasi-kayit-formu-form";

export const metadata = createMetadata({
  title: "Farmasi Ücretsiz Kayıt",
  description:
    "Farmasi ücretsiz kayıt formu. Ad Soyad, Telefon ve Şehir bilgilerinizi bırakın, hızlıca dönüş yapalım.",
  path: "/farmasi-kayit-formu"
});

const highlights = [
  {
    title: "1 Dakika",
    description: "Formu hızlıca doldurun. Sadece gerekli bilgiler istenir."
  },
  {
    title: "Ücretsiz",
    description: "Kayıt ücretsizdir. Ek ücret veya taahhüt yok."
  },
  {
    title: "Hızlı Dönüş",
    description: "Form ulaştığında kısa sürede iletişime geçiyoruz."
  }
];

const requirements = ["Adı - Soyadı", "Telefon No", "Şehir Adresi", "Mail Adresi (opsiyonel)"];

export default function FarmasiKayitFormuPage() {
  return (
    <>
      <section className="section bg-hero-sheen hero-compact">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="section-kicker">Farmasi</p>
            <h1 className="text-4xl font-semibold md:text-5xl">Farmasi Ücretsiz Kayıt</h1>
            <p className="max-w-2xl text-ink-muted md:text-lg">
              Google reklamından geldiniz. Kısa formu doldurun, ücretsiz üyelik için hızlıca
              sizinle iletişime geçelim.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title} className="glass-card p-4 text-sm">
                  <p className="font-semibold text-ink">{item.title}</p>
                  <p className="mt-1 text-ink-muted">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="glass-card space-y-3 p-4 text-sm text-ink-muted">
              <p className="font-semibold text-ink">Formda istenen bilgiler</p>
              <div className="flex flex-wrap gap-2">
                {requirements.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="gradient-border rounded-3xl p-[1px]">
            <div className="glass-card p-6">
              <FarmasiKayitFormuForm />
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Farmasi Ücretsiz Kayıt",
          description:
            "Farmasi ücretsiz kayıt formu. Ad Soyad, Telefon ve Şehir bilgilerinizi bırakın, hızlıca dönüş yapalım.",
          url: `${siteConfig.url}/farmasi-kayit-formu`,
          inLanguage: "tr-TR"
        }}
      />
    </>
  );
}
