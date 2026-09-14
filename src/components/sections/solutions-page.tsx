import {
  Brain,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Globe,
  Lightbulb,
  Lock,
  Scale,
  Shield,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CONTACT_EMAIL } from "@/constants/config";
import type { Dict } from "@/i18n";

const SECURITY_ICONS = [Lock, Globe, Database] as const;

type SolutionsPageProps = {
  t: Dict["solutions"];
  anchors: Pick<Dict["anchors"], "saas" | "consulting" | "development">;
};

/** Lista com marcador de seta, usada nos três pilares. */
function ArrowList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2 text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function SolutionsPage({ t, anchors }: SolutionsPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-b from-primary/5 to-transparent py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <Badge variant="secondary" className="px-4 py-1 text-sm">
              <Sparkles className="mr-2 inline h-3 w-3" />
              {t.hero.badge}
            </Badge>
            <h1 className="font-bold text-4xl tracking-tight md:text-5xl">
              {t.hero.titleLead} <span className="text-primary">{t.hero.titleAccent}</span>
            </h1>
            <p className="text-muted-foreground text-xl">{t.hero.subtitle}</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-24 px-4 py-12 sm:px-6 lg:px-8">
        {/* Pilar 1: Plataformas SaaS */}
        <section id={anchors.saas} className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-primary/10 p-4">
              <Cloud className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="mb-2 font-bold text-3xl">{t.saas.heading}</h2>
              <p className="text-lg text-muted-foreground">{t.saas.subtitle}</p>
            </div>
          </div>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <Badge variant="secondary" className="mb-2 w-fit">
                {t.saas.featured.badge}
              </Badge>
              <CardTitle className="text-2xl">{t.saas.featured.title}</CardTitle>
              <CardDescription>{t.saas.featured.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">{t.saas.featured.body}</p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 font-semibold text-lg">
                    <Shield className="h-5 w-5 text-primary" />
                    {t.saas.featured.securityHeading}
                  </h3>
                  <ul className="space-y-3">
                    {t.saas.featured.security.map((item, index) => {
                      const Icon = SECURITY_ICONS[index];
                      return (
                        <li key={item.title} className="flex items-start gap-3">
                          <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <div className="font-medium">{item.title}</div>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 font-semibold text-lg">
                    <Sparkles className="h-5 w-5 text-primary" />
                    {t.saas.featured.featuresHeading}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {t.saas.featured.features.map((item) => (
                      <li key={item.label} className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>
                          <strong>{item.label}</strong>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Cloud className="h-5 w-5 text-primary" />
                {t.saas.infra.title}
              </CardTitle>
              <CardDescription>{t.saas.infra.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {t.saas.infra.items.map((item) => (
                  <div key={item.title} className="rounded-lg border bg-card p-4">
                    <div className="mb-1 font-semibold">{item.title}</div>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Pilar 2: Consultoria e Capacitação */}
        <section id={anchors.consulting} className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-primary/10 p-4">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="mb-2 font-bold text-3xl">{t.consulting.heading}</h2>
              <p className="text-lg text-muted-foreground">{t.consulting.subtitle}</p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t.consulting.cardTitle}</CardTitle>
              <CardDescription>{t.consulting.cardDescription}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 font-semibold text-lg">
                    <Target className="h-5 w-5 text-primary" />
                    {t.consulting.areasHeading}
                  </h3>
                  <ArrowList items={t.consulting.areas} />
                </div>

                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 font-semibold text-lg">
                    <Users className="h-5 w-5 text-primary" />
                    {t.consulting.commitmentHeading}
                  </h3>
                  <ArrowList items={t.consulting.commitment} />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Pilar 3: Desenvolvimento Sob Medida */}
        <section id={anchors.development} className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-primary/10 p-4">
              <Code2 className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="mb-2 font-bold text-3xl">{t.development.heading}</h2>
              <p className="text-lg text-muted-foreground">{t.development.subtitle}</p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t.development.cardTitle}</CardTitle>
              <CardDescription>{t.development.cardDescription}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6">
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 font-semibold text-lg">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    {t.development.methodologyHeading}
                  </h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    {t.development.steps.map((step) => (
                      <div key={step.title} className="rounded-lg border bg-card p-4">
                        <div className="mb-2 font-semibold">{step.title}</div>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {[
                  { icon: Zap, content: t.development.billing },
                  { icon: Scale, content: t.development.legal },
                ].map(({ icon: Icon, content }) => (
                  <div key={content.title} className="space-y-4 rounded-lg bg-muted/50 p-6">
                    <h3 className="flex items-center gap-2 font-semibold text-lg">
                      <Icon className="h-5 w-5 text-primary" />
                      {content.title}
                    </h3>
                    <p className="text-muted-foreground">{content.body}</p>
                    <ul className="grid gap-3 md:grid-cols-2">
                      {content.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <Card className="border-2 border-primary/20 bg-linear-to-br from-primary/5 to-transparent">
            <CardContent className="space-y-6 pt-12 pb-12 text-center">
              <h2 className="font-bold text-3xl md:text-4xl">{t.cta.title}</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{t.cta.body}</p>
              <Button size="lg" asChild>
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  {t.cta.button}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
