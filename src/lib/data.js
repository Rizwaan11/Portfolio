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
  desc: "EduQuest turns passive course material into active, social learning. Students upload PDFs and a RAG pipeline (LangChain + Gemini embeddings + MongoDB Vector Search) answers questions grounded in their own documents and auto-generates quizzes. A full gamification engine plus real-time multiplayer coding competitions keep learners engaged — backed by a self-hosted Piston service that safely runs 15+ languages in a Docker sandbox, secured with Google OAuth 2.0 + JWT across a 16-route REST API.",
  stats: [
    { value: "15+", label: "Languages" },
    { value: "49", label: "Badges" },
    { value: "7", label: "Leagues" },
    { value: "Live", label: "Multiplayer" },
  ],
  features: [
    "RAG AI tutor grounded in your own PDFs (LangChain + Gemini + Vector Search)",
    "Gamification: XP, 49 badges, 7 leagues, streaks & daily quests",
    "Real-time multiplayer coding battles over Socket.io with live leaderboards",
    "Self-hosted Piston sandbox running 15+ languages on Docker / AWS",
    "Google OAuth 2.0 + JWT auth across a 16-route REST API",
  ],
  stack: ["React", "Redux", "Node", "Express", "MongoDB", "Socket.IO", "LangChain", "Gemini", "RAG", "JWT", "Docker", "AWS"],
  live: "https://edu-questd.vercel.app",
  code: "https://github.com/Rizwaan11/eduQuestd",
  thumbnail: "/eduquest.png",
  thumbnailUrl: "edu-questd.vercel.app",
};

export const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "C++", color: "#00599C" },
      { name: "HTML", color: "#E34F26" },
      { name: "CSS", color: "#1572B6" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "TypeScript", color: "#3178C6" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#e6e6e6" },
      { name: "Redux", color: "#764ABC" },
      { name: "Tailwind", color: "#38BDF8" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", color: "#5FA04E" },
      { name: "Express", color: "#cfcfcf" },
      { name: "REST APIs", color: "#06B6D4" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", color: "#47A248" },
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "Vector Search", color: "#10B981" },
    ],
  },
  {
    title: "AI / LLM",
    items: [
      { name: "LangChain", color: "#1FA37C" },
      { name: "RAG", color: "#A855F7" },
      { name: "LLM Integration", color: "#8B5CF6" },
    ],
  },
  {
    title: "Auth & Cloud",
    items: [
      { name: "JWT", color: "#EC4899" },
      { name: "OAuth 2.0", color: "#4285F4" },
      { name: "bcrypt", color: "#F59E0B" },
      { name: "Cloudinary", color: "#3448C5" },
      { name: "Multer", color: "#F97316" },
    ],
  },
  {
    title: "Developer Tools",
    items: [
      { name: "Git", color: "#F05032" },
      { name: "GitHub", color: "#e6e6e6" },
      { name: "Docker", color: "#2496ED" },
      { name: "Postman", color: "#FF6C37" },
    ],
  },
];

export const certifications = [
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    instructor: "Dr. Angela Yu",
    desc: "React, Node.js, PostgreSQL, responsive design, version control, and full-stack projects.",
    url: "https://www.udemy.com/certificate/UC-3a111238-a4c2-40c2-b0bd-c70032469bef/",
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
