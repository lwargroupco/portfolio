import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  Building2,
  Globe2,
  Network,
  Rocket,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

import CountUpStat from "../../components/verticals/CountUpStat";
import ProcessTimeline from "../../components/verticals/ProcessTimeline";
import ServiceList from "../../components/verticals/ServiceList";
import NetworkField from "../../components/ui/NetworkField";

export const metadata: Metadata = {
  title: "Strategic Verticals",
  description:
    "Explore the five strategic verticals of LWAR Group: Technologies, Intelligence, Digital, Academy, and Research & Think Tank.",
};

const verticals = [
  {
    number: "01",
    id: "technologies",
    title: "LWAR Technologies",
    tagline: "Build Systems",
    description:
      "We build secure, scalable, and reliable technology systems that power modern organizations.",
    icon: "/images/icons/verticals/technology.png",
    color: "#12643b",
    services: [
      "Software Engineering",
      "Cloud & Infrastructure",
      "Cybersecurity",
      "Enterprise Solutions",
      "Systems Integration",
    ],
  },
  {
    number: "02",
    id: "intelligence",
    title: "LWAR Intelligence",
    tagline: "Engineer Intelligence",
    description:
      "We engineer AI solutions and intelligent systems that automate, optimize, and accelerate impact.",
    icon: "/images/icons/verticals/intelligence.png",
    color: "#087783",
    services: [
      "AI Strategy & Consulting",
      "AI Solutions & Agents",
      "Automation & Workflows",
      "LLM & Data Systems",
      "Intelligent Applications",
    ],
  },
  {
    number: "03",
    id: "digital",
    title: "LWAR Digital",
    tagline: "Drive Growth",
    description:
      "We create digital strategies, brands, content, and experiences that drive measurable growth.",
    icon: "/images/icons/verticals/digital-growth.png",
    color: "#3b8738",
    services: [
      "Digital Strategy",
      "Branding & Identity",
      "Content & Media",
      "Growth Marketing",
      "Analytics & Insights",
    ],
  },
  {
    number: "04",
    id: "academy",
    title: "LWAR Academy",
    tagline: "Empower Talent",
    description:
      "We provide professional education, graduate programs, training, and curriculum development.",
    icon: "/images/icons/verticals/academy.png",
    color: "#a77414",
    services: [
      "Graduate Programs",
      "Professional Training",
      "Curriculum Development",
      "Faculty Development",
      "Institutional Partnerships",
    ],
  },
  {
    number: "05",
    id: "research",
    title: "LWAR Research & Think Tank",
    tagline: "Create Knowledge",
    description:
      "We conduct research, generate insights, and develop frameworks that support better decisions.",
    icon: "/images/icons/verticals/research.png",
    color: "#145c38",
    services: [
      "Research & Publications",
      "Policy & Governance",
      "Frameworks & Models",
      "Future Trends",
      "Strategic Insights",
    ],
  },
];

const totalServices = verticals.reduce(
  (sum, vertical) => sum + vertical.services.length,
  0,
);

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We examine your challenges, goals, environment, and opportunities.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We design a coordinated strategy using the most relevant verticals.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "We build and implement practical, measurable, and scalable solutions.",
  },
  {
    number: "04",
    title: "Empower",
    description:
      "We strengthen people, teams, and institutions through learning.",
  },
  {
    number: "05",
    title: "Transform",
    description:
      "We support sustainable transformation and long-term shared success.",
  },
];

type StrengthItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
};

const strengths: StrengthItem[] = [
  {
    title: "Global Reach",
    description:
      "A connected and internationally focused outlook.",
    icon: Globe2,
    color: "#34d399",
  },
  {
    title: "Multiple Sectors",
    description:
      "Capabilities for business, education, and public institutions.",
    icon: Building2,
    color: "#67e8f9",
  },
  {
    title: "Integrated Ecosystem",
    description:
      "Five verticals working as one coordinated group.",
    icon: Network,
    color: "#86efac",
  },
  {
    title: "Future Focused",
    description:
      "Solutions designed for long-term relevance and growth.",
    icon: Rocket,
    color: "#fde68a",
  },
  {
    title: "Human Centred",
    description:
      "Empowering individuals, institutions, and communities.",
    icon: UsersRound,
    color: "#a7f3d0",
  },
];

export default function VerticalsPage() {
  return (
    <>
{/* Hero */}
<section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8faf5] to-[#e8f6e8]">
  {/* Background dots */}
  <div
    aria-hidden="true"
    className="absolute inset-0 opacity-25"
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(23,101,54,0.2) 1px, transparent 1px)",
      backgroundSize: "30px 30px",
    }}
  />

  {/* Background glow */}
  <div
    aria-hidden="true"
    className="absolute -right-32 top-0 h-[32rem] w-[32rem] rounded-full bg-green-200/25 blur-3xl"
  />

  <NetworkField
    colors={verticals.map((vertical) => vertical.color)}
    className="absolute inset-0 h-full w-full"
  />

  <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:min-h-[580px] lg:grid-cols-[1fr_0.85fr] lg:gap-14 lg:px-8 lg:py-16">
    {/* Left content */}
    <div className="relative z-10">
      <div className="hero-reveal hero-reveal-1 flex items-center gap-2 text-sm font-medium text-[#176536]">
        <Link href="/" className="transition hover:text-[#073b27]">
          Home
        </Link>

        <span aria-hidden="true">›</span>
        <span>Verticals</span>
      </div>

      <h1 className="hero-reveal hero-reveal-2 mt-7 max-w-xl text-4xl font-black leading-[1.06] tracking-tight text-[#081c16] sm:text-5xl lg:text-[64px]">
        Our Five
        <span className="mt-1 block text-[#287641]">
          Strategic Verticals
        </span>
      </h1>

      <p className="hero-reveal hero-reveal-3 mt-6 text-lg font-black leading-8 text-[#145c38] sm:text-xl">
        Five connected verticals.
        <span className="block">One integrated ecosystem.</span>
      </p>

      <div className="hero-reveal hero-reveal-4 mt-6 h-1 w-14 rounded-full bg-[#287641]" />

      <p className="hero-reveal hero-reveal-5 mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
        Together, we build systems, engineer intelligence, drive growth,
        empower talent, and create knowledge that supports meaningful
        transformation.
      </p>

      <div className="hero-reveal hero-reveal-6 mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href="#technologies"
          className="inline-flex w-full items-center justify-center rounded-lg bg-[#0b6740] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0e7d4f] sm:w-auto"
        >
          Explore Our Verticals
          <span className="ml-3" aria-hidden="true">
            →
          </span>
        </a>

        <Link
          href="/contact"
          className="inline-flex w-full items-center justify-center rounded-lg border border-[#176536]/30 bg-white px-7 py-4 text-sm font-bold text-[#075031] transition hover:bg-[#edf6e9] sm:w-auto"
        >
          Partner With LWAR
        </Link>
      </div>

      <div className="hero-reveal hero-reveal-7 mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-green-950/10 pt-8">
        <CountUpStat target={5} label="Verticals" />
        <CountUpStat target={totalServices} label="Capabilities" />
        <CountUpStat target={1} label="Ecosystem" />
      </div>
    </div>

    {/* Right image */}
    <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center">
      <div
        aria-hidden="true"
        className="absolute h-[88%] w-[88%] rounded-full border border-green-900/10 bg-white/20"
      />

      <div
        aria-hidden="true"
        className="absolute h-[68%] w-[68%] rounded-full bg-green-200/25 blur-2xl"
      />

      <Image
        src="/images/verticals/verticals_panda.png"
        alt="LWAR Group panda representing five strategic verticals"
        width={800}
        height={800}
        priority
        sizes="(max-width: 640px) 88vw, (max-width: 1024px) 65vw, 42vw"
        className="relative z-10 mx-auto h-auto w-full max-w-[340px] object-contain sm:max-w-[420px] lg:max-w-[500px]"
      />
    </div>
  </div>
</section>

      {/* Five verticals */}
      <section
        id="our-verticals"
        className="scroll-mt-28 bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#287641]">
              Our Five Verticals
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#073b27] sm:text-5xl">
              Specialist expertise. Shared purpose.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Each vertical provides focused capabilities while collaborating
              across the complete LWAR Group ecosystem.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {verticals.map((vertical) => (
              <article
                key={vertical.id}
                id={vertical.id}
                className="flex min-h-[625px] scroll-mt-32 flex-col rounded-2xl border border-green-950/10 bg-white px-6 pb-7 pt-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  borderTopWidth: "4px",
                  borderTopColor: vertical.color,
                }}
              >
                <div className="flex justify-center">
                  <div
                    className="grid h-28 w-28 place-items-center rounded-full border bg-white shadow-md"
                    style={{
                      borderColor: `${vertical.color}55`,
                    }}
                  >
                    <Image
                      src={vertical.icon}
                      alt={`${vertical.title} icon`}
                      width={180}
                      height={180}
                      className="h-24 w-24 scale-[2] object-contain"
                    />
                  </div>
                </div>

                <p
                  className="mt-6 text-center text-xs font-black"
                  style={{ color: vertical.color }}
                >
                  {vertical.number}
                </p>

                <h2
                  className="mt-3 flex min-h-[88px] items-center justify-center text-center text-2xl font-black leading-tight"
                  style={{ color: vertical.color }}
                >
                  {vertical.title}
                </h2>

                <p
                  className="mt-3 flex min-h-8 items-center justify-center text-center text-xs font-bold uppercase tracking-[0.13em]"
                  style={{ color: vertical.color }}
                >
                  {vertical.tagline}
                </p>

                <p className="mt-6 min-h-24 text-center text-sm leading-6 text-slate-600">
                  {vertical.description}
                </p>

                <div className="my-6 h-px bg-green-900/10" />

                <ServiceList
                  services={vertical.services}
                  color={vertical.color}
                />

                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center justify-center text-sm font-bold"
                  style={{ color: vertical.color }}
                >
                  Explore Vertical
                  <span className="ml-3">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration process */}
      <section className="bg-[#f7faf5] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#287641]">
              How We Work Together
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#073b27] sm:text-5xl">
              One ecosystem. Infinite possibilities.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our verticals collaborate through a structured and practical
              transformation process.
            </p>
          </div>

          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/* Strengths */}
<section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
  <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#043b27] via-[#075031] to-[#08713f] px-5 py-8 shadow-xl sm:px-8 sm:py-10 lg:px-10">
    {/* Decorative glow */}
    <div
      aria-hidden="true"
      className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-300/10 blur-3xl"
    />

    <div
      aria-hidden="true"
      className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-emerald-200/10 blur-3xl"
    />

    <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {strengths.map((strength) => {
        const Icon = strength.icon;

        return (
          <article
            key={strength.title}
            className="group rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.12] hover:shadow-xl"
          >
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-lg ring-1 ring-white/20 transition duration-300 group-hover:-rotate-3 group-hover:scale-105">
              <Icon
                aria-hidden="true"
                strokeWidth={2.2}
                className="h-7 w-7"
                style={{
                  color: strength.color,
                }}
              />
            </div>

            <h3 className="mt-5 text-lg font-black leading-6 text-white">
              {strength.title}
            </h3>

            <div
              className="mt-3 h-0.5 w-10 rounded-full"
              style={{
                backgroundColor: strength.color,
              }}
            />

            <p className="mt-4 text-sm leading-6 text-emerald-50/75">
              {strength.description}
            </p>
          </article>
        );
      })}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="bg-[#f7faf5] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-3xl bg-[#075031] px-7 py-12 text-white shadow-xl sm:px-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black sm:text-4xl">
              Let&apos;s build the future—together.
            </h2>

            <p className="mt-4 leading-7 text-emerald-50/75">
              Partner with LWAR to build systems, engineer intelligence, drive
              growth, empower talent, and create knowledge.
            </p>
          </div>

         <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
  <Link
    href="/contact"
    className="inline-flex min-w-[240px] items-center justify-center rounded-lg bg-white px-7 py-4 text-sm font-bold !text-[#075031] shadow-md transition hover:bg-green-100"
  >
    Start a Conversation
    <span className="ml-3 text-[#075031]">→</span>
  </Link>

  <Link
    href="/services"
    className="inline-flex min-w-[240px] items-center justify-center rounded-lg border border-white/35 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
  >
    Explore Services
    <span className="ml-3">→</span>
  </Link>
</div>
        </div>
      </section>
    </>
  );
}