"use client";

import { useEffect, useRef } from "react";

export const LWAR_VERTICAL_COLORS = [
  "#12643b",
  "#087783",
  "#3b8738",
  "#a77414",
  "#145c38",
];

const LAYOUT = [
  { xf: 0.1, yf: 0.3 },
  { xf: 0.28, yf: 0.62 },
  { xf: 0.5, yf: 0.24 },
  { xf: 0.72, yf: 0.58 },
  { xf: 0.9, yf: 0.34 },
];

const REPEL_RADIUS = 130;
const MAX_PUSH = 34;
const EASE = 0.12;

type Node = {
  baseX: number;
  baseY: number;
  offsetX: number;
  offsetY: number;
  x: number;
  y: number;
  color: string;
  phase: number;
};

type NetworkFieldProps = {
  colors?: string[];
  className?: string;
};

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
    let nodes: Node[] = [];
    const mouse = { x: -9999, y: -9999 };

    function size() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = rect.width * dpr;
      canvas!.height = rect.height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { width: rect.width, height: rect.height };
    }

    function initNodes(width: number, height: number) {
      nodes = LAYOUT.map((pos, i) => {
        const baseX = width * pos.xf;
        const baseY = height * pos.yf;
        return {
          baseX,
          baseY,
          offsetX: 0,
          offsetY: 0,
          x: baseX,
          y: baseY,
          color: colors[i % colors.length],
          phase: Math.random() * Math.PI * 2,
        };
      });
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

    function isDarkTheme() {
      return document.documentElement.getAttribute("data-theme") === "dark";
    }

    function draw(t: number) {
      const rect = canvas!.getBoundingClientRect();
      ctx!.clearRect(0, 0, rect.width, rect.height);
      const dark = isDarkTheme();

      nodes.forEach((n) => {
        const driftX = n.baseX + Math.sin(t / 1800 + n.phase) * 8;
        const driftY = n.baseY + Math.cos(t / 2200 + n.phase) * 8;

        const dx = driftX - mouse.x;
        const dy = driftY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetOffsetX = 0;
        let targetOffsetY = 0;
        if (dist < REPEL_RADIUS) {
          const strength = (1 - dist / REPEL_RADIUS) * MAX_PUSH;
          const angle = Math.atan2(dy, dx);
          targetOffsetX = Math.cos(angle) * strength;
          targetOffsetY = Math.sin(angle) * strength;
        }

        n.offsetX += (targetOffsetX - n.offsetX) * EASE;
        n.offsetY += (targetOffsetY - n.offsetY) * EASE;

        n.x = driftX + n.offsetX;
        n.y = driftY + n.offsetY;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          ctx!.beginPath();
          ctx!.moveTo(nodes[i].x, nodes[i].y);
          ctx!.lineTo(nodes[j].x, nodes[j].y);
          ctx!.strokeStyle = dark
            ? "rgba(180,220,195,0.09)"
            : "rgba(23,101,54,0.055)";
          ctx!.lineWidth = 1;
          ctx!.stroke();
        }
      }

      nodes.forEach((n, i) => {
        const pulse = 1 + Math.sin(t / 900 + i) * 0.08;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 3 * pulse, 0, Math.PI * 2);
        ctx!.fillStyle = n.color;
        ctx!.globalAlpha = 0.3;
        ctx!.fill();
        ctx!.globalAlpha = 1;

        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 11 * pulse, 0, Math.PI * 2);
        ctx!.fillStyle = `${n.color}0c`;
        ctx!.fill();
      });

      if (!reduceMotion) rafId = requestAnimationFrame(draw);
    }

    const { width, height } = size();
    initNodes(width, height);

    if (reduceMotion) {
      draw(0);
    } else {
      rafId = requestAnimationFrame(draw);
    }

    function handleResize() {
      const { width: w, height: h } = size();
      initNodes(w, h);
      if (reduceMotion) draw(0);
    }

    function handleVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else if (!reduceMotion) {
        rafId = requestAnimationFrame(draw);
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
      themeObserver = new MutationObserver(() => draw(0));
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
