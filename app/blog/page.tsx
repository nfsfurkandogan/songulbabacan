import BlogList from "@/components/blog-list";
import { createMetadata } from "@/lib/seo";
import { getAllPosts, getAllTags } from "@/lib/content";

export const metadata = createMetadata({
  title: "Blog",
  description: "Farmasi, girişimcilik ve mentorluk üzerine güncel içerikler.",
  path: "/blog"
});

export default function BlogPage({
  searchParams
}: {
  searchParams?: { query?: string };
}) {
  const posts = getAllPosts();
  const tags = getAllTags(posts);
  const initialQuery = searchParams?.query ?? "";

  return (
    <section className="section">
      <div className="container space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="section-kicker">Blog</p>
          <h1 className="text-4xl font-semibold md:text-5xl">Girişimcilik için güncel içerikler</h1>
          <p className="text-ink-muted">
            Farmasi ile gelir planı oluşturma, liderlik gelişimi ve dijital satış stratejileri.
          </p>
        </div>
        <BlogList posts={posts} tags={tags} initialQuery={initialQuery} />
      </div>
    </section>
  );
}
