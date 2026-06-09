"use client";

import { useEffect, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { profile } from "@/data/content";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#achievements" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="font-mono text-base font-bold tracking-tight text-ink"
        >
          ndujekwu<span className="text-violet">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-dim transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
          <li>
            <a
              href={profile.resumeTech}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-violet/50 bg-violet/10 px-4 py-1.5 text-sm font-medium text-ink transition-colors hover:bg-violet/25"
            >
              <FileDown size={15} /> Résumé
            </a>
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="flex items-center gap-1.5 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg text-ink"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`overflow-hidden border-b border-border bg-bg/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base text-dim transition-colors hover:bg-panel hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={profile.resumeTech}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-violet/50 bg-violet/15 px-4 py-3 text-base font-medium text-ink"
              >
                <FileDown size={17} /> Download Résumé
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
