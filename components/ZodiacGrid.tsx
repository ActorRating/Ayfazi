"use client";

import { useEffect, useState } from "react";
import {
  elementStyles,
  zodiacSigns,
  type ZodiacSign,
} from "@/lib/data/zodiac";

function ZodiacModal({
  sign,
  onClose,
}: {
  sign: ZodiacSign;
  onClose: () => void;
}) {
  const style = elementStyles[sign.element];

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`zodiac-${sign.name}`}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Kapat"
      />

      <div className="relative max-h-[85vh] w-full max-w-md overflow-y-auto rounded-2xl border border-white/10 bg-[#12121f] p-5 shadow-2xl sm:p-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
          aria-label="Kapat"
        >
          ×
        </button>

        <div
          className={`mb-4 h-px w-full bg-gradient-to-r ${style.accent}`}
          aria-hidden
        />

        <div className="flex items-start justify-between gap-3 pr-8">
          <div>
            <h3
              id={`zodiac-${sign.name}`}
              className="text-2xl font-semibold text-white"
            >
              {sign.name}
            </h3>
            <p className="mt-1 text-sm text-slate-500">{sign.dates}</p>
          </div>
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${style.badge}`}
          >
            {sign.element}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-xs text-slate-500">Gezegen</p>
            <p className="mt-0.5 text-white">{sign.planet}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Modalite</p>
            <p className="mt-0.5 text-white">{sign.modality}</p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-slate-300">
          {sign.detail}
        </p>

        <div className="mt-5">
          <p className="text-xs font-medium text-slate-500">Güçlü yönler</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {sign.strengths.map((s) => (
              <span
                key={s}
                className="rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-200"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <p className="text-xs font-medium text-slate-500">Zayıf yönler</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {sign.weaknesses.map((w) => (
              <span
                key={w}
                className="rounded-md bg-rose-500/10 px-2.5 py-1 text-xs text-rose-200"
              >
                {w}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <p className="text-xs font-medium text-slate-500">Uyumlu burçlar</p>
          <p className="mt-2 text-sm text-slate-300">
            {sign.compatible.join(" · ")}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {sign.traits.map((trait) => (
            <span
              key={trait}
              className="rounded-md border border-white/5 bg-white/[0.02] px-2.5 py-1 text-xs text-slate-400"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ZodiacGrid() {
  const [selected, setSelected] = useState<ZodiacSign | null>(null);

  return (
    <section id="burclar" className="min-w-0 scroll-mt-28 sm:scroll-mt-24">
      <div className="mb-6 text-center sm:mb-8">
        <h2 className="text-base font-medium text-slate-300 sm:text-xl">
          Burçlar
        </h2>
        <p className="mt-2 text-xs text-slate-500 sm:text-sm">
          Detaylar için bir burca tıklayın
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {zodiacSigns.map((sign) => {
          const style = elementStyles[sign.element];

          return (
            <button
              key={sign.name}
              type="button"
              onClick={() => setSelected(sign)}
              className={[
                "group relative min-w-0 overflow-hidden rounded-2xl bg-white/[0.03] p-4 text-left transition-all duration-300 sm:p-5",
                "hover:bg-white/[0.05] active:bg-white/[0.06] sm:hover:-translate-y-0.5",
                style.glow,
              ].join(" ")}
            >
              <div
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${style.accent}`}
                aria-hidden
              />

              <div className="flex items-start justify-between gap-2 sm:gap-3">
                <div className="min-w-0">
                  <h3 className="text-base font-semibold tracking-tight text-white sm:text-lg">
                    {sign.name}
                  </h3>
                  <p className="mt-1 text-[11px] text-slate-500 sm:text-xs">
                    {sign.dates}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium sm:px-2.5 sm:py-1 sm:text-[11px] ${style.badge}`}
                >
                  {sign.element}
                </span>
              </div>

              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-400 sm:mt-4">
                {sign.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                {sign.traits.map((trait) => (
                  <span
                    key={trait}
                    className="rounded-md border border-white/5 bg-white/[0.02] px-2 py-0.5 text-[10px] text-slate-400 sm:py-1 sm:text-[11px]"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {selected && (
        <ZodiacModal sign={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
