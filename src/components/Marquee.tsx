import { skillTicker } from "@/data/content";

export default function Marquee() {
  const row = [...skillTicker, ...skillTicker];
  return (
    <div className="relative flex overflow-hidden border-y border-border bg-bg-soft py-5">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-soft to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-soft to-transparent" />
      <ul className="marquee flex shrink-0 items-center gap-8 pr-8">
        {row.map((skill, i) => (
          <li
            key={`${skill}-${i}`}
            className="flex items-center gap-8 font-mono text-lg font-medium text-faint"
          >
            {skill}
            <span className="text-violet">/</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
