import Image from "next/image";
import Link from "next/link";

import NetworkField from "./NetworkField";

type PageHeroProps = {
  currentPage: string;
  title: string;
  highlightedTitle?: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function PageHero({
  currentPage,
  title,
  highlightedTitle,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaHref,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8faf5] to-[#eaf3e7] dark:from-[#071a12] dark:via-[#0a2117] dark:to-[#0d2a1c]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25 dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--pagehero-dot) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute -right-36 top-4 h-[34rem] w-[34rem] rounded-full bg-green-200/40 blur-3xl dark:bg-emerald-500/10"
      />

      <NetworkField className="absolute inset-0 h-full w-full" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:min-h-[610px] lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-sm font-medium text-[#176536] dark:text-emerald-400/80">
            <Link href="/" className="transition hover:text-[#073b27] dark:hover:text-emerald-300">
              Home
            </Link>

            <span>›</span>
            <span>{currentPage}</span>
          </div>

          <h1 className="mt-8 text-4xl font-black leading-[1.08] tracking-tight text-[#081c16] dark:text-emerald-50 sm:text-5xl lg:text-6xl">
            {title}

            {highlightedTitle ? (
              <span className="mt-2 block text-[#287641] dark:text-emerald-400">
                {highlightedTitle}
              </span>
            ) : null}
          </h1>

          <p className="mt-5 text-lg font-bold leading-7 text-[#123d2a] dark:text-emerald-100/85">
            {subtitle}
          </p>

          <div className="mt-5 h-1 w-12 rounded-full bg-[#287641] dark:bg-emerald-400" />

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-emerald-100/60">
            {description}
          </p>

          {ctaLabel && ctaHref ? (
            <Link
              href={ctaHref}
              className="mt-8 inline-flex items-center rounded-lg bg-[#0b6740] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0e7d4f] dark:bg-[#1a9b5c] dark:hover:bg-[#22b06a]"
            >
              {ctaLabel}
              <span className="ml-3">→</span>
            </Link>
          ) : null}
        </div>

        <div className="relative mx-auto flex w-full max-w-2xl items-center justify-center">
          <div
            aria-hidden="true"
            className="absolute h-[75%] w-[75%] rounded-full bg-green-200/25 blur-2xl dark:bg-emerald-500/10"
          />

          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1000}
            height={800}
            priority
            className="relative z-10 h-auto max-h-[520px] w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}