import { Mail, MessageCircle, Phone, UserRound } from "lucide-react";
import logo from "@/assets/chemistrecreate_logo.png.asset.json";
import { club, contacts, type Person } from "@/data/fest";
import { Reveal, SectionHeading } from "./primitives";

function MemberCard({ person }: { person: Person }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-paper p-4 shadow-paper">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pill text-primary">
        <UserRound className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="font-serif font-semibold italic text-primary">{person.name}</p>
        <p className="text-sm text-muted-foreground">{person.role}</p>
      </div>
    </div>
  );
}

function LeaderCard({ person }: { person: Person }) {
  const phoneDigits = person.phone?.replace(/\\D/g, "");
  const hasContact = Boolean(person.email || phoneDigits);

  return (
    <article className="rounded-2xl border-2 border-primary bg-paper p-6 shadow-paper">
      <div className="flex items-center gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-pill text-primary">
          <UserRound className="h-7 w-7" />
        </span>
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">{person.role}</p>
          <h3 className="mt-1 font-serif text-xl font-semibold italic text-primary">{person.name}</h3>
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
          <p className="text-sm italic text-muted-foreground">Contact details will be added soon.</p>
        )}
      </div>
    </article>
  );
}

export function Contact() {
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

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="rounded-2xl border-2 border-primary bg-paper p-6 shadow-paper">
              <img src={logo.url} alt={`${club.name} logo`} width={80} height={78} loading="lazy" className="h-20 w-20 rounded-full object-contain" />
              <h3 className="mt-4 font-display text-2xl uppercase tracking-wide text-primary">{club.name}</h3>
              <p className="text-sm italic text-muted-foreground">{club.clubLabel} · {club.school}</p>
              <p className="mt-4 font-serif text-lg italic text-primary">{club.motto}</p>
              <p className="mt-1 text-sm text-muted-foreground">Learning through experiment.</p>
            </div>
          </Reveal>

          <div>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">Club members</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {contacts.members.map((person, i) => (
                <Reveal as="li" key={`${person.name}-${i}`} delay={i * 60}>
                  <MemberCard person={person} />
                </Reveal>
              ))}
            </ul>
          </div>
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
    </>
  );
}
