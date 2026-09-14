import {
  AlertTriangle,
  Bookmark,
  Calendar,
  CheckCircle,
  Mail,
  Scale,
  Shield,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { ClientConfig } from "@/data/clients";

type Props = {
  client: ClientConfig;
};

export function PrivacidadeTemplateSocial({ client }: Props) {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Plataforma {client.productName}</Badge>
              <Badge variant="outline">{client.shortName}</Badge>
              <Badge variant="outline">Programa Social</Badge>
            </div>
            <h1 className="font-bold text-4xl tracking-tight">
              <strong>Política de Privacidade da Plataforma {client.name}</strong>
            </h1>
            <p className="text-muted-foreground text-sm">
              Última atualização: {client.lastUpdatedLegal}.
            </p>
          </div>

          <Separator />

          {/* Seção 1: Introdução e Objetivo */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bookmark className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>1. Introdução e Objetivo</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Esta Política de Privacidade ("Política") é emitida pela Capybara Labs Inova Simples
                (I.S.) ("
                <strong>Capybara Labs</strong>"), inscrita no CNPJ sob o nº 55.585.433/0001-48, com
                sede na Avenida Marechal Castelo Branco, 911, Torre 02, Sala 920, Teresina - PI.
              </p>
              <p className="text-muted-foreground">
                Este documento explica como a Capybara Labs ("<strong>Operadora</strong>"), na
                qualidade de <strong>apoiadora institucional e parceira tecnológica</strong> do
                programa, trata os dados pessoais dos participantes ("<strong>Usuário</strong>") do
                programa social gratuito oferecido pela <strong>{client.fullName}</strong> ("
                <strong>{client.shortName}</strong>", "<strong>Instituição Parceira</strong>" ou "
                <strong>Controladora</strong>"), que utilizam a plataforma de software como serviço
                "{client.name}" ("<strong>Plataforma</strong>").
              </p>
              <p className="text-muted-foreground">
                Os Usuários são <strong>Jovens Aprendizes</strong> inscritos pela Instituição
                Parceira no programa social gratuito.{" "}
                <strong>
                  Não existe vínculo empregatício, de estágio ou de aprendizagem entre o Usuário e a
                  Capybara Labs.
                </strong>{" "}
                Eventuais empresas nas quais o Usuário mantenha relação de estágio ou aprendizagem
                são <strong>terceiros</strong> em relação a esta Política e, salvo obrigação legal,
                não recebem acesso aos dados tratados na Plataforma.
              </p>
              <p className="text-muted-foreground">
                Esta Política aplica-se exclusivamente à Plataforma "{client.name}",{" "}
                <strong>
                  disponibilizada pela Capybara Labs à {client.shortName} sem ônus financeiro
                </strong>
                , por meio do <strong>Contrato de Parceria</strong> celebrado entre as partes, e é
                instrumento de cumprimento da Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº
                13.709/2018), em especial do seu <strong>art. 14</strong>, do Estatuto da Criança e
                do Adolescente (ECA - Lei nº 8.069/1990), das normas aplicáveis à proteção de
                crianças e adolescentes em ambientes digitais (<strong>ECA Digital</strong>) e do
                Marco Civil da Internet (Lei nº 12.965/2014).
              </p>
              <p className="text-muted-foreground">
                Parte dos Usuários é menor de idade (adolescentes de 14 a 17 anos), sendo a maioria
                composta por Usuários maiores de idade. Para os Usuários{" "}
                <strong>menores de idade</strong>, o uso da Plataforma depende de{" "}
                <strong>consentimento específico e em destaque</strong> de pelo menos um dos
                Responsáveis Legais, nos termos do <strong>art. 14, §1º, da LGPD</strong>. Para os
                Usuários <strong>maiores de idade</strong>, aplica-se o consentimento próprio (art.
                7º, I, da LGPD). Em ambos os casos, o consentimento é obtido pela Instituição
                Parceira no ato de cadastramento do Usuário no programa.
              </p>
            </CardContent>
          </Card>

          {/* Seção 2: Definições Chave */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>2. Definições Chave</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Para facilitar a leitura, seguem definições relevantes, baseadas na LGPD e no ECA:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  <strong>Dados Pessoais:</strong> qualquer informação relacionada a pessoa natural
                  identificada ou identificável (art. 5º, I, da LGPD).
                </li>
                <li>
                  <strong>Dados de Crianças e Adolescentes:</strong> dados pessoais de pessoas com
                  menos de 18 anos, sujeitos à proteção reforçada do art. 14 da LGPD e ao princípio
                  do melhor interesse (art. 227 da Constituição Federal e ECA).
                </li>
                <li>
                  <strong>Tratamento:</strong> toda operação realizada com dados pessoais (coleta,
                  acesso, armazenamento, transmissão, eliminação etc.), nos termos do art. 5º, X, da
                  LGPD.
                </li>
                <li>
                  <strong>Usuário:</strong> o participante do programa social gratuito da
                  Instituição Parceira, devidamente cadastrado na Plataforma.
                </li>
                <li>
                  <strong>Responsável Legal:</strong> pai, mãe, tutor ou outro representante legal
                  do Usuário menor de idade, encarregado de prestar o consentimento previsto no art.
                  14, §1º, da LGPD.
                </li>
                <li>
                  <strong>Controladora:</strong> a Instituição Parceira ({client.shortName}), a quem
                  competem as decisões sobre o tratamento dos dados pessoais dos Usuários na
                  Plataforma (art. 5º, VI, da LGPD).
                </li>
                <li>
                  <strong>Operadora:</strong> a Capybara Labs, que realiza o tratamento em nome da
                  Controladora, sob instruções formais e nos limites do Contrato de Parceria (art.
                  5º, VII, da LGPD).
                </li>
                <li>
                  <strong>Conteúdo das Interações:</strong> todos os prompts, perguntas, comandos,
                  textos, dados e arquivos inseridos pelo Usuário, bem como as saídas geradas pelos
                  modelos de Inteligência Artificial.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Seção 3: Papéis da Controladora e da Operadora */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>
                    3. Papéis da {client.shortName} (Controladora) e da Capybara Labs (Operadora)
                  </strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>3.1.</strong> A <strong>{client.shortName}</strong>, na qualidade de
                responsável pelo programa social no qual o Usuário está inscrito, atua como{" "}
                <strong>Controladora</strong> dos dados pessoais dos Usuários. Cabe-lhe definir as
                finalidades e os meios do tratamento, obter e manter o consentimento dos
                Responsáveis Legais e atender às requisições dos titulares.
              </p>
              <p className="text-muted-foreground">
                <strong>3.2.</strong> A <strong>Capybara Labs</strong> atua exclusivamente como{" "}
                <strong>Operadora</strong>, tratando os dados em nome da Controladora e sob suas
                instruções formais, conforme o Contrato de Parceria e esta Política. A Capybara Labs
                não assume papel de Controladora e não toma decisões sobre o tratamento, ressalvadas
                as estritamente necessárias à operação segura da Plataforma.
              </p>
              <p className="text-muted-foreground">
                <strong>
                  3.3. Ausência de vínculo empregatício, de estágio ou de aprendizagem.
                </strong>{" "}
                Nem a {client.shortName} nem a Capybara Labs são empregadoras, concedentes de
                estágio ou empresas responsáveis por aprendizagem do Usuário. As empresas em que o
                Usuário eventualmente estagia são <strong>terceiros</strong> em relação a esta
                Política e,{" "}
                <strong>
                  salvo obrigação legal ou ordem judicial, não recebem acesso aos Dados Pessoais nem
                  ao Conteúdo das Interações
                </strong>{" "}
                tratados na Plataforma.
              </p>
              <p className="text-muted-foreground">
                <strong>3.4. Responsabilidade.</strong> A Capybara Labs responde pelos danos
                decorrentes do tratamento nos limites do <strong>art. 42 da LGPD</strong>, inclusive
                quanto à responsabilidade solidária da operadora prevista no{" "}
                <strong>art. 42, §1º, II</strong>, eximindo-se de responsabilidade por danos
                decorrentes de instruções inadequadas, ilegais ou não autorizadas fornecidas pela
                Controladora.
              </p>
            </CardContent>
          </Card>

          {/* Seção 4: Proteção de Crianças e Adolescentes (LGPD art. 14) */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>4. Proteção de Crianças e Adolescentes</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Em atenção ao <strong>art. 14 da LGPD</strong>, ao <strong>ECA</strong> e ao
                princípio do <strong>melhor interesse da criança e do adolescente</strong> (art. 227
                da Constituição Federal), aplicam-se as seguintes salvaguardas ao tratamento de
                dados de Usuários menores de idade:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li>
                  <strong>4.1. Consentimento específico e em destaque</strong> de pelo menos um dos
                  Responsáveis Legais, nos termos do art. 14, §1º, da LGPD, obtido pela{" "}
                  {client.shortName} no ato de inscrição do Usuário no programa. A revogação do
                  consentimento pelo Responsável Legal implica, por padrão, o encerramento do acesso
                  do Usuário à Plataforma.
                </li>
                <li>
                  <strong>4.2. Minimização reforçada:</strong> são coletados apenas os dados
                  estritamente necessários à execução do programa social (art. 6º, III, da LGPD),
                  vedada a coleta para fins publicitários, de perfilamento comercial ou para
                  qualquer finalidade alheia ao programa.
                </li>
                <li>
                  <strong>4.3. Uso para treinamento de modelos.</strong> A Capybara Labs{" "}
                  <strong>não treina modelos de Inteligência Artificial próprios</strong> com os
                  Dados Pessoais nem com o Conteúdo das Interações dos Usuários. O tratamento
                  realizado pelos provedores de IA contratados — inclusive a eventual retenção e uso
                  de prompts para aprimoramento dos modelos desses provedores — segue as políticas
                  de cada provedor, conforme descrito na Seção 9.1.1.
                </li>
                <li>
                  <strong>4.4. Não comercialização:</strong> os dados dos Usuários não são vendidos,
                  alugados, cedidos onerosamente nem compartilhados para fins de marketing ou
                  monetização.
                </li>
                <li>
                  <strong>4.5. Exercício de direitos pelos Responsáveis Legais:</strong> todos os
                  direitos previstos no art. 18 da LGPD podem ser exercidos pelo Responsável Legal
                  em nome do Usuário menor de idade, nos termos da Seção 11.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Seção 5: Acesso e Supervisão da Controladora (agregado) */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>5. Acesso e Supervisão da Controladora</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>5.1. Modelo agregado como regra.</strong> Os recursos de acompanhamento
                disponibilizados à {client.shortName} pela Plataforma são baseados em{" "}
                <strong>métricas agregadas e anonimizadas</strong> (ex.: volume de uso, distribuição
                por faixa etária, indicadores de limitação de taxa e banimento, taxa de adesão).{" "}
                <strong>
                  Não há, por padrão, revisão rotineira e individualizada do Conteúdo das Interações
                  pela Capybara Labs
                </strong>
                .
              </p>
              <p className="text-muted-foreground">
                <strong>5.2. Acesso individualizado como exceção.</strong> O acesso a interações de
                um Usuário específico pela Controladora, pela Capybara Labs ou por seus prepostos
                autorizados ocorre apenas nas hipóteses estritas abaixo, com registro em log de
                auditoria:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li>
                  <strong>5.2.1.</strong> suspeita fundada de abuso da Plataforma, de violação dos
                  Termos de Uso ou de risco à segurança do próprio Usuário ou de terceiros,
                  evidenciada por denúncias recebidas (da {client.shortName}, de Responsáveis Legais
                  ou de terceiros), por recusa reiterada de requisições pelos provedores de IA ou
                  por outros indícios objetivos;
                </li>
                <li>
                  <strong>5.2.2.</strong> solicitação formal e fundamentada do Responsável Legal do
                  próprio Usuário;
                </li>
                <li>
                  <strong>5.2.3.</strong> cumprimento de obrigação legal ou ordem de autoridade
                  competente (judicial ou administrativa);
                </li>
                <li>
                  <strong>5.2.4.</strong> necessidade técnica de suporte, mediante autorização
                  expressa do Responsável Legal ou da Controladora, limitada ao estritamente
                  necessário à resolução do chamado.
                </li>
              </ul>
              <p className="text-muted-foreground">
                <strong>5.3. Vedação de uso disciplinar ou trabalhista.</strong> O Conteúdo das
                Interações <strong>não pode ser utilizado</strong> para fins disciplinares de
                natureza trabalhista, para avaliação de desempenho em estágio ou aprendizagem, nem
                compartilhado com empresas nas quais o Usuário eventualmente estagia.
              </p>
              <p className="text-muted-foreground">
                <strong>5.4. Registro de auditoria.</strong> Todo acesso individualizado ao Conteúdo
                das Interações é registrado em log, contendo data, hora, identificação do agente e
                justificativa, para fins de auditoria.
              </p>
            </CardContent>
          </Card>

          {/* Seção 6: Salvaguardas, Catálogo Restrito e Controles de Uso Aceitável */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>
                    6. Salvaguardas de Segurança, Catálogo Restrito de Modelos e Controles de Uso
                    Aceitável
                  </strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Para proteger a integridade dos Usuários adolescentes e a adequação do serviço ao
                seu público, a Plataforma combina medidas de proteção aplicadas em diferentes
                camadas:
              </p>
              <p className="text-muted-foreground">
                <strong>6.1. Salvaguardas de segurança dos provedores de IA.</strong> Os modelos de
                IA disponibilizados (Seção 9.1) são fornecidos por terceiros (como OpenAI, Anthropic
                e Google), que aplicam, do lado de seus próprios servidores, políticas de uso e
                mecanismos de segurança proprietários. Requisições contrárias a tais políticas podem
                ser recusadas diretamente pelo provedor. A Capybara Labs e a {client.shortName}{" "}
                <strong>não operam uma camada própria de análise semântica</strong> do Conteúdo das
                Interações.
              </p>
              <p className="text-muted-foreground">
                <strong>6.2. Catálogo restrito de modelos.</strong> A Capybara Labs define
                previamente, em conjunto com a {client.shortName}, quais modelos de IA ficam
                disponíveis aos Usuários. É{" "}
                <strong>vedada a habilitação autônoma de modelos</strong> pelo Usuário.
              </p>
              <p className="text-muted-foreground">
                <strong>6.3. Controles de uso aceitável (comportamentais).</strong> A Capybara Labs
                aplica, com base em <strong>volume e padrões de uso</strong> e independentemente do
                conteúdo das mensagens, mecanismos automatizados de <em>rate limit</em> e banimento
                automático de contas com indícios de abuso ou violação reiterada dos Termos de Uso,
                com comunicação à {client.shortName}.
              </p>
              <p className="text-muted-foreground">
                <strong>6.4. Supervisão por exceção e atendimento a denúncias.</strong> Somam-se às
                medidas acima: (i) a supervisão agregada e por exceção realizada pela{" "}
                {client.shortName} (Seção 5); (ii) o atendimento prioritário a denúncias
                apresentadas por Responsáveis Legais, pela {client.shortName} ou por terceiros; e
                (iii) a proibição expressa de conteúdo ilícito prevista nos Termos de Uso.
              </p>
              <p className="text-muted-foreground">
                <strong>6.5. O que a Plataforma NÃO faz (transparência).</strong> Na presente data,{" "}
                <strong>não há análise de conteúdo</strong> — textual ou imagética, de entrada ou de
                saída — operada pela Capybara Labs sobre mensagens individuais dos Usuários. A
                proteção descrita nesta Seção apoia-se nas salvaguardas do provedor (6.1), na
                curadoria do catálogo (6.2), nos controles comportamentais (6.3) e na resposta a
                denúncias (6.4). Quaisquer ampliações desse escopo serão refletidas nesta Política e
                comunicadas à {client.shortName}.
              </p>
              <p className="text-muted-foreground">
                <strong>6.6. Dados gerados pelos controles.</strong> Os resultados dos controles de
                uso (contadores, decisões de limitação, suspensão e banimento) e os registros de
                denúncias são mantidos como metadados associados à conta do Usuário e utilizados
                exclusivamente para as finalidades descritas nesta Política.
              </p>
            </CardContent>
          </Card>

          {/* Seção 7: Informações que a Capybara Labs processa */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>7. Informações que a Capybara Labs processa</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Para viabilizar a Plataforma, são processados:
              </p>
              <p className="text-muted-foreground">
                <strong>7.1. Dados de Identificação e Autenticação:</strong> nome, e-mail,
                credenciais de acesso e identificação do núcleo ou turma no programa, fornecidos
                pela Controladora no cadastro.
              </p>
              <p className="text-muted-foreground">
                <strong>7.2. Conteúdo das Interações com a IA:</strong>
              </p>
              <ul className="ml-6 list-inside list-disc space-y-2 text-muted-foreground">
                <li>prompts, perguntas, comandos ou instruções inseridos pelo Usuário;</li>
                <li>respostas geradas pelos modelos de IA integrados;</li>
                <li>
                  metadados das interações (data/hora, identificador de sessão, modelo utilizado).
                </li>
              </ul>
              <p className="text-muted-foreground">
                <strong>Atenção:</strong> o Usuário não deve inserir na Plataforma Dados Pessoais
                Sensíveis (art. 5º, II, da LGPD), próprios ou de terceiros, nem informações que o
                identifiquem fora do contexto do programa.
              </p>
              <p className="text-muted-foreground">
                <strong>7.3. Dados de Controle de Uso:</strong> registros relativos aos controles
                descritos na Seção 6.3, compreendendo contadores de uso, decisões de limitação de
                taxa, suspensão e banimento, bem como denúncias recebidas e encaminhamentos. Não
                inclui classificações automáticas de conteúdo operadas pela Capybara Labs.
              </p>
              <p className="text-muted-foreground">
                <strong>7.4. Dados Técnicos e de Uso (Logs):</strong> tipo de dispositivo, sistema
                operacional, navegador, endereço IP, identificadores técnicos, logs de acesso e
                relatórios de erros, utilizados para segurança, diagnóstico e geração de métricas
                agregadas.
              </p>
            </CardContent>
          </Card>

          {/* Seção 8: Finalidades do tratamento */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>8. Finalidades do tratamento de dados</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Os dados pessoais dos Usuários são tratados estritamente para as finalidades abaixo,
                com fundamento legal no consentimento do Responsável Legal (art. 7º, I, c/c art. 14,
                §1º, da LGPD) e, quando aplicável, no cumprimento de obrigação legal ou regulatória
                (art. 7º, II) e no legítimo interesse limitado à segurança da Plataforma (art. 7º,
                IX):
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>8.1. Execução do programa social:</strong>
                </p>
                <ul className="ml-6 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>disponibilizar, operar e manter a Plataforma;</li>
                  <li>autenticar o Usuário e gerenciar seu acesso;</li>
                  <li>processar interações com modelos de IA e entregar respostas;</li>
                  <li>oferecer suporte técnico.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>8.2. Segurança e proteção do Usuário:</strong>
                </p>
                <ul className="ml-6 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>
                    aplicar os controles de uso aceitável descritos na Seção 6.3, apoiar a
                    supervisão por exceção (Seção 5) e processar denúncias de risco ao Usuário;
                  </li>
                  <li>proteger a Plataforma contra acessos não autorizados, fraudes e abusos;</li>
                  <li>cumprir obrigações legais e regulatórias.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>8.3. Relatórios agregados à Controladora:</strong>
                </p>
                <ul className="ml-6 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>
                    geração de relatórios agregados e anonimizados para a {client.shortName}{" "}
                    acompanhar o programa (ex.: volume de uso por núcleo, distribuição etária,
                    indicadores de limitação e banimento, taxa de adesão);
                  </li>
                  <li>
                    esses relatórios <strong>não identificam Usuários individuais</strong>,
                    ressalvadas as hipóteses restritas da Seção 5.2.
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>8.4. Comunicações operacionais:</strong>
                </p>
                <ul className="ml-6 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>
                    envio de notificações essenciais sobre a Plataforma (manutenção, segurança,
                    alterações de serviço).
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Seção 9: Compartilhamento */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>9. Compartilhamento de dados com sub-operadores e terceiros</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                A Capybara Labs utiliza sub-operadores estritamente necessários à prestação do
                serviço, sob obrigações contratuais de confidencialidade e segurança.
              </p>
              <p className="text-muted-foreground">
                <strong>9.1. Provedores de Modelos de IA:</strong>
              </p>
              <ul className="ml-6 list-inside list-disc space-y-2 text-muted-foreground">
                <li>OpenAI (modelos GPT): https://openai.com/pt-BR/policies/privacy-policy</li>
                <li>Google (modelos Gemini): https://ai.google.dev/gemini-api/terms</li>
                <li>Anthropic (modelos Claude): https://www.anthropic.com/legal/privacy</li>
              </ul>
              <p className="text-muted-foreground">
                <strong>
                  9.1.1. Retenção e uso de prompts pelos provedores — contrapartida da gratuidade.
                </strong>{" "}
                Para viabilizar a operação gratuita desta Plataforma no âmbito do programa social, a
                Capybara Labs contrata modalidades padrão junto aos provedores de IA, sem políticas
                adicionais de <em>Zero Retention</em>.{" "}
                <strong>As políticas variam entre provedores:</strong> parte dos provedores não
                utiliza os prompts e respostas dos Usuários para treinamento dos seus modelos; outra
                parte pode, nos termos de suas próprias políticas, reter temporariamente os prompts
                e utilizá-los para aprimoramento dos seus modelos. Por essa razão, e considerando a
                impossibilidade de o Usuário saber, em cada interação, qual provedor responde, o
                Usuário é orientado a <strong>não inserir dados pessoais sensíveis</strong> nem
                informações identificadoras além do estritamente necessário à atividade educacional,
                conforme a Seção 7.
              </p>
              <p className="text-muted-foreground">
                <strong>9.2. Provedores de Infraestrutura:</strong> a Plataforma é hospedada em
                servidores virtuais privados (VPS) localizados preferencialmente em território
                brasileiro.
              </p>
              <p className="text-muted-foreground">
                <strong>9.3. Alterações no rol de sub-operadores:</strong> serão comunicadas
                previamente à Controladora, que poderá opor-se a alterações que reduzam o nível de
                proteção dos dados dos Usuários.
              </p>
              <p className="text-muted-foreground">
                <strong>9.4. Autoridades públicas e órgãos de proteção.</strong> Dados poderão ser
                compartilhados quando exigidos por lei, regulamento, processo legal ou requisição de
                autoridade competente, incluindo Conselho Tutelar, Ministério Público e Poder
                Judiciário, quando cabível.
              </p>
              <p className="text-muted-foreground">
                <strong>9.5. Empresas nas quais o Usuário estagia.</strong> Reitera-se que essas
                empresas <strong>não são sub-operadoras</strong> e{" "}
                <strong>não recebem acesso</strong> aos Dados Pessoais nem ao Conteúdo das
                Interações tratados na Plataforma, salvo obrigação legal.
              </p>
              <p className="text-muted-foreground">
                <strong>9.6. Transferência Internacional.</strong> A inferência pelos modelos de IA
                pode ocorrer em servidores de provedores localizados no exterior. A Capybara Labs
                adota as salvaguardas exigidas pelos arts. 33 a 36 da LGPD, de modo a assegurar
                nível de proteção equivalente ao da legislação brasileira.
              </p>
            </CardContent>
          </Card>

          {/* Seção 10: Segurança dos Dados e Retenção */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>10. Segurança dos Dados e Retenção</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>10.1. Medidas de segurança.</strong> A Capybara Labs adota medidas técnicas
                e administrativas aptas a proteger os dados pessoais (art. 46 da LGPD), incluindo
                criptografia em trânsito, controle de acesso sob o princípio do menor privilégio,
                logs de auditoria, monitoramento e políticas internas de segurança da informação.
              </p>
              <p className="text-muted-foreground">
                <strong>10.2. Retenção.</strong> Os dados pessoais dos Usuários são retidos apenas
                enquanto durar a participação do Usuário no programa da {client.shortName}. Ao
                término da participação, ou na revogação do consentimento pelo Responsável Legal, os
                dados são <strong>eliminados de forma irreversível</strong>, ressalvadas as
                hipóteses legais de retenção mínima (notadamente a guarda de registros de acesso a
                aplicações de internet prevista no art. 15 do Marco Civil da Internet).
              </p>
              <p className="text-muted-foreground">
                <strong>10.3. Incidentes de segurança.</strong> Em caso de incidente que possa
                acarretar risco ou dano relevante aos Usuários, a Capybara Labs notificará a{" "}
                {client.shortName} em tempo hábil, observada a responsabilidade primária da
                Controladora pela comunicação à Autoridade Nacional de Proteção de Dados (ANPD) e
                aos titulares, nos termos do art. 48 da LGPD.
              </p>
            </CardContent>
          </Card>

          {/* Seção 11: Direitos dos Titulares e Canal de Atendimento */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>11. Direitos dos Titulares e Canal de Atendimento</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Os Usuários e seus Responsáveis Legais, como titulares de dados, possuem os direitos
                assegurados pelo <strong>art. 18 da LGPD</strong>, especialmente:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li>
                  <strong>11.1.</strong> confirmação da existência de tratamento e acesso aos dados;
                </li>
                <li>
                  <strong>11.2.</strong> correção de dados incompletos, inexatos ou desatualizados;
                </li>
                <li>
                  <strong>11.3.</strong> anonimização, bloqueio ou eliminação de dados
                  desnecessários, excessivos ou tratados em desconformidade com a LGPD;
                </li>
                <li>
                  <strong>11.4.</strong> portabilidade dos dados a outro fornecedor, observados os
                  regulamentos da ANPD;
                </li>
                <li>
                  <strong>11.5.</strong> revogação do consentimento pelo Responsável Legal, com
                  cessação do tratamento fundado no consentimento e encerramento do acesso à
                  Plataforma;
                </li>
                <li>
                  <strong>11.6.</strong> informação sobre entidades públicas e privadas com as quais
                  a Controladora realiza uso compartilhado de dados;
                </li>
                <li>
                  <strong>11.7.</strong> não discriminação em razão do exercício de direitos.
                </li>
              </ul>
              <p className="text-muted-foreground">
                <strong>11.8. Canal principal.</strong> Por ser a Controladora, as solicitações
                devem ser dirigidas primariamente à <strong>{client.shortName}</strong>, pelos
                canais por ela informados aos Responsáveis Legais no ato de inscrição no programa. A
                Capybara Labs apoiará a Controladora no atendimento às requisições, nos prazos do
                art. 19 da LGPD e dentro das capacidades técnicas da Plataforma.
              </p>
            </CardContent>
          </Card>

          {/* Seção 12: Alterações */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>12. Alterações a esta Política</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                A Capybara Labs poderá modificar esta Política para refletir mudanças legais,
                regulatórias ou operacionais. Alterações relevantes serão comunicadas à{" "}
                {client.shortName}, a quem compete, na qualidade de Controladora, comunicar os
                Responsáveis Legais e renovar o consentimento quando cabível, na forma prevista no
                Contrato de Parceria.
              </p>
            </CardContent>
          </Card>

          {/* Seção 13: Disposições Gerais */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>13. Disposições Gerais</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>Lei Aplicável:</strong> esta Política é regida pelas leis da República
                Federativa do Brasil, em especial a LGPD, o ECA, a Constituição Federal e o Marco
                Civil da Internet.
              </p>
              <p className="text-muted-foreground">
                <strong>Foro:</strong> as controvérsias entre Capybara Labs e {client.shortName}{" "}
                decorrentes desta Política serão resolvidas no Foro da Comarca de Teresina/PI, sem
                prejuízo das regras de competência aplicáveis a demandas envolvendo titulares
                menores de idade e seus Responsáveis Legais.
              </p>
              <p className="text-muted-foreground">
                <strong>Integralidade:</strong> esta Política, em conjunto com os Termos de Uso e
                com o Contrato de Parceria, constitui o acordo integral entre as partes sobre
                privacidade de dados na Plataforma.
              </p>
            </CardContent>
          </Card>

          {/* Seção 14: Contato */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>14. Contato</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Para o exercício dos direitos previstos na LGPD e para dúvidas sobre o tratamento de
                dados dos Usuários do programa, o Responsável Legal deve contatar primeiramente a{" "}
                <strong>{client.shortName}</strong>, Controladora dos dados, pelos canais por ela
                disponibilizados.
              </p>
              <p className="text-muted-foreground">
                Para questões relativas a dados pessoais e direitos LGPD, a Capybara Labs pode ser
                contatada pelo e-mail do Encarregado: <strong>dpo@capybaralabs.com.br</strong>. Para
                questões técnicas sobre a Plataforma: suporte@capybaralabs.com.br.
              </p>
            </CardContent>
          </Card>

          <p className="text-muted-foreground text-sm">
            <strong>Capybara Labs Inova Simples (I.S.)</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
