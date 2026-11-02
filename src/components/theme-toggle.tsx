"use client";

import { useEffect, useState } from "react";

/** Light / dark switch. Remembers the choice in this browser. */
export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    try {
      setDark(localStorage.getItem("theme") === "dark");
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  }, [dark]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      data-cursor={dark ? "Lights on" : "Lights off"}
    >
      <span className="knob" aria-hidden>
        {dark ? "☾" : "☀"}
      </span>
      <span className="theme-note" aria-hidden>
        dark mode? try it!
      </span>
    </button>
  );
}
