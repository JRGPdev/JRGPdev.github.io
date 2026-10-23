import { about } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const hobbyIcons: Record<string, React.ReactNode> = {
  gym: <path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11" />,
  football: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m12 7.5 4 2.9-1.5 4.7h-5L8 10.4 12 7.5ZM12 3v4.5M21 10.4l-5 0M17.5 19.3l-3-4.2M6.5 19.3l3-4.2M3 10.4h5" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V5l11-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="17" cy="16" r="3" />
    </>
  ),
  film: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4" />
    </>
  ),
};

export function About() {
  return (
    <section aria-labelledby="titulo-sobre-mi" id="sobre-mi">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <SectionHead id="titulo-sobre-mi" index="01" eyebrow="sobre mí" title="Un poco más" accent="sobre mí." />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal className="grid gap-5 text-lg text-muted">
            {about.paragraphs.map((p) => (
              <p key={p} className="m-0">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="m-0 grid overflow-hidden rounded-2xl border border-line bg-surface">
              {about.facts.map((f, i) => (
                <div key={f.label} className={`grid gap-1 px-5 py-4 sm:grid-cols-[8rem_1fr] sm:gap-4 ${i > 0 ? "border-t border-line" : ""}`}>
                  <dt className="font-mono text-[13px] text-muted">{f.label}</dt>
                  <dd className="m-0 text-[15px] text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <h3 className="m-0 text-[1.45rem]">Cómo trabajo</h3>
            </Reveal>
            <ul className="mt-6 grid list-none gap-3 p-0 sm:grid-cols-2">
              {about.softSkills.map((s, i) => (
                <Reveal
                  as="li"
                  key={s.title}
                  delay={i * 0.05}
                  className={`rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent-text ${
                    i === about.softSkills.length - 1 && about.softSkills.length % 2 === 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <p className="m-0 font-display text-[17px] font-medium text-ink">{s.title}</p>
                  <p className="m-0 mt-1.5 text-[15px] text-muted">{s.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <Reveal>
              <h3 className="m-0 text-[1.45rem]">Fuera del código</h3>
            </Reveal>
            <ul className="mt-6 grid list-none gap-3 p-0">
              {about.hobbies.map((h, i) => (
                <Reveal as="li" key={h.label} delay={i * 0.06} className="group flex items-center gap-4 rounded-xl border border-line p-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-line bg-surface text-accent-text transition-transform duration-300 group-hover:-rotate-6">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {hobbyIcons[h.icon]}
                    </svg>
                  </span>
                  <span>
                    <span className="block font-display text-[17px] font-medium text-ink">{h.label}</span>
                    <span className="block text-[15px] text-muted">{h.text}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
