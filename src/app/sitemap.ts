import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/config";
import { PT_TO_EN } from "@/i18n";

/**
 * Derivado de PT_TO_EN, então traduzir uma página nova a coloca no sitemap
 * automaticamente. As rotas jurídicas e de FAQ ficam de fora de propósito:
 * são noindex e específicas por cliente.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return Object.entries(PT_TO_EN).flatMap(([ptPath, enPath]) => {
    const languages = {
      "pt-BR": `${SITE_URL}${ptPath}`,
      en: `${SITE_URL}${enPath}`,
    };

    return [
      {
        url: `${SITE_URL}${ptPath}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: ptPath === "/" ? 1 : 0.8,
        alternates: { languages },
      },
      {
        url: `${SITE_URL}${enPath}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: enPath === "/en" ? 0.9 : 0.7,
        alternates: { languages },
      },
    ];
  });
}
