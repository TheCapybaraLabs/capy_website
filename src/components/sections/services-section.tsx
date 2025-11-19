import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Code2, Cloud, CheckCircle2 } from 'lucide-react';

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline">Nossos Serviços</Badge>
          <h2 className="text-3xl md:text-4xl font-bold">Três Pilares de Atuação</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estruturamos nossa atuação para oferecer soluções completas em tecnologia e IA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <Card className="relative overflow-hidden border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Consultoria & Capacitação em IA</CardTitle>
              <CardDescription>
                Treinamentos práticos e personalizados para otimizar processos administrativos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm">Elaboração de ofícios, relatórios e apresentações</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm">Abordagem prática e interativa</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm">Suporte técnico contínuo</p>
              </div>
            </CardContent>
          </Card>

          {/* Service 2 */}
          <Card className="relative overflow-hidden border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Desenvolvimento Sob Medida</CardTitle>
              <CardDescription>Soluções de software únicas para desafios de negócio únicos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm">Plataformas customizadas e integradas</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm">Foco em resolver problemas reais</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm">Automação de processos críticos</p>
              </div>
            </CardContent>
          </Card>

          {/* Service 3 */}
          <Card className="relative overflow-hidden border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Plataformas SaaS</CardTitle>
              <CardDescription>Software robusto como serviço, pronto para impulsionar sua inovação</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm">GPT Labs white-label</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm">Hospedagem nacional (LGPD)</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm">Solução gerenciada completa</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
