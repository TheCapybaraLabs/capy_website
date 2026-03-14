import { AboutSection } from "@/components/sections/about-section";
import { CTASection } from "@/components/sections/cta-section";
import { DifferentialsSection } from "@/components/sections/differentials-section";
import { FeaturedProductSection } from "@/components/sections/featured-product-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedProductSection />
      <Separator />
      <AboutSection />
      <DifferentialsSection />
      <CTASection />
    </>
  );
}
