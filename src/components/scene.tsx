"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { asset, person } from "@/lib/data";

/* Doodle faces for the four screen tiles. Drawn in white strokes on a 60×60 box. */
const faces = {
  work: (
    <svg viewBox="0 0 60 40" aria-hidden>
      <rect x="8" y="10" width="16" height="11" rx="2" />
      <rect x="36" y="10" width="16" height="11" rx="2" />
      <path d="M24 15h12" />
      <path d="M22 31c5 3 11 3 16 0" />
    </svg>
  ),
  play: (
    <svg viewBox="0 0 60 40" aria-hidden>
      <path d="M12 16l4-5 4 5" />
      <path d="M40 16l4-5 4 5" />
      <path d="M20 26c6 8 14 8 20 0" />
      <circle cx="46" cy="30" r="2" />
    </svg>
  ),
  me: (
    <svg viewBox="0 0 60 40" aria-hidden>
      <path d="M12 15h8" />
      <circle cx="44" cy="15" r="2.5" />
      <path d="M24 29c4 3 8 3 12 0" />
      <path d="M8 22l-4 2M52 22l4 2" />
    </svg>
  ),
  resume: (
    <svg viewBox="0 0 60 40" aria-hidden>
      <circle cx="13" cy="12" r="2.5" />
      <path d="M22 12h26M13 21h35M13 30h24" />
    </svg>
  ),
};

const tiles = [
  { key: "work", label: "Work", href: "/#work", color: "var(--t-blue)" },
  { key: "play", label: "Play", href: "/play/", color: "var(--t-yellow)" },
  { key: "me", label: "Me", href: "/about/", color: "var(--t-green)" },
  { key: "resume", label: "Résumé", href: person.resume, color: "var(--t-red)", external: true },
] as const;

export function Scene() {
  const [dark, setDark] = useState(false);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);

  const toggleLamp = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <div className="scene">
      <svg className="scene-art" viewBox="0 0 640 430" aria-hidden>
        {/* light cone when the lamp is on */}
        <path className="cone" d="M572 206 L520 380 L680 380 L628 206 Z" />

        {/* floor */}
        <path className="ln" d="M-40 381 C 120 379, 300 383, 470 380 S 640 381, 700 380" />

        {/* plant */}
        <path className="ln fill" d="M22 338 L74 338 L66 380 L30 380 Z" />
        <path className="ln" d="M48 338 C 46 310, 30 296, 18 292" />
        <path className="ln" d="M48 338 C 52 306, 70 290, 84 288" />
        <path className="ln" d="M48 338 C 48 300, 48 284, 50 268" />
        <path className="ln leaf" d="M18 292 C 26 284, 38 288, 36 300 C 26 302, 20 298, 18 292 Z" />
        <path className="ln leaf" d="M84 288 C 78 280, 64 284, 66 296 C 76 298, 82 294, 84 288 Z" />
        <path className="ln leaf" d="M50 268 C 42 262, 40 276, 48 284 C 56 278, 56 270, 50 268 Z" />

        {/* desk */}
        <path className="ln fill" d="M150 300 L560 300 L560 312 L150 312 Z" />
        <path className="ln" d="M168 312 L168 380" />
        <path className="ln fill" d="M456 312 L548 312 L548 380 L456 380 Z" />

        {/* monitor stand */}
        <path className="ln fill" d="M372 262 L390 262 L392 296 L370 296 Z" />
        <path className="ln fill" d="M338 296 L424 296 L428 300 L334 300 Z" />

        {/* monitor */}
        <rect className="ln screen" x="160" y="12" width="440" height="250" rx="14" />

        {/* chai on the desk */}
        <path className="ln fill" d="M498 274 L526 274 L523 298 L501 298 Z" />
        <path className="ln" d="M526 280 C 536 280, 536 292, 524 292" />
        <path className="ln steam s1" d="M506 266 C 502 258, 510 254, 506 246" />
        <path className="ln steam s2" d="M516 266 C 512 258, 520 254, 516 246" />

        {/* chair + person, seen from behind */}
        <path className="ln" d="M176 344 L176 370" />
        <path className="ln" d="M150 376 L202 376 M176 370 L156 380 M176 370 L196 380" />
        <path className="ln skin" d="M126 300 C 128 262, 150 246, 176 246 C 202 246, 224 262, 226 300 Z" />
        <circle className="ln skin" cx="176" cy="218" r="26" />
        <path className="ln hair" d="M150 214 C 150 192, 166 186, 178 188 C 196 188, 204 202, 202 216 C 196 206, 184 200, 170 204 C 160 206, 154 210, 150 214 Z" />
        <circle className="ln hair" cx="178" cy="184" r="11" />
        <path className="ln fill" d="M118 272 C 118 258, 130 252, 176 252 C 222 252, 234 258, 234 272 L 234 330 C 234 342, 226 346, 176 346 C 126 346, 118 342, 118 330 Z" />
        <path className="ln" d="M150 268 L150 330 M202 268 L202 330" />

        {/* lamp */}
        <path className="ln" d="M600 206 L600 378" />
        <path className="ln fill" d="M582 378 C 582 370, 618 370, 618 378 Z" />
        <path className="ln shade" d="M574 206 L626 206 L614 168 L586 168 Z" />
      </svg>

      {/* the four app tiles on the monitor */}
      <div className="screen-tiles">
        {tiles.map((t) =>
          "external" in t ? (
            <a key={t.key} className="tile-app" href={asset(t.href)} target="_blank" rel="noreferrer" style={{ background: t.color }}>
              {faces[t.key]}
              <span>{t.label}</span>
            </a>
          ) : (
            <Link key={t.key} className="tile-app" href={t.href} style={{ background: t.color }}>
              {faces[t.key]}
              <span>{t.label}</span>
            </Link>
          ),
        )}
      </div>

      {/* lamp switch */}
      <button
        className="lamp-hit"
        onClick={toggleLamp}
        aria-pressed={dark}
        aria-label={dark ? "Turn the lamp on: switch to light mode" : "Turn the lamp off: switch to dark mode"}
      />
      <span className="note note-lamp" aria-hidden>
        {dark ? "lights on?" : "dark mode?"}
      </span>

      {/* the drawer */}
      <button
        className={`drawer-hit${drawer ? " open" : ""}`}
        onClick={() => setDrawer((d) => !d)}
        aria-expanded={drawer}
        aria-controls="drawer-note"
      >
        <span className="drawer-front">
          <span className="drawer-knob" />
        </span>
        <span className="sr-only">{drawer ? "Close the drawer" : "Open the drawer"}</span>
      </button>
      <span className="note note-drawer" aria-hidden>
        open this!
      </span>
      <div id="drawer-note" className={`drawer-note${drawer ? " show" : ""}`} role="note">
        <b>You found the drawer.</b>
        <span>
          Inside: 25 Canva templates and 5 Figma files. The posters live in <Link href="/play/">Play</Link>.
        </span>
      </div>
    </div>
  );
}
