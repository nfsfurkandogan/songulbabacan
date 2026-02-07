import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { getAllPosts } from "@/lib/content";
import { getAllPages } from "@/lib/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const pages = getAllPages();
  const routes = [
    "",
    "/hakkinda",
    "/hakkimda",
    "/hizmetlerim",
    "/egitimler",
    "/referanslar",
    "/sertifikalar",
    "/kazanc-plani",
    "/blog",
    "/iletisim",
    "/basari-hikayem",
    "/farmasi",
    "/farmasi-urunleri",
    "/farmasi-baslangic-paketi",
    "/farmasi-hosgeldin-hediyeleri",
    "/farmasi-tesvik-kampanyalari",
    "/farmasi-girisimci-avantajlari",
    "/farmasi-askidan-alma",
    "/farmasi-sponsor",
    "/farmasi-influencer",
    "/farmasi-kayit-formu",
    "/network-marketingde-basariya-giden-yol-e-kitap-ile-guclenin",
    "/kayit-ol",
    "/katalog",
    "/prim-sistemi",
    "/sss",
    "/organizasyon-semasi",
    "/privacy",
    "/kvkk",
    "/cerez",
    "/politikalar"
  ];

  const staticEntries = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date()
  }));

  const blogEntries = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date)
  }));

  const pageEntries = pages.map((page) => ({
    url: `${siteConfig.url}/${page.slug}`,
    lastModified: new Date()
  }));

  return [...staticEntries, ...blogEntries, ...pageEntries];
}
