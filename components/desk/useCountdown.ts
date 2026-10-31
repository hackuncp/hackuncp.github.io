"use client";

import { useEffect, useState } from "react";

/** Days and hours until `iso`, refreshed every 30s. Null before mount, without a date, or once it has passed. */
export function useCountdown(iso: string | null) {
  const [ms, setMs] = useState<number | null>(null);

  useEffect(() => {
    if (!iso) return;
    const target = new Date(iso).getTime();
    const tick = () => setMs(target - Date.now());
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, [iso]);

  if (ms === null || ms <= 0) return null;
  return { days: Math.floor(ms / 86_400_000), hours: Math.floor((ms % 86_400_000) / 3_600_000) };
}
