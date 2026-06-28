import Image from "next/image";
import Link from "next/link";
import { site, siteContent } from "@/lib/content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="section-x py-12 md:py-20">
      <div className="mx-auto grid max-w-content items-end gap-8 md:grid-cols-12 md:gap-6">
        <div className="flex flex-col gap-8 md:col-span-5 md:pb-12">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-[0.3em] text-muted uppercase">
              {site.tagline}
            </p>
            <p className="text-sm text-muted">{hero.eyebrow}</p>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] font-medium tracking-tight text-ink">
            {hero.title}
          </h1>
          <p className="max-w-sm text-body text-muted">{hero.description}</p>
          <Link href={hero.cta.href} target="_blank" rel="noopener noreferrer" className="btn-primary w-fit">
            {hero.cta.label}
          </Link>
        </div>
        <div className="relative aspect-[4/5] md:col-span-7 md:aspect-auto md:h-[min(80vh,720px)]">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
        </div>
      </div>
    </section>
  );
}
