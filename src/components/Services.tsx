import { siteContent } from "@/lib/content";

export function Services() {
  const { services } = siteContent;

  return (
    <section id={services.id} className="bg-ink text-cream section-x py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <h2 className="text-h2 mb-16 text-cream">{services.title}</h2>
        <ul className="divide-y divide-cream/15">
          {services.items.map((item) => (
            <li key={item.title} className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
              <h3 className="font-display text-xl text-cream md:col-span-4">{item.title}</h3>
              <p className="text-body text-cream/70 md:col-span-8">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
