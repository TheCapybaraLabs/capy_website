import { Database, Lock, Settings, Share2, Shield, Trash2, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Política de Privacidade - LabsChat Corporativo",
  description:
    "Política de privacidade específica para a Plataforma de Chat com Inteligência Artificial White-Label da Capybara Labs.",
  keywords: [
    "privacidade",
    "LabsChat",
    "LGPD",
    "white-label",
    "dados pessoais",
    "soberania de dados",
  ],
  // Prevent search engines from indexing this page while allowing link following
  robots: { index: false, follow: true },
};

export default function PrivacidadeChatIA() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Plataforma SaaS</Badge>
              <Badge variant="outline">LabsChat Corporativo</Badge>
            </div>
            <h1 className="font-bold text-4xl tracking-tight">
              Política de Privacidade - LabsChat Corporativo
            </h1>
            <p className="text-lg text-muted-foreground">
              Política de privacidade específica para a Plataforma de Chat com Inteligência
              Artificial White-Label da Capybara Labs.
            </p>
            <p className="text-muted-foreground text-sm">
              Última atualização: 19 de Novembro de 2025
            </p>
          </div>

          <Separator />

          {/* Seção 1: Nosso Papel (LGPD) */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>1. Nosso Papel (LGPD)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">No contexto da plataforma corporativa:</p>
              <div className="space-y-3">
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="mb-2 font-semibold">O Cliente (Sua Empresa)</p>
                  <p className="text-muted-foreground text-sm">
                    É o <strong>Controlador</strong> dos dados. O Cliente define quem acessa a
                    plataforma e quais dados são inseridos.
                  </p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="mb-2 font-semibold">A Capybara Labs</p>
                  <p className="text-muted-foreground text-sm">
                    Atua como <strong>Operadora</strong> dos dados. Nós processamos as informações
                    apenas para fornecer o serviço contratado, seguindo as instruções do Cliente.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seção 2: Quais dados coletamos */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                <CardTitle>2. Quais dados coletamos?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Para o funcionamento da plataforma, processamos:
              </p>

              <div className="space-y-3">
                <div className="rounded-lg border p-4">
                  <h4 className="mb-2 font-semibold">1. Dados de Cadastro</h4>
                  <p className="text-muted-foreground text-sm">
                    Nome, e-mail e credenciais de login dos Usuários Autorizados.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h4 className="mb-2 font-semibold">2. Dados de Conteúdo</h4>
                  <p className="text-muted-foreground text-sm">
                    Histórico de conversas (prompts e respostas) e arquivos anexados (PDFs, TXTs,
                    etc.).
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h4 className="mb-2 font-semibold">3. Metadados</h4>
                  <p className="text-muted-foreground text-sm">
                    Logs de acesso, timestamps e registros de uso de tokens (para faturamento).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seção 3: Como usamos os dados */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                <CardTitle>3. Como usamos os dados</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Utilizamos os dados estritamente para:</p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Autenticar usuários e garantir a segurança da conta</li>
                <li>Processar as requisições de chat através dos Modelos de Linguagem</li>
                <li>
                  Manter o histórico de conversas acessível ao usuário e aos auditores do Cliente
                </li>
                <li>Gerar relatórios de uso e custos para o Cliente</li>
              </ul>
              <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-4">
                <p className="text-muted-foreground text-sm">
                  <strong>Importante:</strong> A Capybara Labs <strong>NÃO</strong> utiliza os dados
                  do Cliente para treinar seus próprios modelos de IA, nem vende esses dados a
                  terceiros para fins de marketing.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Seção 4: Compartilhamento com Terceiros (Sub-processadores) */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Share2 className="h-5 w-5 text-primary" />
                <CardTitle>4. Compartilhamento com Terceiros (Sub-processadores)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Para fornecer a inteligência da plataforma, precisamos compartilhar os prompts
                (textos de entrada) com os provedores de IA escolhidos pelo Cliente. Os principais
                parceiros podem incluir:
              </p>
              <div className="space-y-3">
                <div className="rounded-lg border p-4">
                  <h4 className="mb-2 font-semibold">
                    OpenAI, Anthropic, Google ou Microsoft Azure
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Para geração de respostas. (Nota: Estes provedores são configurados via API
                    "Zero Retention" ou políticas Enterprise onde aplicável, para evitar treinamento
                    em dados do cliente).
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h4 className="mb-2 font-semibold">
                    Provedores de Cloud (ex: AWS, DigitalOcean, Hetzner)
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Para hospedagem da infraestrutura (banco de dados e aplicação).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seção 5: Segurança da Informação */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                <CardTitle>5. Segurança da Informação</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A Capybara Labs implementa as seguintes medidas de segurança técnicas e
                administrativas:
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-lg border p-3">
                  <h4 className="mb-1 font-semibold text-sm">Criptografia</h4>
                  <p className="text-muted-foreground text-xs">
                    Dados em trânsito (TLS/SSL) e em repouso (AES-256)
                  </p>
                </div>
                <div className="rounded-lg border p-3">
                  <h4 className="mb-1 font-semibold text-sm">Controles de Acesso</h4>
                  <p className="text-muted-foreground text-xs">
                    Autenticação forte e princípio do menor privilégio
                  </p>
                </div>
                <div className="rounded-lg border p-3">
                  <h4 className="mb-1 font-semibold text-sm">Monitoramento</h4>
                  <p className="text-muted-foreground text-xs">
                    Logs de auditoria e detecção de anomalias
                  </p>
                </div>
                <div className="rounded-lg border p-3">
                  <h4 className="mb-1 font-semibold text-sm">Backup Regular</h4>
                  <p className="text-muted-foreground text-xs">
                    Backups automáticos criptografados
                  </p>
                </div>
                <div className="rounded-lg border p-3">
                  <h4 className="mb-1 font-semibold text-sm">Firewall e Proteção</h4>
                  <p className="text-muted-foreground text-xs">
                    Proteção contra ataques DDoS e invasões
                  </p>
                </div>
                <div className="rounded-lg border p-3">
                  <h4 className="mb-1 font-semibold text-sm">Atualizações de Segurança</h4>
                  <p className="text-muted-foreground text-xs">
                    Patches e correções aplicados regularmente
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seção 6: Direitos do Titular */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                <CardTitle>6. Direitos do Titular</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Como a Capybara Labs atua como Operadora, solicitações de exclusão, correção ou
                exportação de dados pessoais devem ser direcionadas{" "}
                <strong>ao Administrador da conta na Empresa Cliente</strong>. A Capybara Labs
                fornecerá as ferramentas necessárias para que o Cliente atenda a essas solicitações.
              </p>
            </CardContent>
          </Card>

          {/* Seção 7: Exclusão de Dados */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Trash2 className="h-5 w-5 text-primary" />
                <CardTitle>7. Exclusão de Dados</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Os dados são mantidos enquanto o contrato estiver vigente. Após o encerramento
                contratual, os dados permanecerão em backup frio por 30 dias e, posteriormente,
                serão eliminados de forma segura de nossos servidores.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
