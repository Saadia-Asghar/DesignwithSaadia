"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { imageSize } from "@/lib/image-sizes";
import { asset, chapterLabels, moreTemplates, visuals, type Chapter } from "@/lib/data";

type Filter = "all" | Chapter;
const order: Chapter[] = ["mlsa", "urog", "acm", "premed"];

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(
    () => visuals.filter((v) => v.image && (filter === "all" || v.chapter === filter)),
    [filter],
  );
  const extras = moreTemplates.filter((v) => filter === "all" || v.chapter === filter);

  const count = (c: Filter) => visuals.filter((v) => v.image && (c === "all" || v.chapter === c)).length;

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (d: number) => setActive((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active, close, step]);

  const current = active !== null ? items[active] : null;

  return (
    <>
      <div className="filters" role="group" aria-label="Filter by team">
        {(["all", ...order] as Filter[]).map((f) => (
          <button key={f} className="chip" aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f === "all" ? "Everything" : chapterLabels[f].short}
            <small>{count(f)}</small>
          </button>
        ))}
      </div>

      <div className="masonry">
        {items.map((v, i) => (
          <button
            key={`${filter}-${v.id}`}
            className="tile"
            style={{ animationDelay: `${Math.min(i, 10) * 40}ms` }}
            onClick={() => setActive(i)}
            aria-label={`Open ${v.title}, ${v.subtitle}`}
          >
            <img
              src={asset(v.image!)}
              alt={`${v.title}: ${v.subtitle}`}
              width={imageSize[v.image!]?.[0]}
              height={imageSize[v.image!]?.[1]}
              loading="lazy"
              decoding="async"
            />
            <span className="tile-tag">{chapterLabels[v.chapter].short}</span>
            <span className="tile-cap">
              <b>{v.title}</b>
              <span>{v.subtitle}</span>
            </span>
          </button>
        ))}
      </div>

      {extras.length > 0 && (
        <div className="more-templates">
          <h3>More templates in Canva</h3>
          <div className="link-grid">
            {extras.map((v) => (
              <a key={v.id} className="link-card" href={v.href} target="_blank" rel="noreferrer">
                <span>
                  <b>{v.title}</b>
                  <span>
                    {chapterLabels[v.chapter].short} · {v.subtitle}
                  </span>
                </span>
                <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.title} onClick={close}>
          <div className="lb-top" onClick={(e) => e.stopPropagation()}>
            <div className="lb-title">
              <b>{current.title}</b>
              <span>
                {chapterLabels[current.chapter].long} · {current.subtitle}
              </span>
            </div>
            <button className="icon-btn" onClick={close} aria-label="Close" autoFocus>
              ✕
            </button>
          </div>
          <div className="lb-stage">
            <img
              src={asset(current.image!)}
              alt={`${current.title}: ${current.subtitle}`}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="lb-bottom" onClick={(e) => e.stopPropagation()}>
            <div className="lb-nav">
              <button className="icon-btn" onClick={() => step(-1)} aria-label="Previous">
                ←
              </button>
              <button className="icon-btn" onClick={() => step(1)} aria-label="Next">
                →
              </button>
              <span style={{ alignSelf: "center", fontSize: 14, color: "#b7aea4", marginLeft: 6 }}>
                {active! + 1} / {items.length}
              </span>
            </div>
            {current.href && (
              <a className="btn btn-light" href={current.href} target="_blank" rel="noreferrer">
                Open in Canva <span className="arrow">↗</span>
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}
