"use client";

import { useEffect } from "react";
import { play } from "@/lib/sound";

/**
 * Page-wide playful effects:
 *  - a pencil that draws across the top as you scroll,
 *  - doodle sparkles wherever you click,
 *  - a gentle 3D tilt on project cards that follows the pointer.
 */
export function Fx() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const root = document.documentElement;

    // ---- pencil progress ----
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const max = root.scrollHeight - window.innerHeight;
        root.style.setProperty("--progress", (max > 0 ? window.scrollY / max : 0).toFixed(4));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // ---- click sparkles ----
    const colors = ["#2b6cb0", "#e6b94f", "#2f855a", "#c4473a"];
    const onDown = (e: PointerEvent) => {
      const t = e.target as HTMLElement;
      // sounds (only when the visitor has turned sound on)
      if (t.closest(".lamp-hit")) play("switch");
      else if (t.closest(".drawer-hit")) play("drawer");
      else if (t.closest("a, button") && !t.closest(".sound")) play("pop");
      else play("scribble");
      if (reduce) return;
      if (t.closest("input, textarea, .lightbox")) return;
      const burst = document.createElement("span");
      burst.className = "spark";
      burst.style.left = `${e.clientX}px`;
      burst.style.top = `${e.clientY}px`;
      const c = colors[Math.floor(Math.random() * colors.length)];
      burst.innerHTML = `<svg viewBox="-30 -30 60 60" aria-hidden="true">${Array.from({ length: 7 })
        .map((_, i) => {
          const a = (i / 7) * Math.PI * 2 + Math.random() * 0.4;
          const x1 = Math.cos(a) * 8;
          const y1 = Math.sin(a) * 8;
          const x2 = Math.cos(a) * 20;
          const y2 = Math.sin(a) * 20;
          return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${c}" />`;
        })
        .join("")}</svg>`;
      document.body.appendChild(burst);
      setTimeout(() => burst.remove(), 650);
    };
    window.addEventListener("pointerdown", onDown);

    // ---- card tilt (delegated, so it works after client-side navigation) ----
    let last: HTMLElement | null = null;
    const reset = (el: HTMLElement | null) => {
      if (!el) return;
      el.style.setProperty("--ry", "0deg");
      el.style.setProperty("--rx", "0deg");
    };
    const onMove = (e: PointerEvent) => {
      if (!fine || reduce) return;
      const el = (e.target as HTMLElement)?.closest?.(".card") as HTMLElement | null;
      if (el !== last) {
        reset(last);
        last = el;
      }
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--ry", `${(x * 7).toFixed(2)}deg`);
      el.style.setProperty("--rx", `${(-y * 7).toFixed(2)}deg`);
      el.style.setProperty("--gx", `${((x + 0.5) * 100).toFixed(1)}%`);
      el.style.setProperty("--gy", `${((y + 0.5) * 100).toFixed(1)}%`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    // ---- hover ticks ----
    let lastHover: Element | null = null;
    let lastTick = 0;
    const onOver = (e: PointerEvent) => {
      const el = (e.target as HTMLElement)?.closest?.(".tile-app, .card, .tile, .sticker, .now-card, .chip, .pillnav a");
      if (el && el !== lastHover && performance.now() - lastTick > 70) {
        lastTick = performance.now();
        play("tick");
      }
      lastHover = el;
    };
    window.addEventListener("pointerover", onOver, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
    };
  }, []);

  return (
    <div className="pencil" aria-hidden>
      <span className="pencil-line" />
      <span className="pencil-tip">
        <svg viewBox="0 0 60 16">
          <path d="M0 2 H42 L58 8 L42 14 H0 Z" className="p-body" />
          <path d="M42 2 L58 8 L42 14 Z" className="p-wood" />
          <path d="M52 5.8 L58 8 L52 10.2 Z" className="p-lead" />
          <path d="M0 2 H8 V14 H0 Z" className="p-eraser" />
        </svg>
      </span>
    </div>
  );
}
