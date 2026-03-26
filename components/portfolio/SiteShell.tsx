import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-full overflow-x-hidden bg-void text-text-primary">
      <div className="pointer-events-none fixed inset-0 z-0 bg-void" aria-hidden />
      <div
        className="pointer-events-none fixed -left-1/4 top-0 z-0 h-[70vh] w-[70vw] rounded-full bg-gradient-to-br from-nebula-magenta/35 via-nebula-coral/20 to-transparent blur-2xl sm:blur-3xl animate-nebula-a"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed -right-1/4 bottom-0 z-0 h-[65vh] w-[65vw] rounded-full bg-gradient-to-tl from-nebula-teal/30 via-nebula-magenta/15 to-transparent blur-2xl sm:blur-3xl animate-nebula-b"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-void-mid/80 via-transparent to-void starfield animate-twinkle"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 z-0 grain-overlay mix-blend-overlay"
        aria-hidden
      />
      <div className="pointer-events-none fixed inset-0 z-0 scanlines" aria-hidden />
      <div className="pointer-events-none fixed inset-0 z-0 vignette" aria-hidden />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
