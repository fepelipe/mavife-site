import Image from "next/image";
import Link from "next/link";
import { externalLinkLabel } from "@/lib/a11y";
import { getWhatsAppUrl, siteContent } from "@/lib/content";
import type { ImageAsset } from "@/lib/types";

const TITLE_ID = "pecas-heading";

/** Full-bleed strip height — under 50vh so panels stay wide, not towering. */
const STRIP_HEIGHT = "h-[38vh] md:h-[42vh]";

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
      className="bg-white"
    >
      <div className="section-x mx-auto max-w-content pt-16 pb-10 md:pt-24 md:pb-14">
        <div className="flex flex-col gap-4 border-l-4 border-accent pl-6">
          <h2 id={TITLE_ID} className="text-h2 text-ink">
            {arrangements.title}
          </h2>
          <p className="max-w-prose whitespace-pre-line text-body text-muted">
            {arrangements.description}
          </p>
        </div>
      </div>

      <ul
        className="grid w-full grid-cols-1 gap-0 md:grid-cols-4"
        aria-label="Categorias de produtos"
      >
        {arrangements.items.map((item) => {
          const image = item.image as ImageAsset;
          const blurDataURL = image.blurDataURL;

          return (
            <li key={item.title} className={`relative min-h-0 min-w-0 ${STRIP_HEIGHT}`}>
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
                  quality={90}
                  sizes="(max-width: 767px) 100vw, 25vw"
                  placeholder={blurDataURL ? "blur" : "empty"}
                  blurDataURL={blurDataURL}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] group-focus-visible:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100"
                />

                {/* Gold wash — always present, slightly stronger when open */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[55%] bg-linear-to-t from-accent-deep/95 via-accent/50 to-transparent transition-[height] duration-300 ease-out group-hover:h-[70%] group-focus-visible:h-[70%] motion-reduce:transition-none"
                  aria-hidden="true"
                />

                {/*
                  Bottom stack: title always visible.
                  Description + Encomendar slide up from below on hover/focus.
                */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5">
                  <div className="flex flex-col justify-end overflow-hidden">
                    <div
                      className="flex translate-y-[calc(100%-1.6rem)] flex-col gap-2 transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0 motion-reduce:transition-none motion-reduce:translate-y-0"
                    >
                      <h3 className="font-heading text-[1.2rem] leading-tight font-semibold text-white drop-shadow-sm sm:text-[1.35rem]">
                        {item.title}
                      </h3>
                      <p className="whitespace-pre-line text-sm leading-relaxed text-white/90 sm:text-[0.95rem]">
                        {item.description}
                      </p>
                      <span className="text-sm font-semibold tracking-wide text-accent uppercase">
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
