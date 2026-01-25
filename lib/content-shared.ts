export interface TocItem {
  level: number;
  text: string;
  slug: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category?: string;
  tags: string[];
  cover?: string;
  readingTime: string;
}

const turkishMap: Record<string, string> = {
  "ç": "c",
  "ğ": "g",
  "ı": "i",
  "ö": "o",
  "ş": "s",
  "ü": "u",
  "Ç": "c",
  "Ğ": "g",
  "İ": "i",
  "Ö": "o",
  "Ş": "s",
  "Ü": "u"
};

function slugify(value: string) {
  return value
    .split("")
    .map((char) => turkishMap[char] ?? char)
    .join("")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function buildPostUrl(slug: string) {
  return `/blog/${slug}`;
}

export function createHeadingId(text: string) {
  return slugify(text);
}
