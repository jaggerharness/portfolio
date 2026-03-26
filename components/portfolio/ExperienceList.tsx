import type { Job } from "@/lib/resume";

export function ExperienceList({ jobs }: { jobs: readonly Job[] }) {
  return (
    <ol className="relative space-y-12 border-l border-white/10 pl-6 sm:pl-10">
      {jobs.map((job, index) => (
        <li key={`${job.company}-${job.range}-${index}`} className="relative">
          <span
            className="absolute -left-[calc(1.5rem+5px)] top-2 h-2.5 w-2.5 rounded-full border-2 border-void bg-nebula-teal shadow-[0_0_12px_rgba(45,212,191,0.7)] sm:-left-[calc(2.5rem+5px)]"
            aria-hidden
          />
          <article className="rounded-2xl border border-white/10 bg-[color:var(--scrim)] p-6 backdrop-blur-sm sm:p-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-xl font-bold text-text-primary sm:text-2xl">
                {job.company}
              </h3>
              <time className="font-mono text-[11px] uppercase tracking-wider text-nebula-magenta/90">
                {job.range}
              </time>
            </div>
            <p className="mt-1 font-mono text-sm text-signal-amber">{job.title}</p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-text-muted sm:text-[15px]">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="relative pl-4 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-nebula-teal/70 before:content-['']">
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  );
}
