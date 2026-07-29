"use client";

import { useEffect, useRef } from "react";

export const LWAR_VERTICAL_COLORS = [
  "#12643b",
  "#087783",
  "#3b8738",
  "#a77414",
  "#145c38",
];

const MOUSE_RADIUS = 130;
const REPEL_FORCE = 0.11;
const DAMPING = 0.985;
const MAX_LINE_DISTANCE = 110;
const AREA_PER_STAR = 13000;
const MAX_STARS = 90;

type Star = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  twinkles: boolean;
  twinklePhase: number;
  twinkleSpeed: number;
};

type NetworkFieldProps = {
  colors?: string[];
  className?: string;
};

function hexAlpha(alpha: number) {
  const clamped = Math.max(0, Math.min(1, alpha));
  return Math.round(clamped * 255)
    .toString(16)
    .padStart(2, "0");
}

export default function NetworkField({
  colors = LWAR_VERTICAL_COLORS,
  className = "",
}: NetworkFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let rafId = 0;
    let stars: Star[] = [];
    const mouse = { x: -9999, y: -9999 };

    function isDarkTheme() {
      return document.documentElement.getAttribute("data-theme") === "dark";
    }

    function size() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = rect.width * dpr;
      canvas!.height = rect.height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { width: rect.width, height: rect.height };
    }

    function initStars(width: number, height: number) {
      const count = Math.min(
        MAX_STARS,
        Math.floor((width * height) / AREA_PER_STAR),
      );

      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        size: Math.random() * 1.5 + 1.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        twinkles: Math.random() > 0.55,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.012 + Math.random() * 0.02,
      }));
    }

    function handlePointerMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function handlePointerLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function step(width: number, height: number) {
      stars.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0 || s.x > width) s.vx *= -1;
        if (s.y < 0 || s.y > height) s.vy *= -1;

        const dx = mouse.x - s.x;
        const dy = mouse.y - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS) {
          const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * REPEL_FORCE;
          const angle = Math.atan2(dy, dx);
          s.vx -= Math.cos(angle) * force;
          s.vy -= Math.sin(angle) * force;
        }

        s.vx *= DAMPING;
        s.vy *= DAMPING;
      });
    }

    function draw(width: number, height: number) {
      ctx!.clearRect(0, 0, width, height);
      const dark = isDarkTheme();
      const lineBase = dark ? 0.1 : 0.07;

      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_LINE_DISTANCE) {
            const alpha = (1 - dist / MAX_LINE_DISTANCE) * lineBase;
            ctx!.strokeStyle = dark
              ? `rgba(180,220,195,${alpha})`
              : `rgba(23,101,54,${alpha})`;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(stars[i].x, stars[i].y);
            ctx!.lineTo(stars[j].x, stars[j].y);
            ctx!.stroke();
          }
        }
      }

      stars.forEach((s) => {
        let opacity = dark ? 0.62 : 0.46;
        if (s.twinkles) {
          s.twinklePhase += s.twinkleSpeed;
          const twinkle = Math.abs(Math.sin(s.twinklePhase));
          opacity = (dark ? 0.3 : 0.2) + twinkle * (dark ? 0.55 : 0.4);
        }

        const glowRadius = s.size * 2.2;
        const gradient = ctx!.createRadialGradient(
          s.x,
          s.y,
          0,
          s.x,
          s.y,
          glowRadius,
        );
        gradient.addColorStop(0, `${s.color}${hexAlpha(opacity)}`);
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx!.fillStyle = gradient;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, glowRadius, 0, Math.PI * 2);
        ctx!.fill();

        ctx!.fillStyle = `rgba(255,255,255,${opacity * 0.5})`;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.size * 0.35, 0, Math.PI * 2);
        ctx!.fill();

        if (s.twinkles) {
          const spikeLength = s.size * 1.6;
          ctx!.strokeStyle = `${s.color}${hexAlpha(opacity * 0.4)}`;
          ctx!.lineWidth = 0.6;

          [0, Math.PI / 2, Math.PI, (Math.PI * 3) / 2].forEach((angle) => {
            ctx!.beginPath();
            ctx!.moveTo(s.x, s.y);
            ctx!.lineTo(
              s.x + Math.cos(angle) * spikeLength,
              s.y + Math.sin(angle) * spikeLength,
            );
            ctx!.stroke();
          });
        }
      });
    }

    function frame() {
      const rect = canvas!.getBoundingClientRect();
      step(rect.width, rect.height);
      draw(rect.width, rect.height);
      if (!reduceMotion) rafId = requestAnimationFrame(frame);
    }

    const { width, height } = size();
    initStars(width, height);

    if (reduceMotion) {
      draw(width, height);
    } else {
      rafId = requestAnimationFrame(frame);
    }

    function handleResize() {
      const { width: w, height: h } = size();
      initStars(w, h);
      if (reduceMotion) draw(w, h);
    }

    function handleVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else if (!reduceMotion) {
        rafId = requestAnimationFrame(frame);
      }
    }

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);
    if (!reduceMotion) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerleave", handlePointerLeave);
    }

    let themeObserver: MutationObserver | undefined;
    if (reduceMotion) {
      themeObserver = new MutationObserver(() => draw(width, height));
      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      themeObserver?.disconnect();
    };
  }, [colors]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
    />
  );
}
