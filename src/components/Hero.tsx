"use client";

import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { Editor3D } from "./Editor3D";
import { Magnetic } from "./Magnetic";
import { TypedLine } from "./TypedLine";

const ease = [0.22, 1, 0.36, 1] as const;

function Words({ text, offset, className }: { text: string; offset: number; className?: string }) {
  return text.split(" ").map((word, i) => (
    <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
      <motion.span
        className={`inline-block ${className ?? ""}`}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 + (offset + i) * 0.06, ease }}
      >
        {word}
        {" "}
      </motion.span>
    </span>
  ));
}

export function Hero() {
  const [lead, accent] = profile.headline;
  const leadCount = lead.split(" ").length;

  return (
    <section id="inicio" aria-labelledby="titulo-hero" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28">
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_60%_40%,#000_30%,transparent_75%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3 py-1.5 text-[13px] text-muted"
          >
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping-soft rounded-full bg-highlight" />
              <span className="relative inline-flex size-2 rounded-full bg-highlight" />
            </span>
            {profile.availability}
          </motion.p>

          <TypedLine text={profile.greeting} className="mb-4 font-mono text-[15px] text-accent-text sm:text-base" />

          <h1 id="titulo-hero" className="text-[2.4rem] leading-[1.04] sm:text-[3.2rem] lg:text-[3.7rem]">
            <Words text={lead} offset={0} /> <Words text={accent} offset={leadCount} className="text-accent-text" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease }}
            className="mt-6 max-w-[52ch] text-lg text-muted"
          >
            {profile.lede}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a href="#experiencia" className="btn btn-primary group">
                Ver experiencia
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="transition-transform group-hover:translate-y-0.5">
                  <path d="M12 5v14M6 13l6 6 6-6" />
                </svg>
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.cv} download className="btn btn-secondary">
                Descargar CV
              </a>
            </Magnetic>
            <ul className="ml-1 flex items-center gap-1" aria-label="Redes">
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer" className="grid size-10 place-items-center rounded-lg text-muted transition-colors hover:text-accent-text" aria-label="GitHub (abre en otra pestaña)">
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="grid size-10 place-items-center rounded-lg text-muted transition-colors hover:text-accent-text" aria-label="LinkedIn (abre en otra pestaña)">
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.35 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[13px]"
          >
            <div className="flex gap-2">
              <dt className="text-muted">rol:</dt>
              <dd className="text-ink">{profile.role}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted">base:</dt>
              <dd className="text-ink">{profile.location}</dd>
            </div>
          </motion.dl>
        </div>

        <Editor3D />
      </div>
    </section>
  );
}

export function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
