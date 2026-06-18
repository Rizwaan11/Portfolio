"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    if (matchMedia("(hover: none)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const ring = ringRef.current;
    const dot = dotRef.current;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf;

    const handleMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot) dot.style.transform = `translate(${mx - 2.5}px, ${my - 2.5}px)`;
    };
    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ring) ring.style.transform = `translate(${rx - 14}px, ${ry - 14}px)`;
      raf = requestAnimationFrame(loop);
    };
    const handleEnter = () => {
      if (!ring) return;
      ring.style.width = "44px";
      ring.style.height = "44px";
      ring.style.background = "var(--color-accent-soft)";
    };
    const handleLeave = () => {
      if (!ring) return;
      ring.style.width = "28px";
      ring.style.height = "28px";
      ring.style.background = "transparent";
    };

    window.addEventListener("mousemove", handleMove);
    raf = requestAnimationFrame(loop);
    const targets = [...document.querySelectorAll("a, button, [data-magnetic]")];
    targets.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[200] h-7 w-7 rounded-full border-[1.5px] border-accent transition-[width,height,background] duration-200"
        style={{ transform: "translate(-100px,-100px)", mixBlendMode: "screen" }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[201] h-[5px] w-[5px] rounded-full bg-accent"
        style={{ transform: "translate(-100px,-100px)" }}
      />
    </>
  );
}
