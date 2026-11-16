import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/fest/SiteHeader";
import { Hero } from "@/components/fest/Hero";
import { About } from "@/components/fest/About";
import { Events } from "@/components/fest/Events";
import { Schedule } from "@/components/fest/Schedule";
import { Contact } from "@/components/fest/Contact";
import { Notices } from "@/components/fest/Notices";
import { SiteFooter } from "@/components/fest/SiteFooter";
import { BondDivider } from "@/components/fest/primitives";
import type { FestEvent } from "@/data/fest";
import { Highlights } from "@/components/fest/Highlights";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chem Connect 6.0 — Chemistrecreate Chemistry Festival" },
      {
        name: "description",
        content:
          "Chemistrecreate presents Chem Connect 6.0, the Chemistry Club's annual festival. Where Chemistry Comes Alive — events, games, timings, venue and club contacts.",
      },
      { property: "og:title", content: "Chem Connect 6.0 — Chemistrecreate" },
      {
        property: "og:description",
        content: "The Chemistry Club's annual festival. Where Chemistry Comes Alive.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const handleNoticeEventClick = (event: FestEvent) => {
    const eventId = `event-${event.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")}`;

    document.getElementById(eventId)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  return (
    <div className="paper-texture min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <BondDivider formula="C₆H₆" />
        <Notices onEventClick={handleNoticeEventClick} />
        <BondDivider formula="CH₄" molecule="methane" />
        <About />
        <BondDivider formula="NH₃" molecule="ammonia" />
        <Events />
        <BondDivider formula="O₂" molecule="oxygen" />
        <Schedule />
        <BondDivider formula="H₂O" molecule="water" />
        <Highlights />
        <BondDivider formula="CO₂" molecule="carbon-dioxide" />
        <Contact />
        <BondDivider formula="C₂H₅OH" molecule="ethanol" />
      </main>
      <SiteFooter />
    </div>
  );
}
