"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon } from "./Hero";
import { Magnetic } from "./Magnetic";
import { Reveal } from "./Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {}
  }

  return (
    <section aria-labelledby="titulo-contacto" id="contacto" className="relative overflow-hidden border-t border-line">
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_100%,#000_20%,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-36 lg:px-8">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 font-mono text-[13px] text-muted">
            <span className="text-accent-text">05</span>
            <span className="h-px w-8 bg-line" aria-hidden="true" />
            contacto
          </p>
          <h2 id="titulo-contacto" className="max-w-[16ch] text-[2.6rem] leading-[1.02] sm:text-[4rem] lg:text-[5rem]">
            ¿Hablamos sobre <span className="text-accent-text">tu equipo?</span>
          </h2>
          <p className="mt-6 max-w-[48ch] text-lg text-muted">
            Busco un puesto como desarrollador full stack o AI Engineer, remoto o en Santa Cruz. Si mi perfil encaja con lo que buscas, escríbeme.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center gap-3">
          <Magnetic>
            <a href={`mailto:${profile.email}`} className="btn btn-primary !px-5 !py-3.5 text-base">
              Escríbeme un correo
            </a>
          </Magnetic>
          <button type="button" onClick={copy} className="btn btn-secondary !py-3.5 font-mono !text-[14px]">
            {profile.email}
            <span className="relative inline-grid w-14 place-items-center overflow-hidden text-[12px] text-muted">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? "ok" : "copy"}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  className={copied ? "text-accent-text" : ""}
                >
                  {copied ? "copiado" : "copiar"}
                </motion.span>
              </AnimatePresence>
            </span>
          </button>
          <span className="sr-only" role="status" aria-live="polite">
            {copied ? "Correo copiado al portapapeles" : ""}
          </span>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-line pt-8 text-[15px]">
          <a href={profile.github} target="_blank" rel="noreferrer" className="link inline-flex items-center gap-2">
            <GitHubIcon /> github.com/JRGPdev <span className="sr-only">(abre en otra pestaña)</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link inline-flex items-center gap-2">
            <LinkedInIcon /> LinkedIn <span className="sr-only">(abre en otra pestaña)</span>
          </a>
          <a href={profile.cv} download className="link inline-flex items-center gap-2">
            Descargar CV (PDF)
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 font-mono text-[12.5px] text-muted sm:px-6 lg:px-8">
        <p className="m-0">
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <p className="m-0">
          <a href="#inicio" className="link">volver arriba ↑</a>
        </p>
      </div>
    </footer>
  );
}
