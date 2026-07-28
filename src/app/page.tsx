import { ArrangementsGrid } from "@/components/ArrangementsGrid";
import { ContactSection } from "@/components/ContactSection";
import { FaqSection } from "@/components/FaqSection";
import { Hero } from "@/components/Hero";
import { HomeJsonLd } from "@/components/HomeJsonLd";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Services } from "@/components/Services";

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <Hero />
      <ArrangementsGrid />
      <Services />
      <InstagramFeed />
      <FaqSection />
      <ContactSection />
    </>
  );
}
