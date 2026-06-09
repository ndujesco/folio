import { Mail, FileDown } from "lucide-react";
import { profile } from "@/data/content";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <SectionHeading index="05" kicker="Say hello" title="Let's build something" />

      <Reveal>
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div
            className="glow right-[-5%] top-[-30%] h-72 w-72 bg-violet/40"
            aria-hidden
          />
          <div className="relative z-10 max-w-2xl">
            <p className="text-lg leading-relaxed text-dim sm:text-xl">
              I&apos;m open to full-time roles, freelance projects and
              open-source collaboration. If you&apos;ve got an idea worth
              shipping, my inbox is open.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet/30 transition-all hover:-translate-y-0.5 hover:bg-violet-bright"
              >
                <Mail size={17} /> {profile.email}
              </a>
              <a
                href={profile.resumeTech}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-panel/60 px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-violet/60"
              >
                <FileDown size={17} /> Résumé
              </a>
            </div>

            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
