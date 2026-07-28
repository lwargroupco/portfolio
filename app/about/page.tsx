import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about LWAR Group, our purpose, vision, mission, values, strategic verticals, leadership, and future direction.",
};

const statistics = [
  {
    value: "5",
    label: "Strategic Verticals",
    icon: "verticals",
  },
  {
    value: "Global",
    label: "Reach",
    icon: "global",
  },
  {
    value: "Multiple",
    label: "Sectors",
    icon: "sectors",
  },
  {
    value: "Real",
    label: "Impact",
    icon: "impact",
  },
];

const coreValues = [
  {
    number: "01",
    title: "Innovation",
    description:
      "We explore new ideas and create intelligent, practical solutions.",
    icon: "innovation",
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "We act with honesty, transparency, responsibility, and accountability.",
    icon: "integrity",
  },
  {
    number: "03",
    title: "Learning",
    description:
      "We believe in continuous learning, improvement, and shared knowledge.",
    icon: "learning",
  },
  {
    number: "04",
    title: "Excellence",
    description:
      "We deliver high-quality work with commitment, care, and precision.",
    icon: "excellence",
  },
  {
    number: "05",
    title: "Collaboration",
    description:
      "We grow through teamwork, strategic partnerships, and shared success.",
    icon: "collaboration",
  },
  {
    number: "06",
    title: "Impact",
    description:
      "We create meaningful and lasting value for people and institutions.",
    icon: "impact",
  },
];

const verticals = [
  {
    number: "01",
    title: "LWAR Technologies",
    tagline: "Build Systems",
    icon: "/images/icons/verticals/technology.png",
    color: "#12643b",
  },
  {
    number: "02",
    title: "LWAR Intelligence",
    tagline: "Engineer Intelligence",
    icon: "/images/icons/verticals/intelligence.png",
    color: "#087783",
  },
  {
    number: "03",
    title: "LWAR Digital",
    tagline: "Drive Growth",
    icon: "/images/icons/verticals/digital-growth.png",
    color: "#3b8738",
  },
  {
    number: "04",
    title: "LWAR Academy",
    tagline: "Empower Talent",
    icon: "/images/icons/verticals/academy.png",
    color: "#a77414",
  },
  {
    number: "05",
    title: "LWAR Research & Think Tank",
    tagline: "Create Knowledge",
    icon: "/images/icons/verticals/research.png",
    color: "#145c38",
  },
];

const roadmap = [
  {
    number: "01",
    title: "Build the Foundation",
    description:
      "Establish the group, define the verticals, and create trusted strategic partnerships.",
    icon: "foundation",
  },
  {
    number: "02",
    title: "Launch Priority Programs",
    description:
      "Introduce focused services, learning programs, and research initiatives.",
    icon: "launch",
  },
  {
    number: "03",
    title: "Expand Global Reach",
    description:
      "Develop international collaborations and strengthen institutional relationships.",
    icon: "global",
  },
  {
    number: "04",
    title: "Drive Sustainable Growth",
    description:
      "Create long-term programs, measurable impact, and scalable systems.",
    icon: "growth",
  },
  {
    number: "05",
    title: "Lead Future Transformation",
    description:
      "Become a trusted ecosystem for intelligent and human-centred transformation.",
    icon: "leadership",
  },
];

type IconType =
  | "verticals"
  | "global"
  | "sectors"
  | "impact"
  | "vision"
  | "mission"
  | "innovation"
  | "integrity"
  | "learning"
  | "excellence"
  | "collaboration"
  | "foundation"
  | "launch"
  | "growth"
  | "leadership";

function LineIcon({
  type,
  className = "h-7 w-7",
}: {
  type: IconType;
  className?: string;
}) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  if (type === "verticals" || type === "sectors") {
    return (
      <svg {...commonProps}>
        <path d="M4 21v-8h6v8" />
        <path d="M14 21V7h6v14" />
        <path d="M7 13V8h4v5" />
        <path d="M2 21h20" />
        <path d="M16.5 10h1" />
        <path d="M16.5 13h1" />
        <path d="M16.5 16h1" />
      </svg>
    );
  }

  if (type === "global") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
      </svg>
    );
  }

  if (type === "impact" || type === "mission" || type === "leadership") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
      </svg>
    );
  }

  if (type === "vision") {
    return (
      <svg {...commonProps}>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    );
  }

  if (type === "innovation") {
    return (
      <svg {...commonProps}>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8.5 15.5A6 6 0 1 1 15.5 15.5c-.9.7-1.5 1.5-1.5 2.5h-4c0-1-.6-1.8-1.5-2.5Z" />
        <path d="M12 2V1" />
        <path d="M4.2 4.2 3.5 3.5" />
        <path d="m19.8 4.2.7-.7" />
      </svg>
    );
  }

  if (type === "integrity") {
    return (
      <svg {...commonProps}>
        <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  if (type === "learning") {
    return (
      <svg {...commonProps}>
        <path d="M3 5.5A3.5 3.5 0 0 1 6.5 2H11v17H6.5A3.5 3.5 0 0 0 3 22V5.5Z" />
        <path d="M21 5.5A3.5 3.5 0 0 0 17.5 2H13v17h4.5A3.5 3.5 0 0 1 21 22V5.5Z" />
      </svg>
    );
  }

  if (type === "excellence") {
    return (
      <svg {...commonProps}>
        <path d="m12 2 2.8 5.8 6.2.9-4.5 4.4 1.1 6.2L12 16.4 6.4 19.3l1.1-6.2L3 8.7l6.2-.9L12 2Z" />
      </svg>
    );
  }

  if (type === "collaboration") {
    return (
      <svg {...commonProps}>
        <circle cx="8" cy="8" r="3" />
        <circle cx="16" cy="8" r="3" />
        <path d="M2.5 20c.6-4 2.7-6 5.5-6s4.9 2 5.5 6" />
        <path d="M10.5 20c.6-4 2.7-6 5.5-6s4.9 2 5.5 6" />
      </svg>
    );
  }

  if (type === "foundation") {
    return (
      <svg {...commonProps}>
        <path d="M12 21V10" />
        <path d="M12 10c-4 0-6-2-6-6 4 0 6 2 6 6Z" />
        <path d="M12 14c4 0 6-2 6-6-4 0-6 2-6 6Z" />
        <path d="M7 21h10" />
      </svg>
    );
  }

  if (type === "launch") {
    return (
      <svg {...commonProps}>
        <path d="M14 5c2.5-2.5 5-2.5 7-2-0.5 2 0 4.5-2.5 7L13 15.5 8.5 11 14 5Z" />
        <path d="m8.5 11-4 .5-2 2 5 1" />
        <path d="m13 15.5-.5 4-2 2-1-5" />
        <circle cx="16.5" cy="7.5" r="1.5" />
      </svg>
    );
  }

  if (type === "growth") {
    return (
      <svg {...commonProps}>
        <path d="M4 19V9" />
        <path d="M9 19V5" />
        <path d="M14 19v-7" />
        <path d="M19 19V3" />
        <path d="m3 8 5-4 5 4 7-6" />
      </svg>
    );
  }

  return null;
}

function IconCircle({
  type,
  dark = false,
}: {
  type: IconType;
  dark?: boolean;
}) {
  return (
    <span
      className={`grid h-14 w-14 shrink-0 place-items-center rounded-full border shadow-sm ${
        dark
          ? "border-white/20 bg-white/10 text-white"
          : "border-green-900/15 bg-[#edf6e9] text-[#075031]"
      }`}
    >
      <LineIcon type={type} />
    </span>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8faf5] to-[#eaf3e7]">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(23,101,54,0.22) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute -right-32 top-0 h-[34rem] w-[34rem] rounded-full bg-green-200/35 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:min-h-[610px] lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-sm font-medium text-[#176536]">
              <Link href="/" className="transition hover:text-[#073b27]">
                Home
              </Link>

              <span>›</span>
              <span>About LWAR Group</span>
            </div>

            <h1 className="mt-8 text-5xl font-black leading-[1.08] tracking-tight text-[#081c16] sm:text-6xl">
              About
              <span className="mt-2 block text-[#287641]">
                LWAR Group
              </span>
            </h1>

            <p className="mt-5 text-xl font-bold leading-8 text-[#123d2a]">
              One group. Five verticals. Shared purpose.
            </p>

            <div className="mt-5 h-1 w-12 rounded-full bg-[#287641]" />

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              LWAR Group is an integrated ecosystem combining technology,
              artificial intelligence, digital growth, advanced education, and
              research to build intelligent systems and empower people.
            </p>

            <a
              href="#our-purpose"
              className="mt-8 inline-flex items-center rounded-lg bg-[#075031] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0b6740]"
            >
              Discover LWAR Group
              <span className="ml-3">→</span>
            </a>
          </div>

          <div className="relative mx-auto flex w-full max-w-2xl items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute h-[75%] w-[75%] rounded-full bg-green-200/25 blur-2xl"
            />

            <Image
              src="/images/about/about-p.png"
              alt="LWAR Group panda representing technology, education, intelligence, research, and growth"
              width={1000}
              height={800}
              priority
              className="relative z-10 h-auto max-h-[520px] w-full object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="relative z-10 -mt-10 px-5 sm:px-8">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl border border-green-950/10 bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item) => (
            <article
              key={item.label}
              className="flex items-center gap-4 border-b border-r border-green-950/10 p-6 last:border-r-0"
            >
              <IconCircle type={item.icon as IconType} />

              <div>
                <strong className="block text-xl font-black text-[#073b27]">
                  {item.value}
                </strong>

                <span className="text-sm text-slate-600">{item.label}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Purpose, vision and mission */}
      <section
        id="our-purpose"
        className="scroll-mt-28 bg-white pb-20 pt-28 sm:pb-24 sm:pt-32"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#287641]">
              Our Direction
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#073b27] sm:text-5xl">
              Purpose, vision, and mission
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our direction explains why LWAR exists, what we aim to become,
              and how we intend to create value.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl bg-[#075031] p-8 text-white shadow-lg sm:p-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-green-300">
                Our Purpose
              </p>

              <h3 className="mt-5 text-3xl font-black">
                Transform ideas into meaningful impact.
              </h3>

              <p className="mt-6 leading-8 text-emerald-50/75">
                LWAR exists to bring together technology, knowledge, education,
                strategy, and people within one connected ecosystem.
              </p>

              <p className="mt-5 leading-8 text-emerald-50/75">
                We help organizations and individuals move from challenges and
                possibilities toward practical transformation.
              </p>
            </article>

            <article className="rounded-3xl border border-green-950/10 bg-[#fbfcfa] p-8 shadow-sm sm:p-10">
              <IconCircle type="vision" />

              <h3 className="mt-6 text-3xl font-black text-[#073b27]">
                Our Vision
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                To become a globally recognized group leading intelligent
                transformation through technology, digital growth, education,
                and research.
              </p>
            </article>

            <article className="rounded-3xl border border-green-950/10 bg-[#fbfcfa] p-8 shadow-sm sm:p-10">
              <IconCircle type="mission" />

              <h3 className="mt-6 text-3xl font-black text-[#073b27]">
                Our Mission
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                To engineer intelligence, empower people, advance education,
                and create knowledge that supports sustainable progress.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-[#f7faf5] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#287641]">
              Our Core Values
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#073b27] sm:text-5xl">
              Principles behind every decision
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              These values guide how LWAR Group works with clients, partners,
              institutions, communities, and one another.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {coreValues.map((value) => (
              <article
                key={value.number}
                className="rounded-2xl border border-green-950/10 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex justify-center">
                  <IconCircle type={value.icon as IconType} />
                </div>

                <p className="mt-5 text-xs font-black text-[#287641]">
                  {value.number}
                </p>

                <h3 className="mt-2 text-lg font-black text-[#073b27]">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      {/* Ecosystem */}
<section className="bg-white py-14 sm:py-16 lg:py-20">
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid items-start gap-8 rounded-3xl border border-green-950/10 bg-[#fbfcfa] p-5 shadow-sm sm:p-7 lg:grid-cols-[0.72fr_1.28fr] lg:p-8">
      {/* Left content */}
      <div>
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#287641]">
          Our Ecosystem
        </p>

        <h2 className="mt-4 text-3xl font-black text-[#073b27] sm:text-4xl">
          One purpose. Five connected verticals.
        </h2>

        <p className="mt-5 leading-8 text-slate-600">
          Each LWAR vertical provides specialist expertise while collaborating
          across the group to deliver complete solutions.
        </p>

        <p className="mt-5 leading-8 text-slate-600">
          This structure allows us to connect systems, intelligence, growth,
          education, and research within one unified approach.
        </p>

        <Link
          href="/verticals"
          className="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-[#075031] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0b6740] sm:w-auto"
        >
          Explore Our Verticals
          <span className="ml-3" aria-hidden="true">
            →
          </span>
        </Link>
      </div>

      {/* Vertical cards */}
      <div className="grid self-start auto-rows-max grid-cols-1 items-start gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {verticals.map((vertical) => (
          <article
            key={vertical.number}
            className="flex h-auto flex-col items-center rounded-2xl border border-green-950/10 bg-white px-4 py-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            style={{
              borderTopWidth: "4px",
              borderTopColor: vertical.color,
            }}
          >
            {/* Enlarged icon */}
            <div className="grid h-24 w-24 place-items-center overflow-hidden rounded-full border border-green-900/10 bg-white shadow-sm sm:h-28 sm:w-28">
              <Image
                src={vertical.icon}
                alt={`${vertical.title} icon`}
                width={160}
                height={160}
                className="h-20 w-20 scale-[2] object-contain sm:h-24 sm:w-24"
              />
            </div>

            <p
              className="mt-5 text-sm font-black"
              style={{ color: vertical.color }}
            >
              {vertical.number}
            </p>

            <h3
              className="mt-2 text-base font-black leading-6"
              style={{ color: vertical.color }}
            >
              {vertical.title}
            </h3>

            <p className="mt-2 text-xs font-semibold leading-5 text-slate-500">
              {vertical.tagline}
            </p>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Founder */}
      <section className="bg-[#f7faf5] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid overflow-hidden rounded-3xl border border-green-950/10 bg-white shadow-lg lg:grid-cols-[0.65fr_1.35fr]">
            <div className="flex min-h-[360px] items-center justify-center bg-gradient-to-br from-[#dcebd7] to-white p-8">
              <div className="grid h-52 w-52 place-items-center rounded-full border-8 border-white bg-[#075031] text-6xl font-black text-white shadow-xl">
                AS
              </div>
            </div>

            <div className="p-8 sm:p-12">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#287641]">
                Leadership
              </p>

              <h2 className="mt-4 text-3xl font-black text-[#073b27] sm:text-4xl">
                Founded on purpose. Driven by impact.
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                LWAR Group was founded with a vision to create an ecosystem
                that helps people and organizations grow through intelligent
                solutions, future-ready education, and meaningful research.
              </p>

              <blockquote className="mt-7 border-l-4 border-[#287641] pl-5 text-lg italic leading-8 text-[#123d2a]">
                “Technology, intelligence, education, and research should work
                together to empower people and build a better future.”
              </blockquote>

              <p className="mt-5 font-black text-[#073b27]">
                Aamir Suhail
              </p>

              <p className="text-sm text-slate-500">
                Founder &amp; Group Director
              </p>

              <Link
                href="/leadership"
                className="mt-7 inline-flex items-center rounded-lg bg-[#075031] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0b6740]"
              >
                Meet Our Founder
                <span className="ml-3">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#287641]">
              Our Future Roadmap
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#073b27] sm:text-5xl">
              Building the ecosystem step by step
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The roadmap provides a flexible direction for the future
              development of LWAR Group.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {roadmap.map((item) => (
              <article
                key={item.number}
                className="relative rounded-2xl border border-green-950/10 bg-[#fbfcfa] p-6"
              >
                <span className="absolute right-5 top-5 text-5xl font-black text-green-900/5">
                  {item.number}
                </span>

                <IconCircle type={item.icon as IconType} />

                <p className="mt-5 text-xs font-black text-[#287641]">
                  PHASE {item.number}
                </p>

                <h3 className="mt-2 text-xl font-black text-[#073b27]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7faf5] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-3xl bg-gradient-to-r from-[#043b27] to-[#08623a] px-7 py-12 text-white shadow-xl sm:px-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black sm:text-4xl">
              Let&apos;s build the future—together.
            </h2>

            <p className="mt-4 leading-7 text-emerald-50/75">
              Partner with LWAR to engineer intelligence, empower talent, and
              create lasting impact.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-w-[220px] items-center justify-center rounded-lg bg-white px-7 py-4 text-sm font-bold !text-[#075031] shadow-md transition hover:bg-green-100"
            >
              Start a Conversation
              <span className="ml-3 text-[#075031]">→</span>
            </Link>

            <Link
              href="/verticals"
              className="inline-flex min-w-[220px] items-center justify-center rounded-lg border border-white/35 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Explore Verticals
              <span className="ml-3">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}