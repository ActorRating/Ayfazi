"use client";

import { useState } from "react";
import {
  formatTurkishDate,
  isSameDay,
  monthNames,
  weekdayNames,
} from "@/lib/data/moon-phases";
import { getMoonInfo } from "@/lib/moon";
import { MoonDetailCard, TodayLabel } from "./MoonDetailCard";
import { MoonIcon } from "./MoonIcon";

type ViewMode = "days" | "phases";

function getMonthGrid(year: number, month: number) {
  const first = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = (first.getDay() + 6) % 7;
  const cells: (number | null)[] = Array.from(
    { length: startOffset + daysInMonth },
    (_, i) => (i < startOffset ? null : i - startOffset + 1),
  );
  return { daysInMonth, cells };
}

export function MoonCalendar() {
  const [today] = useState(() => new Date());
  const [viewMonth, setViewMonth] = useState(() => today.getMonth());
  const [viewYear, setViewYear] = useState(() => today.getFullYear());
  const [selected, setSelected] = useState(() => today);
  const [viewMode, setViewMode] = useState<ViewMode>("days");

  const { cells } = getMonthGrid(viewYear, viewMonth);

  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  }

  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  }

  return (
    <section
      id="ay-takvimi"
      className="mx-auto w-full min-w-0 max-w-lg scroll-mt-28 sm:scroll-mt-24"
    >
      <MoonDetailCard date={today} label={TodayLabel(today)} large />

      <div className="mt-8 sm:mt-10">
        <div className="mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-center text-lg font-medium text-white sm:text-left">
            Takvim
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={prevMonth}
              className="flex h-10 w-10 items-center justify-center rounded-full text-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-white active:bg-white/10"
              aria-label="Önceki ay"
            >
              ‹
            </button>
            <span className="min-w-[140px] text-center text-sm text-slate-300 sm:min-w-[150px]">
              {monthNames[viewMonth]} {viewYear}
            </span>
            <button
              type="button"
              onClick={nextMonth}
              className="flex h-10 w-10 items-center justify-center rounded-full text-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-white active:bg-white/10"
              aria-label="Sonraki ay"
            >
              ›
            </button>
          </div>
        </div>

        <div className="mb-4 flex justify-center gap-6 text-sm sm:justify-start">
          <button
            type="button"
            onClick={() => setViewMode("days")}
            className={`min-h-10 px-2 ${
              viewMode === "days"
                ? "font-medium text-white"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            Günler
          </button>
          <button
            type="button"
            onClick={() => setViewMode("phases")}
            className={`min-h-10 px-2 ${
              viewMode === "phases"
                ? "font-medium text-white"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            Evreler
          </button>
        </div>

        <div className="mb-1 grid grid-cols-7 gap-0.5 sm:gap-1">
          {weekdayNames.map((d) => (
            <div
              key={d}
              className="py-1 text-center text-[10px] text-slate-500 sm:py-2 sm:text-xs"
            >
              {d}
            </div>
          ))}
        </div>

        <div className="grid w-full min-w-0 grid-cols-7 gap-px sm:gap-1">
          {cells.map((day, i) => {
            if (day === null) {
              return <div key={`e-${i}`} className="aspect-square" />;
            }

            const date = new Date(viewYear, viewMonth, day);
            const info = getMoonInfo(date);
            const isToday = isSameDay(date, today);
            const isSelected = isSameDay(date, selected);

            return (
              <button
                key={day}
                type="button"
                onClick={() => setSelected(date)}
                className={[
                  "flex aspect-square min-w-0 flex-col items-center justify-center rounded-md transition-colors sm:rounded-lg",
                  isSelected
                    ? "bg-indigo-500/25 ring-1 ring-indigo-400/40"
                    : "hover:bg-white/[0.04] active:bg-white/[0.06]",
                  isToday && !isSelected ? "ring-1 ring-amber-400/40" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-label={`${day} ${monthNames[viewMonth]}, ${info.phaseName}`}
                aria-pressed={isSelected}
              >
                {viewMode === "days" ? (
                  <>
                    <span
                      className={`text-xs sm:text-sm ${isSelected || isToday ? "font-medium text-white" : "text-slate-300"}`}
                    >
                      {day}
                    </span>
                    <MoonIcon
                      illumination={info.illumination}
                      waxing={info.waxing}
                      size={22}
                      className="sm:hidden"
                    />
                    <MoonIcon
                      illumination={info.illumination}
                      waxing={info.waxing}
                      size={28}
                      className="hidden sm:block"
                    />
                  </>
                ) : (
                  <>
                    <MoonIcon
                      illumination={info.illumination}
                      waxing={info.waxing}
                      size={32}
                      className="sm:hidden"
                    />
                    <MoonIcon
                      illumination={info.illumination}
                      waxing={info.waxing}
                      size={40}
                      className="hidden sm:block"
                    />
                  </>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 border-t border-white/5 pt-6 sm:mt-8 sm:pt-8">
        <MoonDetailCard date={selected} label={formatTurkishDate(selected)} />
      </div>
    </section>
  );
}
