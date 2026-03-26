"use client";

import { useEffect } from "react";

import "./globals.css";
import { HomeLinkButton, StatusPage } from "@/components/portfolio/StatusPage";
import { rootFontClassName } from "@/lib/fonts";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en" className={rootFontClassName}>
      <body className="min-h-full font-sans">
        <StatusPage
          codeLabel="Critical · core fault"
          title="Even the void crashed"
          quip="The root layout could not hold orbit—something tore through the hull of the app shell itself. If you are the operator, check the console; if you are a visitor, we will restack the nebula shortly."
          actions={
            <>
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-text-primary transition-colors hover:border-nebula-magenta/40 hover:bg-white/5 focus-visible:outline-offset-4"
              >
                Reboot sequence
              </button>
              <HomeLinkButton />
            </>
          }
        />
      </body>
    </html>
  );
}
