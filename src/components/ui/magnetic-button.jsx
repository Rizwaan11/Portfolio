"use client";

import { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";

export const MagneticButton = forwardRef(function MagneticButton(
  { as: Component = "a", className, children, ...props },
  forwardedRef
) {
  const innerRef = useRef(null);

  const setRefs = (node) => {
    innerRef.current = node;
    if (typeof forwardedRef === "function") forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  const handleMove = (e) => {
    if (matchMedia("(hover: none)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = innerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${dx * 0.22}px, ${dy * 0.32}px)`;
  };

  const handleLeave = () => {
    const el = innerRef.current;
    if (el) el.style.transform = "translate(0,0)";
  };

  return (
    <Component
      ref={setRefs}
      data-magnetic=""
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("transition-transform duration-[250ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]", className)}
      {...props}
    >
      {children}
    </Component>
  );
});
