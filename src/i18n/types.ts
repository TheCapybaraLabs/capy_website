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
type Five<T> = readonly [T, T, T, T, T];
type Six<T> = readonly [T, T, T, T, T, T];

type TitledItem = {
  title: string;
  description: string;
};

/** Item de lista cujo início vai em <strong>. */
type LabeledItem = {
  label: string;
  text: string;
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
    labschat: string;
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
  solutions: {
    /** Metadata da própria rota, para que /en/solutions não herde o pt. */
    meta: {
      title: string;
      description: string;
      keywords: string[];
    };
    hero: {
      badge: string;
      titleLead: string;
      titleAccent: string;
      subtitle: string;
    };
    saas: {
      heading: string;
      subtitle: string;
      featured: {
        badge: string;
        title: string;
        description: string;
        body: string;
        securityHeading: string;
        security: Triple<TitledItem>;
        featuresHeading: string;
        features: Five<LabeledItem>;
      };
      infra: {
        title: string;
        description: string;
        items: Quad<TitledItem>;
      };
    };
    consulting: {
      heading: string;
      subtitle: string;
      cardTitle: string;
      cardDescription: string;
      areasHeading: string;
      areas: Quad<string>;
      commitmentHeading: string;
      commitment: Quad<string>;
    };
    development: {
      heading: string;
      subtitle: string;
      cardTitle: string;
      cardDescription: string;
      methodologyHeading: string;
      steps: Triple<TitledItem>;
      billing: {
        title: string;
        body: string;
        items: Six<string>;
      };
      legal: {
        title: string;
        body: string;
        items: Quad<string>;
      };
    };
    cta: {
      title: string;
      body: string;
      button: string;
    };
  };
  /**
   * Landing imersiva do produto (/labschat, /en/labschat). Vive fora do
   * chrome padrão do site (sem Header/Footer) e por isso carrega sua própria
   * meta, em vez de reaproveitar o layout de `solutions`.
   */
  labschatPage: {
    meta: {
      title: string;
      description: string;
      keywords: string[];
    };
    nav: {
      docs: string;
    };
    hero: {
      badge: string;
      titleLead: string;
      titleAccent: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    features: {
      heading: string;
      items: Quad<TitledItem>;
    };
    /** Cards empilhados com as telas reais da plataforma. */
    showcase: {
      heading: string;
      subheading: string;
      items: Triple<{
        eyebrow: string;
        title: string;
        description: string;
        imageAlt: string;
      }>;
    };
    partners: {
      heading: string;
    };
    /** Rótulos dos dois canais revelados ao clicar em "Falar com o time". */
    contactOptions: {
      email: string;
      whatsapp: string;
      /** Mensagem pré-preenchida no link wa.me. */
      whatsappMessage: string;
    };
    cta: {
      body: string;
      button: string;
    };
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
