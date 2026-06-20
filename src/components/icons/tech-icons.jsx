// Brand icon SVGs hand-ported verbatim from Portfolio.dc.html so the marks
// match the approved design pixel-for-pixel (skips the simple-icons package).

import {
  Atom,
  Webhook,
  ScanSearch,
  Sparkles,
  FileSearch,
  BrainCircuit,
  KeyRound,
  ShieldCheck,
  Lock,
  CloudUpload,
  Upload,
  Container,
} from "lucide-react";

export function ReactIcon({ size = 24, color = "#61DAFB", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.2" {...props}>
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill={color} stroke="none" />
    </svg>
  );
}

export function JavaScriptIcon({ size = 24, color = "#F7DF1E", ...props }) {
  return (
    <span style={{ fontFamily: "var(--font-mono)", fontSize: size, fontWeight: 800, color, lineHeight: 1 }} {...props}>
      JS
    </span>
  );
}

export function NodeIcon({ size = 24, color = "#5FA04E", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
      <path d="M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383.655-.228.787-.28 1.486-.677.073-.04.17-.025.245.015l2.255 1.339a.307.307 0 0 0 .284 0l8.795-5.076a.282.282 0 0 0 .141-.244V6.839a.29.29 0 0 0-.143-.249L12.14 1.516a.28.28 0 0 0-.282 0L3.065 6.591a.287.287 0 0 0-.144.247v10.15c0 .1.054.194.142.243l2.41 1.392c1.307.654 2.108-.116 2.108-.89V7.754c0-.145.115-.257.256-.257h1.115c.14 0 .255.112.255.257v9.978c0 1.742-.949 2.743-2.6 2.743-.508 0-.909 0-2.026-.55l-2.307-1.33A1.85 1.85 0 0 1 1.35 17.04V6.89c0-.68.363-1.314.958-1.654L11.1.16a1.928 1.928 0 0 1 1.797 0l8.794 5.076a1.853 1.853 0 0 1 .955 1.654v10.15c0 .68-.363 1.314-.955 1.654l-8.794 5.076c-.28.163-.6.247-.922.247z" />
    </svg>
  );
}

export function MongoDBIcon({ size = 24, color = "#47A248", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
      <path d="M13.74 4.23c-.84-1.57-1.48-2.3-1.62-2.49-.14.19-.78.92-1.62 2.49C8.88 7.17 5.1 11.55 5.1 15.24c0 3.55 2.78 6.76 6.37 6.76h1.06c3.59 0 6.37-3.21 6.37-6.76 0-3.69-3.78-8.07-5.16-11.01zM12.5 20.05v-7.93c0-.15.15-.28.3-.22.55.23 2.63 2.07 2.63 4.2 0 2.05-1.56 3.71-2.93 3.95z" />
    </svg>
  );
}

export function TypeScriptIcon({ size = 24, color = "#3178C6", ...props }) {
  return (
    <span style={{ fontFamily: "var(--font-mono)", fontSize: size, fontWeight: 800, color, lineHeight: 1 }} {...props}>
      TS
    </span>
  );
}

export function CppIcon({ size = 24, color = "#00599C", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
      <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 0 1 6.156 3.553l-3.076 1.78a3.567 3.567 0 0 0-3.08-1.78A3.56 3.56 0 0 0 8.444 12 3.56 3.56 0 0 0 12 15.555a3.57 3.57 0 0 0 3.08-1.78l3.078 1.78A7.135 7.135 0 0 1 12 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" />
    </svg>
  );
}

export function CSSIcon({ size = 24, color = "#1572B6", ...props }) {
  return (
    <span style={{ fontFamily: "var(--font-mono)", fontSize: size, fontWeight: 800, color, lineHeight: 1 }} {...props}>
      CSS
    </span>
  );
}

// Small color swatch used where the "CSS" text glyph would duplicate an adjacent "CSS" label (e.g. skill chips).
export function CSSSwatchIcon({ size = 24, color = "#1572B6", ...props }) {
  return (
    <span
      className="inline-block rounded-[3px]"
      style={{ width: size * 0.7, height: size * 0.7, background: color }}
      {...props}
    />
  );
}

export function HTML5Icon({ size = 24, color = "#E34F26", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.071-.999.132-1.47.07-.999H6.742l.667 7.47h7.894l-.335 3.64-3.007.84-2.984-.84-.188-2.207H6.257l.368 4.095 5.339 1.485.028-.007 5.313-1.486.721-8.044H8.531z" />
    </svg>
  );
}

export function TailwindIcon({ size = 24, color = "#38BDF8", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
      <path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C13.45 10.92 14.73 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.55 7.08 14.27 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.45 16.92 9.73 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.55 13.08 9.27 12 7 12z" />
    </svg>
  );
}

export function GitIcon({ size = 24, color = "#F05032", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
      <path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.66 2.66a1.838 1.838 0 1 1-1.103 1.06l-2.48-2.48v6.53a1.838 1.838 0 1 1-1.512-.06V8.792a1.838 1.838 0 0 1-.998-2.41L7.63 3.648.452 10.827a1.55 1.55 0 0 0 0 2.188l10.48 10.48a1.55 1.55 0 0 0 2.186 0l10.43-10.43a1.55 1.55 0 0 0 0-2.135z" />
    </svg>
  );
}

export function LangChainIcon({ size = 24, color = "var(--color-accent-bright)", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8" />
    </svg>
  );
}

export function NextJSIcon({ size = 24, color = "#ffffff", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
    </svg>
  );
}

export function PostgreSQLIcon({ size = 24, color = "#4169E1", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 8c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3Z" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  );
}

export function MySQLIcon({ size = 24, color = "#00758F", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </svg>
  );
}

export function ExpressIcon({ size = 24, color = "#cfcfcf", ...props }) {
  return (
    <span style={{ fontFamily: "var(--font-mono)", fontSize: size * 0.8, fontWeight: 800, color, lineHeight: 1 }} {...props}>
      EX
    </span>
  );
}

export function PostmanIcon({ size = 24, color = "#FF6C37", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function GitHubIcon({ size = 15, color = "currentColor", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function LinkedInIcon({ size = 15, color = "currentColor", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 15, color = "currentColor", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}

export function MailIcon({ size = 15, color = "currentColor", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
      <path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-10 6L2 8V6l10 6 10-6v2z" />
    </svg>
  );
}

export const TECH_ICONS = {
  // Languages
  "C++": CppIcon,
  HTML: HTML5Icon,
  CSS: CSSSwatchIcon,
  JavaScript: JavaScriptIcon,
  TypeScript: TypeScriptIcon,
  // Frontend
  React: ReactIcon,
  "Next.js": NextJSIcon,
  Redux: Atom,
  Tailwind: TailwindIcon,
  // Backend
  "Node.js": NodeIcon,
  Express: ExpressIcon,
  "REST APIs": Webhook,
  // Databases
  MongoDB: MongoDBIcon,
  PostgreSQL: PostgreSQLIcon,
  MySQL: MySQLIcon,
  "Vector Search": ScanSearch,
  // AI / LLM
  LangChain: LangChainIcon,
  Gemini: Sparkles,
  RAG: FileSearch,
  "LLM Integration": BrainCircuit,
  // Auth & Cloud
  JWT: KeyRound,
  "OAuth 2.0": ShieldCheck,
  bcrypt: Lock,
  Cloudinary: CloudUpload,
  Multer: Upload,
  // Dev tools
  Git: GitIcon,
  GitHub: GitHubIcon,
  Docker: Container,
  Postman: PostmanIcon,
};

export const SOCIAL_ICONS = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  whatsapp: WhatsAppIcon,
  mail: MailIcon,
};
