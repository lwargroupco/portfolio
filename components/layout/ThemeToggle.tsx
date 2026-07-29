"use client";

import { useEffect, useState } from "react";

const THEME_STORAGE_KEY = "lwar-theme";

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      className="h-[18px] w-[18px]"
    >
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12H5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-[18px] w-[18px]"
    >
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    // Reads theme set by the blocking init script in layout.tsx. Must happen
    // post-mount (not in a lazy useState initializer) so the client's first
    // render matches the server's null-state markup and avoids a hydration
    // mismatch; the icon swaps in a beat later once this resolves.
    const current = document.documentElement.getAttribute("data-theme");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === null
          ? "Toggle color theme"
          : theme === "dark"
            ? "Switch to light theme"
            : "Switch to dark theme"
      }
      className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-green-950/15 bg-white text-[#075031] transition hover:bg-[#f1f7ee] dark:border-white/15 dark:bg-white/5 dark:text-emerald-50 dark:hover:bg-white/10 ${className}`}
    >
      <span className={theme === null ? "invisible" : ""}>
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}
