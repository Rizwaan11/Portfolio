"use client";

import { useState } from "react";
import { Check, Download, Loader2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { resumeCta } from "@/lib/data";

const FILE_NAME = resumeCta.href.split("/").pop();

export function ResumeCta() {
  // idle → loading (fetching the PDF) → done (saved) → idle
  const [status, setStatus] = useState("idle");

  const handleDownload = async (e) => {
    if (status === "loading") {
      e.preventDefault();
      return;
    }
    // Fetch the file ourselves so the button can reflect real progress —
    // a plain download link gives no feedback while the browser fetches.
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(resumeCta.href);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = FILE_NAME;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setStatus("done");
      setTimeout(() => setStatus("idle"), 2200);
    } catch {
      // Fall back to a normal navigation so the résumé still downloads.
      setStatus("idle");
      window.location.href = resumeCta.href;
    }
  };

  return (
    <section id="resume" className="mx-auto max-w-[1100px] px-6 pb-20">
      <Reveal>
        <SpotlightCard className="relative overflow-hidden rounded-[22px] border border-line-visible bg-card px-6 py-[clamp(48px,8vw,80px)] text-center">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(55% 100% at 50% 0%, var(--color-accent-soft), transparent 50%)" }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              WebkitMaskImage: "radial-gradient(50% 60% at 50% 30%, #000, transparent)",
              maskImage: "radial-gradient(50% 60% at 50% 30%, #000, transparent)",
            }}
          />
          <div className="relative">
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em]">
              {resumeCta.heading}
              <span className="text-accent">?</span>
            </h2>
            <p className="mx-auto mt-3.5 mb-[30px] max-w-[440px] text-[0.98rem] leading-[1.6] text-t2">
              {resumeCta.subtitle}
            </p>
            <ShimmerButton
              as="a"
              href={resumeCta.href}
              download={FILE_NAME}
              onClick={handleDownload}
              aria-busy={status === "loading"}
              aria-live="polite"
              className="inline-flex items-center gap-2.5 rounded-xl bg-accent px-[26px] py-3.5 text-[15px] font-bold text-white shadow-[0_14px_40px_-12px_rgba(220,38,38,0.45)]"
            >
              <span className="relative flex items-center gap-2.5">
                {status === "loading" ? (
                  <>
                    <Loader2 size={17} className="animate-spin" /> Preparing résumé…
                  </>
                ) : status === "done" ? (
                  <>
                    <Check size={17} /> Downloaded
                  </>
                ) : (
                  <>
                    <Download size={17} /> Download résumé
                  </>
                )}
              </span>
            </ShimmerButton>
          </div>
        </SpotlightCard>
      </Reveal>
    </section>
  );
}
