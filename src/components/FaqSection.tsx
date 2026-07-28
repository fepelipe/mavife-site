import { Section } from "@/components/Section";
import { faqs } from "@/lib/content";

const TITLE_ID = "faq-heading";

export function FaqSection() {
  return (
    <Section id="perguntas" labelledBy={TITLE_ID} className="bg-white">
      <h2 id={TITLE_ID} className="text-h2 mb-10 text-ink md:mb-12">
        Perguntas frequentes
      </h2>
      <dl className="grid gap-6 md:grid-cols-2 md:gap-8">
        {faqs.map((item) => (
          <div key={item.question} className="rounded-soft border border-clay/25 bg-surface/60 p-6 md:p-7">
            <dt className="font-heading text-lg font-semibold text-jungle">{item.question}</dt>
            <dd className="mt-3 text-body text-muted">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
