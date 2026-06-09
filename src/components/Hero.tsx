"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, FileDown, MapPin } from "lucide-react";
import { profile } from "@/data/content";
import SocialLinks from "./SocialLinks";

/** Typewriter that cycles through the role list. */
function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const done = text === current;
    const empty = text === "";

    let delay = deleting ? 45 : 90;
    if (done && !deleting) delay = 1600;
    if (empty && deleting) delay = 350;

    const t = setTimeout(() => {
      if (!deleting && done) {
        setDeleting(true);
      } else if (deleting && empty) {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words]);

  return text;
}

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/** Decorative code window used in place of a portrait. Always dark. */
function CodeCard() {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet/40 to-amber/20 blur-2xl" aria-hidden />
      <div className="code-window relative overflow-hidden rounded-2xl shadow-2xl">
        <div className="cw-bar flex items-center gap-2 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="cw-file ml-2 font-mono text-xs">peter.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed sm:text-sm">
          <code>
            <span className="cw-key">const</span>{" "}
            <span className="cw-name">peter</span>{" "}
            <span className="cw-punc">=</span>{" "}
            <span className="cw-punc">{"{"}</span>
            {"\n"}
            {"  "}<span className="cw-key">role</span>
            <span className="cw-punc">:</span>{" "}
            <span className="cw-str">{'"Full-Stack Engineer"'}</span>
            <span className="cw-punc">,</span>
            {"\n"}
            {"  "}<span className="cw-key">stack</span>
            <span className="cw-punc">:</span>{" "}
            <span className="cw-punc">[</span>
            <span className="cw-str">{'"Next.js"'}</span>
            <span className="cw-punc">,</span>{" "}
            <span className="cw-str">{'"Node"'}</span>
            <span className="cw-punc">,</span>{" "}
            <span className="cw-str">{'"NestJS"'}</span>
            <span className="cw-punc">],</span>
            {"\n"}
            {"  "}<span className="cw-key">also</span>
            <span className="cw-punc">:</span>{" "}
            <span className="cw-str">{'"FastAPI · Flask"'}</span>
            <span className="cw-punc">,</span>
            {"\n"}
            {"  "}<span className="cw-key">building</span>
            <span className="cw-punc">:</span>{" "}
            <span className="cw-str">{'"TrustLoop · digital KYC"'}</span>
            <span className="cw-punc">,</span>
            {"\n"}
            {"  "}<span className="cw-key">status</span>
            <span className="cw-punc">:</span>{" "}
            <span className="cw-str">{'"shipping"'}</span>
            <span className="cw-punc">,</span>
            {"\n"}
            <span className="cw-punc">{"}"}</span>
            <span className="blink cw-text">|</span>
          </code>
        </pre>
      </div>
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div
        className="glow left-[-10%] top-[-10%] h-[420px] w-[420px] bg-violet/40"
        aria-hidden
      />
      <div
        className="glow right-[-5%] top-[20%] h-[360px] w-[360px] bg-amber/15"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
        {/* Left: copy */}
        <div>
          <motion.p
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-panel/70 px-3 py-1 font-mono text-xs text-dim"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for work &amp; collaborations
          </motion.p>

          <motion.h1
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="text-gradient">Peter</span>.
          </motion.h1>

          <motion.div
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-3 h-9 font-mono text-lg text-violet-bright sm:h-10 sm:text-2xl"
          >
            <span>{typed}</span>
            <span className="blink ml-0.5 text-ink">|</span>
          </motion.div>

          <motion.p
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-base leading-relaxed text-dim sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            custom={4}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={profile.resumeTech}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet/30 transition-all hover:-translate-y-0.5 hover:bg-violet-bright"
            >
              <FileDown size={17} /> Download Résumé
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-panel/60 px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-violet/60"
            >
              View my work <ArrowDown size={16} />
            </a>
          </motion.div>

          <motion.div
            custom={5}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <SocialLinks />
            <span className="inline-flex items-center gap-1.5 text-sm text-faint">
              <MapPin size={15} /> {profile.location}
            </span>
          </motion.div>
        </div>

        {/* Right: code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-md lg:max-w-none"
        >
          <CodeCard />
        </motion.div>
      </div>
    </section>
  );
}
