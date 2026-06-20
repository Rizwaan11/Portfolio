import { Award, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-[1100px] px-6 py-20 pb-[120px]">
      <SectionHeading label="certifications" title="Courses & credentials" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 0.06}>
            <SpotlightCard className="relative h-full overflow-hidden rounded-[18px] border border-line bg-card p-[26px]">
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "radial-gradient(70% 90% at 100% 0%, var(--color-accent-soft), transparent 45%)" }}
              />
              <div className="relative flex h-full flex-col">
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-line-visible bg-white/[0.02]">
                    <Award size={18} className="text-accent-bright" strokeWidth={1.8} />
                  </span>
                  <span className="rounded-full border border-line-visible bg-white/[0.02] px-3 py-1 font-mono text-[11px] text-accent-bright">
                    {cert.issuer}
                  </span>
                </div>
                <h3 className="text-[1.15rem] font-bold leading-snug tracking-[-0.01em]">{cert.title}</h3>
                <p className="mt-1 font-mono text-[0.85rem] text-t3">{cert.instructor}</p>
                <p className="mt-3 text-[0.9rem] leading-[1.6] text-t2">{cert.desc}</p>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-4 inline-flex items-center gap-1.5 font-mono text-[12px] text-accent-bright"
                  >
                    View certificate
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
