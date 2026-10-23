"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";


const chat = [
  { from: "user", text: "Hola, necesito el certificado de mi curso de marzo." },
  { from: "log", tag: "intent", text: "certificado · 0.94 → resolver" },
  { from: "bot", text: "¡Listo! Encontré tu inscripción. Te envío el certificado en PDF por aquí." },
  { from: "user", text: "También quiero cambiar de cohorte por trabajo." },
  { from: "log", tag: "handoff", text: "caso complejo → equipo académico" },
] as const;

export function Editor3D() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 120, damping: 18, mass: 0.6 };
  const rx = useSpring(useTransform(py, [-1, 1], [9, -9]), spring);
  const ry = useSpring(useTransform(px, [-1, 1], [-12, 12]), spring);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scrollTilt = useTransform(scrollYProgress, [0.35, 1], [0, 18]);
  const factor = useMotionValue(1);
  const rotateX = useTransform(() => (rx.get() + scrollTilt.get() + 4) * factor.get());
  const rotateY = useTransform(() => (ry.get() - 8) * factor.get());

  useEffect(() => {
    factor.set(reduce ? 0 : 1);
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      px.set((e.clientX / window.innerWidth) * 2 - 1);
      py.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, px, py, factor]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotateX: 25 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[30rem] [perspective:1400px] lg:mr-0"
    >
      <motion.figure
        aria-label="Ejemplo ilustrativo: el agente Ari resuelve una consulta simple y deriva una compleja a un humano"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative m-0"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-2xl border border-line bg-surface/40"
          style={{ transform: "translateZ(-60px) translate(18px, 18px)" }}
        />

        <div className="relative overflow-hidden rounded-2xl border border-line bg-surface" style={{ transform: "translateZ(0)" }}>
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full border border-line" />
              <span className="size-2.5 rounded-full border border-line" />
              <span className="size-2.5 rounded-full bg-accent" />
            </span>
            <span className="ml-3 rounded-md bg-bg px-2 py-0.5 font-mono text-xs text-ink">ari.agent.ts</span>
            <span className="font-mono text-xs text-muted">trace.log</span>
          </div>

          <pre className="m-0 overflow-x-auto border-b border-line px-4 py-3 font-mono text-[12.5px] leading-6 text-muted" aria-hidden="true">
            <code>
              <Line n={1}>
                <K>const</K> <span className="text-ink">ari</span> = <F>createAgent</F>({"{"}
              </Line>
              <Line n={2}>
                {"  "}channel: <S>&quot;whatsapp&quot;</S>,
              </Line>
              <Line n={3}>
                {"  "}tools: [<S>certificados</S>, <S>grabaciones</S>],
              </Line>
              <Line n={4}>
                {"  "}handoff: (c) <K>=&gt;</K> c.complejidad &gt; <span className="text-secondary-text">0.7</span>,
              </Line>
              <Line n={5}>{"});"}</Line>
            </code>
          </pre>

          <div className="grid gap-2.5 p-4 text-[13.5px] leading-snug">
            {chat.map((m, i) => {
              const delay = 1.3 + i * 0.35;
              if (m.from === "log") {
                return (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay, duration: 0.4 }}
                    className="m-0 border-l-2 border-secondary py-0.5 pl-2.5 font-mono text-[12px] text-muted"
                  >
                    <b className="font-medium text-secondary-text">{m.tag}</b> {m.text}
                  </motion.p>
                );
              }
              const isUser = m.from === "user";
              return (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay, duration: 0.4 }}
                  className={`m-0 max-w-[85%] rounded-xl px-3 py-2 ${
                    isUser ? "justify-self-start border border-line bg-bg text-ink" : "justify-self-end bg-accent text-on-accent"
                  }`}
                >
                  <span className="sr-only">{isUser ? "Estudiante: " : "Ari: "}</span>
                  {m.text}
                </motion.p>
              );
            })}
          </div>
        </div>

        <div aria-hidden="true" className="absolute -top-5 -right-3 sm:-right-8" style={{ transform: "translateZ(90px)" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.9, duration: 0.5 }}
            className="rounded-xl border border-line bg-bg px-3.5 py-2.5"
          >
          <p className="m-0 font-display text-2xl leading-none font-extrabold text-accent-text">82%</p>
          <p className="m-0 mt-1 font-mono text-[11px] text-muted">enrutado por IA</p>
          </motion.div>
        </div>

        <div aria-hidden="true" className="absolute -bottom-5 -left-3 sm:-left-8" style={{ transform: "translateZ(60px)" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.3, duration: 0.5 }}
            className="flex items-center gap-2 rounded-lg border border-line bg-bg px-3 py-2 font-mono text-[11.5px] text-ink"
          >
            <span className="size-1.5 rounded-full bg-highlight" />
            humano solo si hace falta
          </motion.div>
        </div>
      </motion.figure>
    </motion.div>
  );
}

function Line({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <span className="block">
      <span className="mr-4 inline-block w-3 text-right text-line select-none">{n}</span>
      {children}
    </span>
  );
}
const K = ({ children }: { children: React.ReactNode }) => <span className="text-secondary-text">{children}</span>;
const F = ({ children }: { children: React.ReactNode }) => <span className="text-ink">{children}</span>;
const S = ({ children }: { children: React.ReactNode }) => <span className="text-accent-text">{children}</span>;
