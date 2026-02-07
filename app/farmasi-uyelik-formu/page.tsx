import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import FarmasiKayitFormuForm from "@/components/farmasi-kayit-formu-form";
import uyelikImage from "@/assets/img/uyelik.jpeg";

export const metadata = createMetadata({
  title: "Farmasi Üyelik Başvuru Formu",
  description:
    "Farmasi üyelik başvuru formu. Kısa formu doldurun; üyelik süreci ve avantajlar hakkında sizi bilgilendirelim.",
  path: "/farmasi-uyelik-formu"
});

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
          </div>
          <div className="gradient-border rounded-3xl p-[1px]">
            <div className="glass-card p-6">
              <FarmasiKayitFormuForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-6">
        <div className="container max-w-3xl space-y-6">
          <div className="glass-card p-6">
            <p className="text-base font-semibold text-ink">Başvuru Süreci</p>
            <ol className="mt-3 space-y-2 text-sm text-ink-muted">
              <li>1. Başvurunuz alınır.</li>
              <li>2. En kısa sürede sizinle iletişime geçilir.</li>
              <li>3. Detaylar net şekilde paylaşılır.</li>
              <li>4. Onayınızla üyelik aktif edilir.</li>
            </ol>
            <p className="mt-3 text-sm text-ink-muted">Süreç planlı ve destekli ilerler.</p>
          </div>

          <div className="glass-card p-6">
            <p className="text-base font-semibold text-ink">Neden Farmasi?</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-muted">
              <li>Özel indirim avantajı</li>
              <li>Kazanç fırsatı</li>
              <li>Eğitim ve ekip desteği</li>
              <li>Esnek çalışma imkanı</li>
            </ul>
            <p className="mt-3 text-sm text-ink-muted">
              Farmasi üyeliği, doğru sistemle büyüme fırsatı sunar.
            </p>
          </div>

          <div className="glass-card p-6">
            <p className="text-base font-semibold text-ink">Güven</p>
            <p className="mt-3 text-sm text-ink-muted">
              Süreç şeffaftır ve tamamen sizin onayınızla ilerler.
            </p>
          </div>

          <div className="glass-card overflow-hidden p-0">
            <Image
              src={uyelikImage}
              alt="Farmasi üyelik danışmanlığı"
              width={1200}
              height={1200}
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
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
