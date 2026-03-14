export type ClientConfig = {
  slug: string;
  productName: string;
  shortName: string;
  name: string; // derived: `${productName} ${shortName}`
  fullName: string;
  faqModelImage: string;
  lastUpdatedFaq: string;
  lastUpdatedLegal: string;
};

type ClientInput = Omit<ClientConfig, "name">;

function defineClient(input: ClientInput): ClientConfig {
  return { ...input, name: `${input.productName} ${input.shortName}` };
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
  }),
  defineClient({
    slug: "chat-sesi",
    productName: "Chat IA",
    shortName: "SESI-PI",
    fullName: "Serviço Social da Indústria - Departamento Regional do Piauí",
    faqModelImage: "/faq-choose-model-SESI.gif",
    lastUpdatedFaq: "12 de janeiro de 2026",
    lastUpdatedLegal: "01 de dezembro de 2025",
  }),
];

export function getClient(slug: string): ClientConfig | undefined {
  return clients.find((c) => c.slug === slug);
}
