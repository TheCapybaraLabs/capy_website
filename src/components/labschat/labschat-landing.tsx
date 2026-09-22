import {
  LABSCHAT_EMAIL,
  LABSCHAT_PHONE_DISPLAY,
  LABSCHAT_WHATSAPP_NUMBER,
} from "@/constants/config";
import type { Dict } from "@/i18n";
import { AiLogosShowcase } from "./ai-logos-showcase";
import { BeamsBackground } from "./beams-background";
import { ContactReveal } from "./contact-reveal";
import "./labschat.css";
import { MiniNav } from "./mini-nav";
import { PartnersLogoLoop } from "./partners-logo-loop";
import { Reveal } from "./reveal";
import { ShowcaseStackingCards } from "./showcase-stacking-cards";

type LabschatLandingProps = {
  t: Dict["labschatPage"];
  homeHref: string;
};

export function LabschatLanding({ t, homeHref }: LabschatLandingProps) {
  return (
    // `overflow-x-clip` (e não `hidden`): `hidden` transformaria este wrapper em
    // contêiner de rolagem e mataria o `position: sticky` dos stacking cards.
    // `clip` corta o transbordo horizontal da faixa de parceiros do mesmo jeito.
    <div className="labschat-page relative isolate min-h-screen overflow-x-clip">
      {/* `isolate` on the wrapper above gives this -z-10 layer its own local
          stacking context — without it, a negative z-index here escapes past
          the wrapper's own background paint entirely and renders invisible. */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <BeamsBackground />
      </div>

      <MiniNav homeHref={homeHref} docsLabel={t.nav.docs} />

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-28 pb-16 text-center sm:px-6">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-[var(--lc-border)] px-4 py-1.5 text-[var(--lc-muted)] text-xs tracking-wide sm:text-sm">
            {t.hero.badge}
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-8 max-w-4xl font-bold text-4xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-[var(--lc-fg)]">{t.hero.titleLead}</span>{" "}
            <span className="text-[var(--lc-fg-muted)]">{t.hero.titleAccent}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-[var(--lc-muted)] text-lg">{t.hero.subtitle}</p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row">
            <ContactReveal
              label={t.hero.ctaPrimary}
              emailLabel={t.contactOptions.email}
              whatsappLabel={t.contactOptions.whatsapp}
              email={LABSCHAT_EMAIL}
              whatsappNumber={LABSCHAT_WHATSAPP_NUMBER}
              whatsappMessage={t.contactOptions.whatsappMessage}
              phoneDisplay={LABSCHAT_PHONE_DISPLAY}
            />
            <a
              href="#features"
              className="font-medium text-[var(--lc-muted)] text-sm underline-offset-4 transition-colors hover:text-[var(--lc-fg)] hover:underline"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </Reveal>
      </section>

      {/* Features */}
      <section id="features" className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <Reveal>
          <h2 className="text-center font-semibold text-2xl tracking-tight sm:text-3xl">
            {t.features.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {t.features.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-[var(--lc-border)] bg-[var(--lc-card)] p-6 sm:p-8">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-[var(--lc-muted)]">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <AiLogosShowcase />
      </section>

      {/* Parceiros */}
      <section className="relative py-16">
        <Reveal>
          <p className="px-4 text-center text-[var(--lc-muted)] text-sm uppercase tracking-wide">
            {t.partners.heading}
          </p>
        </Reveal>
        <div className="mt-10">
          <PartnersLogoLoop ariaLabel={t.partners.heading} />
        </div>
      </section>

      {/* Telas reais, em cards que empilham na rolagem */}
      <ShowcaseStackingCards t={t.showcase} />

      {/* CTA final */}
      <section className="relative mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <Reveal>
          <p className="text-balance font-medium text-xl sm:text-2xl">{t.cta.body}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 flex justify-center">
            <ContactReveal
              label={t.cta.button}
              emailLabel={t.contactOptions.email}
              whatsappLabel={t.contactOptions.whatsapp}
              email={LABSCHAT_EMAIL}
              whatsappNumber={LABSCHAT_WHATSAPP_NUMBER}
              whatsappMessage={t.contactOptions.whatsappMessage}
              phoneDisplay={LABSCHAT_PHONE_DISPLAY}
            />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
