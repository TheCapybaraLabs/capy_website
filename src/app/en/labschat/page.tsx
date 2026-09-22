import type { Metadata } from "next";
import { LabschatLanding } from "@/components/labschat/labschat-landing";
import { getDictionary, getLinks } from "@/i18n";

const dict = getDictionary("en");
const links = getLinks("en", dict);

export const metadata: Metadata = {
  title: dict.labschatPage.meta.title,
  description: dict.labschatPage.meta.description,
  keywords: dict.labschatPage.meta.keywords,
  alternates: {
    canonical: "/en/labschat",
    languages: {
      "pt-BR": "/labschat",
      en: "/en/labschat",
      "x-default": "/labschat",
    },
  },
};

export default function EnLabschatPage() {
  return <LabschatLanding t={dict.labschatPage} homeHref={links.home} />;
}
