"use client";

import { useRef, useState } from "react";
import { asset } from "@/lib/data";

type Piece = {
  id: string;
  src: string;
  label: string;
  /** position in % of the desk, rotation in deg, width in % of the desk */
  x: number;
  y: number;
  r: number;
  w: number;
  ratio: string;
};

const pieces: Piece[] = [
  { id: "urog", src: "/work/urog-ec.webp", label: "UROG council", x: 50, y: 2, r: 6, w: 50, ratio: "1600/711" },
  { id: "wic", src: "/work/acm-wic.webp", label: "ACM · WiC", x: 2, y: 58, r: -4, w: 46, ratio: "1600/670" },
  { id: "mlsa", src: "/work/mlsa-club.webp", label: "MLSA poster", x: 4, y: 0, r: -8, w: 32, ratio: "1024/1447" },
  { id: "premed", src: "/work/premed-edu-2.webp", label: "PreMed deck", x: 52, y: 60, r: 3, w: 44, ratio: "1538/865" },
  { id: "vyro", src: "/work/vyrothon.webp", label: "Vyrothon · 1st", x: 36, y: 24, r: 4, w: 28, ratio: "515/607" },
];

export function Desk() {
  const desk = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(() => Object.fromEntries(pieces.map((p) => [p.id, { x: p.x, y: p.y }])));
  const [order, setOrder] = useState(pieces.map((p) => p.id));
  const [dragging, setDragging] = useState<string | null>(null);
  const [moved, setMoved] = useState(false);
  const drag = useRef<{ id: string; dx: number; dy: number } | null>(null);

  const onDown = (e: React.PointerEvent<HTMLDivElement>, id: string) => {
    const el = e.currentTarget;
    el.setPointerCapture(e.pointerId);
    const rect = desk.current!.getBoundingClientRect();
    const cur = pos[id];
    drag.current = {
      id,
      dx: e.clientX - (rect.left + (cur.x / 100) * rect.width),
      dy: e.clientY - (rect.top + (cur.y / 100) * rect.height),
    };
    setDragging(id);
    setOrder((o) => [...o.filter((x) => x !== id), id]);
  };

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    const rect = desk.current!.getBoundingClientRect();
    const { id, dx, dy } = drag.current;
    const x = ((e.clientX - dx - rect.left) / rect.width) * 100;
    const y = ((e.clientY - dy - rect.top) / rect.height) * 100;
    setPos((p) => ({ ...p, [id]: { x: Math.max(-12, Math.min(88, x)), y: Math.max(-8, Math.min(88, y)) } }));
    if (!moved) setMoved(true);
  };

  const onUp = () => {
    drag.current = null;
    setDragging(null);
  };

  return (
    <div className="desk" ref={desk} data-cursor="Drag">
      {pieces.map((p) => (
        <div
          key={p.id}
          className={`piece${dragging === p.id ? " lifted" : ""}`}
          style={{
            left: `${pos[p.id].x}%`,
            top: `${pos[p.id].y}%`,
            width: `${p.w}%`,
            aspectRatio: p.ratio,
            zIndex: order.indexOf(p.id) + 1,
            ["--r" as string]: `${p.r}deg`,
          }}
          onPointerDown={(e) => onDown(e, p.id)}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
        >
          <img src={asset(p.src)} alt={p.label} draggable={false} />
          <span className="piece-tag">{p.label}</span>
        </div>
      ))}
      <span className={`desk-hint${moved ? " gone" : ""}`} aria-hidden>
        ↖ drag the work around
      </span>
    </div>
  );
}
