"use client";

import { useState } from "react";
import { yearNotes } from "@/lib/data";

/** "The year in an envelope": click the seal and a letter slides out. */
export function Envelope() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`envelope${open ? " open" : ""}`}>
      <button
        className="env-body"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="year-letter"
        data-cursor={open ? "Close" : "Open"}
      >
        <span className="env-back" aria-hidden />
        <span className="env-letter" id="year-letter">
          <span className="letter-head">
            Dear reader,
            <br />
            <span>here&apos;s 2026 so far:</span>
          </span>
          <ol>
            {yearNotes.map((n, i) => (
              <li key={i}>
                <b>{n.when}</b> {n.text}
              </li>
            ))}
          </ol>
          <span className="letter-sign">— Saadia</span>
        </span>
        <span className="env-front" aria-hidden />
        <span className="env-flap" aria-hidden />
        <span className="env-seal" aria-hidden>
          S
        </span>
        <span className="sr-only">{open ? "Close the letter" : "Open the letter"}</span>
      </button>
      <p className="env-hint" aria-hidden>
        {open ? "click again to tuck it back in" : "break the seal ↑"}
      </p>
    </div>
  );
}
