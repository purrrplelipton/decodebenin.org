import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "#/components/sections/about-section";
import { FaqSection } from "#/components/sections/faq-section";
import { GallerySection } from "#/components/sections/gallery-section";
import { HeroSection } from "#/components/sections/hero-section";
import { MissionVisionSection } from "#/components/sections/mission-vision-section";
import { OfferingsSection } from "#/components/sections/offerings-section";
import { PartnersMarquee } from "#/components/sections/partners-marquee";
import { ProblemSolutionSection } from "#/components/sections/problem-solution";
import { StatsSection } from "#/components/sections/stats-section";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <HeroSection />
      <PartnersMarquee />
      <ProblemSolutionSection />
      <OfferingsSection />
      <MissionVisionSection />
      <StatsSection />
      <GallerySection />
      <AboutSection />
      <FaqSection />
    </>
  );
}
