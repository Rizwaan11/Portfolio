"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function SpotlightCard({ children, className, ...props }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    if (matchMedia("(hover: none)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.opacity = "1";
      glow.style.background = `radial-gradient(350px circle at ${x}px ${y}px, rgba(220,38,38,0.06), transparent 60%)`;
    };
    const handleLeave = () => {
      glow.style.opacity = "0";
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", handleLeave);
    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className={cn("relative overflow-hidden", className)} {...props}>
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] opacity-0 transition-opacity duration-300"
      />
      {children}
    </div>
  );
}
