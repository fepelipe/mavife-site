import { Section } from "@/components/Section";
import { siteContent } from "@/lib/content";

export function Services() {
  const { services } = siteContent;

  return (
    <Section id={services.id} className="bg-white">
      <h2 className="text-h2 mb-10 text-center text-ink">{services.title}</h2>
      <ul className="grid gap-8 md:grid-cols-3">
        {services.items.map((item, index) => (
          <li
            key={item.title}
            className="flex flex-col gap-3 rounded-3xl bg-fiber p-8 text-center"
          >
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-wicker/40 font-display text-xl font-bold text-accent">
              {index + 1}
            </span>
            <h3 className="text-h3 text-ink">{item.title}</h3>
            <p className="text-body text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
