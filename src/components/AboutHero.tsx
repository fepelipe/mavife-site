import Image from "next/image";
import { site, siteContent } from "@/lib/content";

export function AboutHero() {
  const { about } = siteContent;

  return (
    <section className="section-x bg-surface py-16 md:py-24">
      <div className="mx-auto grid max-w-content items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="woven-border relative aspect-[4/5] overflow-hidden">
          <Image
            src={about.image.src}
            alt={about.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            {site.tagline} · Manaus
          </p>
          <h1 className="text-h2 text-jungle">{about.title}</h1>
          <p className="text-body text-muted">{about.bio}</p>
        </div>
      </div>
    </section>
  );
}
