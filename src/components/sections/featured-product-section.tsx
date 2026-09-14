import { Bot, ChevronRight, Database, Lock, MessageSquare, Shield, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CONTACT_EMAIL } from "@/constants/config";

export function FeaturedProductSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <Badge>Produto Destaque</Badge>
            <h2 className="font-bold text-3xl md:text-4xl">LabsChat.Ai</h2>
            <p className="text-lg text-muted-foreground">
              Plataforma de IA generativa para uso corporativo, com foco absoluto em segurança,
              confidencialidade e soberania dos dados.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Segurança Contratual</h3>
                  <p className="text-muted-foreground text-sm">
                    Seus dados nunca alimentam o treinamento de modelos externos
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Database className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Hospedagem Nacional</h3>
                  <p className="text-muted-foreground text-sm">
                    Infraestrutura dedicada no Brasil, em conformidade com LGPD
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">White-Label</h3>
                  <p className="text-muted-foreground text-sm">
                    Personalização completa com a identidade visual da sua marca
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="mt-6" asChild>
              <a href={`mailto:${CONTACT_EMAIL}`}>
                Solicite uma Demo
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="relative">
            <Card className="border-2">
              <CardHeader>
                <div className="mb-4 flex items-center justify-between">
                  <Badge variant="secondary">LabsChat.Ai</Badge>
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 rounded-lg bg-muted p-4">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="mt-1 h-5 w-5 text-primary" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">Múltiplos Modelos LLM</p>
                      <p className="text-muted-foreground text-xs">
                        GPT, Gemini, Claude, Grok e mais
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 rounded-lg bg-muted p-4">
                  <div className="flex items-start gap-3">
                    <Bot className="mt-1 h-5 w-5 text-primary" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">Agentes & Prompt.Labs</p>
                      <p className="text-muted-foreground text-xs">
                        Agentes próprios e o Prompt.Labs, que ajuda a escrever prompts melhores
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 rounded-lg bg-muted p-4">
                  <div className="flex items-start gap-3">
                    <Lock className="mt-1 h-5 w-5 text-primary" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">Ambiente Privado</p>
                      <p className="text-muted-foreground text-xs">
                        Controle e privacidade totais sobre suas informações
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
