// Deterministic pseudo-random contribution heatmap — seed array ported
// verbatim from Portfolio.dc.html so the pattern matches the approved design.

const WEEKS = 20;
const DAYS = 7;
const LEVELS = [
  "rgba(255,255,255,0.03)",
  "rgba(220,38,38,0.15)",
  "rgba(220,38,38,0.3)",
  "rgba(220,38,38,0.5)",
  "rgba(220,38,38,0.75)",
];
const SEED = [
  3, 1, 0, 2, 4, 1, 0, 3, 2, 1, 0, 0, 2, 3, 1, 4, 0, 2, 1, 3, 0, 1, 2, 0, 3, 4, 1, 2, 0, 3, 1, 0, 2, 1, 3, 0, 4, 2, 1,
  0, 3, 1, 2, 0, 1, 3, 2, 4, 0, 1, 2, 3, 0, 1, 4, 2, 3, 1, 0, 2, 1, 3, 0, 2, 4, 1, 0, 3, 2, 1, 0, 2, 3, 1, 0, 4, 2, 1,
  3, 0, 2, 1, 0, 3, 2, 4, 1, 0, 3, 2, 1, 0, 2, 3, 1, 4, 0, 2, 1, 3, 0, 1, 2, 0, 3, 4, 1, 2, 0, 3, 1, 0, 2, 1, 3, 0, 4,
  2, 1, 0, 3, 1, 2, 0, 1, 3, 2, 4, 0, 1, 2, 3, 0, 1, 4, 2, 3, 1, 0, 2,
];

export function GithubGrid() {
  const cells = [];
  for (let w = 0; w < WEEKS; w++) {
    for (let d = 0; d < DAYS; d++) {
      const idx = (w * DAYS + d) % SEED.length;
      cells.push(
        <div
          key={`${w}-${d}`}
          className="h-[10px] w-[10px] rounded-[2px]"
          style={{ background: LEVELS[SEED[idx]], gridRow: d + 1, gridColumn: w + 1 }}
        />
      );
    }
  }

  return (
    <div
      className="grid gap-[3px]"
      style={{ gridTemplateRows: `repeat(${DAYS}, 10px)`, gridTemplateColumns: `repeat(${WEEKS}, 10px)` }}
    >
      {cells}
    </div>
  );
}
