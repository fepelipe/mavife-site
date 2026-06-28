import Image from "next/image";
import { site, siteContent } from "@/lib/content";

export function AboutHero() {
  const { about } = siteContent;

  return (
    <section className="section-x py-16 md:py-24">
      <div className="mx-auto max-w-content text-center">
        <p className="mb-2 text-sm font-semibold tracking-widest text-wicker uppercase">
          {site.tagline} · Manaus
        </p>
        <h1 className="text-h2 mb-8 text-ink">{about.title}</h1>
        <div className="basket-frame relative mx-auto mb-10 aspect-video max-w-2xl overflow-hidden">
          <Image
            src={about.image.src}
            alt={about.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
            priority
          />
        </div>
        <p className="mx-auto max-w-2xl text-body text-muted">{about.bio}</p>
      </div>
    </section>
  );
}
