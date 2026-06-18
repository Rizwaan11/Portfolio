"use client";

import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.9, ease: [0.16, 0.75, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
