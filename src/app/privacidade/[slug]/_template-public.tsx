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

export function PrivacidadeTemplatePublic({ client }: Props) {
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
                (I.S.) ("<strong>Capybara Labs</strong>"), inscrita no CNPJ sob o nº
                55.585.433/0001-48, com sede na Avenida Marechal Castelo Branco, 911, Torre 02, Sala
                920, Teresina - PI.
              </p>
              <p className="text-muted-foreground">
                Este documento descreve como a Capybara Labs, na qualidade de{" "}
                <strong>Controladora</strong> dos dados pessoais (art. 5º, VI, da Lei nº 13.709/2018
                — "<strong>LGPD</strong>"), trata as informações de pessoas naturais ("
                <strong>Usuário</strong>") que se cadastram diretamente na plataforma de software
                como serviço "{client.name}", acessível em labschat.ai ("
                <strong>Plataforma</strong>").
              </p>
              <p className="text-muted-foreground">
                Diferentemente de variantes corporativas ou de parcerias institucionais da{" "}
                {client.name}, nesta modalidade pública <strong>não há</strong> empresa cliente,
                instituição parceira ou qualquer intermediário entre o Usuário e a Capybara Labs. O
                Usuário contrata diretamente com a Capybara Labs mediante aceite dos Termos de Uso
                da Plataforma, e exerce seus direitos de titular diretamente junto à Capybara Labs.
              </p>
              <p className="text-muted-foreground">
                Esta Política observa a <strong>LGPD</strong>, o{" "}
                <strong>Marco Civil da Internet</strong> (Lei nº 12.965/2014) e, na relação de
                consumo entre o Usuário (pessoa natural) e a Capybara Labs (fornecedora), o{" "}
                <strong>Código de Defesa do Consumidor</strong> (Lei nº 8.078/1990 — "CDC").
              </p>
              <p className="text-muted-foreground">
                <strong>Requisito de elegibilidade.</strong> A Plataforma destina-se exclusivamente
                a pessoas <strong>maiores de 18 (dezoito) anos</strong>, plenamente capazes. Ao
                criar uma conta, o Usuário declara atender a esse requisito. A Capybara Labs poderá
                encerrar contas que descumpram essa exigência.
              </p>
              <p className="text-muted-foreground">
                Ao criar conta e utilizar a Plataforma, o Usuário declara ter lido e compreendido
                esta Política e os Termos de Uso. Caso não concorde, deve abster-se de utilizar a
                Plataforma.
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
                Para facilitar a leitura, seguem as definições relevantes, baseadas na LGPD:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  <strong>Dados Pessoais:</strong> qualquer informação relacionada a pessoa natural
                  identificada ou identificável (art. 5º, I, da LGPD).
                </li>
                <li>
                  <strong>Dados Sensíveis:</strong> dados sobre origem racial ou étnica, convicção
                  religiosa, opinião política, filiação sindical, saúde, vida sexual, dados
                  genéticos ou biométricos, nos termos do art. 5º, II, da LGPD.
                </li>
                <li>
                  <strong>Tratamento:</strong> toda operação realizada com dados pessoais, nos
                  termos do art. 5º, X, da LGPD.
                </li>
                <li>
                  <strong>Usuário:</strong> pessoa natural maior de idade que cria conta diretamente
                  na Plataforma e com ela interage.
                </li>
                <li>
                  <strong>Conta:</strong> credencial individual e intransferível de acesso do
                  Usuário à Plataforma.
                </li>
                <li>
                  <strong>Controladora:</strong> a <strong>Capybara Labs</strong>, a quem competem
                  as decisões sobre o tratamento dos dados pessoais dos Usuários (art. 5º, VI, da
                  LGPD).
                </li>
                <li>
                  <strong>Operadores / Sub-operadores:</strong> terceiros que realizam tratamento em
                  nome da Capybara Labs, sob contrato e instruções formais (art. 5º, VII, da LGPD).
                </li>
                <li>
                  <strong>Conteúdo das Interações:</strong> prompts, perguntas, comandos, textos,
                  imagens, arquivos e demais dados inseridos pelo Usuário, bem como as saídas
                  geradas pelos modelos de Inteligência Artificial integrados à Plataforma.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Seção 3: Capybara Labs como Controladora */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>3. Capybara Labs como Controladora</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>3.1.</strong> Nesta Plataforma pública, a <strong>Capybara Labs</strong> é a{" "}
                <strong>Controladora</strong> dos dados pessoais dos Usuários, nos termos do art.
                5º, VI, da LGPD. Cabe à Capybara Labs definir as finalidades e os meios do
                tratamento, manter base legal adequada, zelar pela segurança dos dados e atender às
                requisições dos titulares.
              </p>
              <p className="text-muted-foreground">
                <strong>3.2. Ausência de intermediário.</strong> Não há empresa cliente, instituição
                parceira, empregadora ou órgão intermediário entre o Usuário e a Capybara Labs. A
                relação contratual do Usuário é estabelecida diretamente com a Capybara Labs pelo
                aceite dos Termos de Uso da Plataforma.
              </p>
              <p className="text-muted-foreground">
                <strong>3.3. Relação de consumo.</strong> A relação entre o Usuário e a Capybara
                Labs configura relação de consumo, aplicando-se, no que couber, o{" "}
                <strong>CDC</strong> em conjunto com a LGPD.
              </p>
              <p className="text-muted-foreground">
                <strong>3.4. Responsabilidade.</strong> A Capybara Labs responde pelos danos
                decorrentes do tratamento de dados nos termos do art. 42 da LGPD e, quanto à relação
                de consumo, nos termos do CDC.
              </p>
            </CardContent>
          </Card>

          {/* Seção 4: Dados que processamos */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>4. Dados que processamos</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Para viabilizar o funcionamento da Plataforma, a Capybara Labs trata as seguintes
                categorias de dados:
              </p>
              <p className="text-muted-foreground">
                <strong>4.1. Dados de Cadastro e Autenticação:</strong> nome, endereço de e-mail,
                credenciais de acesso e, quando aplicável, dados de cobrança necessários à
                contratação de planos pagos.
              </p>
              <p className="text-muted-foreground">
                <strong>4.2. Conteúdo das Interações com a IA:</strong>
              </p>
              <ul className="ml-6 list-inside list-disc space-y-2 text-muted-foreground">
                <li>prompts, perguntas, comandos ou instruções inseridos pelo Usuário;</li>
                <li>arquivos e imagens eventualmente anexados pelo Usuário;</li>
                <li>respostas, saídas e conteúdos gerados pelos modelos de IA integrados;</li>
                <li>
                  metadados das interações (data/hora, identificador de sessão, modelo utilizado,
                  contagem de tokens).
                </li>
              </ul>
              <p className="text-muted-foreground">
                <strong>Atenção.</strong> O Usuário deve evitar inserir na Plataforma Dados
                Sensíveis, dados de terceiros sem autorização ou informações confidenciais cuja
                divulgação a provedores de IA terceiros não seja apropriada.
              </p>
              <p className="text-muted-foreground">
                <strong>4.3. Dados de Moderação:</strong> resultados das análises automatizadas
                descritas na Seção 7, incluindo categorias acionadas, pontuações e decisões
                (bloqueio, limitação, banimento).
              </p>
              <p className="text-muted-foreground">
                <strong>4.4. Dados Técnicos e de Uso (Logs):</strong> tipo de dispositivo, sistema
                operacional, navegador, endereço IP, identificadores técnicos, logs de acesso,
                relatórios de erros e métricas de desempenho, utilizados para segurança,
                diagnóstico, faturamento e para cumprimento da obrigação legal de guarda de
                registros de acesso (art. 15 do Marco Civil da Internet).
              </p>
            </CardContent>
          </Card>

          {/* Seção 5: Finalidades do tratamento */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>5. Finalidades do tratamento</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Os dados pessoais do Usuário são tratados estritamente para as seguintes
                finalidades:
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>5.1. Prestação e operação da Plataforma:</strong>
                </p>
                <ul className="ml-6 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>disponibilizar, operar e manter a Plataforma {client.name};</li>
                  <li>autenticar o Usuário e gerenciar seu acesso;</li>
                  <li>processar interações com modelos de IA e entregar respostas;</li>
                  <li>oferecer suporte técnico e responder a solicitações;</li>
                  <li>faturar e cobrar planos contratados, quando aplicável.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>5.2. Segurança, prevenção de fraude e integridade:</strong>
                </p>
                <ul className="ml-6 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>executar a moderação automatizada descrita na Seção 7 e detectar abusos;</li>
                  <li>proteger a Plataforma contra acessos não autorizados e fraudes;</li>
                  <li>
                    investigar violações aos Termos de Uso e aplicar medidas cabíveis (limitação de
                    taxa, suspensão, banimento).
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>5.3. Cumprimento de obrigações legais:</strong>
                </p>
                <ul className="ml-6 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>
                    guarda de registros de acesso nos termos do art. 15 do Marco Civil da Internet;
                  </li>
                  <li>
                    atendimento a requisições de autoridades públicas legítimas e a obrigações
                    fiscais, contábeis e regulatórias.
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>5.4. Comunicações:</strong>
                </p>
                <ul className="ml-6 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>
                    envio de notificações operacionais essenciais (manutenção, segurança, alterações
                    de serviço);
                  </li>
                  <li>
                    envio de comunicações de marketing apenas mediante consentimento prévio do
                    Usuário (opt-in), com possibilidade de revogação a qualquer momento (opt-out).
                  </li>
                </ul>
              </div>
              <p className="text-muted-foreground">
                <strong>5.5. Vedação de uso para treinamento de modelos de IA.</strong> A Capybara
                Labs <strong>não utiliza</strong> o Conteúdo das Interações nem os Dados Pessoais
                dos Usuários para treinar ou aprimorar modelos de IA próprios e, contratualmente,
                reforça essa vedação junto aos sub-operadores sempre que disponível (Seção 8).
              </p>
            </CardContent>
          </Card>

          {/* Seção 6: Base legal */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>6. Base legal para o tratamento</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                O tratamento de dados pessoais pela Capybara Labs, na qualidade de Controladora,
                fundamenta-se nas seguintes hipóteses da LGPD:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li>
                  <strong>6.1.</strong> <strong>Execução de contrato</strong> (art. 7º, V, da LGPD):
                  para operação da Plataforma, autenticação, processamento das interações com IA,
                  suporte e faturamento, em cumprimento aos Termos de Uso aceitos pelo Usuário.
                </li>
                <li>
                  <strong>6.2.</strong> <strong>Consentimento</strong> (art. 7º, I, da LGPD): para
                  comunicações de marketing e outras finalidades específicas que extrapolem a
                  execução do contrato, com possibilidade de revogação a qualquer momento.
                </li>
                <li>
                  <strong>6.3.</strong> <strong>Legítimo interesse</strong> (art. 7º, IX, da LGPD):
                  para segurança da Plataforma, prevenção de fraude, detecção de abusos e moderação
                  automatizada, observado o teste de proporcionalidade entre os interesses da
                  Capybara Labs e os direitos dos Usuários.
                </li>
                <li>
                  <strong>6.4.</strong>{" "}
                  <strong>Cumprimento de obrigação legal ou regulatória</strong> (art. 7º, II, da
                  LGPD): em especial a guarda de registros de acesso a aplicações de internet (art.
                  15 do Marco Civil da Internet) e obrigações fiscais e contábeis.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Seção 7: Moderação Automatizada */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>7. Moderação automatizada</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Para preservar a integridade da Plataforma e proteger os Usuários, a Capybara Labs
                aplica mecanismos automatizados de moderação, com os seguintes parâmetros:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li>
                  <strong>7.1. Moderação de texto via OpenAI Moderation API:</strong> cada mensagem
                  textual enviada pelo Usuário (prompt) é previamente avaliada pela{" "}
                  <em>OpenAI Moderation API</em> — independentemente do provedor de IA selecionado
                  para a resposta — para identificar e bloquear conteúdos enquadrados em categorias
                  como conteúdo sexual, autoagressão, discurso de ódio, assédio e violência.
                </li>
                <li>
                  <strong>7.2. Limitação de taxa e banimento automático:</strong> Usuários que
                  violem reiteradamente a Política de Uso Aceitável podem ter sua taxa de uso
                  restringida e, em caso de abuso, ter a conta suspensa ou banida automaticamente.
                </li>
                <li>
                  <strong>7.3. Catálogo de modelos restrito:</strong> a lista de modelos de IA
                  disponibilizada aos Usuários é previamente definida pela Capybara Labs, sendo
                  vedada a habilitação autônoma de modelos pelo Usuário.
                </li>
                <li>
                  <strong>7.4. Limitações atuais de escopo (transparência).</strong> Na presente
                  data, a moderação automatizada <strong>não abrange</strong> a análise de{" "}
                  <strong>imagens enviadas pelo Usuário</strong> nem das{" "}
                  <strong>saídas geradas pelos modelos de IA</strong>. A Capybara Labs trabalha para
                  ampliar o escopo dos filtros e quaisquer alterações relevantes serão refletidas
                  nesta Política.
                </li>
                <li>
                  <strong>7.5. Dados gerados pela moderação.</strong> Resultados da moderação
                  (categorias acionadas, pontuações e decisões) são registrados como metadados
                  associados à conta e utilizados exclusivamente para as finalidades descritas nesta
                  Política.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Seção 8: Compartilhamento */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>8. Compartilhamento com sub-operadores e terceiros</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                A Capybara Labs utiliza sub-operadores estritamente necessários à prestação do
                serviço, sob obrigações contratuais de confidencialidade, segurança e{" "}
                <strong>
                  vedação de uso dos dados dos Usuários para treinamento de modelos de IA
                </strong>{" "}
                sempre que o provedor disponibilizar tal compromisso.
              </p>
              <p className="text-muted-foreground">
                <strong>8.1. Provedores de Modelos de Inteligência Artificial.</strong> A Plataforma
                integra-se a modelos de IA fornecidos por terceiros. Para transparência do Usuário,
                listam-se os principais provedores e os links para suas respectivas políticas de
                privacidade:
              </p>
              <ul className="ml-6 list-inside list-disc space-y-2 text-muted-foreground">
                <li>OpenAI (modelos GPT): https://openai.com/pt-BR/policies/privacy-policy</li>
                <li>Google (modelos Gemini): https://ai.google.dev/gemini-api/terms</li>
                <li>Anthropic (modelos Claude): https://www.anthropic.com/legal/privacy</li>
              </ul>
              <p className="text-muted-foreground">
                Sempre que disponíveis, a Capybara Labs contrata políticas de{" "}
                <em>Zero Retention</em> ou equivalentes em planos <em>Enterprise</em>, reforçando a
                vedação de uso dos dados dos Usuários para treinamento de modelos.
              </p>
              <p className="text-muted-foreground">
                <strong>8.2. Provedores de Infraestrutura e Hospedagem.</strong> A Plataforma é
                hospedada em servidores virtuais privados (VPS), localizados preferencialmente em
                território brasileiro, fornecidos por provedores como Amazon Web Services, Google
                Cloud, Microsoft Azure, DigitalOcean ou Hetzner, conforme o caso.
              </p>
              <p className="text-muted-foreground">
                {/*
                  REVISAR: a comunicação prévia de mudanças no rol de sub-operadores não é
                  exigência expressa da LGPD para Controlador (diferente da relação
                  Controlador-Operador do B2B). Mantida como boa prática de transparência;
                  advogado pode preferir cláusula mais enxuta.
                */}
                <strong>8.3. Alterações no rol de sub-operadores.</strong> A Capybara Labs poderá
                adicionar, substituir ou remover sub-operadores a seu critério, buscando manter ou
                elevar o nível de proteção dos dados. Alterações substanciais serão refletidas nesta
                Política.
              </p>
              <p className="text-muted-foreground">
                <strong>8.4. Autoridades públicas.</strong> Dados poderão ser compartilhados quando
                exigidos por lei, regulamento, processo legal ou requisição de autoridade
                competente, observados os limites legais e, quando cabível, o dever de notificação
                do Usuário.
              </p>
              <p className="text-muted-foreground">
                <strong>8.5. Transferência Internacional.</strong> A inferência pelos modelos de IA
                e a hospedagem podem ocorrer, em parte, em servidores localizados no exterior. A
                Capybara Labs adota as salvaguardas exigidas pelos arts. 33 a 36 da LGPD, de modo a
                assegurar nível de proteção de dados equivalente ao da legislação brasileira.
              </p>
            </CardContent>
          </Card>

          {/* Seção 9: Segurança e Retenção */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>9. Segurança dos Dados e Retenção</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>9.1. Medidas de segurança.</strong> A Capybara Labs adota medidas técnicas e
                administrativas aptas a proteger os dados pessoais (art. 46 da LGPD), incluindo
                criptografia em trânsito (TLS) e em repouso, controle de acesso sob o princípio do
                menor privilégio, logs de auditoria, monitoramento contínuo e políticas internas de
                segurança da informação.
              </p>
              <p className="text-muted-foreground">
                <strong>9.2. Retenção.</strong> Os dados pessoais do Usuário são retidos{" "}
                <strong>enquanto a conta estiver ativa</strong>. Ao encerramento da conta, seja pelo
                próprio Usuário, seja pela Capybara Labs nas hipóteses previstas nos Termos de Uso,
                os dados são <strong>eliminados em prazo razoável</strong>, ressalvadas as hipóteses
                legais de retenção mínima — notadamente a guarda de registros de acesso a aplicações
                de internet prevista no art. 15 do Marco Civil da Internet e as obrigações fiscais e
                contábeis aplicáveis.
              </p>
              <p className="text-muted-foreground">
                <strong>9.3. Incidentes de segurança.</strong> Em caso de incidente que possa
                acarretar risco ou dano relevante aos Usuários, a Capybara Labs notificará a
                Autoridade Nacional de Proteção de Dados (ANPD) e os titulares afetados, nos termos
                do art. 48 da LGPD.
              </p>
            </CardContent>
          </Card>

          {/* Seção 10: Direitos do Titular */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>10. Direitos do Titular</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Como Controladora direta dos dados, a Capybara Labs atende às requisições dos
                titulares sem intermediários. O Usuário, na qualidade de titular, possui os direitos
                assegurados pelo <strong>art. 18 da LGPD</strong>, especialmente:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li>
                  <strong>10.1.</strong> confirmação da existência de tratamento e acesso aos dados;
                </li>
                <li>
                  <strong>10.2.</strong> correção de dados incompletos, inexatos ou desatualizados;
                </li>
                <li>
                  <strong>10.3.</strong> anonimização, bloqueio ou eliminação de dados
                  desnecessários, excessivos ou tratados em desconformidade com a LGPD;
                </li>
                <li>
                  <strong>10.4.</strong> portabilidade dos dados a outro fornecedor, observados os
                  regulamentos da ANPD;
                </li>
                <li>
                  <strong>10.5.</strong> eliminação dos dados pessoais tratados com base no
                  consentimento, ressalvadas as hipóteses do art. 16 da LGPD;
                </li>
                <li>
                  <strong>10.6.</strong> revogação do consentimento a qualquer momento, nos termos
                  do art. 8º, §5º, da LGPD;
                </li>
                <li>
                  <strong>10.7.</strong> informação sobre entidades públicas e privadas com as quais
                  a Capybara Labs realiza uso compartilhado de dados;
                </li>
                <li>
                  <strong>10.8.</strong> não discriminação em razão do exercício de direitos.
                </li>
              </ul>
              <p className="text-muted-foreground">
                <strong>10.9. Canal de atendimento.</strong> As solicitações devem ser dirigidas
                diretamente à Capybara Labs pelo e-mail <strong>suporte@capybaralabs.com.br</strong>
                , com resposta nos prazos do art. 19 da LGPD.
              </p>
            </CardContent>
          </Card>

          {/* Seção 11: Alterações */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle>
                  <strong>11. Alterações a esta Política</strong>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              {/*
                REVISAR: a redação abaixo abandona a fórmula "uso continuado = aceitação tácita" em
                favor de notificação prévia e direito de recusa, mais compatível com CDC e LGPD para
                alterações materiais de política de privacidade em relação de consumo. Advogado pode
                ajustar prazos (15/30/60 dias) conforme apetite de risco.
              */}
              <p className="text-muted-foreground">
                <strong>11.1.</strong> A Capybara Labs poderá alterar esta Política para refletir
                mudanças legais, regulatórias, tecnológicas ou operacionais. Alterações meramente
                formais ou que não afetem materialmente os direitos dos Usuários poderão entrar em
                vigor na data de publicação.
              </p>
              <p className="text-muted-foreground">
                <strong>11.2. Alterações materiais.</strong> Alterações que ampliem as finalidades
                do tratamento, alterem bases legais, modifiquem significativamente o rol de
                sub-operadores que recebem dados, reduzam o nível de proteção dos dados ou afetem
                substancialmente os direitos dos Usuários serão comunicadas com{" "}
                <strong>antecedência mínima de 30 (trinta) dias</strong> da entrada em vigor, por
                e-mail ao endereço cadastrado e por aviso na Plataforma.
              </p>
              <p className="text-muted-foreground">
                <strong>11.3. Direito de recusa.</strong> O Usuário que não concordar com as
                alterações materiais poderá, durante o prazo de antecedência referido no item 11.2,
                encerrar sua conta sem ônus e solicitar a eliminação dos dados nos termos da Seção
                10, observadas as hipóteses legais de retenção mínima.
              </p>
              <p className="text-muted-foreground">
                <strong>11.4.</strong> O uso continuado da Plataforma <strong>não</strong> é tratado
                como aceitação tácita de alterações materiais; estas dependem de notificação prévia
                efetiva na forma do item 11.2.
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
                <strong>12.1. Lei Aplicável.</strong> Esta Política é regida pelas leis da República
                Federativa do Brasil, em especial a LGPD, o Marco Civil da Internet e, na relação de
                consumo, o CDC.
              </p>
              {/*
                REVISAR: foro eleito contra consumidor é frequentemente afastado (CDC art. 101, I;
                CPC art. 63, §3º). Redação abaixo restringe o foro de Teresina/PI a controvérsias
                entre partes empresariais e ressalva expressamente a competência legal para demandas
                do Usuário-consumidor (em regra, domicílio do consumidor).
              */}
              <p className="text-muted-foreground">
                <strong>12.2. Foro.</strong> Eventuais controvérsias entre a Capybara Labs e outras
                pessoas jurídicas decorrentes desta Política serão resolvidas no Foro da Comarca de
                Teresina/PI. Ressalva-se, em favor do Usuário-consumidor (pessoa natural), a
                competência legal aplicável, notadamente o foro do seu domicílio, nos termos do art.
                101, I, do CDC e do art. 63, §3º, do CPC.
              </p>
              {/*
                REVISAR: cláusula de limitação de responsabilidade intencionalmente sem teto
                numérico e com ressalva expressa aos direitos indisponíveis do consumidor e à
                responsabilidade por dolo e culpa grave. Um teto numérico genérico em relação de
                consumo tende a ser considerado abusivo (CDC art. 51, I).
              */}
              <p className="text-muted-foreground">
                <strong>12.3. Limitação de responsabilidade.</strong> Sem prejuízo das normas
                cogentes do CDC e da LGPD, a Capybara Labs responde pelos danos diretos efetivamente
                comprovados decorrentes do tratamento de dados. Não são afastadas, sob nenhuma
                hipótese, a responsabilidade por dolo ou culpa grave, nem os direitos indisponíveis
                assegurados ao Usuário-consumidor.
              </p>
              <p className="text-muted-foreground">
                <strong>12.4. Integralidade.</strong> Esta Política, em conjunto com os Termos de
                Uso da Plataforma, constitui o acordo integral entre a Capybara Labs e o Usuário
                sobre privacidade de dados na Plataforma.
              </p>
              <p className="text-muted-foreground">
                <strong>12.5. Tolerância.</strong> A falha da Capybara Labs em exercer qualquer
                direito previsto nesta Política não constituirá renúncia a esse direito.
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
                Para dúvidas sobre esta Política, para o exercício dos direitos previstos na LGPD ou
                para qualquer outra questão relativa ao tratamento de seus dados pessoais, o Usuário
                pode contatar a Capybara Labs pelo e-mail{" "}
                <strong>suporte@capybaralabs.com.br</strong>.
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
