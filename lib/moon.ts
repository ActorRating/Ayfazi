const SYNODIC_MONTH = 29.53058867;
const KNOWN_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14, 0);

function round(value: number, decimals = 2): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

export type MoonInfo = {
  age: number;
  illumination: number;
  phaseName: string;
  emoji: string;
  waxing: boolean;
};

function toJulian(date: Date): number {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d =
    date.getDate() +
    (date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600) /
      24;
  const a = Math.floor((14 - m) / 12);
  const yr = y + 4800 - a;
  const mo = m + 12 * a - 3;
  return (
    d +
    Math.floor((153 * mo + 2) / 5) +
    365 * yr +
    Math.floor(yr / 4) -
    Math.floor(yr / 100) +
    Math.floor(yr / 400) -
    32045
  );
}

export function getMoonAge(date: Date): number {
  const days = (date.getTime() - KNOWN_NEW_MOON) / (1000 * 60 * 60 * 24);
  const age = ((days % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH;
  return round(age, 2);
}

export function getIllumination(age: number): number {
  const phase = age / SYNODIC_MONTH;
  return round(((1 - Math.cos(2 * Math.PI * phase)) / 2) * 100, 1);
}

function getPhaseName(age: number): string {
  if (age < 1.85) return "Yeni ay";
  if (age < 7.38) return "Hilal (büyüyen)";
  if (age < 9.23) return "İlk dördün";
  if (age < 14.77) return "Şişkin ay (büyüyen)";
  if (age < 16.61) return "Dolunay";
  if (age < 22.15) return "Şişkin ay (küçülen)";
  if (age < 24.0) return "Son dördün";
  return "Hilal (küçülen)";
}

function getEmoji(age: number): string {
  if (age < 1.85) return "🌑";
  if (age < 7.38) return "🌒";
  if (age < 9.23) return "🌓";
  if (age < 14.77) return "🌔";
  if (age < 16.61) return "🌕";
  if (age < 22.15) return "🌖";
  if (age < 24.0) return "🌗";
  return "🌘";
}

export function getMoonInfo(date: Date): MoonInfo {
  const age = getMoonAge(date);
  return {
    age,
    illumination: getIllumination(age),
    phaseName: getPhaseName(age),
    emoji: getEmoji(age),
    waxing: age < SYNODIC_MONTH / 2,
  };
}

export function formatPercent(value: number): string {
  return `%${value.toFixed(1).replace(".", ",")}`;
}

export function formatAge(days: number): string {
  return `${days.toFixed(1).replace(".", ",")} gün`;
}

export function formatTime(hours: number, minutes: number): string {
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export type UpcomingPhaseEvent = {
  daysFromNow: number;
  date: Date;
  phaseName: string;
  emoji: string;
};

export function getUpcomingPhaseEvents(
  from: Date,
  days = 7,
): UpcomingPhaseEvent[] {
  const events: UpcomingPhaseEvent[] = [];
  let lastPhase = getPhaseName(getMoonAge(from));

  for (let i = 1; i <= days; i++) {
    const d = new Date(from);
    d.setDate(d.getDate() + i);
    const age = getMoonAge(d);
    const phaseName = getPhaseName(age);
    if (phaseName !== lastPhase) {
      events.push({
        daysFromNow: i,
        date: d,
        phaseName,
        emoji: getEmoji(age),
      });
      lastPhase = phaseName;
    }
  }
  return events;
}

export function getMoonTimes(date: Date): { rise: string; set: string } {
  const age = getMoonAge(date);
  const jd = toJulian(date);
  const lat = (41.01 * Math.PI) / 180;
  const lon = (28.98 * Math.PI) / 180;

  const moonLong =
    (218.316 + 13.176396 * (jd - 2451545.0)) % 360;
  const moonLat = 5.128 * Math.sin(((age / SYNODIC_MONTH) * 360 * Math.PI) / 180);
  const ra = Math.atan2(
    Math.sin((moonLong * Math.PI) / 180) * Math.cos((moonLat * Math.PI) / 180),
    Math.cos((moonLong * Math.PI) / 180),
  );
  const dec = Math.asin(Math.sin((moonLat * Math.PI) / 180));

  const lst = ((100.46 + 0.985647 * (jd - 2451545.0) + lon * (180 / Math.PI)) % 360) / 15;

  const cosH =
    (Math.sin((-0.83 * Math.PI) / 180) - Math.sin(lat) * Math.sin(dec)) /
    (Math.cos(lat) * Math.cos(dec));

  if (cosH < -1 || cosH > 1) {
    const transit = ((12 + age * 0.82) % 24);
    const riseH = Math.floor(((transit - 6 + 24) % 24));
    const riseM = Math.floor((((transit - 6 + 24) % 24) % 1) * 60);
    const setH = Math.floor((transit + 6) % 24);
    const setM = Math.floor(((transit + 6) % 1) * 60);
    return { rise: formatTime(riseH, riseM), set: formatTime(setH, setM) };
  }

  const h = (Math.acos(cosH) * 180) / Math.PI / 15;
  const transit = ((lst - (ra * 12) / Math.PI + 24) % 24);
  const rise = ((transit - h + 24) % 24) + age * 0.034;
  const set = ((transit + h) % 24) + age * 0.034;

  return {
    rise: formatTime(Math.floor(rise), Math.round((rise % 1) * 60)),
    set: formatTime(Math.floor(set), Math.round((set % 1) * 60)),
  };
}
