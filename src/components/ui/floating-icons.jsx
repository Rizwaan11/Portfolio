"use client";

import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";
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

const ICONS = [
  // Top edge — bright
  { Icon: ReactIcon,      iconSize: 34, box: 72, position: { top: "8%",    left: "7%"   }, tilt: -8,  duration: 7,   delay: 0,    depth: 10, opacity: 0.75 },
  { Icon: NextJSIcon,     iconSize: 28, box: 64, position: { top: "7%",    right: "6%"  }, tilt: 6,   duration: 8,   delay: -3,   depth: 11, opacity: 0.70 },

  // Upper-mid — outer bright
  { Icon: NodeIcon,       iconSize: 30, box: 66, position: { top: "32%",   left: "4%"   }, tilt: -6,  duration: 8.5, delay: 0.6,  depth: 9,  opacity: 0.65 },
  { Icon: ExpressIcon,    iconSize: 22, box: 54, position: { top: "30%",   right: "5%"  }, tilt: 7,   duration: 9,   delay: -1.5, depth: 10, opacity: 0.60 },

  // Center strip — dimmed so they don't fight the text
  { Icon: MongoDBIcon,    iconSize: 28, box: 62, position: { top: "50%",   left: "21%"  }, tilt: 9,   duration: 6.5, delay: -2,   depth: 8,  opacity: 0.28 },
  { Icon: TailwindIcon,   iconSize: 26, box: 58, position: { top: "48%",   right: "19%" }, tilt: -9,  duration: 7,   delay: -4,   depth: 8,  opacity: 0.28 },

  // Bottom edge — bright
  { Icon: GitIcon,        iconSize: 26, box: 58, position: { bottom: "16%", left: "8%"  }, tilt: 10,  duration: 8.5, delay: -2.5, depth: 10, opacity: 0.65 },
  { Icon: PostgreSQLIcon, iconSize: 26, box: 58, position: { bottom: "15%", right: "7%" }, tilt: -7,  duration: 7.5, delay: -1,   depth: 9,  opacity: 0.65 },
];

export function FloatingIcons({ mouseX, mouseY }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 hidden md:block">
      {ICONS.map((icon, i) => (
        <FloatingIcon key={i} {...icon} mouseX={mouseX} mouseY={mouseY} reduceMotion={reduceMotion} />
      ))}
    </div>
  );
}

function FloatingIcon({ Icon, iconSize, box, position, tilt, duration, delay, depth, opacity, mouseX, mouseY, reduceMotion }) {
  const parallaxX = useSpring(useTransform(mouseX, (v) => v * depth), { stiffness: 60, damping: 20 });
  const parallaxY = useSpring(useTransform(mouseY, (v) => v * depth), { stiffness: 60, damping: 20 });

  return (
    <motion.div
      className="pointer-events-none absolute z-10"
      style={{ ...position, opacity, x: reduceMotion ? 0 : parallaxX, y: reduceMotion ? 0 : parallaxY }}
    >
      <motion.div
        style={{ rotate: tilt }}
        animate={reduceMotion ? undefined : { y: [0, -15, 0], x: [0, 8, -4, 0], rotate: [tilt, tilt + 4, tilt - 4, tilt] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <div
          className="grid place-items-center rounded-2xl border border-line-visible bg-card-alt shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
          style={{ width: box, height: box }}
        >
          <Icon size={iconSize} />
        </div>
      </motion.div>
    </motion.div>
  );
}
