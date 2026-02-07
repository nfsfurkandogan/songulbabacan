import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import FarmasiKayitFormuForm from "@/components/farmasi-kayit-formu-form";

export const metadata = createMetadata({
  title: "Farmasi Üyelik Başvuru Formu",
  description:
    "Farmasi üyelik başvuru formu. Kısa formu doldurun; üyelik süreci ve avantajlar hakkında sizi bilgilendirelim.",
  path: "/farmasi-uyelik-formu"
});

const highlights = [
  {
    title: "1 Dakikada Farmasi Üyelik Başvurusu",
    description:
      "Kısa formu doldurun, yalnızca gerekli bilgiler istenir. Farmasi üyelik süreci hakkında sizi bilgilendirelim."
  },
  {
    title: "Şeffaf Üyelik Süreci",
    description:
      "Başvuru sonrası üyelik detayları, başlangıç koşulları ve avantajlar net şekilde paylaşılır. Ek gizli ücret veya sürpriz yoktur."
  },
  {
    title: "Hızlı Geri Dönüş",
    description:
      "Form bize ulaştığında Farmasi danışmanlık süreci için en kısa sürede sizinle iletişime geçiyoruz."
  }
];

const requirements = [
  "Ad - Soyad",
  "Telefon Numarası",
  "Şehir",
  "E-posta (isteğe bağlı)"
];

export default function FarmasiKayitFormuPage() {
  return (
    <>
      <section className="section bg-hero-sheen hero-compact">
        <div className="container max-w-3xl space-y-6">
          <div className="space-y-4 text-left">
            <p className="section-kicker">Farmasi Üyelik</p>
            <h1 className="text-4xl font-semibold md:text-5xl">Ücretsiz Üyelik Başvuru Formu</h1>
            <p className="text-ink-muted md:text-lg">
              Üyelik sürecini başlatmak için kısa formu doldurun. Şartlar ve avantajlar hakkında
              sizinle en kısa sürede iletişime geçelim.
            </p>
            <p className="text-sm text-ink-muted">
              Bilgileriniz gizli tutulur ve yalnızca başvuru süreci kapsamında kullanılır.
            </p>
            <p className="text-lg">👇</p>
          </div>
          <div className="gradient-border rounded-3xl p-[1px]">
            <div className="glass-card p-6">
              <FarmasiKayitFormuForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-6">
        <div className="container grid gap-3 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="glass-card p-4 text-sm">
              <p className="font-semibold text-ink">{item.title}</p>
              <p className="mt-1 text-ink-muted">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="container mt-6">
          <div className="glass-card space-y-3 p-4 text-sm text-ink-muted">
            <p className="font-semibold text-ink">Başvuru İçin Gerekli Bilgiler</p>
            <div className="flex flex-wrap gap-2">
              {requirements.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
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
