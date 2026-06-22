import { getMoonInfo, getMoonTimes, formatAge, formatPercent } from "@/lib/moon";
import { formatTurkishDate, formatTurkishShort } from "@/lib/data/moon-phases";
import { MoonIcon } from "./MoonIcon";

type MoonDetailCardProps = {
  date: Date;
  label?: string;
  large?: boolean;
};

export function MoonDetailCard({ date, label, large }: MoonDetailCardProps) {
  const info = getMoonInfo(date);
  const times = getMoonTimes(date);
  const title = label ?? formatTurkishDate(date);
  const moonSize = large ? 72 : 48;

  return (
    <div
      className={
        large
          ? "py-2 text-center sm:py-4"
          : "rounded-xl bg-white/[0.03] px-4 py-4 text-left sm:px-5 sm:py-5"
      }
    >
      <p
        className={`break-words text-slate-400 ${large ? "text-base sm:text-lg" : "text-sm"}`}
      >
        {title}
      </p>

      <div
        className={
          large
            ? "mt-5 flex flex-col items-center gap-4 sm:mt-6"
            : "mt-3 flex flex-col items-start gap-3 sm:mt-4 sm:flex-row sm:items-center sm:gap-5"
        }
      >
        <MoonIcon
          illumination={info.illumination}
          waxing={info.waxing}
          size={moonSize}
          className="sm:hidden"
        />
        <MoonIcon
          illumination={info.illumination}
          waxing={info.waxing}
          size={large ? 96 : 56}
          className="hidden sm:block"
        />
        <p
          className={`break-words font-medium capitalize text-white ${large ? "text-2xl sm:text-3xl" : "text-base sm:text-lg"}`}
        >
          {info.phaseName}
        </p>
      </div>

      <div
        className={
          large
            ? "mx-auto mt-6 grid w-full max-w-xs grid-cols-2 gap-x-6 gap-y-5 sm:mt-8 sm:max-w-sm"
            : "mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6"
        }
      >
        <div className={large ? "text-center" : undefined}>
          <p className="text-xs text-slate-500">Görünürlük</p>
          <p className="mt-1 text-base font-medium text-white sm:text-lg">
            {formatPercent(info.illumination)}
          </p>
        </div>
        <div className={large ? "text-center" : undefined}>
          <p className="text-xs text-slate-500">Yaş</p>
          <p className="mt-1 text-base font-medium text-white sm:text-lg">
            {formatAge(info.age)}
          </p>
        </div>
        <div className={large ? "text-center" : undefined}>
          <p className="text-xs text-slate-500">Ay batışı</p>
          <p className="mt-1 text-base font-medium text-white sm:text-lg">
            {times.set}
          </p>
        </div>
        <div className={large ? "text-center" : undefined}>
          <p className="text-xs text-slate-500">Ay doğuşu</p>
          <p className="mt-1 text-base font-medium text-white sm:text-lg">
            {times.rise}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TodayLabel(date: Date): string {
  return `Bugün, ${formatTurkishShort(date)}`;
}
