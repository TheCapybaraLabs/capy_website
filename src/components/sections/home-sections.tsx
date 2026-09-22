import { AboutSection } from "@/components/sections/about-section";
import { CasesSection } from "@/components/sections/cases-section";
import { CTASection } from "@/components/sections/cta-section";
import { DifferentialsSection } from "@/components/sections/differentials-section";
import { FeaturedProductSection } from "@/components/sections/featured-product-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { Separator } from "@/components/ui/separator";
import { type Dict, getLinks, type Locale } from "@/i18n";

type HomeSectionsProps = {
  locale: Locale;
  dict: Dict;
};

/** Composição da home, idêntica nos dois idiomas: só o dicionário muda. */
export function HomeSections({ locale, dict }: HomeSectionsProps) {
  const links = getLinks(locale, dict);

  return (
    <>
      <HeroSection t={dict.hero} solutionsHref={links.solutions} />
      <ServicesSection t={dict.services} id={dict.anchors.services} />
      <FeaturedProductSection t={dict.featured} labschatHref={links.labschat} />
      <CasesSection t={dict.cases} id={dict.anchors.cases} />
      <Separator />
      <AboutSection t={dict.about} id={dict.anchors.about} />
      <DifferentialsSection t={dict.differentials} id={dict.anchors.differentials} />
      <CTASection t={dict.cta} />
    </>
  );
}
