"use client";

import { useState } from "react";
import { getMoonInfo, getUpcomingPhaseEvents } from "@/lib/moon";
import {
  getDailyAdvice,
  phaseContent,
  phaseTeasers,
} from "@/lib/data/moon-content";
import { formatTurkishShort } from "@/lib/data/moon-phases";
import { MoonIcon } from "./MoonIcon";

export function MoonInsights() {
  const [today] = useState(() => new Date());
  const info = getMoonInfo(today);
  const content = phaseContent[info.phaseName];
  const advice = getDailyAdvice(today);
  const upcoming = getUpcomingPhaseEvents(today, 7);

  return (
    <div className="mx-auto flex w-full min-w-0 max-w-2xl flex-col gap-6">
      <section
        id="yorumlar"
        className="scroll-mt-28 rounded-2xl border border-indigo-400/10 bg-white/[0.03] px-5 py-7 text-center sm:px-8 sm:py-8"
      >
        <p className="text-xs font-medium uppercase tracking-widest text-indigo-300/60">
          Bugün
        </p>
        <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
          {content.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base sm:leading-relaxed">
          {content.situation}
        </p>

        <div className="mx-auto mt-6 max-w-xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-slate-500">
            Bugün yapabileceklerin
          </p>
          <ul className="flex flex-col gap-4">
            {content.actions.map((action, i) => (
              <li
                key={i}
                className="flex flex-col items-center gap-2 text-center"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-indigo-400/20 text-[11px] text-indigo-300">
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

      <section className="rounded-2xl border border-amber-400/10 bg-white/[0.02] px-5 py-6 text-center sm:px-8 sm:py-7">
        <p className="text-xs font-medium uppercase tracking-widest text-amber-300/60">
          Günün tavsiyesi
        </p>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg sm:leading-relaxed">
          &ldquo;{advice}&rdquo;
        </p>
      </section>

      <section className="rounded-2xl border border-purple-400/10 bg-white/[0.02] px-5 py-6 text-center sm:px-8 sm:py-7">
        <p className="text-xs font-medium uppercase tracking-widest text-purple-300/60">
          Önümüzdeki hafta
        </p>
        <h2 className="mt-2 text-base font-semibold text-white sm:text-lg">
          Gökyüzünde ne olacak?
        </h2>

        {upcoming.length === 0 ? (
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500">
            Bu hafta evre değişimi yok — {info.phaseName} sürüyor.
          </p>
        ) : (
          <div className="mx-auto mt-5 flex max-w-xl flex-col gap-4">
            {upcoming.map((event) => {
              const teaser = phaseTeasers[event.phaseName] ?? "";
              const eventInfo = getMoonInfo(event.date);
              const label =
                event.daysFromNow === 1
                  ? "Yarın"
                  : `${event.daysFromNow} gün sonra`;
              return (
                <div
                  key={event.date.toISOString()}
                  className="flex flex-col items-center rounded-xl bg-white/[0.02] px-4 py-5 text-center"
                >
                  <MoonIcon
                    illumination={eventInfo.illumination}
                    waxing={eventInfo.waxing}
                    size={72}
                    className="sm:hidden"
                  />
                  <MoonIcon
                    illumination={eventInfo.illumination}
                    waxing={eventInfo.waxing}
                    size={96}
                    className="hidden sm:block"
                  />
                  <p className="mt-3 text-sm font-medium capitalize text-white">
                    {event.phaseName}
                  </p>
                  <span className="mt-1 rounded-full border border-white/5 px-2.5 py-0.5 text-[10px] text-slate-500">
                    {formatTurkishShort(event.date)} · {label}
                  </span>
                  <p className="mt-3 text-xs leading-relaxed text-slate-400">
                    {teaser}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
