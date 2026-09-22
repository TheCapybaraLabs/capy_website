"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { type LogoItem, LogoLoop } from "./logo-loop";

type PartnerLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Logos coloridos, com contraste suficiente pra funcionar nos dois temas. */
const ALWAYS: PartnerLogo[] = [
  { src: "/labschat-logos/fecomercio-pi.png", alt: "Fecomércio PI", width: 4157, height: 1889 },
  { src: "/labschat-logos/sebrae.png", alt: "SEBRAE", width: 4156, height: 2257 },
  { src: "/labschat-logos/senai.png", alt: "SENAI", width: 4161, height: 1186 },
  { src: "/labschat-logos/sesi.png", alt: "SESI", width: 4160, height: 1452 },
  {
    src: "/labschat-logos/dom-barreto.png",
    alt: "Instituto Dom Barreto",
    width: 4157,
    height: 4235,
  },
];

/**
 * Grupo Ativa e Junior Achievement só existem em versões monocromáticas
 * (preta e branca cada) — a certa depende do tema, pra sempre ter contraste
 * contra o fundo.
 */
const DARK_ONLY: PartnerLogo[] = [
  {
    src: "/labschat-logos/junior-achievement.png",
    alt: "Junior Achievement",
    width: 4160,
    height: 1101,
  },
  { src: "/labschat-logos/grupo-ativa-branco.png", alt: "Grupo Ativa", width: 4160, height: 906 },
];

const LIGHT_ONLY: PartnerLogo[] = [
  {
    src: "/labschat-logos/junior-achievement-escuro.png",
    alt: "Junior Achievement",
    width: 4160,
    height: 1101,
  },
  { src: "/labschat-logos/grupo-ativa.png", alt: "Grupo Ativa", width: 4160, height: 906 },
];

function toLogoItems(logos: PartnerLogo[]): LogoItem[] {
  return logos.map((logo) => ({
    node: (
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className="h-7 w-auto object-contain sm:h-8"
      />
    ),
    ariaLabel: logo.alt,
  }));
}

type PartnersLogoLoopProps = {
  ariaLabel: string;
};

export function PartnersLogoLoop({ ariaLabel }: PartnersLogoLoopProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const themed = resolvedTheme === "light" ? LIGHT_ONLY : DARK_ONLY;
  const logos = toLogoItems([...ALWAYS, ...themed]);

  return (
    <LogoLoop
      logos={logos}
      speed={50}
      logoHeight={32}
      gap={72}
      fadeOut
      fadeOutColor="var(--lc-bg)"
      ariaLabel={ariaLabel}
    />
  );
}
