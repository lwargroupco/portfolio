import Image from "next/image";
import Link from "next/link";

import {
  companyLinks,
  serviceLinks,
  verticalLinks,
} from "../../data/navigation";

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-gradient-to-br from-[#032f20] via-[#043f28] to-[#005033] text-white">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 sm:py-14 lg:grid-cols-3 lg:px-8 xl:grid-cols-[1.25fr_0.8fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            href="/"
            aria-label="LWAR Group home"
            className="inline-flex max-w-full rounded-2xl bg-white p-3"
          >
            <Image
              src="/images/brand/lwar-logo.png"
              alt="LWAR Group"
              width={230}
              height={110}
              sizes="(max-width: 640px) 150px, 190px"
              className="h-20 w-auto max-w-full object-contain"
            />
          </Link>

          <p className="mt-6 max-w-sm text-sm leading-7 text-emerald-50/75">
            Engineering intelligence and enabling transformation through
            technology, artificial intelligence, digital growth, education,
            and research.
          </p>

          <p className="mt-5 text-xs font-bold uppercase leading-5 tracking-[0.16em] text-green-300">
            Engineering Intelligence.
            <br />
            Enabling Transformation.
          </p>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.15em] text-green-300">
            Company
          </h2>

          <nav className="mt-5 flex flex-col gap-3" aria-label="Company links">
            {companyLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="w-fit text-sm text-emerald-50/75 transition hover:translate-x-1 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Verticals */}
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.15em] text-green-300">
            Verticals
          </h2>

          <nav className="mt-5 flex flex-col gap-3" aria-label="Vertical links">
            {verticalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="w-fit text-sm leading-6 text-emerald-50/75 transition hover:translate-x-1 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.15em] text-green-300">
            Services
          </h2>

          <nav className="mt-5 flex flex-col gap-3" aria-label="Service links">
            {serviceLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="w-fit text-sm leading-6 text-emerald-50/75 transition hover:translate-x-1 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.15em] text-green-300">
            Contact
          </h2>

          <div className="mt-5 space-y-4 text-sm text-emerald-50/75">
            <a
              href="mailto:info@lwar.group"
              className="flex items-start gap-3 break-all transition hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0"
              >
                <path d="M4 4h16v16H4z" />
                <path d="m4 6 8 6 8-6" />
              </svg>

              <span>info@lwar.group</span>
            </a>

            <a
              href="tel:+923144010027"
              className="flex items-start gap-3 transition hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92z" />
              </svg>

              <span>+92 314 4010027</span>
            </a>

            <p className="flex items-start gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>

              <span>Lahore, Pakistan</span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-3 px-4 py-6 text-center text-xs text-emerald-50/60 sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">
          <p>
            © {new Date().getFullYear()} LWAR Group. All rights reserved.
          </p>

          <p>Engineering Intelligence. Enabling Transformation.</p>
        </div>
      </div>
    </footer>
  );
}