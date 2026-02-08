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
            <p className="section-kicker">FARMASİ RESMİ ÜYELİK</p>
            <h1 className="text-4xl font-semibold md:text-6xl">FARMASİ ÜYELİK</h1>
            <h2 className="text-2xl font-semibold text-ink md:text-3xl">
              Ücretsiz Üyelik Başvuru Formu
            </h2>
            <p className="text-ink-muted md:text-lg">
              Üyelik sürecini başlatmak için kısa formu doldurun. Şartlar ve avantajlar hakkında
              sizinle en kısa sürede iletişime geçelim.
            </p>
            <p className="text-sm font-semibold text-ink">
              Bu sayfa Farmasi üyelik başvurusu içindir.
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
            <p className="text-base font-semibold text-ink">Farmasi’de Yeni Bir Adım</p>
            <div className="mt-3 space-y-4 text-sm text-ink-muted">
              <div>
                <p className="font-semibold text-ink">🌿 Kişisel Destek</p>
                <p>
                  Başvuru sonrası size özel danışmanınız süreci birlikte planlar. İlk adımlarınızda
                  ve sonrasında yanınızda olur.
                </p>
              </div>
              <div>
                <p className="font-semibold text-ink">🌿 Ücretsiz ve Şeffaf Başlangıç</p>
                <p>
                  Üyelik ücretsizdir. Zorunlu ücret veya taahhüt yoktur. 18 yaşını doldurmanız
                  yeterlidir.
                </p>
              </div>
              <div>
                <p className="font-semibold text-ink">🌿 Avantaj ve Kazanç İmkanı</p>
                <p>
                  Ürünleri indirimli kullanabilir, satış yaparak ek gelir elde edebilir ve
                  dilerseniz ekibinizi kurarak büyüyebilirsiniz.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <p className="text-base font-semibold text-ink">Güvenle İlerleyin</p>
            <p className="mt-3 text-sm text-ink-muted">
              Babacanlar Grup Kurucu Lideri, Asbaşkan Direktör Songül Babacan ekibine hoş geldiniz.
              Bu yolculukta birlikteyiz.
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
