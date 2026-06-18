import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

// Unified section heading: a mono "// label" eyebrow, a large title, and an
// animated glowing accent rule. Replaces the duplicated heading block across
// about / projects / skills / education / contact.
export function SectionHeading({ label, title, subtitle, align = "left", className }) {
  const centered = align === "center";
  return (
    <Reveal className={className}>
      <div className={cn("mb-12", centered && "text-center")}>
        <p className="mb-2 font-mono text-[13px] tracking-[0.1em] text-accent">{`// ${label}`}</p>
        <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-extrabold tracking-[-0.04em]">{title}</h2>
        {subtitle && (
          <p className={cn("mt-3 max-w-[560px] text-[0.98rem] leading-[1.6] text-t2", centered && "mx-auto")}>
            {subtitle}
          </p>
        )}
        <div
          className={cn(
            "mt-5 h-px w-[120px] animate-[accent-rule_3.5s_ease-in-out_infinite]",
            centered && "mx-auto"
          )}
          style={{
            background:
              "linear-gradient(90deg, var(--color-accent), var(--color-accent-bright), transparent)",
          }}
        />
      </div>
    </Reveal>
  );
}
