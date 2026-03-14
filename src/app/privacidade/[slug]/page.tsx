import { notFound } from "next/navigation";
import { clients, getClient } from "@/data/clients";
import { PrivacidadeTemplate } from "./_template";

export const dynamicParams = false;

export function generateStaticParams() {
  return clients.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) return {};
  return {
    title: `Política de Privacidade da Plataforma ${client.name}`,
    description: `Política de Privacidade da Plataforma ${client.name}.`,
    keywords: ["privacidade", client.shortName, "Chat IA", "LGPD", "Capybara Labs"],
    robots: { index: false, follow: true },
  };
}

export default async function PrivacidadePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) notFound();
  return <PrivacidadeTemplate client={client} />;
}
