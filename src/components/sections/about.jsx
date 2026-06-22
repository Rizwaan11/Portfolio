"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView, useReducedMotion } from "framer-motion";
import { MapPin, GraduationCap, Sparkles, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { featuredProject } from "@/lib/data";

const FACTS = [
  { Icon: MapPin, label: "Pakistan" },
  { Icon: GraduationCap, label: "BS SE @ UoS" },
  { Icon: Sparkles, label: "MERN + AI" },
];

const KW = "text-accent";
const VAR = "text-t1 font-semibold";
const PN = "text-t3";
const KEY = "text-accent-light";
const STR = "text-emerald-400";

const tk = (t, c) => ({ t, c });

// key: "value",
const strLine = (key, value) => [tk(`  ${key}`, KEY), tk(": ", PN), tk(`"${value}"`, STR), tk(",", PN)];

// key: ["a", "b", "c"],
const arrLine = (key, items) => {
  const toks = [tk(`  ${key}`, KEY), tk(": ", PN), tk("[", PN)];
  items.forEach((item, i) => {
    toks.push(tk(`"${item}"`, STR));
    if (i < items.length - 1) toks.push(tk(", ", PN));
  });
  toks.push(tk("]", PN), tk(",", PN));
  return toks;
};

const LINES = [
  [tk("const ", KW), tk("rizwan ", VAR), tk("= ", PN), tk("{", PN)],
  strLine("role", "MERN + AI developer"),
  strLine("based", "Pakistan"),
  strLine("education", "BS Software Engineering"),
  arrLine("stack", ["React", "Node.js", "TypeScript", "MongoDB"]),
  arrLine("ai", ["RAG", "LangChain", "Vector Search", "Gemini"]),
  arrLine("focusing", ["Next.js"]),
  strLine("motto", "Build → Break → Learn → Repeat"),
  strLine("funFact", "Can spend hours debugging one missing semicolon 😄"),
  [tk("}", PN)],
];

const TABS = ["about.js"];

const TIMELINE = [
  { year: "2022", title: "Started the Journey", desc: "Began my Software Engineering degree and built a foundation in programming, OOP, and data structures." },
  { year: "2023", title: "Found the Web", desc: "Started learning web development on my own — and found the thing I actually loved building." },
  { year: "2024", title: "Became a MERN Developer", desc: "Went deep on React, Node, Express & MongoDB, shipping full-stack apps end to end." },
  { year: "2025", title: "Explored Applied AI", desc: "Built EduQuest — combining RAG pipelines and real-time systems with a modern web stack.", link: featuredProject.live },
  { year: "2026", title: "Learned to Ship", desc: "Picked up Docker, cloud, and deployment — taking projects from idea to production." },
  { year: "Next", title: "Keep Building", desc: "Ready to bring real value to an ambitious team — shipping production software, learning fast alongside senior engineers, and turning hard problems into reliable products.", highlight: true },
];

function CornerBrackets() {
  const base = "pointer-events-none absolute h-5 w-5 border-accent/60";
  return (
    <>
      <span className={`${base} left-2.5 top-2.5 border-l-2 border-t-2 rounded-tl-[6px]`} />
      <span className={`${base} right-2.5 top-2.5 border-r-2 border-t-2 rounded-tr-[6px]`} />
      <span className={`${base} left-2.5 bottom-2.5 border-l-2 border-b-2 rounded-bl-[6px]`} />
      <span className={`${base} right-2.5 bottom-2.5 border-r-2 border-b-2 rounded-br-[6px]`} />
    </>
  );
}

function Caption({ children }) {
  return <p className="mb-4 font-mono text-[11px] tracking-[0.12em] text-accent">{children}</p>;
}

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(0);

  const total = LINES.reduce((sum, line) => sum + line.reduce((s, tok) => s + tok.t.length, 0), 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVisible(total);
      return;
    }
    let v = 0;
    const id = setInterval(() => {
      v += 3;
      setVisible(v);
      if (v >= total) clearInterval(id);
    }, 20);
    return () => clearInterval(id);
  }, [inView, reduce, total]);

  let acc = 0;
  const meta = LINES.map((tokens) => {
    const start = acc;
    const toks = tokens.map((tok) => {
      const s = acc;
      acc += tok.t.length;
      return { ...tok, s };
    });
    return { start, end: acc, toks };
  });
  const activeLine = meta.findIndex((l) => visible < l.end);

  return (
    <section id="about" className="mx-auto max-w-[1100px] px-6 py-[90px]">
      <SectionHeading label="about" title="A bit about me" />

      {/* 1 · Editorial intro — image + brief text */}
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="group relative mx-auto aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-[18px] border border-line-visible bg-card">
            <BorderBeam radius={20} />
            <Image
              src="/portrait.png"
              alt="M Rizwan Ali"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 900px) 100vw, 320px"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-[45%] to-bg/90" />
            <CornerBrackets />
            <div className="absolute left-5 bottom-5 z-[3] flex flex-col gap-1">
              <span className="text-[1.05rem] font-bold tracking-tight text-t1">M Rizwan Ali</span>
              <span className="font-mono text-[11px] text-accent-light">{"<MERN Stack Developer />"}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            <h3 className="text-[clamp(1.6rem,3.4vw,2.3rem)] font-extrabold leading-[1.12] tracking-[-0.03em]">
              I build full-stack web apps with an <span className="text-accent-bright">AI edge</span>.
            </h3>
            <p className="mt-5 max-w-[540px] text-[1.02rem] leading-[1.7] text-t2">
              Software engineering graduate &amp; self-driven MERN developer — recently going deep on{" "}
              <span className="font-semibold text-accent-bright">AI apps with LangChain &amp; RAG</span>. I care about
              clean code, thoughtful UI, and shipping things people actually use.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {FACTS.map(({ Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-line-visible bg-white/[0.02] px-4 py-2 text-[13px] font-medium text-t2"
                >
                  <Icon size={15} className="text-accent-bright" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* 2 · Nested grid — code card + journey side by side */}
      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        {/* The stack, in code */}
        <div ref={ref}>
          <Caption>{"// me, as code"}</Caption>
          <SpotlightCard className="overflow-hidden rounded-[14px] border border-line-visible bg-[#0c0c0f] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.7)]">
            <div className="flex items-center gap-3 border-b border-line bg-white/[0.02] px-3.5 py-2.5">
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span className="mx-auto flex items-center gap-2 font-mono text-[10.5px] text-t3">
                <span className="relative h-4 w-4 overflow-hidden rounded-full border border-line-visible">
                  <Image src="/portrait.png" alt="" fill className="object-cover object-top" sizes="16px" />
                </span>
                rizwan — about.js
              </span>
            </div>
            <div className="flex items-center gap-1 border-b border-line bg-white/[0.01] px-2">
              {TABS.map((tab, i) => (
                <span
                  key={tab}
                  className={`border-b-2 px-3 py-2 font-mono text-[10.5px] ${
                    i === 0 ? "border-accent bg-white/[0.02] text-t1" : "border-transparent text-t3"
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>
            <div className="overflow-x-auto px-3.5 py-4 font-mono text-[11px] leading-[1.85] md:text-[12px]">
              {meta.map((line, i) => (
                <div key={i} className="flex">
                  <span className="mr-4 w-4 shrink-0 select-none text-right text-t3/40">{i + 1}</span>
                  <span className="whitespace-pre">
                    {line.toks.map((tok, j) => {
                      const shown = Math.max(0, Math.min(visible - tok.s, tok.t.length));
                      return (
                        <span key={j} className={tok.c}>
                          {tok.t.slice(0, shown)}
                        </span>
                      );
                    })}
                    {(activeLine === i || (activeLine === -1 && i === meta.length - 1)) && (
                      <span className="ml-px inline-block h-[13px] w-[6px] translate-y-[2px] animate-[cursor-blink_1s_step-end_infinite] bg-accent" />
                    )}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 border-t border-line bg-accent/[0.06] px-3.5 py-2 font-mono text-[10px] text-t3">
              <span>📍 Pakistan</span>
              <span className="ml-auto">{`Ln ${LINES.length}, Col 1`}</span>
              <span>UTF-8 · JS</span>
            </div>
          </SpotlightCard>
        </div>

        {/* The journey */}
        <div>
          <Caption>{"// the journey"}</Caption>
          <div className="relative ml-1.5">
            <div
              className="pointer-events-none absolute left-[6px] top-2 bottom-2 w-[2px] rounded-full"
              style={{ background: "linear-gradient(180deg, var(--color-accent), var(--color-accent-bright) 60%, transparent)" }}
            />
            <ul className="flex flex-col">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.07}>
                  <li className="relative pb-6 pl-8 last:pb-0">
                    <span
                      className={`absolute left-0 top-[3px] h-3 w-3 rounded-full border-2 bg-bg ${
                        item.highlight ? "border-accent-bright animate-[trace-glow_2.4s_ease-in-out_infinite]" : "border-accent/70"
                      }`}
                      style={{ boxShadow: "0 0 12px var(--color-accent-glow)" }}
                    />
                    <div className="mb-0.5 font-mono text-[11px] font-semibold tracking-[0.04em] text-accent-bright">{item.year}</div>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5">
                        <h4 className="text-[1rem] font-bold tracking-tight transition-colors group-hover:text-accent-bright">{item.title}</h4>
                        <ArrowUpRight size={14} className="text-accent-bright transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ) : (
                      <h4 className="text-[1rem] font-bold tracking-tight">{item.title}</h4>
                    )}
                    <p className="mt-0.5 max-w-[440px] text-[0.875rem] leading-[1.55] text-t2">{item.desc}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
