import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="sobre" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <Badge variant="outline">Sobre Nós</Badge>
            <h2 className="font-bold text-3xl md:text-4xl">Referência em Tecnologia e IA</h2>
            <p className="text-lg text-muted-foreground">
              Capybara Labs é uma referência no mercado de Tecnologia da Informação, destacando-se
              pela expertise consolidada em Inteligência Artificial, consultoria e treinamento
              técnico.
            </p>
            <p className="text-muted-foreground">
              Nossa missão é transformar a relação das organizações com a tecnologia, promovendo
              inovação, eficiência e excelência em processos administrativos e operacionais.
            </p>
          </div>

          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Nosso Diferencial</CardTitle>
              <CardDescription className="text-base">
                Estrutura operacional e excelência técnica
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                O principal diferencial da Capybara Labs reside em nossa estrutura operacional e
                excelência técnica.
              </p>
              <p className="text-muted-foreground">
                Adotamos um modelo de{" "}
                <span className="font-semibold text-foreground">
                  equipe enxuta, multidisciplinar e altamente eficiente
                </span>
                . É justamente essa estrutura que garante nossa agilidade e personalização no
                atendimento ao cliente.
              </p>
              <p className="text-muted-foreground">
                A experiência e o conhecimento conjunto de nossa equipe diversificada elevam o
                potencial da empresa, permitindo-nos focar inteiramente em cada projeto e entregar
                resultados superiores, sem a burocracia ou a impessoalidade de grandes consultorias.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
