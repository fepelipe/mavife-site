import Link from "next/link";
import { Section } from "@/components/Section";
import { siteContent } from "@/lib/content";

export function ContactSection() {
  const { contact } = siteContent;

  return (
    <Section id={contact.id} className="bg-white">
      <div className="mx-auto max-w-2xl text-center">
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
        <dl className="mt-10 grid gap-4 text-body text-muted sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-ink">Horário</dt>
            <dd>{contact.hours}</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Entrega</dt>
            <dd>{contact.address}</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
