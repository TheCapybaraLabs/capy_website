import { Brain, CheckCircle2, Cloud, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <Badge variant="outline">Nossos Serviços</Badge>
          <h2 className="font-bold text-3xl md:text-4xl">Três Pilares de Atuação</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Estruturamos nossa atuação para oferecer soluções completas em tecnologia e IA
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Service 1 */}
          <Card className="relative overflow-hidden border-2 transition-colors hover:border-primary">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Consultoria & Capacitação em IA</CardTitle>
              <CardDescription>
                Treinamentos práticos e personalizados para otimizar processos administrativos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm">Elaboração de ofícios, relatórios e apresentações</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm">Abordagem prática e interativa</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm">Suporte técnico contínuo</p>
              </div>
            </CardContent>
          </Card>

          {/* Service 2 */}
          <Card className="relative overflow-hidden border-2 transition-colors hover:border-primary">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Desenvolvimento Sob Medida</CardTitle>
              <CardDescription>
                Soluções de software únicas para desafios de negócio únicos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm">Plataformas customizadas e integradas</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm">Foco em resolver problemas reais</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm">Automação de processos críticos</p>
              </div>
            </CardContent>
          </Card>

          {/* Service 3 */}
          <Card className="relative overflow-hidden border-2 transition-colors hover:border-primary">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Plataformas SaaS</CardTitle>
              <CardDescription>
                Software robusto como serviço, pronto para impulsionar sua inovação
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm">LabsChat white-label</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm">Hospedagem nacional (LGPD)</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm">Solução gerenciada completa</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
