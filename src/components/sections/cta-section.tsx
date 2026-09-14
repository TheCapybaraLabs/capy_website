import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT_EMAIL } from "@/constants/config";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="border-2 border-primary/20 bg-linear-to-br from-primary/5 to-transparent">
          <CardContent className="space-y-6 pt-12 pb-12 text-center">
            <h2 className="font-bold text-3xl md:text-4xl">
              Pronto para Transformar sua Organização?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Entre em contato e descubra como a Capybara Labs pode impulsionar a inovação e
              eficiência da sua empresa com IA
            </p>
            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <Button size="lg" asChild>
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  Fale com Nossos Especialistas
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              {/* <Button size="lg" variant="outline">
                Baixar Apresentação
              </Button> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
