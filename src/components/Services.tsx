import { Section } from "@/components/Section";
import { siteContent } from "@/lib/content";

export function Services() {
  const { services } = siteContent;

  return (
    <Section id={services.id} className="bg-surface">
      <h2 className="text-h2 mb-12 text-ink md:mb-16">{services.title}</h2>
      <ul className="grid gap-8 md:grid-cols-3">
        {services.items.map((item) => (
          <li
            key={item.title}
            className="flex flex-col gap-3 border-l-2 border-accent-deep bg-white p-6"
          >
            <h3 className="text-h3 text-ink">{item.title}</h3>
            <p className="text-body text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
