import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { PostMeta, TocItem } from "./content-shared";
import { createHeadingId } from "./content-shared";

export interface Post extends PostMeta {
  content: string;
  toc: TocItem[];
}

const contentDir = path.join(process.cwd(), "content", "blog");

function stripMarkdown(content: string) {
  return content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]*`/g, "")
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    .replace(/[#>*_~\-]+/g, " ")
    .replace(/\n+/g, " ")
    .trim();
}

function getToc(content: string): TocItem[] {
  const lines = content.split("\n");
  const toc: TocItem[] = [];

  for (const line of lines) {
    const match = /^(#{2,3})\s+(.*)/.exec(line.trim());
    if (!match) continue;

    const level = match[1].length;
    const text = match[2].replace(/\{#.*?\}/, "").trim();
    toc.push({ level, text, slug: createHeadingId(text) });
  }

  return toc;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(contentDir)) return [];

  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => getPostBySlug(file.replace(/\.mdx$/, "")))
    .map(({ content: _content, toc: _toc, ...meta }) => meta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  const file = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(file);

  const reading = readingTime(content);
  const description =
    typeof data.description === "string" && data.description.length > 0
      ? data.description
      : stripMarkdown(content).slice(0, 160);

  const tags = Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [];

  return {
    slug,
    title: data.title ?? slug,
    description,
    date: data.date ?? new Date().toISOString(),
    category: data.category ?? "Genel",
    tags,
    cover: data.cover ?? undefined,
    readingTime: reading.text,
    content,
    toc: getToc(content)
  };
}

export function getAllTags(posts: PostMeta[]) {
  const tagSet = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}
