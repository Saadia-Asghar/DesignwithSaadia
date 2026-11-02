"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Mode = "product" | "visual";
const Ctx = createContext<{ mode: Mode; setMode: (m: Mode) => void }>({ mode: "product", setMode: () => {} });

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("product");
  useEffect(() => {
    document.documentElement.dataset.mode = mode;
  }, [mode]);
  return <Ctx.Provider value={{ mode, setMode }}>{children}</Ctx.Provider>;
}

/** "Choose your avatar": the visitor picks which side of the work they came for, and that section moves first. */
export function AvatarPicker() {
  const { mode, setMode } = useContext(Ctx);
  const pick = (m: Mode) => {
    setMode(m);
    requestAnimationFrame(() =>
      document.getElementById(m === "product" ? "work" : "visual")?.scrollIntoView({ behavior: "smooth" }),
    );
  };
  return (
    <div className="avatar">
      <span className="avatar-q">
        CHOOSE YOUR AVATAR <small>(what are you hiring for?)</small>
      </span>
      <div className="avatar-row" role="group" aria-label="Choose which work to see first">
        <button className="pixel-btn" aria-pressed={mode === "product"} onClick={() => pick("product")} data-cursor="Go">
          <span aria-hidden>▶</span> PRODUCT DESIGNER
        </button>
        <button className="pixel-btn" aria-pressed={mode === "visual"} onClick={() => pick("visual")} data-cursor="Go">
          <span aria-hidden>▶</span> VISUAL DESIGNER
        </button>
      </div>
    </div>
  );
}

/** Puts the chosen section first. */
export function ModeOrder({ product, visual }: { product: React.ReactNode; visual: React.ReactNode }) {
  const { mode } = useContext(Ctx);
  return (
    <div className="mode-order">
      <div style={{ order: mode === "product" ? 0 : 1 }}>{product}</div>
      <div style={{ order: mode === "product" ? 1 : 0 }}>{visual}</div>
    </div>
  );
}
