/*
  HackUNCP 2027 content: every word and link on the "desktop" site lives here.

  Components never hardcode event copy. Search this file for "TBD" to find
  everything that still needs a real answer before launch. A link left as
  null hides its button (or shows a "coming soon" state) until it's filled in.
*/

export type PhotoId =
  | "keynote"
  | "focus"
  | "headphones"
  | "late-night-trio"
  | "green-glow"
  | "hackuncp-sticker"
  | "team-table"
  | "huddle"
  | "pitching-ideas"
  | "deltastack"
  | "sticker-laptop"
  | "audience"
  | "lenovo-winners"
  | "closing-ceremony"
  | "judging"
  | "code"
  | "gemini-winners"
  | "mongodb-winners"
  | "first-place-aura"
  | "copilot-workshop";

export interface Photo {
  /** Desktop-style file name shown under icons and in window title bars. */
  file: string;
  alt: string;
  caption: string;
}

/** Where an icon sits before anyone drags it: percentages of the board. */
export interface Spot {
  x: number;
  y: number;
}

/** One question on the application form. `wide` spans both columns; `[text](url)` in a label becomes a link. */
export interface ApplyField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "number" | "url" | "select" | "textarea" | "chips" | "check";
  required?: boolean;
  options?: string[];
  autoComplete?: string;
  placeholder?: string;
  wide?: boolean;
}

/** Sponsor logo rows, biggest first. */
export type SponsorTier = "title" | "gold" | "silver";

export interface Sponsor {
  name: string;
  /** Path under /public. SVG, or PNG with a transparent background, looks best. */
  logo: string;
  url: string;
  tier: SponsorTier;
}

/** Drawn pixel icons for prizes that have no product image. */
export type PrizeIcon = "swag" | "earbuds" | "wallet" | "mouse" | "iot";

export type IconKind = "explore" | "finder" | "readme" | "apply" | "folder" | "trash" | "mail" | "calendar";

/** The sections the desktop version opens as windows (same ids as the scrolling site's sections). */
export type SectionId = "about" | "team" | "sponsors" | "schedule" | "guide" | "faq" | "posts" | "contact" | "subscribe" | "apply";

/**
 * `mobile` places an icon on phones (left out = hidden there); `wide` keeps it to screens 1180px and up.
 * `opens` (desktop version) is the section window an app icon opens; `winLabel` replaces the label on the Windows look.
 */
export type DeskItem =
  | { type: "photo"; photo: PhotoId; at: Spot; mobile?: Spot; wide?: boolean }
  | { type: "app"; kind: IconKind; label: string; winLabel?: string; at: Spot; mobile?: Spot; wide?: boolean; opens?: SectionId };

const year = "2027";
const name = "HackUNCP";

const links = {
  /** TBD: the 2027 hacker application. While null, "apply" buttons point to the mailing list. */
  apply: null as string | null,
  /** TBD: the team's contact address. While null, the contact buttons show "email TBD". */
  email: null as string | null,
  /** TBD: sponsorship prospectus or contact. Falls back to the contact email. */
  sponsor: null as string | null,
  /** TBD: Discord invite. */
  discord: null as string | null,
  /** TBD: confirm handles before launch. Null hides the link. */
  instagram: null as string | null,
  linkedin: null as string | null,
  organizer: "https://aiuncp.github.io/",
  devpost2025: "https://hackuncp-2025.devpost.com/",
  devpost2026: "https://hackuncp-2026.devpost.com/",
  mlhCodeOfConduct: "https://mlh.io/code-of-conduct",
};

export const config = {
  event: {
    name,
    year,
    edition: "third",
    school: "UNC Pembroke",
    city: "Pembroke, NC",
    organizer: "AI@UNCP",
    dates: "March 20–21, 2027",
    hours: "Saturday 5 PM to Sunday 5 PM",
    /** Check-in, Eastern time. Drives the countdowns in the hero and the taskbar. */
    startsAt: "2027-03-20T17:00:00-04:00" as string | null,
  },

  links,

  mlh: {
    /** TBD: flip to true once MLH accepts HackUNCP for the 2027 season. */
    member: false,
    /** TBD: replace both with the exact trust-badge embed from MLH's organizer dashboard. */
    badge: "https://s3.amazonaws.com/logged-assets/trust-badge/2027/mlh-trust-badge-2027-white.svg",
    href: "https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2027-season&utm_content=white",
  },

  /**
   * While you pick between the two designs: true shows a small switch between the
   * scrolling site (/) and the one-screen desktop version (/desktop).
   */
  compare: false,

  /** Page order. Team sits inside about, and posts inside contact. */
  nav: [
    { id: "home", label: "home" },
    { id: "about", label: "about" },
    { id: "sponsors", label: "sponsors" },
    { id: "schedule", label: "schedule" },
    { id: "faq", label: "faq" },
    { id: "contact", label: "contact" },
    { id: "apply", label: "apply" },
  ],

  hero: {
    windowTitle: `hackuncp_${year}.app`,
    eyebrow: `UNC Pembroke · March 20–21, ${year}`,
    headline: "twenty-four hours to build something real.",
    body: `The third annual ${name} returns to UNC Pembroke. The event is free for college students in every major and at every skill level, and is organized by students at AI@UNCP.`,
    hint: "psst — everything on this desktop is draggable",
    scrollCue: "scroll down for more",
  },

  photos: {
    keynote: { file: "keynote.jpg", alt: "A guest speaker smiling at the podium in front of the UNC Pembroke wall", caption: "Opening keynote, HackUNCP 2026" },
    focus: { file: "focus.jpg", alt: "A hacker with a mustache staring into his laptop", caption: "Deep in the zone" },
    headphones: { file: "3am_debugging.jpg", alt: "A hacker in glowing headphones coding late at night", caption: "Late-night debugging" },
    "late-night-trio": { file: "late_night_trio.jpg", alt: "Three hackers lit by their laptop screens in a dark room", caption: "The late shift" },
    "green-glow": { file: "green_glow.jpg", alt: "A hacker in a lanyard typing beside a laptop with green keyboard light", caption: "Heads down, lights low" },
    "hackuncp-sticker": { file: "sticker_spotted.jpg", alt: "A hacker working on a laptop with a HackUNCP sticker", caption: "HackUNCP sticker, spotted" },
    "team-table": { file: "team_table.jpg", alt: "Four teammates working together at a table in the dark", caption: "One table, one team" },
    huddle: { file: "huddle.jpg", alt: "Four teammates huddled around one laptop", caption: "Team huddle" },
    "pitching-ideas": { file: "pitching_ideas.jpg", alt: "A hacker pitching ideas in front of a whiteboard", caption: "Pitching ideas at the whiteboard" },
    deltastack: { file: "deltastack.jpg", alt: "A hacker writing the team name DeltaStack on a whiteboard", caption: "Team DeltaStack, day one" },
    "sticker-laptop": { file: "stickers.jpg", alt: "A laptop lid covered in hackathon and tech stickers", caption: "Every sticker tells a story" },
    audience: { file: "audience.jpg", alt: "Hackers seated in the auditorium, one clapping", caption: "A full auditorium" },
    "lenovo-winners": { file: "lenovo_winners.jpg", alt: "Four winners holding Lenovo tablets on stage", caption: "Winners taking home Lenovo tablets" },
    "closing-ceremony": { file: "group_photo.jpg", alt: "Everyone at the HackUNCP 2026 closing ceremony posing in the auditorium", caption: "Closing ceremony, February 22, 2026" },
    judging: { file: "judging.jpg", alt: "A team demoing their project to judges at table 13", caption: "Judging at table 13" },
    code: { file: "code.jpg", alt: "Python code open in an editor on a laptop screen", caption: "Somewhere around hour 20" },
    "gemini-winners": { file: "oncolens.jpg", alt: "Team OncoLens on stage after winning Best Use of Gemini API", caption: "OncoLens: Best Use of Gemini API" },
    "mongodb-winners": {
      file: "mongodb_winners.jpg",
      alt: "Four winners holding M5Stack IoT kits on stage",
      caption: "AURA: Automated Undereye Recovery Assessment, Best Use of MongoDB Atlas",
    },
    "first-place-aura": { file: "1st_place_AURA.jpg", alt: "Team AURA holding iPads after winning first place overall", caption: "AURA: 1st place overall" },
    "copilot-workshop": { file: "copilot_workshop.jpg", alt: "An MLH presenter giving a GitHub Copilot workshop to a raised-hands audience", caption: "Hacking with GitHub Copilot, an MLH workshop" },
  } satisfies Record<PhotoId, Photo>,

  /** The home desktop. Positions are % of the hero; mobile hides anything without a `mobile` spot. */
  desktop: [
    { type: "app", kind: "explore", label: "Explore", at: { x: 9, y: 24 }, mobile: { x: 17, y: 13 } },
    { type: "photo", photo: "keynote", at: { x: 24, y: 20 }, wide: true },
    { type: "app", kind: "readme", label: "README.txt", at: { x: 9, y: 50 } },
    { type: "photo", photo: "deltastack", at: { x: 22, y: 70 }, wide: true },
    { type: "app", kind: "apply", label: "apply.exe", opens: "apply", at: { x: 8, y: 82 }, mobile: { x: 83, y: 13 } },
    { type: "app", kind: "calendar", label: "schedule.ics", at: { x: 36, y: 87 }, mobile: { x: 50, y: 13 } },
    { type: "app", kind: "finder", label: "Finder", at: { x: 91, y: 45 }, mobile: { x: 17, y: 89 } },
    { type: "photo", photo: "first-place-aura", at: { x: 89, y: 20 }, mobile: { x: 50, y: 89 } },
    { type: "photo", photo: "huddle", at: { x: 73, y: 22 }, wide: true },
    { type: "photo", photo: "judging", at: { x: 77, y: 64 }, wide: true },
    { type: "photo", photo: "closing-ceremony", at: { x: 61, y: 87 } },
    { type: "app", kind: "folder", label: "2026", at: { x: 90, y: 72 } },
    { type: "app", kind: "trash", label: "Trash", at: { x: 92, y: 89 }, mobile: { x: 83, y: 89 } },
  ] satisfies DeskItem[],

  /**
   * The one-screen desktop version (/desktop): every section is a folder that opens a window.
   * Two columns on computers (left x 6%, right x 94%), a phone home-screen grid below 768px.
   */
  os: {
    icons: [
      { type: "app", kind: "folder", label: "About", opens: "about", at: { x: 6, y: 15 }, mobile: { x: 14, y: 52 } },
      { type: "app", kind: "folder", label: "Team", opens: "team", at: { x: 6, y: 28.5 }, mobile: { x: 38, y: 52 } },
      { type: "app", kind: "folder", label: "Sponsors", opens: "sponsors", at: { x: 6, y: 42 }, mobile: { x: 62, y: 52 } },
      { type: "app", kind: "calendar", label: "schedule.ics", opens: "schedule", at: { x: 6, y: 55.5 }, mobile: { x: 86, y: 52 } },
      { type: "app", kind: "readme", label: "guide.pdf", opens: "guide", at: { x: 6, y: 69 }, mobile: { x: 14, y: 64 } },
      { type: "app", kind: "folder", label: "Questions", opens: "faq", at: { x: 6, y: 82.5 }, mobile: { x: 38, y: 64 } },
      { type: "app", kind: "mail", label: "contact.mail", opens: "contact", at: { x: 94, y: 15 }, mobile: { x: 62, y: 64 } },
      { type: "app", kind: "apply", label: "apply.exe", opens: "apply", at: { x: 94, y: 28.5 }, mobile: { x: 86, y: 64 } },
      { type: "app", kind: "folder", label: "Newsletter", opens: "subscribe", at: { x: 94, y: 42 }, mobile: { x: 14, y: 76 } },
      { type: "app", kind: "folder", label: "follow along", opens: "posts", at: { x: 94, y: 55.5 }, mobile: { x: 38, y: 76 } },
      { type: "app", kind: "folder", label: "2026 photos", at: { x: 94, y: 69 }, mobile: { x: 62, y: 76 } },
      { type: "app", kind: "explore", label: "Past events", at: { x: 94, y: 82.5 }, mobile: { x: 86, y: 76 } },
      { type: "app", kind: "trash", label: "Trash", winLabel: "Recycle Bin", at: { x: 84, y: 86 }, mobile: { x: 14, y: 88 } },
    ] satisfies DeskItem[],
    hint: "psst — drag the folders around",
  },

  /** Folder of every photo, opened from the "2026" icon. */
  gallery: {
    title: "HackUNCP 2026",
    order: [
      "closing-ceremony", "first-place-aura", "huddle", "keynote", "deltastack", "pitching-ideas",
      "team-table", "late-night-trio", "focus", "headphones", "green-glow", "hackuncp-sticker",
      "sticker-laptop", "code", "copilot-workshop", "audience", "judging", "gemini-winners",
      "mongodb-winners", "lenovo-winners",
    ] satisfies PhotoId[],
  },

  readme: {
    title: "README.txt",
    lines: [
      `${name} is UNC Pembroke's 24-hour hackathon, organized by AI@UNCP.`,
      "You show up with an idea (or without one), find a team, build for a day, and demo what you made to judges.",
      `${year} is our third year: March 20–21 at UNC Pembroke, Saturday 5 PM to Sunday 5 PM.`,
      "Any college student can come: any major, any school, any skill level.",
    ],
  },

  /** The "Explore" icon: the archive from the old hackuncp.github.io. */
  archive: [
    {
      edition: `${name} 2025`,
      dates: "March 22–23, 2025",
      blurb: "The first HackUNCP: a 24-hour hackathon focused on intelligent AI agents.",
      href: links.devpost2025,
    },
    {
      edition: `${name} 2026`,
      dates: "February 21–22, 2026",
      blurb: "The second HackUNCP: a 24-hour hackathon focused on practical AI projects.",
      href: links.devpost2026,
    },
  ],

  highlights: {
    heading: "last season's highlights",
    folders: [
      {
        title: "Build",
        tab: "from idea to demo",
        caption: "Twenty-four hours, a blank repo, and a team that won't quit. Hackers go from idea to working demo.",
        photos: ["focus", "team-table", "code", "green-glow", "hackuncp-sticker"],
      },
      {
        title: "Learn",
        tab: "ask anything",
        caption: "Keynotes, hands-on workshops, and mentors who'll answer every question, even the ones you think are silly.",
        photos: ["keynote", "copilot-workshop", "pitching-ideas", "deltastack", "audience"],
      },
      {
        title: "Win",
        tab: "demo day",
        caption: "Demos, judging, and a closing ceremony where the whole room cheers. 2027 prizes are to be announced.",
        photos: ["first-place-aura", "gemini-winners", "mongodb-winners", "lenovo-winners", "judging"],
      },
    ] satisfies { title: string; tab: string; caption: string; photos: PhotoId[] }[],
  },

  about: {
    heading: "what is HackUNCP?",
    body: `${name} is UNC Pembroke's annual 24-hour hackathon, organized by students at AI@UNCP. Over one weekend, students from every major collaborate to learn new skills, build original projects, and present their work to judges.`,
    upcoming: {
      edition: `${name} ${year}`,
      dates: "March 20–21, 2027",
      blurb: "Our third year, Saturday 5 PM to Sunday 5 PM. Applications open soon.",
    },
  },

  schedule: {
    heading: "schedule",
    windowTitle: "schedule.ics",
    note: "The full program will be published as times are confirmed. Times marked 2026 show last year's schedule for reference.",
    // TBD: fill in 2027 times as the program is finalized. `lastYear` comes from the HackUNCP 2026 Devpost schedule.
    days: [
      {
        day: "Saturday",
        date: "March 20",
        items: [
          { time: "5:00 PM", title: "Check-in opens" },
          { time: "TBD", title: "Opening ceremony" },
          { time: "TBD", title: "Hacking starts", lastYear: "6:00 PM" },
          { time: "TBD", title: "Workshops" },
          { time: "TBD", title: "Pre-submission form due", lastYear: "11:59 PM" },
        ],
      },
      {
        day: "Sunday",
        date: "March 21",
        items: [
          { time: "TBD", title: "Submissions due", lastYear: "11:00 AM" },
          { time: "TBD", title: "Judging and demos", lastYear: "2:00–4:00 PM" },
          { time: "5:00 PM", title: "Closing ceremony" },
        ],
      },
    ] as { day: string; date: string; items: { time: string; title: string; lastYear?: string }[] }[],
    /** The whole event for "add to calendar", in UTC (5 PM Eastern = 21:00 UTC in March). `file` names the Apple and Outlook download. */
    calendar: { file: "hackuncp-2027.ics", start: "20270320T210000Z", end: "20270321T210000Z", location: "UNC Pembroke, Pembroke, NC" },
  },

  /*
    The Hacker Guide: everything hackers need during the weekend. Until 2027 details are set,
    each page describes how HackUNCP 2026 ran (from hackuncp-2026.devpost.com).
    TBD: update every page for 2027 as tracks, prizes, rules and venue are confirmed.
  */
  guide: {
    heading: "hacker guide",
    windowTitle: "hacker_guide.pdf",
    note: "This guide follows how HackUNCP 2026 ran. We'll update each page as 2027 details are confirmed.",
    pages: [
      {
        title: "Tracks",
        intro: "2027 tracks are still being decided. In 2026, every project picked one of four AI tracks:",
        items: [
          { label: "AI for Education" },
          { label: "AI for Healthcare" },
          { label: "AI for Sustainability" },
          { label: "AI for Cybersecurity" },
        ],
        outro: "Projects could also enter MLH's sponsor categories, like Best Use of Gemini API, on top of their track.",
      },
      {
        title: "Prizes",
        // TBD: the 2027 prizes depend on the budget. Replace each "To be announced" once a prize is set.
        intro: "2027 prizes are to be announced. We'll post them here once they're set.",
        items: [
          { label: "1st place overall", detail: "To be announced" },
          { label: "2nd place overall", detail: "To be announced" },
          { label: "3rd place overall", detail: "To be announced" },
          { label: "Track winners", detail: "To be announced" },
          { label: "Sponsor prizes", detail: "To be announced" },
        ],
      },
      {
        title: "Submitting",
        intro: "How submissions worked in 2026:",
        items: [
          { label: "Teams", detail: "1 to 4 people, and everyone registers on the event's Devpost page" },
          { label: "Pre-submission form", detail: "Link shared at the event, due Saturday at 11:59 PM" },
          { label: "Devpost project", detail: "One teammate submits it and adds everyone else" },
          { label: "Public GitHub repo", detail: "Created during the hackathon, with your project code" },
          { label: "Demo video", detail: "2 minutes at most" },
          { label: "Live presentation", detail: "You demo for the judges" },
          { label: "Deadline", detail: "Sunday at 11:00 AM. No late submissions." },
        ],
      },
      {
        title: "Judging",
        intro: "In 2026, judges from industry and UNC Pembroke scored every project on four equal parts:",
        items: [
          { label: "Creativity & innovation", tag: "25%", detail: "How original is the idea and the approach?" },
          { label: "AI integration", tag: "25%", detail: "Is AI central to the project, or just added on?" },
          { label: "Functionality & demo", tag: "25%", detail: "Does it work, and was it clearly demonstrated?" },
          { label: "Relevance & impact", tag: "25%", detail: "How well does it tackle a real problem in its track?" },
        ],
      },
      {
        title: "Venue",
        intro: "HackUNCP 2026 was held in James A. Thomas Hall at UNC Pembroke.",
        items: [
          { label: "Campus", detail: "UNC Pembroke, One University Drive, Pembroke, NC 28372" },
          { label: "2027 building", detail: "TBD" },
          { label: "Parking & directions", detail: "TBD" },
          { label: "Overnight", detail: "TBD" },
        ],
      },
      {
        title: "Food & help",
        intro: "In 2026, every meal and snack was free, and so was the swag. Mentors from industry and hands-on workshops ran all weekend.",
        items: [
          { label: "Meal times", detail: "In the schedule, once they're set" },
          { label: "During the event", detail: "Find an organizer, or ask on Discord (link TBD)" },
          { label: "Before the event", detail: "Use the contact window" },
        ],
      },
    ] as {
      title: string;
      intro: string;
      /**
        A `detail` of "TBD" or "To be announced" shows greyed out, and `lastYear` adds the 2026 version in grey.
        `image` is a product photo in public/prizes/; `icon` draws one when there is no photo.
      */
      items: { label: string; detail?: string; tag?: string; lastYear?: string; image?: string; icon?: PrizeIcon }[];
      outro?: string;
    }[],
  },

  faq: {
    heading: "frequently asked questions",
    windowTitle: "faq.txt",
    items: [
      // TBD: name the building once it's confirmed.
      {
        q: "Is HackUNCP 2027 an in-person event?",
        a: "Yes. HackUNCP 2027 will take place in person at UNC Pembroke in Pembroke, NC, on March 20–21, 2027. The building will be announced here once it is confirmed.",
      },
      {
        q: "How long does the event last?",
        a: "The event lasts 24 hours, from check-in on Saturday, March 20 at 5:00 PM to the closing ceremony on Sunday, March 21 at 5:00 PM.",
      },
      {
        q: "Who is eligible to attend?",
        a: "HackUNCP is open to students enrolled at any college or university, in any major and at any skill level.",
      },
      { q: "Is there a cost to attend?", a: "No. HackUNCP is free for all participants." },
      {
        q: "When do applications open?",
        a: "The opening date will be announced soon. Join the mailing list at the bottom of this page to be notified when applications open.",
      },
      {
        q: "Can first-time hackers attend?",
        a: "Yes. Participants of every skill level are welcome, and workshops and mentors will be available throughout the weekend of March 20–21, 2027.",
      },
      {
        q: "Is a computer science background required?",
        a: "No. HackUNCP welcomes students from every field of study. Experience in design, business, the sciences, and the arts strengthens any team.",
      },
      { q: "Is HackUNCP limited to UNC Pembroke students?", a: "No. Students from any college or university are welcome to apply." },
      {
        q: "Do I need a team to participate?",
        a: "No. You are welcome to participate on your own as a team of one. You may also bring a team with you or form one with other participants at the event. Whether you work alone or with a team, every participant must register individually on Devpost.",
      },
      { q: "What is the maximum team size?", a: "Teams can have one to four members." },
      // TBD: confirm food for 2027 (this answer describes 2026).
      // TBD: link the 2027 Devpost page once it's live.
      {
        q: "What is Devpost, and do I need an account?",
        a: "Devpost is the platform HackUNCP uses for participant registration and project submissions. Every participant needs a free Devpost account and must register on the HackUNCP 2027 Devpost page, including each member of a team. Teams submit one project together on Devpost, with every member added to it. The link to the 2027 page will be posted here once registration opens.",
      },
      {
        q: "Is food provided?",
        a: "At HackUNCP 2026, all meals and snacks were provided at no cost, along with event merchandise. Meal times for 2027 will be posted in the schedule.",
      },
      // TBD: the overnight plan.
      { q: "What are the overnight arrangements?", a: "The overnight plan is still being finalized. Details will be posted here before the event." },
      {
        q: "What should I bring?",
        a: "Please bring your laptop, phone, chargers, student ID, and a refillable water bottle, along with any hardware you plan to use.",
      },
      {
        q: "Will every applicant be accepted?",
        a: "If applications exceed capacity, participants will be accepted on a rolling basis. We encourage you to apply early.",
      },
    ],
  },

  team: {
    heading: "the organizing team",
    body: "HackUNCP is planned and run by a team of student leaders at AI@UNCP.",
    windowTitle: "team",
    // TBD: real names, roles and photos. `photo` is a path under /public, or null for the pixel avatar.
    // `group` fills the sidebar in the team window.
    members: [
      { name: "Name TBD", role: "Director", group: "Directors", photo: null },
      { name: "Name TBD", role: "Co-Director", group: "Directors", photo: null },
      { name: "Name TBD", role: "Sponsorship Lead", group: "Sponsorship", photo: null },
      { name: "Name TBD", role: "Design Lead", group: "Design", photo: null },
      { name: "Name TBD", role: "Logistics Lead", group: "Logistics", photo: null },
      { name: "Name TBD", role: "Development Lead", group: "Development", photo: null },
    ] as { name: string; role: string; group: string; photo: string | null }[],
  },

  sponsors: {
    windowTitle: `sponsors_${year}`,
    heading: "sponsors",
    tag: `${year} sponsors`,
    comingSoon: `Our ${year} sponsors will be announced soon.`,
    cta: `sponsor HackUNCP ${year}`,
    /** Logo rows, biggest first. `slots` is how many "logo coming soon" spaces show while `list` is empty. */
    tiers: [
      { id: "title", slots: 1 },
      { id: "gold", slots: 2 },
      { id: "silver", slots: 4 },
    ] as { id: SponsorTier; slots: number }[],
    // TBD: confirmed 2027 sponsors, e.g. { name: "Acme", logo: "/sponsors/acme.svg", url: "https://acme.com", tier: "gold" }.
    list: [] as Sponsor[],
  },

  posts: {
    heading: "follow along",
    kicker: "fresh off the camera roll",
    tagline: "UNC Pembroke's 24-hour hackathon",
    /** The first post shows largest. Captions double as ready-to-post copy for Instagram. */
    items: [
      {
        photo: "closing-ceremony",
        label: "save the date",
        caption: "HackUNCP 2027 is official. March 20–21 at UNC Pembroke: 24 hours to build something real. Applications open soon.",
      },
      {
        photo: "first-place-aura",
        label: "throwback",
        caption: "AURA took 1st place overall at HackUNCP 2026. Somebody's taking that spot in March. Could be you.",
      },
      {
        photo: "audience",
        label: "first-timers",
        caption: "Never been to a hackathon? Good. Workshops and mentors run all weekend, and every major is welcome.",
      },
      {
        photo: "sticker-laptop",
        label: "for sponsors",
        caption: "Want your logo on every laptop at UNCP this March? Sponsor slots for 2027 are open. Let's talk.",
      },
    ] satisfies { photo: PhotoId; label: string; caption: string }[],
  },

  connect: {
    heading: "let's connect",
    body: "We welcome inquiries from sponsors, mentors, judges, and participants. HackUNCP is organized by students at AI@UNCP, and we review every message we receive.",
    tab: "see you in '27",
    photos: ["huddle", "closing-ceremony", "headphones", "late-night-trio", "sticker-laptop", "first-place-aura"] satisfies PhotoId[],
    receipt: {
      header: ["HACKUNCP 2026", "UNC PEMBROKE", "FEB 21-22, 2026"],
      rows: [
        ["HOURS HACKED", "24.00"],
        ["IDEAS PITCHED", "LOTS"],
        ["COFFEE REFILLS", "∞"],
        ["BUGS FIXED", "MOST"],
        ["NEW FRIENDS", "MANY"],
      ],
      total: ["TOTAL", "1 WEEKEND"],
      footer: ["THANK YOU", "SEE YOU IN '27"],
    },
  },

  /*
    The application, styled as an installer ("HackUNCP 2027 Setup"). The form has its own page, /apply,
    and the apply window on the scrolling site links to it. It has three states:
      links.apply set      → applications live on an outside platform; the window links there.
      apply.action set     → the built-in form below opens on /apply and sends answers to that URL.
      neither (right now)  → "applications open soon" plus the mailing list.
    Open /apply/?apply=preview to try the built-in form before it's connected.
  */
  apply: {
    windowTitle: "apply.exe",
    product: `HackUNCP ${year} Setup`,
    /**
     * TBD: where the built-in form sends answers: any URL that accepts a form POST
     * (Formspree, Getform, Basin, a Google Apps Script…). Setting it opens applications.
     */
    action: null as string | null,
    soon: {
      heading: "Applications open soon",
      body: "apply.exe is almost ready. Leave your email and we'll tell you the moment applications open.",
    },
    /** Shown in the apply window once applications open, with a button to the application. */
    open: {
      heading: "Applications are open",
      body: `Applications for ${name} ${year} are open. Every person on a team applies on their own.`,
      button: "Start your application",
    },
    // The questions most MLH member hackathons ask. Edit freely.
    steps: [
      {
        title: "About you",
        fields: [
          { name: "first_name", label: "First name", type: "text", required: true, autoComplete: "given-name" },
          { name: "last_name", label: "Last name", type: "text", required: true, autoComplete: "family-name" },
          { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", wide: true },
          { name: "phone", label: "Phone number", type: "tel", required: true, autoComplete: "tel" },
          { name: "age", label: "Age", type: "number", required: true },
          { name: "pronouns", label: "Pronouns", type: "select", options: ["she/her", "he/him", "they/them", "Other", "Prefer not to say"] },
        ],
      },
      {
        title: "School",
        fields: [
          { name: "school", label: "College or university", type: "text", required: true, autoComplete: "organization", wide: true },
          {
            name: "level_of_study",
            label: "Level of study",
            type: "select",
            required: true,
            options: ["Undergraduate (2-year or community college)", "Undergraduate (4-year)", "Graduate (master's, doctoral, professional)", "Other"],
            wide: true,
          },
          { name: "major", label: "Major or field of study", type: "text", required: true },
          { name: "graduation_year", label: "Graduation year", type: "select", required: true, options: ["2027", "2028", "2029", "2030", "2031 or later"] },
          { name: "country", label: "Country of residence", type: "text", required: true, autoComplete: "country-name", wide: true },
        ],
      },
      {
        title: "Experience",
        fields: [
          {
            name: "hackathons",
            label: "How many hackathons have you been to?",
            type: "select",
            required: true,
            options: ["This would be my first!", "1–2", "3–5", "6 or more"],
            wide: true,
          },
          { name: "goals", label: "What do you want to build or learn at HackUNCP?", type: "textarea", required: true, wide: true },
          { name: "github", label: "GitHub", type: "url", placeholder: "https://github.com/…" },
          { name: "linkedin", label: "LinkedIn", type: "url", placeholder: "https://linkedin.com/in/…" },
          { name: "resume", label: "Resume link (Google Drive, Dropbox…)", type: "url", wide: true },
        ],
      },
      {
        title: "The weekend",
        fields: [
          { name: "shirt_size", label: "T-shirt size", type: "select", options: ["XS", "S", "M", "L", "XL", "XXL"] },
          { name: "gender", label: "Gender", type: "select", options: ["Woman", "Man", "Non-binary", "Prefer to self-describe", "Prefer not to say"] },
          {
            name: "dietary",
            label: "Dietary restrictions",
            type: "chips",
            options: ["Vegetarian", "Vegan", "Halal", "Kosher", "Gluten-free", "Dairy-free", "Nut allergy"],
            wide: true,
          },
          { name: "dietary_other", label: "Other dietary needs or allergies", type: "text", wide: true },
          { name: "accessibility", label: "Anything we can do to make the weekend more accessible for you?", type: "textarea", wide: true },
        ],
      },
      {
        title: "Agreements",
        // TBD: confirm the MLH wording once HackUNCP is accepted as an MLH member event (drop the MLH items if it isn't).
        fields: [
          { name: "college_student", label: "I'm currently enrolled at a college or university.", type: "check", required: true },
          {
            name: "mlh_code_of_conduct",
            label: "I have read and agree to the [MLH Code of Conduct](https://mlh.io/code-of-conduct).",
            type: "check",
            required: true,
          },
          {
            name: "mlh_privacy",
            label:
              "I authorize you to share my application/registration information with Major League Hacking for event administration, ranking, and MLH administration in-line with the [MLH Privacy Policy](https://mlh.io/privacy). I further agree to the terms of both the [MLH Contest Terms and Conditions](https://github.com/MLH/mlh-policies/blob/main/contest-terms.md) and the [MLH Privacy Policy](https://mlh.io/privacy).",
            type: "check",
            required: true,
          },
          {
            name: "mlh_emails",
            label: "I authorize MLH to send me occasional emails about relevant events, career opportunities, and community announcements.",
            type: "check",
          },
        ],
      },
    ] satisfies { title: string; fields: ApplyField[] }[],
    done: {
      heading: "Application received",
      body: `Thanks for applying to ${name} ${year}! We'll email you about next steps. See you in Pembroke.`,
    },
  },

  subscribe: {
    heading: "Subscribe to our newsletter",
    label: "Enter your email",
    button: "Join mailing list",
    fineprint: "We only email about HackUNCP. Unsubscribe anytime.",
    /**
     * TBD: the web app URL (ending in /exec) of the waitlist script in apps-script/waitlist.gs,
     * which saves each sign-up to a Google Sheet. See "Connect the waitlist" in the README.
     * While null, the form explains sign-ups open soon.
     */
    action: null as string | null,
    notLive: "Our mailing list isn't live yet. Check back soon!",
    desktop: [
      { type: "app", kind: "mail", label: "contact.mail", at: { x: 12, y: 26 }, mobile: { x: 18, y: 10 } },
      { type: "photo", photo: "code", at: { x: 16, y: 62 } },
      { type: "app", kind: "explore", label: "Explore", at: { x: 86, y: 24 }, mobile: { x: 82, y: 10 } },
      { type: "photo", photo: "copilot-workshop", at: { x: 84, y: 58 } },
      { type: "photo", photo: "pitching-ideas", at: { x: 9, y: 84 } },
      { type: "app", kind: "readme", label: "README.txt", at: { x: 91, y: 84 } },
    ] satisfies DeskItem[],
  },

  taskbar: {
    start: name,
    links: [
      { label: "2025 on Devpost", href: links.devpost2025 },
      { label: "2026 on Devpost", href: links.devpost2026 },
      { label: "AI@UNCP", href: links.organizer },
      { label: "MLH Code of Conduct", href: links.mlhCodeOfConduct },
    ],
  },

  meta: {
    title: `${name} ${year}`,
    description: `${name} ${year} is UNC Pembroke's 24-hour hackathon, organized by AI@UNCP. Free for every student, every major, every skill level.`,
    /** The site's public address. Keep public/robots.txt and public/sitemap.xml in step with it. */
    url: "https://hackuncp.github.io",
    /** HackUNCP's Google Search Console check, carried over from the old site. */
    googleVerification: "Urk5X0IKPxzTGKlDZTJnMg-ZFG-3eHNP1rknY8QnfrU",
  },
};

export type Config = typeof config;
export default config;
