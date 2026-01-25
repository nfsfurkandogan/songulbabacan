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
  { range: "50.000 TL ve uzeri", rate: "%25" }
];

const faq = [
  {
    q: "Prim sistemi nasil isler?",
    a: "Primler, grup ve kisisel cironuzun toplamina gore belirlenir. 5.000 TL barajini gectiginizde prim hak edisi baslar."
  },
  {
    q: "Primler ne zaman odeme olur?",
    a: "Prim odemeleri her ayin 20'sinde yapilir. 600 TL ve uzeri tutarlar banka hesabina aktarilir."
  },
  {
    q: "Primlerimi nasil kullanabilirim?",
    a: "Farmasi sayfanizdaki bakiyeyi alisverislerinizde kullanabilir veya banka hesabina aktarabilirsiniz."
  }
];

export const metadata = createMetadata({
  title: "Prim Sistemi",
  description: "Farmasi prim seviyeleri, kazanc oranlari ve odeme takvimi hakkinda guncel bilgi.",
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
              Farmasi kazanc sistemini net, anlasilir ve takip edilebilir hale getiriyoruz.
            </h1>
            <p className="max-w-2xl text-ink-muted md:text-lg">
              Primler; kisisel ve ekip ciro hedeflerinize gore seviye seviye artar. Disiplinli bir
              planlama ile kazancinizi istikrarli hale getirebilirsiniz.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp ile Detay Al
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/kazanc-plani">Kazanc Plani</Link>
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
            <h2 className="section-title">Yeni prim seviyeleri</h2>
            <p className="text-ink-muted">
              5.000 TL cirodan itibaren prim hak edisi baslar. Seviye yukseliyor, oranlar artiyor.
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
            <h2 className="section-title">Prim sistemi nasil ilerler?</h2>
            <p className="text-ink-muted">
              Farmasi prim sistemi adildir; herkes kendi emegine ve seviyesine gore kazanc elde eder.
              500 TL aktiflik sarti ve 5.000 TL grup ciro baraji temel gerekliliklerdir.
            </p>
            <div className="glass-card p-6 text-sm text-ink-muted">
              Primler 600 TL uzerine ciktiginda banka hesabina aktarilir. Altinda kalan tutarlar
              Farmasi sayfanizda birikir ve alisverislerde kullanilabilir.
            </div>
          </div>
          <div className="glass-card p-6">
            <Accordion type="single" collapsible>
              {faq.map((item) => (
                <AccordionItem key={item.q} value={item.q}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
