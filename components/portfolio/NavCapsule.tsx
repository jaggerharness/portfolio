"use client";

import { useEffect, useId, useRef, useState } from "react";

const links = [
  { href: "#intro", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
] as const;

const MD_MIN = 768;

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function NavCapsule() {
  const [open, setOpen] = useState(false);
  const [captainMode, setCaptainMode] = useState(false);
  const [callsignToast, setCallsignToast] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const menuTitleId = useId();
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<number | null>(null);
  const longPressTimerRef = useRef<number | null>(null);
  const longPressTriggeredRef = useRef(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const t = requestAnimationFrame(() => closeBtnRef.current?.focus());
      return () => cancelAnimationFrame(t);
    }
    document.body.style.overflow = "";
    return undefined;
  }, [open]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${MD_MIN}px)`);
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!captainMode) return;
    const timeout = window.setTimeout(() => setCaptainMode(false), 10000);
    return () => window.clearTimeout(timeout);
  }, [captainMode]);

  useEffect(() => {
    if (!callsignToast) return;
    const timeout = window.setTimeout(() => setCallsignToast(false), 2200);
    return () => window.clearTimeout(timeout);
  }, [callsignToast]);

  useEffect(() => {
    return () => {
      if (clickTimerRef.current !== null) {
        window.clearTimeout(clickTimerRef.current);
      }
      if (longPressTimerRef.current !== null) {
        window.clearTimeout(longPressTimerRef.current);
      }
    };
  }, []);

  const activateCallsign = () => {
    setCaptainMode((current) => !current);
    setCallsignToast(true);
  };

  const onBrandClick = () => {
    if (longPressTriggeredRef.current) {
      longPressTriggeredRef.current = false;
      return;
    }

    clickCountRef.current += 1;
    if (clickTimerRef.current !== null) {
      window.clearTimeout(clickTimerRef.current);
    }

    if (clickCountRef.current >= 3) {
      clickCountRef.current = 0;
      activateCallsign();
      return;
    }

    clickTimerRef.current = window.setTimeout(() => {
      clickCountRef.current = 0;
      clickTimerRef.current = null;
    }, 450);
  };

  const onBrandPointerDown = () => {
    if (longPressTimerRef.current !== null) {
      window.clearTimeout(longPressTimerRef.current);
    }
    longPressTriggeredRef.current = false;
    longPressTimerRef.current = window.setTimeout(() => {
      longPressTriggeredRef.current = true;
      activateCallsign();
    }, 640);
  };

  const onBrandPointerRelease = () => {
    if (longPressTimerRef.current !== null) {
      window.clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  };

  const onMobileBrandClick = () => {
    onBrandClick();
    close();
  };

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-void shadow-[0_10px_30px_-18px_rgba(0,0,0,0.9)] transition-colors ${
        captainMode ? "border-nebula-magenta/45" : "border-white/15"
      }`}
    >
      {callsignToast ? (
        <div className="pointer-events-none absolute inset-x-0 top-full z-[320] flex justify-center px-4 pt-2">
          <p className="rounded-full border border-nebula-magenta/40 bg-void-mid/95 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.28em] text-nebula-magenta shadow-[0_0_30px_-10px_rgba(232,121,249,0.9)]">
            Captain mode: callsign locked
          </p>
        </div>
      ) : null}
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <a
          href="#intro"
          className={`font-mono text-[10px] uppercase tracking-[0.35em] transition-colors focus-visible:outline-offset-4 ${
            captainMode
              ? "text-nebula-magenta hover:text-nebula-magenta/80"
              : "text-nebula-teal/90 hover:text-nebula-teal"
          }`}
          onClick={onBrandClick}
          onPointerDown={onBrandPointerDown}
          onPointerUp={onBrandPointerRelease}
          onPointerCancel={onBrandPointerRelease}
          onPointerLeave={onBrandPointerRelease}
        >
          JH · portfolio
        </a>

        <nav
          aria-label="On this page"
          className="hidden flex-wrap items-center justify-end gap-x-2 gap-y-2 md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-transparent px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-text-primary/90 transition-colors hover:border-nebula-teal/35 hover:bg-white/6 hover:text-text-primary focus-visible:outline-offset-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border bg-void-mid px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] shadow-[0_0_24px_-10px_rgba(45,212,191,0.45)] transition-colors focus-visible:outline-offset-4 md:hidden ${
            captainMode
              ? "border-nebula-magenta/50 text-nebula-magenta hover:border-nebula-magenta hover:bg-nebula-magenta/12"
              : "border-nebula-teal/45 text-nebula-teal hover:border-nebula-teal hover:bg-nebula-teal/12"
          }`}
          aria-expanded={open}
          aria-controls="nav-mobile-menu"
          aria-haspopup="dialog"
          onClick={() => setOpen(true)}
        >
          <span>Menu</span>
          <MenuIcon />
        </button>
      </div>

      {open ? (
        <div
          id="nav-mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-labelledby={menuTitleId}
          className="fixed inset-0 z-[300] flex flex-col bg-void/98 backdrop-blur-sm md:hidden"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-nebula-magenta/15 via-transparent to-nebula-teal/15" aria-hidden />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-nebula-teal to-transparent opacity-90"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-void-mid/85 to-transparent"
            aria-hidden
          />

          <div className="relative z-10 flex items-center justify-between gap-4 border-b border-white/10 px-4 py-4 sm:px-6">
            <a
              href="#intro"
              className={`font-mono text-[10px] uppercase tracking-[0.35em] transition-colors focus-visible:outline-offset-4 ${
                captainMode
                  ? "text-nebula-magenta hover:text-nebula-magenta/80"
                  : "text-nebula-teal hover:text-nebula-teal/80"
              }`}
              onClick={onMobileBrandClick}
              onPointerDown={onBrandPointerDown}
              onPointerUp={onBrandPointerRelease}
              onPointerCancel={onBrandPointerRelease}
              onPointerLeave={onBrandPointerRelease}
            >
              JH · portfolio
            </a>
            <button
              ref={closeBtnRef}
              type="button"
              aria-label="Close navigation menu"
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/[0.06] px-5 font-mono text-[10px] uppercase tracking-[0.3em] text-text-primary shadow-[0_0_24px_-8px_rgba(232,121,249,0.35)] transition-colors hover:border-nebula-magenta/50 hover:bg-white/10 focus-visible:outline-offset-4"
              onClick={close}
            >
              <CloseIcon className="shrink-0 text-nebula-magenta/90" />
              <span>Close</span>
            </button>
          </div>

          <div className="relative z-10 flex flex-1 flex-col overflow-y-auto px-5 pb-10 pt-8 sm:px-8">
            <p
              id={menuTitleId}
              className="font-mono text-[10px] uppercase tracking-[0.45em] text-nebula-teal/85"
            >
              Star chart routes
            </p>
            <p className="mt-2 font-mono text-[11px] text-text-muted">
              Select a waypoint and jump to section.
            </p>
            <nav aria-label="On this page" className="mt-7">
              <ul className="flex flex-col gap-2">
                {links.map((link, i) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-4 rounded-xl border border-white/12 bg-white/[0.03] px-4 py-4 transition-all duration-200 hover:border-nebula-teal/45 hover:bg-white/[0.06] focus-visible:outline-offset-4"
                      onClick={close}
                    >
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-nebula-magenta/35 bg-nebula-magenta/10 font-mono text-[11px] tabular-nums text-nebula-magenta/80 transition-colors group-hover:border-nebula-teal/40 group-hover:text-nebula-teal sm:text-xs">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-2xl font-bold leading-none tracking-tight text-text-primary transition-colors group-hover:text-nebula-teal sm:text-3xl sm:leading-none">
                        {link.label}
                      </span>
                      <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted transition-colors group-hover:text-nebula-teal/85">
                        warp
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
