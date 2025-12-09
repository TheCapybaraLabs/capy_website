import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Award, Mail, Linkedin } from 'lucide-react';

export const metadata = {
  title: 'Equipe',
  description:
    'Conheça nossa equipe multidisciplinar e altamente eficiente. Especialistas em IA, desenvolvimento e inovação tecnológica.',
  keywords: ['equipe', 'IA', 'desenvolvimento', 'inovação'],
};

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <Badge variant="outline">Nossa Equipe</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Conheça Quem Faz a Capybara Labs</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma equipe enxuta, multidisciplinar e altamente qualificada, dedicada a transformar organizações com
              tecnologia e IA
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Leadership */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Liderança</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Fabrício - CTO */}
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-3xl shrink-0">
                        👨‍💻
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl">Fabrício de Almeida Brito</CardTitle>
                        <CardDescription className="text-base mt-1">Responsável Técnico & Fundador</CardDescription>
                        <div className="flex gap-2 mt-3">
                          <a
                            href="mailto:fabricio+contato@capybaralabs.com.br"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Mail className="w-5 h-5" />
                          </a>
                          <a
                            href="#"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Engenheiro Eletricista (USP)</p>
                          <p className="text-sm text-muted-foreground">
                            Ênfase em Eletrônica e Sistemas Digitais. Certificações em Engenharia Biomédica.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Prêmio CREA-SP 2016</p>
                          <p className="text-sm text-muted-foreground">1º lugar na turma de formandos</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Prêmio CBEB 2016</p>
                          <p className="text-sm text-muted-foreground">1º lugar em Iniciação Científica</p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <p className="text-sm text-muted-foreground">
                      Com publicações internacionais na área de imagens médicas, utilizando técnicas de processamento de
                      imagens de última geração, e vasta experiência em pesquisa e desenvolvimento de sistemas
                      biomédicos, Fabrício lidera a Capybara Labs com compromisso sólido em entregar soluções inovadoras
                      que promovem a transformação digital e a eficiência organizacional.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Team Culture */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary">Nossa Cultura</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Excelência Técnica</h3>
                  <p className="text-muted-foreground">
                    Profissionais altamente qualificados com expertise consolidada em suas áreas de atuação.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Agilidade</h3>
                  <p className="text-muted-foreground">
                    Estrutura enxuta que permite respostas rápidas e personalização em cada projeto.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Multidisciplinaridade</h3>
                  <p className="text-muted-foreground">
                    Combinação de conhecimentos diversos para entregar soluções completas e inovadoras.
                  </p>
                </div>
              </div>
            </div>

            {/* Join Us */}
            {/* <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold">Faça Parte do Time</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Estamos sempre em busca de talentos excepcionais que compartilhem nossa paixão por tecnologia e
                inovação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="mailto:contato@capybaralabs.com.br" className="inline-block">
                  <Card className="border-2 hover:border-primary transition-colors cursor-pointer px-8 py-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-6 h-6 text-primary" />
                      <div className="text-left">
                        <p className="font-semibold">Entre em Contato</p>
                        <p className="text-sm text-muted-foreground">contato@capybaralabs.com.br</p>
                      </div>
                    </div>
                  </Card>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
