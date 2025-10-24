import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import './globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: 'Capybara Labs - Transformando Organizações com IA',
    template: '%s | Capybara Labs',
  },
  description:
    'Consultoria especializada em Inteligência Artificial, desenvolvimento de soluções sob medida e plataformas SaaS corporativas. Transforme sua organização com tecnologia de ponta.',
  keywords: [
    'inteligência artificial',
    'IA',
    'consultoria em IA',
    'desenvolvimento de software',
    'SaaS',
    'chat IA corporativo',
    'LGPD',
    'white-label',
    'transformação digital',
    'Capybara Labs',
  ],
  authors: [{ name: 'Capybara Labs' }],
  creator: 'Capybara Labs',
  publisher: 'Capybara Labs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://capybaralabs.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://capybaralabs.com.br',
    title: 'Capybara Labs - Transformando Organizações com IA',
    description:
      'Consultoria especializada em Inteligência Artificial, desenvolvimento de soluções sob medida e plataformas SaaS corporativas.',
    siteName: 'Capybara Labs',
    images: [
      {
        url: '/cl-cover.png',
        width: 1326,
        height: 828,
        alt: 'Capybara Labs - Transformando Organizações com IA',
      },
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capybara Labs - Transformando Organizações com IA',
    description:
      'Consultoria especializada em Inteligência Artificial, desenvolvimento de soluções sob medida e plataformas SaaS corporativas.',
    images: ['/cl-cover.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
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
