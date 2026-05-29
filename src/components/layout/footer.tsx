import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { CONTACT_EMAIL, LOGO_IMAGE_PATH } from "@/constants/config";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src={LOGO_IMAGE_PATH}
                alt="Capybara Labs"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-bold text-lg">Capybara Labs</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Transformando organizações com Inteligência Artificial e tecnologia de ponta.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Soluções</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <Link href="/solucoes#saas" className="transition-colors hover:text-foreground">
                  Plataformas SaaS
                </Link>
              </li>
              <li>
                <Link
                  href="/solucoes#consultoria"
                  className="transition-colors hover:text-foreground"
                >
                  Consultoria e Capacitação
                </Link>
              </li>
              <li>
                <Link
                  href="/solucoes#desenvolvimento"
                  className="transition-colors hover:text-foreground"
                >
                  Desenvolvimento Sob Medida
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Empresa</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <Link href="/#sobre" className="transition-colors hover:text-foreground">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/#cases" className="transition-colors hover:text-foreground">
                  Cases
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="transition-colors hover:text-foreground">
                  Equipe
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contato</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition-colors hover:text-foreground"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>Piauí, Brasil</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-muted-foreground text-sm md:flex-row">
          <p>© 2024-{new Date().getFullYear()} Capybara Labs. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="transition-colors hover:text-foreground">
              Privacidade
            </Link>
            <Link href="/termos" className="transition-colors hover:text-foreground">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
