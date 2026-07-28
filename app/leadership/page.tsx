import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Learn about the leadership vision, principles, structure, and founder of LWAR Group.",
};

const leadershipPrinciples = [
  {
    number: "01",
    symbol: "◎",
    title: "Purpose-Driven",
    description:
      "We lead with a clear mission to create meaningful and lasting impact.",
  },
  {
    number: "02",
    symbol: "◇",
    title: "Integrity",
    description:
      "We uphold honesty, transparency, responsibility, and ethical conduct.",
  },
  {
    number: "03",
    symbol: "✦",
    title: "Innovation",
    description:
      "We embrace curiosity, creativity, and intelligent problem-solving.",
  },
  {
    number: "04",
    symbol: "◉",
    title: "Empowerment",
    description:
      "We help people and institutions develop the confidence to lead.",
  },
  {
    number: "05",
    symbol: "⇄",
    title: "Collaboration",
    description:
      "We build progress through teamwork and strategic partnerships.",
  },
  {
    number: "06",
    symbol: "★",
    title: "Excellence",
    description:
      "We maintain high standards in everything we plan and deliver.",
  },
];

const leadershipAreas = [
  {
    number: "01",
    title: "Technology Leadership",
    subtitle: "LWAR Technologies",
    description:
      "Guiding software engineering, infrastructure, cybersecurity, enterprise systems, and technology innovation.",
    icon: "/images/icons/verticals/technology.png",
    color: "#12643b",
  },
  {
    number: "02",
    title: "Intelligence Leadership",
    subtitle: "LWAR Intelligence",
    description:
      "Leading artificial intelligence, automation, intelligent systems, data, and organizational transformation.",
    icon: "/images/icons/verticals/intelligence.png",
    color: "#087783",
  },
  {
    number: "03",
    title: "Digital Growth Leadership",
    subtitle: "LWAR Digital",
    description:
      "Directing digital strategy, branding, content, analytics, customer experience, and sustainable growth.",
    icon: "/images/icons/verticals/digital-growth.png",
    color: "#3b8738",
  },
  {
    number: "04",
    title: "Academy Leadership",
    subtitle: "LWAR Academy",
    description:
      "Advancing education, curriculum, professional learning, institutional development, and capability building.",
    icon: "/images/icons/verticals/academy.png",
    color: "#a77414",
  },
  {
    number: "05",
    title: "Research Leadership",
    subtitle: "LWAR Research & Think Tank",
    description:
      "Creating research, policy insights, frameworks, foresight, publications, and strategic knowledge.",
    icon: "/images/icons/verticals/research.png",
    color: "#145c38",
  },
];

const leadershipResponsibilities = [
  {
    number: "01",
    title: "Strategic Direction",
    description:
      "Clarifying priorities, aligning resources, and guiding LWAR Group toward sustainable progress.",
  },
  {
    number: "02",
    title: "People Development",
    description:
      "Creating opportunities for learning, mentorship, professional growth, and future leadership.",
  },
  {
    number: "03",
    title: "Partnership Building",
    description:
      "Connecting organizations, institutions, experts, and communities through trusted collaboration.",
  },
  {
    number: "04",
    title: "Knowledge Leadership",
    description:
      "Using research, intelligence, experience, and evidence to support better decisions.",
  },
];

const founderCapabilities = [
  "Entrepreneur",
  "Electrical Engineer",
  "AI & Technology Specialist",
  "Leadership Educator",
  "Researcher",
  "Ecosystem Builder",
];

export default function LeadershipPage() {
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
              <span>Leadership</span>
            </div>

            <h1 className="mt-8 text-5xl font-black leading-[1.08] tracking-tight text-[#081c16] sm:text-6xl">
              Leadership
            </h1>

            <p className="mt-5 text-xl font-bold leading-8 text-[#287641]">
              Vision. Experience. Integrity.
            </p>

            <div className="mt-5 h-1 w-12 rounded-full bg-[#287641]" />

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              LWAR Group is guided by purpose, specialist expertise, and a
              shared commitment to intelligent, responsible, and human-centred
              transformation.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#founder"
                className="inline-flex items-center justify-center rounded-lg bg-[#075031] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0b6740]"
              >
                Meet Our Founder
                <span className="ml-3">→</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-[#176536]/30 bg-white px-7 py-4 text-sm font-bold text-[#075031] transition hover:bg-[#edf6e9]"
              >
                Work With Us
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-2xl items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute h-[75%] w-[75%] rounded-full bg-green-200/25 blur-2xl"
            />

            <Image
              src="/images/leadership/leadership.png"
              alt="LWAR Group panda representing purposeful and collaborative leadership"
              width={1000}
              height={800}
              priority
              className="relative z-10 h-auto max-h-[520px] w-full object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </section>

    

      {/* Founder */}
<section
  id="founder"
  className="scroll-mt-28 bg-white py-14 sm:py-16 lg:py-24"
>
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#043b27] via-[#075031] to-[#08713f] text-white shadow-xl">
      <div className="grid xl:grid-cols-[1fr_1.15fr]">
        {/* Founder profile */}
        <div className="border-b border-white/10 p-6 sm:p-8 lg:p-10 xl:border-b-0 xl:border-r">
          <div className="grid items-start gap-7 sm:grid-cols-[210px_1fr] xl:grid-cols-1 2xl:grid-cols-[220px_1fr]">
            {/* Founder image */}
            <div className="mx-auto w-full max-w-[240px] sm:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-xl">
                <Image
                  src="/images/leadership/founder.png"
                  alt="Abdur Rehman, Founder and Group Director of LWAR Group"
                  fill
                  priority
                  sizes="(max-width: 640px) 85vw, (max-width: 1280px) 210px, 220px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Founder information */}
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-green-300">
                Founder &amp; Group Director
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
                Abdur Rehman
              </h2>

              <div className="mt-6 h-1 w-14 rounded-full bg-green-300" />

              <p className="mt-6 text-sm leading-7 text-emerald-50/75">
                Leading LWAR Group with a focus on technology, intelligence,
                education, research, and responsible transformation.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {founderCapabilities.map((capability) => (
                  <span
                    key={capability}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-emerald-50"
                  >
                    {capability}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Founder message */}
        <blockquote className="relative p-7 sm:p-10 lg:p-12">
          <span
            aria-hidden="true"
            className="absolute right-8 top-5 text-[110px] font-black leading-none text-green-300/15"
          >
            “
          </span>

          <div className="relative z-10">
            <span className="text-6xl font-black leading-none text-green-300">
              “
            </span>

            <h3 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              Founder&apos;s Message
            </h3>

            <p className="mt-7 max-w-3xl text-base leading-8 text-emerald-50/80">
              I founded LWAR Group with the belief that technology,
              intelligence, education, and research can transform not only
              organizations, but lives. Our mission is to build an ecosystem
              where people learn, innovate, and grow together.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-emerald-50/80">
              We do not simply follow change. We work responsibly with people
              and institutions to shape meaningful transformation and create a
              better future.
            </p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xl font-semibold italic text-green-300">
                Abdur Rehman
              </p>

              <p className="mt-1 text-sm text-emerald-50/60">
                Founder &amp; Group Director, LWAR Group
              </p>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  </div>
</section>

      {/* Leadership areas */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#287641]">
              Vertical Leadership
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#073b27] sm:text-5xl">
              Specialist leadership across the ecosystem
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Each LWAR vertical requires specialist direction while remaining
              aligned with the wider group strategy.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {leadershipAreas.map((area) => (
              <article
                key={area.number}
                className="rounded-2xl border border-green-950/10 bg-[#fbfcfa] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                style={{
                  borderTopWidth: "4px",
                  borderTopColor: area.color,
                }}
              >
                <div className="flex justify-center">
                  <div
                    className="grid h-20 w-20 place-items-center rounded-full border bg-white shadow-md"
                    style={{
                      borderColor: `${area.color}55`,
                    }}
                  >
                    <Image
                      src={area.icon}
                      alt={`${area.title} icon`}
                      width={90}
                      height={90}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                </div>

                <p
                  className="mt-6 text-center text-xs font-black"
                  style={{ color: area.color }}
                >
                  {area.number}
                </p>

                <h3 className="mt-2 text-center text-xl font-black leading-7 text-[#073b27]">
                  {area.title}
                </h3>

                <p
                  className="mt-2 text-center text-xs font-bold uppercase tracking-[0.12em]"
                  style={{ color: area.color }}
                >
                  {area.subtitle}
                </p>

                <p className="mt-5 text-center text-sm leading-6 text-slate-600">
                  {area.description}
                </p>

                <p className="mt-6 rounded-lg bg-white px-4 py-3 text-center text-xs font-bold text-slate-500">
                  Confirmed leadership profile will be added
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership philosophy */}
      <section className="bg-[#f7faf5] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl bg-[#075031] p-8 text-white shadow-lg sm:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-green-300">
              Leadership Philosophy
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Building capable people and resilient institutions.
            </h2>

            <p className="mt-6 leading-8 text-emerald-50/75">
              Leadership at LWAR is demonstrated through responsibility,
              knowledge, service, and the ability to help others succeed.
            </p>

            <p className="mt-5 leading-8 text-emerald-50/75">
              Our leaders are expected to connect strategy with execution while
              protecting integrity, learning, and human-centred impact.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {leadershipResponsibilities.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-green-950/10 bg-white p-7 shadow-sm"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#edf6e9] text-sm font-black text-[#075031]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-black text-[#073b27]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Important team-information notice */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="rounded-3xl border border-green-950/10 bg-[#fbfcfa] p-8 text-center shadow-sm sm:p-12">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#287641]">
              Leadership Team
            </p>

            <h2 className="mt-4 text-3xl font-black text-[#073b27] sm:text-4xl">
              Full team profiles will be added after confirmation.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
              Only verified names, roles, biographies, and photographs should
              be published. This protects the credibility of LWAR Group and
              prevents placeholder information from appearing as factual.
            </p>
          </div>
        </div>
      </section>

{/* CTA */}
<section className="bg-[#f7faf5] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-3xl bg-gradient-to-r from-[#043b27] to-[#08623a] px-5 py-10 shadow-xl sm:px-8 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-12">
    {/* CTA content */}
    <div className="max-w-3xl">
      <h2 className="text-3xl font-black text-white sm:text-4xl">
        Strong leadership. Shared purpose.
      </h2>

      <p className="mt-4 leading-7 text-emerald-50/75">
        Connect with LWAR Group to explore collaboration, learning, and
        meaningful transformation.
      </p>
    </div>

    {/* CTA buttons */}
    <div className="flex w-full shrink-0 flex-col gap-4 sm:w-auto sm:flex-row">
      <Link
        href="/contact"
        className="inline-flex w-full items-center justify-center rounded-lg bg-white px-7 py-4 text-center text-sm font-bold shadow-md transition hover:-translate-y-0.5 hover:bg-[#edf6e9] sm:w-auto sm:min-w-[220px]"
      >
        <span
          className="inline-flex items-center justify-center gap-3"
          style={{ color: "#075031" }}
        >
          Work With Us
          <span aria-hidden="true" style={{ color: "#075031" }}>
            →
          </span>
        </span>
      </Link>

      <Link
        href="/verticals"
        className="inline-flex w-full items-center justify-center rounded-lg border border-white/35 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto sm:min-w-[220px]"
      >
        Explore Verticals
      </Link>
    </div>
  </div>
</section>
    </>
  );
}