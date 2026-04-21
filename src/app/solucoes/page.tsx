import {
  Brain,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Globe,
  Lightbulb,
  Lock,
  Shield,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CONTACT_EMAIL } from "@/constants/config";

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Três pilares de excelência: Consultoria em IA, Desenvolvimento Sob Medida e Plataformas SaaS. Transforme sua organização com soluções inovadoras.",
  keywords: [
    "consultoria IA",
    "desenvolvimento sob medida",
    "plataformas SaaS",
    "LabsChat",
    "white-label",
  ],
};

export default function SolucoesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-b from-primary/5 to-transparent py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <Badge variant="secondary" className="px-4 py-1 text-sm">
              <Sparkles className="mr-2 inline h-3 w-3" />
              Nossos Serviços e Soluções
            </Badge>
            <h1 className="font-bold text-4xl tracking-tight md:text-5xl">
              Três Pilares de <span className="text-primary">Excelência</span>
            </h1>
            <p className="text-muted-foreground text-xl">
              Estruturamos nossa atuação em três frentes estratégicas para transformar a relação das
              organizações com a tecnologia
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-24 px-4 py-12 sm:px-6 lg:px-8">
        {/* Pilar 1: Consultoria e Capacitação */}
        <section id="consultoria" className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-primary/10 p-4">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="mb-2 font-bold text-3xl">
                1. Consultoria e Capacitação Técnica em IA
              </h2>
              <p className="text-lg text-muted-foreground">
                Treinamentos práticos e interativos focados em resultados tangíveis
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Abordagem Prática e Personalizada</CardTitle>
              <CardDescription>
                Treinamentos voltados para o uso de ferramentas de Inteligência Artificial
                aplicáveis a processos administrativos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 font-semibold text-lg">
                    <Target className="h-5 w-5 text-primary" />
                    Áreas de Aplicação
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Elaboração de ofícios e relatórios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Otimização de e-mails e apresentações</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Automação de processos administrativos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Melhores práticas no uso de IA</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 font-semibold text-lg">
                    <Users className="h-5 w-5 text-primary" />
                    Nosso Compromisso
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Acompanhamento contínuo das equipes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Suporte técnico regular</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Atualizações constantes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Consolidação de cultura de inovação</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Pilar 2: Desenvolvimento Sob Medida */}
        <section id="desenvolvimento" className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-primary/10 p-4">
              <Code2 className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="mb-2 font-bold text-3xl">2. Desenvolvimento de Soluções Sob Medida</h2>
              <p className="text-lg text-muted-foreground">
                Plataformas customizadas que resolvem desafios únicos de negócio
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Foco em Resolver o Problema, Não Apenas Entregar Código
              </CardTitle>
              <CardDescription>
                Desafios únicos exigem soluções únicas. Desenvolvemos ferramentas de missão crítica
                integradas aos seus processos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6">
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 font-semibold text-lg">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Nossa Metodologia
                  </h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-2 font-semibold">1. Análise Profunda</div>
                      <p className="text-muted-foreground text-sm">
                        Estudamos o fluxo operacional completo do cliente
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-2 font-semibold">2. Desenvolvimento Customizado</div>
                      <p className="text-muted-foreground text-sm">
                        Construímos soluções perfeitamente integradas
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-2 font-semibold">3. Suporte Contínuo</div>
                      <p className="text-muted-foreground text-sm">
                        Acompanhamento e evolução constante
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 rounded-lg bg-muted/50 p-6">
                  <h3 className="flex items-center gap-2 font-semibold text-lg">
                    <Zap className="h-5 w-5 text-primary" />
                    Exemplo de Atuação: Plataforma de Gestão de Cobranças
                  </h3>
                  <p className="text-muted-foreground">
                    Plataforma completa para gerenciamento e automação de cobrança de contribuições,
                    atualmente em desenvolvimento ativo:
                  </p>
                  <ul className="grid gap-3 md:grid-cols-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">Emissão automática de boletos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">Integração bancária direta (ex: Sicoob)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">Dashboards gerenciais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">Gestão documental integrada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">Automação de lembretes por e-mail</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">Módulos de gestão de processos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Pilar 3: Plataformas SaaS */}
        <section id="saas" className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-primary/10 p-4">
              <Cloud className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="mb-2 font-bold text-3xl">
                3. Plataformas SaaS (Software como Serviço)
              </h2>
              <p className="text-lg text-muted-foreground">
                Produtos robustos e prontos para uso, projetados para inovação segura
              </p>
            </div>
          </div>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <Badge variant="secondary" className="mb-2 w-fit">
                Produto Destaque
              </Badge>
              <CardTitle className="text-2xl">Plataforma de LabsChat (White-Label)</CardTitle>
              <CardDescription>
                Solução avançada com foco absoluto em segurança, confidencialidade e soberania dos
                dados
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Permite que organizações adotem o poder da IA generativa em um ambiente controlado,
                privado e alinhado à legislação brasileira (LGPD).
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 font-semibold text-lg">
                    <Shield className="h-5 w-5 text-primary" />
                    Segurança e Privacidade
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Lock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <div className="font-medium">Confidencialidade Contratual</div>
                        <p className="text-muted-foreground text-sm">
                          Nenhuma interação é usada para treinar modelos externos
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Globe className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <div className="font-medium">Soberania de Dados</div>
                        <p className="text-muted-foreground text-sm">
                          Hospedagem 100% nacional em servidores no Brasil
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Database className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <div className="font-medium">Conformidade LGPD</div>
                        <p className="text-muted-foreground text-sm">
                          Totalmente alinhado à legislação brasileira de proteção de dados
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 font-semibold text-lg">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Recursos Avançados
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>
                        <strong>White-Label:</strong> Customização completa com identidade visual do
                        cliente
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>
                        <strong>Múltiplos LLMs:</strong> GPT, Gemini, Claude e outros modelos
                        avançados
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>
                        <strong>Prompt.Labs:</strong> Ferramenta proprietária para otimização de
                        prompts
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>
                        <strong>Biblioteca de Prompts:</strong> Sistema pessoal para organização e
                        reutilização
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>
                        <strong>Solução Gerenciada:</strong> Licenciamento, suporte e infraestrutura
                        inclusos
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <Card className="border-2 border-primary/20 bg-linear-to-br from-primary/5 to-transparent">
            <CardContent className="space-y-6 pt-12 pb-12 text-center">
              <h2 className="font-bold text-3xl md:text-4xl">
                Pronto para Transformar sua Organização?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Entre em contato e descubra como nossas soluções podem impulsionar a inovação e
                eficiência da sua empresa
              </p>
              <Button size="lg" asChild>
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  Fale com Nossos Especialistas
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
