import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { getWhatsAppUrl, siteContent } from "@/lib/content";

export function ArrangementsGrid() {
  const { arrangements } = siteContent;

  return (
    <Section id={arrangements.id} className="bg-white">
      <div className="mb-12 flex flex-col gap-4 border-l-4 border-accent pl-6 md:mb-16">
        <h2 className="text-h2 text-ink">{arrangements.title}</h2>
        <p className="max-w-prose text-body text-muted">{arrangements.description}</p>
      </div>
      <ul className="grid gap-10 lg:grid-cols-3">
        {arrangements.items.map((item, index) => (
          <li
            key={item.title}
            className={`group flex flex-col gap-5 ${index === 1 ? "lg:mt-12" : ""}`}
          >
            <div className="woven-border relative aspect-[4/5] overflow-hidden">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                className="mt-1 text-sm font-semibold tracking-wide text-accent uppercase hover:text-accent-deep"
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
