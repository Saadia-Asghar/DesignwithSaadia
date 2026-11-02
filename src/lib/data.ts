const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public asset path so it works on Vercel (/) and GitHub Pages (/DesignwithSaadia). */
export const asset = (path: string) => `${BASE}${path}`;

export const person = {
  name: "Saadia Asghar",
  title: "Product & visual designer",
  email: "saadianigah@gmail.com",
  phone: "+92 315 912 7771",
  phoneHref: "tel:+923159127771",
  location: "Islamabad, Pakistan",
  school: "B.Sc. Data Science · GIKI · 2024 – 2028",
  linkedin: "https://www.linkedin.com/in/saadia-asghar",
  github: "https://github.com/Saadia-Asghar",
  instagram: "https://www.instagram.com/saadiaasghar_",
  instagramHandle: "@saadiaasghar_",
  devPortfolio: "https://portfoliosaadia.vercel.app/",
  resume: "/Saadia-Asghar-Resume.pdf",
} as const;

export const awards = [
  "1st · Vyrothon product design",
  "Top 10 · MIT Hack-Nation",
  "3rd · BASED Pakistan",
  "Top 5 of 500+ · Vyrothon final",
  "Canva Campus Ambassador",
  "Director of Marketing · UROG",
  "Head of Marketing · Microsoft Club GIKI",
  "Graphic Design Associate · PreMed.PK",
] as const;

export const stats = [
  { value: "1st", label: "Vyrothon product design round, NSTP" },
  { value: "Top 10", label: "MIT Hack-Nation, with CallPilot" },
  { value: "3rd", label: "BASED Pakistan, with ChaInTicket+" },
  { value: "25", label: "Canva templates across four teams" },
] as const;

export type Case = {
  slug: string;
  title: string;
  kicker: string;
  year: string;
  award?: string;
  image: string;
  figma: string;
  live?: string;
  liveLabel?: string;
  code?: string;
  accent: string;
  oneLiner: string;
  problem: string;
  approach: string[];
  screens: string[];
  tools: string[];
  metrics?: { value: string; label: string }[];
};

export const cases: Case[] = [
  {
    slug: "vyrothon",
    title: "Vyrothon",
    kicker: "Immersive product prototype",
    year: "April 2026",
    award: "1st · Product design",
    image: "/work/vyrothon.webp",
    figma:
      "https://www.figma.com/design/E9IKt31asTEeVyKS595YX3/Vyro?node-id=4-17&t=jjLeblvLTYZQ2yTd-1",
    live: "https://vyrothon-2026-aegiscare-pitch.vercel.app",
    liveLabel: "Pitch deck",
    code: "https://github.com/Saadia-Asghar/vyrothon-2026-aegiscare-pitch",
    accent: "#2ee59d",
    oneLiner:
      "A high-fidelity prototype about user presence and gamified storytelling. There was no live pitch, so the file had to explain itself.",
    problem:
      "Built at the National Science & Technology Park, the brief was judged on the prototype alone. Every screen had to carry the idea without a presenter standing next to it.",
    approach: [
      "Opened the file with a README frame, so a judge knows where to start and what each flow proves.",
      "Designed the path from signup to intent capture to a three-step onboarding, then the dashboard it unlocks.",
      "Built every key screen for desktop (1440) and mobile (390), so the idea holds at both sizes.",
      "Kept a dark, high-contrast system with one green accent for every primary action.",
    ],
    screens: [
      "README: open this first",
      "Auth · signup, desktop and mobile",
      "Intent capture",
      "Onboarding · suite, activation, unlock",
      "Dashboard, desktop and mobile",
    ],
    tools: ["Figma", "Prototyping", "Immersive UI"],
    metrics: [
      { value: "1st", label: "Product design round" },
      { value: "Top 5", label: "National final" },
      { value: "500+", label: "Applicants" },
    ],
  },
  {
    slug: "callpilot",
    title: "CallPilot",
    kicker: "AI operations console",
    year: "January 2026",
    award: "Top 10 · MIT Hack-Nation",
    image: "/work/callpilot.webp",
    figma:
      "https://www.figma.com/design/yw4reHaM5S3p0WADMxoo2X/Call-Pilot?node-id=11-2&t=9ir8e8FNP0r0qLEj-1",
    live: "https://callpilot-control.vercel.app",
    code: "https://github.com/Saadia-Asghar/callpilot-control",
    accent: "#1fa3d8",
    oneLiner:
      "A voice desk that takes the call, keeps what was said, and schedules the next step. Designed and built end to end during the hackathon.",
    problem:
      "Clinics, salons, and tutors lose bookings to missed calls and no-shows. The product needed to show an AI agent could be trusted with that, inside a few seconds of landing.",
    approach: [
      "A landing page that lets people try it before signing up: Talk Live, Voice Clone, AI Schedule, and Draft Editor as tabs, three free tries each.",
      "A feature section that answers why each part matters: smart scheduling, voice cloning, call scripts, and no-show recovery.",
      "Audience cards for clinics, salons, and universities, so a visitor finds themselves on the page.",
      "A calm operator login: one card, two tabs, nothing to distract from getting in.",
    ],
    screens: ["Landing with live demo", "Feature explainer", "Audiences", "Operator auth"],
    tools: ["Figma", "React", "Supabase", "ElevenLabs", "Gemini"],
  },
  {
    slug: "chainticket",
    title: "ChaInTicket+",
    kicker: "On-chain event ticketing",
    year: "December 2025",
    award: "3rd · BASED Pakistan",
    image: "/work/chainticket.webp",
    figma:
      "https://www.figma.com/design/ZZ259rh7azNEfkHnmRLywl/ChainTicket?node-id=0-1&t=EadmwPrVzE99VRTb-1",
    live: "https://chain-ticket.vercel.app",
    code: "https://github.com/Saadia-Asghar/Chain_ticket",
    accent: "#7c4dff",
    oneLiner:
      "Event tickets that can be checked, not just screenshotted. A ticket for the guest and a desk for the organizer.",
    problem:
      "In Pakistan, a screenshot of a QR code is often a second entry, and scalpers fill the gap. Blockchain can fix that, but most people at the door have never used a wallet.",
    approach: [
      "Led with the promise in three words: Secure. Transparent. Unstoppable. The chain comes second.",
      "Designed QR verification so a copied image cannot get a second person in.",
      "Built organizer dashboards for sales, attendance, and the night itself.",
      "Thirteen full-width desktop screens in one file, each built at 1920.",
    ],
    screens: ["Landing", "Ticket and QR verification", "Organizer dashboard"],
    tools: ["Figma", "TypeScript", "Blockchain", "QR"],
  },
  {
    slug: "privyhealth",
    title: "PrivyHealth",
    kicker: "Patient-owned medical records",
    year: "Entangled Hackathon 2026",
    image: "/work/privyhealth.webp",
    figma:
      "https://www.figma.com/design/Oe9j3rJoPVx18SFIPENJE9/Privy-Health?node-id=0-1&t=Em4bdeQzkCb5OnMf-1",
    accent: "#16b364",
    oneLiner:
      "Your health. Your data. Finally yours. A full product surface for encrypted records that a patient actually holds.",
    problem:
      "Medical records in Pakistan live in paper files and hospital silos. Patients can't carry them, prescriptions can be forged, and in an emergency nobody can reach them.",
    approach: [
      "A dashboard-first layout with a sidebar for patients, doctors, and pharmacies, each in its own lane.",
      "Prescriptions that can't be forged, with pharmacy verification over WhatsApp.",
      "Emergency QR access that works without a login.",
      "A drug checker, medicine prices, and a doctor directory, so the record is useful every day, not only in a crisis.",
    ],
    screens: ["Home", "Patient dashboard", "Create record", "Doctor dashboard", "QR scanner", "Drug checker"],
    tools: ["Figma", "Dashboard design", "Health UX"],
  },
  {
    slug: "moodmaze",
    title: "MoodMaze",
    kicker: "Cinematic recommendation interface",
    year: "2025",
    image: "/work/moodmaze.webp",
    figma: "https://www.figma.com/design/HlnuZL5J1Wk8q6xaAseJ8F/Mood-Maze?t=b3mlhQ4jSQqs94QJ-1",
    live: "https://moodmaze.vercel.app",
    code: "https://github.com/Saadia-Asghar/Mood_Maze",
    accent: "#e8b422",
    oneLiner: "Mood in, a short shelf of films out. Stop scrolling. Start watching.",
    problem:
      "Streaming apps answer 'what should I watch?' with an infinite grid. The scroll becomes the evening.",
    approach: [
      "A cinema lobby, red curtain and gold type, so the app feels like going out, not browsing.",
      "Three quick questions instead of a search box.",
      "A screening room that hands back three films, ranked, and stops there.",
      "A library to keep the moods and films you saved.",
    ],
    screens: ["Lobby", "Mood quiz", "Screening", "Library"],
    tools: ["Figma", "React", "Firebase", "TMDB"],
  },
];

export type Chapter = "acm" | "mlsa" | "urog" | "premed";

export const chapterLabels: Record<Chapter, { short: string; long: string }> = {
  mlsa: { short: "Microsoft Club", long: "Microsoft Learn Student Ambassadors · GIKI" },
  urog: { short: "UROG", long: "Undergraduate Research Organization · GIKI" },
  acm: { short: "ACM", long: "ACM GIKI chapter" },
  premed: { short: "PreMed.PK", long: "PreMed.PK · medical education" },
};

export type Visual = {
  id: string;
  chapter: Chapter;
  title: string;
  subtitle: string;
  image?: string;
  href?: string;
  shape: "wide" | "tall" | "square";
  feature?: boolean;
};

export const visuals: Visual[] = [
  { id: "mlsa-club", chapter: "mlsa", title: "Inductions open", subtitle: "Recruitment poster · Batches 35 & 36", image: "/work/mlsa-club.webp", href: "https://canva.link/h7nvay02v04d8nm", shape: "tall", feature: true },
  { id: "urog-ec", chapter: "urog", title: "Executive council 2026–27", subtitle: "Meet-the-team announcement", image: "/work/urog-ec.webp", href: "https://canva.link/3dypggbzg7lvfjj", shape: "wide", feature: true },
  { id: "acm-wic", chapter: "acm", title: "Women in Computing", subtitle: "Flagship event poster", image: "/work/acm-wic.webp", href: "https://canva.link/e92p1vc5liwinkp", shape: "wide", feature: true },
  { id: "premed-edu-1", chapter: "premed", title: "Abnormal Development", subtitle: "SnapCourses lesson deck", image: "/work/premed-edu-1.webp", href: "https://canva.link/2gr7145jlbx0ttr", shape: "wide", feature: true },
  { id: "mlsa-panaflex", chapter: "mlsa", title: "We are MLSA", subtitle: "Large-format panaflex signage", image: "/work/mlsa-panaflex.webp", href: "https://canva.link/nfvzr08alsqq9r9", shape: "wide" },
  { id: "urog-research-201", chapter: "urog", title: "Research 201", subtitle: "Session poster · year two, first session", image: "/work/urog-research-201.webp", href: "https://canva.link/c9b28qkhemyp2qw", shape: "tall" },
  { id: "acm-induction", chapter: "acm", title: "Volunteer call '25", subtitle: "Induction campaign", image: "/work/acm-induction.webp", href: "https://canva.link/nllc230n1faj0h6", shape: "wide" },
  { id: "mlsa-datacamp", chapter: "mlsa", title: "Microsoft × DataCamp", subtitle: "Partnership announcement", image: "/work/mlsa-datacamp.webp", href: "https://canva.link/otu10gcpgs1uild", shape: "wide" },
  { id: "premed-edu-2", chapter: "premed", title: "Nuclear Reactors", subtitle: "SnapCourses lesson deck", image: "/work/premed-edu-2.webp", href: "https://canva.link/yxt9f7vlj7zs2ex", shape: "wide" },
  { id: "urog-welcome", chapter: "urog", title: "Welcome Batch 36", subtitle: "Wizarding-school welcome banner", image: "/work/urog-welcome.webp", href: "https://canva.link/lst1imhll7444s5", shape: "wide" },
  { id: "mlsa-lnd", chapter: "mlsa", title: "AI with Microsoft tools", subtitle: "L&D session poster", image: "/work/mlsa-lnd.webp", href: "https://canva.link/y89hsly4g1npq98", shape: "wide" },
  { id: "mlsa-club-share", chapter: "mlsa", title: "Inductions open · share cut", subtitle: "The same poster, cut for WhatsApp", image: "/work/mlsa-club-whatsapp.webp", href: "https://canva.link/h7nvay02v04d8nm", shape: "tall" },
  { id: "premed-edu-3", chapter: "premed", title: "Effects of Radiation", subtitle: "SnapCourses lesson deck", image: "/work/premed-edu-3.webp", href: "https://canva.link/dvrkgp6zobfwh9k", shape: "wide" },
  { id: "urog-inductions", chapter: "urog", title: "Inductions open", subtitle: "Recruitment banner · five departments", image: "/work/urog-inductions.webp", href: "https://canva.link/12sqyxgsiknzfsp", shape: "wide" },
  { id: "mlsa-triptych", chapter: "mlsa", title: "Inductions triptych", subtitle: "Three-panel recruitment banner", image: "/work/mlsa-triptych.webp", href: "https://canva.link/5yflv8c0dwtjt2h", shape: "wide" },
  { id: "mlsa-batches", chapter: "mlsa", title: "Our new team", subtitle: "Inducted members announcement", image: "/work/mlsa-batches.webp", href: "https://canva.link/b0p66r49eww7sni", shape: "wide" },
  { id: "mlsa-welcome", chapter: "mlsa", title: "Welcome Batch 36", subtitle: "Welcome banner · Press Enter.", image: "/work/mlsa-welcome.webp", shape: "wide" },
  { id: "mlsa-linkedin", chapter: "mlsa", title: "LinkedIn carousel", subtitle: "Social series for the community page", image: "/work/mlsa-linkedin.webp", href: "https://canva.link/jiy8mij69zge9ps", shape: "square" },
  { id: "mlsa-induct", chapter: "mlsa", title: "MLSA inductions", subtitle: "Onboarding visuals", image: "/work/mlsa-induct.webp", href: "https://canva.link/m3zy4dqfvnbzw7u", shape: "wide" },
];

/** Canva templates without a preview image yet; shown as a link list. */
export const moreTemplates: Visual[] = [
  { id: "acm-apsc", chapter: "acm", title: "All-Pakistan Software Competition", subtitle: "Campaign collateral", href: "https://canva.link/at2vzf2pdvwjy8r", shape: "wide" },
  { id: "acm-carbonteq", chapter: "acm", title: "Carbonteq", subtitle: "Sponsor collateral", href: "https://canva.link/obnr96908orfwio", shape: "wide" },
  { id: "mlsa-ldp", chapter: "mlsa", title: "Learning & Development", subtitle: "Session poster", href: "https://canva.link/27cdkido37176p0", shape: "wide" },
  { id: "mlsa-card", chapter: "mlsa", title: "Member card", subtitle: "Club identity card", href: "https://canva.link/nni270xk4980970", shape: "wide" },
  { id: "mlsa-info", chapter: "mlsa", title: "Info session", subtitle: "Event poster", href: "https://canva.link/y7y0b9un3uyj6sc", shape: "wide" },
  { id: "mlsa-cert", chapter: "mlsa", title: "Member certificate", subtitle: "Certificate template", href: "https://canva.link/et94srh8680cbzs", shape: "wide" },
];

export const steps = [
  { n: "01", title: "Understand", body: "Read the brief twice and write the problem in one sentence. If it doesn't fit, the screens are early." },
  { n: "02", title: "Sketch", body: "Paper first, then Figma. The first draft stays quick, loose, and honest." },
  { n: "03", title: "Design", body: "Figma, Canva, and Affinity, with type, spacing, and colour that repeat on purpose." },
  { n: "04", title: "Review", body: "Read the file from the start and cut anything that didn't earn its place." },
] as const;

export const principles = [
  "Clarity is a form of kindness.",
  "Every pixel earns its place.",
  "Ship, watch, edit.",
  "Systems beat genius.",
] as const;

export const designRoles = [
  {
    org: "PreMed.PK",
    role: "Graphic Design Associate",
    when: "May 2025 – Jan 2026",
    detail:
      "Visual identity and lesson assets for a medical education platform. Built reusable templates so the next asset never started from a blank page.",
  },
  {
    org: "UROG, GIKI",
    role: "Director of Marketing",
    when: "May 2026 – now",
    detail: "Sits on the executive council. Marketing strategy, the content plan, and the look of every announcement.",
  },
  {
    org: "Microsoft Club, GIKI",
    role: "Head of Marketing",
    when: "Dec 2024 – now",
    detail: "Campaigns, inductions, signage, and sponsor outreach. Head of Marketing since September 2026.",
  },
  {
    org: "Canva",
    role: "Campus Ambassador & Community Lead",
    when: "Jun 2026 – now",
    detail: "Design and AI-assisted creativity workshops at GIKI, including a human-centred design studio at HackSummer.",
  },
  {
    org: "ACM GIKI",
    role: "Design & marketing",
    when: "2025 – 2026",
    detail: "Event posters, induction campaigns, and sponsor collateral for the chapter.",
  },
] as const;

export const tools = ["Figma", "Canva", "Affinity", "Prototyping", "Wireframes", "Design systems", "React", "Next.js"] as const;

export const certifications = [
  "Graphic Design Essentials · Canva",
  "Canva Essentials",
  "AI Skills for Students · Canva",
  "AI in the Classroom · Canva",
] as const;
