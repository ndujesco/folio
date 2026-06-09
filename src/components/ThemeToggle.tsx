"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));

    // Follow the OS theme live, but only while the user hasn't picked one.
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem("theme")) return;
      document.documentElement.classList.toggle("dark", e.matches);
      setIsDark(e.matches);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted ? (isDark ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
      title={mounted ? (isDark ? "Light mode" : "Dark mode") : "Toggle theme"}
      className={`relative grid h-10 w-10 place-items-center rounded-full border border-border bg-panel/60 text-dim transition-colors hover:border-violet/60 hover:text-ink ${className}`}
    >
      {/* Render both icons; reveal one once mounted to avoid hydration flash */}
      <Sun
        size={18}
        className={`absolute transition-all duration-300 ${
          mounted && isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
      />
      <Moon
        size={18}
        className={`absolute transition-all duration-300 ${
          mounted && !isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
        }`}
      />
    </button>
  );
}
