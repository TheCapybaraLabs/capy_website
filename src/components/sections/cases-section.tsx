import type { LucideIcon } from "lucide-react";
import { Bot, GraduationCap, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Case = {
  icon: LucideIcon;
  partner: string;
  title: string;
  description: string;
  tag: string;
};

const cases: Case[] = [
  {
    icon: Bot,
    partner: "JA Piauí",
    title: "Metodologia de empreendedorismo em agentes",
    description:
      "Transformamos a metodologia de empreendedorismo da JA em agentes dentro do LabsChat.Ai e conduzimos a capacitação CIEE + JA diretamente na plataforma.",
    tag: "Educação",
  },
  {
    icon: Users,
    partner: "IDB Start · JA + IDB",
    title: "Jovens criando jogos com IA",
    description:
      "No evento IDB Start, conduzimos um workshop em que jovens usaram Inteligência Artificial para criar seus próprios jogos educativos.",
    tag: "Workshop",
  },
  {
    icon: GraduationCap,
    partner: "TheCodeAcademy",
    title: "Parceria em formação técnica",
    description:
      "Parceria com escola de programação de Teresina-PI, cujo professor titular também conduz capacitações para os nossos clientes.",
    tag: "Parceria",
  },
];

export function CasesSection() {
  return (
    <section id="cases" className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <Badge variant="outline">LabsChat.Ai em Ação</Badge>
          <h2 className="font-bold text-3xl md:text-4xl">Tecnologia que Transforma Pessoas</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Levamos IA generativa à educação e à formação, ao lado de instituições que acreditam no
            poder da tecnologia para mudar trajetórias
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cases.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.partner}
                className="relative overflow-hidden border-2 transition-colors hover:border-primary"
              >
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{item.tag}</Badge>
                  </div>
                  <p className="font-medium text-primary text-sm">{item.partner}</p>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
