import Link from "next/link";
import { siteContent } from "@/lib/content";
import { images } from "@/lib/images";

export function ContactSection() {
  const { contact } = siteContent;

  return (
    <section id={contact.id} className="section-x bg-surface pt-8 pb-16 md:pt-10 md:pb-20">
      <div
        className="woven-border mx-auto max-w-2xl bg-white/95 p-10 text-center md:p-14"
        style={{
          backgroundImage: `url(${images.brand.background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="rounded-sm bg-white/90 p-8 backdrop-blur-sm md:p-10">
          <h2 className="text-h2 mb-8 text-ink">{contact.title}</h2>
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
              <dd className="whitespace-pre-line">{contact.address}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
