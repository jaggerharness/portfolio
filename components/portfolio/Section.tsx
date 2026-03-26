import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  guideKicker: string;
  title: string;
  narrator?: string;
  children: ReactNode;
  channelBreak?: boolean;
};

export function Section({
  id,
  guideKicker,
  title,
  narrator,
  children,
  channelBreak,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 ${channelBreak ? "border-dashed border-white/[0.14]" : ""}`}
    >
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-nebula-magenta/90">
          {guideKicker}
        </p>
        <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {title}
        </h2>
        {narrator ? (
          <p className="mt-3 max-w-2xl font-mono text-sm italic leading-relaxed text-text-muted">
            {narrator}
          </p>
        ) : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
