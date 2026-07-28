"use client";

import { useEffect, useRef, useState } from "react";

type CountUpStatProps = {
  target: number;
  label: string;
  suffix?: string;
};

export default function CountUpStat({
  target,
  label,
  suffix = "",
}: CountUpStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);

        if (reduceMotion) {
          setValue(target);
          return;
        }

        const duration = 900;
        let start: number | null = null;

        function step(ts: number) {
          if (start === null) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="text-center sm:text-left">
      <span
        ref={ref}
        className="block font-mono text-3xl font-black tabular-nums text-[#0b6740] sm:text-4xl"
      >
        {value}
        {suffix}
      </span>
      <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
        {label}
      </span>
    </div>
  );
}
