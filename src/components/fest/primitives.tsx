import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Fades/slides children in when they enter the viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

/** Periodic-table style tile. */
export function ElementTile({
  number,
  symbol,
  name,
  className,
  tone = "ink",
}: {
  number: number | string;
  symbol: string;
  name?: string;
  className?: string;
  tone?: "ink" | "red" | "paper";
}) {
  const tones = {
    ink: "border-primary bg-primary text-primary-foreground",
    red: "border-accent bg-accent text-accent-foreground",
    paper: "border-primary bg-paper text-primary",
  };
  return (
    <div
      className={cn(
        "relative flex aspect-square flex-col items-center justify-center rounded-lg border-2 shadow-paper",
        tones[tone],
        className,
      )}
    >
      <span className="absolute left-1.5 top-1 font-mono text-[0.6rem] leading-none opacity-80">
        {number}
      </span>
      <span className="font-display text-[1.6em] leading-none">{symbol}</span>
      {name && (
        <span className="mt-0.5 font-mono text-[0.5rem] uppercase tracking-widest opacity-80">
          {name}
        </span>
      )}
    </div>
  );
}

export function SectionHeading({
  number,
  symbol,
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "ink",
}: {
  number: number;
  symbol: string;
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "ink" | "red" | "paper";
}) {
  return (
    <Reveal
      className={cn(
        "mb-10 flex gap-4 sm:mb-14 sm:gap-5",
        align === "center" ? "flex-col items-center text-center" : "items-start",
      )}
    >
      <ElementTile number={number} symbol={symbol} tone={tone} className="w-14 shrink-0 text-base sm:w-16" />
      <div className={cn(align === "center" && "max-w-2xl")}>
        <p className="font-script text-2xl leading-none text-accent sm:text-3xl">{eyebrow}</p>
        <h2 className="mt-1 font-display text-4xl uppercase leading-[0.95] tracking-wide text-primary text-balance-safe sm:text-5xl">
          {title}
        </h2>
        {intro && (
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {intro}
          </p>
        )}
      </div>
    </Reveal>
  );
}

/** Divider drawn like a chemical bond: line — benzene ring — line. */
export function BondDivider({ formula, className }: { formula?: string; className?: string }) {
  return (
    <div className={cn("mx-auto flex max-w-5xl items-center gap-3 px-6 text-primary/50", className)} aria-hidden="true">
      <span className="h-px flex-1 bg-current" />
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      <svg viewBox="0 0 60 52" className="h-8 w-9 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="15,2 45,2 58,26 45,50 15,50 2,26" />
        <circle cx="30" cy="26" r="12" strokeDasharray="3 3" />
      </svg>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      <span className="h-px flex-1 bg-current" />
      {formula && (
        <span className="hidden font-mono text-xs tracking-wider text-ink-soft sm:inline">{formula}</span>
      )}
    </div>
  );
}

/** Small handwritten-margin annotation, like notes in a lab book. */
export function Annotation({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("pointer-events-none select-none font-mono text-xs tracking-wide text-ink-soft/60", className)}
    >
      {children}
    </span>
  );
}
