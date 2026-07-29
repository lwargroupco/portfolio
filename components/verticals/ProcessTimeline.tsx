"use client";

import { useEffect, useRef, useState } from "react";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type ProcessTimelineProps = {
  steps: ProcessStep[];
};

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`process-timeline relative mt-14 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-5${
        visible ? " is-visible" : ""
      }`}
    >
      <div className="process-track" aria-hidden="true">
        <div className="process-track-fill" />
      </div>

      {steps.map((step, index) => (
        <div
          key={step.number}
          className="process-step relative"
          style={{ "--i": index } as React.CSSProperties}
        >
          <span
            aria-hidden="true"
            className="process-dot relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#0b6740] text-sm font-black text-white shadow-md dark:bg-[#1a9b5c]"
          >
            {step.number}
          </span>

          <h3 className="mt-5 text-center text-xl font-black text-[#073b27] dark:text-emerald-50">
            {step.title}
          </h3>

          <p className="mt-3 text-center text-sm leading-6 text-slate-600 dark:text-emerald-100/60">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
