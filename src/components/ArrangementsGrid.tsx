import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { getWhatsAppUrl, siteContent } from "@/lib/content";

export function ArrangementsGrid() {
  const { arrangements } = siteContent;

  return (
    <Section id={arrangements.id} className="bg-white">
      <div className="mb-12 flex flex-col gap-4 md:mb-16">
        <h2 className="text-h2 text-ink">{arrangements.title}</h2>
        <p className="max-w-prose text-body text-muted">{arrangements.description}</p>
      </div>
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {arrangements.items.map((item) => (
          <li key={item.title} className="flex flex-col gap-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-h3 text-ink">{item.title}</h3>
              <p className="text-body text-muted">{item.description}</p>
              <Link
                href={getWhatsAppUrl(`Olá! Tenho interesse no arranjo "${item.title}".`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm font-semibold text-leaf underline-offset-4 hover:underline"
              >
                Pedir pelo WhatsApp
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
