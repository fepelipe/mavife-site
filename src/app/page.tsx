import { ArrangementsGrid } from "@/components/ArrangementsGrid";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Services } from "@/components/Services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ArrangementsGrid />
      <Services />
      <InstagramFeed />
      <ContactSection />
    </>
  );
}
