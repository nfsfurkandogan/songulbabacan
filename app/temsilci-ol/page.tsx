import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { getPageBySlug } from "@/lib/pages";
import { mdxComponents } from "@/components/mdx-components";
import JsonLd from "@/components/json-ld";
import JoinTrigger from "@/components/join-trigger";
import { Button } from "@/components/ui/button";

const page = getPageBySlug("temsilci-ol");

export const metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/temsilci-ol"
});

const advantages = [
  "Esnek çalışma saatleri",
  "Yüksek komisyon oranları",
  "Ekstra gelir fırsatları",
  "Takım kurma"
];

const incomeTiers = [
  { label: "Başlangıç seviyesi", value: "1.000–2.000 TL" },
  { label: "Orta seviye", value: "5.000–10.000 TL" },
  { label: "Üst seviye", value: "10.000 TL ve üzeri" }
];

export default function RepresentativePage() {
  return (
    <>
      <section className="section bg-hero-sheen hero-compact">
        <div className="container space-y-5">
          <p className="section-kicker">Temsilci Ol</p>
          <h1 className="text-4xl font-semibold md:text-5xl">{page.title}</h1>
          <p className="max-w-2xl text-ink-muted md:text-lg">{page.description}</p>
          <div className="flex flex-wrap gap-3">
            <JoinTrigger>Üye Ol</JoinTrigger>
            <Button asChild variant="outline">
              <Link href="/kayit-ol">Kayıt Formu</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.35fr]">
          <article className="prose prose-lg max-w-none">
            <MDXRemote source={page.content} components={mdxComponents} />
          </article>
          <aside className="space-y-6">
            <div className="glass-card space-y-3 p-6">
              <h2 className="text-lg font-semibold">Avantajlar</h2>
              <ul className="space-y-2 text-sm text-ink-muted">
                {advantages.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card space-y-3 p-6">
              <h2 className="text-lg font-semibold">Gelir potansiyeli</h2>
              <div className="space-y-2 text-sm text-ink-muted">
                {incomeTiers.map((tier) => (
                  <div key={tier.label} className="flex items-center justify-between gap-3">
                    <span>{tier.label}</span>
                    <span className="font-semibold text-ink">{tier.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card overflow-hidden">
              <Image
                src="/songul1.jpeg"
                alt="Farmasi'ye takım arkadaşları aranıyor görseli"
                width={720}
                height={1080}
                className="h-auto w-full object-contain"
              />
            </div>
          </aside>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: page.title,
          author: {
            "@type": "Person",
            name: siteConfig.name
          },
          url: `${siteConfig.url}/temsilci-ol`
        }}
      />
    </>
  );
}
