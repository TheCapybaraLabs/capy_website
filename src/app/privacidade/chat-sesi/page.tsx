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
  title: "Política de Privacidade da Plataforma Chat IA SESI-PI",
  description: "Política de Privacidade da Plataforma Chat IA SESI-PI.",
  keywords: ["privacidade", "SESI-PI", "Chat IA", "LGPD", "Capybara Labs"],
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
              <Badge variant="secondary">Plataforma Chat IA</Badge>
              <Badge variant="outline">SESI-PI</Badge>
            </div>
            <h1 className="font-bold text-4xl tracking-tight">
              <strong>Política de Privacidade da Plataforma Chat IA SESI-PI</strong>
            </h1>
            <p className="text-muted-foreground text-sm">
              Última atualização: 01 de dezembro de 2025.
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
                Esta Política de Privacidade (&quot;Política&quot;) é emitida pela da Capybara Labs
                Inova Simples (I.S) (&quot;<strong>Capybara Labs</strong>&quot;), inscrita no CNPJ
                sob o número 55.585.433/0001-48, com sede na Avenida Marechal Castelo Branco, 911
                Torre 02, Sala 920, Teresina - PI.
              </p>
              <p className="text-muted-foreground">
                Este documento foi elaborado para fornecer transparência e explicar como a Capybara
                Labs <strong>(“Operadora” ou "Licenciante”)</strong> trata as informações e dados
                pessoais dos usuários finais (&quot;<strong>Usuário</strong>&quot;) que utilizam a
                plataforma de software como serviço &quot;Chat IA SESI-PI&quot; (&quot;
                <strong>Plataforma</strong>&quot;) da Capybara Labs, licenciada para a empresa na
                qual o Usuário trabalha ou a qual representa (&quot;
                <strong>Serviço Social da Indústria – Departamento Regional do Piauí” </strong>ou
                <strong> “SESI-PI</strong>&quot; ou{" "}
                <strong>&quot;Empresa Cliente&quot; ou “Licenciada”</strong>).
              </p>
              <p className="text-muted-foreground">
                Esta Política se aplica exclusivamente à Plataforma &quot;Chat IA SESI-PI&quot; e a
                todos os serviços associados fornecidos pela LICENCIANTE À LICENCIADA, conforme{" "}
                <strong>
                  Termo de Serviço, Licenciamento de Software como Serviço (SaaS) e Suporte{" "}
                </strong>
                celebrado entre as partes e é documento fundamental para o cumprimento da Lei Geral
                de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018). Esta Política descreve de
                forma clara os papéis de cada parte, os dados que são processados, as finalidades
                desse processamento e os direitos do Usuário.
              </p>
              <p className="text-muted-foreground">
                Ao acessar e utilizar a Plataforma, o Usuário reconhece que leu, compreendeu e
                concorda com os termos aqui descritos, bem como com os Termos de Uso da Plataforma
                Chat IA SESI-PI e Termo de Serviço, Licenciamento de Software como Serviço (SaaS) e
                Suporte. Caso o usuário não concorde com esta Política, deverá abster-se de utilizar
                a Plataforma e notificar imediatamente a LICENCIADA.
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
                Para facilitar a compreensão, seguem algumas definições importantes, baseadas na
                LGPD:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  <strong>Dados Pessoais:</strong> Qualquer informação relacionada a uma pessoa
                  natural identificada ou identificável, nos termos da Lei Geral de Proteção de
                  Dados (LGPD - Lei nº 13.709/2018).
                </li>
                <li>
                  <strong>Dados Sensíveis</strong>: Dados pessoais sobre origem racial ou étnica,
                  convicção religiosa, opinião política, filiação a sindicato ou a organização de
                  caráter religioso, filosófico ou político, dados referentes à saúde ou à vida
                  sexual, dados genéticos ou biométricos.
                </li>
                <li>
                  <strong>Tratamento de dados:</strong> Toda e qualquer operação realizada com dados
                  pessoais, como as que se referem a coleta, produção, recepção, classificação,
                  utilização, acesso, reprodução, transmissão, distribuição, processamento,
                  arquivamento, armazenamento, eliminação, avaliação ou controle da informação,
                  modificação, comunicação, transferência, difusão ou extração.
                </li>
                <li>
                  <strong>Usuário:</strong> O funcionário, colaborador ou representante autorizado
                  da LICENCIADA que utiliza a Plataforma.
                </li>
                <li>
                  <strong>Controlador:</strong> É a pessoa natural ou jurídica que toma as decisões
                  sobre o tratamento de dados pessoais. Neste contexto, a Empresa Cliente é a
                  Controladora dos Dados do Usuário.
                </li>
                <li>
                  <strong>Operador:</strong> É a pessoa natural ou jurídica que realiza o tratamento
                  de dados pessoais em nome do Controlador. Neste contexto, a Capybara Labs atua
                  como Operadora dos Dados.
                </li>
                <li>
                  <strong>Conteúdo das Interações:</strong> Refere-se a todos os prompts
                  (perguntas), respostas, comandos, textos, dados e arquivos que o Usuário insere na
                  Plataforma, bem como as saídas geradas pelos modelos de Inteligência Artificial.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Seção 3: O Papel da Capybara Labs como Operadora e o Papel da Empresa Cliente como Controladora */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>
                    3. O Papel da Capybara Labs como Operadora e o Papel da Empresa Cliente como
                    Controladora
                  </strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                É fundamental que o Usuário compreenda a distinção de papéis no tratamento de seus
                dados pessoais:
              </p>
              <p className="text-muted-foreground">
                O <strong>SESI-PI</strong> (empregadora do Usuário) é a Controladora:
              </p>
              <p className="text-muted-foreground">
                A LICENCIADA é exclusivamente responsável pelas decisões referentes ao tratamento
                dos dados pessoais de seus usuários finais, incluindo a determinação das
                finalidades, meios e duração do tratamento. A LICENCIADA deve garantir que possui
                base legal adequada (e.g., consentimento, execução de contrato, legítimo interesse)
                para o tratamento dos dados no âmbito da Plataforma, e é responsável por responder a
                solicitações dos titulares de dados e por eventuais violações de dados sob sua
                responsabilidade.
              </p>
              <p className="text-muted-foreground">
                A <strong>Capybara Labs</strong> é a Operadora:
              </p>
              <p className="text-muted-foreground">
                A LICENCIANTE atua como mera Operadora dos dados, tratando-os estritamente em nome
                da LICENCIADA e sob suas instruções expressas, conforme delineado no Contrato de
                Licenciamento e nesta Política. A LICENCIANTE não assume qualquer responsabilidade
                como Controladora e não será responsável por decisões tomadas pela LICENCIADA
                regarding data processing.
              </p>
              <p className="text-muted-foreground">
                <strong>Responsabilidade Solidária</strong>: Em conformidade com a LGPD, ambas as
                partes são responsáveis perante os titulares de dados por danos causados pelo
                tratamento de dados, sendo que a LICENCIANTE somente responderá solidariamente na
                medida de sua culpa, nos termos do art. 42 da LGPD. A LICENCIANTE se exime de
                responsabilidade por quaisquer danos decorrentes de instruções inadequadas, ilegais
                ou não autorizadas fornecidas pela LICENCIADA.
              </p>
            </CardContent>
          </Card>

          {/* Seção 4: Acesso e controle da Controladora aos dados dos Usuários */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>4. Acesso e controle da Controladora aos dados dos Usuários</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>4.1.</strong> Delegação de Controle e Monitoramento: A LICENCIADA (SESI-PI),
                na qualidade de Controladora exclusiva e empregadora dos Usuários Finais, detém o
                direito pleno e irrestrito de acessar, monitorar, revisar, reter e analisar todos e
                quaisquer Dados Pessoais e Conteúdo das Interações gerados por seus usuários na
                Plataforma, a qualquer momento e sem a necessidade de notificação prévia ou
                consentimento específico do usuário individual.
              </p>
              <p className="text-muted-foreground">
                <strong>4.2.</strong> Finalidades Institucionais: O acesso e uso dos dados dos
                usuários pela LICENCIADA podem ser realizados para diversas finalidades
                institucionais legítimas, incluindo, mas não se limitando a:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  <strong>4.2.1. </strong>Assegurar o cumprimento das políticas internas de uso
                  aceitável de TI e de conduta da LICENCIADA;
                </li>
                <li>
                  <strong>4.2.2. </strong>Realizar auditorias internas, investigações disciplinares
                  e apuração de possíveis irregularidades;
                </li>
                <li>
                  <strong>4.2.3. </strong>Gerenciar a produtividade, a alocação de recursos e a
                  eficiência operacional;
                </li>
                <li>
                  <strong>4.2.4. </strong>Gerar relatórios gerenciais e métricas de utilização da
                  Plataforma;
                </li>
                <li>
                  <strong>4.2.4. </strong>Cumprir com obrigações legais e regulatórias aplicáveis à
                  LICENCIADA.
                </li>
              </ul>
              <p className="text-muted-foreground">
                <strong>4.3.</strong> Isenção de Responsabilidade da LICENCIANTE: A LICENCIANTE
                (Capybara Labs) atua como mera operadora técnica dos dados em nome e sob as
                instruções expressas da LICENCIADA. A LICENCIANTE não tem qualquer responsabilidade
                ou obrigação de questionar, limitar ou supervisionar o acesso da LICENCIADA aos
                dados de seus próprios usuários, nem será responsável por quaisquer consequências
                decorrentes desse acesso, incluindo, mas não se limitando a, medidas disciplinares,
                rescisões contratuais ou qualquer outro ato praticado pela LICENCIADA com base nas
                informações obtidas através da Plataforma. O usuário final reconhece e expressamente
                concorda com este regime de acesso e controle.
              </p>
            </CardContent>
          </Card>

          {/* Seção 5: Informações que a Capybara Labs processa */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>5. Informações que a Capybara Labs processa</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Para viabilizar o funcionamento da Plataforma, a Capybara Labs processa as seguintes
                informações:
              </p>
              <p className="text-muted-foreground">
                <strong>5.1. </strong>Dados de Identificação e Autenticação:
              </p>
              <p className="text-muted-foreground">
                Nome completo, endereço de e-mail corporativo, telefone de contato, credenciais de
                acesso e informações profissionais como cargo ou departamento, fornecido pela{" "}
                <strong>Empresa Cliente</strong>. Também pode-se coletar e/ou gerar identificadores
                indiretos (ex: Usuário12345).
              </p>
              <p className="text-muted-foreground">Conteúdo das Interações com a IA:</p>
              <ul className="ml-6 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Todos os prompts, perguntas, comandos ou instruções inseridos pelo Usuário.</li>
                <li>
                  Todas as respostas, saídas ou conteúdos gerados pelos modelos de IA integrados à
                  Plataforma.
                </li>
                <li>
                  Metadados associados às interações, como carimbos de data/hora, identificadores de
                  sessão, tipos de modelo de IA utilizado.
                </li>
              </ul>
              <p className="text-muted-foreground">
                Atenção: O Usuário não deve inserir Dados Pessoais Sensíveis ou informações
                confidenciais de terceiros na Plataforma, a menos que seja expressamente autorizado
                pela <strong>Empresa Cliente</strong>.
              </p>
              <p className="text-muted-foreground">Dados Técnicos e de Uso (Logs):</p>
              <p className="text-muted-foreground">
                Em consistência com as permissões do seu equipamento e navegador, os mesmos poderão
                enviar alguns dados para a Capybara Labs. São eles: informações como o tipo de
                dispositivo, informações do sistema operacional, informações do navegador e páginas
                da web de referência, rede móvel, informações de conexão, operadora de celular ou
                provedor de serviços de internet (ISP), configuração de fuso horário, endereço IP
                (incluindo informações sobre a localização do dispositivo derivadas do seu endereço
                IP), identificadores (incluindo identificadores de dispositivo ou de publicidade,
                identificadores probabilísticos e outros identificadores pessoais ou online
                exclusivos) e localização do dispositivo. Além de logs de acesso, relatórios de
                erros e diagnósticos de desempenho.
              </p>
            </CardContent>
          </Card>

          {/* Seção 6: Finalidades do tratamento de dados */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>6. Finalidades do tratamento de dados</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                A Capybara Labs processa os dados pessoais do Usuário estritamente para as
                finalidades necessárias à execução do Termo de Serviço, Licenciamento de Software
                como Serviço (SaaS) e Suporte firmado com a Empresa Cliente, que incluem:
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>6.1. </strong>Prestação e Melhoria dos Serviços:
                </p>
                <ul className="ml-6 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>
                    Fornecer, operar, manter e otimizar a Plataforma &quot;Chat IA SESI-PI&quot;;
                  </li>
                  <li>Autenticar usuários e gerenciar acessos;</li>
                  <li>Processar as interações com os modelos de IA e entregar respostas;</li>
                  <li>Oferecer suporte técnico e responder a solicitações;</li>
                  <li>Realizar manutenções, atualizações e correções de bugs.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>6.2. </strong>Segurança e Conformidade:
                </p>
                <ul className="ml-6 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>
                    Proteger a Plataforma contra acessos não autorizados, fraudes, abusos ou
                    violações de segurança;
                  </li>
                  <li>Cumprir obrigações legais e regulatórias aplicáveis, incluindo a LGPD;</li>
                  <li>
                    Investigar e prevenir atividades ilegais ou em violação aos Termos de Uso.
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>6.3.</strong> Análise e Relatórios:
                </p>
                <ul className="ml-6 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>
                    Gerar relatórios agregados e anonimizados sobre o uso da Plataforma para a
                    LICENCIADA, permitindo a análise de desempenho, adoção e eficiência;
                  </li>
                  <li>
                    Monitorar a qualidade dos serviços e identificar oportunidades de melhoria.
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>6.4.</strong> Comunicações:
                </p>
                <ul className="ml-6 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>
                    Enviar notificações importantes sobre a Plataforma, como alterações de serviço,
                    manutenções ou atualizações de segurança.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Seção 7: Base legal para o tratamento */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>7. Base legal para o tratamento</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Como Operadora, o tratamento de dados que a Capybara Labs realiza é fundamentado na
                execução do acordo (conforme o Art. 7º, V, da LGPD), formalizado entre a{" "}
                <strong>Capybara Labs</strong> e o{" "}
                <strong>
                  Serviço Social da Indústria (SESI - PI) – Departamento Regional do Piauí
                </strong>{" "}
                através do{" "}
                <strong>
                  Termo de Serviço, Licenciamento de Software como Serviço (SaaS) e Suporte
                </strong>
                .
              </p>
            </CardContent>
          </Card>

          {/* Seção 8: Compartilhamento de dados com sub-operadores e terceiros */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>8. Compartilhamento de dados com sub-operadores e terceiros</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                A <strong>Capybara Labs</strong> utiliza uma infraestrutura de sub-operadores e
                parceiros tecnológicos. O compartilhamento de dados ocorre apenas quando
                estritamente necessário e sob rigorosas obrigações de confidencialidade e segurança.
              </p>
              <p className="text-muted-foreground">
                <strong>8.1. </strong>Provedores de Modelos de Inteligência Artificial: A Plataforma
                se integra a múltiplos modelos de IA fornecidos por empresas líderes de mercado.
                Para transparência do Usuário, são listados abaixo os principais provedores e os
                links para suas respectivas políticas de privacidade, cuja leitura é recomendada:
              </p>
              <ul className="ml-6 list-inside list-disc space-y-2 text-muted-foreground">
                <li>OpenAI (Modelos GPT): https://openai.com/pt-BR/policies/privacy-policy/</li>
                <li>Google (Modelos Gemini): / https://policies.google.com/privacy</li>
                <li>Anthropic (Modelos Claude):</li>
              </ul>
              <p className="text-muted-foreground">
                <strong>8.1.1. Flexibilidade de Provedores:</strong> A{" "}
                <strong>Capybara Labs</strong> se reserva o direito de adicionar, substituir ou
                remover provedores de IA e de infraestrutura a seu exclusivo critério. Tais
                alterações serão comunicadas à Empresa Cliente. O uso continuado da Plataforma pelo
                Usuário após a implementação dessas alterações constituirá aceitação tácita da nova
                configuração de provedores.
              </p>
              <p className="text-muted-foreground">
                <strong>8.2. </strong>Provedores de Infraestrutura e Hospedagem: A Plataforma é
                hospedada em servidores virtuais privados (VPS) (como Amazon Web Services, Google
                Cloud, Microsoft Azure, etc.) localizados preferencialmente no Brasil.
              </p>
              <p className="text-muted-foreground">
                <strong>8.3. </strong>Autoridades Legais: A Capybara Labs poderá compartilhar dados
                pessoais se for obrigada por lei, regulamento, processo legal ou solicitação
                governamental válida, desde que devidamente documentada.
              </p>
              <p className="text-muted-foreground">
                <strong>8.4. </strong>Transferência Internacional de Dados: Embora a infraestrutura
                principal da Capybara Labs esteja localizada no Brasil, alguns de seus provedores de
                IA podem processar dados em servidores localizados em outros países. Nesses casos, a
                Capybara Labs adota as salvaguardas exigidas pela LGPD para garantir um nível de
                proteção de dados equivalente ao da legislação brasileira.
              </p>
            </CardContent>
          </Card>

          {/* Seção 9: Segurança dos Dados */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>9. Segurança dos Dados</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>9.1</strong>. <strong>Período de Retenção:</strong> Os dados pessoais serão
                retidos pelo tempo necessário para cumprir as finalidades descritas nesta Política,
                conforme as instruções da LICENCIADA e as obrigações legais. Em regra, os dados são
                mantidos pelo período indicado nos{" "}
                <strong>
                  Termos de Serviço, Licenciamento de Software como Serviço (SaaS) e Suporte
                </strong>
                , para permitir a exportação de dados pela LICENCIADA.
              </p>
              <p className="text-muted-foreground">
                <strong>9.2. </strong>Eliminação: Após o término do período de retenção, os dados
                serão eliminados de forma segura e irreversível, utilizando métodos que impeçam sua
                recuperação. A LICENCIADA é responsável por exportar quaisquer dados necessários
                antes do término do contrato.
              </p>
              <p className="text-muted-foreground">
                <strong>9.3.</strong> Canal Exclusivo com a Controladora: O exercício de todos os
                direitos previstos na LGPD pelos usuários finais deve ser dirigido exclusivamente à
                LICENCIADA (SESI-PI), através dos canais por ela definidos. A LICENCIANTE não terá
                qualquer obrigação de atender diretamente a solicitações de usuários finais e
                somente procederá com alterações, blocos ou exclusões de dados mediante instrução
                formal e escrita da LICENCIADA.
              </p>
              <p className="text-muted-foreground">
                A Capybara Labs trata a segurança dos dados com a máxima seriedade, implementando
                medidas técnicas e administrativas robustas para proteger os dados pessoais,
                incluindo criptografia, controle de acesso restrito, monitoramento contínuo e
                políticas internas de segurança.
              </p>
              <p className="text-muted-foreground">
                Em caso de incidente de segurança, a Capybara Labs comunicará ao{" "}
                <strong>SESI-PI</strong> e à Autoridade Nacional de Proteção de Dados (ANPD),
                conforme exigido pela LGPD.
              </p>
            </CardContent>
          </Card>

          {/* Seção 10: Direitos do Usuário como Titular de Dados e Como Exercê-los */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>10. Direitos do Usuário como Titular de Dados e Como Exercê-los</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Os usuários finais, como titulares de dados, possuem os seguintes direitos sob a
                LGPD:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  <strong>10.1. </strong>Confirmação e Acesso: Direito de confirmar a existência de
                  tratamento e acessar seus dados.
                </li>
                <li>
                  <strong>10.2. </strong>Correção: Direito de retificar dados incompletos, inexatos
                  ou desatualizados.
                </li>
                <li>
                  <strong>10.3. </strong>Anonimização, Bloqueio ou Eliminação: Direito de solicitar
                  a anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em
                  desconformidade com a LGPD.
                </li>
                <li>
                  <strong>10.4. </strong>Portabilidade: Direito à portabilidade dos dados a outro
                  fornecedor de serviço.
                </li>
                <li>
                  <strong>10.5. </strong>Eliminação do Consentimento: Direito de revogar o
                  consentimento, quando este for a base legal.
                </li>
                <li>
                  <strong>10.6. </strong>Informação sobre Compartilhamento: Direito a informações
                  sobre as entidades com as quais seus dados são compartilhados.
                </li>
                <li>
                  <strong>10.7. </strong>Não Discriminação: Direito de não ser discriminado por
                  exercer seus direitos.
                </li>
              </ul>
              <p className="text-muted-foreground">
                A LICENCIADA é a controladora responsável por atender a essas solicitações.
                Portanto, para exercer qualquer um dos seus direitos, o Usuário deve entrar em
                contato diretamente com o departamento responsável em sua empresa. A Capybara Labs
                fornecerá todo o suporte necessário à Empresa Cliente para que ela possa responder à
                solicitação do Usuário.
              </p>
            </CardContent>
          </Card>

          {/* Seção 11: Alterações a esta Política de Privacidade */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>11. Alterações a esta Política de Privacidade</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                A LICENCIANTE reserva-se o direito de modificar esta Política a qualquer momento,
                para refletir mudanças em práticas legais, regulatórias e/ou operacionais. As
                alterações serão comunicadas à LICENCIADA por e-mail ou através da Plataforma, e
                entrarão em vigor após 30 (trinta) dias da notificação. O uso continuado da
                Plataforma após as alterações constitui aceitação da nova Política. Recomenda-se que
                o Usuário revise esta página periodicamente.
              </p>
            </CardContent>
          </Card>

          {/* Seção 12: Disposições Gerais */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>12. Disposições Gerais</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>Lei Aplicável</strong>: Esta Política é regida pelas leis da República
                Federativa do Brasil, especialmente a LGPD.
              </p>
              <p className="text-muted-foreground">
                <strong>Foro</strong>: Qualquer disputa decorrente desta Política será resolvida no
                Foro da Comarca de Teresina/PI, com expressa renúncia a qualquer outro.
              </p>
              <p className="text-muted-foreground">
                <strong>Integralidade</strong>: Esta Política, juntamente com os Termos de Uso e o
                Contrato de Licenciamento, constitui o acordo integral entre as partes sobre
                privacidade de dados.
              </p>
              <p className="text-muted-foreground">
                <strong>Tolerância</strong>: A falha da LICENCIANTE em exercer qualquer direito
                desta Política não constituirá renúncia.
              </p>
            </CardContent>
          </Card>

          {/* Seção 13: Contato */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>13. Contato</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Caso o Usuário tenha alguma dúvida sobre como a Capybara Labs, na qualidade de
                Operadora, trata os dados pessoais, poderá entrar em contato com a Capybara Labs
                através do e-mail: suporte@capybaralabs.com.br.
              </p>
              <p className="text-muted-foreground">
                Para dúvidas sobre as decisões de tratamento ou para exercer seus direitos como
                titular, o Usuário deve contatar o seu departamento responsável na Empresa Cliente.
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
