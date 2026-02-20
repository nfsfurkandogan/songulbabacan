import type { Metadata } from "next";
import { siteConfig } from "./siteConfig";

interface SeoInput {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function createMetadata({ title, description, path = "", image, noIndex }: SeoInput): Metadata {
  const metadataBase = new URL(siteConfig.url);
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const fullDescription = description ?? siteConfig.description;
  const canonical = new URL(path, siteConfig.url).toString();
  const ogImage = image ? new URL(image, siteConfig.url).toString() : `${siteConfig.url}/og-image.png`;

  return {
    metadataBase,
    title: fullTitle,
    description: fullDescription,
    alternates: {
      canonical
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      title: fullTitle,
      description: fullDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [ogImage]
    },
    icons: {
      icon: "/favicon.ico"
    },
    manifest: "/manifest.webmanifest",
    robots: noIndex ? { index: false, follow: false } : undefined
  };
}
