import { resume } from "@/lib/resume";
import { ChecksumDecoder } from "@/components/portfolio/ChecksumDecoder";

export function Hero() {
  const { name, title, summaryParagraphs, contact } = resume;

  return (
    <section
      id="intro"
      className="relative px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-5xl">
        <p className="hero-stagger-1 font-mono text-[10px] uppercase tracking-[0.45em] text-nebula-teal">
          Keeping systems in stable orbit · Avoiding black holes · Untangling gravity wells
        </p>
        <h1
          id="hero-heading"
          className="hero-stagger-2 font-display mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-text-primary sm:text-6xl sm:leading-[1.02]"
        >
          <span className="bg-gradient-to-r from-text-primary via-nebula-teal to-nebula-magenta bg-clip-text text-transparent">
            {name}
          </span>
        </h1>
        <p className="hero-stagger-3 mt-4 font-mono text-sm uppercase tracking-[0.2em] text-signal-amber sm:text-base">
          {title}
        </p>
        <div className="hero-stagger-4 mt-8 max-w-2xl rounded-2xl border border-white/10 bg-[color:var(--scrim)] p-6 shadow-[0_0_60px_-20px_rgba(45,212,191,0.35)] sm:backdrop-blur-sm sm:p-8">
          <div className="space-y-3 text-base leading-relaxed text-text-primary/95 sm:text-lg">
            {summaryParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center rounded-full border border-nebula-teal/50 bg-nebula-teal/10 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-nebula-teal transition-colors hover:bg-nebula-teal/20 focus-visible:outline-offset-4"
            >
              Email
            </a>
            <a
              href={contact.github.href}
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-text-muted transition-colors hover:border-nebula-magenta/40 hover:text-text-primary focus-visible:outline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.github.label}
            </a>
            <a
              href={contact.linkedin.href}
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-text-muted transition-colors hover:border-nebula-magenta/40 hover:text-text-primary focus-visible:outline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.linkedin.label}
            </a>
          </div>
          <p className="mt-6 font-mono text-[10px] leading-relaxed text-text-muted/80">
            I like direct questions, clear requirements, and leaving systems
            easier to operate than I found them.
          </p>
        </div>
        <ChecksumDecoder
          className="mt-8 font-mono text-[10px] text-text-muted/80 transition-colors hover:text-nebula-teal/85 focus-visible:outline-offset-4"
          defaultIndex={0}
        />
      </div>
    </section>
  );
}
