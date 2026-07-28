import { Section } from "@/components/Section";
import { siteContent } from "@/lib/content";

const TITLE_ID = "atelie-heading";

export function Services() {
  const { services } = siteContent;

  return (
    <Section id={services.id} labelledBy={TITLE_ID} className="bg-jungle text-white">
      <h2 id={TITLE_ID} className="text-h2 mb-12 text-clay md:mb-16">
        {services.title}
      </h2>
      <ul className="grid gap-6 md:grid-cols-3">
        {services.items.map((item) => (
          <li
            key={item.title}
            className="flex flex-col gap-4 rounded-soft border border-white/15 bg-white/5 p-8 backdrop-blur-sm"
          >
            <h3 className="font-heading text-xl font-semibold text-white">{item.title}</h3>
            <p className="text-body text-white/75">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
