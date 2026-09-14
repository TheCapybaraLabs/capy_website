import { Brain, CheckCircle2, Cloud, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Dict } from "@/i18n";

const ICONS = [Cloud, Brain, Code2] as const;

type ServicesSectionProps = {
  t: Dict["services"];
  id: string;
};

export function ServicesSection({ t, id }: ServicesSectionProps) {
  return (
    <section id={id} className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <Badge variant="outline">{t.badge}</Badge>
          <h2 className="font-bold text-3xl md:text-4xl">{t.title}</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {t.items.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <Card
                key={item.title}
                className="relative overflow-hidden border-2 transition-colors hover:border-primary"
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {item.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm">{bullet}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
