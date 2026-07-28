import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import NetworkField from "../components/ui/NetworkField";

export const metadata: Metadata = {
  title: "LWAR Group",
  description:
    "LWAR Group connects technology, artificial intelligence, digital growth, education, and research to engineer intelligent transformation.",
};

type CardItem = {
  title: string;
  description: string;
  icon: string;
  tagline?: string;
  href?: string;
  color?: string;
};

const verticals: CardItem[] = [
  {
    title: "LWAR Technologies",
    tagline: "Build Systems",
    description:
      "We build secure, scalable, and reliable technology systems that support modern organizations.",
    icon: "/images/icons/verticals/technology.png",
    href: "/verticals#technologies",
    color: "#12643b",
  },
  {
    title: "LWAR Intelligence",
    tagline: "Engineer Intelligence",
    description:
      "We engineer AI solutions and intelligent systems that automate, optimize, and accelerate impact.",
    icon: "/images/icons/verticals/intelligence.png",
    href: "/verticals#intelligence",
    color: "#087783",
  },
  {
    title: "LWAR Digital",
    tagline: "Drive Growth",
    description:
      "We create digital strategies, brands, content, and experiences that deliver measurable growth.",
    icon: "/images/icons/verticals/digital-growth.png",
    href: "/verticals#digital",
    color: "#3b8738",
  },
  {
    title: "LWAR Academy",
    tagline: "Empower Talent",
    description:
      "We provide professional education, graduate programs, training, and curriculum development.",
    icon: "/images/icons/verticals/academy.png",
    href: "/verticals#academy",
    color: "#a77414",
  },
  {
    title: "LWAR Research & Think Tank",
    tagline: "Create Knowledge",
    description:
      "We conduct research, generate insights, and develop frameworks that support better decisions.",
    icon: "/images/icons/verticals/research.png",
    href: "/verticals#research",
    color: "#145c38",
  },
];

const audiences: CardItem[] = [
  {
    title: "Businesses & Enterprises",
    description:
      "Technology, AI, software, automation, and digital transformation for modern organizations.",
    icon: "/images/icons/verticals/technology.png",
    href: "/services#who-we-serve",
  },
  {
    title: "Government & Public Sector",
    description:
      "Strategic, digital, educational, and research support for public institutions.",
    icon: "/images/icons/general/global-ecosystem.png",
    href: "/services#who-we-serve",
  },
  {
    title: "Educational Institutions",
    description:
      "Future-ready learning, curriculum development, institutional growth, and academic transformation.",
    icon: "/images/icons/verticals/academy.png",
    href: "/services#who-we-serve",
  },
  {
    title: "Professionals & Leaders",
    description:
      "Executive learning, professional development, mentoring, and leadership capability.",
    icon: "/images/icons/general/people.png",
    href: "/services#who-we-serve",
  },
  {
    title: "Graduate Students",
    description:
      "Practical learning, research capability, career development, and professional preparation.",
    icon: "/images/icons/general/collaboration.png",
    href: "/services#who-we-serve",
  },
  {
    title: "Strategic Partners",
    description:
      "Collaborative programs, conferences, research partnerships, and ecosystem development.",
    icon: "/images/icons/general/collaboration.png",
    href: "/services#who-we-serve",
  },
];

const services: CardItem[] = [
  {
    title: "Strategy & Advisory",
    description:
      "Technology strategy, transformation roadmaps, research advisory, and institutional planning.",
    icon: "/images/icons/general/global-ecosystem.png",
    href: "/services#strategy",
  },
  {
    title: "Build & Implementation",
    description:
      "Software development, AI systems, cloud infrastructure, integration, and cybersecurity.",
    icon: "/images/icons/verticals/technology.png",
    href: "/services#implementation",
  },
  {
    title: "Training & Development",
    description:
      "Corporate training, professional programs, graduate learning, and faculty development.",
    icon: "/images/icons/verticals/academy.png",
    href: "/services#training",
  },
  {
    title: "Research & Knowledge",
    description:
      "Research studies, publications, policy insights, frameworks, and future-focused knowledge.",
    icon: "/images/icons/verticals/research.png",
    href: "/services#research",
  },
  {
    title: "AI Transformation",
    description:
      "AI strategy, intelligent agents, automation, data systems, and responsible organizational adoption.",
    icon: "/images/icons/verticals/intelligence.png",
    href: "/services",
  },
  {
    title: "Digital Growth",
    description:
      "Digital strategy, branding, content, analytics, and growth-focused customer experiences.",
    icon: "/images/icons/verticals/digital-growth.png",
    href: "/services",
  },
];

const advantages: CardItem[] = [
  {
    title: "Integrated Ecosystem",
    description:
      "Technology, intelligence, digital growth, education, and research working together.",
    icon: "/images/icons/general/global-ecosystem.png",
  },
  {
    title: "Human-Centred",
    description:
      "Solutions designed around people, institutions, communities, and meaningful outcomes.",
    icon: "/images/icons/general/people.png",
  },
  {
    title: "Intelligence-Driven",
    description:
      "Research, data, AI, and knowledge guide our strategies and decisions.",
    icon: "/images/icons/verticals/intelligence.png",
  },
  {
    title: "Growth-Focused",
    description:
      "Practical solutions designed to support measurable and sustainable progress.",
    icon: "/images/icons/verticals/digital-growth.png",
  },
  {
    title: "Collaborative",
    description:
      "Trusted partnerships that connect organizations, institutions, and professionals.",
    icon: "/images/icons/general/collaboration.png",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#287641]">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#073b27] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function IconImage({
  src,
  alt,
  size = "large",
}: {
  src: string;
  alt: string;
  size?: "small" | "large";
}) {
  const containerClasses =
    size === "large"
      ? "h-24 w-24 sm:h-28 sm:w-28"
      : "h-20 w-20 sm:h-24 sm:w-24";

  const imageClasses =
    size === "large"
      ? "h-20 w-20 scale-[1.65] sm:h-24 sm:w-24"
      : "h-16 w-16 scale-[1.65] sm:h-20 sm:w-20";

  return (
    <span
      className={`grid ${containerClasses} shrink-0 place-items-center overflow-hidden rounded-full border border-green-900/15 bg-white shadow-md`}
    >
      <Image
        src={src}
        alt={alt}
        width={160}
        height={160}
        className={`${imageClasses} object-contain`}
      />
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8faf5] to-[#e8f2e4]">
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
          className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-green-200/30 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-32 top-0 h-[36rem] w-[36rem] rounded-full bg-green-200/40 blur-3xl"
        />

        <NetworkField className="absolute inset-0 h-full w-full" />

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div className="relative z-10">
            <p className="inline-flex rounded-full border border-green-900/15 bg-white/90 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#176536] shadow-sm">
              Technology · Intelligence · Education · Research
            </p>

            <h1 className="mt-7 text-4xl font-black leading-[1.08] tracking-tight text-[#063c28] sm:text-5xl lg:text-6xl">
              Engineering Intelligence.
              <span className="mt-2 block text-[#36873e]">
                Enabling Transformation.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              LWAR Group connects technology, artificial intelligence, digital
              growth, education, and research to build intelligent systems,
              empower people, and create meaningful progress.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/verticals"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#0b6740] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0e7d4f]"
              >
                Explore Our Ecosystem
                <ArrowIcon />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-[#176536]/35 bg-white px-7 py-4 text-sm font-bold text-[#075031] transition hover:border-[#075031] hover:bg-[#edf6e9]"
              >
                Partner With LWAR
                <ArrowIcon />
              </Link>
            </div>

            <a
              href="#about-preview"
              className="mt-9 inline-flex items-center gap-2 text-xs font-bold text-[#176536]"
            >
              <span>↓</span>
              Scroll Down
            </a>
          </div>

          <div className="relative mx-auto flex w-full max-w-2xl items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute h-[78%] w-[78%] rounded-full border border-green-900/10 bg-green-100/25"
            />

            <Image
              src="/images/home/h-panda.png"
              alt="LWAR Group panda representing technology, education, intelligence, research, and growth"
              width={1000}
              height={800}
              priority
              className="relative z-10 h-auto max-h-[560px] w-full object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      {/* About preview */}
      <section
        id="about-preview"
        className="scroll-mt-28 bg-white py-20 sm:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#287641]">
              About LWAR Group
            </p>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#073b27] sm:text-4xl lg:text-5xl">
              Building Intelligent Systems.
              <br />
              Empowering People.
              <br />
              Transforming Futures.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-600">
              Modern organizations need more than individual services. They
              need connected systems, intelligent strategies, future-ready
              talent, and research-backed decisions.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              LWAR Group brings these capabilities together within one
              integrated, collaborative, and human-centred ecosystem.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#0b6740] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0e7d4f]"
            >
              Learn More About Us
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Five verticals */}
      <section className="bg-[#f7faf5] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Five Strategic Verticals"
            title="Specialist capabilities within one connected ecosystem"
            description="Each vertical provides focused expertise while collaborating across LWAR Group."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {verticals.map((vertical, index) => (
              <article
                key={vertical.title}
                className="group flex min-h-[430px] flex-col rounded-2xl border border-green-950/10 bg-white px-6 pb-7 pt-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  borderTopWidth: "4px",
                  borderTopColor: vertical.color,
                }}
              >
                <div className="flex justify-center">
                  <IconImage
                    src={vertical.icon}
                    alt={`${vertical.title} icon`}
                  />
                </div>

                <p
                  className="mt-5 text-xs font-black"
                  style={{ color: vertical.color }}
                >
                  0{index + 1}
                </p>

                <h3
                  className="mt-3 text-xl font-black leading-tight"
                  style={{ color: vertical.color }}
                >
                  {vertical.title}
                </h3>

                <p
                  className="mt-2 text-xs font-bold uppercase tracking-[0.13em]"
                  style={{ color: vertical.color }}
                >
                  {vertical.tagline}
                </p>

                <p className="mt-6 flex-1 text-sm leading-6 text-slate-600">
                  {vertical.description}
                </p>

                <Link
                  href={vertical.href ?? "/verticals"}
                  className="mt-7 inline-flex items-center justify-center gap-3 text-sm font-bold"
                  style={{ color: vertical.color }}
                >
                  Explore Vertical
                  <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/verticals"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#0b6740] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#0e7d4f]"
            >
              View All Verticals
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#f7faf5] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Solutions that enable measurable transformation"
            description="Our capabilities connect strategic planning, technology delivery, education, digital growth, and research."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-green-950/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <IconImage
                  src={service.icon}
                  alt={`${service.title} icon`}
                  size="small"
                />

                <h3 className="mt-6 text-xl font-black text-[#073b27]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href={service.href ?? "/services"}
                  className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-[#075031]"
                >
                  Explore Service
                  <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#0b6740] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#0e7d4f]"
            >
              View All Services
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose LWAR */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Why Choose LWAR"
            title="A connected approach to complex challenges"
            description="Our multidisciplinary model combines intelligence, practical execution, continuous learning, and long-term collaboration."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {advantages.map((advantage) => (
              <article
                key={advantage.title}
                className="rounded-2xl border border-green-950/10 bg-[#fbfcfa] p-6 text-center"
              >
                <div className="flex justify-center">
                  <IconImage
                    src={advantage.icon}
                    alt={`${advantage.title} icon`}
                    size="small"
                  />
                </div>

                <h3 className="mt-5 text-lg font-black text-[#073b27]">
                  {advantage.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {advantage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 overflow-hidden rounded-3xl bg-gradient-to-r from-[#043b27] to-[#08623a] px-7 py-12 text-white shadow-xl sm:px-12 lg:flex-row lg:items-center lg:justify-between">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[45px] border-white/5"
          />

          <div className="relative max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Let&apos;s build, learn, innovate, and transform—together.
            </h2>

            <p className="mt-4 text-base leading-7 text-emerald-50/75">
              Connect with LWAR Group to explore technology, education,
              research, digital growth, or strategic collaboration.
            </p>
          </div>

          <div className="relative flex shrink-0 flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-lg bg-white px-7 py-4 text-sm font-bold !text-[#075031] shadow-md transition hover:bg-green-100"
            >
              Start a Conversation
              <span className="text-[#075031]">
                <ArrowIcon />
              </span>
            </Link>

            <Link
              href="/verticals"
              className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-lg border border-white/35 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Explore Verticals
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}