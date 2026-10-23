"use client";

import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { metrics } from "@/data/profile";

function Counter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) return setShown(value);
    const controls = animate(0, value, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setShown(Math.round(v)) });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref}>
      <span className="sr-only">
        {prefix}
        {value}
        {suffix}
      </span>
      <span aria-hidden="true">
        {prefix}
        {shown}
        {suffix}
      </span>
    </span>
  );
}

export function Metrics() {
  return (
    <section aria-label="En números" className="border-y border-line bg-surface">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <motion.li
            key={m.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className={`px-4 py-8 sm:px-8 sm:py-10 ${i % 2 === 1 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
          >
            <p className="m-0 font-display text-4xl leading-none font-extrabold tracking-tight text-ink sm:text-5xl">
              <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
            </p>
            <p className="m-0 mt-3 max-w-[24ch] text-sm text-muted">{m.label}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
