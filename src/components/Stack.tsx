import { stack } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { TiltCard } from "./TiltCard";

export function Stack() {
  return (
    <section aria-labelledby="titulo-stack" id="stack" className="border-t border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <SectionHead
          id="titulo-stack"
          index="04"
          eyebrow="stack"
          title="Herramientas que uso"
          accent="todos los días."
          intro="Elijo la herramienta por el problema, no al revés."
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((s, i) => (
            <Reveal as="li" key={s.group} delay={(i % 3) * 0.08}>
              <TiltCard max={6}>
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-line px-5 py-3">
                    <span className="font-mono text-[12.5px] text-muted">{s.file}</span>
                    <span className="font-mono text-[12px] text-accent-text" aria-hidden="true">
                      {String(s.items.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="m-0 text-[1.35rem] leading-tight">{s.group}</h3>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {s.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-[12.5px] text-ink transition-colors hover:border-accent-text hover:text-accent-text"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
