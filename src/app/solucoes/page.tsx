import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Brain,
  Code2,
  Cloud,
  Lightbulb,
  Target,
  Users,
  Shield,
  Zap,
  Database,
  Lock,
  Globe,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { CONTACT_EMAIL } from '@/constants/config';

export default function SolucoesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-b from-primary/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="secondary" className="text-sm px-4 py-1">
              <Sparkles className="w-3 h-3 mr-2 inline" />
              Nossos Serviços e Soluções
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Três Pilares de <span className="text-primary">Excelência</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Estruturamos nossa atuação em três frentes estratégicas para transformar a relação das organizações com a
              tecnologia
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        {/* Pilar 1: Consultoria e Capacitação */}
        <section id="consultoria" className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-lg bg-primary/10">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">1. Consultoria e Capacitação Técnica em IA</h2>
              <p className="text-lg text-muted-foreground">
                Treinamentos práticos e interativos focados em resultados tangíveis
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Abordagem Prática e Personalizada</CardTitle>
              <CardDescription>
                Treinamentos voltados para o uso de ferramentas de Inteligência Artificial aplicáveis a processos
                administrativos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Áreas de Aplicação
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Elaboração de ofícios e relatórios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Otimização de e-mails e apresentações</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Automação de processos administrativos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Melhores práticas no uso de IA</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Nosso Compromisso
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Acompanhamento contínuo das equipes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Suporte técnico regular</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Atualizações constantes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
            <div className="p-4 rounded-lg bg-primary/10">
              <Code2 className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">2. Desenvolvimento de Soluções Sob Medida</h2>
              <p className="text-lg text-muted-foreground">
                Plataformas customizadas que resolvem desafios únicos de negócio
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Foco em Resolver o Problema, Não Apenas Entregar Código</CardTitle>
              <CardDescription>
                Desafios únicos exigem soluções únicas. Desenvolvemos ferramentas de missão crítica integradas aos seus
                processos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Nossa Metodologia
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg border bg-card">
                      <div className="font-semibold mb-2">1. Análise Profunda</div>
                      <p className="text-sm text-muted-foreground">Estudamos o fluxo operacional completo do cliente</p>
                    </div>
                    <div className="p-4 rounded-lg border bg-card">
                      <div className="font-semibold mb-2">2. Desenvolvimento Customizado</div>
                      <p className="text-sm text-muted-foreground">Construímos soluções perfeitamente integradas</p>
                    </div>
                    <div className="p-4 rounded-lg border bg-card">
                      <div className="font-semibold mb-2">3. Suporte Contínuo</div>
                      <p className="text-sm text-muted-foreground">Acompanhamento e evolução constante</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-muted/50 space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Exemplo de Atuação: Plataforma de Gestão de Cobranças
                  </h3>
                  <p className="text-muted-foreground">
                    Plataforma completa para gerenciamento e automação de cobrança de contribuições, atualmente em
                    desenvolvimento ativo:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Emissão automática de boletos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Integração bancária direta (ex: Sicoob)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Dashboards gerenciais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Gestão documental integrada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Automação de lembretes por e-mail</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
            <div className="p-4 rounded-lg bg-primary/10">
              <Cloud className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">3. Plataformas SaaS (Software como Serviço)</h2>
              <p className="text-lg text-muted-foreground">
                Produtos robustos e prontos para uso, projetados para inovação segura
              </p>
            </div>
          </div>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2">
                Produto Destaque
              </Badge>
              <CardTitle className="text-2xl">Plataforma de Chat IA Corporativo (White-Label)</CardTitle>
              <CardDescription>
                Solução avançada com foco absoluto em segurança, confidencialidade e soberania dos dados
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Permite que organizações adotem o poder da IA generativa em um ambiente controlado, privado e alinhado à
                legislação brasileira (LGPD).
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Segurança e Privacidade
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Lock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium">Confidencialidade Contratual</div>
                        <p className="text-sm text-muted-foreground">
                          Nenhuma interação é usada para treinar modelos externos
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium">Soberania de Dados</div>
                        <p className="text-sm text-muted-foreground">
                          Hospedagem 100% nacional em servidores no Brasil
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Database className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium">Conformidade LGPD</div>
                        <p className="text-sm text-muted-foreground">
                          Totalmente alinhado à legislação brasileira de proteção de dados
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Recursos Avançados
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        <strong>White-Label:</strong> Customização completa com identidade visual do cliente
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        <strong>Múltiplos LLMs:</strong> GPT, Gemini, Claude e outros modelos avançados
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        <strong>Prompt.Labs:</strong> Ferramenta proprietária para otimização de prompts
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        <strong>Biblioteca de Prompts:</strong> Sistema pessoal para organização e reutilização
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        <strong>Solução Gerenciada:</strong> Licenciamento, suporte e infraestrutura inclusos
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
            <CardContent className="pt-12 pb-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Pronto para Transformar sua Organização?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Entre em contato e descubra como nossas soluções podem impulsionar a inovação e eficiência da sua
                empresa
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
