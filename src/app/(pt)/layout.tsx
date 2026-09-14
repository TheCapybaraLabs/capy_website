import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { RootShell } from "@/components/layout/root-shell";
import { SITE_URL } from "@/constants/config";
import { getDictionary, getLinks } from "@/i18n";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Capybara Labs - Transformando Organizações com IA",
    template: "%s | Capybara Labs",
  },
  description:
    "Consultoria especializada em Inteligência Artificial, desenvolvimento de soluções sob medida e plataformas SaaS corporativas. Transforme sua organização com tecnologia de ponta.",
  keywords: [
    "inteligência artificial",
    "IA",
    "consultoria em IA",
    "desenvolvimento de software",
    "SaaS",
    "LabsChat corporativo",
    "LGPD",
    "white-label",
    "transformação digital",
    "Capybara Labs",
  ],
  authors: [{ name: "Capybara Labs" }],
  creator: "Capybara Labs",
  publisher: "Capybara Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: "/",
    title: "Capybara Labs - Transformando Organizações com IA",
    description:
      "Consultoria especializada em Inteligência Artificial, desenvolvimento de soluções sob medida e plataformas SaaS corporativas.",
    siteName: "Capybara Labs",
    images: [
      {
        url: "/cover.png",
        width: 1700,
        height: 800,
        alt: "Capybara Labs - Transformando Organizações com IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capybara Labs - Transformando Organizações com IA",
    description:
      "Consultoria especializada em Inteligência Artificial, desenvolvimento de soluções sob medida e plataformas SaaS corporativas.",
    images: ["/cover.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PtLayout({ children }: { children: React.ReactNode }) {
  const dict = getDictionary("pt-BR");

  return (
    <RootShell locale="pt-BR">
      <Header nav={dict.nav} links={getLinks("pt-BR", dict)} />
      {children}
      <Footer locale="pt-BR" dict={dict} />
    </RootShell>
  );
}
