import Image from "next/image";
import Link from "next/link";
import { buildPostUrl, type PostMeta } from "@/lib/content-shared";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  post: PostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="glass-card overflow-hidden">
      <Link href={buildPostUrl(post.slug)} className="block">
        <div className="relative h-44 w-full">
          <Image
            src={post.cover ?? "/hero-spa.jpg"}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </Link>
      <div className="space-y-3 p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-ink-soft">
          <span>{post.category}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        <Link href={buildPostUrl(post.slug)}>
          <h3 className="text-xl font-semibold text-ink hover:text-brand">{post.title}</h3>
        </Link>
        <p className="text-sm text-ink-muted line-clamp-3">{post.description}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="soft">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
