"use client";

import Link from "next/link";

import { mainNavigation } from "../../data/navigation";

type MobileMenuProps = {
  isOpen: boolean;
  pathname: string;
  onClose: () => void;
};

export default function MobileMenu({
  isOpen,
  pathname,
  onClose,
}: MobileMenuProps) {
  function isActive(href: string) {
    // usePathname does not include URL hash values.
    if (href.includes("#")) {
      return false;
    }

    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="mobile-navigation"
      className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-green-950/10 bg-white shadow-lg dark:border-white/10 dark:bg-[#071a12] xl:hidden"
    >
      <nav
        aria-label="Mobile navigation"
        className="mx-auto flex w-full max-w-[1440px] flex-col gap-1 px-4 py-5 sm:px-6 lg:px-8"
      >
        {mainNavigation.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              aria-current={active ? "page" : undefined}
              onClick={onClose}
              className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                active
                  ? "bg-[#e8f3e5] text-[#075031] dark:bg-white/10 dark:text-emerald-400"
                  : "text-slate-700 hover:bg-slate-50 hover:text-[#075031] dark:text-emerald-50/85 dark:hover:bg-white/5 dark:hover:text-emerald-400"
              }`}
            >
              <span>{item.name}</span>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
                className="h-4 w-4 shrink-0"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>
          );
        })}

        <div className="mt-4">
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#0b6740] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#0e7d4f] dark:bg-[#1a9b5c] dark:hover:bg-[#22b06a]"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
}