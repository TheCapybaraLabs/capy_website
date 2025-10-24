import { Separator } from '@/components/ui/separator';
import { CONTACT_EMAIL, LOGO_IMAGE_PATH } from '@/constants/config';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src={LOGO_IMAGE_PATH} alt="Capybara Labs" width={32} height={32} className="rounded-full" />
              <span className="text-lg font-bold">Capybara Labs</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transformando organizações com Inteligência Artificial e tecnologia de ponta.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Soluções</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/solucoes#consultoria" className="hover:text-foreground transition-colors">
                  Consultoria e Capacitação
                </Link>
              </li>
              <li>
                <Link href="/solucoes#desenvolvimento" className="hover:text-foreground transition-colors">
                  Desenvolvimento Sob Medida
                </Link>
              </li>
              <li>
                <Link href="/solucoes#saas" className="hover:text-foreground transition-colors">
                  Plataformas SaaS
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#sobre" className="hover:text-foreground transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="hover:text-foreground transition-colors">
                  Equipe
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>Piauí, Brasil</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024-{new Date().getFullYear()} Capybara Labs. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="hover:text-foreground transition-colors">
              Privacidade
            </Link>
            <Link href="/termos" className="hover:text-foreground transition-colors">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
