import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Shield, FileText, Scale } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Termos de Serviço - Chat IA Corporativo',
  description: 'Termos e condições específicos da Plataforma de Chat com Inteligência Artificial White-Label da Capybara Labs.',
  keywords: ['termos de serviço', 'chat IA', 'white-label', 'LGPD', 'soberania de dados', 'segurança'],
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
              <Badge variant="outline">Chat IA Corporativo</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Termos de Serviço - Chat IA Corporativo</h1>
            <p className="text-lg text-muted-foreground">
              Termos e condições específicos para a utilização da Plataforma de Chat com Inteligência Artificial
              White-Label da Capybara Labs.
            </p>
            <p className="text-sm text-muted-foreground">Última atualização: 24 de outubro de 2025</p>
          </div>

          <Separator />

          {/* Seção 1: Definições Específicas */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <CardTitle>1. Definições Específicas</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Para os fins destes termos, considera-se:</p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>
                  <strong>Plataforma:</strong> Sistema de Chat com Inteligência Artificial desenvolvido e gerenciado
                  pela Capybara Labs
                </li>
                <li>
                  <strong>White-Label:</strong> Customização completa da interface com a identidade visual do Cliente
                </li>
                <li>
                  <strong>LLM:</strong> Large Language Model (Modelo de Linguagem de Grande Escala) utilizado pela
                  plataforma
                </li>
                <li>
                  <strong>Prompt:</strong> Instrução ou pergunta enviada pelo usuário ao sistema de IA
                </li>
                <li>
                  <strong>Instância:</strong> Ambiente dedicado da plataforma configurado exclusivamente para o Cliente
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Seção 2: Descrição do Serviço */}
          <Card>
            <CardHeader>
              <CardTitle>2. Descrição do Serviço</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A Capybara Labs fornece uma plataforma completa de Chat IA Corporativo que inclui:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Acesso a múltiplos modelos de linguagem (GPT, Gemini, Claude e outros)</li>
                <li>Infraestrutura dedicada hospedada em território brasileiro</li>
                <li>Customização white-label com identidade visual do Cliente</li>
                <li>Ferramentas proprietárias (Prompt.Labs e Biblioteca de Prompts)</li>
                <li>Licenciamento de software e APIs necessários</li>
                <li>Suporte técnico contínuo e manutenção da plataforma</li>
                <li>Atualizações e melhorias periódicas</li>
              </ul>
            </CardContent>
          </Card>

          {/* Seção 3: Garantias de Segurança e Privacidade */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>3. Garantias de Segurança e Privacidade</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">A Capybara Labs compromete-se a:</p>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">3.1. Confidencialidade Total</h4>
                  <p className="text-sm text-muted-foreground">
                    Nenhuma interação, prompt ou dado do Cliente será utilizado para treinamento de modelos de IA
                    externos. Todos os dados trafegados na plataforma são de propriedade exclusiva do Cliente.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">3.2. Soberania de Dados</h4>
                  <p className="text-sm text-muted-foreground">
                    A solução opera em infraestrutura dedicada (servidor virtual privado) localizada exclusivamente em
                    território brasileiro, garantindo conformidade com a LGPD e soberania nacional dos dados.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">3.3. Conformidade LGPD</h4>
                  <p className="text-sm text-muted-foreground">
                    A plataforma é desenvolvida e operada em total conformidade com a Lei Geral de Proteção de Dados
                    (Lei nº 13.709/2018), incluindo procedimentos para garantia dos direitos dos titulares de dados.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">3.4. Segurança da Informação</h4>
                  <p className="text-sm text-muted-foreground">
                    Implementação de medidas técnicas e administrativas de segurança, incluindo criptografia de dados em
                    trânsito e em repouso, controles de acesso, monitoramento contínuo e backup regular.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seção 4: Obrigações do Cliente */}
          <Card>
            <CardHeader>
              <CardTitle>4. Obrigações do Cliente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">O Cliente compromete-se a:</p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Utilizar a plataforma exclusivamente para fins lícitos e em conformidade com a legislação vigente</li>
                <li>Manter a confidencialidade das credenciais de acesso à instância dedicada</li>
                <li>Não tentar realizar engenharia reversa, descompilar ou modificar a plataforma</li>
                <li>Não utilizar a plataforma para disseminar conteúdo ilegal, ofensivo ou prejudicial</li>
                <li>
                  Responsabilizar-se pelo conteúdo gerado pelos seus usuários finais através da plataforma white-label
                </li>
                <li>Informar imediatamente sobre qualquer uso não autorizado ou violação de segurança</li>
              </ul>
            </CardContent>
          </Card>

          {/* Seção 5: Propriedade Intelectual */}
          <Card>
            <CardHeader>
              <CardTitle>5. Propriedade Intelectual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">5.1. Propriedade da Capybara Labs</h4>
                  <p className="text-sm text-muted-foreground">
                    A plataforma, incluindo código-fonte, arquitetura, ferramentas proprietárias (Prompt.Labs e
                    Biblioteca de Prompts) e toda documentação técnica são de propriedade exclusiva da Capybara Labs.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">5.2. Propriedade do Cliente</h4>
                  <p className="text-sm text-muted-foreground">
                    Todos os dados, prompts, conversas e conteúdos gerados através da plataforma são de propriedade
                    exclusiva do Cliente. A Capybara Labs não reivindica direitos sobre esses conteúdos.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">5.3. Licença de Uso</h4>
                  <p className="text-sm text-muted-foreground">
                    O Cliente recebe uma licença não exclusiva, intransferível e limitada para utilizar a plataforma
                    durante a vigência do contrato, conforme os termos acordados.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seção 6: Disponibilidade e Suporte */}
          <Card>
            <CardHeader>
              <CardTitle>6. Disponibilidade e Suporte</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">6.1. SLA (Service Level Agreement)</h4>
                  <p className="text-sm text-muted-foreground">
                    A Capybara Labs emprega esforços comercialmente razoáveis para manter a disponibilidade da
                    plataforma. Metas específicas de disponibilidade serão definidas em contrato.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">6.2. Manutenção</h4>
                  <p className="text-sm text-muted-foreground">
                    Janelas de manutenção programada serão comunicadas com antecedência mínima de 48 horas, sempre que
                    possível. Manutenções emergenciais podem ocorrer sem aviso prévio.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">6.3. Suporte Técnico</h4>
                  <p className="text-sm text-muted-foreground">
                    O Cliente terá acesso a suporte técnico contínuo através dos canais definidos em contrato, incluindo
                    atendimento para questões técnicas, dúvidas sobre funcionalidades e resolução de problemas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seção 7: Limitação de Responsabilidade */}
          <Card>
            <CardHeader>
              <CardTitle>7. Limitação de Responsabilidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">7.1. Conteúdo Gerado por IA</h4>
                  <p className="text-sm text-muted-foreground">
                    A Capybara Labs não se responsabiliza pelo conteúdo gerado pelos modelos de linguagem. O Cliente é
                    responsável por validar e revisar as respostas da IA antes de utilizá-las em contextos críticos.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">7.2. Uso Indevido</h4>
                  <p className="text-sm text-muted-foreground">
                    A Capybara Labs não se responsabiliza por danos resultantes do uso inadequado da plataforma pelo
                    Cliente ou seus usuários finais.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">7.3. Fornecedores Terceiros</h4>
                  <p className="text-sm text-muted-foreground">
                    A plataforma depende de fornecedores terceiros de APIs de LLM (OpenAI, Google, Anthropic, etc.). A
                    Capybara Labs não se responsabiliza por interrupções causadas por esses fornecedores, mas empregará
                    esforços para mitigar impactos através da arquitetura multi-modelo.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seção 8: Vigência e Rescisão */}
          <Card>
            <CardHeader>
              <CardTitle>8. Vigência e Rescisão</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">8.1. Vigência</h4>
                  <p className="text-sm text-muted-foreground">
                    O contrato terá vigência conforme definido no instrumento contratual específico, com renovação
                    automática salvo manifestação contrária de qualquer das partes.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">8.2. Rescisão</h4>
                  <p className="text-sm text-muted-foreground">
                    Qualquer das partes pode rescindir o contrato mediante aviso prévio conforme estabelecido em
                    contrato. A rescisão imotivada requer notificação com antecedência mínima definida contratualmente.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">8.3. Exportação de Dados</h4>
                  <p className="text-sm text-muted-foreground">
                    Após o término do contrato, o Cliente terá um período de 30 dias para exportar seus dados da
                    plataforma. Após esse período, os dados poderão ser permanentemente excluídos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seção 9: Modificações */}
          <Card>
            <CardHeader>
              <CardTitle>9. Modificações nos Termos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A Capybara Labs reserva-se o direito de modificar estes termos a qualquer momento. Modificações
                substanciais serão comunicadas ao Cliente com antecedência mínima de 30 dias. O uso continuado da
                plataforma após as modificações constitui aceitação dos novos termos.
              </p>
            </CardContent>
          </Card>

          {/* Seção 10: Lei Aplicável */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <CardTitle>10. Lei Aplicável e Foro</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Estes termos serão regidos e interpretados de acordo com as leis da República Federativa do Brasil. As
                partes elegem o foro da comarca do domicílio do Cliente para dirimir quaisquer controvérsias
                decorrentes destes termos.
              </p>
            </CardContent>
          </Card>

          {/* Seção 11: Contato */}
          <Card>
            <CardHeader>
              <CardTitle>11. Contato</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Para questões relacionadas a estes Termos de Serviço da Plataforma Chat IA Corporativo, entre em
                contato:
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
