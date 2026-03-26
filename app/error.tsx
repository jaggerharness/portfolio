"use client";

import { useEffect, useState } from "react";

import { HomeLinkButton, StatusPage } from "@/components/portfolio/StatusPage";

const QUIPS = [
  "Telemetry glitched mid-transit—somewhere between the nebula and the bundle, an exception went supernova.",
  "Our instruments logged a fault in local spacetime. Could be cosmic rays, could be a rogue dependency. Either way, the viewscreen went magenta.",
  "The starfield hiccuped. If this were production infra, we would roll back the universe and page whoever owns the singularity.",
] as const;

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [quip] = useState(() => QUIPS[Math.floor(Math.random() * QUIPS.length)]);

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusPage
      codeLabel="Error · instruments fault"
      title="Nebula interference"
      quip={quip}
      actions={
        <>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-text-primary transition-colors hover:border-nebula-magenta/40 hover:bg-white/5 focus-visible:outline-offset-4"
          >
            Retry launch
          </button>
          <HomeLinkButton />
        </>
      }
    />
  );
}
