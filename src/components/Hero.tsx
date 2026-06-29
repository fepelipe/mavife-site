import Image from "next/image";
import Link from "next/link";
import { site, siteContent } from "@/lib/content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-r from-jungle/90 via-jungle/70 to-jungle/30" />
      <div className="section-x relative flex min-h-[85vh] items-center py-20">
        <div className="mx-auto flex w-full max-w-content flex-col gap-6 md:max-w-xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-clay uppercase">
            {site.tagline} · {hero.eyebrow.split("·")[1]?.trim() ?? hero.eyebrow}
          </p>
          <h1 className="font-heading text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.1] font-semibold text-white">
            {hero.title}
          </h1>
          <p className="max-w-prose text-body text-white/85">{hero.description}</p>
          <div>
            <Link
              href={hero.cta.href}
              target="_blank"
              rel="noopener noreferrer"
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
