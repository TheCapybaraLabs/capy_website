import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { CONTACT_EMAIL } from '@/constants/config';

export function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="border-2 border-primary/20 bg-linear-to-br from-primary/5 to-transparent">
          <CardContent className="pt-12 pb-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Pronto para Transformar sua Organização?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Entre em contato e descubra como a Capybara Labs pode impulsionar a inovação e eficiência da sua empresa
              com IA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
