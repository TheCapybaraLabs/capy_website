import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Zap, Users, Lightbulb } from 'lucide-react';

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline">Nossos Diferenciais</Badge>
          <h2 className="text-3xl md:text-4xl font-bold">Por Que Escolher a Capybara Labs?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combinamos excelência técnica, personalização e compromisso com resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Target className="w-10 h-10 text-primary mb-2" />
              <CardTitle className="text-lg">Diagnóstico Personalizado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Analisamos e identificamos as melhores ferramentas de IA para suas demandas específicas
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="w-10 h-10 text-primary mb-2" />
              <CardTitle className="text-lg">Capacitação Técnica</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Treinamentos focados na otimização de processos e uso eficiente de IA
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="w-10 h-10 text-primary mb-2" />
              <CardTitle className="text-lg">Suporte Contínuo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Acompanhamento e atualizações durante toda a vigência do contrato
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Lightbulb className="w-10 h-10 text-primary mb-2" />
              <CardTitle className="text-lg">Inovação Constante</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Incorporamos as mais recentes tecnologias e práticas do mercado
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
