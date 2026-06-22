"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ReactIcon,
  NextJSIcon,
  NodeIcon,
  MongoDBIcon,
  ExpressIcon,
  TailwindIcon,
  GitIcon,
  PostgreSQLIcon,
} from "@/components/icons/tech-icons";

const DESKTOP_ICONS = [
  { Icon: ReactIcon,      color: "#61DAFB", size: 36, box: 70, pos: { top: "12%", left: "6%" },      dur: 7,   delay: 0 },
  { Icon: NextJSIcon,     color: "#ffffff", size: 32, box: 64, pos: { top: "10%", right: "7%" },     dur: 8,   delay: -3 },
  { Icon: NodeIcon,       color: "#5FA04E", size: 34, box: 66, pos: { top: "40%", left: "3%" },      dur: 8.5, delay: -1 },
  { Icon: MongoDBIcon,    color: "#47A248", size: 32, box: 64, pos: { top: "38%", right: "3.5%" },   dur: 9,   delay: -2 },
  { Icon: TailwindIcon,   color: "#38BDF8", size: 32, box: 62, pos: { bottom: "22%", left: "5%" },   dur: 7.5, delay: -4 },
  { Icon: ExpressIcon,    color: "#e6e6e6", size: 30, box: 60, pos: { bottom: "24%", right: "5%" },  dur: 8,   delay: -1.5 },
  { Icon: GitIcon,        color: "#F05032", size: 30, box: 58, pos: { bottom: "9%", left: "16%" },   dur: 7,   delay: -2.5 },
  { Icon: PostgreSQLIcon, color: "#6c8fff", size: 30, box: 58, pos: { bottom: "8%", right: "15%" },  dur: 8.5, delay: -0.5 },
];

// 5 icons for mobile — 2 flanking just above "Hey I'm", 2 mid-sides, 1 in the lower empty space
const MOBILE_ICONS = [
  { Icon: ReactIcon,    color: "#61DAFB", size: 24, box: 48, pos: { top: "12%",    left: "4%" },   dur: 7,   delay: 0 },
  { Icon: NextJSIcon,   color: "#ffffff", size: 22, box: 44, pos: { top: "10%",    right: "4%" },  dur: 8,   delay: -3 },
  { Icon: NodeIcon,     color: "#5FA04E", size: 22, box: 44, pos: { top: "52%",    left: "2%" },   dur: 8.5, delay: -1 },
  { Icon: MongoDBIcon,  color: "#47A248", size: 22, box: 44, pos: { top: "47%",    right: "2%" },  dur: 9,   delay: -2 },
  { Icon: TailwindIcon, color: "#38BDF8", size: 20, box: 40, pos: { bottom: "8%",  left: "18%" },  dur: 7.5, delay: -4 },
  { Icon: GitIcon,      color: "#F05032", size: 20, box: 40, pos: { bottom: "8%",  right: "18%" }, dur: 7,   delay: -2.5 },
];

function IconCard({ it, reduceMotion }) {
  return (
    <motion.div
      className="absolute"
      style={it.pos}
      animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
      transition={{ duration: it.dur, repeat: Infinity, ease: "easeInOut", delay: it.delay }}
    >
      <div
        className="grid place-items-center rounded-2xl border bg-card-alt/90 backdrop-blur-sm"
        style={{
          width: it.box,
          height: it.box,
          borderColor: `${it.color}55`,
          boxShadow: `0 0 0 1px ${it.color}22, 0 14px 36px -10px ${it.color}66`,
        }}
      >
        <it.Icon size={it.size} color={it.color} />
      </div>
    </motion.div>
  );
}

export function FloatingIcons() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      {/* Mobile: scattered icons — 2 above hero text, 2 mid-sides, 1 bottom */}
      <div className="pointer-events-none absolute inset-0 z-10 md:hidden">
        {MOBILE_ICONS.map((it, i) => (
          <IconCard key={i} it={it} reduceMotion={reduceMotion} />
        ))}
      </div>
      {/* Desktop: full 8 icons */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        {DESKTOP_ICONS.map((it, i) => (
          <IconCard key={i} it={it} reduceMotion={reduceMotion} />
        ))}
      </div>
    </>
  );
}
