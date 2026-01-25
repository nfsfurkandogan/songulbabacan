"use client";

import { useMemo, useState } from "react";
import BlogCard from "@/components/blog-card";
import type { PostMeta } from "@/lib/content-shared";
import { cn } from "@/lib/utils";

interface BlogListProps {
  posts: PostMeta[];
  tags: string[];
  initialQuery?: string;
}

export default function BlogList({ posts, tags, initialQuery = "" }: BlogListProps) {
  const [query, setQuery] = useState(initialQuery);
  const [activeTag, setActiveTag] = useState("Tümü");

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesQuery =
        query.length === 0 ||
        `${post.title} ${post.description}`.toLowerCase().includes(query.toLowerCase());
      const matchesTag = activeTag === "Tümü" || post.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [posts, query, activeTag]);

  return (
    <div className="space-y-8">
      <div className="glass-card flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Blog yazılarında ara..."
          className="w-full rounded-full border border-border bg-white/90 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring md:max-w-sm"
        />
        <div className="flex flex-wrap gap-2">
          {["Tümü", ...tags].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={cn(
                "rounded-full border border-border px-4 py-2 text-xs font-medium",
                activeTag === tag
                  ? "bg-brand text-white"
                  : "bg-white/80 text-ink-muted hover:text-ink"
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      {filtered.length === 0 ? (
        <p className="text-sm text-ink-muted">Aradığınız kriterlere uygun içerik bulunamadı.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
