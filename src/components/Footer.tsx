import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-sm text-faint">
          ndujekwu<span className="text-violet">.</span> · built with Next.js &amp; Tailwind
        </p>
        <p className="text-sm text-faint">
          © {new Date().getFullYear()} {profile.fullName}
        </p>
      </div>
    </footer>
  );
}
