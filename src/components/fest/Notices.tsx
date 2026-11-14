/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { ArrowUpRight, Bell, CalendarDays, X } from "lucide-react";

import { announcements, type Announcement, type NoticeStatus } from "@/data/fest";

import { Reveal, SectionHeading } from "./primitives";

const statusStyles: Record<NoticeStatus, string> = {
  important: "bg-accent/15 text-accent",
  open: "bg-green-500/10 text-green-700",
  upcoming: "bg-blue-500/10 text-blue-700",
  general: "bg-pill text-ink-soft",
  closed: "bg-muted text-muted-foreground",
};

const statusLabels: Record<NoticeStatus, string> = {
  important: "Important",
  open: "Registration Open",
  upcoming: "Upcoming",
  general: "Announcement",
  closed: "Closed",
};

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function NoticeCard({ notice }: { notice: Announcement }) {
  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-border bg-paper p-5 shadow-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-ink sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-soft">
          {notice.category}
        </span>

        <span
          className={`shrink-0 rounded-full px-3 py-1 text-[0.65rem] font-semibold ${statusStyles[notice.status]}`}
        >
          {statusLabels[notice.status]}
        </span>
      </div>

      <h3 className="mt-4 font-serif text-xl font-semibold leading-tight text-primary sm:text-2xl">
        {notice.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {notice.description}
      </p>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
        <span className="flex items-center gap-2 text-xs text-ink-soft">
          <CalendarDays className="h-3.5 w-3.5" />
          {formatDate(notice.date)}
        </span>

        {notice.actionUrl && (
          <a
            href={notice.actionUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            {notice.actionLabel || "Know More"}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  );
}

function NoticeModal({ onClose }: { onClose: () => void }) {
  const sortedNotices = [...announcements].sort((a, b) => b.date.localeCompare(a.date));

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="notice-modal-title"
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-5 sm:px-8">
          <div>
            <p className="font-script text-xl text-accent">Stay Updated</p>
            <h2
              id="notice-modal-title"
              className="font-display text-2xl uppercase tracking-wide text-primary sm:text-3xl"
            >
              Notice Board
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close notices"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-pill"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {sortedNotices.map((notice, index) => (
              <NoticeCard key={`${notice.title}-${index}`} notice={notice} />
            ))}
          </div>

          {sortedNotices.length === 0 && (
            <div className="py-16 text-center">
              <Bell className="mx-auto h-10 w-10 text-ink-soft/50" />
              <p className="mt-4 font-serif text-lg italic text-muted-foreground">
                No notices have been published yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Notices() {
  const [showAll, setShowAll] = useState(false);

  const sortedNotices = [...announcements].sort((a, b) => b.date.localeCompare(a.date));

  const latestNotices = sortedNotices.slice(0, 3);

  return (
    <section id="notices" className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <SectionHeading
        number={1}
        symbol="Nt"
        tone="red"
        eyebrow="latest updates"
        title="Notices & Announcements"
        intro="Stay informed about registrations, competitions, important updates and everything happening at Chem Connect 6.0."
      />

      {latestNotices.length > 0 ? (
        <>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {latestNotices.map((notice, index) => (
              <Reveal key={`${notice.title}-${index}`} delay={index * 90}>
                <NoticeCard notice={notice} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <Bell className="h-4 w-4" />
              View All Notices
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </>
      ) : (
        <div className="rounded-xl border border-dashed border-border py-14 text-center">
          <Bell className="mx-auto h-9 w-9 text-ink-soft/50" />
          <p className="mt-4 font-serif text-lg italic text-muted-foreground">
            No announcements yet. Stay tuned!
          </p>
        </div>
      )}

      {showAll && <NoticeModal onClose={() => setShowAll(false)} />}
    </section>
  );
}
