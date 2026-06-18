// Content copied verbatim from the design handoff prototype (Portfolio.dc.html)
// so copy/data stays exactly in sync with the approved design.

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
  { id: "resume", label: "Resume" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/Rizwaan11", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/m-rizwanali21", icon: "linkedin" },
  { label: "Email", href: "mailto:mrrizwanaali@gmail.com", icon: "mail" },
  { label: "WhatsApp", href: "https://wa.me/923362814460", icon: "whatsapp" },
];

export const rotatingWords = [
  "production-ready",
  "AI-powered",
  "pixel-perfect",
  "well-tested",
  "scalable",
];

export const marqueeItems = [
  "REACT",
  "NODE.JS",
  "EXPRESS",
  "MONGODB",
  "JAVASCRIPT",
  "LANGCHAIN",
  "TAILWIND",
  "POSTGRESQL",
  "GIT",
  "POSTMAN",
];

export const featuredProject = {
  num: "01",
  name: "EduQuest",
  tagline: "AI-Powered Gamified Learning Platform",
  type: "Full-Stack · Final Year Project (Solo) · 2025–26",
  desc: "EduQuest turns passive course material into active, social learning. Students upload PDFs and a RAG pipeline (LangChain + Gemini + MongoDB Vector Search) answers questions grounded in their own documents and auto-generates quizzes. A full gamification engine plus real-time multiplayer coding competitions keep learners engaged — with an in-browser playground that runs 14+ languages safely in a Docker sandbox.",
  stats: [
    { value: "14+", label: "Languages" },
    { value: "49", label: "Badges" },
    { value: "7", label: "Leagues" },
    { value: "Live", label: "Multiplayer" },
  ],
  features: [
    "RAG AI tutor that answers from your own uploaded PDFs",
    "Gamification: XP, 49 badges, 7 leagues, streaks & daily quests",
    "Real-time multiplayer coding battles over Socket.io",
    "In-browser playground running 14+ languages in a Docker sandbox",
  ],
  stack: ["React", "Redux", "Node", "Express", "MongoDB", "Socket.IO", "LangChain", "RAG", "Docker", "AWS"],
  live: "https://edu-questd.vercel.app",
  code: "https://github.com/Rizwaan11/eduQuestd",
  thumbnail: "/eduquest.png",
  thumbnailUrl: "edu-questd.vercel.app",
};

export const skillGroups = [
  {
    title: "Languages",
    icon: "code",
    items: [
      { name: "HTML", color: "#E34F26" },
      { name: "CSS", color: "#1572B6" },
      { name: "JavaScript", color: "#F7DF1E" },
    ],
  },
  {
    title: "Frameworks",
    icon: "layers",
    items: [
      { name: "React", color: "#61DAFB" },
      { name: "Node.js", color: "#5FA04E" },
      { name: "Express", color: "#cfcfcf" },
      { name: "Tailwind", color: "#38BDF8" },
      { name: "LangChain", color: "#1FA37C" },
    ],
  },
  {
    title: "Databases",
    icon: "database",
    items: [
      { name: "MongoDB", color: "#47A248" },
      { name: "PostgreSQL", color: "#4169E1" },
    ],
  },
  {
    title: "Tools",
    icon: "wrench",
    items: [
      { name: "Git", color: "#F05032" },
      { name: "Postman", color: "#FF6C37" },
    ],
  },
];

export const education = {
  period: "2022 — 2026",
  degree: "BS — Software Engineering",
  school: "University of Sargodha",
  desc: "Focused on full-stack web development, DSA, databases, and applied AI. Final-year project: an AI-powered learning platform with retrieval-augmented generation.",
  tags: ["Web Engineering", "DSA", "Databases", "Applied AI"],
};

export const resumeCta = {
  heading: "Want the full picture",
  subtitle: "Grab my résumé for a detailed look at everything.",
  href: "/Muhammad-Rizwan-Ali-Resume.pdf",
};

export const contact = {
  heading: "Let's build something",
  subtitle: "Have a role, a project, or just want to say hi?",
  email: "mrrizwanaali@gmail.com",
};

// Web3Forms access key — get a FREE one in 30 seconds at https://web3forms.com
// (enter your email mrrizwanaali@gmail.com; they instantly email you the key).
// Paste it below and the contact form will deliver messages straight to your inbox.
export const web3formsAccessKey = "2d2e8fbc-7872-46e6-bf0b-c8b579bb8949";

export const aboutTerminal = {
  title: "whoami.sh",
  lines: [
    { role: "MERN Dev" },
    { degree: "BS SE" },
    { focus: "AI + Web" },
    { status: "open" },
  ],
};

export const heroTerminal = {
  variable: "currently_building",
  value: "EduQuest",
};
