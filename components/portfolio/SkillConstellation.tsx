"use client";

import { useEffect, useRef, useState } from "react";

import type { SkillGroup } from "@/lib/resume";

const orbitAngles = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2"] as const;
const SECRET_COMBO = [
  "TypeScript",
  "React",
  "MySQL",
  "Jest",
  "Google Cloud Platform",
  "Git",
] as const;

export function SkillConstellation({
  groups,
}: {
  groups: readonly SkillGroup[];
}) {
  const unlockedRef = useRef<Set<string>>(new Set());
  const [showTransmission, setShowTransmission] = useState(false);

  const onProbeSkill = (item: string) => {
    if (!SECRET_COMBO.includes(item as (typeof SECRET_COMBO)[number])) {
      return;
    }

    unlockedRef.current.add(item);
    const hasCombo = SECRET_COMBO.every((part) => unlockedRef.current.has(part));
    if (hasCombo) {
      setShowTransmission(true);
      unlockedRef.current.clear();
    }
  };

  useEffect(() => {
    if (!showTransmission) return;

    const timeout = window.setTimeout(() => setShowTransmission(false), 4800);
    return () => window.clearTimeout(timeout);
  }, [showTransmission]);

  return (
    <div className="space-y-14">
      {groups.map((group, gi) => (
        <div key={group.label}>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.35em] text-nebula-teal">
            {group.label}
          </h3>
          <ul
            className={`mt-4 flex flex-wrap gap-2 sm:gap-3 ${orbitAngles[gi % orbitAngles.length]}`}
          >
            {group.items.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className="inline-block rounded-full border border-[color:var(--card-edge)] bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-text-primary/90 shadow-[0_0_20px_-8px_rgba(232,121,249,0.35)] transition-transform duration-300 hover:-translate-y-0.5 hover:border-nebula-magenta/40 focus-visible:outline-offset-4 sm:px-4 sm:text-xs"
                  onPointerEnter={() => onProbeSkill(item)}
                  onFocus={() => onProbeSkill(item)}
                  onClick={() => onProbeSkill(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p
        className={`rounded-lg border border-nebula-teal/30 bg-nebula-teal/[0.06] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-nebula-teal transition-all duration-400 ${
          showTransmission ? "opacity-100 shadow-[0_0_26px_-10px_rgba(45,212,191,0.9)]" : "opacity-0"
        }`}
        aria-live="polite"
      >
        Decoded transmission: JAZZ HANDS DETECTED · AMAAAZE
      </p>
    </div>
  );
}
