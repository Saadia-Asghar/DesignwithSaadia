"use client";

import { useState } from "react";
import { awards } from "@/lib/data";

/** A swinging all-access event pass on a lanyard. Click (or press Enter) to turn it over. */
export function Pass() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="pass-rig">
      <div className="lanyard" aria-hidden>
        <span>SAADIA ✦ DESIGN ✦ SAADIA ✦ DESIGN ✦ SAADIA ✦ DESIGN ✦</span>
      </div>
      <div className="pass-swing">
        <span className="clip" aria-hidden />
        <button
          className={`pass${flipped ? " flipped" : ""}`}
          onClick={() => setFlipped((f) => !f)}
          aria-pressed={flipped}
          aria-label={flipped ? "Turn the pass to the front" : "Turn the pass over to see the results"}
          data-cursor={flipped ? "Front" : "Turn over"}
        >
          {/* ---- Front ---- */}
          <span className="pass-face pass-front">
            <span className="pass-top">
              <span className="pass-brand">ALL-ACCESS</span>
              <span className="pass-serial">No. SA-2026-GIKI</span>
            </span>
            <span className="pass-photo" aria-hidden>
              <span className="pass-initial">S</span>
              <span className="pass-ring">
                <svg viewBox="0 0 100 100">
                  <defs>
                    <path id="pr" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
                  </defs>
                  <text>
                    <textPath href="#pr">PRODUCT · VISUAL · BUILDER · PRODUCT · VISUAL · BUILDER ·</textPath>
                  </text>
                </svg>
              </span>
            </span>
            <span className="pass-fields">
              <span>
                <small>Forename</small>
                <b>SAADIA</b>
              </span>
              <span>
                <small>Surname</small>
                <b>ASGHAR</b>
              </span>
              <span>
                <small>Base</small>
                <b>ISLAMABAD · GIKI</b>
              </span>
              <span>
                <small>Issued</small>
                <b>NOV &apos;26</b>
              </span>
            </span>
            <span className="pass-urdu" lang="ur" dir="rtl">
              سعدیہ اصغر
            </span>
            <span className="pass-role">PRODUCT &amp; VISUAL DESIGNER</span>
            <span className="pass-stamp" aria-hidden>
              VERIFIED
              <br />
              DESIGNER
            </span>
            <span className="pass-hint">tap to turn over ↻</span>
          </span>

          {/* ---- Back ---- */}
          <span className="pass-face pass-back">
            <span className="pass-top">
              <span className="pass-brand">ACCESS LOG</span>
              <span className="pass-serial">2025 – 2026</span>
            </span>
            <span className="pass-log">
              {awards.slice(0, 6).map((a) => (
                <span key={a}>
                  <i>✓</i> {a}
                </span>
              ))}
            </span>
            <span className="barcode" aria-hidden>
              {Array.from({ length: 38 }).map((_, i) => (
                <i key={i} style={{ width: `${(i * 7) % 4 + 1}px` }} />
              ))}
            </span>
            <span className="pass-fine">NOT A REAL TICKET · GOOD FOR ONE CONVERSATION</span>
          </span>
        </button>
      </div>
    </div>
  );
}
