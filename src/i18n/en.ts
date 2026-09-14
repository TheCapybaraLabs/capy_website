import type { Dict } from "./types";

/**
 * Adaptação, não tradução. Três decisões de conteúdo que valem revisão:
 *
 * 1. LGPD é glosada uma vez, por extenso, em `featured.highlights` ("Brazil's
 *    data protection law, closely modeled on the GDPR"). Nos bullets, onde não
 *    cabe, aparece só como "LGPD-compliant". Glosar nas seis ocorrências
 *    deixaria o texto pesado.
 * 2. "Hospedagem nacional" vira "Hosted in Brazil". Traduzido ao pé da letra
 *    ("national hosting") não diz de qual país, e o argumento é justamente a
 *    residência dos dados.
 * 3. Os cases expandem as siglas pelo que elas são de fato: JA é Junior
 *    Achievement (marca global, credencial real), IDB é o Instituto Dom
 *    Barreto — uma escola de Teresina, descrita como tal e sem inflação — e
 *    CIEE ganha uma aposto curto.
 */
export const en: Dict = {
  anchors: {
    services: "services",
    cases: "cases",
    about: "about",
    differentials: "why-us",
    saas: "saas",
    consulting: "consulting",
    development: "development",
  },
  nav: {
    solutions: "Solutions",
    cases: "Cases",
    about: "About",
    differentials: "Why Us",
    contact: "Get in Touch",
    menuTitle: "Navigation menu",
    toggleMenu: "Open menu",
  },
  hero: {
    badge: "Transforming Organizations with AI",
    titleLead: "Artificial intelligence that works for",
    titleAccent: "your organization",
    body: "Specialist consulting, custom software and corporate SaaS platforms. We build for efficiency, security and operational excellence.",
    ctaPrimary: "Book a Consultation",
    ctaSecondary: "Explore Our Solutions",
  },
  services: {
    badge: "What We Do",
    title: "Three Lines of Work",
    subtitle: "Structured to deliver complete solutions across technology and AI",
    items: [
      {
        title: "SaaS Platforms",
        description: "Robust software as a service, ready to carry your innovation",
        bullets: [
          "White-label LabsChat.Ai",
          "Hosted in Brazil, LGPD-compliant",
          "Fully managed solution",
        ],
      },
      {
        title: "AI Consulting & Training",
        description: "Hands-on, tailored training to streamline administrative processes",
        bullets: [
          "Drafting letters, reports and presentations",
          "Practical, interactive sessions",
          "Ongoing technical support",
        ],
      },
      {
        title: "Custom Development",
        description: "Bespoke software for problems that do not fit off-the-shelf tools",
        bullets: [
          "Custom, integrated platforms",
          "Focused on real operational problems",
          "Automation of business-critical processes",
        ],
      },
    ],
  },
  featured: {
    badge: "Featured Product",
    title: "LabsChat.Ai",
    body: "A generative AI platform for corporate use, built around security, confidentiality and data sovereignty.",
    highlights: [
      {
        title: "Contractual Security",
        description: "Your data never feeds the training of external models",
      },
      {
        title: "Hosted in Brazil",
        description:
          "Dedicated infrastructure in Brazil, compliant with LGPD — the country's data protection law, closely modeled on the GDPR",
      },
      {
        title: "White-Label",
        description: "Fully themed to your own brand and visual identity",
      },
    ],
    cta: "Request a Demo",
    panel: [
      {
        title: "Multiple LLM Providers",
        description: "GPT, Gemini, Claude, Grok and others",
      },
      {
        title: "Agents & Prompt.Labs",
        description: "Custom agents, plus Prompt.Labs to help your team write better prompts",
      },
      {
        title: "Private Environment",
        description: "Full control and privacy over your information",
      },
    ],
  },
  cases: {
    badge: "LabsChat.Ai in Practice",
    title: "Technology That Changes People",
    subtitle:
      "We bring generative AI into classrooms and vocational training, alongside institutions that believe technology can change where a young person ends up",
    items: [
      {
        partner: "Junior Achievement Piauí",
        title: "An entrepreneurship curriculum, rebuilt as AI agents",
        description:
          "We turned Junior Achievement's entrepreneurship methodology into agents inside LabsChat.Ai, and delivered the joint training program with CIEE — Brazil's largest student-to-employer network — on the platform itself.",
        tag: "Education",
      },
      {
        partner: "Instituto Dom Barreto + Junior Achievement",
        title: "Teenagers building games with AI",
        description:
          "At IDB Start, an event hosted by a school in Teresina, we ran a workshop where students used generative AI to build their own educational games.",
        tag: "Workshop",
      },
      {
        partner: "TheCodeAcademy",
        title: "A technical training partnership",
        description:
          "A partnership with a coding school in Teresina whose lead instructor also runs training sessions for our clients.",
        tag: "Partnership",
      },
    ],
  },
  about: {
    badge: "About Us",
    title: "Built on AI and Engineering Depth",
    lead: "Capybara Labs is an information technology company with consolidated expertise in artificial intelligence, consulting and technical training.",
    mission:
      "Our mission is to change how organizations relate to technology, driving innovation, efficiency and excellence across administrative and operational processes.",
    card: {
      title: "What Sets Us Apart",
      subtitle: "Operational structure and technical depth",
      p1: "What sets Capybara Labs apart is how we are organized and how deep the team goes technically.",
      p2Lead: "We work as a ",
      p2Strong: "small, multidisciplinary and highly efficient team",
      p2Tail:
        ". That structure is exactly what lets us move quickly and tailor the work to each client.",
      p3: "The combined experience of a varied team raises what the company can take on, letting us give each project our full attention and deliver stronger results — without the bureaucracy or the anonymity of a large consultancy.",
    },
    culture: {
      title: "Our Culture",
      items: [
        {
          title: "Technical Excellence",
          description: "Highly qualified professionals with deep expertise in their own fields.",
        },
        {
          title: "Speed",
          description: "A small structure that allows fast answers and per-project tailoring.",
        },
        {
          title: "Multidisciplinarity",
          description: "Varied expertise combined to deliver complete, inventive solutions.",
        },
      ],
    },
  },
  differentials: {
    badge: "Why Us",
    title: "Why Choose Capybara Labs?",
    subtitle: "Technical excellence, tailoring and a commitment to outcomes",
    items: [
      {
        title: "Tailored Assessment",
        description: "We analyze your operation and identify the right AI tools for your demands",
      },
      {
        title: "Technical Training",
        description: "Training focused on process optimization and effective day-to-day AI use",
      },
      {
        title: "Continuous Support",
        description: "Follow-up and updates for the full duration of the contract",
      },
      {
        title: "Constant Innovation",
        description: "We fold in the newest technologies and practices as they mature",
      },
    ],
  },
  cta: {
    title: "Ready to Transform Your Organization?",
    body: "Get in touch and find out how Capybara Labs can drive innovation and efficiency in your company with AI",
    button: "Talk to Our Team",
  },
  footer: {
    tagline: "Transforming organizations with artificial intelligence and modern engineering.",
    solutionsHeading: "Solutions",
    companyHeading: "Company",
    contactHeading: "Contact",
    saas: "SaaS Platforms",
    consulting: "Consulting & Training",
    development: "Custom Development",
    about: "About Us",
    cases: "Cases",
    location: "Piauí, Brazil",
    rights: "All rights reserved.",
    privacy: "Privacy (in Portuguese)",
    terms: "Terms (in Portuguese)",
  },
  notFound: {
    title: "Page not found",
    body: "The page you are looking for does not exist or has been removed.",
    back: "Back to home",
  },
  consent: {
    title: "Privacy Policy",
    body: "We use cookies and analytics tools to improve your experience on this site. By continuing to browse, you agree to our data collection for analytics and performance purposes.",
    accept: "Accept",
  },
};
