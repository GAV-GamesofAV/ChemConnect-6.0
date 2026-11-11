import { useState } from "react";
import { importantInfo, schedule } from "@/data/fest";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./primitives";

export function Schedule() {
  const [active, setActive] = useState(0);
  const day = schedule[active] ?? schedule[0]!;

  return (
    <section id="schedule" className="relative overflow-hidden bg-paper-deep/60 py-20 sm:py-28">
      <div className="lab-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading number={3} symbol="Sc" eyebrow="event schedule" title="Reaction timeline" intro="Dates, timings and locations will be updated here once confirmed." />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div role="tablist" aria-label="Festival days" className="mb-8 inline-flex rounded-full border border-border bg-paper p-1 shadow-paper">
              {schedule.map((d, i) => (
                <button
                  key={d.day}
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={cn(
                    "rounded-full px-5 py-2 font-display text-base tracking-wide transition-colors",
                    i === active ? "bg-primary text-primary-foreground" : "text-primary hover:bg-pill/50",
                  )}
                >
                  {d.day}
                </button>
              ))}
            </div>

            <p className="mb-6 font-serif text-lg italic text-ink-soft">{day.date}</p>

            {day.slots.length > 0 ? (
              <ol key={active} className="relative ml-3 border-l-2 border-dashed border-primary/40">
                {day.slots.map((s, i) => (
                  <Reveal as="li" key={i} delay={i * 80} className="relative pb-8 pl-8 last:pb-0">
                    <span className="absolute -left-[11px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-paper" aria-hidden="true">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                    </span>
                    <div className="rounded-2xl border border-border bg-paper p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-paper sm:p-5">
                      <p className="font-mono text-xs uppercase tracking-widest text-accent">{s.time}</p>
                      <h3 className="mt-1 font-serif text-xl font-semibold italic text-primary">{s.title}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">{s.location}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            ) : (
              <div className="rounded-2xl border border-dashed border-primary/35 bg-paper/70 p-6">
                <p className="font-serif text-lg italic text-primary">The schedule will be announced soon.</p>
                <p className="mt-2 text-sm text-muted-foreground">Check back here for the confirmed event timings and locations.</p>
              </div>
            )}
          </div>

          <Reveal delay={120}>
            <aside className="rounded-2xl border-2 border-primary bg-paper p-6 shadow-ink sm:p-8">
              <h3 className="font-display text-2xl uppercase tracking-wide text-primary">Important info</h3>
              <p className="text-sm italic text-muted-foreground">Read before you arrive.</p>
              <dl className="mt-5 space-y-4">
                {importantInfo.map((info) => (
                  <div key={info.label}>
                    <dt className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-soft">{info.label}</dt>
                    <dd className="font-serif text-lg font-semibold text-primary">{info.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
