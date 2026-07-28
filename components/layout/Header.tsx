"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { mainNavigation } from "../../data/navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function toggleMenu() {
    setMenuOpen((current) => !current);
  }

  function isActive(href: string) {
    if (href.includes("#")) {
      return false;
    }

    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-950/10 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:min-h-20 sm:px-6 lg:px-8 xl:min-h-24">
        {/* Logo */}
        <Link
          href="/"
          aria-label="LWAR Group home"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <Image
            src="/images/brand/lwar-logo.png"
            alt="LWAR Group"
            width={230}
            height={110}
            priority
            sizes="(max-width: 640px) 110px, 160px"
            className="h-14 w-auto object-contain sm:h-16 xl:h-[76px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 xl:flex 2xl:gap-7"
        >
          {mainNavigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative inline-flex items-center whitespace-nowrap py-3 text-sm font-semibold transition-colors ${
                  active
                    ? "text-[#075031]"
                    : "text-[#12291f] hover:text-[#075031]"
                }`}
              >
                {item.name}

                {active ? (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-[#19723f]" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden shrink-0 xl:flex">
          <Link
            href="/contact"
            className="inline-flex min-w-36 items-center justify-center rounded-lg bg-[#0b6740] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#0e7d4f]"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={toggleMenu}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-green-950/15 bg-white text-[#075031] transition hover:bg-[#f1f7ee] xl:hidden"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6 6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      <MobileMenu
        isOpen={menuOpen}
        pathname={pathname}
        onClose={closeMenu}
      />
    </header>
  );
}