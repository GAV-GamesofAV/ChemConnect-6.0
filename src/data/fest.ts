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

import alokImg from "@/assets/member images/alok.png";
import kritiImg from "@/assets/member images/Kriti.jpeg";
import ronakImg from "@/assets/member images/Ronak.jpeg";
import ayushImg from "@/assets/member images/Ayush 2.jpeg";
import bhavyaImg from "@/assets/member images/Bhavya 2.jpeg";
import khushiImg from "@/assets/member images/Khushi.jpeg";
import naitikImg from "@/assets/member images/Naitik 2.jpeg";
import princeRImg from "@/assets/member images/Prince Rajbhar.jpeg";
import princeKImg from "@/assets/member images/Prince K.jpeg";
import saubhagyaImg from "@/assets/member images/Saubhagya.jpeg";
import priyanshuImg from "@/assets/member images/Priyanshu.jpeg";
import ritikImg from "@/assets/member images/ritik.jpeg";
import gauravImg from "@/assets/member images/Gaurav.jpeg";

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
  intro: "",
  dates: "4th & 5th December 2026",
  venue: "School Premises",
};

export const about = {
  heading: "A festival built on curiosity",
  paragraphs: [
    `
ChemistRecreate, the Chemistry Club of Dr. B. R. Ambedkar CM Shri School, is an enthusiastic community that encourages students to explore the wonders of Chemistry and develop a deep scientific curiosity. Our club serves as a platform for curious minds to engage with the fascinating world of Chemistry through fun, creative, and meaningful activities and events that make learning both enjoyable and inspiring.
    `,
    `
ChemConnect 6.0 – The 6th Edition of the Annual Chemistry Fest 2026 is all set to take place on November 30 and December 1, 2026 !

Get ready for an exciting celebration of chemistry, creativity, and scientific curiosity. This year, the fest promises a host of engaging activities and thrilling competitions designed to make learning chemistry fun, interactive, and inspiring.

From exploring fascinating scientific concepts to showcasing creativity and talent, ChemConnect 6.0 is all about discovering the exciting world of chemistry beyond the classroom!

 Stay tuned to this space for exciting announcements, event details, and the latest updates. The countdown to ChemConnect 6.0 begins!
    `,
  ],
  facts: [
    { label: "Edition", value: "Chem Connect 6.0" },
    { label: "Dates", value: "4th & 5th December" },
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
  time?: string;
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
    name: "ChemQuest - Round 1",
    category: "Competition",
    time: "2nd Half",
    date: "28th November",
    preFest: true,
    venue: "School Premises",
    description: "First round of ChemQuest",
    details: `
Are you ready to challenge your Chemistry knowledge?

**CHEMQUEST** is an exciting Chemistry-based quiz competition designed to test your scientific knowledge, conceptual understanding, logical thinking, observation and problem-solving skills.

### Open to:
- **Juniors:** Classes 8, 9 & 10
- **Seniors:** Classes 11 & 12

### Competition Format:
- **Round 1:** Written Chemistry Test
- **Round 2:** PPT-Based Quiz for shortlisted participants

### Last Registration Date: 
- ** 26th November **

### Prizes: 
- Exciting prizes for winners 
- **Certificate of Participation** to eligible participants

Whether you are a Junior or a Senior, get ready to explore, learn and challenge yourself in the fascinating world of Chemistry!
`,

    registrationInfo: "Register yourself for the quiz",
    registrationUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLScGDIqxbwA1IZyK5vDYgOuwGTwknZjZiezPN59XWK85nWOBtQ/viewform?usp=dialog",
  },
  {
    name: "ChemQuest - Round 2",
    category: "Competition",
    time: "9:00",
    days: [1],
    date: "4th December",
    venue: "Juniors - Ground Floors | Seniors - Chemistry Lab",
    description: "Second round of ChemQuest",
    details: `
Are you ready to challenge your Chemistry knowledge?

**CHEMQUEST** is an exciting Chemistry-based quiz competition designed to test your scientific knowledge, conceptual understanding, logical thinking, observation and problem-solving skills.

### Open to:
- **Juniors:** Classes 8, 9 & 10
- **Seniors:** Classes 11 & 12

### Competition Format:
- **Round 1:** Written Chemistry Test
- **Round 2:** PPT-Based Quiz for shortlisted participants

### Prizes: 
- Exciting prizes for winners 
- **Certificate of Participation** to eligible participants

Whether you are a Junior or a Senior, get ready to explore, learn and challenge yourself in the fascinating world of Chemistry!

**Only those who qualified the first round of ChemQuest will be invited for round 2.**
`,
  },
  {
    name: "Chem-O-Design",
    category: "Competition",
    preFest: true,
    venue: "School Premises",
    description: "Design a poster",
    details: `
Are you ready to bring Chemistry to life through your creativity?

**CHEM-O-DESIGN** is an exciting poster-making competition that combines scientific knowledge with artistic expression. Participants get the opportunity to explore fascinating Chemistry concepts and present their ideas through visually engaging and informative posters.

### Open to:
- **Juniors:** Classes 8th, 9th & 10th

### Competition Format:
- Participants will create a poster based on a given Chemistry-related theme.
- Posters will be evaluated on creativity, scientific accuracy, presentation and overall visual appeal.

### Last Submition Date: 
- 30th November

### Prizes: 
- Exciting prizes for winners 
- **Certificate of Participation** to eligible participants

Unleash your imagination, put your scientific ideas on paper and show everyone how creative Chemistry can be!
`,
    registrationInfo: "Register yourself to submit your entry",
    registrationUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdRpO7OyERkl8MD_clAQySn-6eRdonT93ToFFegbKbFuJh9qQ/viewform?usp=sharing&ouid=117569747926280062501",
  },
  {
    name: "Chem-O-Present",
    category: "Competition",
    venue: "MP Hall",
    time: "10:30",
    days: [1],
    date: "4th December",
    description: "Create a presentation related to Chemistry",
    details: `
Have an idea worth presenting? It's time to let your knowledge speak!

**CHEM-O-PRESENT** is a presentation competition designed to encourage students to explore Chemistry beyond textbooks and communicate scientific concepts through engaging and informative presentations.

### Open to:
- **Seniors:** Classes 11th & 12th

### Competition Format:
- Participants will prepare and present a PowerPoint presentation on a given Chemistry-related theme.
- Presentations will be evaluated on content, scientific accuracy, creativity, presentation skills and clarity of explanation.

### Last Submition Date: 
- **28th November 2026**

### Prizes: 
- Exciting prizes for winners 
- **Certificate of Participation** to eligible participants

### Note : 
** You Must submit your PPT till last submition date (25th November 2026). Only Selected entries will be allowed to present on Fest Day **

Research, create and present your ideas with confidence. Turn complex Chemistry concepts into something everyone can understand!

`,
    registrationInfo: "Submit your entries at the following link",
    registrationUrl: "https://forms.gle/vYtRgnmdQsnivhHh6",
  },
  {
    name: "Just A Minute",
    category: "Activity",
    time: "9:00",
    days: [2],
    date: "5th December",
    venue: "School Premises",
    registrationInfo: "Register yourself:",
    registrationUrl: "https://forms.gle/Wx74USqY9VVcebNg8",
    description: "1-Minute quick activities",
    details: `
Are you quick enough to take on the challenge?

**JUST A MINUTE** is an exciting Chemistry-based activity featuring multiple fun and engaging one-minute challenges. Test your knowledge, quick thinking, creativity and problem-solving skills as you take on a series of thrilling tasks, each with a time limit of just 60 seconds!

###Open to:
- **Participants**: Classes 10th-12th

###Competition Format:
- A series of exciting Chemistry-based mini-challenges
- Each activity must be completed within one minute
- Participants compete by showcasing their speed, accuracy and skills

### Prizes: 
- Exciting prizes for winners 
- **Certificate of Participation** to eligible participants

Get ready to think fast, act smart and make every second count!
    `,
  },
  {
    name: "Art Alchemy",
    category: "Competition",
    time: "9:30",
    days: [1],
    date: "4th December",
    venue: "Corridor/Chemistry Lab",
    registrationInfo: "Register yourself through following link:",
    registrationUrl: "https://forms.gle/gTuT9gbNstt9JmF89",
    description: "Rangoli Making Competition",
    details: `
Can you transform colours into a masterpiece?

**ART ALCHEMY** is a creative Rangoli-making competition where art meets imagination! Showcase your artistic skills, creativity and sense of design as you create beautiful Rangoli patterns and bring vibrant colours to life.

### Open to:
- **Participants:** Classes 8th - 12th

### Competition Format:
- Participants create Rangoli designs based on the given theme
- Creativity, presentation and overall design will be evaluated

### Prizes: 
- Exciting prizes for winners 
- **Certificate of Participation** to eligible participants

Let your imagination flow, mix creativity with colours and turn the floor into a canvas!
    `,
  },
  {
    name: "Pebblo Picasso",
    category: "Competition",
    time: "9:30",
    days: [1],
    date: "4th December",
    registrationInfo: "Register yourself through following link:",
    registrationUrl: "https://forms.gle/gTuT9gbNstt9JmF89",
    description: "Decorate the Pebble!",
    venue: "MP Hall",
    details: `
Who knew a little pebble could become a work of art?

**PEBBLO PICASSO** is a fun and creative pebble-decorating competition that challenges participants to transform ordinary pebbles into extraordinary pieces of art. Bring out your imagination and artistic flair to create something truly unique!

### Open to:
- **Participants:** Classes 8th - 12th

### Competition Format:
- Participants decorate and paint pebbles using their creativity
- Designs will be judged on originality, creativity and presentation

Pick up a pebble, unleash your creativity and turn something simple into something spectacular!
    `,
  },
  {
    name: "Chem Escape",
    category: "Competition",
    time: "10:30",
    days: [2],
    date: "5th December",
    venue: "TBA",
    registrationInfo: "Register yourself through the following link:",
    registrationUrl: "https://forms.gle/Ba4k5QQ6t9j1M87H6",
    description: "Can you escape for the horror of chemistry",
    details: `
Think you have what it takes to escape?

**CHEM ESCAPE** is an exciting Chemistry-based puzzle adventure where teamwork, logical thinking and problem-solving skills are the keys to victory! Work together with your teammate to solve challenging puzzles, complete tasks, unlock secret codes and find your way out.

### Open to:
- Teams of 2: One Junior (Classes 8, 9 & 10) and one Senior (Classes 11 & 12)

### Competition Format:
- Each team consists of one Junior and one Senior participant
- Teams solve a series of Chemistry-based puzzles and complete tasks
- Each completed challenge reveals clues or codes needed to progress
- The first team to successfully complete all challenges and escape wins!

Put your minds together, crack the codes and race against time. The fastest team wins!
    `,
  },
  {
    name: "Fun In Lab",
    category: "Activity",
    time: "11:30",
    days: [1],
    date: "4th December",
    venue: "School Premises",
    registrationInfo: "Register yourself:",
    registrationUrl: "https://forms.gle/REdU8YnxRxRYxyoy7",
    description: "Only fun with chemistry",
    details: `
Ever wondered what happens when teachers and students team up in the lab?

**FUN IN LAB** is an entertaining and interactive laboratory activity where teachers and students join forces to take on a series of exciting challenges. A perfect blend of teamwork, scientific curiosity and fun, this activity brings a whole new twist to the chemistry lab!

### Open to:
- **Teams:** Classes 11 & 12 students along with a teacher

### Competition Format:
- Teams consist of a teacher and student participants
- Multiple fun and engaging laboratory-based activities
- Teams compete by completing challenges using teamwork, coordination and scientific skills

Get ready to swap the usual classroom roles, team up with your teachers and experience Chemistry like never before!
    `,
  },
  // {
  //   name:"Chem-O-Rythm",
  //   category:"Competition",
  //   days:[2],
  //   date:"1st December",
  //   venue: "School Premises",

  // }
  {
    name: "Demonstrations",
    category: "Experiment",
    venue: "Small Ground",
    days: [1, 2],
    date: "4th & 5th December",
    time: "9:00 onwards",
    description: "Watch fun chemistry experiments",
    details: `
Ready to witness the fascinating side of Chemistry?

**CHEMISTRY DEMONSTRATIONS** bring science to life through a series of fascinating, fun and visually exciting experiments! Watch interesting chemical reactions, explore surprising scientific phenomena and discover the magic behind everyday Chemistry.

### Open to:
- **Everyone!** All students and visitors are welcome to watch.

### Activity Format:
- A series of live Chemistry experiments and demonstrations
- Experiments will be conducted throughout the fest while other activities are in progress
- Visitors can watch, observe and learn about the science behind each demonstration

Come, watch, wonder and experience the exciting world of Chemistry right before your eyes!
    `,
  },
];

export type ScheduleDay = {
  day: string;
  date: string;
  slots: { time: string; title: string; location: string }[];
};

export const schedule: ScheduleDay[] = [
  {
    day: "ChemQuest Round 1",
    date: "20th November",
    slots: [],
  },
];

export const importantInfo: { label: string; value: string }[] = [
  { label: "Date", value: "30th November & 1st December" },
  { label: "Timings", value: "Activity-Wise" },
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
    image: kritiImg,
    email: "kritikrishnaaaa@gmail.com",
    phone: "",
  } as Person,

  vicePresident: {
    name: "Gaurav",
    role: "Club Vice President",
    className: "Class XI",
    tier: "leadership",
    image: gauravImg,
    email: "gauravsingh170110@gmail.com",
    phone: "",
  } as Person,

  coordinators: [
    {
      name: "Ronak Kumar",
      role: "Planning Coordinator",
      tier: "coordinator",
      image: ronakImg,
    },
    {
      name: "Ayush",
      role: "Event Coordinator",
      tier: "coordinator",
      image: ayushImg,
    },
    { name: "Alok", role: "Tech Coordinator", tier: "coordinator", image: alokImg },
    { name: "Akshra", role: "Decoration and Record Coordinator", tier: "coordinator" },
  ] as Person[],

  coCoordinators: [
    { name: "Anamika", role: "Planning Co-coordinator", tier: "co-coordinator" },
    {
      name: "Prince Rajbhar",
      role: "Event Co-coordinator",
      tier: "co-coordinator",
      image: princeRImg,
    },
    {
      name: "Prince Kumar",
      role: "Tech Co-coordinator",
      tier: "co-coordinator",
      image: princeKImg,
    },
    {
      name: "Khushi",
      role: "Decoration and Record Co-coordinator",
      tier: "co-coordinator",
      image: khushiImg,
    },
  ] as Person[],

  members: [
    { name: "Bhavya", role: "Club Member", tier: "member", image: bhavyaImg },
    { name: "Saubhagya", role: "Club Member", tier: "member", image: saubhagyaImg },
    { name: "Priyanshu Kumar", role: "Club Member", tier: "member", image: priyanshuImg },
    { name: "Naitik", role: "Club Member", tier: "member", image: naitikImg },
    { name: "Ritik Kumar", role: "Club Member", tier: "member", image: ritikImg },
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
  date: string;
  category: string;
  status: NoticeStatus;
  eventName?: string;
};

export const announcements: Announcement[] = [
  {
    title: "ChemQuest: Last Date - 26th November(10:00 PM)",
    description:
      "All the interested students are requested to register themself for ChemQuest till 26th November 10:00PM",
    status: "open",
    category: "Registration",
    eventName: "ChemQuest Round 1",
    date: "2026-11-18",
  },
  {
    title: "Chem-O-Present: Last Date - 28th November (10:00 PM)",
    description:
      "All the interested students are requested to submit their PPTs till 28th November 10:00 PM",
    category: "Registration",
    status: "open",
    eventName: "Chem-O-Present",
    date: "2026-11-18",
  },
  {
    title: "Last Date for Registration - 2nd December (10:00 PM)",
    description:
      "All the interested sutdents are requested to register themself for the activites they want to participate in till 26th November, 10:00 PM",
    status: "open",
    category: "Registration",
    date: "2026-11-18",
  },
];

export const navLinks = [
  { id: "notices", label: "Announcements" },
  { id: "about", label: "About" },
  { id: "events", label: "Events & Games" },
  { id: "schedule", label: "Schedule" },
  { id: "highlights", label: "Highlights" },
  { id: "team", label: "Our Team" },
  { id: "contact", label: "Contact" },
] as const;
