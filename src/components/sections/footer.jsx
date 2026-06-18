export function Footer() {
  return (
    <footer className="relative mx-auto mt-5 flex max-w-[1100px] flex-wrap items-center justify-between gap-3.5 border-t border-line px-6 py-[22px]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-accent-glow), transparent)" }}
      />
      <span className="font-mono text-[11px] text-t3">© 2026 M Rizwan Ali</span>
      <a
        href="#home"
        className="inline-flex items-center gap-1.5 font-mono text-[11px] text-t3 transition-colors hover:text-accent"
      >
        Back to top ↑
      </a>
    </footer>
  );
}
