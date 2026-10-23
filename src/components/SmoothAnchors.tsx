"use client";

import { animate, type AnimationPlaybackControls } from "motion/react";
import { useEffect } from "react";

const HEADER_OFFSET = 80;

export function SmoothAnchors() {
  useEffect(() => {
    let current: AnimationPlaybackControls | null = null;
    const stop = () => current?.stop();

    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;
      const id = decodeURIComponent(link.hash.slice(1));
      const target = id ? document.getElementById(id) : null;
      if (!target) return;

      e.preventDefault();
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const start = window.scrollY;
      const end = id === "inicio" ? 0 : Math.max(0, target.getBoundingClientRect().top + start - HEADER_OFFSET);
      const distance = Math.abs(end - start);
      const duration = reduce ? 0.45 : Math.min(1.6, 0.7 + distance / 4000);

      stop();
      current = animate(start, end, {
        duration,
        ease: reduce ? "easeOut" : [0.65, 0, 0.35, 1],
        onUpdate: (y) => window.scrollTo(0, y),
        onComplete: () => {
          if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
        },
      });
      history.pushState(null, "", `#${id}`);
    }

    document.addEventListener("click", onClick);
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("touchstart", stop, { passive: true });
    window.addEventListener("keydown", stop);
    return () => {
      stop();
      document.removeEventListener("click", onClick);
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
      window.removeEventListener("keydown", stop);
    };
  }, []);

  return null;
}
