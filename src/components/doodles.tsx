import { awards } from "@/lib/data";

/** A hand-drawn underline that draws itself when its parent `.reveal` comes into view. */
export function Scribble({ color = "var(--t-yellow)", variant = 0 }: { color?: string; variant?: 0 | 1 | 2 }) {
  const d = [
    "M4 14 C 40 4, 90 6, 130 10 S 190 16, 196 8",
    "M4 10 C 50 18, 100 2, 150 10 C 170 13, 186 12, 196 9",
    "M6 12 C 30 6, 60 16, 98 10 C 132 4, 166 14, 194 8 M30 18 C 80 14, 130 16, 170 15",
  ][variant];
  return (
    <svg className="scribble" viewBox="0 0 200 22" preserveAspectRatio="none" aria-hidden>
      <path d={d} pathLength={1} style={{ stroke: color }} />
    </svg>
  );
}

/** A waving hand doodle. */
export function WaveHand() {
  return (
    <svg className="wave-hand" viewBox="0 0 48 48" aria-hidden>
      <path d="M16 40 C 8 34, 6 26, 10 22 L 14 18 C 15 16, 18 17, 18 19 L 17 22 L 22 12 C 23 10, 26 11, 26 13 L 23 21 L 28 9 C 29 7, 32 8, 32 10 L 28 22 L 32 13 C 33 11, 36 12, 36 14 L 31 27 C 36 23, 40 25, 38 28 C 34 33, 30 40, 24 42 C 21 43, 18 42, 16 40 Z" />
      <path d="M6 12 C 4 9, 4 6, 6 4" className="wave-line" />
      <path d="M40 4 C 43 6, 44 9, 43 12" className="wave-line" />
    </svg>
  );
}

const tones = ["s-blue", "s-yellow", "s-green", "s-red", "s-white"];

/** A strip of laptop stickers that slowly slides past. */
export function StickerStrip() {
  const list = [...awards, "Figma", "Canva", "Islamabad", "GIKI"];
  return (
    <div className="stickers" aria-label="Highlights">
      <div className="stickers-track">
        {[0, 1].map((k) => (
          <div key={k} className="stickers-set" aria-hidden={k === 1}>
            {list.map((a, i) => (
              <span
                key={a}
                className={`sticker ${tones[i % tones.length]}`}
                style={{ ["--r" as string]: `${((i * 53) % 11) - 5}deg` }}
              >
                {i % 4 === 0 && <i aria-hidden>★</i>}
                {a}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Little "now playing" bars. */
export function Equalizer() {
  return (
    <span className="eq" aria-hidden>
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}
