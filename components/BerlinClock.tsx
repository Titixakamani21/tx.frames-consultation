"use client";

import { useEffect, useState } from "react";

export default function BerlinClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Europe/Berlin",
      }).format(now);
      setTime(formatted);
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <span suppressHydrationWarning>
      {time ?? "--:--"} CET / BERLIN
    </span>
  );
}
