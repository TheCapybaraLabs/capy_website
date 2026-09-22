"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { BeamsProps } from "./beams";

const Beams = dynamic(() => import("./beams"), { ssr: false });

/**
 * Uma cena só. O modo claro não é recalibrado à parte — é o mesmo render do
 * escuro, com as cores literalmente invertidas via CSS (`filter: invert()`).
 * Ajustar `lightMode`/cores do shader pra tentar imitar isso direto deixava
 * os feixes claros pouco definidos; a inversão pixel-a-pixel garante que os
 * dois temas sejam sempre o mesmo visual, só espelhado.
 */
const PALETTE: Pick<BeamsProps, "backgroundColor" | "beamColor" | "lightColor" | "lightMode"> = {
  backgroundColor: "#030304",
  beamColor: "#000000",
  lightColor: "#ffffff",
  lightMode: false,
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(max-width: 768px)");
    setIsMobile(query.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  return isMobile;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/**
 * Alguns navegadores/dispositivos não têm WebGL disponível (GPU desabilitada,
 * hardware antigo, políticas corporativas). Nesse caso o
 * `THREE.WebGLRenderer` falha dentro de uma promise interna do
 * @react-three/fiber — vira unhandledRejection, não um erro de render, então
 * um error boundary não pega. Checar antes de montar o Canvas evita o erro
 * de vez: sem WebGL, a página só fica com a cor de fundo sólida (já definida
 * em labschat.css), sem o Canvas.
 */
function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

/**
 * Fundo ambiente full-page da landing /labschat. Fica atrás de todo o
 * conteúdo (posicionamento cuidado pelo componente pai). No tema claro, a
 * mesma cena é invertida via CSS (`invert`) em vez de recalibrada — ver nota
 * em `PALETTE`.
 *
 * Mobile e "prefers-reduced-motion" reduzem a cena (menos feixes) em vez de
 * trocar pra uma imagem estática — mantém a mesma linguagem visual, só mais
 * leve.
 */
export function BeamsBackground() {
  const { resolvedTheme } = useTheme();
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    setMounted(true);
    setWebglSupported(isWebGLAvailable());
  }, []);

  if (!mounted || !webglSupported) return null;

  return (
    <div className={cn("h-full w-full", resolvedTheme === "light" && "invert")}>
      <Beams
        {...PALETTE}
        beamNumber={isMobile ? 7 : 12}
        speed={reducedMotion ? 0.4 : isMobile ? 1.4 : 2}
        noiseIntensity={isMobile ? 1.3 : 1.75}
        scale={0.2}
        rotation={20}
      />
    </div>
  );
}
