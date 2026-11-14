import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Mail, MessageCircle, Phone, UserRound, X } from "lucide-react";
import { contacts, type Person } from "@/data/fest";
import { Reveal, SectionHeading } from "./primitives";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function PersonPortrait({ person, large = false }: { person: Person; large?: boolean }) {
  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-primary/10 bg-pill text-primary ${
        large ? "aspect-[4/5] w-full" : "h-28 w-24 sm:h-32 sm:w-28"
      }`}
    >
      {person.image ? (
        <img
          src={person.image}
          alt={person.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex flex-col items-center gap-2">
          <UserRound className={large ? "h-10 w-10" : "h-8 w-8"} />
          <span className="font-mono text-xs font-semibold tracking-widest">
            {getInitials(person.name)}
          </span>
        </div>
      )}
    </div>
  );
}

function MemberCard({ person }: { person: Person }) {
  const tier = person.tier ?? "member";

  const styles = {
    leadership: "border-2 border-primary shadow-lg",
    coordinator: "border-2 border-accent/60 shadow-paper",
    "co-coordinator": "border border-primary/40 shadow-paper",
    member: "border border-border shadow-paper",
  };

  const labels = {
    leadership: "Club Leadership",
    coordinator: "Coordinator",
    "co-coordinator": "Co-coordinator",
    member: "Club Member",
  };

  const badges = {
    leadership: "bg-primary text-primary-foreground",
    coordinator: "bg-accent/15 text-accent",
    "co-coordinator": "bg-pill text-primary",
    member: "bg-muted text-muted-foreground",
  };

  return (
    <article
      className={`w-[210px] shrink-0 snap-start rounded-2xl bg-paper p-3 sm:w-[230px] ${styles[tier]} ${
        tier === "leadership" ? "sm:w-[250px]" : ""
      }`}
    >
      <span
        className={`mb-3 inline-block rounded-full px-2.5 py-1 font-mono text-[0.58rem] font-semibold uppercase tracking-wider ${badges[tier]}`}
      >
        {labels[tier]}
      </span>

      <PersonPortrait person={person} />

      <div className="mt-3 min-w-0">
        <h3 className="truncate font-serif text-lg font-semibold italic text-primary">
          {person.name}
        </h3>

        <p className="mt-1 text-sm text-muted-foreground">{person.role}</p>

        {person.className && (
          <p className="mt-1 text-xs text-muted-foreground">{person.className}</p>
        )}
      </div>
    </article>
  );
}

function TeamModal({ people, onClose }: { people: Person[]; onClose: () => void }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-paper/95 backdrop-blur-md animate-in fade-in slide-in-from-bottom-3 duration-300 ease-out"
      role="dialog"
      aria-modal="true"
      aria-labelledby="team-modal-title"
    >
      <header className="flex shrink-0 items-center justify-between border-b border-border px-5 py-4 sm:px-10">
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent">
            Chemistrecreate Chemistry Club
          </p>
          <h2
            id="team-modal-title"
            className="mt-1 font-display text-2xl uppercase tracking-wide text-primary sm:text-3xl"
          >
            Meet our team
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close team gallery"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-pill"
        >
          <X className="h-5 w-5" />
        </button>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-7 sm:px-10 sm:py-10">
        <p className="mx-auto mb-8 max-w-3xl text-center font-serif text-base italic text-muted-foreground sm:text-lg">
          The curious minds and creative people who make it all happen.
        </p>
        <div className="mx-auto max-w-6xl space-y-12">
          {[
            {
              title: "Club Leadership",
              subtitle: "The people guiding Chemistrecreate.",
              people: people.filter((p) => p.tier === "leadership"),
              grid: "grid-cols-1 sm:grid-cols-2",
              tier: "leadership",
            },
            {
              title: "Coordinators",
              subtitle: "Leading planning and execution.",
              people: people.filter((p) => p.tier === "coordinator"),
              grid: "grid-cols-2 lg:grid-cols-4",
              tier: "coordinator",
            },
            {
              title: "Co-coordinators",
              subtitle: "Supporting the coordination team.",
              people: people.filter((p) => p.tier === "co-coordinator"),
              grid: "grid-cols-2 lg:grid-cols-4",
              tier: "co-coordinator",
            },
            {
              title: "Club Members",
              subtitle: "The people bringing our ideas to life.",
              people: people.filter((p) => p.tier === "member"),
              grid: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
              tier: "member",
            },
          ].map((group) => (
            <section key={group.title}>
              <div className="mb-5 flex items-end justify-between border-b border-border pb-3">
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-wide text-primary">
                    {group.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{group.subtitle}</p>
                </div>

                <span className="font-mono text-xs text-muted-foreground">
                  {group.people.length} members
                </span>
              </div>

              <div className={`grid ${group.grid} gap-4 sm:gap-5`}>
                {group.people.map((person, index) => (
                  <article
                    key={`${person.name}-${index}`}
                    className={`rounded-2xl bg-background/70 p-3 sm:p-4 ${
                      group.tier === "leadership"
                        ? "border-2 border-primary shadow-lg"
                        : group.tier === "coordinator"
                          ? "border-2 border-accent/50 shadow-paper"
                          : group.tier === "co-coordinator"
                            ? "border border-primary/40 shadow-paper"
                            : "border border-border shadow-paper"
                    }`}
                  >
                    <PersonPortrait person={person} large />

                    <h3 className="mt-3 break-words font-serif text-base font-semibold italic text-primary sm:text-lg">
                      {person.name}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">{person.role}</p>

                    {person.className && (
                      <p className="mt-1 text-xs text-muted-foreground">{person.className}</p>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

function LeaderCard({ person }: { person: Person }) {
  const phoneDigits = person.phone?.replace(/\D/g, "");
  const hasContact = Boolean(person.email || phoneDigits);

  return (
    <article className="rounded-2xl border-2 border-primary bg-paper p-5 shadow-paper sm:p-6">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 overflow-hidden rounded-full border border-primary/20 bg-pill">
          {person.image ? (
            <img
              src={person.image}
              alt={person.name}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-primary">
              <UserRound className="h-7 w-7" />
            </div>
          )}
        </div>
        <div className="min-w-0">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
            {person.role}
          </p>
          <h3 className="mt-1 break-words font-serif text-xl font-semibold italic text-primary">
            {person.name}
          </h3>
          {person.className && (
            <p className="mt-1 text-xs text-muted-foreground">{person.className}</p>
          )}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {person.phone && phoneDigits && (
          <>
            <a
              href={`https://wa.me/${phoneDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={`tel:${person.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-pill/50"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
          </>
        )}
        {person.email && (
          <a
            href={`mailto:${person.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-pill/50"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
        )}
        {!hasContact && (
          <p className="text-sm italic text-muted-foreground">
            Contact details will be added soon.
          </p>
        )}
      </div>
    </article>
  );
}

export function Contact() {
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Include the President and Vice President in the gallery without duplicating them in contacts.members.
  const leaders = [contacts.president, contacts.vicePresident];
  const leaderNames = new Set(leaders.map((person) => person.name));
  const visibleMembers = [
    { ...contacts.president, tier: "leadership" as const },
    { ...contacts.vicePresident, tier: "leadership" as const },

    ...contacts.coordinators,
    ...contacts.coCoordinators,
    ...contacts.members,
  ];

  const scrollCarousel = (direction: "left" | "right") => {
    carouselRef.current?.scrollBy({
      left: direction === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section id="team" className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading
          number={5}
          symbol="Tm"
          tone="red"
          eyebrow="meet the team"
          title="The people behind the reaction"
          intro="Meet the students who make Chemistrecreate happen."
        />

        <div className="mb-5 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => scrollCarousel("left")}
            aria-label="Scroll team carousel left"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-pill"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollCarousel("right")}
            aria-label="Scroll team carousel right"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-pill"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:thin]"
        >
          {visibleMembers.map((person, index) => (
            <Reveal key={`${person.name}-${index}`} delay={index * 50}>
              <MemberCard person={person} />
            </Reveal>
          ))}
        </div>

        <div className="mt-7 flex justify-center">
          <button
            type="button"
            onClick={() => setIsTeamOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View all members <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-6xl px-6 pb-20 sm:pb-28">
        <SectionHeading
          number={6}
          symbol="Co"
          eyebrow="get in touch"
          title="Contact the club"
          intro="Have a question about the fest? Reach out to the Chemistry Club leadership."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <LeaderCard person={contacts.president} />
          </Reveal>
          <Reveal delay={100}>
            <LeaderCard person={contacts.vicePresident} />
          </Reveal>
        </div>
      </section>

      {isTeamOpen && <TeamModal people={visibleMembers} onClose={() => setIsTeamOpen(false)} />}
    </>
  );
}
