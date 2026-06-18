export function BorderBeam({ radius = 21 }) {
  return (
    <div
      className="pointer-events-none absolute -inset-px z-[2] overflow-hidden"
      style={{ borderRadius: radius }}
    >
      <div
        className="absolute h-20 w-20 rounded-full bg-accent opacity-60 blur-xl animate-[border-beam_6s_linear_infinite]"
        style={{ offsetPath: `rect(0 100% 100% 0 round ${radius}px)` }}
      />
    </div>
  );
}
