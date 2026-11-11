import { useState } from "react";
import { Clock, MapPin } from "lucide-react";
import { eventCategories, events, type EventCategory, type FestEvent } from "@/data/fest";
import { cn } from "@/lib/utils";
import { ElementTile, Reveal, SectionHeading } from "./primitives";

function EventPill({ event, flip }: { event: FestEvent; flip: boolean }) {
  return (
    <div className="group relative py-3">
      <div
        className={cn(
          "pill-card relative flex min-h-[5.5rem] flex-col justify-center py-4 shadow-paper transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-ink",
          flip ? "pl-7 pr-24 text-left sm:pl-8 sm:pr-28" : "pl-24 pr-7 text-right sm:pl-28 sm:pr-8",
        )}
      >
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-soft">{event.category}</span>
        <h3 className="font-serif text-xl font-semibold italic leading-tight text-primary sm:text-2xl">{event.name}</h3>
        <p className="mt-0.5 text-sm font-semibold text-pill-foreground/90">{event.description}</p>
        <p className={cn("mt-1 flex items-center gap-1 text-xs text-ink-soft", flip ? "justify-start" : "justify-end")}>
          <MapPin className="h-3 w-3" /> {event.venue}
        </p>
      </div>
      {/* Time cap — the poster's signature circle */}
      <div
        className={cn(
          "absolute top-1/2 flex h-[6.5rem] w-[6.5rem] -translate-y-1/2 flex-col items-center justify-center rounded-full border-4 border-background bg-pill text-primary transition-transform duration-300 group-hover:scale-105",
          flip ? "-right-1" : "-left-1",
        )}
      >
        <Clock className="h-4 w-4 text-ink-soft" />
        <span className="mt-0.5 font-serif text-sm font-semibold italic">{event.time}</span>
      </div>
    </div>
  );
}

export function Events() {
  const [filter, setFilter] = useState<EventCategory | "All">("All");
  const shown = filter === "All" ? events : events.filter((e) => e.category === filter);

  return (
    <section id="events" className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <SectionHeading
        number={2}
        symbol="Ev"
        tone="red"
        eyebrow="events & activities"
        title="The line-up"
        intro="Competitions, activities, experiments and exhibitions. Tap a category to filter."
      />

      <Reveal>
        <div role="tablist" aria-label="Event categories" className="grid max-w-3xl grid-cols-5 gap-2 sm:gap-4">
          {[{ id: "All" as const, label: "All", symbol: "∑", blurb: "Every event" }, ...eventCategories].map((c) => {
            const active = filter === c.id;
            const count = c.id === "All" ? events.length : events.filter((e) => e.category === c.id).length;
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(c.id)}
                className="group text-left focus-visible:outline-none"
              >
                <ElementTile
                  number={count}
                  symbol={c.symbol}
                  tone={active ? "ink" : "paper"}
                  className={cn(
                    "w-full text-sm transition-all duration-300 group-hover:-translate-y-1 group-focus-visible:ring-2 group-focus-visible:ring-ring sm:text-xl",
                    !active && "border-primary/30",
                  )}
                />
                <span className={cn("mt-2 block text-center font-mono text-[0.55rem] uppercase tracking-wider sm:text-xs", active ? "text-primary" : "text-ink-soft")}>
                  {c.label}
                </span>
                <span className="sr-only">{c.blurb}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-x-8 gap-y-3 md:grid-cols-2">
        {shown.map((e, i) => (
          <Reveal key={e.name + i} delay={(i % 2) * 90}>
            <EventPill event={e} flip={i % 2 === 1} />
          </Reveal>
        ))}
      </div>
      {shown.length === 0 && (
        <p className="mt-10 text-center italic text-muted-foreground">Events in this category will be announced soon.</p>
      )}
    </section>
  );
}
