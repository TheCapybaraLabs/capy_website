import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { clients, getClient } from "@/data/clients";
import { PrivacidadeTemplateB2B } from "./_template-b2b";
import { PrivacidadeTemplatePublic } from "./_template-public";
import { PrivacidadeTemplateSocial } from "./_template-social";

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
  switch (client.legalVariant) {
    case "public":
      return <PrivacidadeTemplatePublic client={client} />;
    case "social-youth":
      return <PrivacidadeTemplateSocial client={client} />;
    default:
      return <PrivacidadeTemplateB2B client={client} />;
  }
}
