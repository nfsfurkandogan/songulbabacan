import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { createMetadata } from "@/lib/seo";
import { getAllPages, getPageBySlug } from "@/lib/pages";
import { mdxComponents } from "@/components/mdx-components";
import CtaStrip from "@/components/cta-strip";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPages().map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  try {
    const page = getPageBySlug(params.slug);
    return createMetadata({
      title: page.title,
      description: page.description,
      path: `/${page.slug}`
    });
  } catch (error) {
    return createMetadata({
      title: "Sayfa",
      description: "Sayfa bulunamadı.",
      path: `/${params.slug}`,
      noIndex: true
    });
  }
}

export default function ContentPage({ params }: PageProps) {
  let page;
  try {
    page = getPageBySlug(params.slug);
  } catch (error) {
    notFound();
  }

  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container space-y-4">
          <p className="section-kicker">Sayfa</p>
          <h1 className="text-4xl font-semibold md:text-5xl">{page.title}</h1>
          {page.description && <p className="max-w-2xl text-ink-muted">{page.description}</p>}
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.35fr]">
          <article className="prose prose-lg max-w-none">
            <MDXRemote source={page.content} components={mdxComponents} />
          </article>
          <aside className="space-y-6">
            <CtaStrip
              title="Sorularınız için yanınızdayım."
              description="Kazanç planı, ekip yapısı ve ürün bilgileri için hızlıca iletişime geçebilirsiniz."
            />
          </aside>
        </div>
      </section>
    </>
  );
}
