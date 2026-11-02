"use client";

import { useEffect, useRef, useState } from "react";

/** A soft follower cursor that grows into a label over anything with data-cursor. Off on touch screens. */
export function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setOn(true);
    let x = -100,
      y = -100,
      cx = -100,
      cy = -100,
      raf = 0;
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const t = (e.target as HTMLElement)?.closest?.("[data-cursor]") as HTMLElement | null;
      setLabel(t ? t.dataset.cursor || "" : null);
    };
    const tick = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      if (ring.current) ring.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    const leave = () => {
      x = -100;
      y = -100;
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!on) return null;
  return (
    <div className="cursor" ref={ring} aria-hidden>
      <span className={`cursor-dot${label !== null ? " big" : ""}`}>{label}</span>
    </div>
  );
}
