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

// All icons fully visible, each glowing in its own brand color, pinned to the
// edges/corners so they frame the hero and never sit over the center text.
const ICONS = [
  { Icon: ReactIcon,      color: "#61DAFB", size: 36, box: 70, pos: { top: "12%", left: "6%" },     dur: 7,   delay: 0 },
  { Icon: NextJSIcon,     color: "#ffffff", size: 32, box: 64, pos: { top: "10%", right: "7%" },    dur: 8,   delay: -3 },
  { Icon: NodeIcon,       color: "#5FA04E", size: 34, box: 66, pos: { top: "40%", left: "3%" },     dur: 8.5, delay: -1 },
  { Icon: MongoDBIcon,    color: "#47A248", size: 32, box: 64, pos: { top: "38%", right: "3.5%" },  dur: 9,   delay: -2 },
  { Icon: TailwindIcon,   color: "#38BDF8", size: 32, box: 62, pos: { bottom: "22%", left: "5%" },  dur: 7.5, delay: -4 },
  { Icon: ExpressIcon,    color: "#e6e6e6", size: 30, box: 60, pos: { bottom: "24%", right: "5%" }, dur: 8,   delay: -1.5 },
  { Icon: GitIcon,        color: "#F05032", size: 30, box: 58, pos: { bottom: "9%", left: "16%" },  dur: 7,   delay: -2.5 },
  { Icon: PostgreSQLIcon, color: "#6c8fff", size: 30, box: 58, pos: { bottom: "8%", right: "15%" }, dur: 8.5, delay: -0.5 },
];

export function FloatingIcons() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
      {ICONS.map((it, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={it.pos}
          animate={reduceMotion ? undefined : { y: [0, -16, 0] }}
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
      ))}
    </div>
  );
}
