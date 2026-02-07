import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import FarmasiKayitFormuForm from "@/components/farmasi-kayit-formu-form";

export const metadata = createMetadata({
  title: "Farmasi Üyelik Başvuru Formu",
  description:
    "Farmasi üyelik başvuru formu. Kısa formu doldurun; üyelik süreci ve avantajlar hakkında hızlıca dönüş yapalım.",
  path: "/farmasi-uyelik-formu"
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
            <h1 className="text-4xl font-semibold md:text-5xl">Farmasi Üyelik Başvuru Formu</h1>
            <p className="max-w-2xl text-ink-muted md:text-lg">
              Kısa formu doldurun, üyelik süreci, avantajlar ve başlangıç adımları hakkında sizinle
              en kısa sürede iletişime geçelim.
            </p>
            <p className="text-sm text-ink-muted">
              Bilgileriniz gizli tutulur ve yalnızca başvuru süreci için kullanılır.
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
          name: "Farmasi Üyelik Başvuru Formu",
          description:
            "Farmasi üyelik başvuru formu. Kısa formu doldurun; üyelik süreci ve avantajlar hakkında hızlıca dönüş yapalım.",
          url: `${siteConfig.url}/farmasi-uyelik-formu`,
          inLanguage: "tr-TR"
        }}
      />
    </>
  );
}
