import {
  AlertTriangle,
  Bookmark,
  Calendar,
  CheckCircle,
  Mail,
  Scale,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Termos de Serviço - GPT Labs Corporativo",
  description:
    "Termos e condições específicos da Plataforma de Chat com Inteligência Artificial White-Label da Capybara Labs.",
  keywords: [
    "termos de serviço",
    "GPT Labs",
    "white-label",
    "LGPD",
    "soberania de dados",
    "segurança",
  ],
  robots: { index: false, follow: true },
};

export default function TermosChatIA() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Plataforma SaaS</Badge>
              <Badge variant="outline">GPT Labs Corporativo</Badge>
            </div>
            <h1 className="font-bold text-4xl tracking-tight">
              Termos de Serviço - GPT Labs Corporativo
            </h1>
            <p className="text-lg text-muted-foreground">
              Termos e condições específicos da Plataforma de Chat com Inteligência Artificial
              White-Label da Capybara Labs.
            </p>
            <p className="text-muted-foreground text-sm">
              Última atualização: 19 de Novembro de 2025
            </p>
          </div>

          <Separator />

          {/* Seção 1: Definições Específicas */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bookmark className="h-5 w-5 text-primary" />
                <CardTitle>1. Definições Específicas</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Para os fins destes termos, considera-se:</p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  <strong>Plataforma:</strong> Solução de Chat com IA baseada em LLMs, gerenciada
                  pela Capybara Labs
                </li>
                <li>
                  <strong>Instância:</strong> Ambiente virtual segregado e dedicado ao Cliente
                </li>
                <li>
                  <strong>LLM Providers:</strong> Fornecedores terceiros de modelos de linguagem
                  (ex: OpenAI, Anthropic, Google)
                </li>
                <li>
                  <strong>Usuários Autorizados:</strong> Funcionários ou colaboradores cadastrados
                  pelo Cliente na Plataforma
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Seção 2: Objeto e Descrição do Serviço */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <CardTitle>2. Objeto e Descrição do Serviço</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A Capybara Labs fornece o licenciamento e a infraestrutura de uma plataforma de chat
                white-label que inclui:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Acesso centralizado a múltiplos modelos de linguagem via API</li>
                <li>
                  Hospedagem em infraestrutura segura (VPS) localizada preferencialmente em
                  território brasileiro
                </li>
                <li>Ferramentas de gestão (Prompt.Labs, logs de auditoria e gestão de usuários)</li>
                <li>Personalização visual (White-Label) conforme marca do Cliente</li>
              </ul>
            </CardContent>
          </Card>

          {/* Seção 3: Segurança, Privacidade e Dados */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>3. Segurança, Privacidade e Dados</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <h4 className="mb-2 font-semibold">
                    3.1. Propriedade dos Dados (Inputs/Outputs)
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Todo prompt inserido e todo conteúdo gerado na Plataforma são de propriedade
                    exclusiva do Cliente. A Capybara Labs não reivindica direitos intelectuais sobre
                    este conteúdo.
                  </p>
                </div>

                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <h4 className="mb-2 font-semibold">3.2. Não-Treinamento</h4>
                  <p className="text-muted-foreground text-sm">
                    A Capybara Labs garante tecnicamente que os dados trafegados{" "}
                    <strong>não são utilizados</strong> para treinar os modelos de fundação
                    públicos.
                  </p>
                </div>

                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <h4 className="mb-2 font-semibold">3.3. Transferência Internacional</h4>
                  <p className="text-muted-foreground text-sm">
                    O Cliente reconhece que, embora a infraestrutura de gestão esteja no Brasil, o
                    processamento da inferência pode ocorrer em servidores dos LLM Providers
                    localizados no exterior, conforme a escolha técnica dos modelos.
                  </p>
                </div>

                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <h4 className="mb-2 font-semibold">3.4. Confidencialidade</h4>
                  <p className="text-muted-foreground text-sm">
                    Ambas as partes comprometem-se a manter sigilo sobre informações técnicas e
                    comerciais trocadas durante a vigência do contrato.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seção 4: Obrigações do Cliente */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <CardTitle>4. Obrigações do Cliente</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">O Cliente compromete-se a:</p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  Gerenciar o acesso de seus Usuários Autorizados, sendo responsável por suas ações
                </li>
                <li>
                  Não utilizar a plataforma para fins ilícitos, discriminação, geração de malware ou
                  engenharia reversa
                </li>
                <li>
                  Garantir que possui as bases legais necessárias (conforme LGPD) para inserir dados
                  pessoais de terceiros
                </li>
                <li>
                  Indenizar a Capybara Labs por quaisquer danos ou processos decorrentes do uso
                  indevido da plataforma
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Seção 5: Níveis de Serviço (SLA) e Suporte */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <CardTitle>5. Níveis de Serviço (SLA) e Suporte</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="mb-2 font-semibold">5.1. Disponibilidade</h4>
                  <p className="text-muted-foreground">
                    A Capybara Labs envidará os melhores esforços para manter a plataforma
                    disponível 99% do tempo (uptime mensal), excetuando-se janelas de manutenção
                    programada e falhas nos LLM Providers.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">5.2. Dependência de Terceiros</h4>
                  <p className="text-muted-foreground">
                    A Capybara Labs <strong>não se responsabiliza</strong> por indisponibilidades
                    causadas diretamente pelos fornecedores de IA. Nestes casos, a plataforma
                    permitirá, sempre que possível, a troca para outro modelo de contingência.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">5.3. Suporte Técnico</h4>
                  <p className="text-muted-foreground">
                    O suporte técnico será prestado via canais oficiais (e-mail/chamado) em horário
                    comercial (09h às 18h, dias úteis), com prazos de resposta definidos no Contrato
                    de Prestação de Serviços.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seção 6: Limitação de Responsabilidade */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <CardTitle>6. Limitação de Responsabilidade</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="mb-2 font-semibold">6.1. Conteúdo Gerado por IA</h4>
                  <p className="text-muted-foreground">
                    A Plataforma é uma ferramenta de meio. A Capybara Labs não garante a precisão
                    factual das respostas geradas pela Inteligência Artificial
                    (&quot;alucinações&quot;) e não se responsabiliza por decisões de negócio,
                    códigos ou documentos produzidos com base nessas respostas.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">6.2. Limite Contratual</h4>
                  <p className="text-muted-foreground">
                    Em nenhuma hipótese a responsabilidade total da Capybara Labs excederá os
                    limites estabelecidos no contrato principal firmado entre as partes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seção 7: Vigência e Rescisão */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle>7. Vigência e Rescisão</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="mb-2 font-semibold">7.1. Prazo</h4>
                  <p className="text-muted-foreground">
                    A vigência destes termos acompanha a duração do Contrato de Prestação de
                    Serviços assinado entre as partes.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">7.2. Exportação de Dados</h4>
                  <p className="text-muted-foreground">
                    Ao término do contrato, a Capybara Labs disponibilizará uma ferramenta ou
                    processo para que o Cliente exporte seu histórico de conversas (formato JSON ou
                    similar) no prazo de até 30 dias. Após este período, a Instância e os dados
                    serão permanentemente excluídos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seção 8: Foro */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <CardTitle>8. Foro</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Fica eleito o foro da Comarca de <strong>Teresina, Estado do Piauí</strong>, para
                dirimir quaisquer dúvidas oriundas deste Termo, com renúncia a qualquer outro, por
                mais privilegiado que seja.
              </p>
            </CardContent>
          </Card>

          {/* Contato */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <CardTitle>Contato</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Para questões relacionadas a estes Termos de Serviço, acesse
                contato@capybaralabs.com.br
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
