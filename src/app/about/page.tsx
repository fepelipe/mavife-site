import { AboutHero } from "@/components/AboutHero";
import { ContactSection } from "@/components/ContactSection";
import { siteContent } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Sobre",
  description: siteContent.about.bio,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ContactSection />
    </>
  );
}
