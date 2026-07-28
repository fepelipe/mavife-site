import Image from "next/image";
import Link from "next/link";
import { externalLinkLabel } from "@/lib/a11y";
import { siteContent } from "@/lib/content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-svh overflow-hidden" aria-labelledby="hero-heading">
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        fetchPriority="high"
        quality={75}
        placeholder="blur"
        blurDataURL={hero.image.blurDataURL}
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-r from-jungle/95 via-jungle/80 to-jungle/45" aria-hidden="true" />
      <div className="section-x relative flex min-h-svh items-center py-20">
        <div className="mx-auto flex w-full max-w-content flex-col gap-6 rounded-soft bg-jungle/25 p-1 md:max-w-xl md:bg-transparent md:p-0">
          <p className="text-sm font-semibold tracking-[0.2em] text-clay uppercase">{hero.eyebrow}</p>
          <h1
            id="hero-heading"
            className="font-heading text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.1] font-semibold text-white"
          >
            {hero.title}
          </h1>
          <p className="max-w-prose text-body text-white/90">{hero.description}</p>
          <div>
            <Link
              href={hero.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={externalLinkLabel(hero.cta.label)}
              className="btn-primary"
            >
              {hero.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
