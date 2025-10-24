'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { CONTACT_EMAIL } from '@/constants/config';
import { ModeToggle } from '@/components/mode-toggle';
import { useState } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/capybara-labs.png" alt="Capybara Labs" width={40} height={40} className="rounded-full" />
            <span className="text-xl font-bold">Capybara Labs</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/solucoes" className="text-sm font-medium hover:text-primary transition-colors">
            Soluções
          </Link>
          <Link href="/#sobre" className="text-sm font-medium hover:text-primary transition-colors">
            Sobre
          </Link>
          <Link href="/equipe" className="text-sm font-medium hover:text-primary transition-colors">
            Equipe
          </Link>
          <Link href="/#diferenciais" className="text-sm font-medium hover:text-primary transition-colors">
            Diferenciais
          </Link>
          <ModeToggle />
          <Button size="sm" asChild>
            <a href={`mailto:${CONTACT_EMAIL}`}>Entre em Contato</a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" aria-describedby={'mobile navigation menu'}>
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8 px-2">
                <Link
                  href="/solucoes"
                  className="text-base font-medium hover:text-primary transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  Soluções
                </Link>
                <Link
                  href="/#sobre"
                  className="text-base font-medium hover:text-primary transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  Sobre
                </Link>
                <Link
                  href="/equipe"
                  className="text-base font-medium hover:text-primary transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  Equipe
                </Link>
                <Link
                  href="/#diferenciais"
                  className="text-base font-medium hover:text-primary transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  Diferenciais
                </Link>
                <Button size="lg" className="mt-4" asChild>
                  <a href={`mailto:${CONTACT_EMAIL}`} onClick={() => setOpen(false)}>
                    Entre em Contato
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
