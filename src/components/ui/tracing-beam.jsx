"use client";

import { useEffect, useRef } from "react";

export function TracingBeam() {
  const lineRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    if (lineRef.current && !matchMedia("(hover: none)").matches) {
      lineRef.current.style.display = "block";
    }

    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      if (dotRef.current) dotRef.current.style.top = `${p * 100}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={lineRef} className="fixed top-0 bottom-0 left-7 z-[90] hidden w-px bg-line">
      <div
        ref={dotRef}
        className="absolute -left-[3.5px] h-2 w-2 rounded-full bg-accent animate-[trace-glow_2s_ease-in-out_infinite]"
      />
    </div>
  );
}
