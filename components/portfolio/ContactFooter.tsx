import { resume } from "@/lib/resume";

export function ContactFooter() {
  const { contact, name } = resume;

  return (
    <footer
      id="contact"
      className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-nebula-teal">
          Contact
        </p>
        <h2 className="font-display mt-2 text-2xl font-bold text-text-primary sm:text-3xl">
          Get in touch
        </h2>
        <p className="mt-3 max-w-xl font-mono text-sm text-text-muted">
          Reach me by email for full-stack engineering roles, architecture discussions, or
          collaboration.
        </p>
        <ul className="mt-8 space-y-4 font-mono text-sm sm:text-base">
          <li>
            <span className="text-text-muted">Email </span>
            <a
              href={`mailto:${contact.email}`}
              className="text-nebula-teal underline decoration-nebula-teal/30 underline-offset-4 transition-colors hover:decoration-nebula-teal"
            >
              {contact.email}
            </a>
          </li>
          <li>
            <span className="text-text-muted">{contact.github.label} </span>
            <a
              href={contact.github.href}
              className="text-text-primary transition-colors hover:text-nebula-teal"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.github.href.replace(/^https?:\/\//, "")}
            </a>
          </li>
          <li>
            <span className="text-text-muted">{contact.linkedin.label} </span>
            <a
              href={contact.linkedin.href}
              className="text-text-primary transition-colors hover:text-nebula-teal"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.linkedin.href.replace(/^https?:\/\//, "")}
            </a>
          </li>
        </ul>
        <p className="mt-12 font-mono text-[10px] uppercase tracking-widest text-text-muted">
          © {new Date().getFullYear()} {name}. Built with Next.js.
        </p>
        <p className="mt-2 font-mono text-[10px] text-text-muted/70">
          Yes, this site was absolutely influenced by Project Hail Mary. Amaze.
        </p>
      </div>
    </footer>
  );
}
