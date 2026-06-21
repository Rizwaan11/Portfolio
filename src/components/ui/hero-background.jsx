// Hero backdrop: soft glowing dots drifting slowly (float1/2/3 keyframes) plus
// shooting-star meteors streaking diagonally (meteor keyframe). No dotted
// constellation, no panning grid — just gentle, continuous motion behind the
// content and floating tech icons.

const ORBS = [
  { top: "14%", left: "12%", size: 10, color: "var(--color-accent-bright)", anim: "float1", dur: 13, delay: 0,    o: 0.5 },
  { top: "22%", left: "82%", size: 7,  color: "#ffffff",                    anim: "float2", dur: 17, delay: -2,   o: 0.35 },
  { top: "38%", left: "26%", size: 5,  color: "var(--color-accent)",        anim: "float3", dur: 15, delay: -4,   o: 0.4 },
  { top: "30%", left: "60%", size: 8,  color: "#7c3aed",                    anim: "float1", dur: 19, delay: -1,   o: 0.3 },
  { top: "58%", left: "8%",  size: 6,  color: "#ffffff",                    anim: "float2", dur: 14, delay: -6,   o: 0.3 },
  { top: "64%", left: "90%", size: 9,  color: "var(--color-accent-bright)", anim: "float3", dur: 18, delay: -3,   o: 0.45 },
  { top: "74%", left: "30%", size: 5,  color: "var(--color-accent)",        anim: "float1", dur: 16, delay: -8,   o: 0.35 },
  { top: "80%", left: "68%", size: 7,  color: "#ffffff",                    anim: "float2", dur: 20, delay: -2.5, o: 0.3 },
  { top: "48%", left: "48%", size: 4,  color: "var(--color-accent-bright)", anim: "float3", dur: 21, delay: -5,   o: 0.3 },
  { top: "12%", left: "46%", size: 5,  color: "#ffffff",                    anim: "float1", dur: 22, delay: -7,   o: 0.25 },
  { top: "88%", left: "16%", size: 6,  color: "var(--color-accent)",        anim: "float2", dur: 15, delay: -9,   o: 0.35 },
  { top: "54%", left: "76%", size: 5,  color: "#7c3aed",                    anim: "float3", dur: 18, delay: -4.5, o: 0.3 },
];

const METEORS = [
  { left: "8%",  top: "-4%", len: 90,  color: "var(--color-accent-bright)", dur: "5s",   delay: "0s" },
  { left: "22%", top: "-6%", len: 70,  color: "rgba(255,255,255,0.35)",     dur: "6.5s", delay: "1.2s" },
  { left: "38%", top: "-3%", len: 110, color: "var(--color-accent-light)",  dur: "5.5s", delay: "2.4s" },
  { left: "54%", top: "-7%", len: 80,  color: "var(--color-accent-bright)", dur: "7s",   delay: "0.6s" },
  { left: "68%", top: "-4%", len: 95,  color: "rgba(255,255,255,0.3)",      dur: "6s",   delay: "3s" },
  { left: "82%", top: "-6%", len: 70,  color: "var(--color-accent-bright)", dur: "5.5s", delay: "1.8s" },
  { left: "92%", top: "-3%", len: 100, color: "#a78bfa",                    dur: "7.5s", delay: "2.2s" },
];

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-bg">
      {/* soft anchor glow from the top so the field isn't flat black */}
      <div
        className="absolute left-1/2 top-0 h-[70vh] w-[120%] -translate-x-1/2"
        style={{ background: "radial-gradient(45% 55% at 50% 0%, var(--color-accent-soft), transparent 70%)" }}
      />

      {/* drifting orbs */}
      {ORBS.map((orb, i) => (
        <span
          key={`o-${i}`}
          className="absolute rounded-full"
          style={{
            top: orb.top,
            left: orb.left,
            width: orb.size,
            height: orb.size,
            opacity: orb.o,
            background: orb.color,
            boxShadow: `0 0 ${orb.size * 2.5}px ${orb.size * 0.8}px ${orb.color}`,
            animation: `${orb.anim} ${orb.dur}s ease-in-out infinite`,
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}

      {/* shooting-star meteors */}
      {METEORS.map((m, i) => (
        <span
          key={`m-${i}`}
          className="absolute w-px opacity-0"
          style={{
            left: m.left,
            top: m.top,
            height: m.len,
            background: `linear-gradient(180deg, ${m.color}, transparent)`,
            animation: `meteor ${m.dur} linear infinite`,
            animationDelay: m.delay,
          }}
        />
      ))}
    </div>
  );
}
