import Link from "next/link";
import { site, siteContent } from "@/lib/content";

export function ContactSection() {
  const { contact } = siteContent;

  return (
    <section id={contact.id} className="section-x py-20 md:py-28">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-muted uppercase">{site.tagline}</p>
        <h2 className="text-h2 text-ink">{contact.title}</h2>
        <p className="max-w-md text-body text-muted">{contact.description}</p>
        <Link href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
          {contact.whatsapp.label}
        </Link>
        <p className="text-sm text-muted">
          {contact.hours} · {contact.address}
        </p>
      </div>
    </section>
  );
}
