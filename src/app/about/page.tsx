import { AboutHero } from "@/components/AboutHero";
import { ContactSection } from "@/components/ContactSection";
import { siteContent } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd, aboutPageJsonLd, localBusinessJsonLd } from "@/lib/structured-data";

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
      <AboutHero />
      <ContactSection />
    </>
  );
}
