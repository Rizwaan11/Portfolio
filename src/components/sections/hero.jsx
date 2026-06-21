"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { HeroBackground } from "@/components/ui/hero-background";
import { FloatingIcons } from "@/components/ui/floating-icons";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SOCIAL_ICONS } from "@/components/icons/tech-icons";
import { socials, rotatingWords } from "@/lib/data";

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setWordIndex((i) => (i + 1) % rotatingWords.length), 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden px-6 pt-[130px] pb-[90px] text-center"
    >
      <HeroBackground />
      <FloatingIcons />

      <div className="relative z-20 flex flex-col items-center">
        <Reveal delay={0.05}>
          <p className="mb-2 font-mono text-sm tracking-[0.08em] text-accent">{"// Hey, I'm"}</p>
        </Reveal>

        <h1 className="name-sheen text-[clamp(2rem,8vw,3.2rem)] leading-[0.88] font-black tracking-[-0.05em] text-transparent md:text-[clamp(2.6rem,5vw,5.5rem)]">
          M Rizwan Ali
        </h1>

        <Reveal delay={0.1}>
          <div className="mt-[26px] inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent-soft px-[22px] py-2.5 text-sm font-semibold text-accent-bright">
            <span className="font-mono text-[13px]">{"</>"}</span> MERN Stack Developer
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-[26px] max-w-[560px] text-[clamp(1.02rem,2vw,1.22rem)] leading-[1.65] text-t2">
            I build full-stack web apps — from <span className="font-semibold text-t1">AI-powered platforms</span> to
            clean, fast,{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[wordIndex]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.38 }}
                className="inline-block font-semibold text-accent-bright"
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>{" "}
            products.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-[38px] flex flex-wrap justify-center gap-3.5">
            <ShimmerButton
              href="#contact"
              shimmerOpacity={0.2}
              className="inline-flex items-center gap-2.5 rounded-xl bg-accent px-7 py-3.5 text-base font-bold text-white shadow-[0_14px_40px_-10px_rgba(220,38,38,0.45)]"
            >
              <span className="relative flex items-center gap-2.5">
                Let&apos;s connect
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </ShimmerButton>
            <MagneticButton
              as="a"
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-line-visible px-7 py-3.5 text-base font-semibold text-t1 transition-colors hover:border-accent hover:bg-accent-soft"
            >
              View projects
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.31}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-t3">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              PK
            </span>
            <span className="h-3 w-px bg-line-visible" />
            <div className="flex items-center gap-1.5">
              {socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon];
                return (
                  <MagneticButton
                    key={s.label}
                    as="a"
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="grid h-[38px] w-[38px] place-items-center rounded-[10px] border border-line-visible bg-white/[0.05] text-t2 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent-soft hover:text-accent-bright hover:shadow-[0_8px_22px_-8px_var(--color-accent-glow)]"
                  >
                    <Icon />
                  </MagneticButton>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-[22px] left-1/2 z-20 flex -translate-x-1/2 animate-[bob_2.4s_ease-in-out_infinite] flex-col items-center gap-[5px] font-mono text-[10px] tracking-[0.2em] text-t3 uppercase">
        scroll
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
