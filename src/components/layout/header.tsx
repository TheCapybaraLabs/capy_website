"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/ui/language-selector-dropdown";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CONTACT_EMAIL, LOGO_IMAGE_PATH } from "@/constants/config";
import type { Dict, getLinks } from "@/i18n";

/**
 * Recebe só as fatias que usa, não o Dict inteiro: este é um client
 * component, e tudo o que entra por props é serializado no payload RSC.
 */
type HeaderProps = {
  nav: Dict["nav"];
  links: ReturnType<typeof getLinks>;
};

export function Header({ nav, links }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: links.solutions, label: nav.solutions },
    { href: links.cases, label: nav.cases },
    { href: links.about, label: nav.about },
    { href: links.differentials, label: nav.differentials },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href={links.home} className="flex items-center gap-3">
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
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-sm transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSelector />
          <ModeToggle />
          <Button size="sm" asChild>
            <a href={`mailto:${CONTACT_EMAIL}`}>{nav.contact}</a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSelector compact />
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{nav.toggleMenu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" aria-describedby={undefined}>
              <SheetTitle className="sr-only">{nav.menuTitle}</SheetTitle>
              <nav className="mt-8 flex flex-col gap-4 px-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-2 font-medium text-base transition-colors hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button size="lg" className="mt-4" asChild>
                  <a href={`mailto:${CONTACT_EMAIL}`} onClick={() => setOpen(false)}>
                    {nav.contact}
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
