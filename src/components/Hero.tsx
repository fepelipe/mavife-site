import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="section-x bg-surface py-16 md:py-24">
      <div className="mx-auto grid max-w-content items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold tracking-widest text-leaf uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-tight font-semibold text-ink">
            {hero.title}
          </h1>
          <p className="max-w-prose text-body text-muted">{hero.description}</p>
          <div>
            <Link href={hero.cta.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {hero.cta.label}
            </Link>
          </div>
        </div>
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            width={hero.image.width}
            height={hero.image.height}
            priority
            className="size-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
