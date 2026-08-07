import Image from "next/image";
import Link from "next/link";
import { externalLinkLabel } from "@/lib/a11y";
import { getWhatsAppUrl, siteContent } from "@/lib/content";
import type { ImageAsset } from "@/lib/types";

const TITLE_ID = "pecas-heading";

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
            <li key={item.title} className="relative min-w-0">
              {/*
                Mobile: near-square. md+: tall panels that together fill the viewport width.
              */}
              <Link
                href={getWhatsAppUrl(enquireMessage(item.title))}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={cardLabel(item.title, item.description)}
                className="group relative block aspect-[5/4] overflow-hidden focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent md:aspect-[3/5] lg:aspect-[2/5] lg:min-h-[28rem]"
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, 25vw"
                  placeholder={blurDataURL ? "blur" : "empty"}
                  blurDataURL={blurDataURL}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100"
                />

                {/* Shared gold wash along the bottom — connects the four panels */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[42%] bg-linear-to-t from-accent-deep/95 via-accent/55 to-transparent transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0 motion-reduce:transition-none md:h-[36%]"
                  aria-hidden="true"
                />

                {/* Hover/focus top wash for readable copy */}
                <div
                  className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-jungle/90 via-jungle/55 to-jungle/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
                  aria-hidden="true"
                />

                <div className="absolute inset-0 z-20 flex flex-col p-4 sm:p-5 md:p-5 lg:p-6">
                  <h3
                    className="font-heading mt-auto text-[1.25rem] leading-tight font-semibold text-white drop-shadow-sm transition-[margin,transform,color] duration-300 ease-out group-hover:mt-0 group-hover:translate-y-0 group-focus-visible:mt-0 motion-reduce:transition-none sm:text-[1.375rem] md:text-[1.25rem] lg:text-[1.5rem]"
                  >
                    {item.title}
                  </h3>

                  <div
                    className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity,margin] duration-300 ease-out group-hover:mt-3 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:mt-3 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100 motion-reduce:transition-none"
                  >
                    <div className="overflow-hidden">
                      <p className="whitespace-pre-line text-sm leading-relaxed text-white/90 sm:text-[0.95rem]">
                        {item.description}
                      </p>
                      <span className="mt-3 inline-block text-sm font-semibold tracking-wide text-clay uppercase transition-colors duration-150 group-hover:text-leaf group-focus-visible:text-leaf">
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
