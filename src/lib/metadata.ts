import type { Metadata } from "next";
import { site, siteContent } from "@/lib/content";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

const sharedOpenGraph = {
  type: "website" as const,
  locale: "pt_BR",
  siteName: site.name,
  images: [
    {
      url: siteContent.hero.image.src,
      width: siteContent.hero.image.width,
      height: siteContent.hero.image.height,
      alt: siteContent.hero.image.alt,
    },
  ],
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
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
    images: [siteContent.hero.image.src],
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
    alternates: {
      canonical: path,
    },
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
      images: [siteContent.hero.image.src],
    },
  };
}
