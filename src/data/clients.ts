export type LegalVariant = "b2b-institutional" | "public" | "social-youth";

export type ClientConfig = {
  slug: string;
  productName: string;
  shortName: string;
  name: string; // defaults to `${productName} ${shortName}`; can be overridden
  fullName: string;
  faqModelImage: string;
  lastUpdatedFaq: string;
  lastUpdatedLegal: string;
  legalVariant: LegalVariant;
};

type ClientInput = Omit<ClientConfig, "name"> & { name?: string };

function defineClient({ name, ...rest }: ClientInput): ClientConfig {
  return { ...rest, name: name ?? `${rest.productName} ${rest.shortName}` };
}

export const clients: ClientConfig[] = [
  defineClient({
    slug: "chat-senai",
    productName: "Chat IA",
    shortName: "SENAI-PI",
    fullName: "Serviço Nacional de Aprendizagem Industrial - Departamento Regional do Piauí",
    faqModelImage: "/faq-choose-model-SENAI.gif",
    lastUpdatedFaq: "12 de janeiro de 2026",
    lastUpdatedLegal: "01 de dezembro de 2025",
    legalVariant: "b2b-institutional",
  }),
  defineClient({
    slug: "chat-sesi",
    productName: "Chat IA",
    shortName: "SESI-PI",
    fullName: "Serviço Social da Indústria - Departamento Regional do Piauí",
    faqModelImage: "/faq-choose-model-SESI.gif",
    lastUpdatedFaq: "12 de janeiro de 2026",
    lastUpdatedLegal: "01 de dezembro de 2025",
    legalVariant: "b2b-institutional",
  }),
  defineClient({
    slug: "labschat",
    productName: "LabsChat.Ai",
    shortName: "labschat",
    name: "LabsChat.Ai",
    fullName: "LabsChat.Ai - Plataforma de Chat com IA da Capybara Labs",
    faqModelImage: "/faq-choose-model-SENAI.gif",
    lastUpdatedFaq: "20 de abril de 2026",
    lastUpdatedLegal: "20 de abril de 2026",
    legalVariant: "public",
  }),
  defineClient({
    slug: "chat-ja",
    productName: "LabsChat",
    shortName: "JA Piauí",
    fullName: "ASSOCIAÇÃO JUNIOR ACHIEVEMENT DO PIAUÍ",
    faqModelImage: "/faq-choose-model-SENAI.gif",
    lastUpdatedFaq: "20 de abril de 2026",
    lastUpdatedLegal: "20 de abril de 2026",
    legalVariant: "social-youth",
  }),
];

export function getClient(slug: string): ClientConfig | undefined {
  return clients.find((c) => c.slug === slug);
}
