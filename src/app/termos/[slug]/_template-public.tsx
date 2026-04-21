import {
  AlertTriangle,
  Bookmark,
  Calendar,
  CheckCircle,
  CreditCard,
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

export function TermosTemplatePublic({ client }: Props) {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Plataforma {client.productName}</Badge>
              <Badge variant="outline">{client.shortName}</Badge>
              <Badge variant="outline">Acesso Público</Badge>
            </div>
            <h1 className="font-bold text-4xl tracking-tight">
              Termos de Uso da Plataforma {client.name}
            </h1>
            <p className="text-muted-foreground text-sm">
              Última atualização: {client.lastUpdatedLegal}.
            </p>
          </div>

          <Separator />

          {/* Seção 1: Aceite dos Termos e Elegibilidade */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bookmark className="h-5 w-5 text-primary" />
                <CardTitle>1. Aceite dos Termos e Elegibilidade</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Bem-vindo(a) à Plataforma {client.name}, fornecida pela{" "}
                <strong>Capybara Labs Inova Simples (I.S.)</strong> ("Capybara Labs"), acessível em{" "}
                <strong>labschat.ai</strong>.
              </p>
              <p className="text-muted-foreground">
                Estes Termos de Uso ("Termos") constituem um contrato vinculante celebrado{" "}
                <strong>diretamente</strong> entre o Usuário final ("Usuário") e a Capybara Labs,
                regendo o acesso e o uso da Plataforma. Não há intermediação por empresa empregadora
                ou instituição contratante — o Usuário é cliente direto da Capybara Labs.
              </p>
              <p className="text-muted-foreground">
                <strong>1.1. Elegibilidade.</strong> O uso da Plataforma é restrito a pessoas
                naturais <strong>maiores de 18 (dezoito) anos</strong>, com plena capacidade civil.
                Ao aceitar estes Termos, o Usuário declara preencher tais requisitos.
              </p>
              <p className="text-muted-foreground">
                <strong>1.2. Relação de consumo.</strong> A relação entre o Usuário e a Capybara
                Labs caracteriza relação de consumo, regida pelo{" "}
                <strong>Código de Defesa do Consumidor</strong> (Lei nº 8.078/1990), pela{" "}
                <strong>Lei Geral de Proteção de Dados</strong> (Lei nº 13.709/2018 — "LGPD"), pelo{" "}
                <strong>Marco Civil da Internet</strong> (Lei nº 12.965/2014) e pelas demais normas
                aplicáveis.
              </p>
              <p className="text-muted-foreground">
                AO CADASTRAR-SE OU UTILIZAR A PLATAFORMA, O USUÁRIO DECLARA QUE LEU, COMPREENDEU E
                CONCORDA INTEGRALMENTE COM ESTES TERMOS E COM A POLÍTICA DE PRIVACIDADE. CASO NÃO
                CONCORDE COM QUALQUER DISPOSIÇÃO, O USUÁRIO NÃO DEVE UTILIZAR A PLATAFORMA.
              </p>
            </CardContent>
          </Card>

          {/* Seção 2: Conta de Usuário */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <CardTitle>2. Conta de Usuário</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>2.1. Cadastro.</strong> Para utilizar a Plataforma, o Usuário deverá criar
                uma conta fornecendo informações verdadeiras, completas e atualizadas. O Usuário é
                responsável por manter tais informações precisas ao longo do tempo.
              </p>
              <p className="text-muted-foreground">
                <strong>2.2. Credenciais.</strong> O Usuário é integralmente responsável pela
                confidencialidade de suas credenciais de acesso (login, senha e eventuais segundos
                fatores) e por todas as atividades realizadas em sua conta. A conta é pessoal e
                intransferível.
              </p>
              <p className="text-muted-foreground">
                <strong>2.3. Notificação de incidentes.</strong> O Usuário deve comunicar à Capybara
                Labs, sem demora, qualquer uso não autorizado da conta ou incidente de segurança de
                que tome conhecimento.
              </p>
              <p className="text-muted-foreground">
                <strong>2.4. Encerramento pelo Usuário.</strong> O Usuário pode encerrar sua conta a
                qualquer tempo pelos canais disponibilizados na própria Plataforma, observado o
                disposto na Seção 12 e na Política de Privacidade quanto à retenção e exclusão de
                dados.
              </p>
            </CardContent>
          </Card>

          {/* Seção 3: Descrição do Serviço */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <CardTitle>3. Descrição do Serviço</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>3.1. Objeto.</strong> A Plataforma {client.name} é uma solução de chat
                baseada em modelos de linguagem de larga escala (LLMs) e outros modelos de
                Inteligência Artificial, que permite ao Usuário interagir com tais modelos por meio
                de prompts textuais e, quando disponível, envio de arquivos e imagens.
              </p>
              <p className="text-muted-foreground">
                <strong>3.2. Modalidades.</strong> A Plataforma poderá ser oferecida em{" "}
                <strong>modalidade gratuita</strong> e/ou em <strong>modalidades pagas</strong> (com
                diferentes limites de uso, modelos disponíveis e recursos). As condições comerciais
                específicas — incluindo preços, limites, ciclos de cobrança e recursos — são
                apresentadas no momento da contratação, na área de planos da Plataforma, e integram
                estes Termos por referência.
              </p>
              <p className="text-muted-foreground">
                <strong>3.3. Evolução do serviço.</strong> A Capybara Labs poderá adicionar,
                modificar ou descontinuar recursos, modelos de IA e integrações ao longo do tempo,
                observadas as comunicações previstas na Seção 13.
              </p>
            </CardContent>
          </Card>

          {/* Seção 4: Concessão de Licença */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <CardTitle>4. Concessão de Licença</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>4.1. Licença de uso.</strong> Observados estes Termos e, quando aplicável, o
                pagamento das contraprestações devidas, a Capybara Labs concede ao Usuário uma{" "}
                <strong>
                  licença limitada, pessoal, não exclusiva, intransferível e revogável
                </strong>{" "}
                para acessar e utilizar a Plataforma, para fins pessoais ou profissionais lícitos.
              </p>
              <p className="text-muted-foreground">
                <strong>4.2. Ausência de transferência de propriedade.</strong> A licença não
                transfere ao Usuário qualquer direito de propriedade sobre a Plataforma, seus
                códigos, marcas, interfaces, layouts, documentação ou qualquer elemento a ela
                associado, que permanecem de titularidade exclusiva da Capybara Labs ou de seus
                licenciadores.
              </p>
            </CardContent>
          </Card>

          {/* Seção 5: Conduta do Usuário e Uso Proibido */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <CardTitle>5. Conduta do Usuário e Uso Proibido</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                O Usuário compromete-se a utilizar a Plataforma de forma lícita, responsável e
                compatível com estes Termos. É vedado, em especial:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li>
                  <strong>5.1.</strong> Utilizar a Plataforma para gerar, solicitar, armazenar ou
                  compartilhar conteúdo ilícito, incluindo — sem limitação —{" "}
                  <strong>material de abuso ou exploração sexual de crianças e adolescentes</strong>{" "}
                  e instruções para a prática de crimes;
                </li>
                <li>
                  <strong>5.2.</strong> Produzir ou disseminar discurso de ódio, assédio, ameaças,
                  incitação à violência ou conteúdo que promova autoagressão ou suicídio;
                </li>
                <li>
                  <strong>5.3.</strong> Praticar fraude, <em>phishing</em>, disseminação de{" "}
                  <em>malware</em>, engenharia reversa, descompilação ou tentativa de obter acesso
                  não autorizado a sistemas, contas ou dados;
                </li>
                <li>
                  <strong>5.4.</strong> Realizar uso automatizado não autorizado, raspagem ou
                  extração massiva de dados, ou revender, sublicenciar ou redistribuir o acesso à
                  Plataforma a terceiros (<em>reseller</em> não autorizado);
                </li>
                <li>
                  <strong>5.5.</strong> Tentar burlar, desativar ou interferir nos controles de uso
                  aceitável, na limitação de taxa, na autenticação, nas salvaguardas de segurança
                  dos provedores de IA ou em qualquer outro mecanismo de segurança da Plataforma;
                </li>
                <li>
                  <strong>5.6.</strong> Violar direitos de terceiros, incluindo direitos autorais,
                  marcários, de imagem, de privacidade ou de segredo comercial;
                </li>
                <li>
                  <strong>5.7.</strong> Utilizar a Plataforma para desenvolver produto ou serviço
                  concorrente, ou para treinar modelos de IA de terceiros a partir das saídas da
                  Plataforma.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Seção 6: Salvaguardas de Segurança e Controles de Uso Aceitável */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>
                  6. Salvaguardas de Segurança dos Provedores de IA e Controles de Uso Aceitável
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>6.1. Salvaguardas de segurança dos provedores de IA.</strong> Os modelos de
                IA integrados à Plataforma são operados por provedores terceiros (como OpenAI,
                Anthropic e Google). Cada provedor aplica, no âmbito de seus próprios serviços,
                políticas de uso e filtros de segurança proprietários. Requisições enviadas aos
                provedores estão sujeitas a tais políticas, podendo ser recusadas diretamente pelo
                provedor quando contrariarem suas regras. Ao utilizar a Plataforma, o Usuário
                reconhece estar vinculado, por meio da Capybara Labs, às políticas de uso dos
                provedores de IA acionados.
              </p>
              <p className="text-muted-foreground">
                <strong>6.2. Ausência de camada própria de moderação de conteúdo.</strong> Para fins
                de transparência, a Capybara Labs <strong>não opera</strong> uma camada própria de
                análise semântica sobre os prompts enviados pelo Usuário nem sobre as saídas
                geradas. A avaliação de conteúdo, quando ocorre, é de responsabilidade dos
                provedores de IA referidos no item 6.1.
              </p>
              <p className="text-muted-foreground">
                <strong>6.3. Catálogo restrito de modelos.</strong> O catálogo de modelos de IA
                disponível é previamente definido pela Capybara Labs. O Usuário não pode habilitar
                modelos autônomos, conectar modelos externos não autorizados ou executar agentes com
                permissões estendidas por conta própria.
              </p>
              <p className="text-muted-foreground">
                <strong>6.4. Controles de uso aceitável (comportamentais).</strong> A Capybara Labs
                aplica controles automatizados baseados em <strong>volume e padrões de uso</strong>{" "}
                — independentes do conteúdo das mensagens — incluindo limitação de taxa (
                <em>rate limit</em>) e suspensão ou banimento automático de contas com indícios de
                abuso ou violação reiterada destes Termos. Tais controles{" "}
                <strong>não constituem moderação de conteúdo</strong>.
              </p>
              <p className="text-muted-foreground">
                <strong>6.5. Conduta do Usuário.</strong> O conteúdo inserido pelo Usuário permanece
                de sua responsabilidade e está sujeito à cláusula de conduta da Seção 5 e às
                políticas dos provedores de IA, sem prejuízo das medidas previstas na Seção 12.
              </p>
            </CardContent>
          </Card>

          {/* Seção 7: Conteúdo do Usuário e Propriedade Intelectual */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <CardTitle>7. Conteúdo do Usuário e Propriedade Intelectual</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>7.1. Titularidade do Usuário.</strong> O Usuário mantém a{" "}
                <strong>titularidade</strong> sobre os prompts que envia e sobre os outputs gerados
                pelos modelos de IA em sua conta, observadas as limitações inerentes a conteúdos
                produzidos por IA e os direitos de terceiros aplicáveis. A Capybara Labs{" "}
                <strong>não reivindica</strong> direitos de propriedade intelectual sobre tal
                conteúdo.
              </p>
              <p className="text-muted-foreground">
                <strong>7.2. Licença operacional.</strong> O Usuário concede à Capybara Labs e aos
                operadores/suboperadores estritamente necessários (incluindo provedores de
                infraestrutura e LLM Providers) uma licença gratuita, limitada, mundial e revogável
                para tratar o conteúdo inserido <strong>apenas e tão somente</strong> com o
                propósito de prestar o serviço, operar a Plataforma, garantir segurança e aplicar os
                controles de uso aceitável descritos na Seção 6, bem como cumprir obrigações legais
                aplicáveis.
              </p>
              <p className="text-muted-foreground">
                <strong>7.3. Vedação ao uso para treinamento de IA.</strong> É{" "}
                <strong>expressamente vedado</strong> o uso do conteúdo do Usuário (prompts,
                arquivos, imagens e outputs) para treinamento, ajuste fino ou avaliação de modelos
                de Inteligência Artificial, seja pela Capybara Labs, seja por quaisquer
                sub-operadores ou terceiros. Esta vedação é reforçada contratualmente junto aos
                sub-operadores utilizados na prestação do serviço.
              </p>
              <p className="text-muted-foreground">
                <strong>7.4. Propriedade da Plataforma.</strong> A Plataforma, incluindo software,
                código-fonte, design, interface, marcas e documentação, permanece de propriedade
                exclusiva da Capybara Labs ou de seus licenciadores.
              </p>
            </CardContent>
          </Card>

          {/* Seção 8: Componentes de Terceiros e Código Aberto */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <CardTitle>8. Componentes de Terceiros e Código Aberto</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>8.1.</strong> A Plataforma utiliza componentes de software de terceiros e de
                código aberto, regidos por suas respectivas licenças. Em particular, a Plataforma
                utiliza, entre outros, componentes do projeto <strong>LibreChat</strong>,
                distribuído sob a licença MIT.
              </p>
              <p className="text-muted-foreground">
                <strong>8.2.</strong> O Usuário reconhece que o cumprimento dos termos das licenças
                de terceiros integra o uso regular da Plataforma e compromete-se a observar tais
                termos quando aplicáveis.
              </p>
              <p className="text-muted-foreground">
                <strong>8.3.</strong> Na máxima extensão permitida pela lei, quaisquer softwares de
                terceiros são fornecidos <em>"no estado em que se encontram"</em>, sem garantias
                adicionais por parte da Capybara Labs, ressalvadas as garantias legais aplicáveis à
                prestação do serviço ao Usuário-consumidor.
              </p>
            </CardContent>
          </Card>

          {/* Seção 9: Pagamentos, Assinaturas e Cancelamento */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                <CardTitle>9. Pagamentos, Assinaturas e Cancelamento</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>9.1. Planos pagos.</strong> Caso o Usuário contrate uma modalidade paga, os
                preços, ciclos de cobrança (mensal, anual ou outro), limites de uso e demais
                condições comerciais serão apresentados de forma clara e prévia no momento da
                contratação, observada a transparência exigida pelo Código de Defesa do Consumidor.
              </p>
              <p className="text-muted-foreground">
                <strong>9.2. Renovação automática.</strong> Quando o plano contratado previr
                renovação automática, tal fato será informado de forma destacada, bem como a forma
                de desativá-la antes do próximo ciclo.
              </p>
              <p className="text-muted-foreground">
                <strong>9.3. Cancelamento pelo Usuário.</strong> O Usuário pode{" "}
                <strong>cancelar</strong> sua assinatura ou a conta a qualquer tempo, pelos canais
                disponibilizados na Plataforma, sem necessidade de justificativa, observado o
                direito de arrependimento previsto no art. 49 do CDC quando aplicável.
              </p>
              <p className="text-muted-foreground">
                <strong>9.4. Reajustes.</strong> Eventuais reajustes de preços respeitarão a
                periodicidade mínima prevista em lei e serão comunicados com antecedência razoável,
                facultando ao Usuário cancelar o plano antes da vigência do novo valor, sem ônus
                adicional.
                {/* REVISAR: confirmar política comercial de reajustes (índice, gatilho, antecedência) com o time de Planos antes de publicar. */}
              </p>
              <p className="text-muted-foreground">
                <strong>9.5. Inadimplência.</strong> Em caso de inadimplência, o acesso a recursos
                pagos poderá ser suspenso após comunicação ao Usuário, preservado o acesso mínimo
                necessário à exportação de seus dados, nos termos da Política de Privacidade.
              </p>
            </CardContent>
          </Card>

          {/* Seção 10: Isenção de Garantias */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <CardTitle>10. Isenção de Garantias</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>10.1. Natureza probabilística da IA.</strong> Os resultados gerados pelos
                modelos de IA são <strong>aproximados</strong> e podem conter imprecisões, omissões
                ou conteúdo incorreto ("alucinações"). As saídas da Plataforma{" "}
                <strong>não constituem</strong> aconselhamento jurídico, médico, psicológico,
                financeiro, contábil ou qualquer outra forma de aconselhamento profissional. Para
                decisões que exijam aconselhamento especializado, o Usuário deve consultar
                profissional devidamente qualificado.
              </p>
              <p className="text-muted-foreground">
                <strong>10.2. Disponibilidade.</strong> A Plataforma é fornecida{" "}
                <em>"como está"</em> e <em>"conforme disponível"</em>, sujeita a janelas de
                manutenção, falhas de provedores terceiros (LLM Providers, infraestrutura em nuvem,
                links de Internet) e limitações técnicas inerentes. A Capybara Labs envidará os
                melhores esforços para manter a Plataforma disponível, mas não garante operação
                ininterrupta ou livre de erros, ressalvadas as garantias legais aplicáveis.
              </p>
              <p className="text-muted-foreground">
                <strong>10.3. Escopo das salvaguardas.</strong> A proteção contra conteúdo
                inadequado apoia-se principalmente nas salvaguardas dos provedores de IA e nos
                controles de uso aceitável descritos na Seção 6. Dada a natureza probabilística dos
                modelos e o fato de que tais salvaguardas são operadas por terceiros fora do
                controle direto da Capybara Labs, <strong>não se garante</strong> a supressão
                integral de todo e qualquer conteúdo inadequado.
              </p>
            </CardContent>
          </Card>

          {/* Seção 11: Limitação de Responsabilidade */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <CardTitle>11. Limitação de Responsabilidade</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>11.1. Regra geral.</strong> A Capybara Labs responde por danos diretos a que
                der causa por <strong>dolo ou culpa</strong> na prestação do serviço, nos termos da
                legislação aplicável, inclusive do Código de Defesa do Consumidor. Fica{" "}
                <strong>vedada qualquer interpretação</strong> destes Termos que implique renúncia a
                direitos indisponíveis do Usuário-consumidor ou exclusão de responsabilidade por
                dolo ou culpa grave.
                {/* REVISAR: a cláusula preserva responsabilidade por dolo/culpa grave e direitos indisponíveis do consumidor em vez de fixar um teto numérico rígido; validar com jurídico se a estratégia comercial pretende teto adicional em plano pago. */}
              </p>
              <p className="text-muted-foreground">
                <strong>11.2. Plano gratuito.</strong> Quando o acesso for fornecido a título
                gratuito, a responsabilidade da Capybara Labs por danos{" "}
                <strong>indiretos, lucros cessantes ou consequenciais</strong> fica limitada na
                máxima extensão permitida pela legislação aplicável, sem prejuízo da
                responsabilidade prevista no item 11.1.
              </p>
              <p className="text-muted-foreground">
                <strong>11.3. Plano pago.</strong> Em modalidades pagas, e sempre respeitados os
                direitos indisponíveis do consumidor e o disposto no item 11.1, eventual limite
                contratual de responsabilidade será proporcional aos valores efetivamente pagos pelo
                Usuário à Capybara Labs nos <strong>12 (doze) meses</strong> anteriores ao evento
                que deu origem à reivindicação.
                {/* REVISAR: janela de 12 meses é usual em SaaS; confirmar se a política comercial prefere 3 ou 6 meses para planos mensais de ticket baixo. */}
              </p>
              <p className="text-muted-foreground">
                <strong>11.4. Decisões do Usuário.</strong> A Capybara Labs não se responsabiliza
                por decisões pessoais, profissionais, acadêmicas ou negociais tomadas pelo Usuário
                com base exclusivamente em respostas geradas pela IA, sem prejuízo do disposto no
                item 11.1.
              </p>
            </CardContent>
          </Card>

          {/* Seção 12: Suspensão, Banimento e Rescisão */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <CardTitle>12. Suspensão, Banimento e Rescisão</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>12.1. Encerramento pelo Usuário.</strong> O Usuário pode encerrar sua conta
                e/ou cancelar assinatura a qualquer tempo pelos canais da própria Plataforma.
              </p>
              <p className="text-muted-foreground">
                <strong>12.2. Medidas automáticas.</strong> A Capybara Labs poderá aplicar{" "}
                <em>rate limit</em>, suspender ou banir automaticamente contas diante de violação
                destas regras ou de indícios comportamentais de abuso apurados pelos controles de
                uso aceitável (Seção 6.4), com registro em log e comunicação ao Usuário pelos meios
                de contato cadastrados. Requisições recusadas diretamente pelos provedores de IA com
                base em suas políticas de uso, por si sós, não configuram medida da Capybara Labs.
              </p>
              <p className="text-muted-foreground">
                <strong>12.3. Medidas manuais.</strong> A Capybara Labs poderá também adotar
                suspensão ou banimento por decisão manual em casos de violação reiterada, risco à
                segurança da Plataforma ou de terceiros, ou por determinação de autoridade
                competente. Sempre que possível, o Usuário será previamente comunicado e terá
                oportunidade de se manifestar, ressalvados os casos de urgência.
              </p>
              <p className="text-muted-foreground">
                <strong>12.4. Exportação de dados.</strong> Antes da exclusão irreversível da conta
                por encerramento ou rescisão, a Capybara Labs disponibilizará ao Usuário, em{" "}
                <strong>prazo razoável</strong>, meios para exportar seu histórico e dados
                associados, nos termos e formatos descritos na Política de Privacidade.
              </p>
              <p className="text-muted-foreground">
                <strong>12.5. Efeitos.</strong> O encerramento da conta não afasta obrigações já
                contraídas, tampouco os direitos e obrigações que, por sua natureza, devam
                sobreviver ao término (em especial os relativos a propriedade intelectual,
                confidencialidade e limitação de responsabilidade).
              </p>
            </CardContent>
          </Card>

          {/* Seção 13: Alterações aos Termos */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle>13. Alterações aos Termos</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>13.1. Alterações não substanciais.</strong> Ajustes de redação, correções e
                mudanças operacionais de menor relevância poderão ser implementados pela Capybara
                Labs, com atualização da data de "Última atualização" no topo destes Termos.
              </p>
              <p className="text-muted-foreground">
                <strong>13.2. Alterações substanciais.</strong> Alterações que impactem
                materialmente os direitos ou obrigações do Usuário — incluindo alterações em preços,
                em políticas de conteúdo, em tratamento de dados ou em limitação de responsabilidade
                — serão <strong>comunicadas previamente</strong> pelos canais disponíveis (e-mail
                cadastrado, aviso na Plataforma ou equivalente), com{" "}
                <strong>antecedência razoável</strong> em relação à sua entrada em vigor.
                {/* REVISAR: "antecedência razoável" foi deliberadamente mantido aberto; se houver preferência comercial por um prazo fixo (p.ex. 30 dias), parametrizar. */}
              </p>
              <p className="text-muted-foreground">
                <strong>13.3. Direito de recusa.</strong> Até a entrada em vigor de alterações
                substanciais, o Usuário poderá <strong>recusá-las</strong> e{" "}
                <strong>encerrar sua conta</strong> sem qualquer ônus, observadas as regras de
                exportação e exclusão de dados (Seção 12.4). O uso continuado da Plataforma após a
                entrada em vigor, e desde que o Usuário tenha sido previamente notificado nos termos
                do item 13.2, implicará aceitação das novas disposições.
                {/* REVISAR: a redação vincula a aceitação tácita à notificação prévia e à possibilidade de recusa sem ônus, mitigando o risco de "uso continuado = aceitação" automática em alterações materiais. */}
              </p>
            </CardContent>
          </Card>

          {/* Seção 14: Disposições Gerais */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <CardTitle>14. Disposições Gerais</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>14.1. Lei aplicável.</strong> Estes Termos são regidos pelas leis da
                República Federativa do Brasil, em especial pelo CDC, pela LGPD e pelo Marco Civil
                da Internet.
              </p>
              <p className="text-muted-foreground">
                <strong>14.2. Foro.</strong> Fica eleito o Foro da Comarca de{" "}
                <strong>Teresina, Estado do Piauí</strong>, para dirimir controvérsias decorrentes
                destes Termos entre partes empresariais,{" "}
                <strong>
                  ressalvada expressamente a competência legal prevista para demandas envolvendo
                  Usuário-consumidor
                </strong>
                , nos termos do art. 101, I, da Lei nº 8.078/1990 (CDC) e do art. 63, §3º, do Código
                de Processo Civil, que poderá optar pelo foro de seu domicílio.
                {/* REVISAR: redação do foro preserva expressamente a opção do consumidor pelo foro de seu domicílio, em linha com CDC art. 101, I e CPC art. 63, §3º. */}
              </p>
              <p className="text-muted-foreground">
                <strong>14.3. Integralidade.</strong> Estes Termos, em conjunto com a Política de
                Privacidade e com as condições comerciais do plano eventualmente contratado,
                constituem o acordo integral entre o Usuário e a Capybara Labs quanto ao uso da
                Plataforma.
              </p>
              <p className="text-muted-foreground">
                <strong>14.4. Autonomia das cláusulas.</strong> A eventual invalidade ou
                inexequibilidade de qualquer disposição destes Termos não prejudicará a validade das
                demais, que permanecerão em pleno vigor.
              </p>
              <p className="text-muted-foreground">
                <strong>14.5. Cessão.</strong> O Usuário não pode ceder ou transferir direitos e
                obrigações decorrentes destes Termos sem prévio consentimento da Capybara Labs. A
                Capybara Labs poderá ceder tais direitos e obrigações em caso de reorganização
                societária, fusão, aquisição ou operação similar, mediante comunicação ao Usuário.
              </p>
            </CardContent>
          </Card>

          {/* Seção 15: Contato */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <CardTitle>15. Contato</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Dúvidas, solicitações ou notificações relativas a estes Termos podem ser
                encaminhadas à Capybara Labs pelo e-mail:{" "}
                <strong>contato@capybaralabs.com.br</strong>. Para suporte técnico da Plataforma,
                utilize: <strong>suporte@capybaralabs.com.br</strong>.
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
