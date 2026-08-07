import Image from "next/image";
import Link from "next/link";
import { externalLinkLabel } from "@/lib/a11y";
import { getWhatsAppUrl, siteContent } from "@/lib/content";
import type { ImageAsset } from "@/lib/types";

const TITLE_ID = "pecas-heading";

/**
 * Full-bleed strip height in vh — under 50vh so panels stay wide, not tall.
 * 36 / 40 leaves room for title + short copy without dominating the page.
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
                  quality={95}
                  sizes="(max-width: 767px) 100vw, 40vw"
                  placeholder={blurDataURL ? "blur" : "empty"}
                  blurDataURL={blurDataURL}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] group-focus-visible:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100"
                />

                {/* Gold wash — stays at the bottom; slightly taller when open */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[48%] bg-linear-to-t from-accent-deep/95 via-accent/45 to-transparent transition-[height] duration-300 ease-out group-hover:h-[62%] group-focus-visible:h-[62%] motion-reduce:transition-none"
                  aria-hidden="true"
                />

                {/*
                  Title stays anchored at the bottom.
                  Description + Encomendar slide up from below the panel edge —
                  only far enough to sit above the title, not to the top.
                */}
                <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end p-4 sm:p-5">
                  <div className="overflow-hidden">
                    <div
                      className="flex translate-y-full flex-col gap-2 pb-2 transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0 motion-reduce:translate-y-0 motion-reduce:transition-none"
                    >
                      <p className="whitespace-pre-line text-sm leading-relaxed text-white/90 sm:text-[0.95rem]">
                        {item.description}
                      </p>
                      <span className="text-sm font-semibold tracking-wide text-accent uppercase">
                        Encomendar
                      </span>
                    </div>
                  </div>
                  <h3 className="font-heading text-[1.2rem] leading-tight font-semibold text-white drop-shadow-sm sm:text-[1.35rem]">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
