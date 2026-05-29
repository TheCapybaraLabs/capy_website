"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CONTACT_EMAIL, LOGO_IMAGE_PATH } from "@/constants/config";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={LOGO_IMAGE_PATH}
              alt="Capybara Labs"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-xl">Capybara Labs</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/solucoes"
            className="font-medium text-sm transition-colors hover:text-primary"
          >
            Soluções
          </Link>
          <Link href="/#cases" className="font-medium text-sm transition-colors hover:text-primary">
            Cases
          </Link>
          <Link href="/#sobre" className="font-medium text-sm transition-colors hover:text-primary">
            Sobre
          </Link>
          <Link
            href="/#diferenciais"
            className="font-medium text-sm transition-colors hover:text-primary"
          >
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
            <SheetContent side="right" aria-describedby={"mobile navigation menu"}>
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              <nav className="mt-8 flex flex-col gap-4 px-2">
                <Link
                  href="/solucoes"
                  className="py-2 font-medium text-base transition-colors hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  Soluções
                </Link>
                <Link
                  href="/#cases"
                  className="py-2 font-medium text-base transition-colors hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  Cases
                </Link>
                <Link
                  href="/#sobre"
                  className="py-2 font-medium text-base transition-colors hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  Sobre
                </Link>
                <Link
                  href="/#diferenciais"
                  className="py-2 font-medium text-base transition-colors hover:text-primary"
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
