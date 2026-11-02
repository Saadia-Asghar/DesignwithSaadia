/**
 * Tiny sound kit, synthesised with the Web Audio API (no audio files).
 * Sound is off until the visitor turns it on; the choice is remembered in this browser.
 */

let ctx: AudioContext | null = null;
let on = false;
const listeners = new Set<(v: boolean) => void>();

export const soundOn = () => on;

export function setSound(v: boolean) {
  on = v;
  try {
    localStorage.setItem("sound", v ? "on" : "off");
  } catch {}
  listeners.forEach((l) => l(v));
  if (v) play("chime");
}

export function loadSoundPref() {
  try {
    on = localStorage.getItem("sound") === "on";
  } catch {}
  return on;
}

export function onSoundChange(fn: (v: boolean) => void) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

function ac() {
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

function tone(freq: number, to: number, dur: number, type: OscillatorType, vol: number, delay = 0) {
  const a = ac();
  if (!a) return;
  const t = a.currentTime + delay;
  const o = a.createOscillator();
  const g = a.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  o.frequency.exponentialRampToValueAtTime(Math.max(40, to), t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(a.destination);
  o.start(t);
  o.stop(t + dur + 0.02);
}

function noise(dur: number, vol: number, from: number, to: number) {
  const a = ac();
  if (!a) return;
  const t = a.currentTime;
  const buf = a.createBuffer(1, Math.floor(a.sampleRate * dur), a.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
  const src = a.createBufferSource();
  src.buffer = buf;
  const f = a.createBiquadFilter();
  f.type = "bandpass";
  f.Q.value = 1.2;
  f.frequency.setValueAtTime(from, t);
  f.frequency.exponentialRampToValueAtTime(to, t + dur);
  const g = a.createGain();
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  src.connect(f).connect(g).connect(a.destination);
  src.start(t);
}

export type Sound = "pop" | "tick" | "switch" | "drawer" | "chime" | "scribble";

export function play(kind: Sound) {
  if (!on || typeof window === "undefined") return;
  switch (kind) {
    case "pop":
      tone(620, 280, 0.09, "sine", 0.16);
      break;
    case "tick":
      tone(1500, 1200, 0.03, "triangle", 0.035);
      break;
    case "switch":
      tone(2400, 1800, 0.02, "square", 0.05);
      tone(1800, 1400, 0.025, "square", 0.04, 0.06);
      break;
    case "drawer":
      noise(0.28, 0.25, 500, 1600);
      tone(180, 120, 0.06, "sine", 0.12, 0.24);
      break;
    case "scribble":
      noise(0.12, 0.08, 2500, 4000);
      break;
    case "chime":
      [523.25, 659.25, 783.99].forEach((f, i) => tone(f, f, 0.35, "sine", 0.1, i * 0.09));
      break;
  }
}
