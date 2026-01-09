import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Shield, Database, Settings, Share2, Lock, User, Trash2 } from 'lucide-react';

export const metadata = {
  title: 'Política de Privacidade - GPT Labs Corporativo',
  description:
    'Política de privacidade específica para a Plataforma de Chat com Inteligência Artificial White-Label da Capybara Labs.',
  keywords: ['privacidade', 'GPT Labs', 'LGPD', 'white-label', 'dados pessoais', 'soberania de dados'],
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
              <Badge variant="outline">GPT Labs Corporativo</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Política de Privacidade - GPT Labs Corporativo</h1>
            <p className="text-lg text-muted-foreground">
              Política de privacidade específica para a Plataforma de Chat com Inteligência Artificial White-Label da
              Capybara Labs.
            </p>
            <p className="text-sm text-muted-foreground">Última atualização: 19 de Novembro de 2025</p>
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
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="font-semibold mb-2">O Cliente (Sua Empresa)</p>
                  <p className="text-sm text-muted-foreground">
                    É o <strong>Controlador</strong> dos dados. O Cliente define quem acessa a plataforma e quais dados
                    são inseridos.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="font-semibold mb-2">A Capybara Labs</p>
                  <p className="text-sm text-muted-foreground">
                    Atua como <strong>Operadora</strong> dos dados. Nós processamos as informações apenas para fornecer
                    o serviço contratado, seguindo as instruções do Cliente.
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
              <p className="text-muted-foreground">Para o funcionamento da plataforma, processamos:</p>

              <div className="space-y-3">
                <div className="p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">1. Dados de Cadastro</h4>
                  <p className="text-sm text-muted-foreground">
                    Nome, e-mail e credenciais de login dos Usuários Autorizados.
                  </p>
                </div>

                <div className="p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">2. Dados de Conteúdo</h4>
                  <p className="text-sm text-muted-foreground">
                    Histórico de conversas (prompts e respostas) e arquivos anexados (PDFs, TXTs, etc.).
                  </p>
                </div>

                <div className="p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">3. Metadados</h4>
                  <p className="text-sm text-muted-foreground">
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
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Autenticar usuários e garantir a segurança da conta</li>
                <li>Processar as requisições de chat através dos Modelos de Linguagem</li>
                <li>Manter o histórico de conversas acessível ao usuário e aos auditores do Cliente</li>
                <li>Gerar relatórios de uso e custos para o Cliente</li>
              </ul>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 mt-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Importante:</strong> A Capybara Labs <strong>NÃO</strong> utiliza os dados do Cliente para
                  treinar seus próprios modelos de IA, nem vende esses dados a terceiros para fins de marketing.
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
                Para fornecer a inteligência da plataforma, precisamos compartilhar os prompts (textos de entrada) com
                os provedores de IA escolhidos pelo Cliente. Os principais parceiros podem incluir:
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">OpenAI, Anthropic, Google ou Microsoft Azure</h4>
                  <p className="text-sm text-muted-foreground">
                    Para geração de respostas. (Nota: Estes provedores são configurados via API &quot;Zero
                    Retention&quot; ou políticas Enterprise onde aplicável, para evitar treinamento em dados do
                    cliente).
                  </p>
                </div>

                <div className="p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">Provedores de Cloud (ex: AWS, DigitalOcean, Hetzner)</h4>
                  <p className="text-sm text-muted-foreground">
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
                A Capybara Labs implementa as seguintes medidas de segurança técnicas e administrativas:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg border">
                  <h4 className="font-semibold text-sm mb-1">Criptografia</h4>
                  <p className="text-xs text-muted-foreground">Dados em trânsito (TLS/SSL) e em repouso (AES-256)</p>
                </div>
                <div className="p-3 rounded-lg border">
                  <h4 className="font-semibold text-sm mb-1">Controles de Acesso</h4>
                  <p className="text-xs text-muted-foreground">Autenticação forte e princípio do menor privilégio</p>
                </div>
                <div className="p-3 rounded-lg border">
                  <h4 className="font-semibold text-sm mb-1">Monitoramento</h4>
                  <p className="text-xs text-muted-foreground">Logs de auditoria e detecção de anomalias</p>
                </div>
                <div className="p-3 rounded-lg border">
                  <h4 className="font-semibold text-sm mb-1">Backup Regular</h4>
                  <p className="text-xs text-muted-foreground">Backups automáticos criptografados</p>
                </div>
                <div className="p-3 rounded-lg border">
                  <h4 className="font-semibold text-sm mb-1">Firewall e Proteção</h4>
                  <p className="text-xs text-muted-foreground">Proteção contra ataques DDoS e invasões</p>
                </div>
                <div className="p-3 rounded-lg border">
                  <h4 className="font-semibold text-sm mb-1">Atualizações de Segurança</h4>
                  <p className="text-xs text-muted-foreground">Patches e correções aplicados regularmente</p>
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
                Como a Capybara Labs atua como Operadora, solicitações de exclusão, correção ou exportação de dados
                pessoais devem ser direcionadas <strong>ao Administrador da conta na Empresa Cliente</strong>. A
                Capybara Labs fornecerá as ferramentas necessárias para que o Cliente atenda a essas solicitações.
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
                Os dados são mantidos enquanto o contrato estiver vigente. Após o encerramento contratual, os dados
                permanecerão em backup frio por 30 dias e, posteriormente, serão eliminados de forma segura de nossos
                servidores.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
