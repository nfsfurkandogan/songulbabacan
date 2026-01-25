import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const levels = [
  { range: "5.000 - 8.999 TL", rate: "%9" },
  { range: "9.000 - 13.999 TL", rate: "%12" },
  { range: "14.000 - 21.999 TL", rate: "%15" },
  { range: "22.000 - 35.999 TL", rate: "%18" },
  { range: "36.000 - 49.999 TL", rate: "%22" },
  { range: "50.000 TL ve üzeri", rate: "%25" }
];

const primRules = [
  "500 TL aktiflik şartı (kişisel puan).",
  "5.000 TL grup veya kişisel ciro ile prim hak edişi başlar.",
  "600 TL ve üzeri primler banka hesabına yatırılır.",
  "Prim ödeme günü her ayın 20’sidir."
];

const accordionItems = [
  {
    title: "Farmasi Prim Sistemi Nasıl İşler?",
    paragraphs: [
      "Farmasi prim sistemi adil bir şekilde kurgulanmıştır; kazanç, kişinin kendi emeğine ve seviyesine göre belirlenir.",
      "Prim dağıtımı ekibin en altından başlar ve herkes kendi seviyesine göre prim alır. Bu yapı, şeffaf ve sürdürülebilir bir kazanç modeli sunar."
    ]
  },
  {
    title: "Farmasi Prim Nasıl Kullanılır?",
    paragraphs: [
      "Primler iki şekilde kullanılır: Farmasi sayfanızda alışverişlerinizde kullanabilir veya banka hesabınıza aktarılmasını sağlayabilirsiniz.",
      "Banka bilgileriniz hesabınıza tanımlı olmalıdır; farklı isimli hesaplara ödeme yapılmaz. 600 TL altındaki tutarlar sayfanızda birikir."
    ]
  },
  {
    title: "Farmasi’de Prim Nasıl Alınır?",
    paragraphs: [
      "Prim alabilmek için 500 TL aktiflik şartını sağlamak ve 5.000 TL grup veya kişisel ciroya ulaşmak gerekir.",
      "Farmasi, kişisel cirodan da prim öder. Kişisel cironuz grup cironuza dahildir."
    ]
  },
  {
    title: "Farmasi Lider Yetiştirme Primi Nedir?",
    paragraphs: [
      "Lider yetiştirme primi, ekibinizde %18 (20.000 TL) ve üzeri kariyerler oluştuğunda verilen ilave primdir.",
      "Ekip büyüdükçe priminiz düşmez; aksine artar. Böylece liderler çıktıkça kazancınız da yükselir."
    ]
  },
  {
    title: "Farmasi Lider Yetiştirme Primi Seviye Oranları",
    paragraphs: [
      "Lider yetiştirme prim oranları kariyere göre artış gösterir. Kariyer yükseldikçe bu katsayı da yükselir.",
      "Müdür ve Direktör seviyelerine 4. nesil kazanç eklenmiştir. Güncel oranlar dönemsel olarak güncellenebilir."
    ]
  },
  {
    title: "Farmasi Prim Ödeme Tarihleri",
    paragraphs: [
      "Prim ödemeleri her ayın 20’sinde yapılır. Vergi mükellefi olan girişimciler faturayı ayın 20’sinde keser ve ödemeyi ayın 27’sinde alır.",
      "Resmi tatillere denk geldiğinde ödeme ilk iş gününde yapılır. 600 TL ve üzeri primler banka hesabına yatırılır."
    ]
  },
  {
    title: "Farmasi Prim Nereye Yatar?",
    paragraphs: [
      "Banka bilgisi girilmediğinde primler Farmasi sayfanıza aktarılır ve burada birikir.",
      "600 TL üzerine çıktığında banka hesabınıza yatırılır. Bu tutarları isterseniz alışverişte kullanabilir, isterseniz biriktirebilirsiniz."
    ]
  },
  {
    title: "Farmasi Kimler Prim Alır?",
    paragraphs: [
      "Farmasi’de herkes prim alabilir. 500 TL aktiflik ve 5.000 TL ciro şartı sağlandığında prim hak edişi oluşur."
    ]
  },
  {
    title: "Farmasi ile Ne Kadar Kazanılır?",
    paragraphs: [
      "Farmasi’de kazanmanın bir limiti yoktur. Katalogdan %30 kâr ile başlanır, hediyeler ve prim kazancı ile gelir artar.",
      "Satış, hediye ve prim kazancı bir araya geldiğinde sürdürülebilir bir gelir modeli oluşur."
    ]
  },
  {
    title: "Farmasi Prim Değersiz Ne Demek?",
    paragraphs: [
      "Bazı ürünlerde yüksek indirim olduğunda prim verilmez. Bu ürünler “prim değersiz” olarak işaretlenir.",
      "Prim değersiz ürünler şans broşüründe veya resmi duyurularda belirtilir."
    ]
  },
  {
    title: "Farmasi Prim Değerli Ne Demek?",
    paragraphs: [
      "Prim değerli demek, üründen prim ve hediye kazanılabileceği anlamına gelir.",
      "Katalogdaki ürünlerin çoğu prim değerlidir; istisnalar duyurularla paylaşılır."
    ]
  }
];

export const metadata = createMetadata({
  title: "Prim Sistemi",
  description: "Farmasi prim seviyeleri, kazanç oranları ve ödeme takvimi hakkında güncel bilgi.",
  path: "/prim-sistemi"
});

export default function PrimSistemiPage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="section-kicker">Prim Sistemi</p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Farmasi yeni prim sistemi ve seviyeler.
            </h1>
            <p className="max-w-2xl text-ink-muted md:text-lg">
              5.000 TL cirodan itibaren %9 prim ile kazanmaya başlarsınız. Seviyeler yükseldikçe
              oranlar %25’e kadar çıkar ve kazanç artar.
            </p>
            <ul className="space-y-2 text-sm text-ink-muted">
              {primRules.map((rule) => (
                <li key={rule} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp ile Detay Al
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/kazanc-plani">Kazanç Planı</Link>
              </Button>
            </div>
          </div>
          <div className="glass-card overflow-hidden">
            <Image
              src="/prim-sistemi-chart.png"
              alt="Prim sistemi tablo"
              width={900}
              height={620}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="section-kicker">Seviyeler</p>
            <h2 className="section-title">Farmasi yeni prim seviyeleri</h2>
            <p className="text-ink-muted">
              Grup cirosu ile yükselerek %9, %12, %15, %18, %22 ve %25 oranlarına ulaşırsınız.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {levels.map((level) => (
              <div key={level.range} className="glass-card p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">Ciro Araligi</p>
                <p className="mt-2 text-lg font-semibold">{level.range}</p>
                <p className="mt-4 text-3xl font-semibold text-brand">{level.rate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-section-glow">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-4">
            <p className="section-kicker">Detaylar</p>
            <h2 className="section-title">Prim sistemi nasıl ilerler?</h2>
            <p className="text-ink-muted">
              Farmasi prim sistemi sade ve anlaşılırdır. Aktiflik şartını sağladığınızda, grup veya
              kişisel ciro üzerinden prim hak edişi oluşur.
            </p>
            <div className="glass-card p-6 text-sm text-ink-muted">
              Primler 600 TL üzerine çıktığında banka hesabına aktarılır. Altında kalan tutarlar
              Farmasi sayfanızda birikir ve alışverişlerde kullanılabilir.
            </div>
          </div>
          <div className="glass-card p-6">
            <Accordion type="single" collapsible>
              {accordionItems.map((item) => (
                <AccordionItem key={item.title} value={item.title}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      {item.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
