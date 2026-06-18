import { cn } from "@/lib/utils";

export function Marquee({ children, duration = "28s", className }) {
  return (
    <div className={cn("group overflow-hidden", className)}>
      <div
        className="flex w-max group-hover:[animation-play-state:paused]"
        style={{ animation: `marq ${duration} linear infinite` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
