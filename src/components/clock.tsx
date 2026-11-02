"use client";

import { useEffect, useState } from "react";

/** Live local time in Islamabad. */
export function Clock() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Karachi",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="clock">
      <span>Islamabad, PK</span>
      <time suppressHydrationWarning>{now ?? "--:--:-- --"}</time>
    </span>
  );
}
