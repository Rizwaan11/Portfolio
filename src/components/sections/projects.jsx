import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { TiltCard } from "@/components/ui/tilt-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import {
  ReactIcon,
  NodeIcon,
  ExpressIcon,
  MongoDBIcon,
  LangChainIcon,
  TailwindIcon,
  PostgreSQLIcon,
} from "@/components/icons/tech-icons";
import { featuredProject } from "@/lib/data";

// Brand icon + color for stack labels used in project cards (names that have no
// brand mark — RAG, Socket.IO, Stripe — fall back to text only).
const STACK_META = {
  React: { Icon: ReactIcon, color: "#61DAFB" },
  Node: { Icon: NodeIcon, color: "#5FA04E" },
  "Node.js": { Icon: NodeIcon, color: "#5FA04E" },
  Express: { Icon: ExpressIcon, color: "#cfcfcf" },
  MongoDB: { Icon: MongoDBIcon, color: "#47A248" },
  LangChain: { Icon: LangChainIcon, color: "#ef4444" },
  Tailwind: { Icon: TailwindIcon, color: "#38BDF8" },
  PostgreSQL: { Icon: PostgreSQLIcon, color: "#4169E1" },
};

function LiveDemoIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  );
}

function TechTag({ children }) {
  const meta = STACK_META[children];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-[7px] border border-line-visible bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-t2">
      {meta ? <meta.Icon size={12} color={meta.color} /> : null}
      {children}
    </span>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1100px] px-6 py-20 pb-[120px]">
      <SectionHeading label="projects" title="Featured work" />

      <Reveal>
        <TiltCard className="mb-[22px]" max={4}>
        <SpotlightCard className="relative rounded-[20px] border border-line-visible bg-card p-9 transition-colors duration-300 hover:border-accent/30">
          <BorderBeam radius={21} />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(80% 60% at 100% 0%, var(--color-accent-soft), transparent 50%)" }}
          />
          <div className="relative grid grid-cols-1 items-start gap-9 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2.5">
                <span className="rounded-lg border border-line bg-white/[0.02] px-2.5 py-[5px] font-mono text-[11px] font-bold tracking-[0.1em] text-t3">
                  {featuredProject.num}
                </span>
                <span className="rounded-full border border-accent bg-accent-soft px-[11px] py-[5px] text-[10px] font-bold tracking-[0.12em] text-accent uppercase">
                  Featured
                </span>
                <span className="font-mono text-[10.5px] text-t3">{featuredProject.type}</span>
              </div>
              <h3 className="text-[1.7rem] font-extrabold tracking-[-0.03em]">{featuredProject.name}</h3>
              <p className="mt-1 mb-4 text-[0.92rem] font-semibold text-accent-bright">{featuredProject.tagline}</p>
              <p className="mb-5 text-[0.96rem] leading-[1.6] text-t2">{featuredProject.desc}</p>

              <div className="mb-5 grid grid-cols-4 gap-2 rounded-xl border border-line bg-white/[0.015] p-3">
                {featuredProject.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-[clamp(1rem,2.2vw,1.2rem)] font-extrabold text-accent-bright">{s.value}</div>
                    <div className="mt-0.5 font-mono text-[9px] tracking-[0.04em] text-t3 uppercase">{s.label}</div>
                  </div>
                ))}
              </div>

              <ul className="mb-5 flex flex-col gap-2">
                {featuredProject.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.9rem] leading-[1.5] text-t2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent-glow)]" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mb-[26px] flex flex-wrap gap-1.5">
                {featuredProject.stack.map((t) => (
                  <TechTag key={t}>{t}</TechTag>
                ))}
              </div>
              <div className="flex gap-3">
                <ShimmerButton
                  href={featuredProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-[10px] bg-accent px-[22px] py-3 text-[13px] font-bold text-white shadow-[0_8px_28px_-8px_rgba(220,38,38,0.45)]"
                >
                  <span className="relative flex items-center gap-2">
                    <LiveDemoIcon /> Live demo
                  </span>
                </ShimmerButton>
                <MagneticButton
                  as="a"
                  href={featuredProject.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-[10px] border border-line-visible px-[22px] py-3 text-[13px] font-semibold text-t1 transition-colors hover:border-accent hover:bg-accent-soft"
                >
                  <CodeIcon /> View code
                </MagneticButton>
              </div>
            </div>

            <div className="overflow-hidden rounded-[14px] border border-line-visible bg-bg">
              <div className="flex items-center gap-1.5 border-b border-line bg-white/[0.015] px-3.5 py-[9px]">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="h-2 w-2 rounded-full bg-yellow-500" />
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="mr-[30px] flex-1 text-center font-mono text-[10px] text-t3">
                  {featuredProject.thumbnailUrl}
                </span>
              </div>
              <a
                href={featuredProject.live}
                target="_blank"
                rel="noreferrer"
                className="group/shot relative block aspect-video overflow-hidden bg-bg-elevated"
                aria-label="Open EduQuest live demo"
              >
                <Image
                  src={featuredProject.thumbnail}
                  alt="EduQuest — live screenshot"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover/shot:scale-[1.04]"
                  sizes="(max-width: 900px) 100vw, 45vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent opacity-0 transition-opacity duration-300 group-hover/shot:opacity-100" />
                <span className="pointer-events-none absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full border border-line-visible bg-bg/70 px-3 py-1.5 text-[11px] font-semibold text-t1 opacity-0 backdrop-blur-[6px] transition-opacity duration-300 group-hover/shot:opacity-100">
                  <LiveDemoIcon /> Open live
                </span>
              </a>
            </div>
          </div>
        </SpotlightCard>
        </TiltCard>
      </Reveal>

      <Reveal>
        <div className="mt-9 flex justify-center">
          <MagneticButton
            as="a"
            href="https://github.com/Rizwaan11"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] border border-line-visible px-[22px] py-3 text-[13px] font-semibold text-t1 transition-colors hover:border-accent hover:bg-accent-soft"
          >
            <CodeIcon /> See more on GitHub
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
}
