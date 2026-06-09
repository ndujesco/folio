import { Link2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./BrandIcons";
import { socials } from "@/data/content";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: XIcon,
  link: Link2,
} as const;

export default function SocialLinks({ size = 20 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      {socials.map((s) => {
        const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Link2;
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            title={`${s.label} · ${s.handle}`}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-panel text-dim transition-all hover:-translate-y-0.5 hover:border-violet/60 hover:text-ink"
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}
