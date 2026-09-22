import Image from "next/image";
import Link from "next/link";
import { externalLinkLabel } from "@/lib/a11y";
import { getWhatsAppUrl, siteContent } from "@/lib/content";
import type { ImageAsset } from "@/lib/types";

const TITLE_ID = "pecas-heading";

/**
 * Full-bleed strip height in vh — under 50vh so panels stay wide, not tall.
 * Near-square panels match the square product crops.
 */
const STRIP_HEIGHT = "h-[36vh] md:h-[40vh]";

function enquireMessage(title: string) {
  return `Olá! Tenho interesse em ${title.toLowerCase()}. O que tem disponível?`;
}

function cardLabel(title: string, description: string) {
  const short = description.replace(/\s+/g, " ").trim();
  return externalLinkLabel(`Encomendar ${title} pelo WhatsApp. ${short}`);
}

export function ArrangementsGrid() {
  const { arrangements } = siteContent;

  return (
    <section
      id={arrangements.id}
      aria-labelledby={TITLE_ID}
      tabIndex={-1}
      className="bg-white outline-none focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
    >
      <div className="section-x mx-auto max-w-content pt-16 pb-8 md:pt-24 md:pb-10">
        <div className="flex flex-col gap-3 border-l-4 border-accent pl-6 md:gap-4">
          <h2 id={TITLE_ID} className="text-h2 text-ink">
            {arrangements.title}
          </h2>
          <p className="max-w-prose whitespace-pre-line text-body text-muted">
            {arrangements.description}
          </p>
        </div>
      </div>

      <ul
        className="m-0 grid w-full list-none grid-cols-1 gap-0 p-0 leading-none md:grid-cols-4"
        aria-label="Categorias de produtos"
      >
        {arrangements.items.map((item, index) => {
          const image = item.image as ImageAsset;
          const blurDataURL = image.blurDataURL;
          // First two tiles are often in the initial viewport on desktop.
          const prioritize = index < 2;

          return (
            <li
              key={item.title}
              className={`relative m-0 min-h-0 min-w-0 leading-none ${STRIP_HEIGHT}`}
            >
              <Link
                href={getWhatsAppUrl(enquireMessage(item.title))}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={cardLabel(item.title, item.description)}
                className="group relative block h-full overflow-hidden focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  priority={prioritize}
                  quality={90}
                  sizes="(max-width: 767px) 100vw, 25vw"
                  placeholder={blurDataURL ? "blur" : "empty"}
                  blurDataURL={blurDataURL}
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] group-focus-visible:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100"
                />

                {/*
                  Hover dim — top stays lighter, bottom darker for contrast
                  (same idea as the Instagram mosaic overlay).
                */}
                <div
                  className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-ink/80 via-ink/35 to-ink/10 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
                  aria-hidden="true"
                />

                {/* Gold wash — bottom quarter only, always on for title contrast */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/4 bg-linear-to-t from-accent-deep/90 via-accent/40 to-transparent"
                  aria-hidden="true"
                />

                {/*
                  Stack: title, then description + Encomendar under it.
                  Resting state peeks the headline; hover lifts the stack.
                */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-3 sm:p-4">
                  <div className="overflow-hidden">
                    <div
                      className="flex translate-y-[calc(100%-1.85rem)] flex-col gap-1.5 transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0 motion-reduce:translate-y-0 motion-reduce:transition-none sm:translate-y-[calc(100%-2.1rem)]"
                    >
                      <h3 className="font-heading text-[1.45rem] leading-tight font-semibold text-white drop-shadow-sm sm:text-[1.7rem]">
                        {item.title}
                      </h3>
                      <p className="whitespace-pre-line text-sm leading-snug text-white/95 sm:text-[0.95rem]">
                        {item.description}
                      </p>
                      <span className="text-sm font-semibold tracking-wide text-[#d4af37] uppercase drop-shadow-sm">
                        Encomendar
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
