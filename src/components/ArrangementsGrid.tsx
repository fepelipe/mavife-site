import Image from "next/image";
import Link from "next/link";
import { getWhatsAppUrl, siteContent } from "@/lib/content";

export function ArrangementsGrid() {
  const { arrangements } = siteContent;

  return (
    <section id={arrangements.id} className="section-x py-16 md:py-20">
      <div className="mx-auto max-w-content">
        <div className="mb-10 text-center">
          <h2 className="text-h2 text-ink">{arrangements.title}</h2>
          <p className="mx-auto mt-3 max-w-lg text-body text-muted">{arrangements.description}</p>
        </div>
        <ul className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {arrangements.items.map((item) => (
            <li
              key={item.title}
              className="basket-frame w-[min(85vw,280px)] shrink-0 snap-center bg-white"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-[calc(2rem-3px)]">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <h3 className="text-h3 text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                <Link
                  href={getWhatsAppUrl(`Olá! Quero a peça "${item.title}".`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-sm font-semibold text-leaf hover:text-accent"
                >
                  Encomendar →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
