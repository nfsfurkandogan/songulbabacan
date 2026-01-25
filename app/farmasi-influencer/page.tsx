import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { getPageBySlug } from "@/lib/pages";
import { mdxComponents } from "@/components/mdx-components";
import JsonLd from "@/components/json-ld";
import JoinTrigger from "@/components/join-trigger";
import { Button } from "@/components/ui/button";

const page = getPageBySlug("farmasi-influencer");

export const metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/farmasi-influencer"
});

const steps = [
  "Sosyal medya profilini güçlendir.",
  "Farmasi ürünlerini deneyimle ve içerik üret.",
  "Başvuru formunu doldur ve onayı bekle.",
  "Düzenli ve kaliteli içerik ile gelişimini sürdür."
];

export default function FarmasiInfluencerPage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container space-y-5">
          <p className="section-kicker">Farmasi Influencer</p>
          <h1 className="text-4xl font-semibold md:text-5xl">{page.title}</h1>
          <p className="max-w-2xl text-ink-muted md:text-lg">
            Farmasi influencer programı, sosyal medyada gelir elde etmek ve markanızı büyütmek için
            bir fırsat sunar.
          </p>
          <div className="flex flex-wrap gap-3">
            <JoinTrigger>Üye Ol</JoinTrigger>
            <Button asChild variant="outline">
              <Link href="/kayit-ol">Başvuru Formu</Link>
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
              <h2 className="text-lg font-semibold">Başvuru adımları</h2>
              <ol className="space-y-2 text-sm text-ink-muted">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-xs font-semibold text-brand">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="glass-card p-6 text-sm text-ink-muted">
              Influencer programı ile içerik üretiminde tutarlılık ve güvenilirlik, uzun vadeli
              başarı için kritik rol oynar.
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
          url: `${siteConfig.url}/farmasi-influencer`
        }}
      />
    </>
  );
}
