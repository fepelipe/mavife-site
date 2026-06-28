import Image from "next/image";
import Link from "next/link";
import { getWhatsAppUrl, siteContent } from "@/lib/content";

export function ArrangementsGrid() {
  const { arrangements } = siteContent;

  return (
    <section id={arrangements.id} className="section-x border-t border-ink/10 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <div className="mb-16 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="text-h2 text-ink">{arrangements.title}</h2>
          <p className="max-w-xs text-body text-muted">{arrangements.description}</p>
        </div>
        <ul className="grid gap-12 md:grid-cols-3 md:gap-8">
          {arrangements.items.map((item, index) => (
            <li key={item.title} className="group flex flex-col gap-6">
              <div className="relative aspect-[3/4] overflow-hidden bg-surface">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-4 left-4 font-display text-4xl text-white/90">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-h3 text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                <Link
                  href={getWhatsAppUrl(`Olá! Interesse em "${item.title}".`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-xs font-semibold tracking-widest text-ink uppercase hover:text-leaf"
                >
                  Encomendar
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
