import { elementStyles, zodiacSigns } from "@/lib/data/zodiac";

export function ZodiacGrid() {
  return (
    <section id="burclar" className="min-w-0 scroll-mt-28 sm:scroll-mt-24">
      <div className="mb-6 text-center sm:mb-8">
        <h2 className="text-base font-medium text-slate-300 sm:text-xl">Burçlar</h2>
        <p className="mt-2 text-xs text-slate-500 sm:text-sm">
          On iki burç, dört element
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {zodiacSigns.map((sign) => {
          const style = elementStyles[sign.element];

          return (
            <article
              key={sign.name}
              className={[
                "group relative min-w-0 overflow-hidden rounded-2xl bg-white/[0.03] p-4 transition-all duration-300 sm:p-5",
                "hover:bg-white/[0.05] sm:hover:-translate-y-0.5",
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

              <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:mt-4">
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
            </article>
          );
        })}
      </div>
    </section>
  );
}
