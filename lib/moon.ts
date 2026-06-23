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

function sind(deg: number): number {
  return Math.sin((deg * Math.PI) / 180);
}

function cosd(deg: number): number {
  return Math.cos((deg * Math.PI) / 180);
}

function tand(deg: number): number {
  return Math.tan((deg * Math.PI) / 180);
}

function normHours(h: number): number {
  return ((h % 24) + 24) % 24;
}

function normDeg(d: number): number {
  return ((d % 360) + 360) % 360;
}

function julianDayUT(year: number, month: number, day: number): number {
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  return (
    day +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045 -
    0.5
  );
}

function decimalHoursToTime(decimalHours: number): string {
  const h = normHours(decimalHours);
  let hours = Math.floor(h);
  let minutes = Math.round((h - hours) * 60);
  if (minutes >= 60) {
    hours = (hours + 1) % 24;
    minutes = 0;
  }
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export function formatTime(hours: number, minutes: number): string {
  return decimalHoursToTime(hours + minutes / 60);
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

const ISTANBUL = { lat: 41.0082, lon: 28.9784 };

export function getMoonTimes(date: Date): { rise: string; set: string } {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const tz = -date.getTimezoneOffset() / 60;

  const jd = julianDayUT(year, month, day);
  const d = jd - 2451543.5;

  const Lp = normDeg(218.316 + 13.176396 * d);
  const Mp = normDeg(134.963 + 13.064993 * d);
  const F = normDeg(93.272 + 13.22935 * d);
  const D = normDeg(297.85 + 12.190749 * d);

  let lambda = Lp + 6.289 * sind(Mp);
  let beta = 5.128 * sind(F);
  lambda += 1.274 * sind(Mp - 2 * D);
  lambda += 0.658 * sind(2 * D);
  lambda += 0.213 * sind(2 * Mp);
  beta += 0.173 * sind(F - 2 * D);
  lambda = normDeg(lambda);

  const eps = 23.4392911;
  const raRad = Math.atan2(
    sind(lambda) * cosd(eps) - tand(beta) * sind(eps),
    cosd(lambda),
  );
  const decRad = Math.asin(
    sind(beta) * cosd(eps) + cosd(beta) * sind(eps) * sind(lambda),
  );
  const raHours = normHours((raRad * 12) / Math.PI);

  const cosH0 =
    (sind(-0.833) - sind(ISTANBUL.lat) * Math.sin(decRad)) /
    (cosd(ISTANBUL.lat) * Math.cos(decRad));

  if (cosH0 > 1) {
    return { rise: "Görünmez", set: "Görünmez" };
  }
  if (cosH0 < -1) {
    return { rise: "Tüm gece", set: "Tüm gece" };
  }

  const H0 = (Math.acos(cosH0) * 12) / Math.PI;
  const gmst0 = normHours(6.697374558 + 0.06570982441908 * d);
  const lst0 = normHours(gmst0 + ISTANBUL.lon / 15);

  const transitUT = normHours(raHours - lst0);
  const riseUT = normHours(transitUT - H0);
  const setUT = normHours(transitUT + H0);

  return {
    rise: decimalHoursToTime(riseUT + tz),
    set: decimalHoursToTime(setUT + tz),
  };
}
