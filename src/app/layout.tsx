import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { DataConsentModal } from "@/components/data-consent-modal";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
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

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <DataConsentModal />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
