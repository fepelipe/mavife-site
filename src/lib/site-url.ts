/**
 * Prefer the canonical production URL for SEO outputs (sitemap, OG, JSON-LD).
 * Preview deployments should set NEXT_PUBLIC_SITE_URL when indexing matters.
 */
export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (configured) return configured;

  // Prefer stable production host over ephemeral preview URLs for metadata.
  if (process.env.VERCEL_ENV === "production" && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, "")}`;
  }

  if (process.env.VERCEL_URL && process.env.VERCEL_ENV === "production") {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }

  return "https://mavife.vercel.app";
}
