import { GraduationCap } from "lucide-react";
import { aboutParagraphs, stats, skillGroups } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading index="01" kicker="Who I am" title="About me" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr]">
        {/* Bio */}
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-dim sm:text-lg">
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-panel/60 p-4">
              <GraduationCap className="mt-0.5 shrink-0 text-violet-bright" size={22} />
              <p className="text-sm text-dim">
                <span className="font-semibold text-ink">
                  Electrical &amp; Electronics Engineering
                </span>
                , University of Lagos (2020-2026).{" "}
                <span className="text-amber">First-Class Honours.</span>
              </p>
            </div>
          </div>
        </Reveal>

        {/* Stat cards */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card flex flex-col justify-between p-5">
                <p className="font-mono text-2xl font-bold text-ink sm:text-3xl">
                  {s.value}
                </p>
                <div className="mt-3">
                  <p className="text-sm font-medium text-ink">{s.label}</p>
                  <p className="mt-0.5 text-xs text-faint">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Skills */}
      <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06}>
            <div className="card h-full p-6">
              <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-violet-bright">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
