import Link from "next/link";
import { externalLinkLabel } from "@/lib/a11y";
import { site, siteContent } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  const { contact } = siteContent;

  return (
    <footer className="section-x bg-jungle py-10 text-white/70">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-6 text-sm sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-white/90">{site.name}</p>
          <p>
            {contact.locality}, {contact.region}, {contact.country}
          </p>
          <p>© {year} {site.name}</p>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <Link
            href={contact.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={externalLinkLabel(`WhatsApp ${contact.whatsapp.number}`)}
            className="rounded-soft text-clay underline-offset-4 hover:underline focus-ring-light"
          >
            WhatsApp {contact.whatsapp.number}
          </Link>
          <Link
            href={contact.instagram.href}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label={externalLinkLabel(`Instagram ${contact.instagram.label}`)}
            className="rounded-soft text-clay underline-offset-4 hover:underline focus-ring-light"
          >
            Instagram {contact.instagram.label}
          </Link>
        </div>
      </div>
    </footer>
  );
}
