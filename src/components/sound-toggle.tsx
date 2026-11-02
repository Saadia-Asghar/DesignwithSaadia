"use client";

import { useEffect, useState } from "react";
import { loadSoundPref, onSoundChange, setSound } from "@/lib/sound";

/** A little speaker doodle that turns the site's sounds on and off. */
export function SoundToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    setOn(loadSoundPref());
    return onSoundChange(setOn);
  }, []);

  return (
    <button
      className={`sound${on ? " on" : ""}`}
      onClick={() => setSound(!on)}
      aria-pressed={on}
      aria-label={on ? "Turn sound off" : "Turn sound on"}
    >
      <svg viewBox="0 0 32 24" aria-hidden>
        <path d="M3 9h5l7-5v16l-7-5H3z" className="spk" />
        {on ? (
          <>
            <path d="M19 8c2 2 2 6 0 8" className="wave w1" />
            <path d="M23 5c4 4 4 10 0 14" className="wave w2" />
          </>
        ) : (
          <path d="M20 8l7 8M27 8l-7 8" className="mute" />
        )}
      </svg>
      <span className="hand">{on ? "sound on" : "sound off"}</span>
    </button>
  );
}
