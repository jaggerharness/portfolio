"use client";

import { useEffect, useRef, useState } from "react";

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
] as const;

const BURST_MS = 2600;

export function KonamiEasterEgg() {
  const [active, setActive] = useState(false);
  const sequenceIndexRef = useRef(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      const expected = KONAMI_SEQUENCE[sequenceIndexRef.current];

      if (key === expected) {
        sequenceIndexRef.current += 1;
      } else if (key === KONAMI_SEQUENCE[0]) {
        sequenceIndexRef.current = 1;
      } else {
        sequenceIndexRef.current = 0;
      }

      if (sequenceIndexRef.current === KONAMI_SEQUENCE.length) {
        sequenceIndexRef.current = 0;
        setActive(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!active) {
      document.body.classList.remove("konami-burst");
      return;
    }

    document.body.classList.add("konami-burst");

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setActive(false);
      timeoutRef.current = null;
    }, BURST_MS);

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      document.body.classList.remove("konami-burst");
    };
  }, [active]);

  return active ? (
    <div className="pointer-events-none fixed inset-x-0 top-20 z-[400] flex justify-center px-4">
      <p className="rounded-full border border-nebula-teal/45 bg-void-mid/95 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.28em] text-nebula-teal shadow-[0_0_34px_-10px_rgba(45,212,191,0.8)]">
        Konami code accepted · nebula burst engaged
      </p>
    </div>
  ) : null;
}
