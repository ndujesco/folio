// Single source of truth for portfolio content.
// All facts sourced from Peter's CVs, GitHub (ndujesco), and verified research.

export const profile = {
  name: "Peter Ndujekwu",
  fullName: "Peter Ugochukwu Ndujekwu",
  role: "Full-Stack Software Engineer",
  // Rotating words for the hero typewriter
  roles: [
    "Full-Stack Software Engineer",
    "Backend Architect",
    "AI Builder",
    "Hackathon Winner",
  ],
  tagline:
    "I build fast, reliable products end-to-end, from clean React/Next.js front-ends to scalable Node, NestJS and FastAPI back-ends.",
  blurb:
    "3+ years shipping software, first-class Electrical & Electronics Engineering undergraduate, and a serial hackathon winner.",
  location: "Lagos, Nigeria",
  avatar:
    "https://avatars.githubusercontent.com/u/92054718?s=460&v=4",
  email: "ugopeter26@gmail.com",
  workEmail: "peter.ndujekwu@trustloopkyc.com",
  resumeTech: "/Peter-Ndujekwu-Software-Engineer.pdf",
  resumeSchool: "/Peter-Ndujekwu-Academic-CV.pdf",
};

export const socials = [
  { label: "GitHub", handle: "ndujesco", href: "https://github.com/ndujesco", icon: "github" },
  { label: "LinkedIn", handle: "ndujekwu", href: "https://www.linkedin.com/in/ndujekwu/", icon: "linkedin" },
  { label: "X (Twitter)", handle: "@ugo_jekwu", href: "https://twitter.com/ugo_jekwu", icon: "twitter" },
  { label: "Linktree", handle: "ndujekwuu", href: "https://linktr.ee/ndujekwuu", icon: "link" },
];

export const stats = [
  { value: "₦30M", label: "Zecathon 2025 grand prize", sub: "Team TrustLoop" },
  { value: "3", label: "Hackathons won", sub: "Zecathon · Afrihack · ABC" },
  { value: "110+", label: "Teams at Claude Hackathon", sub: "Helped run as Tech Lead" },
  { value: "3+", label: "Years building software", sub: "Front-end & back-end" },
];

// Marquee skill ticker
export const skillTicker = [
  "TypeScript", "Node.js", "Next.js", "React", "NestJS", "FastAPI", "Flask",
  "PostgreSQL", "MongoDB", "GraphQL", "REST", "WebSockets", "Redux",
  "TailwindCSS", "Docker", "Python", "C++", "Jest", "Git",
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "SCSS", "Vite", "Figma"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "NestJS", "Python", "FastAPI", "Flask", "GraphQL", "REST APIs", "WebSockets"],
  },
  {
    title: "Data & Infra",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Docker", "Vercel", "Render", "Firebase"],
  },
  {
    title: "Practices & Tools",
    items: ["Git", "Jest", "Unit / E2E Testing", "Code Review", "Jira", "Clean Architecture"],
  },
];

// Marquee achievements — the headline differentiators
export const achievements = [
  {
    title: "Zecathon 2025: Grand Prize Winner",
    org: "Zenith Bank Tech Fair 5.0 · Team TrustLoop",
    prize: "₦30,000,000",
    blurb:
      "Built TrustLoop, a seamless digital KYC and liveness-verification platform, and won the top prize against 100+ teams in a 3-day final sprint. Now operating as TrustLoop KYC.",
    tags: ["KYC", "Liveness Verification", "FinTech"],
    accent: "violet",
    href: "https://techcabal.com/2026/01/06/zecathon-5-0/",
    cta: "Read the coverage",
  },
  {
    title: "ABC Hackathon: Winner",
    org: "Team Zer0day Saints · FIG",
    prize: "Winner",
    blurb:
      "Built FIG, a Federated National Digital Identity Gateway: a secure interoperability layer that lets government and private-sector systems verify citizens through one reusable digital identity. Verify once, use everywhere.",
    tags: ["Digital Identity", "Flask", "Security"],
    accent: "amber",
    href: "https://github.com/ndujesco/MVP",
    cta: "View the code",
  },
  {
    title: "Afrihack: Winner",
    org: "Team Aegis",
    prize: "1st place",
    blurb:
      "Part of the Aegis team that took first place at Afrihack, shipping a working build under tight hackathon constraints.",
    tags: ["Hackathon", "Rapid Prototyping"],
    accent: "violet",
  },
  {
    title: "Technical Lead, Claude Builder Club (UNILAG)",
    org: "Official Anthropic-powered student AI community",
    prize: "Leadership",
    blurb:
      "Lead the technical arm of UNILAG's official Claude AI community. Helped run the Claude Hackathon (110+ teams) and teach students to ship real projects on the Claude API.",
    tags: ["Leadership", "Claude API", "Community"],
    accent: "amber",
    href: "https://claude-bc-unilag.vercel.app/",
    cta: "Visit the club",
  },
];

export const experience = [
  {
    role: "Technical Lead",
    company: "Claude Builder Club, UNILAG",
    period: "2025 - Present",
    href: "https://claude-bc-unilag.vercel.app/",
    points: [
      "Lead the technical direction of UNILAG's official Anthropic-powered AI community.",
      "Built the club's web platform with Next.js and TypeScript.",
      "Helped run the Claude Hackathon with 110+ participating teams.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Afretec Network (paired with Waltersam Services)",
    period: "Sep 2024 - Dec 2024",
    points: [
      "Completed an intensive engineering placement embedded with a startup.",
      "Received organisational recognition for outstanding contributions.",
    ],
  },
  {
    role: "Backend Engineer",
    company: "TekTalk NG",
    period: "Sep 2022 - Present",
    points: [
      "Design and maintain the database relations and backend architecture for a social network for techies.",
      "Improve performance and scalability with Node.js and MongoDB.",
      "Drive timely code reviews and clean-code practices across the team.",
    ],
  },
  {
    role: "Backend Engineer",
    company: "Huelage",
    period: "Jul 2023 - Feb 2024",
    points: [
      "Built and scaled the backend with NestJS and GraphQL.",
      "Owned unit, integration and end-to-end testing with Jest.",
      "Handled and protected sensitive user information.",
    ],
  },
  {
    role: "Software Engineer (Freelance)",
    company: "Independent",
    period: "2023 - 2024",
    points: [
      "Delivered high-quality client and in-house web apps, often exceeding expectations.",
      "Stack: Node.js, React, Next.js, TypeScript, NestJS, FastAPI, REST APIs.",
    ],
  },
  {
    role: "Backend Intern",
    company: "Tishlabs",
    period: "Apr 2022 - Jul 2022",
    points: [
      "Built an e-commerce web app for a New York–based cafe.",
      "Performed bug fixes and code reviews.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  website?: string;
  featured?: boolean;
  accent?: "violet" | "amber";
};

export const projects: Project[] = [
  {
    title: "TrustLoop",
    description:
      "Digital KYC and liveness-verification platform that won the ₦30M grand prize at Zecathon 2025. Now operating as TrustLoop KYC.",
    tech: ["Next.js", "TypeScript", "FastAPI", "Computer Vision"],
    featured: true,
    accent: "violet",
  },
  {
    title: "FIG (Identity Gateway)",
    description:
      "Federated National Digital Identity Gateway that won the ABC Hackathon: verify a citizen once, then reuse that trusted identity across banks, telecoms, health and government systems.",
    tech: ["Python", "Flask", "JWT", "Security"],
    github: "https://github.com/ndujesco/MVP",
    featured: true,
    accent: "violet",
  },
  {
    title: "SpecterAPI",
    description:
      "Full-spectrum API attack-surface CLI: chains ghost-endpoint discovery, OAuth exploitation and dual-session BOLA/IDOR testing into one session-aware workflow. Cyberfest finalist.",
    tech: ["Python", "Security", "CLI", "SQLite"],
    website: "https://youtu.be/1rZxEOIJNy8",
    featured: true,
    accent: "amber",
  },
  {
    title: "Claude Builder Club (UNILAG)",
    description:
      "Web platform for UNILAG's official Anthropic-powered AI community, where I serve as Technical Lead.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/ndujesco/claude-unilag",
    website: "https://claude-bc-unilag.vercel.app/",
    featured: true,
    accent: "violet",
  },
  {
    title: "TekTalk",
    description:
      "A social network built for (but not limited to) techies. I architected and built the backend, user relationships and complex queries.",
    tech: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/ndujesco/tek-talk-api",
    website: "https://tektalk.vercel.app/",
  },
  {
    title: "Kairos",
    description:
      "Health-tech platform to reduce patient wait times, unify medical records and help detect outbreaks.",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/ndujesco/kairos",
    // website: "https://kairos-tos-hub-innovation.vercel.app/",
  },
  {
    title: "Prince Weds Nonye",
    description:
      "An elegant, interactive digital wedding-invitation site with a tap-to-reveal experience, built with Next.js.",
    tech: ["Next.js", "React", "Animation"],
    website: "https://princewedsnonye.xyz",
  },
  {
    title: "Email Composer",
    description:
      "A focused tool for composing and managing emails.",
    tech: ["TypeScript", "Next.js"],
    github: "https://github.com/ndujesco/email-composer",
  },
];

export const aboutParagraphs = [
  "I'm a full-stack software engineer who builds across the whole stack. I'm equally at home wiring up a polished React/Next.js interface and architecting the database relations and APIs behind it.",
  "My journey started with Python, but I fell for JavaScript and TypeScript, and have spent 3+ years shipping production software with Node.js, NestJS, FastAPI and React. Lately I've been building with AI as Technical Lead of UNILAG's Claude Builder Club.",
  "I'm also a final-year, first-class Electrical and Electronics Engineering student at the University of Lagos, so I'm just as comfortable with circuits and signals as I am with code.",
];
