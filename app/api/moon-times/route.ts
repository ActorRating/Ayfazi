import { NextRequest, NextResponse } from "next/server";
import { fetchMoonTimesFromMetNo } from "@/lib/metno";
import { getMoonTimes } from "@/lib/moon";

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get("date");

  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ error: "Geçersiz tarih" }, { status: 400 });
  }

  try {
    const met = await fetchMoonTimesFromMetNo(date);

    if (met.rise && met.set) {
      return NextResponse.json(
        { rise: met.rise, set: met.set, source: "metno" },
        {
          headers: {
            "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
          },
        },
      );
    }

    const [y, m, d] = date.split("-").map(Number);
    const fallback = getMoonTimes(new Date(y, m - 1, d, 12, 0, 0));
    return NextResponse.json({ ...fallback, source: "fallback" });
  } catch {
    const [y, m, d] = date.split("-").map(Number);
    const fallback = getMoonTimes(new Date(y, m - 1, d, 12, 0, 0));
    return NextResponse.json({ ...fallback, source: "fallback" });
  }
}
