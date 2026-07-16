import Link from "next/link";
import { Section } from "@/components/Section";
import { site, siteContent } from "@/lib/content";

export function ContactSection() {
  const { contact } = siteContent;

  return (
    <Section id={contact.id} className="bg-surface">
      <div className="woven-border mx-auto max-w-2xl bg-white p-10 text-center md:p-14">
        <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-accent uppercase">
          {site.tagline}
        </p>
        <h2 className="text-h2 mb-4 text-ink">{contact.title}</h2>
        <p className="mb-8 text-body text-muted">{contact.description}</p>
        <Link
          href={contact.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          {contact.whatsapp.label}
        </Link>
        <dl className="mt-10 grid gap-4 text-body text-muted">
          <div>
            <dt className="font-semibold text-ink">Local</dt>
            <dd>{contact.address}</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
