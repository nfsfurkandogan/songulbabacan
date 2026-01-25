import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { getPageBySlug } from "@/lib/pages";
import { mdxComponents } from "@/components/mdx-components";
import JsonLd from "@/components/json-ld";
import JoinTrigger from "@/components/join-trigger";
import { Button } from "@/components/ui/button";

const page = getPageBySlug("farmasi-sponsor");

export const metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/farmasi-sponsor"
});

export default function FarmasiSponsorPage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container space-y-5">
          <p className="section-kicker">Farmasi Sponsor</p>
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
            <div className="glass-card space-y-4 p-6">
              <h2 className="text-lg font-semibold">Sponsor Kodu</h2>
              <p className="text-sm text-ink-muted">
                Farmasi sponsorluğu ile rehberlik desteği almak için kayıtlarda sponsor kodunu
                kullanabilirsiniz.
              </p>
              <div className="rounded-2xl border border-border bg-white/80 p-4 text-center text-lg font-semibold">
                {siteConfig.sponsorCode}
              </div>
            </div>
            <div className="glass-card p-6 text-sm text-ink-muted">
              Sponsorunuzla birlikte planlı bir başlangıç, eğitim ve ekip desteğiyle sürdürülebilir
              bir sistem kurabilirsiniz.
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
          url: `${siteConfig.url}/farmasi-sponsor`
        }}
      />
    </>
  );
}
