import { Separator } from "@/components/ui/separator";
import { AboutSection } from "./sections/about-section";
import { CasesSection } from "./sections/cases-section";
import { CTASection } from "./sections/cta-section";
import { DifferentialsSection } from "./sections/differentials-section";
import { FeaturedProductSection } from "./sections/featured-product-section";
import { HeroSection } from "./sections/hero-section";
import { ServicesSection } from "./sections/services-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedProductSection />
      <CasesSection />
      <Separator />
      <AboutSection />
      <DifferentialsSection />
      <CTASection />
    </>
  );
}
