import Image from "next/image";
import { Reveal } from "./reveal";

type AiLogo = {
  src: string;
  alt: string;
  /** O SVG da OpenAI é monocromático (currentColor → preto): precisa inverter no tema escuro. */
  invertOnDark?: boolean;
};

const AI_LOGOS: AiLogo[] = [
  { src: "/ai-logos/openai.svg", alt: "OpenAI", invertOnDark: true },
  { src: "/ai-logos/gemini.svg", alt: "Gemini" },
  { src: "/ai-logos/claude.webp", alt: "Claude" },
  { src: "/ai-logos/deepseek.svg", alt: "DeepSeek" },
];

/** Capivara da marca e, abaixo, os modelos de IA disponíveis na plataforma. */
export function AiLogosShowcase() {
  return (
    <div className="mt-20 flex flex-col items-center">
      {/*
        Duas imagens, uma por tema, trocadas via CSS (não JS): evita o flash
        de "imagem errada" que useTheme() teria até a hidratação decidir qual
        tema está ativo — mesma lógica do dark:invert da OpenAI abaixo.
      */}
      <Reveal>
        <Image
          src="/ai-logos/capivara-sem-fundo.png"
          alt="Capybara Labs"
          width={1024}
          height={1024}
          className="hidden h-28 w-auto object-contain sm:h-32 dark:block"
        />
        <Image
          src="/ai-logos/capivara-sem-fundo-tema-claro.png"
          alt="Capybara Labs"
          width={1024}
          height={1024}
          className="block h-28 w-auto object-contain sm:h-32 dark:hidden"
        />
      </Reveal>

      <Reveal delay={0.12}>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
          {AI_LOGOS.map((logo) => (
            <li key={logo.alt} className="flex items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={48}
                height={48}
                unoptimized
                className={`h-9 w-auto object-contain sm:h-10 ${logo.invertOnDark ? "dark:invert" : ""}`}
              />
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
