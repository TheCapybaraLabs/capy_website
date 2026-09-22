"use client";

import { Mail, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";

type ContactRevealProps = {
  label: string;
  emailLabel: string;
  whatsappLabel: string;
  email: string;
  /** Só dígitos, com código do país — é o que o link wa.me espera. */
  whatsappNumber: string;
  whatsappMessage: string;
  phoneDisplay: string;
};

/**
 * Botão "Falar com o time": em vez de abrir o cliente de e-mail direto, ao
 * clicar revela e-mail e WhatsApp lado a lado, pra a pessoa escolher o canal.
 * WhatsApp abre via wa.me (API oficial de link direto, sem custo/token —
 * suficiente aqui, já que não precisamos de nenhum recurso da Cloud API),
 * numa aba nova, com a conversa pré-preenchida.
 *
 * Fecha ao clicar fora, ao apertar Esc ou ao escolher um canal — mesmo
 * padrão de `LanguageSelector` (ui/language-selector-dropdown.tsx).
 */
export function ContactReveal({
  label,
  emailLabel,
  whatsappLabel,
  email,
  whatsappNumber,
  whatsappMessage,
  phoneDisplay,
}: ContactRevealProps) {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const optionsId = useId();

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const pillClassName =
    "inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[var(--lc-border)] bg-[var(--lc-card)] px-4 py-2 text-[var(--lc-fg)] text-sm transition-colors hover:bg-[var(--lc-border)]";

  return (
    <div className="flex flex-col items-center gap-3" ref={containerRef}>
      <LiquidMetalButton label={label} onClick={() => setOpen((value) => !value)} />

      <AnimatePresence>
        {open && (
          <motion.div
            id={optionsId}
            role="group"
            aria-label={`${emailLabel} / ${whatsappLabel}`}
            initial={{ opacity: 0, height: 0, y: -4 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -4 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-2 overflow-hidden sm:flex-row"
          >
            <a href={`mailto:${email}`} className={pillClassName} onClick={() => setOpen(false)}>
              <Mail size={16} />
              {emailLabel}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={pillClassName}
              onClick={() => setOpen(false)}
            >
              <MessageCircle size={16} />
              {whatsappLabel} · {phoneDisplay}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
