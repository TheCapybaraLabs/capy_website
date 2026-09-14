import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist } from "next/font/google";
import { DataConsentModal } from "@/components/data-consent-modal";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "@/app/globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

type RootShellProps = {
  /** Valor do atributo lang do documento, ex. "pt-BR" ou "en". */
  lang: string;
  children: React.ReactNode;
};

/**
 * Scaffolding de documento compartilhado pelos root layouts de cada idioma.
 *
 * Existem dois root layouts (src/app/(pt) e src/app/en) para que cada idioma
 * sirva o seu próprio <html lang>. Tudo o que é idêntico entre eles vive aqui,
 * de modo que adicionar um provider não exija lembrar de dois arquivos.
 */
export function RootShell({ lang, children }: RootShellProps) {
  return (
    <html lang={lang} suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <DataConsentModal />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
