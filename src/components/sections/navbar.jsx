"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

const OBSERVED_IDS = ["home", "about", "projects", "skills", "education", "contact"];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    OBSERVED_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const mainLinks = navLinks.filter((link) => link.id !== "resume");
  const resumeLink = navLinks.find((link) => link.id === "resume");

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-[850px] -translate-x-1/2">
      <div className="rounded-2xl border border-line-visible bg-bg-elevated/90 px-4 py-3 backdrop-blur-xl md:px-6">
        <div className="flex items-center justify-between">
          <MagneticButton
            as="a"
            href="#home"
            aria-label="Home"
            className="flex shrink-0 items-center gap-2 text-lg font-extrabold text-t1"
          >
            <span className="relative h-8 w-8 overflow-hidden rounded-full border border-line-visible">
              <Image src="/logo.png" alt="M Rizwan Ali" fill className="object-cover object-top" sizes="32px" />
            </span>
            <span>RA<span className="text-accent">.</span></span>
          </MagneticButton>

          <div className="hidden flex-1 items-center justify-center gap-1 md:flex">
            {mainLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={cn(
                  "relative rounded-xl px-3 py-1.5 text-sm font-medium transition-colors",
                  active === link.id ? "text-t1" : "text-t3 hover:text-t2"
                )}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-xl border border-accent/30 bg-accent-soft"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          {resumeLink && (
            <a
              href={`#${resumeLink.id}`}
              className="hidden shrink-0 rounded-xl px-3 py-1.5 text-sm font-medium text-accent-bright transition-colors hover:bg-accent-soft md:block"
            >
              {resumeLink.label}
            </a>
          )}

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="text-t3 transition-colors hover:text-accent md:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-2 flex flex-col gap-1 border-t border-line pt-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileOpen(false);
                      const el = document.getElementById(link.id);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={cn(
                      "rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                      link.id === "resume"
                        ? "text-accent-bright"
                        : active === link.id
                          ? "bg-accent-soft text-t1"
                          : "text-t3"
                    )}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
