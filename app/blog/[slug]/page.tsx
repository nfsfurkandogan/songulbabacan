import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { createMetadata } from "@/lib/seo";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import { buildPostUrl } from "@/lib/content-shared";
import { Badge } from "@/components/ui/badge";
import { mdxComponents } from "@/components/mdx-components";
import JsonLd from "@/components/json-ld";
import { siteConfig } from "@/lib/siteConfig";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  try {
    const post = getPostBySlug(params.slug);
    return createMetadata({
      title: post.title,
      description: post.description,
      path: buildPostUrl(post.slug),
      image: post.cover
    });
  } catch (error) {
    return createMetadata({
      title: "Blog",
      description: "Blog yazısı bulunamadı.",
      path: "/blog",
      noIndex: true
    });
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = (() => {
    try {
      return getPostBySlug(params.slug);
    } catch (error) {
      notFound();
    }
  })();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: siteConfig.name
    },
    image: post.cover ? `${siteConfig.url}${post.cover}` : `${siteConfig.url}/og-image.png`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${buildPostUrl(post.slug)}`
    }
  };

  return (
    <section className="section">
      <div className="container space-y-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.35fr]">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-ink-muted">{post.category}</p>
              <h1 className="text-4xl font-semibold md:text-5xl">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-ink-muted">
                <span>{new Date(post.date).toLocaleDateString("tr-TR")}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
            </div>
            <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-white/60 shadow-soft">
              <Image
                src={post.cover ?? "/hero-spa.jpg"}
                alt={post.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <article className="prose prose-lg max-w-none">
              <MDXRemote source={post.content} components={mdxComponents} />
            </article>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="soft">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <aside className="space-y-6">
            {post.toc.length > 0 && (
              <div className="glass-card p-6">
                <p className="text-sm font-semibold">İçindekiler</p>
                <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                  {post.toc.map((item) => (
                    <li key={item.slug} className={item.level === 3 ? "pl-4" : ""}>
                      <a href={`#${item.slug}`} className="hover:text-ink">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="glass-card p-6">
              <p className="text-sm font-semibold">Bir sonraki adım</p>
              <p className="mt-2 text-sm text-ink-muted">
                Bu içerik size ilham verdiyse, kazanç planınızı birlikte detaylandıralım.
              </p>
              <a
                href={siteConfig.contact.whatsapp}
                className="mt-4 inline-flex items-center rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white"
              >
                WhatsApp ile yaz
              </a>
            </div>
          </aside>
        </div>
      </div>
      <JsonLd data={articleJsonLd} />
    </section>
  );
}
