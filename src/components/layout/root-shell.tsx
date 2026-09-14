import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist } from "next/font/google";
import { DataConsentModal } from "@/components/data-consent-modal";
import { ThemeProvider } from "@/components/theme-provider";
import { getDictionary, type Locale } from "@/i18n";
import { cn } from "@/lib/utils";
import "@/app/globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

type RootShellProps = {
  locale: Locale;
  children: React.ReactNode;
};

/**
 * Scaffolding de documento compartilhado pelos root layouts de cada idioma.
 *
 * Existem dois root layouts (src/app/(pt) e src/app/en) para que cada idioma
 * sirva o seu próprio <html lang>. Tudo o que é idêntico entre eles vive aqui,
 * de modo que adicionar um provider não exija lembrar de dois arquivos.
 *
 * Os valores de Locale ("pt-BR", "en") são propositalmente tags BCP 47
 * válidas, então servem direto como atributo lang.
 */
export function RootShell({ locale, children }: RootShellProps) {
  const dict = getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <DataConsentModal t={dict.consent} />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
