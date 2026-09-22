import type { Metadata } from "next";
import { LabschatLanding } from "@/components/labschat/labschat-landing";
import { getDictionary, getLinks } from "@/i18n";

const dict = getDictionary("pt-BR");
const links = getLinks("pt-BR", dict);

export const metadata: Metadata = {
  title: dict.labschatPage.meta.title,
  description: dict.labschatPage.meta.description,
  keywords: dict.labschatPage.meta.keywords,
  alternates: {
    canonical: "/labschat",
    languages: {
      "pt-BR": "/labschat",
      en: "/en/labschat",
      "x-default": "/labschat",
    },
  },
};

export default function LabschatPage() {
  return <LabschatLanding t={dict.labschatPage} homeHref={links.home} />;
}
