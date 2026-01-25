import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { getPageBySlug } from "@/lib/pages";
import { mdxComponents } from "@/components/mdx-components";
import JsonLd from "@/components/json-ld";
import JoinApplicationForm from "@/components/join-application-form";
import { Button } from "@/components/ui/button";

const page = getPageBySlug("farmasi-google-ads");

export const metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/farmasi-google-ads"
});

const highlights = [
  "%30 indirim fırsatı (yeni üyeler için)",
  "Sadece 18 yaş ve üzeri",
  "İndirim ve kampanyalara hızlı erişim",
  "Ücretsiz üyelik ile başlangıç"
];

export default function FarmasiGoogleAdsPage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container space-y-5">
          <p className="section-kicker">Farmasi Google Ads</p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Ücretsiz üye ol, Farmasi’nin büyülü dünyasını keşfet.
          </h1>
          <p className="max-w-2xl text-ink-muted md:text-lg">{page.description}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/kayit-ol">Formu Doldur</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </Link>
            </Button>
          </div>
          <ul className="mt-4 flex flex-wrap gap-3 text-sm text-ink-muted">
            {highlights.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.4fr]">
          <article className="prose prose-lg max-w-none">
            <MDXRemote source={page.content} components={mdxComponents} />
          </article>
          <aside className="space-y-6">
            <div className="glass-card p-6">
              <JoinApplicationForm />
            </div>
            <div className="glass-card p-6 text-sm text-ink-muted">
              Formu gönderdiğinizde WhatsApp veya e-posta üzerinden hızlı geri dönüş sağlıyoruz.
            </div>
          </aside>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: page.title,
          description: page.description,
          url: `${siteConfig.url}/farmasi-google-ads`,
          inLanguage: "tr-TR"
        }}
      />
    </>
  );
}
