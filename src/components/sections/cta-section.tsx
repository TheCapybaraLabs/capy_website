import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT_EMAIL } from "@/constants/config";
import type { Dict } from "@/i18n";

type CTASectionProps = {
  t: Dict["cta"];
};

export function CTASection({ t }: CTASectionProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="border-2 border-primary/20 bg-linear-to-br from-primary/5 to-transparent">
          <CardContent className="space-y-6 pt-12 pb-12 text-center">
            <h2 className="font-bold text-3xl md:text-4xl">{t.title}</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{t.body}</p>
            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <Button size="lg" asChild>
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  {t.button}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
