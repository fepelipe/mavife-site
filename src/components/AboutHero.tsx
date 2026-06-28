import Image from "next/image";
import { site, siteContent } from "@/lib/content";

export function AboutHero() {
  const { about } = siteContent;

  return (
    <section className="section-x py-16 md:py-24">
      <div className="mx-auto grid max-w-content gap-12 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold tracking-[0.3em] text-muted uppercase">
            {site.tagline} · Manaus
          </p>
          <h1 className="text-h2 text-ink">{about.title}</h1>
          <p className="text-body text-muted">{about.bio}</p>
        </div>
        <div className="relative aspect-[5/4] bg-surface">
          <Image
            src={about.image.src}
            alt={about.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
