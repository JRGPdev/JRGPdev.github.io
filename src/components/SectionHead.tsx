import { Reveal } from "./Reveal";

type Props = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  accent?: string;
  intro?: string;
};

export function SectionHead({ id, index, eyebrow, title, accent, intro }: Props) {
  return (
    <Reveal className="mb-10 grid gap-4 sm:mb-14 md:grid-cols-[1fr_auto] md:items-end">
      <div>
        <p className="mb-3 flex items-center gap-3 font-mono text-[13px] text-muted">
          <span className="text-accent-text">{index}</span>
          <span className="h-px w-8 bg-line" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 id={id} className="text-[2rem] leading-[1.08] sm:text-[2.5rem]">
          {title} {accent && <span className="text-accent-text">{accent}</span>}
        </h2>
      </div>
      {intro && <p className="max-w-md text-muted md:text-right">{intro}</p>}
    </Reveal>
  );
}
