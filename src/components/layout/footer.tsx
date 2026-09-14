import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { CONTACT_EMAIL, LOGO_IMAGE_PATH } from "@/constants/config";
import { type Dict, getLinks, type Locale } from "@/i18n";

type FooterProps = {
  locale: Locale;
  dict: Dict;
};

export function Footer({ locale, dict }: FooterProps) {
  const links = getLinks(locale, dict);

  const solutionLinks = [
    { href: links.saas, label: dict.footer.saas },
    { href: links.consulting, label: dict.footer.consulting },
    { href: links.development, label: dict.footer.development },
  ];

  const companyLinks = [
    { href: links.about, label: dict.footer.about },
    { href: links.cases, label: dict.footer.cases },
  ];

  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src={LOGO_IMAGE_PATH}
                alt="Capybara Labs"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-bold text-lg">Capybara Labs</span>
            </div>
            <p className="text-muted-foreground text-sm">{dict.footer.tagline}</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">{dict.footer.solutionsHeading}</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {solutionLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">{dict.footer.companyHeading}</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">{dict.footer.contactHeading}</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition-colors hover:text-foreground"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>{dict.footer.location}</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-muted-foreground text-sm md:flex-row">
          <p>
            © 2024-{new Date().getFullYear()} Capybara Labs. {dict.footer.rights}
          </p>
          {/* Os documentos legais só existem em pt-BR; hrefLang avisa o leitor
              em inglês de que o link muda de idioma. */}
          <div className="flex gap-6">
            <Link
              href={links.privacy}
              hrefLang="pt-BR"
              className="transition-colors hover:text-foreground"
            >
              {dict.footer.privacy}
            </Link>
            <Link
              href={links.terms}
              hrefLang="pt-BR"
              className="transition-colors hover:text-foreground"
            >
              {dict.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
