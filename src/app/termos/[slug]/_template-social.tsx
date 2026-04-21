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

export function TermosTemplateSocial({ client }: Props) {
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
              <p className="text-muted-foreground">
                Bem-vindo(a) à Plataforma {client.name}. A Plataforma é{" "}
                <strong>disponibilizada sem ônus financeiro</strong> pela{" "}
                <strong>Capybara Labs Inova Simples (I.S.)</strong> ("Capybara Labs"), na qualidade
                de <strong>apoiadora institucional e parceira tecnológica</strong>, à{" "}
                <strong>{client.fullName}</strong> ("{client.shortName}" ou "
                <strong>Instituição Parceira</strong>"), no âmbito do{" "}
                <strong>Contrato de Parceria</strong> celebrado entre as partes, para suportar o
                programa social gratuito de formação de Jovens Aprendizes promovido pela{" "}
                {client.shortName}, limitado a <strong>1.500 (mil e quinhentos) Usuários</strong>. A
                Capybara Labs atua exclusivamente como fornecedora de tecnologia e não é parte do
                referido programa social.
              </p>
              <p className="text-muted-foreground">
                Estes Termos de Uso ("Termos") regem a relação entre a Capybara Labs e o{" "}
                <strong>usuário final</strong> ("Usuário"), na condição de{" "}
                <strong>adolescente ou jovem participante</strong> do programa da {client.shortName}
                , no que diz respeito ao uso da Plataforma. Obrigações específicas entre o Usuário e
                a {client.shortName} decorrentes do programa são regidas pelos instrumentos próprios
                firmados entre eles.
              </p>
              <p className="text-muted-foreground">
                <strong>1.1. Ausência de vínculo empregatício.</strong> A utilização da Plataforma
                não cria vínculo empregatício, de estágio ou de aprendizagem entre o Usuário e a{" "}
                {client.shortName} ou a Capybara Labs. Eventuais estágios ou aprendizagens
                realizados pelo Usuário em empresas terceiras são independentes destes Termos, e
                tais empresas não são parte deste instrumento nem recebem dados da Plataforma.
              </p>
              <p className="text-muted-foreground">
                <strong>1.2. Consentimento do Responsável Legal.</strong> Considerando que os
                Usuários são, em regra, <strong>menores de idade</strong>, o acesso à Plataforma
                depende do consentimento específico e em destaque de pelo menos um dos pais ou
                responsáveis legais ("Responsável Legal"), obtido pela {client.shortName} no ato de
                inscrição do Usuário no programa, conforme o art. 14 da Lei nº 13.709/2018 (Lei
                Geral de Proteção de Dados - LGPD), o Estatuto da Criança e do Adolescente (ECA -
                Lei nº 8.069/1990) e as normas aplicáveis à proteção de crianças e adolescentes em
                ambientes digitais (ECA Digital).
              </p>
              <p className="text-muted-foreground">
                AO ACESSAR, CADASTRAR-SE OU UTILIZAR A PLATAFORMA, O USUÁRIO E SEU RESPONSÁVEL LEGAL
                DECLARAM QUE LERAM, COMPREENDERAM E CONCORDAM INTEGRALMENTE COM ESTES TERMOS DE USO
                E COM A POLÍTICA DE PRIVACIDADE DA PLATAFORMA.
              </p>
            </CardContent>
          </Card>

          {/* Seção 2: Elegibilidade e Conta */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <CardTitle>2. Elegibilidade e Conta de Usuário</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>2.1. Elegibilidade.</strong> O uso da Plataforma é restrito aos adolescentes
                e jovens inscritos no programa da {client.shortName}, conforme critérios de
                elegibilidade por ela definidos (incluindo idade mínima, participação ativa no
                programa e consentimento vigente do Responsável Legal).
              </p>
              <p className="text-muted-foreground">
                <strong>2.2. Gratuidade.</strong> O acesso à Plataforma é integralmente gratuito ao
                Usuário e à {client.shortName},{" "}
                <strong>custeado pela Capybara Labs como apoiadora institucional</strong> do
                programa, no âmbito do Contrato de Parceria. É vedada a cobrança de qualquer valor
                do Usuário a título de uso da Plataforma.
              </p>
              <p className="text-muted-foreground">
                <strong>2.3. Responsabilidade pela Conta.</strong> O Usuário compromete-se a manter
                a confidencialidade de suas credenciais de acesso e a não compartilhá-las com
                terceiros. O Responsável Legal, no exercício do poder familiar, auxilia o Usuário
                menor de idade no cumprimento desta obrigação.
              </p>
              <p className="text-muted-foreground">
                <strong>2.4. Notificação.</strong> O Usuário ou o Responsável Legal deve comunicar
                prontamente à {client.shortName} qualquer uso não autorizado da conta ou incidente
                de segurança de que tomar conhecimento. A conta é pessoal e intransferível.
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
                Observados estes Termos e mantido o consentimento do Responsável Legal, a Capybara
                Labs concede ao Usuário uma{" "}
                <strong>
                  licença gratuita, limitada, pessoal, não exclusiva, intransferível e revogável
                </strong>{" "}
                para acessar e utilizar a Plataforma, estritamente para{" "}
                <strong>fins educacionais</strong> vinculados ao programa da {client.shortName} e
                durante a vigência do Contrato de Parceria.
              </p>
            </CardContent>
          </Card>

          {/* Seção 4: Proteção de Crianças e Adolescentes */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <CardTitle>4. Proteção de Crianças e Adolescentes</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Em observância ao art. 14 da LGPD, ao ECA e ao princípio do melhor interesse da
                criança e do adolescente, aplicam-se ao uso da Plataforma:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li>
                  <strong>4.1.</strong> Finalidade exclusivamente educacional, vedado o uso da
                  Plataforma para publicidade dirigida, perfilamento comercial ou monetização que
                  tenham o Usuário como alvo;
                </li>
                <li>
                  <strong>4.2.</strong> Vedação ao uso dos dados e interações dos Usuários, pela
                  Capybara Labs, para treinamento ou ajuste fino de modelos de Inteligência
                  Artificial próprios (a respeito do papel dos provedores de IA contratados na
                  operação gratuita desta Plataforma, consulte a Política de Privacidade, Seção 9);
                </li>
                <li>
                  <strong>4.3.</strong> Possibilidade, a qualquer tempo e sem ônus, de{" "}
                  <strong>revogação do consentimento</strong> pelo Responsável Legal ou pelo próprio
                  Usuário, com consequente cessação do acesso e tratamento dos dados nos termos da
                  Política de Privacidade;
                </li>
                <li>
                  <strong>4.4.</strong> Canal de comunicação para dúvidas e exercício de direitos,
                  mantido pela {client.shortName} junto aos Responsáveis Legais.
                </li>
              </ul>
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
                O Usuário compromete-se a utilizar a Plataforma de forma responsável. É vedado, em
                especial:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li>
                  <strong>5.1.</strong> Gerar, solicitar ou compartilhar por meio da Plataforma
                  conteúdo ilícito, incluindo material de abuso ou exploração sexual de crianças e
                  adolescentes, instruções para a prática de crimes, discurso de ódio, assédio,
                  ameaças, incitação à violência ou conteúdo que promova autoagressão ou suicídio;
                </li>
                <li>
                  <strong>5.2.</strong> Inserir dados pessoais sensíveis próprios ou de terceiros,
                  informações sigilosas ou dados pessoais de pessoas alheias ao programa, salvo
                  quando estritamente necessário ao objetivo educacional e com a devida cautela;
                </li>
                <li>
                  <strong>5.3.</strong> Tentar burlar, desativar ou interferir nos controles de uso
                  aceitável, na limitação de taxa, na autenticação, nas salvaguardas de segurança
                  dos provedores de IA ou em qualquer outro mecanismo de segurança da Plataforma;
                </li>
                <li>
                  <strong>5.4.</strong> Praticar engenharia reversa, extração massiva de dados ou
                  uso automatizado não autorizado da Plataforma;
                </li>
                <li>
                  <strong>5.5.</strong> Compartilhar, ceder ou revender o acesso à Plataforma a
                  terceiros.
                </li>
              </ul>
              <p className="text-muted-foreground">
                <strong>5.6.</strong> O descumprimento destas regras poderá acarretar limitação de
                taxa, suspensão ou <strong>banimento automático</strong> do Usuário, conforme a
                Seção 11, sem prejuízo das medidas cabíveis pela {client.shortName} no âmbito do
                programa.
              </p>
            </CardContent>
          </Card>

          {/* Seção 6: Salvaguardas, Catálogo Restrito e Controles de Uso Aceitável */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>
                  6. Salvaguardas de Segurança, Catálogo Restrito de Modelos e Controles de Uso
                  Aceitável
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>6.1. Salvaguardas de segurança dos provedores de IA.</strong> Os modelos de
                IA disponibilizados na Plataforma são operados por provedores terceiros (como
                OpenAI, Anthropic e Google), que aplicam, do lado de seus próprios servidores,
                políticas de uso e mecanismos de segurança proprietários. Requisições contrárias a
                tais políticas podem ser recusadas diretamente pelo provedor. A Capybara Labs e a{" "}
                {client.shortName}{" "}
                <strong>não operam uma camada própria de análise semântica</strong> das mensagens do
                Usuário.
              </p>
              <p className="text-muted-foreground">
                <strong>6.2. Catálogo restrito de modelos.</strong> A Capybara Labs define
                previamente, em conjunto com a {client.shortName}, quais modelos de IA ficam
                disponíveis. O Usuário <strong>não pode habilitar modelos autônomos</strong> ou não
                autorizados.
              </p>
              <p className="text-muted-foreground">
                <strong>6.3. Controles de uso aceitável (comportamentais).</strong> A Capybara Labs
                aplica, com base em volume e padrões de uso e independentemente do conteúdo das
                mensagens, limitação de taxa (<em>rate limit</em>) e banimento automático de contas
                com indícios de abuso ou de violação reiterada destes Termos, com comunicação à{" "}
                {client.shortName}.
              </p>
              <p className="text-muted-foreground">
                <strong>6.4. Supervisão por exceção e denúncias.</strong> Complementarmente, a{" "}
                {client.shortName} realiza supervisão agregada e por exceção (conforme Seção 7) e
                processa prioritariamente denúncias apresentadas pelo Responsável Legal, pela
                própria {client.shortName} ou por terceiros.
              </p>
              <p className="text-muted-foreground">
                <strong>6.5. Transparência quanto a limitações.</strong> A proteção descrita nesta
                Seção não equivale a uma camada de moderação ativa operada pela Capybara Labs.
                Apoia-se nas salvaguardas dos provedores (6.1), na curadoria do catálogo (6.2), nos
                controles comportamentais (6.3), na supervisão por exceção da {client.shortName}{" "}
                (6.4) e na proibição expressa de conteúdo ilícito prevista na Seção 5. Dada a
                natureza probabilística dos modelos e o fato de os filtros dos provedores operarem
                fora do controle direto da Capybara Labs, não se garante a supressão integral de
                todo e qualquer conteúdo inadequado.
              </p>
            </CardContent>
          </Card>

          {/* Seção 7: Supervisão pela Instituição Parceira */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <CardTitle>7. Supervisão pela {client.shortName}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>7.1. Acompanhamento agregado.</strong> Os recursos de acompanhamento
                disponibilizados à {client.shortName} pela Plataforma são baseados em{" "}
                <strong>métricas agregadas e anonimizadas</strong>. Não há, por padrão, revisão
                rotineira e individualizada do Conteúdo das Interações pela Capybara Labs.
              </p>
              <p className="text-muted-foreground">
                <strong>7.2. Acesso individualizado como exceção.</strong> O acesso ao conteúdo das
                interações de um Usuário específico é <strong>excepcional</strong> e restrito às
                seguintes hipóteses: (i) indício de abuso da Plataforma ou risco à segurança do
                Usuário ou de terceiros; (ii) solicitação fundamentada do Responsável Legal; (iii)
                cumprimento de obrigação legal ou ordem de autoridade competente; ou (iv) suporte
                técnico expressamente autorizado. Todo acesso individualizado fica registrado em log
                de auditoria, nos termos da Política de Privacidade.
              </p>
              <p className="text-muted-foreground">
                <strong>
                  7.3. Vedação de uso disciplinar-trabalhista e de compartilhamento externo.
                </strong>{" "}
                Os dados da Plataforma <strong>não serão utilizados</strong> para fins disciplinares
                de natureza trabalhista, para avaliação de estágio ou aprendizagem, nem serão
                compartilhados com as empresas em que o Usuário eventualmente estagia.
              </p>
            </CardContent>
          </Card>

          {/* Seção 8: Conteúdo e Propriedade Intelectual */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <CardTitle>8. Conteúdo e Propriedade Intelectual</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>8.1. Plataforma.</strong> A Plataforma, seus códigos, marcas, interfaces e
                elementos visuais pertencem à Capybara Labs ou são por ela licenciados.
              </p>
              <p className="text-muted-foreground">
                <strong>8.2. Conteúdo do Usuário.</strong> O Usuário mantém a titularidade sobre o
                conteúdo que insere na Plataforma, observadas as regras de conduta e as limitações
                desta Seção.
              </p>
              <p className="text-muted-foreground">
                <strong>8.3. Licença limitada para operação.</strong> O Usuário concede à Capybara
                Labs e aos operadores/suboperadores estritamente necessários uma licença gratuita,
                limitada e revogável para tratar o conteúdo inserido apenas com o propósito de
                prestar o serviço, garantir a segurança e a moderação da Plataforma e cumprir
                obrigações legais aplicáveis.
              </p>
              <p className="text-muted-foreground">
                <strong>8.4. Uso para treinamento de IA.</strong> A Capybara Labs não utiliza o
                conteúdo do Usuário para treinar modelos próprios. Sobre o uso de prompts pelos
                provedores de IA contratados na operação gratuita desta Plataforma, consulte a
                Política de Privacidade, Seção 9.
              </p>
              <p className="text-muted-foreground">
                <strong>8.5. Componentes de terceiros.</strong> A Plataforma utiliza, entre outros,
                componentes do projeto LibreChat, distribuído sob a licença MIT.
              </p>
            </CardContent>
          </Card>

          {/* Seção 9: Isenção de Garantias */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <CardTitle>9. Isenção de Garantias</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>9.1. Caráter educacional e auxiliar.</strong> A Plataforma é fornecida como
                ferramenta de apoio educacional. Os resultados gerados por modelos de IA podem
                conter <strong>imprecisões, omissões ou conteúdo incorreto</strong> ("alucinações")
                e <strong>não substituem</strong> orientação pedagógica, jurídica, médica,
                psicológica ou financeira prestada por profissional qualificado.
              </p>
              <p className="text-muted-foreground">
                <strong>9.2. Alcance das salvaguardas.</strong> A proteção contra conteúdo
                inadequado apoia-se (i) nas salvaguardas de segurança dos provedores de IA, (ii) no
                catálogo restrito de modelos e (iii) nos controles comportamentais de uso aceitável,
                conforme a Seção 6. Dada a natureza probabilística dos modelos de IA e o fato de que
                tais salvaguardas são operadas por terceiros ou fora da camada semântica da
                Plataforma, <strong>não se garante a supressão integral</strong> de todo e qualquer
                conteúdo inadequado. A presente cláusula não exclui o dever da Capybara Labs e da{" "}
                {client.shortName} de atuarem diligentemente em relação a riscos de que venham a
                tomar conhecimento, especialmente aqueles envolvendo a integridade de crianças e
                adolescentes.
              </p>
              <p className="text-muted-foreground">
                <strong>9.3. Disponibilidade do serviço.</strong> A Plataforma é fornecida "como
                está" e "conforme disponível", não se garantindo ininterruptibilidade ou adequação a
                finalidade específica não expressamente prevista no Contrato de Parceria,
                ressalvadas as garantias legais aplicáveis.
              </p>
            </CardContent>
          </Card>

          {/* Seção 10: Limitação de Responsabilidade */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <CardTitle>10. Limitação de Responsabilidade</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>10.1. Natureza do serviço.</strong> O serviço é disponibilizado ao Usuário a
                título gratuito, no âmbito de um programa social custeado pela {client.shortName}. A
                Capybara Labs responde por danos a que der causa nos termos da legislação aplicável,
                inclusive, quando cabível, das normas de proteção do consumidor e dos direitos da
                criança e do adolescente, sendo <strong>vedada qualquer interpretação</strong> deste
                instrumento que implique renúncia a direitos indisponíveis do Usuário ou do
                Responsável Legal.
                {/* REVISAR: a redação acima preserva direitos indisponíveis do menor e do consumidor em vez de fixar um teto numérico; confirmar se atende à estratégia comercial pretendida pela Capybara Labs. */}
              </p>
              <p className="text-muted-foreground">
                <strong>10.2. Decisões do Usuário.</strong> A Capybara Labs e a {client.shortName}{" "}
                não se responsabilizam por decisões pessoais, acadêmicas ou profissionais tomadas
                pelo Usuário com base exclusivamente em respostas geradas pela IA, sem prejuízo do
                disposto no item 10.1.
              </p>
              <p className="text-muted-foreground">
                <strong>10.3. Responsabilidades contratuais entre as partes institucionais.</strong>{" "}
                As responsabilidades entre Capybara Labs e {client.shortName} são regidas pelo
                Contrato de Parceria firmado entre as partes, sem oponibilidade ao Usuário ou ao
                Responsável Legal.
              </p>
            </CardContent>
          </Card>

          {/* Seção 11: Suspensão e Rescisão */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <CardTitle>11. Suspensão, Banimento e Rescisão</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>11.1. Medidas automáticas.</strong> A Capybara Labs poderá limitar a taxa de
                uso, suspender ou banir automaticamente o Usuário diante de violação das regras de
                conduta (Seção 5) ou com base nos controles comportamentais descritos na Seção 6.3,
                com registro da medida e comunicação à {client.shortName}. Requisições recusadas
                diretamente pelos provedores de IA com base em suas políticas, por si sós, não
                configuram medida da Capybara Labs.
              </p>
              <p className="text-muted-foreground">
                <strong>11.2. Revogação do consentimento.</strong> O Responsável Legal ou o próprio
                Usuário pode, a qualquer tempo, revogar o consentimento, o que acarretará o
                encerramento imediato do acesso à Plataforma e o tratamento dos dados nos termos da
                Política de Privacidade.
              </p>
              <p className="text-muted-foreground">
                <strong>11.3. Desligamento do programa.</strong> O encerramento da participação do
                Usuário no programa da {client.shortName} implica a{" "}
                <strong>rescisão automática</strong> do acesso à Plataforma.
              </p>
              <p className="text-muted-foreground">
                <strong>11.4. Término do Contrato de Parceria.</strong> O término do Contrato de
                Parceria entre Capybara Labs e {client.shortName}, por qualquer motivo, acarreta a
                descontinuação do serviço para os Usuários.
              </p>
            </CardContent>
          </Card>

          {/* Seção 12: Alterações */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle>12. Alterações a estes Termos</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                A Capybara Labs poderá modificar estes Termos para refletir mudanças legais,
                regulatórias ou operacionais. Alterações relevantes serão comunicadas à{" "}
                {client.shortName}, que providenciará a comunicação aos Responsáveis Legais. Em caso
                de não aceitação das novas disposições, o Responsável Legal ou o Usuário poderá
                exercer a revogação prevista na Seção 11.2, com o encerramento do acesso à
                Plataforma.
              </p>
            </CardContent>
          </Card>

          {/* Seção 13: Disposições Gerais */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <CardTitle>13. Disposições Gerais</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                <strong>Lei aplicável:</strong> estes Termos são regidos pelas leis da República
                Federativa do Brasil, em especial a LGPD, o ECA e o Marco Civil da Internet (Lei nº
                12.965/2014).
              </p>
              <p className="text-muted-foreground">
                <strong>Foro:</strong> fica eleito o Foro da Comarca de Teresina/PI para dirimir
                quaisquer controvérsias oriundas destes Termos, ressalvado, quando aplicável, o foro
                de domicílio do consumidor ou do Responsável Legal.
              </p>
              <p className="text-muted-foreground">
                <strong>Integralidade:</strong> estes Termos, em conjunto com a Política de
                Privacidade da Plataforma e com o Contrato de Parceria celebrado entre Capybara Labs
                e {client.shortName}, constituem o entendimento integral entre as partes
                institucionais sobre o uso da Plataforma.
              </p>
            </CardContent>
          </Card>

          {/* Contato */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <CardTitle>Contato</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-muted-foreground">
                Dúvidas sobre estes Termos ou sobre a participação do Usuário no programa devem ser
                dirigidas primariamente à <strong>{client.shortName}</strong>, pelos canais por ela
                disponibilizados aos Responsáveis Legais.
              </p>
              <p className="text-muted-foreground">
                Para questões relativas a dados pessoais e direitos LGPD, a Capybara Labs pode ser
                contatada pelo e-mail do Encarregado: <strong>dpo@capybaralabs.com.br</strong>.
                Questões técnicas sobre a Plataforma: suporte@capybaralabs.com.br.
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
