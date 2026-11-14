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
      <ElementTile
        number={number}
        symbol={symbol}
        tone={tone}
        className="w-14 shrink-0 text-base sm:w-16"
      />
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

type Molecule =
  "benzene" | "water" | "carbon-dioxide" | "methane" | "ammonia" | "oxygen" | "salt" | "ethanol";

export function BondDivider({
  formula,
  molecule = "benzene",
  className,
}: {
  formula?: string;
  molecule?: Molecule;
  className?: string;
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <div
      className={cn("mx-auto flex max-w-5xl items-center gap-3 px-6 text-primary/50", className)}
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-current" />

      <span className="h-1.5 w-1.5 rounded-full bg-current" />

      <svg viewBox="0 0 100 70" className="h-10 w-14 shrink-0" {...common}>
        {molecule === "benzene" && (
          <>
            <polygon points="30,5 70,5 92,35 70,65 30,65 8,35" />
            <circle cx="50" cy="35" r="19" strokeDasharray="4 3" />
          </>
        )}

        {molecule === "water" && (
          <>
            <path d="M50 15 L25 48 M50 15 L75 48" />
            <circle cx="50" cy="15" r="9" />
            <circle cx="25" cy="48" r="9" />
            <circle cx="75" cy="48" r="9" />
            <text x="50" y="19" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
              O
            </text>
            <text x="25" y="52" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
              H
            </text>
            <text x="75" y="52" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
              H
            </text>
          </>
        )}

        {molecule === "carbon-dioxide" && (
          <>
            <path d="M20 35 H80" />
            <path d="M35 28 V42 M41 28 V42 M59 28 V42 M65 28 V42" />
            <circle cx="15" cy="35" r="10" />
            <circle cx="50" cy="35" r="10" />
            <circle cx="85" cy="35" r="10" />
            <text x="15" y="39" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
              O
            </text>
            <text x="50" y="39" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
              C
            </text>
            <text x="85" y="39" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
              O
            </text>
          </>
        )}

        {molecule === "methane" && (
          <>
            <path d="M50 35 L50 8 M50 35 L15 55 M50 35 L85 55 M50 35 L50 65" />
            <circle cx="50" cy="35" r="10" />
            <text x="50" y="39" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
              C
            </text>
            <text x="50" y="8" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
              H
            </text>
            <text x="12" y="62" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
              H
            </text>
            <text x="88" y="62" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
              H
            </text>
            <text x="50" y="69" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
              H
            </text>
          </>
        )}

        {molecule === "ammonia" && (
          <>
            <path d="M50 22 L25 55 M50 22 L75 55 M50 22 L50 5" />
            <circle cx="50" cy="22" r="10" />
            <text x="50" y="26" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
              N
            </text>
            <text x="50" y="8" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
              H
            </text>
            <text x="25" y="65" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
              H
            </text>
            <text x="75" y="65" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
              H
            </text>
          </>
        )}

        {molecule === "oxygen" && (
          <>
            <circle cx="30" cy="35" r="13" />
            <circle cx="70" cy="35" r="13" />
            <path d="M43 31 H57 M43 39 H57" />
            <text x="30" y="39" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
              O
            </text>
            <text x="70" y="39" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
              O
            </text>
          </>
        )}

        {molecule === "salt" && (
          <>
            <path
              d="M25 15 V55 M50 15 V55 M75 15 V55 M15 25 H85 M15 45 H85"
              strokeDasharray="3 3"
            />
            <circle cx="25" cy="25" r="9" />
            <circle cx="50" cy="45" r="9" />
            <circle cx="75" cy="25" r="9" />
            <circle cx="50" cy="15" r="7" />
            <circle cx="25" cy="55" r="7" />
            <circle cx="75" cy="55" r="7" />
            <text x="25" y="29" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none">
              +
            </text>
            <text x="50" y="49" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none">
              −
            </text>
            <text x="75" y="29" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none">
              +
            </text>
          </>
        )}

        {molecule === "ethanol" && (
          <>
            <path d="M15 35 L40 20 L65 35 L85 20" />
            <text x="15" y="30" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
              H₃C
            </text>
            <text x="40" y="17" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
              C
            </text>
            <text x="65" y="48" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
              C
            </text>
            <text x="85" y="17" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
              OH
            </text>
          </>
        )}
      </svg>

      <span className="h-1.5 w-1.5 rounded-full bg-current" />

      <span className="h-px flex-1 bg-current" />

      {formula && (
        <span className="hidden font-mono text-xs tracking-wider text-ink-soft sm:inline">
          {formula}
        </span>
      )}
    </div>
  );
}

/** Small handwritten-margin annotation, like notes in a lab book. */
export function Annotation({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none select-none font-mono text-xs tracking-wide text-ink-soft/60",
        className,
      )}
    >
      {children}
    </span>
  );
}
