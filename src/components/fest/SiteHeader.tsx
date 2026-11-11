import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { navLinks, club } from "@/data/fest";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        open
          ? "border-b border-border/70 bg-background"
          : scrolled
          ? "border-b border-border/70 bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt={`${club.name} logo`}
            width={40}
            height={39}
            className="h-10 w-10 rounded-full bg-paper object-contain ring-1 ring-border"
          />
          <span className="font-display text-lg uppercase tracking-wide text-primary">{club.name}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-pill/60 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-primary transition-colors hover:bg-pill/60 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 px-5 pb-5 pt-2 md:hidden" aria-label="Mobile">
          <ul className="grid grid-cols-2 gap-2">
            {navLinks.map((l, i) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-xl border border-border bg-paper px-3 py-3 text-sm font-medium text-primary transition-colors hover:border-primary"
                >
                  <span className="font-mono text-[0.65rem] text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
