import { Lightbulb, Target, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Dict } from "@/i18n";

const ICONS = [Target, Zap, Users, Lightbulb] as const;

type DifferentialsSectionProps = {
  t: Dict["differentials"];
  id: string;
};

export function DifferentialsSection({ t, id }: DifferentialsSectionProps) {
  return (
    <section id={id} className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <Badge variant="outline">{t.badge}</Badge>
          <h2 className="font-bold text-3xl md:text-4xl">{t.title}</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <Card key={item.title}>
                <CardHeader>
                  <Icon className="mb-2 h-10 w-10 text-primary" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
