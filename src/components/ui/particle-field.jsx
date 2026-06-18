"use client";

import { useEffect, useRef } from "react";

// Lightweight canvas constellation: drifting nodes connected by proximity lines,
// with cursor attraction + brightening. No dependencies. Brand-tinted (white + red).
export function ParticleField({
  density = 0.00009, // particles per px² (scaled by area)
  maxParticles = 110,
  linkDistance = 130,
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = matchMedia("(hover: none)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles = [];
    let rafId = 0;
    const mouse = { x: -9999, y: -9999, active: false };

    const ACCENT = [220, 38, 38];

    function resize() {
      const parent = canvas.parentElement;
      width = parent.clientWidth;
      height = parent.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = Math.min(maxParticles, Math.round(width * height * density));
      particles = Array.from({ length: target }, () => spawn());
    }

    function spawn() {
      const isAccent = Math.random() < 0.28;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.6 + 0.7,
        accent: isAccent,
        base: Math.random() * 0.4 + 0.25, // base alpha
      };
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // cursor attraction
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 160 && dist > 0.01) {
            const f = (160 - dist) / 160;
            p.x += (dx / dist) * f * 0.6;
            p.y += (dy / dist) * f * 0.6;
          }
        }
      }

      // links
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDistance) {
            let alpha = (1 - dist / linkDistance) * 0.18;
            // brighten links near cursor
            if (mouse.active) {
              const mx = (a.x + b.x) / 2 - mouse.x;
              const my = (a.y + b.y) / 2 - mouse.y;
              if (Math.hypot(mx, my) < 150) alpha *= 2.6;
            }
            const accentLink = a.accent || b.accent;
            ctx.strokeStyle = accentLink
              ? `rgba(${ACCENT[0]},${ACCENT[1]},${ACCENT[2]},${alpha})`
              : `rgba(255,255,255,${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const p of particles) {
        let alpha = p.base;
        if (mouse.active) {
          const d = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (d < 150) alpha = Math.min(1, alpha + (1 - d / 150) * 0.7);
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.accent
          ? `rgba(${ACCENT[0]},${ACCENT[1]},${ACCENT[2]},${alpha})`
          : `rgba(255,255,255,${alpha})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(step);
    }

    function drawStatic() {
      // single static frame for reduced-motion users
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.accent
          ? `rgba(${ACCENT[0]},${ACCENT[1]},${ACCENT[2]},${p.base})`
          : `rgba(255,255,255,${p.base})`;
        ctx.fill();
      }
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    if (reduceMotion) {
      drawStatic();
    } else {
      if (!isTouch) {
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseout", onLeave);
      }
      rafId = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [density, maxParticles, linkDistance]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
