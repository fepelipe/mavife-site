import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { externalLinkLabel } from "@/lib/a11y";
import { getWhatsAppUrl, siteContent } from "@/lib/content";

const TITLE_ID = "pecas-heading";

export function ArrangementsGrid() {
  const { arrangements } = siteContent;

  return (
    <Section id={arrangements.id} labelledBy={TITLE_ID} className="bg-white">
      <div className="mb-12 flex flex-col gap-4 border-l-4 border-accent pl-6 md:mb-16">
        <h2 id={TITLE_ID} className="text-h2 text-ink">
          {arrangements.title}
        </h2>
        <p className="max-w-prose text-body text-muted">{arrangements.description}</p>
      </div>
      <ul className="grid gap-10 lg:grid-cols-3">
        {arrangements.items.map((item) => (
          <li key={item.title} className="group flex flex-col gap-5">
            <div className="woven-border relative aspect-4/5 overflow-hidden">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="flex flex-col gap-2 px-1">
              <h3 className="text-h3 text-jungle">{item.title}</h3>
              <p className="text-body text-muted">{item.description}</p>
              <Link
                href={getWhatsAppUrl(`Olá! Tenho interesse na peça "${item.title}".`)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={externalLinkLabel(`Encomendar ${item.title} pelo WhatsApp`)}
                className="mt-1 rounded-soft text-sm font-semibold tracking-wide text-accent-deep uppercase hover:text-leaf focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
              >
                Encomendar
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
