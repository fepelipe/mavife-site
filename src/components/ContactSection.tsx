import Link from "next/link";
import { Section } from "@/components/Section";
import { site, siteContent } from "@/lib/content";

export function ContactSection() {
  const { contact } = siteContent;

  return (
    <Section id={contact.id} className="fiber-bg">
      <div className="basket-frame mx-auto max-w-xl bg-white p-10 text-center">
        <p className="mb-1 text-xs font-semibold tracking-widest text-wicker uppercase">{site.tagline}</p>
        <h2 className="text-h2 mb-4 text-ink">{contact.title}</h2>
        <p className="mb-8 text-body text-muted">{contact.description}</p>
        <Link href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
          {contact.whatsapp.label}
        </Link>
        <p className="mt-8 text-sm text-muted">
          {contact.hours} · {contact.address}
        </p>
      </div>
    </Section>
  );
}
