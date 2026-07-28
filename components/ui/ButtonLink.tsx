import type { ReactNode } from "react";
import Link from "next/link";

type ButtonVariant =
  | "primary"
  | "outline"
  | "white"
  | "dark-outline";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  showArrow?: boolean;
  download?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#075031] text-white hover:bg-[#0b6740] shadow-md",

  outline:
    "border border-[#176536]/35 bg-white text-[#075031] hover:bg-[#edf6e9]",

  white:
    "bg-white !text-[#075031] shadow-md hover:bg-[#edf6e9]",

  "dark-outline":
    "border border-white/35 text-white hover:bg-white/10",
};

function ArrowIcon() {
  return (
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
  );
}

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  showArrow = true,
  download = false,
}: ButtonLinkProps) {
  const styles = `
    inline-flex w-full items-center justify-center gap-3
    rounded-lg px-5 py-3.5 text-center text-sm font-bold
    transition hover:-translate-y-0.5
    sm:w-auto sm:px-7 sm:py-4
    ${variantStyles[variant]}
    ${className}
  `;

if (download) {
  return (
    <a href={href} download className={styles}>
      <span className={variant === "white" ? "!text-[#075031]" : ""}>
        {children}
      </span>

      {showArrow ? <ArrowIcon /> : null}
    </a>
  );
}

return (
  <Link href={href} className={styles}>
    <span className={variant === "white" ? "!text-[#075031]" : ""}>
      {children}
    </span>

    {showArrow ? <ArrowIcon /> : null}
  </Link>
);
}