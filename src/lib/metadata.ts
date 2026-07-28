import type { Metadata } from "next";
import { site } from "@/lib/content";
import { images } from "@/lib/images";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

const ogImage = {
  url: images.og.src,
  width: images.og.width,
  height: images.og.height,
  alt: images.og.alt,
};

const sharedOpenGraph = {
  type: "website" as const,
  locale: "pt_BR",
  siteName: site.name,
  images: [ogImage],
};

function languageAlternates(path: string) {
  const normalized = path === "/" ? "/" : path;
  return {
    canonical: normalized,
    languages: {
      "pt-BR": normalized,
      "x-default": normalized,
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  category: "floricultura",
  keywords: [
    "Mavife Atelier Verde",
    "floricultura Manaus",
    "arranjos artesanais Manaus",
    "decoração com plantas",
    "centros de mesa",
    "hidroponia",
    "kokedama",
    "flora amazônica",
  ],
  alternates: languageAlternates("/"),
  openGraph: {
    ...sharedOpenGraph,
    title: site.title,
    description: site.description,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [images.og.src],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: languageAlternates(path),
    openGraph: {
      ...sharedOpenGraph,
      title,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [images.og.src],
    },
  };
}
