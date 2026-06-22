"use client";

import { useId } from "react";

type MoonIconProps = {
  illumination: number;
  waxing: boolean;
  size?: number;
  className?: string;
};

function round(value: number, decimals = 2): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

export function MoonIcon({
  illumination,
  waxing,
  size = 48,
  className,
}: MoonIconProps) {
  const id = useId();
  const lit = round(illumination / 100, 4);
  const r = round(size / 2 - 2);
  const cx = round(size / 2);
  const cy = cx;
  const offset = round(waxing ? (1 - lit) * r * 2 : lit * r * 2 - r * 2);
  const shadowCx = round(cx + offset);

  return (
    <span className={className}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
        <defs>
          <clipPath id={id}>
            <circle cx={cx} cy={cy} r={r} />
          </clipPath>
        </defs>
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="#1a1a2e"
          stroke="rgba(201,168,76,0.3)"
          strokeWidth="1"
        />
        <circle
          cx={shadowCx}
          cy={cy}
          r={r}
          fill="#e8e4d4"
          clipPath={`url(#${id})`}
        />
      </svg>
    </span>
  );
}
