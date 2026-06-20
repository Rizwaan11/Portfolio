import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-[1100px] px-6 py-20 pb-[120px]">
      <SectionHeading label="education" title="Where I studied" />
      <Reveal>
        <SpotlightCard className="relative flex items-stretch gap-6 rounded-[18px] border border-line bg-card p-[30px]">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(70% 90% at 0% 0%, var(--color-accent-soft), transparent 45%)" }}
          />
          <div className="relative flex w-[3px] shrink-0 justify-center">
            <div
              className="absolute inset-0 rounded-[3px]"
              style={{ background: "linear-gradient(180deg, var(--color-accent), var(--color-accent-bright), transparent)" }}
            />
            <span className="absolute -top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent-bright bg-bg shadow-[0_0_14px_var(--color-accent-glow)] animate-[trace-glow_2.4s_ease-in-out_infinite]" />
          </div>
          <div className="relative flex-1">
            <div className="mb-2 flex items-center gap-2.5">
              <GraduationCap size={20} className="text-accent-bright" strokeWidth={1.8} />
              <span className="font-mono text-xs font-semibold text-accent-bright">{education.period}</span>
            </div>
            <h3 className="mb-1 text-[1.35rem] font-extrabold tracking-[-0.02em]">{education.degree}</h3>
            <p className="mb-3 font-mono text-[0.92rem] text-t3">{education.school}</p>
            {education.cgpa && (
              <div className="mb-3.5 inline-flex items-center gap-2 rounded-[7px] border border-accent/30 bg-accent-soft px-2.5 py-1 font-mono text-[12px] font-semibold text-accent-bright">
                CGPA {education.cgpa}
              </div>
            )}
            <p className="mb-[18px] text-[0.93rem] leading-[1.6] text-t2">{education.desc}</p>
            <div className="flex flex-wrap gap-[7px]">
              {education.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[7px] border border-line-visible bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-t2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </Reveal>
    </section>
  );
}
