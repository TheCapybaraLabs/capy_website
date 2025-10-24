import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Shield, Lock, Database, Eye, UserCheck, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidade - Chat IA Corporativo',
  description: 'Política de privacidade específica da Plataforma de Chat com Inteligência Artificial White-Label. LGPD compliance garantida.',
  keywords: ['privacidade', 'chat IA', 'LGPD', 'white-label', 'dados pessoais', 'soberania de dados'],
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
              <Badge variant="outline">Chat IA Corporativo</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              Política de Privacidade - Chat IA Corporativo
            </h1>
            <p className="text-lg text-muted-foreground">
              Política de privacidade específica para a Plataforma de Chat com Inteligência Artificial White-Label da
              Capybara Labs.
            </p>
            <p className="text-sm text-muted-foreground">Última atualização: 24 de outubro de 2025</p>
          </div>

          <Separator />

          {/* Seção 1: Compromisso com a Privacidade */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>1. Nosso Compromisso com a Privacidade</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A Capybara Labs desenvolveu a Plataforma de Chat IA Corporativo com <strong>privacidade e segurança
                como pilares fundamentais</strong>. Nosso compromisso é garantir que os dados do Cliente e de seus
                usuários finais sejam tratados com o mais alto nível de confidencialidade e proteção.
              </p>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="font-semibold mb-2">Garantia de Confidencialidade Contratual</p>
                <p className="text-sm text-muted-foreground">
                  <strong>Nenhuma interação, prompt ou dado processado pela plataforma será utilizado para treinamento
                  de modelos de IA externos.</strong> Todos os dados pertencem exclusivamente ao Cliente e seus usuários.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Seção 2: Dados Coletados */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                <CardTitle>2. Dados Coletados e Processados</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">A plataforma coleta e processa as seguintes categorias de dados:</p>

              <div className="space-y-3">
                <div className="p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">2.1. Dados de Autenticação e Acesso</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Credenciais de acesso à instância dedicada (gerenciadas pelo Cliente)</li>
                    <li>Endereços IP de acesso</li>
                    <li>Logs de autenticação e sessões</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">2.2. Dados de Interação com a IA</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Prompts e perguntas enviadas pelos usuários</li>
                    <li>Respostas geradas pelos modelos de linguagem</li>
                    <li>Histórico de conversas</li>
                    <li>Biblioteca pessoal de prompts (quando utilizada)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">2.3. Dados Técnicos e de Uso</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Informações sobre o navegador e dispositivo utilizado</li>
                    <li>Métricas de uso da plataforma (número de interações, modelos utilizados)</li>
                    <li>Logs técnicos para diagnóstico e resolução de problemas</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">2.4. Dados de Customização White-Label</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Identidade visual e branding do Cliente</li>
                    <li>Configurações e preferências da instância</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seção 3: Finalidade do Tratamento */}
          <Card>
            <CardHeader>
              <CardTitle>3. Finalidade do Tratamento de Dados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Os dados são tratados exclusivamente para as seguintes finalidades:</p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Fornecer acesso e funcionamento da plataforma de Chat IA</li>
                <li>Processar prompts e gerar respostas através dos modelos de linguagem</li>
                <li>Manter histórico de conversas para o usuário (quando habilitado)</li>
                <li>Garantir a segurança e integridade da plataforma</li>
                <li>Prestar suporte técnico e resolver problemas</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Melhorar a performance e estabilidade da infraestrutura (sem uso dos conteúdos para treinar IA)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Seção 4: Garantias de Segurança LGPD */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                <CardTitle>4. Conformidade com a LGPD</CardTitle>
              </div>
              <CardDescription>Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A plataforma é desenvolvida e operada em <strong>total conformidade com a LGPD</strong>:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">4.1. Base Legal</h4>
                  <p className="text-sm text-muted-foreground">
                    O tratamento de dados pessoais é fundamentado em: (i) execução de contrato (Art. 7º, V), (ii)
                    legítimo interesse (Art. 7º, IX), e (iii) consentimento, quando aplicável.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">4.2. Soberania de Dados</h4>
                  <p className="text-sm text-muted-foreground">
                    Todos os dados são armazenados em infraestrutura localizada exclusivamente em{' '}
                    <strong>território brasileiro</strong>, garantindo soberania nacional e conformidade com os
                    requisitos da LGPD sobre transferência internacional de dados.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">4.3. Direitos dos Titulares</h4>
                  <p className="text-sm text-muted-foreground">
                    Os usuários finais têm direito a: confirmação e acesso aos dados, correção, anonimização ou
                    exclusão, portabilidade, informação sobre compartilhamento, revogação do consentimento e oposição
                    ao tratamento.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">4.4. Responsabilidade Compartilhada</h4>
                  <p className="text-sm text-muted-foreground">
                    A Capybara Labs atua como <strong>operadora de dados</strong> e o Cliente como{' '}
                    <strong>controlador de dados</strong> em relação aos dados de seus usuários finais. O Cliente é
                    responsável por garantir a conformidade com a LGPD em sua relação com os usuários finais.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seção 5: Compartilhamento de Dados */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                <CardTitle>5. Compartilhamento de Dados</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">5.1. Fornecedores de APIs de LLM</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Os prompts e interações são enviados aos fornecedores de modelos de linguagem (OpenAI, Google,
                    Anthropic, etc.) para processamento. <strong>Importante:</strong>
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>
                      A Capybara Labs utiliza exclusivamente <strong>contas empresariais com garantias contratuais</strong> que
                      impedem o uso dos dados para treinamento de modelos
                    </li>
                    <li>As APIs são acessadas através de protocolos seguros (HTTPS/TLS)</li>
                    <li>Não há retenção de dados pelos fornecedores além do processamento imediato</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">5.2. Infraestrutura de Hospedagem</h4>
                  <p className="text-sm text-muted-foreground">
                    A plataforma é hospedada em servidores dedicados localizados no Brasil. O provedor de
                    infraestrutura tem acesso apenas aos dados criptografados e está contratualmente obrigado a
                    manter confidencialidade.
                  </p>
                </div>

                <div className="p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">5.3. Não Compartilhamento para Marketing ou Terceiros</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>A Capybara Labs não vende, aluga ou compartilha dados dos Clientes ou usuários finais com
                    terceiros para fins de marketing, publicidade ou qualquer outra finalidade comercial.</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seção 6: Medidas de Segurança */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>6. Medidas de Segurança da Informação</CardTitle>
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

          {/* Seção 7: Retenção de Dados */}
          <Card>
            <CardHeader>
              <CardTitle>7. Retenção e Exclusão de Dados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">7.1. Período de Retenção</h4>
                  <p className="text-sm text-muted-foreground">
                    Os dados são retidos pelo período necessário para cumprir as finalidades do tratamento e conforme
                    configurado pelo Cliente em sua instância dedicada. O Cliente pode configurar políticas de retenção
                    e exclusão automática de históricos.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">7.2. Exclusão Após Rescisão</h4>
                  <p className="text-sm text-muted-foreground">
                    Após o término do contrato, os dados serão mantidos por 30 dias para permitir exportação pelo
                    Cliente. Após esse período, todos os dados serão permanentemente excluídos, exceto dados que devam
                    ser retidos por obrigação legal.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">7.3. Direito à Exclusão</h4>
                  <p className="text-sm text-muted-foreground">
                    Usuários finais podem solicitar a exclusão de seus dados a qualquer momento através do Cliente
                    (controlador de dados), que poderá realizar a exclusão através da interface administrativa da
                    plataforma.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seção 8: Incidentes de Segurança */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                <CardTitle>8. Notificação de Incidentes de Segurança</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Em caso de incidente de segurança que possa representar risco aos dados pessoais:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>A Capybara Labs notificará o Cliente em até 24 horas após tomar conhecimento do incidente</li>
                <li>Será fornecida descrição do incidente, dados potencialmente afetados e medidas tomadas</li>
                <li>
                  O Cliente, como controlador, é responsável por notificar a ANPD e os titulares conforme exigido pela
                  LGPD
                </li>
                <li>A Capybara Labs cooperará integralmente na investigação e mitigação do incidente</li>
              </ul>
            </CardContent>
          </Card>

          {/* Seção 9: Exercício de Direitos */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-primary" />
                <CardTitle>9. Como Exercer seus Direitos</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">Para Clientes (Organizações Contratantes)</h4>
                  <p className="text-sm text-muted-foreground">
                    Solicitações relacionadas aos dados da organização devem ser enviadas para{' '}
                    <a href="mailto:labs@capybaralabs.com.br" className="text-primary hover:underline">
                      labs@capybaralabs.com.br
                    </a>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Para Usuários Finais</h4>
                  <p className="text-sm text-muted-foreground">
                    Como a plataforma opera em modelo white-label, os usuários finais devem direcionar suas
                    solicitações ao Cliente (organização que fornece acesso à plataforma), que atua como controlador de
                    dados. O Cliente poderá gerenciar os dados através da interface administrativa ou solicitar apoio da
                    Capybara Labs.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seção 10: Atualizações */}
          <Card>
            <CardHeader>
              <CardTitle>10. Atualizações desta Política</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Esta política pode ser atualizada periodicamente para refletir melhorias na plataforma ou mudanças na
                legislação. Alterações substanciais serão comunicadas aos Clientes com antecedência mínima de 30 dias.
              </p>
            </CardContent>
          </Card>

          {/* Seção 11: Contato */}
          <Card>
            <CardHeader>
              <CardTitle>11. Contato e Encarregado de Dados (DPO)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Para questões relacionadas à privacidade e proteção de dados da Plataforma Chat IA Corporativo:
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Capybara Labs</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  E-mail:{' '}
                  <a href="mailto:labs@capybaralabs.com.br" className="text-primary hover:underline">
                    labs@capybaralabs.com.br
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">Localização: Piauí, Brasil</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
