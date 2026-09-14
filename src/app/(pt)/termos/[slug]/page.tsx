import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { clients, getClient } from "@/data/clients";
import { TermosTemplateB2B } from "./_template-b2b";
import { TermosTemplatePublic } from "./_template-public";
import { TermosTemplateSocial } from "./_template-social";

export const dynamicParams = false;

export function generateStaticParams() {
  return clients.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) return {};
  return {
    title: `Termos de Uso da Plataforma ${client.name}`,
    description: `Termos de Uso da Plataforma ${client.name}.`,
    keywords: ["termos de uso", client.shortName, "Plataforma Chat IA", "Capybara Labs"],
    robots: { index: false, follow: true },
    alternates: { canonical: `/termos/${slug}` },
  };
}

export default async function TermosPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) notFound();
  switch (client.legalVariant) {
    case "public":
      return <TermosTemplatePublic client={client} />;
    case "social-youth":
      return <TermosTemplateSocial client={client} />;
    default:
      return <TermosTemplateB2B client={client} />;
  }
}
