import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { getPageBySlug } from "@/lib/pages";
import { mdxComponents } from "@/components/mdx-components";
import JsonLd from "@/components/json-ld";
import { Button } from "@/components/ui/button";

const page = getPageBySlug("network-marketingde-basariya-giden-yol-e-kitap-ile-guclenin");

export const metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/network-marketingde-basariya-giden-yol-e-kitap-ile-guclenin"
});

const ebookHighlights = [
  "Güncel bilgi ve stratejiler",
  "Esnek öğrenme deneyimi",
  "Derinlemesine anlatım ve rehberlik",
  "Sürekli gelişim odaklı içerik"
];

export default function NetworkMarketingEbookPage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container space-y-5">
          <p className="section-kicker">E-Kitap</p>
          <h1 className="text-4xl font-semibold md:text-5xl">{page.title}</h1>
          <p className="max-w-2xl text-ink-muted md:text-lg">{page.description}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/iletisim">E-Kitap Bilgisi Al</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/kazanc-plani">Kazanç Planı</Link>
            </Button>
          </div>
          <ul className="mt-4 flex flex-wrap gap-3 text-sm text-ink-muted">
            {ebookHighlights.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.35fr]">
          <article className="prose prose-lg max-w-none">
            <MDXRemote source={page.content} components={mdxComponents} />
          </article>
          <aside className="space-y-6">
            <div className="glass-card space-y-4 p-6">
              <h2 className="text-lg font-semibold">E-kitap avantajı</h2>
              <p className="text-sm text-ink-muted">
                Network marketingde başarının temelleri, hedef planlama ve ekip kurma stratejileri
                hakkında daha fazla bilgi için iletişime geçebilirsiniz.
              </p>
              <Button asChild className="w-full">
                <Link href="/iletisim">E-Kitap Talebi Gönder</Link>
              </Button>
            </div>
            <div className="glass-card p-6 text-sm text-ink-muted">
              E-kitap içeriği, network marketing yolculuğunda doğru bilgiye hızlı erişim sağlamak
              için hazırlanmıştır.
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
          url: `${siteConfig.url}/network-marketingde-basariya-giden-yol-e-kitap-ile-guclenin`
        }}
      />
    </>
  );
}
