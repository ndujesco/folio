import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <SectionHeading index="03" kicker="Where I've worked" title="Experience" />

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-violet/60 via-border to-transparent sm:left-[9px]" />

        <div className="space-y-8">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={i * 0.05}>
              <div className="relative pl-8 sm:pl-10">
                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-violet bg-bg sm:h-[19px] sm:w-[19px]" />
                <span className="absolute left-[3px] top-[9px] h-[9px] w-[9px] rounded-full bg-violet sm:left-[5px] sm:top-[11px]" />

                <div className="card p-5 sm:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-base font-bold text-ink sm:text-lg">
                      {job.role}
                    </h3>
                    <span className="font-mono text-xs text-faint">{job.period}</span>
                  </div>
                  {job.href ? (
                    <a
                      href={job.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 inline-flex items-center gap-1 text-sm font-medium text-violet-bright hover:underline"
                    >
                      {job.company} <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <p className="mt-0.5 text-sm font-medium text-violet-bright">
                      {job.company}
                    </p>
                  )}
                  <ul className="mt-3 space-y-1.5">
                    {job.points.map((p, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-sm leading-relaxed text-dim"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
