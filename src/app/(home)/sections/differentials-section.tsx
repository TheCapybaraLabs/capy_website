import { Lightbulb, Target, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <Badge variant="outline">Nossos Diferenciais</Badge>
          <h2 className="font-bold text-3xl md:text-4xl">Por Que Escolher a Capybara Labs?</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Combinamos excelência técnica, personalização e compromisso com resultados
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <Target className="mb-2 h-10 w-10 text-primary" />
              <CardTitle className="text-lg">Diagnóstico Personalizado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Analisamos e identificamos as melhores ferramentas de IA para suas demandas
                específicas
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="mb-2 h-10 w-10 text-primary" />
              <CardTitle className="text-lg">Capacitação Técnica</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Treinamentos focados na otimização de processos e uso eficiente de IA
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="mb-2 h-10 w-10 text-primary" />
              <CardTitle className="text-lg">Suporte Contínuo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Acompanhamento e atualizações durante toda a vigência do contrato
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Lightbulb className="mb-2 h-10 w-10 text-primary" />
              <CardTitle className="text-lg">Inovação Constante</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Incorporamos as mais recentes tecnologias e práticas do mercado
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
