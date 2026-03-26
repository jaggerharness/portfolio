import Link from "next/link";
import type { ReactNode } from "react";

import { ChecksumDecoder } from "@/components/portfolio/ChecksumDecoder";
import { SiteShell } from "@/components/portfolio/SiteShell";

type StatusPageProps = {
  codeLabel: string;
  title: string;
  quip: string;
  actions?: ReactNode;
};

export function StatusPage({ codeLabel, title, quip, actions }: StatusPageProps) {
  return (
    <SiteShell>
      <main className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.45em] text-nebula-teal">
          {codeLabel}
        </p>
        <h1 className="font-display mt-5 text-3xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-5xl sm:leading-[1.05]">
          <span className="bg-gradient-to-r from-text-primary via-nebula-teal to-nebula-magenta bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        <p className="mt-6 max-w-lg font-mono text-sm leading-relaxed text-text-muted sm:text-base">
          {quip}
        </p>
        {actions ? (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">{actions}</div>
        ) : null}
        <ChecksumDecoder
          className="mt-14 font-mono text-[10px] text-text-muted transition-colors hover:text-nebula-teal focus-visible:outline-offset-4"
          defaultIndex={0}
        />
      </main>
    </SiteShell>
  );
}

export function HomeLinkButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center justify-center rounded-full border border-nebula-teal/50 bg-nebula-teal/10 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-nebula-teal transition-colors hover:bg-nebula-teal/20 focus-visible:outline-offset-4"
    >
      Plot course home
    </Link>
  );
}
