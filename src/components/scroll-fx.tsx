"use client";

import { useEffect } from "react";

/** Writes scroll progress to a CSS variable for the top progress bar and the spinning badge. */
export function ScrollFx() {
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty("--scroll", p.toFixed(4));
      document.documentElement.style.setProperty("--scroll-px", `${window.scrollY}`);
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);

  return <div className="progress" aria-hidden />;
}
