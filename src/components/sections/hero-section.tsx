import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { CONTACT_EMAIL, LOGO_IMAGE_PATH } from '@/constants/config';

export function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)] flex items-center py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left side - Logo */}
        <div className="flex justify-center md:justify-end">
          <Image src={LOGO_IMAGE_PATH} alt="Capybara Labs" width={400} height={400} className="rounded-full" priority />
        </div>

        {/* Right side - Content */}
        <div className="space-y-8 text-center md:text-left">
          <Badge variant="secondary" className="text-sm px-4 py-1">
            <Sparkles className="w-3 h-3 mr-2 inline" />
            Transformando Organizações com IA
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Inovação em Inteligência Artificial para <span className="text-primary">sua empresa</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Consultoria especializada, desenvolvimento de soluções sob medida e plataformas SaaS corporativas.
            Promovemos eficiência, segurança e excelência em processos organizacionais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center pt-4">
            <Button size="lg" className="text-base" asChild>
              <a href={`mailto:${CONTACT_EMAIL}`}>
                Agende uma Consultoria
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <Link href="/solucoes">Conheça Nossas Soluções</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
