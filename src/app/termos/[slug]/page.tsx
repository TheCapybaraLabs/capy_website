import { notFound } from "next/navigation";
import { clients, getClient } from "@/data/clients";
import { TermosTemplate } from "./_template";

export const dynamicParams = false;

export function generateStaticParams() {
  return clients.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) return {};
  return {
    title: `Termos de Uso da Plataforma ${client.name}`,
    description: `Termos de Uso da Plataforma ${client.name}.`,
    keywords: ["termos de uso", client.shortName, "Plataforma Chat IA", "Capybara Labs"],
    robots: { index: false, follow: true },
  };
}

export default async function TermosPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) notFound();
  return <TermosTemplate client={client} />;
}
