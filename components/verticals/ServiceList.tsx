"use client";

import { useEffect, useRef, useState } from "react";

function CheckIcon({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      aria-hidden="true"
      className="mt-1 h-4 w-4 shrink-0"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  );
}

type ServiceListProps = {
  services: string[];
  color: string;
};

export default function ServiceList({ services, color }: ServiceListProps) {
  const ref = useRef<HTMLUListElement>(null);
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
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ul
      ref={ref}
      className={`stagger-list flex-1 space-y-3${visible ? " is-visible" : ""}`}
    >
      {services.map((service) => (
        <li
          key={service}
          className="flex items-start gap-3 text-sm leading-6 text-slate-700"
        >
          <CheckIcon color={color} />
          <span>{service}</span>
        </li>
      ))}
    </ul>
  );
}
