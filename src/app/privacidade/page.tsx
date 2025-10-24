import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export const metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade da Capybara Labs. Saiba como tratamos seus dados pessoais e garantimos sua proteção.',
  keywords: ['privacidade', 'LGPD', 'dados pessoais', 'proteção de dados', 'política de privacidade'],
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <Badge variant="outline">Política de Privacidade</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Política de Privacidade</h1>
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
                <CardTitle>1. Informações que Coletamos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  A Capybara Labs coleta informações que você nos fornece diretamente ao entrar em contato conosco,
                  solicitar serviços ou participar de nossos treinamentos.
                </p>
                <p>Podemos coletar:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nome e informações de contato (e-mail, telefone)</li>
                  <li>Informações da empresa (nome da organização, cargo)</li>
                  <li>Informações de comunicação e feedback</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Como Usamos suas Informações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Utilizamos as informações coletadas para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fornecer e melhorar nossos serviços de consultoria e treinamento</li>
                  <li>Responder às suas solicitações e fornecer suporte</li>
                  <li>Enviar informações relevantes sobre nossos serviços</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Compartilhamento de Informações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  A Capybara Labs não vende, aluga ou compartilha suas informações pessoais com terceiros, exceto
                  quando:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Necessário para fornecer os serviços solicitados</li>
                  <li>Exigido por lei ou ordem judicial</li>
                  <li>Com seu consentimento explícito</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Conformidade com a LGPD</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Estamos comprometidos com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Seus dados são
                  tratados com total segurança e confidencialidade.
                </p>
                <p>Você tem o direito de:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Revogar o consentimento</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Segurança dos Dados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações pessoais
                  contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
                <p>
                  Nossos serviços de IA corporativa operam em infraestrutura dedicada no Brasil, garantindo soberania de
                  dados e conformidade com regulamentações nacionais.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato:
                </p>
                <p className="font-semibold text-foreground">E-mail: labs@capybaralabs.com.br</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
