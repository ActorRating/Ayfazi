const ISTANBUL = { lat: 41.0082, lon: 28.9784 };
const TZ = "+03:00";
const USER_AGENT = "Ayfazi/1.0 (info@ayfazi.com)";

export type MetMoonTimes = {
  rise: string | null;
  set: string | null;
};

function parseMetTime(iso: string | undefined): string | null {
  if (!iso) return null;
  const match = iso.match(/T(\d{2}):(\d{2})/);
  if (!match) return null;
  return `${match[1]}:${match[2]}`;
}

export async function fetchMoonTimesFromMetNo(
  date: string,
): Promise<MetMoonTimes> {
  const url =
    `https://api.met.no/weatherapi/sunrise/3.0/moon` +
    `?lat=${ISTANBUL.lat}&lon=${ISTANBUL.lon}` +
    `&date=${date}&offset=${encodeURIComponent(TZ)}`;

  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT },
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error(`MET Norway API error: ${res.status}`);
  }

  const data = await res.json();
  const props = data.properties ?? {};

  return {
    rise: parseMetTime(props.moonrise?.time),
    set: parseMetTime(props.moonset?.time),
  };
}

export function toDateString(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
