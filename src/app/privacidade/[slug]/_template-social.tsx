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
                Este documento explica como a Capybara Labs ("<strong>Operadora</strong>") trata os
                dados pessoais dos participantes ("<strong>Usuário</strong>") do programa social
                gratuito oferecido pela <strong>{client.fullName}</strong> ("
                <strong>{client.shortName}</strong>", "<strong>Instituição Parceira</strong>" ou "
                <strong>Controladora</strong>") e que utilizam a plataforma de software como serviço
                "{client.name}" ("<strong>Plataforma</strong>").
              </p>
              <p className="text-muted-foreground">
                Os Usuários são <strong>adolescentes e jovens</strong>, em regra com idade entre 14
                e 24 anos, inscritos no programa social gratuito da Instituição Parceira.{" "}
                <strong>
                  Não existe vínculo empregatício, de estágio ou de aprendizagem entre o Usuário e a{" "}
                  {client.shortName}, tampouco entre o Usuário e a Capybara Labs.
                </strong>{" "}
                Parte dos Usuários realiza estágio em empresas parceiras da Instituição Parceira;
                tais empresas são <strong>terceiros</strong> em relação a esta Política e, salvo
                obrigação legal, não recebem acesso aos dados tratados na Plataforma.
              </p>
              <p className="text-muted-foreground">
                Esta Política aplica-se exclusivamente à Plataforma "{client.name}", fornecida pela
                Capybara Labs à {client.shortName} por meio do <strong>Contrato de Parceria</strong>{" "}
                celebrado entre as partes, e é instrumento de cumprimento da Lei Geral de Proteção
                de Dados Pessoais (LGPD - Lei nº 13.709/2018), em especial do seu{" "}
                <strong>art. 14</strong>, do Estatuto da Criança e do Adolescente (ECA - Lei nº
                8.069/1990) e do Marco Civil da Internet (Lei nº 12.965/2014).
              </p>
              <p className="text-muted-foreground">
                Considerando que a maioria dos Usuários é menor de idade, o uso da Plataforma
                depende de <strong>consentimento específico e em destaque</strong> de pelo menos um
                dos Responsáveis Legais, nos termos do <strong>art. 14, §1º, da LGPD</strong>,
                obtido pela Instituição Parceira no ato de cadastramento do Usuário no programa.
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
                  <strong>Usuário:</strong> o adolescente ou jovem participante do programa social
                  gratuito da Instituição Parceira, devidamente cadastrado na Plataforma.
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
                  <strong>4.3. Vedação absoluta ao treinamento de modelos de IA:</strong> os Dados
                  Pessoais e o Conteúdo das Interações dos Usuários{" "}
                  <strong>não são, em nenhuma hipótese</strong>, utilizados para treinamento, ajuste
                  fino (fine-tuning) ou aprimoramento de modelos de Inteligência Artificial,
                  próprios ou de terceiros. Essa vedação é contratualmente reforçada junto aos
                  sub-operadores (Seção 9).
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
                <strong>5.1. Modelo agregado como regra.</strong> Dada a escala do programa (com
                mais de mil Usuários possíveis) e a natureza social do serviço, a {client.shortName}{" "}
                <strong>
                  não realiza revisão rotineira e individualizada do Conteúdo das Interações
                </strong>
                . O acompanhamento do programa é feito preferencialmente a partir de{" "}
                <strong>métricas agregadas e anonimizadas</strong> (ex.: volume de uso, distribuição
                por faixa etária, indicadores de moderação automática, taxa de adesão).
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
                  Termos de Uso ou de risco à segurança do próprio Usuário ou de terceiros (ex.:
                  sinais de autoagressão, assédio, tentativa de produção de conteúdo ilícito);
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

          {/* Seção 6: Moderação Automatizada de Conteúdo */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>6. Moderação Automatizada de Conteúdo</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Para proteger a integridade dos Usuários e a adequação do serviço a adolescentes, a
                Plataforma aplica mecanismos automatizados de moderação:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li>
                  <strong>6.1. Moderação de texto via OpenAI Moderation API:</strong> cada mensagem
                  textual enviada pelo Usuário (prompt) é previamente avaliada pela{" "}
                  <em>OpenAI Moderation API</em> — independentemente do modelo de IA selecionado
                  para a resposta — para identificar e bloquear conteúdos em categorias como{" "}
                  <strong>
                    conteúdo sexual, com ênfase na proteção contra exploração de menores
                  </strong>
                  , <strong>autoagressão</strong>, <strong>discurso de ódio</strong>,{" "}
                  <strong>assédio</strong> e <strong>violência</strong>.
                </li>
                <li>
                  <strong>6.2. Limitação de taxa (rate limit) e banimento automático:</strong>{" "}
                  Usuários que reiteradamente violem a Política de Uso Aceitável estão sujeitos a
                  restrições de taxa de uso e a banimento automático da Plataforma, com comunicação
                  à Controladora.
                </li>
                <li>
                  <strong>6.3. Catálogo de modelos restrito:</strong> a lista de modelos de IA
                  disponibilizada aos Usuários é previamente definida pela Capybara Labs em conjunto
                  com a Controladora, sendo vedada a habilitação autônoma de modelos pelo Usuário.
                </li>
                <li>
                  <strong>6.4. Limitações atuais de escopo (transparência).</strong> Na presente
                  data, a moderação automatizada <strong>não abrange</strong> a análise de{" "}
                  <strong>imagens enviadas pelo Usuário</strong> nem das{" "}
                  <strong>saídas geradas pelos modelos de IA</strong>. A Capybara Labs e a
                  Controladora trabalham para ampliar o escopo dos filtros, e quaisquer mudanças
                  relevantes serão refletidas nesta Política.
                </li>
                <li>
                  <strong>6.5. Dados gerados pela moderação.</strong> Os resultados da moderação
                  (categorias acionadas, pontuações e decisões de bloqueio) são registrados como
                  metadados associados à conta do Usuário e utilizados exclusivamente para as
                  finalidades descritas nesta Política.
                </li>
              </ul>
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
                <strong>7.3. Dados de Moderação:</strong> resultados das análises automatizadas
                descritas na Seção 6, incluindo categorias acionadas, pontuações e decisões
                (bloqueio, limitação, banimento).
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
                    executar a moderação automatizada descrita na Seção 6 e detectar riscos ao
                    Usuário;
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
                    indicadores de moderação, taxa de adesão);
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
                serviço, sob obrigações contratuais de confidencialidade, segurança e{" "}
                <strong>
                  vedação absoluta de uso dos dados de menores para treinamento de modelos de IA
                </strong>
                .
              </p>
              <p className="text-muted-foreground">
                <strong>9.1. Provedores de Modelos de IA:</strong>
              </p>
              <ul className="ml-6 list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  OpenAI (modelos GPT e Moderation API):
                  https://openai.com/pt-BR/policies/privacy-policy
                </li>
                <li>Google (modelos Gemini): https://ai.google.dev/gemini-api/terms</li>
                <li>Anthropic (modelos Claude): https://www.anthropic.com/legal/privacy</li>
              </ul>
              <p className="text-muted-foreground">
                Sempre que disponíveis, a Capybara Labs contrata junto aos provedores políticas de{" "}
                <em>Zero Retention</em> ou equivalentes em planos <em>Enterprise</em>, reforçando a
                vedação de uso dos dados dos Usuários para treinamento de modelos.
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
                criptografia em trânsito e em repouso, controle de acesso sob o princípio do menor
                privilégio, logs de auditoria, monitoramento e políticas internas de segurança da
                informação.
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
              {/*
                REVISAR: removi a cláusula original de "uso continuado = aceitação" porque, em contexto
                LGPD/menores, a base legal é o consentimento do Responsável Legal (art. 14, §1º). Alterações
                substanciais provavelmente exigem renovação de consentimento, não aceitação tácita.
              */}
              <p className="text-muted-foreground">
                A Capybara Labs poderá modificar esta Política para refletir mudanças legais,
                regulatórias ou operacionais. Alterações relevantes serão comunicadas à{" "}
                {client.shortName}, que informará os Responsáveis Legais dos Usuários na forma
                prevista no Contrato de Parceria. Alterações substanciais que afetem a base legal ou
                o escopo do tratamento poderão exigir renovação do consentimento pelo Responsável
                Legal.
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
              {/*
                REVISAR: foro eleito contra parte vulnerável/hipossuficiente pode ser afastado pelo juízo
                competente (CDC art. 101, I; CPC art. 63, §3º). Redação abaixo restringe o foro eleito às
                controvérsias entre Capybara Labs e Controladora, ressalvando competência legal para demandas
                envolvendo Usuários menores e seus Responsáveis Legais.
              */}
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
                Para questões técnicas sobre a Plataforma, a Capybara Labs pode ser contatada pelo
                e-mail suporte@capybaralabs.com.br.
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
