import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo.png";
import glassware from "@/assets/glassware-row.jpg";
import dna from "@/assets/dna-helix.jpg";
import atom from "@/assets/atom-molecule.jpg";
import { Button } from "@/components/ui/button";
import { club, fest } from "@/data/fest";
import { Annotation } from "./primitives";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-0 pt-24 sm:pt-28">
      {/* Corner illustrations, as on the poster */}
      <img
        src={atom}
        alt=""
        aria-hidden="true"
        width={1024}
        height={1024}
        className="ink-blend pointer-events-none absolute -left-16 top-14 w-56 opacity-50 sm:-left-10 sm:w-80 lg:w-96"
      />
      <img
        src={dna}
        alt=""
        aria-hidden="true"
        width={768}
        height={1024}
        className="ink-blend animate-float-slow pointer-events-none absolute -right-14 top-10 w-40 opacity-70 sm:-right-6 sm:w-60 lg:w-72"
      />
      <Annotation className="absolute left-6 top-[58%] hidden -rotate-6 lg:block">
        C₆H₆ · benzene
      </Annotation>
      <Annotation className="absolute right-10 top-[52%] hidden rotate-3 lg:block">
        2H₂ + O₂ → 2H₂O
      </Annotation>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <div className="reveal" data-visible="true">
          <div className="relative mx-auto w-fit">
            <span className="absolute inset-[-10px] rounded-full border border-dashed border-primary/40 animate-orbit" aria-hidden="true" />
            <img
              src={logo}
              alt={`${club.name} — ${club.motto}`}
              width={1080}
              height={1050}
              fetchPriority="high"
              className="relative h-28 w-28 rounded-full bg-paper object-contain shadow-paper ring-2 ring-primary/20 sm:h-36 sm:w-36"
            />
          </div>
        </div>

        <h1 className="mt-7 font-display text-[clamp(2rem,10.5vw,4.5rem)] uppercase leading-none tracking-wide text-primary">
          {club.name}
        </h1>
        <p className="-mt-1 font-script text-3xl text-ink-soft sm:text-4xl">presents</p>
        <p className="mt-2 font-display text-5xl uppercase leading-none tracking-wide text-accent drop-shadow-[0_2px_0_var(--paper)] sm:text-7xl">
          {fest.edition}
        </p>

        <p className="mt-6 font-serif text-xl italic text-primary sm:text-2xl">{fest.tagline}</p>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {fest.intro}
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild variant="hero" size="xl">
            <a href="#events">
              Explore the Fest <ArrowDown />
            </a>
          </Button>
        </div>

        <dl className="mt-8 flex flex-col items-center gap-1 sm:flex-row sm:gap-6 font-mono text-xs uppercase tracking-widest text-ink-soft">
          <div className="flex gap-2"><dt className="sr-only">Dates</dt><dd>{fest.dates}</dd></div>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <div className="flex gap-2"><dt className="sr-only">Venue</dt><dd>{fest.venue}</dd></div>
        </dl>
      </div>

      <img
        src={glassware}
        alt="Watercolor laboratory glassware: flasks, a test tube rack and a beaker"
        width={1920}
        height={640}
        className="ink-blend relative mx-auto mt-6 w-[150%] max-w-none -translate-x-[16%] sm:w-full sm:max-w-6xl sm:translate-x-0"
      />
    </section>
  );
}
