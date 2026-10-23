"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { internships, jobs } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });

  return (
    <section aria-labelledby="titulo-experiencia" id="experiencia" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <SectionHead
          id="titulo-experiencia"
          index="02"
          eyebrow="experiencia"
          title="De las prácticas a"
          accent="IA en producción."
          intro="Cuatro años trabajando en equipos reales, cada vez con más responsabilidad técnica."
        />

        <div className="relative">
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-[5px] w-px bg-line sm:left-[7px]" />
          <motion.span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[5px] w-px origin-top bg-accent-text sm:left-[7px]"
            style={{ scaleY: progress }}
          />

          <ol ref={listRef} className="m-0 grid list-none gap-14 p-0 pl-8 sm:pl-12">
            {jobs.map((job, i) => (
              <Reveal as="li" key={job.company} className="relative">
                <Dot active={i === 0} />
                <div className="grid gap-4 lg:grid-cols-[16rem_1fr] lg:gap-12">
                  <div>
                    <p className="m-0 font-mono text-[13px] text-accent-text">{job.period}</p>
                    <h3 className="mt-2 mb-0 text-[1.45rem] leading-tight">{job.company}</h3>
                    <p className="m-0 mt-1 font-display text-base font-medium text-ink">{job.role}</p>
                    <p className="m-0 mt-0.5 text-sm text-muted">{job.place}</p>
                  </div>
                  <div>
                    <Points points={job.points} />
                    <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tecnologías usadas">
                      {job.tags.map((t) => (
                        <li key={t} className="rounded-md border border-line px-2 py-0.5 font-mono text-[12px] text-muted">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}

            {internships.map((job) => (
              <Reveal as="li" key={job.company} className="relative">
                <Dot />
                <div className="grid gap-4 lg:grid-cols-[16rem_1fr] lg:gap-12">
                  <div>
                    <p className="m-0 flex flex-wrap items-center gap-2 font-mono text-[13px] text-muted">
                      {job.period}
                      <span className="rounded-full border border-secondary/60 px-2 py-px text-[11px] text-secondary-text">práctica</span>
                    </p>
                    <h3 className="mt-2 mb-0 text-[1.2rem] leading-tight">{job.company}</h3>
                    <p className="m-0 mt-1 font-display text-[15px] font-medium text-ink">{job.role}</p>
                    <p className="m-0 mt-0.5 text-sm text-muted">{job.place}</p>
                  </div>
                  <Points points={job.points} small />
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Dot({ active = false }: { active?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute top-2 -left-8 size-[11px] rounded-full border-2 sm:-left-12 sm:size-[15px] ${
        active ? "border-accent-text bg-accent-text" : "border-line bg-bg"
      }`}
    />
  );
}

function Points({ points, small = false }: { points: string[]; small?: boolean }) {
  return (
    <ul className={`m-0 grid list-none gap-2.5 p-0 ${small ? "text-[15px]" : ""}`}>
      {points.map((pt) => (
        <li key={pt} className="relative pl-5 text-muted">
          <span aria-hidden="true" className="absolute top-0 left-0 font-mono text-accent-text">
            ›
          </span>
          {pt}
        </li>
      ))}
    </ul>
  );
}
