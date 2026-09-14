import { en } from "./en";
import { pt } from "./pt";
import type { Dict } from "./types";

export type { Dict } from "./types";

export type Locale = "pt-BR" | "en";

export const DEFAULT_LOCALE: Locale = "pt-BR";

const dictionaries: Record<Locale, Dict> = {
  "pt-BR": pt,
  en,
};

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale];
}

/**
 * Rotas que existem nos dois idiomas. Qualquer caminho fora daqui (jurídico,
 * FAQ) cai na home do idioma de destino: esses documentos só existem em pt-BR.
 *
 * Este mapa é a fonte única para o seletor de idioma, para o hreflang e para o
 * sitemap. Ao traduzir uma página nova, adicione a entrada aqui primeiro.
 */
export const PT_TO_EN: Record<string, string> = {
  "/": "/en",
  "/solucoes": "/en/solutions",
};

export const EN_TO_PT: Record<string, string> = Object.fromEntries(
  Object.entries(PT_TO_EN).map(([ptPath, enPath]) => [enPath, ptPath]),
);

export function getLocale(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt-BR";
}

/** Equivalente de `pathname` no idioma `target`, ou a home desse idioma. */
export function getAlternate(pathname: string, target: Locale): string {
  if (getLocale(pathname) === target) return pathname;
  return target === "en" ? (PT_TO_EN[pathname] ?? "/en") : (EN_TO_PT[pathname] ?? "/");
}

/**
 * Hrefs que o chrome precisa montar, já resolvidos para um idioma.
 * Privacidade e Termos não aparecem aqui porque só existem em pt-BR.
 */
export function getLinks(locale: Locale, dict: Dict) {
  const home = locale === "en" ? "/en" : "/";
  const solutions = locale === "en" ? "/en/solutions" : "/solucoes";

  return {
    home,
    solutions,
    cases: `${home}#${dict.anchors.cases}`,
    about: `${home}#${dict.anchors.about}`,
    differentials: `${home}#${dict.anchors.differentials}`,
    saas: `${solutions}#${dict.anchors.saas}`,
    consulting: `${solutions}#${dict.anchors.consulting}`,
    development: `${solutions}#${dict.anchors.development}`,
    privacy: "/privacidade",
    terms: "/termos",
  };
}
