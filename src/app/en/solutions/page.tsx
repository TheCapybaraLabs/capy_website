import type { Metadata } from "next";
import { SolutionsPage } from "@/components/sections/solutions-page";
import { getDictionary } from "@/i18n";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.solutions.meta.title,
  description: dict.solutions.meta.description,
  keywords: dict.solutions.meta.keywords,
  alternates: {
    canonical: "/en/solutions",
    languages: {
      "pt-BR": "/solucoes",
      en: "/en/solutions",
      "x-default": "/solucoes",
    },
  },
};

export default function EnSolutionsPage() {
  return <SolutionsPage t={dict.solutions} anchors={dict.anchors} />;
}
