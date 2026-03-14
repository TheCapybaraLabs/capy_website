import { HelpCircle } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "FAQ | Chat IA SESI-PI",
  description: "Perguntas frequentes sobre o Chat IA SESI-PI.",
  keywords: ["faq", "Chat IA SESI-PI", "SESI-PI", "Chat IA", "Capybara Labs"],
  robots: { index: false, follow: true },
};

const faqItems = [
  {
    value: "o-que-e",
    question: "O que é o Chat IA SESI-PI?",
    answer: (
      <p className="text-muted-foreground">
        O Chat IA SESI-PI é uma plataforma corporativa de IA que apoia os colaboradores em tarefas
        do dia a dia, como gerar ideias, escrever, estudar, planejar, fazer cálculos, programar,
        analisar textos e trabalhar com arquivos ou imagens quando esses recursos estiverem
        habilitados. O objetivo é ajudar a melhorar o desempenho e a qualidade das entregas, com
        respostas alinhadas às suas instruções em uma conversa.
      </p>
    ),
  },
  {
    value: "onde-usar",
    question: "Onde posso usar o Chat IA SESI-PI?",
    answer: (
      <ul className="list-inside list-disc space-y-2 text-muted-foreground">
        <li>Web: pelo navegador, no endereço fornecido pela sua organização.</li>
        <li>
          Dispositivos móveis: acesso pelo navegador do celular ou Web App, quando disponível.
        </li>
      </ul>
    ),
  },
  {
    value: "como-comecar",
    question: "Como começo meu primeiro chat?",
    answer: (
      <p className="text-muted-foreground">
        Abra o Chat IA SESI-PI, digite o que você precisa na caixa de mensagem e envie. Selecione
        &quot;Novo chat&quot; a qualquer momento para começar do zero.
      </p>
    ),
  },
  {
    value: "como-selecionar-modelo",
    question: "Como seleciono o modelo de IA?",
    answer: (
      <div>
        <p className="text-muted-foreground">
          Segue o tutorial rápido para escolher o modelo ideal para sua conversa:{" "}
        </p>
        <Image
          src="/faq-choose-model-SESI.gif"
          alt="Tutorial de seleção de modelo"
          width={800}
          height={400}
          className="mt-6 rounded-sm"
          unoptimized
        />
      </div>
    ),
  },
  {
    value: "o-que-testar",
    question: "O que posso testar primeiro?",
    answer: (
      <ul className="list-inside list-disc space-y-2 text-muted-foreground">
        <li>Peça para resumir um texto técnico ou explicar um conceito.</li>
        <li>Solicite ideias para um projeto, reunião, oficina ou ação de melhoria.</li>
        <li>Peça ajuda para escrever um e-mail, comunicado, relatório ou ata.</li>
        <li>Peça para criar uma lista de tarefas ou um plano de trabalho.</li>
        <li>
          Faça perguntas de acompanhamento (o Chat IA SESI-PI lembra o contexto dentro de um chat).
        </li>
        <li>
          Envie um arquivo ou imagem para analisar, resumir ou transformar, quando o recurso estiver
          habilitado.
        </li>
      </ul>
    ),
  },
  {
    value: "pesquisa-web",
    question: "O Chat IA SESI-PI consegue pesquisar na web?",
    answer: (
      <p className="text-muted-foreground">
        Sim. Os modelos disponíveis podem acessar informações atualizadas por meio de pesquisas na
        internet, permitindo a consulta a conteúdos recentes, dados públicos e fontes confiáveis. Ao
        formular sua pergunta no chat, informe se deseja que a resposta inclua pesquisa externa e
        referências, para que o sistema realize a busca e apresente as fontes utilizadas.
      </p>
    ),
  },
  {
    value: "chat-temporario",
    question: "O que é o chat temporário?",
    answer: (
      <div>
        <p className="text-muted-foreground">
          Chats temporários não aparecem no histórico, não usam/criam memórias e não são usados para
          treinar modelos. Quando quiser mais privacidade para uma conversa específica, inicie um
          chat temporário no ícone localizado no canto superior direito da tela inicial.
        </p>
        <Image src="/chat-temp.png" alt="" width={180} height={90} className="mt-6 rounded-sm" />
      </div>
    ),
  },
  {
    value: "gerenciar-excluir",
    question: "Como gerencio meus dados ou excluo minha conta?",
    answer: (
      <div className="space-y-3 text-muted-foreground">
        <p>
          Acesse <strong>Configurações → Controles de dados</strong> para ações como:
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>Importar conversas de um arquivo JSON.</li>
          <li>Gerenciar links compartilhados.</li>
          <li>Revogar credenciais fornecidas pelo usuário.</li>
          <li>Excluir o armazenamento de cache de TTS (Text-to-Speech) .</li>
          <li>Limpar todos os chats (ação irreversível).</li>
        </ul>
        <p>
          Para excluir a conta, verifique <strong>Configurações → Conta</strong> (quando disponível)
          ou solicite ao suporte institucional. A exclusão é permanente e segue os prazos padrão.
        </p>
      </div>
    ),
  },
  {
    value: "planos",
    question: "Quais planos estão disponíveis?",
    answer: (
      <p className="text-muted-foreground">
        O acesso ao Chat IA SESI-PI é definido pela organização. Alguns perfis podem contar com
        recursos adicionais, limites maiores ou integrações específicas. Consulte a área responsável
        pelo serviço para detalhes.
      </p>
    ),
  },
  {
    value: "limites",
    question: "Há limites de mensagens?",
    answer: (
      <p className="text-muted-foreground">
        Sim, os limites podem variar por perfil e podem mudar ao longo do tempo para manter o
        desempenho estável.
      </p>
    ),
  },
  {
    value: "compartilhar",
    question: "Posso compartilhar uma conversa?",
    answer: (
      <p className="text-muted-foreground">
        Sim, quando disponível. Use &quot;Compartilhar&quot; para criar um link para uma cópia
        somente leitura e envie para outras pessoas, respeitando as políticas internas. Os links
        podem ser gerenciados em{" "}
        <strong>Configurações → Controles de dados → Links compartilhados → Gerenciar</strong>.
      </p>
    ),
  },
  {
    value: "politicas",
    question: "Onde posso ler a política de privacidade e as regras de uso?",
    answer: (
      <p className="text-muted-foreground">
        Consulte a{" "}
        <a
          href="/privacidade/chat-sesi"
          target="_blank"
          className="text-primary underline hover:text-primary/80"
          rel="noopener"
        >
          Política de Privacidade
        </a>{" "}
        e os{" "}
        <a
          href="/termos/chat-sesi"
          target="_blank"
          className="text-primary underline hover:text-primary/80"
          rel="noopener"
        >
          Termos de Uso
        </a>{" "}
        do Chat IA SESI-PI para obter detalhes sobre dados, segurança e uso aceitável.
      </p>
    ),
  },
  {
    value: "suporte",
    question: "Como entro em contato com o suporte?",
    answer: (
      <p className="text-muted-foreground">
        Para questões relacionadas ao funcionamento da Plataforma, entre em contato pelo e-mail{" "}
        <span className="text-primary hover:text-primary/80">suporte@capybaralabs.com.br.</span>
      </p>
    ),
  },
];

export default function FaqChatSesi() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Plataforma Chat IA</Badge>
              <Badge variant="outline">SESI-PI</Badge>
            </div>
            <h1 className="font-bold text-4xl tracking-tight">
              Chat IA SESI-PI: Perguntas frequentes
            </h1>
            <p className="text-muted-foreground text-sm">
              Última atualização: 12 de janeiro de 2026.
            </p>
            <p className="text-muted-foreground">
              Boas-vindas! Este FAQ apresenta o básico: como começar, o que você pode fazer e como
              controlar seus dados e sua privacidade no Chat IA SESI-PI.
            </p>
          </div>

          <Separator />

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                <CardTitle>Perguntas frequentes</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item) => (
                  <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger className="text-base">{item.question}</AccordionTrigger>
                    <AccordionContent className="space-y-3 text-justify">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
