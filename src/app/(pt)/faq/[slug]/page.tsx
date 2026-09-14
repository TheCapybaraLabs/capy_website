import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { clients, getClient } from "@/data/clients";
import { FaqTemplate } from "./_template";

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
    title: `FAQ | ${client.name}`,
    description: `Perguntas frequentes sobre o ${client.name}.`,
    keywords: ["faq", client.name, client.shortName, "Chat IA", "Capybara Labs"],
    robots: { index: false, follow: true },
    alternates: { canonical: `/faq/${slug}` },
  };
}

export default async function FaqPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) notFound();
  return <FaqTemplate client={client} />;
}
