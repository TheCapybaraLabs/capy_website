import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'Termos de Serviço',
  description:
    'Termos e condições de uso dos serviços da Capybara Labs. Leia nossos termos antes de utilizar nossas soluções.',
  keywords: ['termos de serviço', 'condições de uso', 'contrato', 'termos legais', 'GPT Labs'],
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <Badge variant="outline">Termos de Serviço</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Termos de Serviço</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Última atualização: 24 de outubro de 2025</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Aceitação dos Termos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Ao acessar e utilizar os serviços da Capybara Labs, você concorda em ficar vinculado a estes Termos de
                  Serviço. Se você não concordar com qualquer parte destes termos, não utilize nossos serviços.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Serviços Oferecidos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>A Capybara Labs oferece os seguintes serviços:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Consultoria e capacitação técnica em Inteligência Artificial</li>
                  <li>Desenvolvimento de soluções de software sob medida</li>
                  <li>Plataformas SaaS corporativas, incluindo GPT Labs white-label</li>
                  <li>Treinamentos especializados em tecnologia e IA</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Responsabilidades do Cliente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>O cliente concorda em:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fornecer informações precisas e completas</li>
                  <li>Manter a confidencialidade de credenciais de acesso</li>
                  <li>Utilizar os serviços de acordo com a legislação aplicável</li>
                  <li>Não utilizar os serviços para fins ilícitos ou não autorizados</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Propriedade Intelectual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Todo conteúdo, software, código e materiais fornecidos pela Capybara Labs são protegidos por direitos
                  autorais e outras leis de propriedade intelectual.
                </p>
                <p>
                  Para projetos customizados, os termos de propriedade intelectual serão definidos em contrato
                  específico.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Confidencialidade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  A Capybara Labs se compromete a manter a confidencialidade de todas as informações fornecidas pelos
                  clientes durante a prestação de serviços.
                </p>
                <p>
                  Para nossa plataforma de GPT Labs corporativo, garantimos que nenhum dado do cliente será utilizado
                  para treinamento de modelos de IA externos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Limitação de Responsabilidade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  A Capybara Labs não será responsável por danos indiretos, incidentais, especiais ou consequenciais
                  resultantes do uso ou impossibilidade de uso de nossos serviços.
                </p>
                <p>
                  Nossos serviços são fornecidos &quot;como estão&quot; e fazemos todos os esforços razoáveis para
                  garantir sua qualidade e disponibilidade.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Modificações dos Termos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  A Capybara Labs reserva-se o direito de modificar estes termos a qualquer momento. Notificaremos os
                  clientes sobre mudanças significativas por e-mail ou através de nosso site.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Lei Aplicável</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Estes Termos de Serviço são regidos pelas leis da República Federativa do Brasil. Qualquer disputa
                  será resolvida nos tribunais competentes do Brasil.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Para questões sobre estes Termos de Serviço, entre em contato:</p>
                <p className="font-semibold text-foreground">E-mail: contato@capybaralabs.com.br</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
