"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function TypedLine({ text, className }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduce) {
      setCount(text.length);
      return;
    }
    let i = 0;
    let id: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      id = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) clearInterval(id);
      }, 55);
    }, 200);
    return () => {
      clearTimeout(start);
      clearInterval(id);
    };
  }, [text, reduce]);

  const body = text.endsWith("_") ? text.slice(0, -1) : text;

  return (
    <p className={className}>
      <span className="sr-only">{body}</span>
      <span aria-hidden="true">
        {body.slice(0, count)}
        <span className="animate-blink">_</span>
      </span>
    </p>
  );
}
