"use client";

import { useEffect, useState } from "react";
import { toDateString } from "@/lib/metno";
import { getMoonTimes } from "@/lib/moon";

type MoonTimesState = {
  rise: string;
  set: string;
  loading: boolean;
  source: "metno" | "fallback";
};

export function useMoonTimes(date: Date): MoonTimesState {
  const dateKey = toDateString(date);
  const fallback = getMoonTimes(date);

  const [state, setState] = useState<MoonTimesState>({
    rise: fallback.rise,
    set: fallback.set,
    loading: true,
    source: "fallback",
  });

  useEffect(() => {
    let cancelled = false;
    const localFallback = getMoonTimes(
      new Date(
        Number(dateKey.slice(0, 4)),
        Number(dateKey.slice(5, 7)) - 1,
        Number(dateKey.slice(8, 10)),
        12,
        0,
        0,
      ),
    );

    setState({
      rise: localFallback.rise,
      set: localFallback.set,
      loading: true,
      source: "fallback",
    });

    fetch(`/api/moon-times?date=${dateKey}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled) return;
        if (data?.rise && data?.set) {
          setState({
            rise: data.rise,
            set: data.set,
            loading: false,
            source: data.source === "metno" ? "metno" : "fallback",
          });
        } else {
          setState({
            rise: localFallback.rise,
            set: localFallback.set,
            loading: false,
            source: "fallback",
          });
        }
      })
      .catch(() => {
        if (!cancelled) {
          setState({
            rise: localFallback.rise,
            set: localFallback.set,
            loading: false,
            source: "fallback",
          });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [dateKey]);

  return state;
}
