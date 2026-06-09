import { Trophy, ArrowUpRight } from "lucide-react";
import { achievements } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <SectionHeading index="02" kicker="Proof of work" title="Highlights" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {achievements.map((a, i) => {
          const isAmber = a.accent === "amber";
          return (
            <Reveal key={a.title} delay={i * 0.06}>
              <article className="card group flex h-full flex-col p-6 sm:p-7">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border ${
                      isAmber
                        ? "border-amber/40 bg-amber/10 text-amber"
                        : "border-violet/40 bg-violet/10 text-violet-bright"
                    }`}
                  >
                    <Trophy size={20} />
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 font-mono text-xs font-semibold ${
                      isAmber
                        ? "bg-amber/15 text-amber"
                        : "bg-violet/15 text-violet-bright"
                    }`}
                  >
                    {a.prize}
                  </span>
                </div>

                <h3 className="text-lg font-bold leading-snug text-ink sm:text-xl">
                  {a.title}
                </h3>
                <p className="mt-1 text-sm text-violet-bright">{a.org}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-dim">
                  {a.blurb}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {a.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                {a.href && (
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-violet-bright"
                  >
                    {a.cta}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                )}
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
