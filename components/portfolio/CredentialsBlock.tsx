import type { CredentialLine } from "@/lib/resume";

function CredentialCard({
  line,
  variant,
}: {
  line: CredentialLine;
  variant: "cert" | "edu" | "award";
}) {
  const border =
    variant === "award"
      ? "border-signal-amber/25"
      : variant === "cert"
        ? "border-nebula-teal/25"
        : "border-nebula-magenta/20";

  return (
    <article
      className={`rounded-xl border ${border} bg-white/[0.03] p-5 backdrop-blur-sm sm:p-6`}
    >
      <h4 className="font-display text-lg font-semibold text-text-primary">
        {line.title}
      </h4>
      {line.detail ? (
        <p className="mt-1 font-mono text-xs uppercase tracking-wider text-text-muted">
          {line.detail}
        </p>
      ) : null}
      {line.description ? (
        <p className="mt-3 text-sm leading-relaxed text-text-muted">
          {line.description}
        </p>
      ) : null}
    </article>
  );
}

export function CredentialsBlock({
  certifications,
  education,
  awards,
}: {
  certifications: readonly CredentialLine[];
  education: readonly CredentialLine[];
  awards: readonly CredentialLine[];
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="space-y-4">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.35em] text-nebula-magenta">
          Education
        </h3>
        <div className="space-y-4">
          {education.map((e) => (
            <CredentialCard key={e.title} line={e} variant="edu" />
          ))}
        </div>
        <h3 className="font-mono text-[11px] uppercase tracking-[0.35em] text-nebula-teal">
          Certifications
        </h3>
        <div className="space-y-4">
          {certifications.map((c) => (
            <CredentialCard key={c.title} line={c} variant="cert" />
          ))}
        </div>
      </div>
      <div className="space-y-4 lg:col-span-1">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.35em] text-signal-amber">
          Awards
        </h3>
        <div className="space-y-4">
          {awards.map((a) => (
            <CredentialCard key={a.title} line={a} variant="award" />
          ))}
        </div>
      </div>
    </div>
  );
}
