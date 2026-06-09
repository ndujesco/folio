import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  title,
  kicker,
}: {
  index: string;
  title: string;
  kicker?: string;
}) {
  return (
    <Reveal>
      <div className="mb-10 sm:mb-14">
        <p className="mb-2 font-mono text-sm text-violet-bright">
          <span className="text-faint">{index}</span> {kicker}
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <div className="mt-4 h-px w-full bg-gradient-to-r from-violet/60 via-border to-transparent" />
      </div>
    </Reveal>
  );
}
