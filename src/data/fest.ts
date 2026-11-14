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
  venue: "School Premises",
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
    { label: "Venue", value: "School Premises" },
  ],
};

export type EventCategory = "Competition" | "Activity" | "Experiment" | "Exhibition";

export const eventCategories: {
  id: EventCategory;
  label: string;
  symbol: string;
  blurb: string;
}[] = [
  {
    id: "Competition",
    label: "Competitions",
    symbol: "Cp",
    blurb: "Test your knowledge and skill.",
  },
  { id: "Activity", label: "Activities", symbol: "Ac", blurb: "Play, solve and participate." },
  { id: "Experiment", label: "Experiments", symbol: "Ex", blurb: "Hands-on chemistry, live." },
];

export type FestDay = 1 | 2;

export type FestEvent = {
  name: string;
  category: EventCategory;
  time: string;
  venue: string;
  description: string;

  days?: FestDay[];
  preFest?: boolean;

  date?: string;
  details?: string;
  eligibility?: string;
  format?: string;
  rules?: string[];
  materials?: string[];
  registrationInfo?: string;
  registrationUrl?: string;
};
/** Placeholder events — mirror the six slots on the poster. Edit freely. */

export const events: FestEvent[] = [
  {
    name: "ChemQuest",
    category: "Competition",
    time: "Time TBA",
    date: "21st November 2026",
    preFest: true,
    venue: "School Premises",
    description: "First round of the quiz ChemQuest",
    details:
      "First round of the quiz ChemQuest will be held on 21st November 2026. Registrations are now open. Qualifying this will lead to the second round of the quiz which will be held on the fest day.",
  },
  {
    name: "Chem-O-Design",
    category: "Competition",
    time: "Closing Time TBA",
    date: "End date TBA",
    preFest: true,
    venue: "School Premises",
    description: "Design a poster",
    details:
      "Registrations are open for the Poster Making Competition. Students can start preparing their entries. The last date for submission of entries will be announced soon.",
    registrationInfo: "Register yourself to submit your entry",
    registrationUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdRpO7OyERkl8MD_clAQySn-6eRdonT93ToFFegbKbFuJh9qQ/viewform?usp=sharing&ouid=117569747926280062501",
  },
  {
    name: "Chem-O-Present",
    category: "Competition",
    time: "Time TBA",
    venue: "School Premises",
    preFest: true,
    description: "Create a presentation",
    details:
      "Prepare a presentation on a chemistry topic of your choice. The best presentations will be showcased on Fest day.",
    registrationInfo: "Submit your entries at the following link",
    registrationUrl: "https://forms.gle/vYtRgnmdQsnivhHh6",
  },
  {
    name: "Just A Minute",
    category: "Activity",
    time: "Time TBA",
    venue: "School Premises",
    description: "Chem Charades",
    details: "Welcome to the Dum Charades, but with a twist of Chemitry",
  },
  {
    name: "Art Alchemy",
    category: "Activity",
    time: "Time TBA",
    venue: "School Premises",
    description: "Design a test tube",
    details: "Show your creativity, decorate the test tube",
  },
  {
    name: "Chem Escape",
    category: "Activity",
    time: "Time TBA",
    venue: "School Premises",
    description: "Can you escape for the horror of chemistry",
    details: "Cooperate with your partner to solve puzzles and crack the code to escape",
  },
  {
    name: "Fun In Lab",
    category: "Activity",
    time: "Time TBA",
    venue: "School Premises",
    description: "Only fun with chemistry",
  },
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
  { label: "Venue", value: "School Premises" },
];

export type TeamTier = "leadership" | "coordinator" | "co-coordinator" | "member";

export type Person = {
  name: string;
  role: string;
  className?: string;
  image?: string;
  email?: string;
  phone?: string;
  tier?: TeamTier;
};

export const contacts = {
  clubEmail: "",

  president: {
    name: "Kriti",
    role: "Club President",
    className: "Class XII",
    tier: "leadership",
    image: "/members/president.jpg",
    email: "",
    phone: "",
  } as Person,

  vicePresident: {
    name: "Gaurav",
    role: "Club Vice President",
    className: "Class XI",
    tier: "leadership",
    image: "/members/vice-president.jpg",
    email: "",
    phone: "",
  } as Person,

  coordinators: [
    { name: "Ronak Kumar", role: "Planning Coordinator", tier: "coordinator" },
    { name: "Ayush", role: "Event Coordinator", tier: "coordinator" },
    { name: "Alok", role: "Tech Coordinator", tier: "coordinator" },
    { name: "Akshra", role: "Decoration and Record Coordinator", tier: "coordinator" },
  ] as Person[],

  coCoordinators: [
    { name: "Anamika", role: "Planning Co-coordinator", tier: "co-coordinator" },
    { name: "Prince Rajbhar", role: "Event Co-coordinator", tier: "co-coordinator" },
    { name: "Prince Kumar", role: "Tech Co-coordinator", tier: "co-coordinator" },
    { name: "Khushi", role: "Decoration and Record Co-coordinator", tier: "co-coordinator" },
  ] as Person[],

  members: [
    { name: "Bhavya", role: "Club Member", tier: "member" },
    { name: "Saubhagya", role: "Club Member", tier: "member" },
    { name: "Priyanshu Kumar", role: "Club Member", tier: "member" },
    { name: "Naitik", role: "Club Member", tier: "member" },
    { name: "Ritik Kumar", role: "Club Member", tier: "member" },
  ] as Person[],
};

/** Add social links like { label: "Instagram", url: "https://instagram.com/…" }. Empty = hidden. */
export const socials: {
  label: "Instagram" | "YouTube" | "Facebook" | "Website" | "X";
  url: string;
}[] = [];

// ============================================================
// NOTICES & ANNOUNCEMENTS
// ============================================================

export type NoticeStatus = "important" | "open" | "upcoming" | "general" | "closed";

export type Announcement = {
  title: string;
  description: string;
  date: string; // Format: YYYY-MM-DD
  category: string;
  status: NoticeStatus;
  actionLabel?: string;
  actionUrl?: string;
};

export const announcements: Announcement[] = [
  {
    title: "Chemistry Quiz - Round 1",
    description:
      "Round 1 of the Chemistry Quiz will be held on 21 November 2026. Registrations are now open.",
    date: "2026-11-14",
    category: "Registration",
    status: "open",
  },
  {
    title: "Poster/PPT Making Competition",
    description:
      "Registrations are open for the Poster and PPT Making Competition. Students can start preparing their entries.",
    date: "2026-11-14",
    category: "Competition",
    status: "open",
  },
];

export const navLinks = [
  { id: "notices", label: "Notices" },
  { id: "about", label: "About" },
  { id: "events", label: "Events & Games" },
  { id: "schedule", label: "Schedule" },
  { id: "team", label: "Our Team" },
  { id: "contact", label: "Contact" },
] as const;
