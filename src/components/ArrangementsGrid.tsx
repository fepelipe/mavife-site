import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { externalLinkLabel } from "@/lib/a11y";
import { getWhatsAppUrl, siteContent } from "@/lib/content";
import type { ImageAsset } from "@/lib/types";

const TITLE_ID = "pecas-heading";

/**
 * Copy block height drives image aspect on md+:
 * title (~30px) + description (~3 lines) + second line + Encomendar + py-3 ≈ 180px.
 * At ~2-col width, aspect 4/3 keeps cards balanced without excess CLS.
 */
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
      <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
        {arrangements.items.map((item) => {
          const image = item.image as ImageAsset;
          const blurDataURL = image.blurDataURL;

          return (
            <li key={item.title} className="group flex h-full flex-col">
              <div className="woven-border relative aspect-4/5 overflow-hidden md:aspect-4/3">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1280px) 50vw, 520px"
                  placeholder={blurDataURL ? "blur" : "empty"}
                  blurDataURL={blurDataURL}
                  className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="flex flex-col gap-2 px-1 py-3">
                <h3 className="text-h3 text-jungle">{item.title}</h3>
                <p className="whitespace-pre-line text-body text-muted">{item.description}</p>
                <Link
                  href={getWhatsAppUrl(`Olá! Tenho interesse na peça "${item.title}".`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={externalLinkLabel(`Encomendar ${item.title} pelo WhatsApp`)}
                  className="mt-1 w-fit rounded-soft text-sm font-semibold tracking-wide text-accent-deep uppercase hover:text-leaf focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
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
