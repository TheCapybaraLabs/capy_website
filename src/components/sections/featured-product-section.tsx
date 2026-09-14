import { Bot, ChevronRight, Database, Lock, MessageSquare, Shield, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CONTACT_EMAIL } from "@/constants/config";
import type { Dict } from "@/i18n";

const HIGHLIGHT_ICONS = [Shield, Database, Sparkles] as const;
const PANEL_ICONS = [MessageSquare, Bot, Lock] as const;

type FeaturedProductSectionProps = {
  t: Dict["featured"];
};

export function FeaturedProductSection({ t }: FeaturedProductSectionProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <Badge>{t.badge}</Badge>
            <h2 className="font-bold text-3xl md:text-4xl">{t.title}</h2>
            <p className="text-lg text-muted-foreground">{t.body}</p>

            <div className="space-y-4 pt-4">
              {t.highlights.map((item, index) => {
                const Icon = HIGHLIGHT_ICONS[index];
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button size="lg" className="mt-6" asChild>
              <a href={`mailto:${CONTACT_EMAIL}`}>
                {t.cta}
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="relative">
            <Card className="border-2">
              <CardHeader>
                <div className="mb-4 flex items-center justify-between">
                  <Badge variant="secondary">{t.title}</Badge>
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {t.panel.map((item, index) => {
                  const Icon = PANEL_ICONS[index];
                  return (
                    <div key={item.title} className="space-y-3 rounded-lg bg-muted p-4">
                      <div className="flex items-start gap-3">
                        <Icon className="mt-1 h-5 w-5 text-primary" />
                        <div className="flex-1 space-y-1">
                          <p className="font-medium text-sm">{item.title}</p>
                          <p className="text-muted-foreground text-xs">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
