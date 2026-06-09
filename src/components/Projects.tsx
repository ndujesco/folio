import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projects } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading index="04" kicker="Selected projects" title="Things I've built" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const isAmber = p.accent === "amber";
          return (
            <Reveal key={p.title} delay={(i % 3) * 0.06}>
              <article
                className={`card group flex h-full flex-col p-6 ${
                  p.featured ? "sm:col-span-1" : ""
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  {p.featured ? (
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold ${
                        isAmber
                          ? "bg-amber/15 text-amber"
                          : "bg-violet/15 text-violet-bright"
                      }`}
                    >
                      <Star size={11} fill="currentColor" /> Featured
                    </span>
                  ) : (
                    <span className="font-mono text-xs text-faint">
                      0{i + 1}
                    </span>
                  )}
                  <div className="flex items-center gap-2">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} on GitHub`}
                        className="text-faint transition-colors hover:text-ink"
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                    {p.website && (
                      <a
                        href={p.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} live`}
                        className="text-faint transition-colors hover:text-ink"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-dim">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs text-faint"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <p className="mt-10 text-center text-sm text-faint">
          More on{" "}
          <a
            href="https://github.com/ndujesco"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-violet-bright hover:underline"
          >
            github.com/ndujesco
          </a>
        </p>
      </Reveal>
    </section>
  );
}
