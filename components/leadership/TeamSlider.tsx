"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type TeamMember = {
  role: string;
  vertical: string;
  name: string;
  confirmed: boolean;
  description: string;
  tags?: string[];
  color: string;
  photo: string;
};

const AUTOPLAY_MS = 3000;

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className="h-[18px] w-[18px]"
    >
      {direction === "left" ? (
        <path d="M15 6l-6 6 6 6" />
      ) : (
        <path d="M9 6l6 6-6 6" />
      )}
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className="h-3.5 w-3.5"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  );
}

export default function TeamSlider({ members }: { members: TeamMember[] }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    if (paused || reduceMotionRef.current) return;

    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % members.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(id);
  }, [paused, current, members.length]);

  function goTo(index: number) {
    setCurrent(((index % members.length) + members.length) % members.length);
  }

  const member = members[current];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="overflow-hidden rounded-3xl border border-green-950/10 bg-white shadow-sm"
        style={{ borderTopWidth: "4px", borderTopColor: member.color }}
      >
        <div className="grid sm:grid-cols-[0.42fr_1fr]">
          <div className="relative aspect-square w-full sm:aspect-auto sm:min-h-[420px]">
            <Image
              src={member.photo}
              alt={
                member.confirmed
                  ? `${member.name}, ${member.role}`
                  : `Placeholder avatar for the ${member.role} role`
              }
              fill
              sizes="(max-width: 640px) 100vw, 360px"
              className={member.confirmed ? "object-cover" : "object-contain"}
              style={{ backgroundColor: `${member.color}0f` }}
            />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
            <p
              className="text-xs font-extrabold uppercase tracking-[0.14em]"
              style={{ color: member.color }}
            >
              {member.vertical}
            </p>

            <h3 className="mt-2 text-3xl font-black text-[#073b27] sm:text-4xl">
              {member.confirmed ? member.name : member.role}
            </h3>

            <p className="mt-4 max-w-[48ch] text-sm leading-7 text-slate-600">
              {member.description}
            </p>

            {member.tags && member.tags.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg px-3 py-1.5 text-xs font-bold"
                    style={{
                      color: member.color,
                      backgroundColor: `${member.color}12`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            {!member.confirmed ? (
              <p className="mt-6 inline-flex items-center gap-2 text-xs italic text-slate-400">
                <CheckIcon />
                Role confirmed &middot; profile pending
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          aria-label="Previous team member"
          className="grid h-10 w-10 place-items-center rounded-full border border-green-950/15 bg-white text-[#073b27] transition hover:-translate-y-0.5 hover:border-[#0b6740] hover:text-[#0b6740]"
        >
          <ChevronIcon direction="left" />
        </button>

        <div className="flex gap-2">
          {members.map((m, index) => (
            <button
              key={m.role}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to ${m.confirmed ? m.name : m.role}`}
              aria-current={index === current}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: index === current ? "22px" : "8px",
                backgroundColor:
                  index === current ? m.color : "rgba(8,28,22,0.14)",
              }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(current + 1)}
          aria-label="Next team member"
          className="grid h-10 w-10 place-items-center rounded-full border border-green-950/15 bg-white text-[#073b27] transition hover:-translate-y-0.5 hover:border-[#0b6740] hover:text-[#0b6740]"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </div>
  );
}
