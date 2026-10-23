import { projects, statusLabel, type Project, type ProjectStatus } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { MeterFill } from "./MeterFill";
import { TiltCard } from "./TiltCard";

const statusDot: Record<ProjectStatus, string> = {
  live: "bg-highlight",
  github: "bg-secondary",
  wip: "bg-accent",
  pending: "border border-muted",
};

function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-[11.5px] text-muted">
      <span className={`size-1.5 rounded-full ${statusDot[status]}`} aria-hidden="true" />
      {statusLabel[status]}
    </span>
  );
}

function Meter({ label, value, total }: { label: string; value: number; total: number }) {
  const pct = Math.round((value / total) * 100);
  return (
    <div className="mt-8 rounded-xl border border-line bg-bg p-5">
      <div className="flex items-baseline justify-between gap-4 font-mono text-[12.5px]">
        <span className="text-muted">{label}</span>
        <span className="text-ink">
          {value} / {total}
        </span>
      </div>
      <div
        role="meter"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={value}
        aria-valuetext={`${value} de ${total} (${pct}%)`}
        className="mt-3 h-2 overflow-hidden rounded-full bg-line"
      >
        <MeterFill pct={pct} />
      </div>
      <div aria-hidden="true" className="mt-2 flex justify-between font-mono text-[10.5px] text-muted">
        <span>0</span>
        <span>25</span>
        <span>50</span>
        <span>75</span>
        <span>100%</span>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { featured } = project;
  return (
    <TiltCard max={featured ? 4 : 7}>
      <article className={`flex h-full flex-col p-6 sm:p-7 ${featured ? "lg:p-9" : ""}`} aria-labelledby={`proyecto-${index}`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="m-0 font-mono text-[12.5px] text-muted">
            <span className="text-accent-text">{String(index + 1).padStart(2, "0")}</span> / {project.kind}
          </p>
          <StatusBadge status={project.status} />
        </div>

        <h3
          id={`proyecto-${index}`}
          className={`mt-6 mb-0 leading-none transition-colors group-hover:text-accent-text ${featured ? "text-4xl sm:text-5xl" : "text-[1.6rem]"}`}
        >
          {project.name}
        </h3>
        <p className={`mt-4 mb-0 text-muted ${featured ? "max-w-[52ch] text-lg" : "text-[15px]"}`}>{project.description}</p>

        {project.highlights && (
          <ul className="mt-7 grid gap-2.5 sm:grid-cols-3">
            {project.highlights.map((h) => (
              <li key={h} className="rounded-xl border border-line bg-bg p-4 text-[14px] leading-snug text-ink">
                <span className="mb-2 block font-mono text-xs text-accent-text" aria-hidden="true">
                  ✓
                </span>
                {h}
              </li>
            ))}
          </ul>
        )}

        {project.meter && <Meter {...project.meter} />}

        <div className="mt-auto pt-7">
          <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologías">
            {project.tags.map((t) => (
              <li key={t} className="rounded-md border border-secondary/50 px-2 py-0.5 font-mono text-[12px] text-secondary-text">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-4 border-t border-line pt-4 text-[14px]">
            {project.links.map((l) =>
              l.href ? (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="link inline-flex items-center gap-1.5">
                  {l.label}
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only">(abre en otra pestaña)</span>
                </a>
              ) : (
                <span key={l.label} className="font-mono text-[12.5px] text-muted">
                  {l.label}
                </span>
              ),
            )}
          </div>
        </div>
      </article>
    </TiltCard>
  );
}

export function Projects() {
  return (
    <section aria-labelledby="titulo-proyectos" id="proyectos" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <SectionHead
        id="titulo-proyectos"
        index="03"
        eyebrow="proyectos"
        title="Lo que he construido y"
        accent="puesto a andar."
        intro="Agentes, RAG y herramientas que resuelven problemas reales. Algunos en producción, otros en código abierto."
      />

      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal as="li" key={p.name} delay={(i % 3) * 0.08} className={p.featured ? "md:col-span-2 lg:row-span-2" : ""}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </ul>
      </div>
    </section>
  );
}
