import type { Metadata } from "next";
import { SolutionsPage } from "@/components/sections/solutions-page";
import { getDictionary } from "@/i18n";

const dict = getDictionary("pt-BR");

export const metadata: Metadata = {
  title: dict.solutions.meta.title,
  description: dict.solutions.meta.description,
  keywords: dict.solutions.meta.keywords,
  alternates: {
    canonical: "/solucoes",
    languages: {
      "pt-BR": "/solucoes",
      en: "/en/solutions",
      "x-default": "/solucoes",
    },
  },
};

export default function SolucoesPage() {
  return <SolutionsPage t={dict.solutions} anchors={dict.anchors} />;
}
