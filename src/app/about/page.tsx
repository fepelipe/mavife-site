import { AboutHero } from "@/components/AboutHero";
import { ContactSection } from "@/components/ContactSection";
import { FaqSection } from "@/components/FaqSection";
import { siteContent } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd, aboutPageJsonLd, faqPageJsonLd, localBusinessJsonLd } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "Sobre",
  description: siteContent.about.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={aboutPageJsonLd()} />
      <JsonLd data={faqPageJsonLd()} />
      <AboutHero />
      <FaqSection />
      <ContactSection />
    </>
  );
}
