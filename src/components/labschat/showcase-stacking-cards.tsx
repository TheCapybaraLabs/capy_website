"use client";

import Image from "next/image";
import StackingCards, { StackingCardItem } from "@/components/ui/stacking-cards";
import type { Dict } from "@/i18n";
import { Reveal } from "./reveal";

/** Screenshots reais, na mesma ordem dos textos em `t.items`. */
const SCREENS = [
  "/labschat-screens/login-ativa.png",
  "/labschat-screens/login-ja.png",
  "/labschat-screens/agentes.png",
] as const;

type ShowcaseStackingCardsProps = {
  t: Dict["labschatPage"]["showcase"];
};

export function ShowcaseStackingCards({ t }: ShowcaseStackingCardsProps) {
  return (
    <section className="relative px-4 pt-24 sm:px-6">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-semibold text-2xl tracking-tight sm:text-3xl">
            {t.heading}
          </h2>
          <p className="mt-4 text-[var(--lc-muted)]">{t.subheading}</p>
        </div>
      </Reveal>

      <StackingCards totalCards={t.items.length} scaleMultiplier={0.04} className="mt-12">
        {t.items.map((item, index) => (
          <StackingCardItem
            key={item.title}
            index={index}
            // Altura fixa (e não da viewport): o card tem altura automática,
            // ditada pela largura máxima e pela proporção da screenshot.
            className="h-[620px] sm:h-[700px]"
            // Começa mais abaixo que o padrão (5%) pra o card não passar por
            // baixo da pílula flutuante do MiniNav, que é `fixed top-0`.
            topPosition={`${76 + index * 22}px`}
          >
            {/*
              Duas colunas só a partir de `lg`: abaixo disso a coluna de texto
              ficaria estreita demais e esticaria o card pra fora do slot.
            */}
            <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-2 rounded-3xl border border-[var(--lc-border)] bg-[var(--lc-bg)] p-5 shadow-[0_-10px_50px_-12px_rgba(0,0,0,0.25)] lg:max-w-6xl lg:flex-row lg:gap-4 lg:p-6">
              <div className="flex flex-col justify-center gap-3 px-2 lg:w-[38%] lg:px-4">
                <span className="text-[var(--lc-fg-muted)] text-xs uppercase tracking-wide">
                  {item.eyebrow}
                </span>
                <h3 className="text-balance font-semibold text-xl leading-snug sm:text-2xl">
                  {item.title}
                </h3>
                <p className="text-[var(--lc-muted)] text-sm sm:text-base">{item.description}</p>
              </div>

              {/*
                `object-contain` numa caixa 3:2: as screenshots têm margem
                transparente em volta da janela, então a sobra do contain some
                no fundo do card — a tela aparece inteira, sem corte.
              */}
              <div className="relative aspect-[3/2] w-full lg:w-[62%]">
                <Image
                  src={SCREENS[index]}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 720px"
                  quality={90}
                  className="object-contain"
                />
              </div>
            </div>
          </StackingCardItem>
        ))}
      </StackingCards>
    </section>
  );
}
