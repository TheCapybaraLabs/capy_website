import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { RootShell } from "@/components/layout/root-shell";
import { SITE_URL } from "@/constants/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Capybara Labs - AI Consulting and Custom Software from Brazil",
    template: "%s | Capybara Labs",
  },
  description:
    "AI consulting, custom software and corporate SaaS platforms. We help organisations put generative AI to work, with data hosted in Brazil under LGPD.",
  keywords: [
    "artificial intelligence",
    "AI consulting",
    "generative AI",
    "custom software development",
    "corporate SaaS",
    "white-label AI chat",
    "LGPD",
    "data residency Brazil",
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
    canonical: "/en",
    languages: {
      "pt-BR": "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "pt_BR",
    url: "/en",
    title: "Capybara Labs - AI Consulting and Custom Software from Brazil",
    description:
      "AI consulting, custom software and corporate SaaS platforms, with data hosted in Brazil under LGPD.",
    siteName: "Capybara Labs",
    images: [
      {
        url: "/cover.png",
        width: 1700,
        height: 800,
        alt: "Capybara Labs - AI Consulting and Custom Software from Brazil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capybara Labs - AI Consulting and Custom Software from Brazil",
    description:
      "AI consulting, custom software and corporate SaaS platforms, with data hosted in Brazil under LGPD.",
    images: ["/cover.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell lang="en">
      <Header />
      {children}
      <Footer />
    </RootShell>
  );
}
