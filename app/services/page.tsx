import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import NetworkField from "../../components/ui/NetworkField";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore LWAR Group services and the organizations, institutions, professionals, and communities we serve.",
};

const serviceCategories = [
  {
    number: "01",
    title: "Strategy & Advisory",
    tagline: "Plan for Impact",
    icon: "🎯",
    services: [
      "AI & Technology Strategy",
      "Digital Transformation Roadmaps",
      "IT & Architecture Advisory",
      "Academic Innovation Strategy",
      "Research & Policy Advisory",
      "Change Management",
    ],
  },
  {
    number: "02",
    title: "Build & Implementation",
    tagline: "Deliver with Excellence",
    icon: "⚙️",
    services: [
      "Custom Software Development",
      "AI Solutions & Automation",
      "Cloud & Infrastructure",
      "Web & Mobile Applications",
      "System Integration & APIs",
      "Cybersecurity Solutions",
    ],
  },
  {
    number: "03",
    title: "Training & Capability Development",
    tagline: "Empower People",
    icon: "🎓",
    services: [
      "Executive & Corporate Training",
      "AI & Digital Skills Programs",
      "Faculty Development",
      "Graduate & Professional Training",
      "Institutional Capacity Building",
      "Certification Programs",
    ],
  },
  {
    number: "04",
    title: "Research & Knowledge",
    tagline: "Create Knowledge",
    icon: "🔍",
    services: [
      "Research Studies & Reports",
      "Whitepapers & Publications",
      "Policy Briefs & Governance",
      "Frameworks & Toolkits",
      "Future Trends & Foresight",
      "Strategic Insights",
    ],
  },
];

const industries = [
  {
    title: "Information Technology",
    icon: "💻",
  },
  {
    title: "Education & Academia",
    icon: "🎓",
  },
  {
    title: "Government & Public Sector",
    icon: "🏛️",
  },
  {
    title: "Healthcare & Life Sciences",
    icon: "🏥",
  },
  {
    title: "Finance & Banking",
    icon: "🏦",
  },
  {
    title: "Manufacturing & Industries",
    icon: "🏭",
  },
  {
    title: "NGOs & Social Impact",
    icon: "🤝",
  },
  {
    title: "Startups & Enterprises",
    icon: "🚀",
  },
];

const audiences = [
  {
    title: "Businesses, IT Companies & Enterprises",
    description:
      "Helping organizations innovate, automate, scale, and transform with intelligent systems.",
    icon: "🏢",
    services: [
      "AI & Digital Transformation",
      "Enterprise Software Solutions",
      "Process Automation",
      "Data & Analytics",
    ],
  },
  {
    title: "Government & Public Sector",
    description:
      "Supporting resilient, transparent, and future-ready public services.",
    icon: "🏛️",
    services: [
      "Policy & Strategy Advisory",
      "Digital Transformation",
      "AI for Public Good",
      "Institutional Capacity Building",
    ],
  },
  {
    title: "Educational Institutions",
    description:
      "Helping institutions modernize learning and build future-ready academic environments.",
    icon: "🎓",
    services: [
      "Curriculum Development",
      "Faculty Development",
      "AI Integration in Academia",
      "Institutional Transformation",
    ],
  },
  {
    title: "Professionals & Leaders",
    description:
      "Strengthening leadership, professional knowledge, and technology capability.",
    icon: "👔",
    services: [
      "Executive Education",
      "Leadership Development",
      "AI & Technology Upskilling",
      "Career Advancement",
    ],
  },
  {
    title: "Graduate Students & Future Talent",
    description:
      "Developing practical, technical, research, and career-ready skills.",
    icon: "👨‍🎓",
    services: [
      "Graduate Programs",
      "Technical & Research Skills",
      "Mentorship & Coaching",
      "Portfolio & Career Support",
    ],
  },
  {
    title: "Conferences & Strategic Partners",
    description:
      "Collaborating to share knowledge, create dialogue, and build meaningful impact.",
    icon: "🤝",
    services: [
      "Keynote Speaking",
      "Panel Discussions",
      "Workshops & Training",
      "Research Partnerships",
    ],
  },
];

const impactItems = [
  {
    value: "Global",
    label: "Perspective",
  },
  {
    value: "Multi-Sector",
    label: "Experience",
  },
  {
    value: "Connected",
    label: "Partnerships",
  },
  {
    value: "Future-Ready",
    label: "Learning",
  },
  {
    value: "Measurable",
    label: "Impact",
  },
  {
    value: "One",
    label: "Shared Purpose",
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className="mt-1 h-4 w-4 shrink-0 text-[#287641] dark:text-emerald-400"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
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
          className="absolute -right-32 top-0 h-[32rem] w-[32rem] rounded-full bg-green-200/35 blur-3xl dark:bg-emerald-500/10"
        />

        <NetworkField className="absolute inset-0 h-full w-full" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:min-h-[590px] lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-sm font-medium text-[#176536] dark:text-emerald-400/80">
              <Link href="/" className="hover:text-[#073b27] dark:hover:text-emerald-300">
                Home
              </Link>

              <span>›</span>
              <span>Services</span>
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-[#081c16] dark:text-emerald-50 sm:text-6xl">
              Our{" "}
              <span className="text-[#287641] dark:text-emerald-400">
                Services
              </span>
            </h1>

            <p className="mt-6 text-xl font-bold leading-8 text-[#123d2a] dark:text-emerald-100/85">
              Integrated solutions for measurable transformation.
            </p>

            <div className="mt-5 h-1 w-12 rounded-full bg-[#287641] dark:bg-emerald-400" />

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-emerald-100/60">
              LWAR Group combines technology, artificial intelligence,
              strategic guidance, education, and research to help
              organizations solve complex challenges and build sustainable
              capability.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-lg bg-[#0b6740] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0e7d4f] dark:bg-[#1a9b5c] dark:hover:bg-[#22b06a]"
            >
              Discuss Your Requirements
              <span className="ml-3">→</span>
            </Link>
          </div>

          <div className="relative mx-auto flex w-full max-w-2xl items-center justify-center">
            <div className="absolute h-[75%] w-[75%] rounded-full bg-green-200/25 blur-2xl dark:bg-emerald-500/10" />

            <Image
              src="/images/services/services-panda.png"
              alt="LWAR Group panda presenting intelligent services and solutions"
              width={1000}
              height={800}
              priority
              className="relative z-10 h-auto max-h-[500px] w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Main benefits */}
      <section className="relative z-10 -mt-10 px-5 sm:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-green-950/10 bg-white shadow-xl dark:border-white/10 dark:bg-[#0d2418] sm:grid-cols-2 lg:grid-cols-5">
          {[
            "End-to-End Solutions",
            "Measurable Impact",
            "Trusted Delivery",
            "Global Standards",
            "Long-Term Partnerships",
          ].map((benefit, index) => (
            <article
              key={benefit}
              className="border-b border-r border-green-950/10 p-6 text-center dark:border-white/10"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#edf6e9] text-xl dark:bg-white/10">
                {["⚙️", "🎯", "🛡️", "🌍", "🤝"][index]}
              </span>

              <h2 className="mt-4 text-sm font-black leading-5 text-[#073b27] dark:text-emerald-50">
                {benefit}
              </h2>
            </article>
          ))}
        </div>
      </section>

      {/* Service categories */}
      <section className="bg-white pb-20 pt-28 dark:bg-[#071a12] sm:pb-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#287641] dark:text-emerald-400">
              What We Deliver
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#073b27] dark:text-emerald-50 sm:text-5xl">
              Four connected service categories
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-emerald-100/60">
              Select one capability or combine multiple areas through an
              integrated engagement.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCategories.map((category) => (
              <article
                key={category.number}
                id={category.title
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replaceAll("&", "and")}
                className="scroll-mt-32 rounded-2xl border border-green-950/10 bg-[#fbfcfa] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-[#0d2418]"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-[#075031] text-3xl text-white shadow-md dark:bg-[#1a9b5c]">
                  {category.icon}
                </span>

                <p className="mt-6 text-sm font-black text-[#287641] dark:text-emerald-400">
                  {category.number}
                </p>

                <h3 className="mt-2 text-2xl font-black leading-tight text-[#073b27] dark:text-emerald-50">
                  {category.title}
                </h3>

                <p className="mt-2 font-bold text-[#287641] dark:text-emerald-400">
                  {category.tagline}
                </p>

                <ul className="mt-7 space-y-3">
                  {category.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-700 dark:text-emerald-100/70"
                    >
                      <CheckIcon />
                      {service}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center text-sm font-bold text-[#075031] dark:text-emerald-400"
                >
                  Discuss This Service
                  <span className="ml-3">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-[#f7faf5] py-20 dark:bg-[#0a2117] sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#287641] dark:text-emerald-400">
              Industries & Sectors
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#073b27] dark:text-emerald-50">
              Cross-sector experience and relevance
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
            {industries.map((industry) => (
              <article
                key={industry.title}
                className="rounded-2xl border border-green-950/10 bg-white p-5 text-center shadow-sm dark:border-white/10 dark:bg-[#0d2418]"
              >
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#edf6e9] text-2xl dark:bg-white/10">
                  {industry.icon}
                </span>

                <h3 className="mt-4 text-sm font-black leading-5 text-[#073b27] dark:text-emerald-50">
                  {industry.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section
        id="who-we-serve"
        className="scroll-mt-28 bg-[#f7faf5] py-20 dark:bg-[#0a2117] sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#287641] dark:text-emerald-400">
              Who We Serve
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#073b27] dark:text-emerald-50 sm:text-5xl">
              Empowering organizations and people
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-emerald-100/60">
              We work with organizations, institutions, professionals,
              students, and strategic partners.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {audiences.map((audience) => (
              <article
                key={audience.title}
                className="rounded-2xl border border-green-950/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-[#0d2418]"
              >
                <div className="flex items-start gap-5">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#edf6e9] text-3xl dark:bg-white/10">
                    {audience.icon}
                  </span>

                  <div>
                    <h3 className="text-xl font-black leading-7 text-[#073b27] dark:text-emerald-50">
                      {audience.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-emerald-100/60">
                      {audience.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {audience.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-3 text-sm text-slate-700 dark:text-emerald-100/70"
                    >
                      <CheckIcon />
                      {service}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center text-sm font-bold text-[#075031] dark:text-emerald-400"
                >
                  Start a Conversation
                  <span className="ml-3">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-white py-20 dark:bg-[#071a12] sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#287641] dark:text-emerald-400">
              Shared Impact
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#073b27] dark:text-emerald-50">
              One ecosystem with a global outlook
            </h2>
          </div>

          <div className="mt-14 grid overflow-hidden rounded-2xl border border-green-950/10 bg-[#fbfcfa] dark:border-white/10 dark:bg-[#0d2418] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {impactItems.map((item) => (
              <article
                key={item.label}
                className="border-b border-r border-green-950/10 p-6 text-center dark:border-white/10"
              >
                <strong className="block text-xl font-black text-[#073b27] dark:text-emerald-50">
                  {item.value}
                </strong>

                <span className="mt-2 block text-sm text-slate-600 dark:text-emerald-100/60">
                  {item.label}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#f7faf5] px-5 py-20 dark:bg-[#0a2117] sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-3xl bg-gradient-to-r from-[#043b27] to-[#08623a] px-7 py-12 text-white shadow-xl ring-1 ring-white/0 dark:ring-white/10 sm:px-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-black sm:text-4xl">
              Ready to solve your biggest challenges?
            </h2>

            <p className="mt-4 text-emerald-50/75">
              Let&apos;s build intelligent solutions that create practical and
              measurable transformation.
            </p>
          </div>

            <Link
            href="/contact"
             className="inline-flex w-full items-center justify-center rounded-xl bg-white px-8 py-4 text-center text-base font-bold !text-[#075031] shadow-md transition hover:-translate-y-0.5 hover:bg-[#edf6e9] sm:w-auto sm:min-w-[240px]"
            >
           <span className="!text-[#075031]">Start a Conversation</span>
        </Link>
        </div>
      </section>
    </>
  );
}