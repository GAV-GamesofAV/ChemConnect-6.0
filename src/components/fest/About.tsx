import { about, club } from "@/data/fest";
import { Reveal, SectionHeading, Annotation } from "./primitives";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <SectionHeading number={1} symbol="Ab" eyebrow="about the fest" title={about.heading} />

      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <Reveal className="space-y-5 text-lg leading-relaxed text-foreground/90">
          {about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.85] first-letter:text-accent" : ""}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <figure className="lab-grid relative rounded-2xl border border-border bg-paper p-6 shadow-paper sm:p-8">
            <Annotation className="absolute right-4 top-3">fig. 1</Annotation>
            <figcaption className="font-script text-2xl text-accent">Lab notes</figcaption>
            <dl className="mt-4 divide-y divide-dashed divide-border">
              {about.facts.map((f) => (
                <div key={f.label} className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="font-mono text-xs uppercase tracking-widest text-ink-soft">{f.label}</dt>
                  <dd className="text-right font-serif text-lg font-semibold italic text-primary">{f.value}</dd>
                </div>
              ))}
            </dl>
            <blockquote className="mt-6 border-l-4 border-amber pl-4">
              <p className="font-display text-xl uppercase tracking-wide text-primary">{club.motto}</p>
              <p className="text-sm italic text-muted-foreground">Learning through experiment — the club motto</p>
            </blockquote>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
