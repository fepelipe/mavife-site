import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { externalLinkLabel } from "@/lib/a11y";
import { getWhatsAppUrl, siteContent } from "@/lib/content";
import type { ImageAsset } from "@/lib/types";

const TITLE_ID = "pecas-heading";

/**
 * Image height is locked to the copy stack:
 * py-3 (24) + title ~1.625rem/1.2 (~31) + gaps (16) +
 * description ~3 body lines (~84) + Encomendar (~24) ≈ 180px → 11.5rem.
 * Title bumped to 1.625rem; "Centros de mesa" still fits one line in the copy column.
 */
const IMAGE_HEIGHT_CLASS = "h-[11.5rem]";

function enquireMessage(title: string) {
  return `Olá! Tenho interesse em ${title.toLowerCase()}. O que tem disponível?`;
}

export function ArrangementsGrid() {
  const { arrangements } = siteContent;

  return (
    <Section id={arrangements.id} labelledBy={TITLE_ID} className="bg-white">
      <div className="mb-12 flex flex-col gap-4 border-l-4 border-accent pl-6 md:mb-16">
        <h2 id={TITLE_ID} className="text-h2 text-ink">
          {arrangements.title}
        </h2>
        <p className="max-w-prose whitespace-pre-line text-body text-muted">
          {arrangements.description}
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        {arrangements.items.map((item) => {
          const image = item.image as ImageAsset;
          const blurDataURL = image.blurDataURL;

          return (
            <li
              key={item.title}
              className="group grid grid-cols-[minmax(0,36%)_minmax(0,1fr)] items-stretch gap-3 sm:gap-4"
            >
              <div
                className={`woven-border relative ${IMAGE_HEIGHT_CLASS} w-full overflow-hidden`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 767px) 36vw, (max-width: 1280px) 18vw, 190px"
                  placeholder={blurDataURL ? "blur" : "empty"}
                  blurDataURL={blurDataURL}
                  className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>
              <div
                className={`flex ${IMAGE_HEIGHT_CLASS} flex-col justify-center gap-2 py-3 pr-1`}
              >
                <h3 className="font-heading text-[1.375rem] leading-tight font-semibold text-jungle sm:text-[1.625rem]">
                  {item.title}
                </h3>
                <p className="whitespace-pre-line text-body text-muted">{item.description}</p>
                <Link
                  href={getWhatsAppUrl(enquireMessage(item.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={externalLinkLabel(`Encomendar ${item.title} pelo WhatsApp`)}
                  className="mt-0.5 w-fit rounded-soft text-sm font-semibold tracking-wide text-accent-deep uppercase hover:text-leaf focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
                >
                  Encomendar
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
