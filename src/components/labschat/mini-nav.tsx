import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type MiniNavProps = {
  homeHref: string;
  docsLabel: string;
};

/**
 * Nav própria da landing imersiva — deliberadamente diferente do header
 * institucional (ver Header/Footer + isImmersivePath), só com o essencial:
 * voltar pro site e ir pra documentação do produto.
 */
export function MiniNav({ homeHref, docsLabel }: MiniNavProps) {
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <nav className="flex w-full max-w-5xl items-center justify-between rounded-full border border-[var(--lc-border)] bg-[var(--lc-bg)]/70 px-4 py-2.5 backdrop-blur-md sm:px-6">
        <Link
          href={homeHref}
          className="font-semibold text-[var(--lc-fg)] text-sm tracking-tight transition-opacity hover:opacity-70"
        >
          LabsChat<span className="text-[var(--lc-muted)]">.Ai</span>
        </Link>
        <a
          href="https://docs.labschat.ai"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-1 text-[var(--lc-muted)] text-sm transition-colors hover:text-[var(--lc-fg)]"
        >
          {docsLabel}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </nav>
    </div>
  );
}
