"use client";

import { useState } from "react";
import { getMoonInfo, getUpcomingPhaseEvents } from "@/lib/moon";
import {
  getDailyAdvice,
  phaseContent,
  phaseTeasers,
} from "@/lib/data/moon-content";
import { formatTurkishShort } from "@/lib/data/moon-phases";

export function MoonInsights() {
  const [today] = useState(() => new Date());
  const info = getMoonInfo(today);
  const content = phaseContent[info.phaseName];
  const advice = getDailyAdvice(today);
  const upcoming = getUpcomingPhaseEvents(today, 7);

  return (
    <div className="flex flex-col gap-6">
      {/* Today's moon situation */}
      <section
        id="yorumlar"
        className="scroll-mt-28 rounded-2xl border border-indigo-400/10 bg-white/[0.03] px-5 py-7 sm:px-8 sm:py-8"
      >
        <p className="text-xs font-medium uppercase tracking-widest text-indigo-300/60">
          Bugün
        </p>
        <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
          {content.headline}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base sm:leading-relaxed">
          {content.situation}
        </p>

        <div className="mt-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-slate-500">
            Bugün yapabileceklerin
          </p>
          <ul className="flex flex-col gap-3">
            {content.actions.map((action, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-indigo-400/20 text-[10px] text-indigo-300">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-slate-300">
                  {action}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Daily advice */}
      <section className="rounded-2xl border border-amber-400/10 bg-white/[0.02] px-5 py-6 sm:px-8">
        <p className="text-xs font-medium uppercase tracking-widest text-amber-300/60">
          Günün tavsiyesi
        </p>
        <p className="mt-3 text-base leading-relaxed text-slate-200 sm:text-lg sm:leading-relaxed">
          &ldquo;{advice}&rdquo;
        </p>
      </section>

      {/* Next week preview */}
      <section className="rounded-2xl border border-purple-400/10 bg-white/[0.02] px-5 py-6 sm:px-8">
        <p className="text-xs font-medium uppercase tracking-widest text-purple-300/60">
          Önümüzdeki hafta
        </p>
        <h2 className="mt-2 text-base font-semibold text-white sm:text-lg">
          Gökyüzünde ne olacak?
        </h2>

        {upcoming.length === 0 ? (
          <p className="mt-4 text-sm text-slate-500">
            Bu hafta evre değişimi yok — {info.phaseName} sürüyor.
          </p>
        ) : (
          <div className="mt-5 flex flex-col gap-4">
            {upcoming.map((event) => {
              const teaser = phaseTeasers[event.phaseName] ?? "";
              const label =
                event.daysFromNow === 1
                  ? "Yarın"
                  : `${event.daysFromNow} gün sonra`;
              return (
                <div
                  key={event.date.toISOString()}
                  className="flex items-start gap-4 rounded-xl bg-white/[0.02] p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-purple-400/20 text-xl">
                    {event.emoji}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-medium text-white capitalize">
                        {event.phaseName}
                      </span>
                      <span className="rounded-full border border-white/5 px-2 py-0.5 text-[10px] text-slate-500">
                        {formatTurkishShort(event.date)} · {label}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                      {teaser}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
