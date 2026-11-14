import { useEffect, useState } from "react";
import { Clock, MapPin, X, CalendarDays, Users, ClipboardList, ExternalLink } from "lucide-react";
import { eventCategories, events, type EventCategory, type FestEvent } from "@/data/fest";
import { cn } from "@/lib/utils";
import { ElementTile, Reveal, SectionHeading } from "./primitives";

function EventPill({
  event,
  flip,
  onClick,
}: {
  event: FestEvent;
  flip: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-haspopup="dialog"
      className="group relative block w-full py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
    >
      <div
        className={cn(
          "pill-card relative flex min-h-[5.5rem] flex-col justify-center py-4 shadow-paper transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-ink",
          flip ? "pl-7 pr-24 text-left sm:pl-8 sm:pr-28" : "pl-24 pr-7 text-right sm:pl-28 sm:pr-8",
        )}
      >
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-soft">
          {event.category}
        </span>

        <h3 className="font-serif text-xl font-semibold italic leading-tight text-primary sm:text-2xl">
          {event.name}
        </h3>

        <p className="mt-0.5 text-sm font-semibold text-pill-foreground/90">{event.description}</p>

        <p
          className={cn(
            "mt-1 flex items-center gap-1 text-xs text-ink-soft",
            flip ? "justify-start" : "justify-end",
          )}
        >
          <MapPin className="h-3 w-3" />
          {event.venue}
        </p>
      </div>

      <div
        className={cn(
          "absolute top-1/2 flex h-[6.5rem] w-[6.5rem] -translate-y-1/2 flex-col items-center justify-center rounded-full border-4 border-background bg-pill text-primary transition-transform duration-300 group-hover:scale-105",
          flip ? "-right-1" : "-left-1",
        )}
      >
        <Clock className="h-4 w-4 text-ink-soft" />
        <span className="mt-0.5 font-serif text-sm font-semibold italic">{event.time}</span>
      </div>
    </button>
  );
}

function EventDetailsModal({ event, onClose }: { event: FestEvent; onClose: () => void }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-6 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90dvh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-primary/20 bg-paper shadow-2xl animate-in fade-in zoom-in-95 slide-in-from-bottom-3 duration-300 ease-out"
      >
        {/* Header */}
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-border p-5 sm:p-7">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {event.category}
            </span>

            <h2
              id="event-modal-title"
              className="mt-2 font-serif text-2xl font-semibold italic text-primary sm:text-4xl"
            >
              {event.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close event details"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-pill"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-7">
          {/* Event description */}
          <section>
            <h3 className="font-display text-lg uppercase tracking-wide text-primary">
              About the event
            </h3>

            <p className="mt-3 whitespace-pre-line text-sm leading-7 text-muted-foreground sm:text-base">
              {event.details || event.description}
            </p>
          </section>

          {/* Basic information */}
          <section className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {event.date && (
              <div className="flex items-center gap-3 rounded-xl bg-background/70 p-4">
                <CalendarDays className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Date</p>
                  <p className="text-sm font-semibold text-primary">{event.date}</p>
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 rounded-xl bg-background/70 p-4">
              <Clock className="h-5 w-5 text-accent" />
              <div>
                <p className="text-xs text-muted-foreground">Time</p>
                <p className="text-sm font-semibold text-primary">{event.time}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-background/70 p-4">
              <MapPin className="h-5 w-5 text-accent" />
              <div>
                <p className="text-xs text-muted-foreground">Venue</p>
                <p className="text-sm font-semibold text-primary">{event.venue}</p>
              </div>
            </div>

            {event.eligibility && (
              <div className="flex items-center gap-3 rounded-xl bg-background/70 p-4">
                <Users className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Eligibility</p>
                  <p className="text-sm font-semibold text-primary">{event.eligibility}</p>
                </div>
              </div>
            )}
          </section>

          {/* Format */}
          {event.format && (
            <section className="mt-7">
              <h3 className="font-display text-lg uppercase tracking-wide text-primary">
                Event format
              </h3>
              <p className="mt-2 whitespace-pre-line text-sm leading-7 text-muted-foreground">
                {event.format}
              </p>
            </section>
          )}

          {/* Rules */}
          {event.rules && event.rules.length > 0 && (
            <section className="mt-7">
              <h3 className="flex items-center gap-2 font-display text-lg uppercase tracking-wide text-primary">
                <ClipboardList className="h-5 w-5" />
                Rules and guidelines
              </h3>

              <ul className="mt-3 space-y-2">
                {event.rules.map((rule, index) => (
                  <li key={index} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <span className="font-mono text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {rule}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Materials */}
          {event.materials && event.materials.length > 0 && (
            <section className="mt-7">
              <h3 className="font-display text-lg uppercase tracking-wide text-primary">
                Materials required
              </h3>

              <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted-foreground">
                {event.materials.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Registration */}
          {event.registrationInfo && (
            <section className="mt-7 rounded-xl border border-primary/20 bg-background/70 p-5">
              <h3 className="font-display text-lg uppercase tracking-wide text-primary">
                Registration
              </h3>

              <p className="mt-2 whitespace-pre-line text-sm leading-6 text-muted-foreground">
                {event.registrationInfo}
              </p>

              {event.registrationUrl && (
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85"
                >
                  Register now
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </section>
          )}
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-border p-4 text-right">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-primary/30 px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-pill"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function Events() {
  const [filter, setFilter] = useState<EventCategory | "All">("All");
  const [selectedEvent, setSelectedEvent] = useState<FestEvent | null>(null);

  const shown = filter === "All" ? events : events.filter((e) => e.category === filter);

  const daySections = [
    { day: 1 as const, title: "Day 1", subtitle: "First Day of Chem Connect 6.0" },
    { day: 2 as const, title: "Day 2", subtitle: "Second Day of Chem Connect 6.0" },
  ];

  const preFestEvents = shown.filter((e) => e.preFest);

  const unassignedEvents = shown.filter((e) => !e.preFest && (!e.days || e.days.length === 0));
  return (
    <section id="events" className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <SectionHeading
        number={2}
        symbol="Ev"
        tone="red"
        eyebrow="events & activities"
        title="The line-up"
        intro="Two days of competitions, activities, experiments and exhibitions. Tap an event to explore its details."
      />

      {/* Category filters */}
      <Reveal>
        <div
          role="tablist"
          aria-label="Event categories"
          className="grid max-w-3xl grid-cols-5 gap-2 sm:gap-4"
        >
          {[
            { id: "All" as const, label: "All", symbol: "∑", blurb: "Every event" },
            ...eventCategories,
          ].map((c) => {
            const active = filter === c.id;
            const count =
              c.id === "All" ? events.length : events.filter((e) => e.category === c.id).length;

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

                <span
                  className={cn(
                    "mt-2 block text-center font-mono text-[0.55rem] uppercase tracking-wider sm:text-xs",
                    active ? "text-primary" : "text-ink-soft",
                  )}
                >
                  {c.label}
                </span>

                <span className="sr-only">{c.blurb}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Pre-Fest Events */}
      {preFestEvents.length > 0 && (
        <div className="mt-14">
          <div className="mb-6 flex items-center gap-4">
            <div className="shrink-0">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Before the fest
              </span>
              <h3 className="font-serif text-3xl font-semibold italic text-primary sm:text-4xl">
                Pre-Fest Events
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Special activities conducted before Chem Connect 6.0.
              </p>
            </div>
            <div className="h-px flex-1 bg-primary/20" />
          </div>

          <div className="grid gap-x-8 gap-y-3 md:grid-cols-2">
            {preFestEvents.map((e, i) => (
              <Reveal key={`${e.name}-prefest-${i}`}>
                <EventPill event={e} flip={i % 2 === 1} onClick={() => setSelectedEvent(e)} />
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {/* Day-wise event sections */}
      {daySections.map((section) => {
        const dayEvents = shown.filter((e) => e.days?.includes(section.day));

        return (
          <div key={section.day} className="mt-14">
            <div className="mb-6 flex items-center gap-4">
              <div className="shrink-0">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  Chem Connect 6.0
                </span>
                <h3 className="font-serif text-3xl font-semibold italic text-primary sm:text-4xl">
                  {section.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{section.subtitle}</p>
              </div>

              <div className="h-px flex-1 bg-primary/20" />
            </div>

            {dayEvents.length > 0 ? (
              <div className="grid gap-x-8 gap-y-3 md:grid-cols-2">
                {dayEvents.map((e, i) => (
                  <Reveal key={`${e.name}-${section.day}-${i}`} delay={(i % 2) * 90}>
                    <EventPill event={e} flip={i % 2 === 1} onClick={() => setSelectedEvent(e)} />
                  </Reveal>
                ))}
              </div>
            ) : (
              <p className="rounded-xl border border-dashed border-border py-8 text-center text-sm italic text-muted-foreground">
                Events for this day will be announced soon.
              </p>
            )}
          </div>
        );
      })}

      {/* Events without an assigned day */}
      {unassignedEvents.length > 0 && (
        <div className="mt-14">
          <div className="mb-6 flex items-center gap-4">
            <div className="shrink-0">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
                Coming Soon
              </span>
              <h3 className="font-serif text-2xl font-semibold italic text-primary sm:text-3xl">
                Schedule to Be Announced
              </h3>
            </div>
            <div className="h-px flex-1 bg-primary/20" />
          </div>

          <div className="grid gap-x-8 gap-y-3 md:grid-cols-2">
            {unassignedEvents.map((e, i) => (
              <Reveal key={`${e.name}-unassigned-${i}`} delay={(i % 2) * 90}>
                <EventPill event={e} flip={i % 2 === 1} onClick={() => setSelectedEvent(e)} />
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {/* Event details modal */}
      {selectedEvent && (
        <EventDetailsModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  );
}
