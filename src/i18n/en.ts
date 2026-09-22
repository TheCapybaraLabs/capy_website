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
    labschat: "LabsChat.Ai",
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
  solutions: {
    meta: {
      title: "Solutions",
      description:
        "Three lines of work: SaaS platforms, AI consulting and custom development. Built for organisations that need AI to hold up in production.",
      keywords: [
        "SaaS platforms",
        "LabsChat.Ai",
        "white-label AI chat",
        "AI consulting",
        "custom software development",
      ],
    },
    hero: {
      badge: "Our Services and Solutions",
      titleLead: "Three Lines of",
      titleAccent: "Work",
      subtitle:
        "We organize around three strategic fronts to change how organizations relate to technology",
    },
    saas: {
      heading: "1. SaaS Platforms",
      subtitle: "Robust, ready-to-use products designed to let you innovate safely",
      featured: {
        badge: "Featured Product",
        title: "LabsChat.Ai (White-Label)",
        description:
          "A generative AI platform built around security, confidentiality and data sovereignty",
        body: "It brings generative AI inside your organization in a controlled, private environment, aligned with LGPD — Brazil's data protection law, closely modeled on the GDPR.",
        securityHeading: "Security and Privacy",
        security: [
          {
            title: "Contractual Confidentiality",
            description: "No interaction is ever used to train external models",
          },
          {
            title: "Data Sovereignty",
            description: "Hosted entirely on servers located in Brazil",
          },
          {
            title: "LGPD Compliance",
            description: "Fully aligned with Brazilian data protection law",
          },
        ],
        featuresHeading: "Advanced Capabilities",
        features: [
          { label: "White-Label:", text: " Fully themed to the client's own visual identity" },
          { label: "Multiple LLMs:", text: " GPT, Gemini, Claude and other frontier models" },
          {
            label: "Intelligent Agents:",
            text: " Automate workflows and encode your own methods into the platform",
          },
          {
            label: "Prompt.Labs:",
            text: " Our own agent that helps users write better prompts",
          },
          {
            label: "Managed Solution:",
            text: " Licensing, support and infrastructure, all included",
          },
        ],
      },
      infra: {
        title: "Managed Infrastructure",
        description: "We run the whole operation so you can focus on your business",
        items: [
          {
            title: "Hosted in Brazil",
            description: "Servers located in Brazil, compliant with LGPD",
          },
          {
            title: "Per-Client Isolation",
            description: "Each organization runs in its own segregated environment",
          },
          {
            title: "Automatic Backups",
            description: "Scheduled backup and recovery routines for your data",
          },
          {
            title: "Continuous Monitoring",
            description: "Availability and performance tracked around the clock",
          },
        ],
      },
    },
    consulting: {
      heading: "2. AI Consulting and Technical Training",
      subtitle: "Hands-on, interactive training focused on outcomes you can measure",
      cardTitle: "Practical and Tailored",
      cardDescription:
        "Training centered on AI tools that apply directly to everyday administrative work",
      areasHeading: "Where It Applies",
      areas: [
        "Drafting official letters and reports",
        "Sharpening emails and presentations",
        "Automating administrative processes",
        "Best practices for working with AI",
      ],
      commitmentHeading: "What We Commit To",
      commitment: [
        "Ongoing follow-up with your teams",
        "Regular technical support",
        "Continuous updates",
        "Building a lasting culture of innovation",
      ],
    },
    development: {
      heading: "3. Custom Software Development",
      subtitle: "Tailored platforms for business problems that have no off-the-shelf answer",
      cardTitle: "Solving the Problem, Not Just Shipping Code",
      cardDescription:
        "Unique challenges need unique solutions. We build business-critical tools that fit into your existing processes",
      methodologyHeading: "How We Work",
      steps: [
        {
          title: "1. Deep Analysis",
          description: "We study the client's full operational workflow",
        },
        {
          title: "2. Custom Build",
          description: "We build solutions that integrate cleanly",
        },
        { title: "3. Ongoing Support", description: "Continuous follow-up and evolution" },
      ],
      billing: {
        title: "In Practice: A Contribution Billing Platform",
        body: "A complete platform for managing and automating membership billing, currently in active development:",
        items: [
          "Automatic issuing of boletos, Brazil's standard bank-slip payment method",
          "Direct bank integration (Sicoob, a Brazilian banking cooperative, among others)",
          "Management dashboards",
          "Integrated document management",
          "Automated email reminders",
          "Process management modules",
        ],
      },
      legal: {
        title: "In Practice: Automation for Law Firms",
        body: "Automation that finds and tracks cases across multiple Brazilian court systems:",
        items: [
          "Case lookup by taxpayer ID (CPF or CNPJ) or bar registration number (OAB), via RPA",
          "Coverage of many separate court systems from a single place",
          "Automatic tracking of new filings and case movements",
          "Normalization and deduplication of the case data collected",
        ],
      },
    },
    cta: {
      title: "Ready to Transform Your Organization?",
      body: "Talk to us and find out how our solutions can drive innovation and efficiency in your company",
      button: "Talk to Our Team",
    },
  },
  labschatPage: {
    meta: {
      title: "LabsChat.Ai — Enterprise AI Platform",
      description:
        "Secure, personalized artificial intelligence, ready for your institution. Multiple models, full white-label, and data hosted in Brazil.",
      keywords: [
        "LabsChat.Ai",
        "enterprise AI platform",
        "AI chat platform",
        "white-label AI",
        "LGPD",
        "GPT",
        "Gemini",
        "Claude",
        "Capybara Labs",
      ],
    },
    nav: {
      docs: "Documentation",
    },
    hero: {
      badge: "Enterprise AI Platform",
      titleLead: "Secure, personalized artificial intelligence.",
      titleAccent: "Ready for your institution.",
      subtitle:
        "LabsChat.Ai brings multiple models, agents and full control into one corporate platform carrying your brand — hosted in Brazil, on your terms.",
      ctaPrimary: "Talk to the team",
      ctaSecondary: "See features",
    },
    features: {
      heading: "Everything in one platform",
      items: [
        {
          title: "Multiple models, one place",
          description:
            "GPT, Gemini, Claude and more — no switching tools, no paying for separate subscriptions.",
        },
        {
          title: "Full white-label",
          description:
            "Your institution's name, logo and identity across the whole platform. Not LabsChat — your Chat.",
        },
        {
          title: "Agents and prompts, built for you",
          description:
            "A library of ready-made agents for your team, plus Labs.Prompt, your personal assistant for writing the perfect prompt.",
        },
        {
          title: "Data sovereignty and privacy",
          description:
            "Data hosted in Brazil, on a dedicated server per client. No interaction ever trains external models.",
        },
      ],
    },
    showcase: {
      heading: "From the login screen to the agents, carrying your brand",
      subheading:
        "The screens below belong to live clients — the same platform, each one wearing its own identity.",
      items: [
        {
          eyebrow: "Full white-label",
          title: "Not LabsChat — your Chat",
          description:
            "Your institution's name, logo, colors and artwork across the whole platform, from the login screen onward. People sign in to something they already recognize.",
          imageAlt: "Chat Grupo Ativa login screen, branded as ativa.ai",
        },
        {
          eyebrow: "Own domain and server",
          title: "Your address, your server, hosted in Brazil",
          description:
            "Every client gets its own subdomain and a dedicated instance. Data stays on Brazilian soil, never mixes across institutions, and never trains external models.",
          imageAlt: "JA Chat login screen at ja.labschat.ai",
        },
        {
          eyebrow: "Agent marketplace",
          title: "Your team's agents, all in one place",
          description:
            "A library of agents organized by area — HR, Finance, Legal, Education and more — plus Labs.Prompts, the assistant that helps write the perfect prompt.",
          imageAlt: "LabsChat.Ai agent marketplace, with agents grouped by category",
        },
      ],
    },
    partners: {
      heading: "Already running at institutions like",
    },
    contactOptions: {
      email: "Email",
      whatsapp: "WhatsApp",
      whatsappMessage: "Hi! I came from the LabsChat.Ai website and I'd like to learn more.",
    },
    cta: {
      body: "Your institution deserves an AI that respects its data, wears its colors, and grows alongside its team.",
      button: "Talk to the team",
    },
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
