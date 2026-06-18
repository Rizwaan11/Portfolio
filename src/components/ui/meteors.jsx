const METEORS = [
  { left: "40%", height: 80, color: "var(--color-accent-bright)", duration: "4s", delay: "0s" },
  { left: "65%", height: 60, color: "var(--color-accent-light)", duration: "5s", delay: "1.5s" },
  { left: "25%", height: 50, color: "var(--color-accent-bright)", duration: "6s", delay: "3s" },
  { left: "80%", height: 70, color: "rgba(255,255,255,0.3)", duration: "4.5s", delay: "2s" },
  { left: "15%", height: 55, color: "rgba(255,255,255,0.25)", duration: "5.5s", delay: "4s" },
];

export function Meteors() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {METEORS.map((m, i) => (
        <div
          key={i}
          className="absolute top-0 w-px opacity-0"
          style={{
            left: m.left,
            height: m.height,
            background: `linear-gradient(180deg, ${m.color}, transparent)`,
            animation: `meteor ${m.duration} linear infinite`,
            animationDelay: m.delay,
          }}
        />
      ))}
    </div>
  );
}
