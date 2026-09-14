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
import type { ClientConfig } from "@/data/clients";

type Props = {
  client: ClientConfig;
};

export function TermosTemplateB2B({ client }: Props) {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Plataforma {client.productName}</Badge>
              <Badge variant="outline">{client.shortName}</Badge>
            </div>
            <h1 className="font-bold text-4xl tracking-tight">
              Termos de Uso da Plataforma {client.name}
            </h1>
            <p className="text-muted-foreground text-sm">
              Última atualização: {client.lastUpdatedLegal}.
            </p>
          </div>

          <Separator />

          {/* Seção 1: Aceite dos Termos */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bookmark className="h-5 w-5 text-primary" />
                <CardTitle>1. Aceite dos Termos</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">Bem-vindo(a) à Plataforma da Capybara Labs.</p>
              <p className="text-muted-foreground">
                Estes Termos de Uso ("Termos") constituem um acordo legal vinculante entre o usuário
                final ("Usuário"), na qualidade de funcionário (incluindo todos os tipos de
                vínculos) ou representante autorizado do{" "}
                <strong>
                  {client.fullName} ({client.shortName})
                </strong>{" "}
                ("Empresa Cliente"), e a Capybara Labs.
              </p>
              <p className="text-muted-foreground">
                Estes Termos regem o acesso e a utilização da plataforma de software como serviço de
                Inteligência Artificial da Capybara Labs ("Plataforma").
              </p>
              <p className="text-muted-foreground">
                AO ACESSAR, CADASTRAR-SE OU UTILIZAR A PLATAFORMA, O USUÁRIO DECLARA QUE LEU,
                COMPREENDEU E CONCORDA INTEGRALMENTE EM ESTAR VINCULADO A ESTES TERMOS DE USO E AOS
                NOSSOS TERMOS DE SERVIÇO ALÉM DA NOSSA POLÍTICA DE PRIVACIDADE. CASO O USUÁRIO NÃO
                CONCORDE COM QUALQUER PARTE DESTES TERMOS, NÃO DEVERÁ UTILIZAR A PLATAFORMA.
              </p>
            </CardContent>
          </Card>

          {/* Seção 2: Elegibilidade e Conta de Usuário */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <CardTitle>2. Elegibilidade e Conta de Usuário</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>2.1. Acesso Autorizado:</strong> O uso da Plataforma é restrito a
                funcionários e colaboradores devidamente autorizados pela Empresa Cliente, que
                possuam uma conta de usuário válida.
              </p>
              <p className="text-muted-foreground">
                <strong>2.2. Responsabilidade pela Conta:</strong> O Usuário é integralmente
                responsável por manter a confidencialidade de suas credenciais de acesso (login e
                senha) e por todas as atividades que ocorram em sua conta.
              </p>
              <p className="text-muted-foreground">
                <strong>2.3. Notificação de Violação:</strong> O Usuário concorda em notificar
                imediatamente a Empresa Cliente e a Capybara Labs sobre qualquer uso não autorizado
                de sua conta ou qualquer outra violação de segurança. A conta é pessoal e
                intransferível.
              </p>
            </CardContent>
          </Card>

          {/* Seção 3: Concessão de Licença */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <CardTitle>3. Concessão de Licença</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Sujeito à conformidade do Usuário com estes Termos, a Capybara Labs concede ao
                Usuário uma{" "}
                <strong>licença limitada, não exclusiva, intransferível e revogável</strong> para
                acessar e utilizar a Plataforma estritamente para fins profissionais internos da
                Empresa Cliente, durante a vigência do acordo comercial entre a Capybara Labs e a
                Empresa Cliente.
              </p>
            </CardContent>
          </Card>

          {/* Seção 4: Conduta do Usuário e Uso Proibido */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <CardTitle>4. Conduta do Usuário e Uso Proibido</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                O Usuário concorda em utilizar a Plataforma de forma responsável, ética e legal. É
                expressamente proibido ao Usuário:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  Utilizar a Plataforma para fins ilegais, fraudulentos, maliciosos ou difamatórios,
                  incluindo mas não se limitando a conteúdo que:
                  <ul className="mt-2 ml-6 list-inside list-disc space-y-2">
                    <li>
                      Seja ilegal ou perigoso: Promova ou forneça instruções para atividades
                      ilegais, como fabricação de armas, drogas, ou que viole a segurança de
                      qualquer pessoa ou entidade.
                    </li>
                    <li>
                      Contenha Material de Abuso Sexual Infantil (CSAM): Envolva a criação, promoção
                      ou compartilhamento de conteúdo de exploração ou abuso sexual de menores.
                    </li>
                    <li>
                      Promova Discurso de Ódio, Assédio ou Violência: Incentive a violência,
                      discriminação ou o ódio contra indivíduos ou grupos com base em raça, etnia,
                      religião, gênero, orientação sexual, deficiência ou qualquer outra
                      característica protegida.
                    </li>
                    <li>
                      Envolva Desinformação e Atividades Fraudulentas: Crie ou dissemine
                      desinformação com o objetivo de enganar (especialmente em contextos cívicos,
                      como eleições), ou que se envolva em spam, phishing, ou outras práticas
                      fraudulentas.
                    </li>
                  </ul>
                </li>
                <li>
                  Inserir ou compartilhar Dados Pessoais Sensíveis, informações confidenciais de
                  terceiros ou qualquer conteúdo que viole direitos de privacidade ou propriedade
                  intelectual.
                </li>
                <li>Enviar spam, vírus, malware, ou qualquer código de natureza destrutiva.</li>
                <li>
                  Realizar engenharia reversa, descompilar, tentar obter acesso não autorizado aos
                  sistemas da Capybara Labs, ou utilizar a Plataforma para treinar modelos de IA
                  concorrentes.
                </li>
                <li>
                  Desenvolver um produto ou serviço concorrente utilizando a Plataforma como base.
                </li>
                <li>
                  Viole Propriedade Intelectual: Infrinja direitos autorais, marcas registradas,
                  patentes ou segredos comerciais de terceiros.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Seção 5: Conteúdo e Propriedade Intelectual */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>5. Conteúdo e Propriedade Intelectual</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>5.1. Propriedade da Plataforma:</strong> A Plataforma incluindo seu
                software, código-fonte, design, interface e toda a documentação associada são e
                permanecerão propriedade exclusiva da Capybara Labs e de seus licenciadores.
              </p>
              <p className="text-muted-foreground">
                <strong>5.2. Conteúdo do Usuário:</strong> A Empresa Cliente retém todos os direitos
                sobre o conteúdo que o Usuário insere na Plataforma ("Conteúdo do Usuário"). O
                Usuário concede à Capybara Labs uma licença mundial, isenta de royalties e
                sublicenciável para usar tal conteúdo com o único propósito de operar e fornecer os
                serviços da Plataforma.
              </p>
              <p className="text-muted-foreground">
                <strong>
                  5.3. Conteúdo Gerado por IA, Responsabilidade e Isenção de Aconselhamento
                  Profissional:
                </strong>
              </p>
              <ul className="ml-6 list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  Natureza do Conteúdo: O Usuário reconhece que o conteúdo gerado pela IA ("Conteúdo
                  de IA") é produzido automaticamente e pode conter imprecisões, erros ou material
                  tendencioso. A Capybara Labs não oferece garantias quanto à precisão ou
                  confiabilidade do Conteúdo de IA.
                </li>
                <li>
                  ISENÇÃO DE ACONSELHAMENTO PROFISSIONAL: O CONTEÚDO DE IA GERADO PELA PLATAFORMA
                  NÃO CONSTITUI E NÃO DEVE SER INTERPRETADO COMO ACONSELHAMENTO PROFISSIONAL, SEJA
                  ELE JURÍDICO, MÉDICO, FINANCEIRO OU DE QUALQUER OUTRA NATUREZA. O USUÁRIO DEVE
                  SEMPRE CONSULTAR UM PROFISSIONAL DEVIDAMENTE QUALIFICADO PARA OBTER ACONSELHAMENTO
                  ESPECÍFICO.
                </li>
                <li>
                  Responsabilidade Final: O Usuário é o único e exclusivo responsável por revisar,
                  validar e utilizar o Conteúdo de IA. Todas as decisões, ações e suas respectivas
                  consequências baseadas no uso do Conteúdo de IA são de inteira responsabilidade do
                  Usuário e da Empresa Cliente.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Seção 6: Componentes de Terceiros e Código Aberto */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <CardTitle>6. Componentes de Terceiros e Código Aberto</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>6.1.</strong> O Usuário reconhece que a Plataforma pode conter ou utilizar
                softwares de código aberto ("Open Source Software") ou outros componentes de
                software de terceiros, que são regidos por suas próprias licenças.
              </p>
              <p className="text-muted-foreground">
                <strong>6.2.</strong> A Plataforma utiliza componentes de software de terceiros e de
                código aberto, regidos por suas respectivas licenças. A Capybara Labs cumpre com os
                termos e condições de tais licenças.
              </p>
              <p className="text-muted-foreground">
                <strong>6.3.</strong> NA MÁXIMA EXTENSÃO PERMITIDA PELA LEI, QUALQUER SOFTWARE DE
                TERCEIROS É FORNECIDO "NO ESTADO EM QUE SE ENCONTRA", SEM QUALQUER GARANTIA, SEJA
                EXPRESSA OU IMPLÍCITA, POR PARTE DA CAPYBARA LABS. A Capybara Labs se isenta de
                qualquer responsabilidade por danos decorrentes do uso de tais componentes.
              </p>
            </CardContent>
          </Card>

          {/* Seção 7: Monitoramento pela Empresa Cliente */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <CardTitle>7. Monitoramento pela Empresa Cliente</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                O Usuário reconhece e concorda expressamente que a Plataforma é uma ferramenta
                corporativa fornecida pela Empresa Cliente. Como tal, a Empresa Cliente, na
                qualidade de Controladora de Dados, detém o direito de acessar, monitorar, revisar e
                utilizar todo o Conteúdo do Usuário e o Conteúdo de IA associado à conta do Usuário,
                para fins de auditoria, conformidade, segurança e gestão, conforme descrito na
                Política de Privacidade. A Capybara Labs atua apenas como operadora técnica,
                habilitando tal acesso sob instrução da Empresa Cliente.
              </p>
            </CardContent>
          </Card>

          {/* Seção 8: Isenção de Garantias */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>8. Isenção de Garantias</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                A PLATAFORMA É FORNECIDA "NO ESTADO EM QUE SE ENCONTRA" E "CONFORME DISPONÍVEL", SEM
                GARANTIAS DE QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS. A CAPYBARA LABS NÃO GARANTE QUE
                A PLATAFORMA SERÁ ININTERRUPTA, LIVRE DE ERROS, VÍRUS OU COMPONENTES NOCIVOS, OU QUE
                ATENDERÁ ÀS NECESSIDADES ESPECÍFICAS DO USUÁRIO. O USO DA PLATAFORMA É DE INTEIRA
                RESPONSABILIDADE E RISCO DO USUÁRIO.
              </p>
            </CardContent>
          </Card>

          {/* Seção 9: Limitação de Responsabilidade */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <CardTitle>9. Limitação de Responsabilidade</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                EM NENHUMA HIPÓTESE A CAPYBARA LABS, SEUS DIRETORES, FUNCIONÁRIOS OU AFILIADOS SERÃO
                RESPONSÁVEIS POR QUAISQUER DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS
                OU PUNITIVOS, INCLUINDO, SEM LIMITAÇÃO, PERDA DE LUCROS, DADOS OU OUTRAS PERDAS
                INTANGÍVEIS, RESULTANTES DO USO OU DA INCAPACIDADE DE USAR A PLATAFORMA. A
                RESPONSABILIDADE TOTAL DA CAPYBARA LABS POR QUAISQUER REIVINDICAÇÕES RELACIONADAS A
                ESTES TERMOS ESTÁ LIMITADA AO VALOR PAGO PELA EMPRESA CLIENTE PELOS SERVIÇOS NOS
                TRÊS (3) MESES ANTERIORES AO EVENTO QUE DEU ORIGEM À REIVINDICAÇÃO.
              </p>
            </CardContent>
          </Card>

          {/* Seção 10: Suspensão e Rescisão */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle>10. Suspensão e Rescisão</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                A Capybara Labs reserva-se o direito de suspender ou rescindir o acesso do Usuário à
                Plataforma, sem aviso prévio, caso:
              </p>
              <ul className="ml-6 list-inside list-disc space-y-2 text-muted-foreground">
                <li>O Usuário viole qualquer disposição destes Termos;</li>
                <li>Haja uma solicitação da Empresa Cliente;</li>
                <li>
                  O acordo comercial entre a Capybara Labs e a Empresa Cliente seja encerrado.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Seção 11: Alterações a Estes Termos */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <CardTitle>11. Alterações a Estes Termos</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                A Capybara Labs pode modificar estes Termos a qualquer momento. As alterações serão
                notificadas através da Plataforma ou por outros meios de comunicação à Empresa
                Cliente. O uso continuado da Plataforma após a notificação das alterações
                constituirá a aceitação dos novos Termos pelo Usuário.
              </p>
            </CardContent>
          </Card>

          {/* Seção 12: Disposições Gerais */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <CardTitle>12. Disposições Gerais</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>12.1. Lei Aplicável e Foro:</strong> Estes Termos são regidos pelas leis da
                República Federativa do Brasil. Fica eleito o Foro da Comarca de{" "}
                <strong>Teresina, Estado do Piauí</strong>, para dirimir quaisquer controvérsias
                decorrentes deste instrumento, com renúncia a qualquer outro, por mais privilegiado
                que seja.
              </p>
              <p className="text-muted-foreground">
                <strong>12.2. Integralidade:</strong> Estes Termos, juntamente com a Política de
                Privacidade, constituem o acordo integral entre o Usuário e a Capybara Labs com
                relação ao uso da Plataforma.
              </p>
              <p className="text-muted-foreground">
                <strong>12.3. Contato:</strong> Para questões relacionadas a estes Termos e/ou ao
                funcionamento da Plataforma, o Usuário deve entrar em contato com o administrador ou
                departamento responsável dentro da <strong>Empresa Cliente</strong>. Para questões
                relacionadas ao funcionamento da Plataforma, o Usuário deve entrar em contato
                através do e-mail: suporte@capybaralabs.com.br.
              </p>
            </CardContent>
          </Card>

          <p className="text-muted-foreground text-sm">Capybara Labs Inova Simples (I.S.)</p>
        </div>
      </div>
    </div>
  );
}
