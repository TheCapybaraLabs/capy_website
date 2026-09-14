import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Dict } from "@/i18n";

type AboutSectionProps = {
  t: Dict["about"];
  id: string;
};

export function AboutSection({ t, id }: AboutSectionProps) {
  return (
    <section id={id} className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <Badge variant="outline">{t.badge}</Badge>
            <h2 className="font-bold text-3xl md:text-4xl">{t.title}</h2>
            <p className="text-lg text-muted-foreground">{t.lead}</p>
            <p className="text-muted-foreground">{t.mission}</p>
          </div>

          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{t.card.title}</CardTitle>
              <CardDescription className="text-base">{t.card.subtitle}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{t.card.p1}</p>
              <p className="text-muted-foreground">
                {t.card.p2Lead}
                <span className="font-semibold text-foreground">{t.card.p2Strong}</span>
                {t.card.p2Tail}
              </p>
              <p className="text-muted-foreground">{t.card.p3}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 rounded-lg border border-primary/20 bg-primary/5 p-8">
          <h2 className="mb-6 font-bold text-3xl text-primary">{t.culture.title}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {t.culture.items.map((item) => (
              <div key={item.title} className="space-y-2">
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
