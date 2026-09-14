import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Documentos por cliente: já são noindex no metadata, mas mantê-los
      // fora do rastreamento poupa orçamento de crawl.
      disallow: ["/termos", "/privacidade", "/faq"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
