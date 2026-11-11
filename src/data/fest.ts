/**
 * ============================================================
 *  CHEMISTRECREATE — EDIT ALL FESTIVAL CONTENT HERE
 * ============================================================
 *  Every piece of text on the website comes from this file.
 *  Replace the placeholder values ("To be announced", "Event 1", …)
 *  with the real details when they are confirmed.
 *
 *  Links: leave a link as "" (empty) until it is ready —
 *  the site will show a "coming soon" state instead of a broken link.
 */

export const club = {
  name: "ChemistRecreate",
  motto: "Experimentalis Doctrina",
  clubLabel: "ChemistRecreate",
  school: "DBRA CM Shri Karol Bagh",
  schoolAddress: "Plot No. 1 Link Road Karol Bagh",
};

export const fest = {
  edition: "Chem Connect 6.0",
  tagline: "Where Chemistry Comes Alive.",
  intro:
    "The annual chemistry festival of the Chemistrecreate Chemistry Club — a celebration of experiments, ideas and curious minds. Full details are on their way.",
  dates: "Dates to be announced",
  venue: "MP Hall",
};

export const about = {
  heading: "A festival built on curiosity",
  paragraphs: [
    "Chemistrecreate is the Chemistry Club of our school. Guided by our motto, Experimentalis Doctrina — learning through experiment — we bring chemistry out of the textbook and into the hands of students.",
    "Our annual festival is where that spirit comes together: a day of competitions, hands-on experiments, exhibitions and activities for everyone who is curious about how the world works.",
  ],
  facts: [
    { label: "Edition", value: "Chem Connect 6.0" },
    { label: "Dates", value: "To be announced" },
    { label: "Venue", value: "MP Hall" },
  ],
};

export type EventCategory = "Competition" | "Activity" | "Experiment" | "Exhibition";

export const eventCategories: { id: EventCategory; label: string; symbol: string; blurb: string}[] = [
  { id: "Competition", label: "Competitions", symbol: "Cp", blurb: "Test your knowledge and skill." },
  { id: "Activity", label: "Activities", symbol: "Ac", blurb: "Play, solve and participate." },
  { id: "Experiment", label: "Experiments", symbol: "Ex", blurb: "Hands-on chemistry, live." },
  { id: "Exhibition", label: "Exhibitions", symbol: "Eh", blurb: "Projects, models and displays." },
];

export type FestEvent = {
  name: string;
  category: EventCategory;
  time: string;
  venue: string;
  description: string;
};

/** Placeholder events — mirror the six slots on the poster. Edit freely. */
export const events: FestEvent[] = [
  { name: "Event 1", category: "Competition", time: "Time", venue: "Venue TBA", description: "Description to be added." },
  { name: "Event 2", category: "Competition", time: "Time", venue: "Venue TBA", description: "Description to be added." },
  { name: "Event 3", category: "Activity", time: "Time", venue: "Venue TBA", description: "Description to be added." },
  { name: "Event 4", category: "Experiment", time: "Time", venue: "Venue TBA", description: "Description to be added." },
  { name: "Event 5", category: "Experiment", time: "Time", venue: "Venue TBA", description: "Description to be added." },
  { name: "Event 6", category: "Exhibition", time: "Time", venue: "Venue TBA", description: "Description to be added." },
];

export type ScheduleDay = {
  day: string;
  date: string;
  slots: { time: string; title: string; location: string }[];
};

export const schedule: ScheduleDay[] = [
  {
    day: "Fest day",
    date: "Date to be announced",
    slots: [],
  },
];

export const importantInfo: { label: string; value: string }[] = [
  { label: "Date", value: "To be announced" },
  { label: "Timings", value: "To be announced" },
  { label: "Venue", value: "MP Hall" },
];

export type Person = { name: string; role: string; email?: string; phone?: string };

export const contacts = {
  /** Add contact details only after getting the person's permission. */
  clubEmail: "",
  president: {
    name: "President name to be added",
    role: "Club President",
    email: "",
    phone: "",
  } as Person,
  vicePresident: {
    name: "Vice President name to be added",
    role: "Club Vice President",
    email: "",
    phone: "",
  } as Person,
  members: [
    { name: "Member name to be added", role: "Club Member" },
    { name: "Member name to be added", role: "Club Member" },
    { name: "Member name to be added", role: "Club Member" },
  ] as Person[],
};

/** Add social links like { label: "Instagram", url: "https://instagram.com/…" }. Empty = hidden. */
export const socials: { label: "Instagram" | "YouTube" | "Facebook" | "Website" | "X"; url: string }[] = [];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "events", label: "Events & Games" },
  { id: "schedule", label: "Schedule" },
  { id: "team", label: "Our Team" },
  { id: "contact", label: "Contact" },
] as const;
