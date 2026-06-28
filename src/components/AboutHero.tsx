import Image from "next/image";
import { siteContent } from "@/lib/content";

export function AboutHero() {
  const { about } = siteContent;

  return (
    <section className="section-x bg-surface py-16 md:py-24">
      <div className="mx-auto grid max-w-content items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden md:order-2">
          <Image
            src={about.image.src}
            alt={about.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="flex flex-col gap-6 md:order-1">
          <p className="text-sm font-semibold tracking-widest text-leaf uppercase">Sobre</p>
          <h1 className="text-h2 text-ink">{about.title}</h1>
          <p className="text-body text-muted">{about.bio}</p>
        </div>
      </div>
    </section>
  );
}
