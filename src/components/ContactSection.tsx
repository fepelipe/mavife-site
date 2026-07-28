import Link from "next/link";
import { externalLinkLabel } from "@/lib/a11y";
import { site, siteContent } from "@/lib/content";
import { images } from "@/lib/images";

const TITLE_ID = "contato-heading";

export function ContactSection() {
  const { contact } = siteContent;

  return (
    <section
      id={contact.id}
      aria-labelledby={TITLE_ID}
      tabIndex={-1}
      className="section-y bg-cover bg-center"
      style={{
        backgroundImage: `url(${images.brand.background.src})`,
      }}
    >
      <div className="section-x mx-auto max-w-content">
        <div className="mx-auto max-w-2xl rounded-soft bg-white/90 p-8 text-center backdrop-blur-sm md:p-10">
          <h2 id={TITLE_ID} className="text-h2 text-ink">
            {contact.title}
          </h2>
          {contact.description ? (
            <p className="text-body mx-auto mt-4 max-w-md text-muted">{contact.description}</p>
          ) : null}
          <Link
            href={contact.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={externalLinkLabel(contact.whatsapp.label)}
            className="btn-primary mt-8"
          >
            {contact.whatsapp.label}
          </Link>
          <dl className="mt-10 grid gap-5 text-left text-body text-muted sm:text-center">
            <div>
              <dt className="font-semibold text-ink">Local</dt>
              <dd>
                <span className="block">{site.name}</span>
                <span className="block">
                  {contact.locality}, {contact.region}, {contact.country}
                </span>
                <span className="mt-1 block">{contact.serviceArea}</span>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">WhatsApp</dt>
              <dd>
                <Link
                  href={contact.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={externalLinkLabel(`WhatsApp ${contact.whatsapp.number}`)}
                  className="rounded-soft text-leaf underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
                >
                  {contact.whatsapp.number}
                </Link>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Instagram</dt>
              <dd>
                <Link
                  href={contact.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={externalLinkLabel(`Instagram ${contact.instagram.label}`)}
                  className="rounded-soft text-leaf underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
                >
                  {contact.instagram.label}
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
