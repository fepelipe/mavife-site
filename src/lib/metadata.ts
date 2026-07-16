import type { Metadata } from "next";
import { site } from "@/lib/content";
import { images } from "@/lib/images";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

const sharedOpenGraph = {
  type: "website" as const,
  locale: "pt_BR",
  siteName: site.name,
  images: [
    {
      url: images.brand.logo.src,
      width: images.brand.logo.width,
      height: images.brand.logo.height,
      alt: images.brand.logo.alt,
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
    images: [images.brand.logo.src],
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
      images: [images.brand.logo.src],
    },
  };
}
