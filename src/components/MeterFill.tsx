"use client";

import { motion } from "motion/react";

export function MeterFill({ pct }: { pct: number }) {
  return (
    <motion.div
      className="h-full origin-left rounded-full bg-accent-text"
      style={{ width: `${pct}%` }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
