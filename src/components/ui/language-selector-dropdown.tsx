"use client";

import { Check, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type Locale = "pt-BR" | "en";

type Language = {
  code: Locale;
  label: string;
  flag: string;
};

const LANGUAGES: Language[] = [
  { code: "pt-BR", label: "Português (BR)", flag: "🇧🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
];

/**
 * Rotas que existem nos dois idiomas. Qualquer caminho fora deste mapa
 * (jurídico, FAQ) cai na home do idioma de destino.
 */
const PT_TO_EN: Record<string, string> = {
  "/": "/en",
  "/solucoes": "/en/solutions",
};

const EN_TO_PT: Record<string, string> = Object.fromEntries(
  Object.entries(PT_TO_EN).map(([pt, en]) => [en, pt]),
);

function getLocale(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt-BR";
}

function getHref(pathname: string, target: Locale): string {
  if (getLocale(pathname) === target) return pathname;
  return target === "en" ? (PT_TO_EN[pathname] ?? "/en") : (EN_TO_PT[pathname] ?? "/");
}

type LanguageSelectorProps = {
  /** Oculta o rótulo, deixando bandeira e seta. Para o header mobile. */
  compact?: boolean;
  className?: string;
};

export function LanguageSelector({ compact = false, className }: LanguageSelectorProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  const locale = getLocale(pathname);
  const current = LANGUAGES.find((lang) => lang.code === locale) ?? LANGUAGES[0];

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className={cn("relative inline-block", className)} ref={containerRef}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((isOpen) => !isOpen)}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={locale === "en" ? "Change language" : "Mudar idioma"}
        className={cn(
          "flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm",
          "border-border bg-background/60 shadow-sm backdrop-blur-md",
          "text-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
          "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring",
        )}
      >
        <span aria-hidden="true">{current.flag}</span>
        <span className={cn(compact && "sr-only")}>{current.label}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <ul
          id={menuId}
          className={cn(
            "absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-xl",
            "border border-border bg-popover/95 text-popover-foreground shadow-lg backdrop-blur-xl",
            "fade-in-0 zoom-in-95 slide-in-from-top-2 animate-in",
          )}
        >
          {LANGUAGES.map((lang) => {
            const isActive = lang.code === locale;
            return (
              <li key={lang.code}>
                <Link
                  href={getHref(pathname, lang.code)}
                  hrefLang={lang.code}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors",
                    isActive
                      ? "font-semibold text-primary"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  <span aria-hidden="true">{lang.flag}</span>
                  <span className="flex-1">{lang.label}</span>
                  {isActive && <Check className="h-4 w-4 text-primary" />}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
