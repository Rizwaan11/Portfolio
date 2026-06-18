"use client";

import { MagneticButton } from "./magnetic-button";
import { cn } from "@/lib/utils";

export function ShimmerButton({ as = "a", className, shimmerOpacity = 0.15, children, ...props }) {
  return (
    <MagneticButton as={as} className={cn("relative overflow-hidden", className)} {...props}>
      <span
        className="pointer-events-none absolute inset-0 animate-[shimmer_3s_ease-in-out_infinite]"
        style={{
          background: `linear-gradient(90deg, transparent 20%, rgba(255,255,255,${shimmerOpacity}) 50%, transparent 80%)`,
          backgroundSize: "200% 100%",
        }}
      />
      {children}
    </MagneticButton>
  );
}
