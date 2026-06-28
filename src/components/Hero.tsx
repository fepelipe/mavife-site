import Image from "next/image";
import Link from "next/link";
import { site, siteContent } from "@/lib/content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="fiber-bg section-x py-16 md:py-24">
      <div className="mx-auto grid max-w-content items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="order-2 flex flex-col items-center gap-6 text-center md:order-1 md:items-start md:text-left">
          <span className="rounded-full bg-wicker/30 px-4 py-1 text-xs font-semibold tracking-widest text-accent uppercase">
            {site.tagline}
          </span>
          <p className="text-sm font-medium text-muted">{hero.eyebrow}</p>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-tight text-ink">
            {hero.title}
          </h1>
          <p className="max-w-prose text-body text-muted">{hero.description}</p>
          <Link href={hero.cta.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {hero.cta.label}
          </Link>
        </div>
        <div className="order-1 md:order-2">
          <div className="basket-frame relative aspect-square overflow-hidden">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
