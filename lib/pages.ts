import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PageMeta {
  slug: string;
  title: string;
  description: string;
}

export interface Page extends PageMeta {
  content: string;
}

const pagesDir = path.join(process.cwd(), "content", "pages");
const pageOverrides = new Set([
  "katalog",
  "prim-sistemi",
  "sss",
  "organizasyon-semasi",
  "hakkimda",
  "hizmetlerim",
  "farmasi-urunleri",
  "farmasi-askidan-alma",
  "egitimler",
  "referanslar",
  "sertifikalar",
  "farmasi-baslangic-paketi",
  "farmasi-hosgeldin-hediyeleri",
  "farmasi-tesvik-kampanyalari",
  "farmasi-girisimci-avantajlari",
  "farmasi-sponsor",
  "farmasi-influencer",
  "farmasi-google-ads",
  "network-marketingde-basariya-giden-yol-e-kitap-ile-guclenin"
]);

export function getAllPages(): PageMeta[] {
  if (!fs.existsSync(pagesDir)) return [];

  return fs
    .readdirSync(pagesDir)
    .filter((file) => file.endsWith(".mdx"))
    .filter((file) => !pageOverrides.has(file.replace(/\.mdx$/, "")))
    .map((file) => getPageBySlug(file.replace(/\.mdx$/, "")))
    .map(({ content: _content, ...meta }) => meta)
    .sort((a, b) => a.title.localeCompare(b.title, "tr"));
}

export function getPageBySlug(slug: string): Page {
  const filePath = path.join(pagesDir, `${slug}.mdx`);
  const file = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(file);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    content
  };
}
