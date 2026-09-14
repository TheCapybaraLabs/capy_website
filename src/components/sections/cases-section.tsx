import { Bot, GraduationCap, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Dict } from "@/i18n";

const ICONS = [Bot, Users, GraduationCap] as const;

type CasesSectionProps = {
  t: Dict["cases"];
  id: string;
};

export function CasesSection({ t, id }: CasesSectionProps) {
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
                key={item.partner}
                className="relative overflow-hidden border-2 transition-colors hover:border-primary"
              >
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{item.tag}</Badge>
                  </div>
                  <p className="font-medium text-primary text-sm">{item.partner}</p>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
