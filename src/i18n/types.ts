/**
 * Forma do conteúdo traduzível do site.
 *
 * pt.ts e en.ts precisam satisfazer este tipo, então adicionar uma seção em
 * um idioma quebra o build até o outro existir. As coleções de tamanho fixo
 * são tuplas de propósito: a home tem três cards de serviço, três cases e
 * quatro diferenciais, e um idioma com um card a menos sairia torto.
 *
 * en.ts NÃO é tradução literal de pt.ts. É adaptação: siglas locais (LGPD,
 * CIEE, IDB) viram frases legíveis para quem não conhece o Brasil. Ao editar
 * um lado, releia o outro em vez de traduzir palavra por palavra.
 */

type Triple<T> = readonly [T, T, T];
type Quad<T> = readonly [T, T, T, T];

type TitledItem = {
  title: string;
  description: string;
};

export type Dict = {
  /** Âncoras de seção. Ficam em inglês no lado /en para não vazar pt na URL. */
  anchors: {
    services: string;
    cases: string;
    about: string;
    differentials: string;
    saas: string;
    consulting: string;
    development: string;
  };
  nav: {
    solutions: string;
    cases: string;
    about: string;
    differentials: string;
    contact: string;
    /** Rótulos apenas para leitor de tela. */
    menuTitle: string;
    toggleMenu: string;
  };
  hero: {
    badge: string;
    titleLead: string;
    titleAccent: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: Triple<TitledItem & { bullets: Triple<string> }>;
  };
  featured: {
    badge: string;
    title: string;
    body: string;
    highlights: Triple<TitledItem>;
    cta: string;
    panel: Triple<TitledItem>;
  };
  cases: {
    badge: string;
    title: string;
    subtitle: string;
    items: Triple<{
      partner: string;
      title: string;
      description: string;
      tag: string;
    }>;
  };
  about: {
    badge: string;
    title: string;
    lead: string;
    mission: string;
    card: {
      title: string;
      subtitle: string;
      p1: string;
      /** p2 quebra em três porque o meio vai dentro de <strong>. */
      p2Lead: string;
      p2Strong: string;
      p2Tail: string;
      p3: string;
    };
    culture: {
      title: string;
      items: Triple<TitledItem>;
    };
  };
  differentials: {
    badge: string;
    title: string;
    subtitle: string;
    items: Quad<TitledItem>;
  };
  cta: {
    title: string;
    body: string;
    button: string;
  };
  footer: {
    tagline: string;
    solutionsHeading: string;
    companyHeading: string;
    contactHeading: string;
    saas: string;
    consulting: string;
    development: string;
    about: string;
    cases: string;
    location: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  notFound: {
    title: string;
    body: string;
    back: string;
  };
  consent: {
    title: string;
    body: string;
    accept: string;
  };
};
