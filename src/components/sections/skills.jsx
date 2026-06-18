"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TECH_ICONS } from "@/components/icons/tech-icons";
import { skillGroups } from "@/lib/data";

function SkillPill({ name, color }) {
  const [hover, setHover] = useState(false);
  const Icon = TECH_ICONS[name];

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex items-center gap-2 rounded-lg border px-3 py-2 transition-all duration-300 will-change-transform"
      style={{
        borderColor: hover ? `${color}66` : "rgba(255,255,255,0.08)",
        background: hover ? `${color}12` : "rgba(255,255,255,0.02)",
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hover ? `0 10px 24px -14px ${color}` : "none",
      }}
    >
      <span
        className="grid h-5 w-5 place-items-center transition-transform duration-300"
        style={{ transform: hover ? "scale(1.12)" : "scale(1)" }}
      >
        {Icon ? <Icon size={17} color={color} /> : null}
      </span>
      <span
        className="text-[13.5px] font-medium transition-colors duration-300"
        style={{ color: hover ? "#fafafa" : "#c4c4cc" }}
      >
        {name}
      </span>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1100px] px-6 py-20 pb-[120px]">
      <SectionHeading
        label="skills"
        title="Tech stack"
        subtitle="A collection of technologies I work with — from languages to frameworks, databases and tools."
      />
      <div className="flex flex-col gap-10">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05}>
            <div>
              <h3 className="mb-4 text-[1.05rem] font-bold tracking-[-0.01em] text-t1">{group.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <SkillPill key={item.name} name={item.name} color={item.color} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
