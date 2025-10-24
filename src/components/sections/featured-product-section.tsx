import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Database, Sparkles, MessageSquare, FileText, Lock, ChevronRight } from 'lucide-react';
import { CONTACT_EMAIL } from '@/constants/config';

export function FeaturedProductSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge>Produto Destaque</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Plataforma de Chat IA Corporativo</h2>
            <p className="text-lg text-muted-foreground">
              Solução avançada de IA generativa para uso corporativo, com foco absoluto em segurança, confidencialidade
              e soberania dos dados.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Segurança Contratual</h3>
                  <p className="text-sm text-muted-foreground">
                    Seus dados nunca são usados para treinamento de modelos externos
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Database className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Hospedagem Nacional</h3>
                  <p className="text-sm text-muted-foreground">
                    Infraestrutura dedicada no Brasil, em conformidade com LGPD
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">White-Label</h3>
                  <p className="text-sm text-muted-foreground">Customização completa com sua identidade visual</p>
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
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">Prompt.Labs</Badge>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-primary mt-1" />
                    <div className="space-y-1 flex-1">
                      <p className="text-sm font-medium">Múltiplos Modelos LLM</p>
                      <p className="text-xs text-muted-foreground">GPT, Gemini, Claude integrados</p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary mt-1" />
                    <div className="space-y-1 flex-1">
                      <p className="text-sm font-medium">Biblioteca de Prompts</p>
                      <p className="text-xs text-muted-foreground">Organize e reutilize seus prompts</p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-primary mt-1" />
                    <div className="space-y-1 flex-1">
                      <p className="text-sm font-medium">Ambiente Privado</p>
                      <p className="text-xs text-muted-foreground">Total controle e privacidade</p>
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
