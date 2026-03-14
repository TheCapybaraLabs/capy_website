import { ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, LOGO_IMAGE_PATH } from "@/constants/config";

export function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid w-full items-center gap-12 md:grid-cols-2">
        {/* Left side - Logo */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={LOGO_IMAGE_PATH}
            alt="Capybara Labs"
            width={400}
            height={400}
            className="rounded-full"
            priority
          />
        </div>

        {/* Right side - Content */}
        <div className="space-y-8 text-center md:text-left">
          <Badge variant="secondary" className="px-4 py-1 text-sm">
            <Sparkles className="mr-2 inline h-3 w-3" />
            Transformando Organizações com IA
          </Badge>
          <h1 className="font-bold text-4xl tracking-tight md:text-6xl">
            Inovação em Inteligência Artificial para{" "}
            <span className="text-primary">sua empresa</span>
          </h1>
          <p className="text-muted-foreground text-xl">
            Consultoria especializada, desenvolvimento de soluções sob medida e plataformas SaaS
            corporativas. Promovemos eficiência, segurança e excelência em processos
            organizacionais.
          </p>
          <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row md:justify-start">
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
