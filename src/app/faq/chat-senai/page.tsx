import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'FAQ | Chat IA SENAI-PI',
  description: 'Perguntas frequentes sobre o Chat IA SENAI-PI.',
  keywords: ['faq', 'Chat IA SENAI-PI', 'SENAI-PI', 'Chat IA', 'Capybara Labs'],
  robots: { index: false, follow: true },
};

const faqItems = [
  {
    value: 'o-que-e',
    question: 'O que é o Chat IA SENAI-PI?',
    answer: (
      <p className="text-muted-foreground">
        O Chat IA SENAI-PI é uma plataforma corporativa de IA que apoia os colaboradores em tarefas do dia a dia, como
        gerar ideias, escrever, estudar, planejar, fazer cálculos, programar, analisar textos e trabalhar com arquivos
        ou imagens quando esses recursos estiverem habilitados. O objetivo é ajudar a melhorar o desempenho e a
        qualidade das entregas, com respostas alinhadas às suas instruções em uma conversa.
      </p>
    ),
  },
  {
    value: 'onde-usar',
    question: 'Onde posso usar o Chat IA SENAI-PI?',
    answer: (
      <ul className="space-y-2 text-muted-foreground list-disc list-inside">
        <li>Web: pelo navegador, no endereço fornecido pela sua organização.</li>
        <li>Dispositivos móveis: acesso pelo navegador do celular, quando disponível.</li>
      </ul>
    ),
  },
  {
    value: 'como-comecar',
    question: 'Como começo meu primeiro chat?',
    answer: (
      <p className="text-muted-foreground">
        Abra o Chat IA SENAI-PI, digite o que você precisa na caixa de mensagem e envie. Selecione &quot;Novo chat&quot;
        a qualquer momento para começar do zero.
      </p>
    ),
  },
  {
    value: 'o-que-testar',
    question: 'O que posso testar primeiro?',
    answer: (
      <ul className="space-y-2 text-muted-foreground list-disc list-inside">
        <li>Peça para resumir um texto técnico ou explicar um conceito.</li>
        <li>Solicite ideias para um projeto, reunião, oficina ou ação de melhoria.</li>
        <li>Peça ajuda para escrever um e-mail, comunicado, relatório ou ata.</li>
        <li>Peça para criar uma lista de tarefas ou um plano de trabalho.</li>
        <li>Faça perguntas de acompanhamento (o Chat IA SENAI-PI lembra o contexto dentro de um chat).</li>
        <li>Envie um arquivo ou imagem para analisar, resumir ou transformar, quando o recurso estiver habilitado.</li>
      </ul>
    ),
  },
  {
    value: 'pesquisa-web',
    question: 'O Chat IA SENAI-PI consegue pesquisar na web?',
    answer: (
      <p className="text-muted-foreground">
        Se a pesquisa na web estiver habilitada, o Chat IA SENAI-PI pode buscar informações atuais e indicar
        referências. Procure o ícone de pesquisa ou o atalho exibido na interface (por exemplo, &quot;/search&quot;).
      </p>
    ),
  },
  {
    value: 'chat-temporario',
    question: 'O que é o chat temporário?',
    answer: (
      <p className="text-muted-foreground">
        Quando disponível, chats temporários não aparecem no histórico, não usam/criam memórias e não são usados para
        treinar modelos. Inicie um chat temporário no menu de modelos quando quiser mais privacidade para uma conversa
        específica.
      </p>
    ),
  },
  {
    value: 'gerenciar-excluir',
    question: 'Como gerencio meus dados ou excluo minha conta?',
    answer: (
      <div className="space-y-3 text-muted-foreground">
        <p>
          Acesse <strong>Configurações → Controles de dados</strong> para ações como:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Importar conversas de um arquivo JSON.</li>
          <li>Gerenciar links compartilhados.</li>
          <li>Revogar credenciais fornecidas pelo usuário.</li>
          <li>Excluir o armazenamento de cache de TTS (Text-to-Speech).</li>
          <li>Limpar todos os chats (ação irreversível).</li>
        </ul>
        <p>
          Para excluir a conta, verifique <strong>Configurações → Conta</strong> (quando disponível) ou solicite ao
          suporte institucional. A exclusão é permanente e segue os prazos padrão.
        </p>
      </div>
    ),
  },
  {
    value: 'planos',
    question: 'Quais planos estão disponíveis?',
    answer: (
      <p className="text-muted-foreground">
        O acesso ao Chat IA SENAI-PI é definido pela organização. Alguns perfis podem contar com recursos adicionais,
        limites maiores ou integrações específicas. Consulte a área responsável pelo serviço para detalhes.
      </p>
    ),
  },
  {
    value: 'limites',
    question: 'Há limites de mensagens?',
    answer: (
      <p className="text-muted-foreground">
        Sim, os limites podem variar por perfil e podem mudar ao longo do tempo para manter o desempenho estável.
      </p>
    ),
  },
  {
    value: 'compartilhar',
    question: 'Posso compartilhar uma conversa?',
    answer: (
      <p className="text-muted-foreground">
        Sim, quando disponível. Use &quot;Compartilhar&quot; para criar um link para uma cópia somente leitura e envie
        para outras pessoas, respeitando as políticas internas. Os links podem ser gerenciados em Controles de dados.
      </p>
    ),
  },
  {
    value: 'politicas',
    question: 'Onde posso ler a política de privacidade e as regras de uso?',
    answer: (
      <p className="text-muted-foreground">
        Consulte a{' '}
        <a href="/privacidade/chat-senai" target="_blank" className="text-primary underline hover:text-primary/80">
          Política de Privacidade
        </a>{' '}
        e os{' '}
        <a href="/termos/chat-senai" target="_blank" className="text-primary underline hover:text-primary/80">
          Termos de Uso
        </a>{' '}
        Chat IA SENAI-PI para obter detalhes sobre dados, segurança e uso aceitável.
      </p>
    ),
  },
  {
    value: 'suporte',
    question: 'Como entro em contato com o suporte?',
    answer: (
      <p className="text-muted-foreground">
        Para questões relacionadas ao funcionamento da Plataforma, entre em contato pelo e-mail{' '}
        <span className="text-primary hover:text-primary/80">suporte@capybaralabs.com.br.</span>
      </p>
    ),
  },
];

export default function FaqChatSenai() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Plataforma Chat IA</Badge>
              <Badge variant="outline">SENAI-PI</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Chat IA SENAI-PI: Perguntas frequentes</h1>
            <p className="text-sm text-muted-foreground">Última atualização: 12 de janeiro de 2026.</p>
            <p className="text-muted-foreground">
              Boas-vindas! Este FAQ apresenta o básico: como começar, o que você pode fazer e como controlar seus dados
              e sua privacidade no Chat IA SENAI-PI.
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
                    <AccordionContent className="space-y-3 text-justify">{item.answer}</AccordionContent>
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
