"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      if (barRef.current) barRef.current.style.width = `${p * 100}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 z-[120] h-0.5 w-0 bg-gradient-to-r from-accent to-accent-bright shadow-[0_0_14px_rgba(220,38,38,0.45)]"
    />
  );
}
