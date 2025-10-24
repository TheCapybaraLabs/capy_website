import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import './globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Capybara Labs - Transformando Organizações com IA',
  description:
    'Consultoria especializada em Inteligência Artificial, desenvolvimento de soluções sob medida e plataformas SaaS corporativas. Transforme sua organização com tecnologia de ponta.',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="pt-BR" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
