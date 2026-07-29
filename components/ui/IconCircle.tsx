import type { LucideIcon } from "lucide-react";

type IconCircleProps = {
  icon: LucideIcon;
  size?: "small" | "large";
  dark?: boolean;
};

export default function IconCircle({
  icon: Icon,
  size = "large",
  dark = false,
}: IconCircleProps) {
  const containerSize =
    size === "large" ? "h-16 w-16" : "h-12 w-12";

  const iconSize =
    size === "large" ? "h-8 w-8" : "h-6 w-6";

  return (
    <span
      className={`grid ${containerSize} shrink-0 place-items-center rounded-full border shadow-sm ${
        dark
          ? "border-white/20 bg-white/10 text-white"
          : "border-green-900/15 bg-[#edf6e9] text-[#075031] dark:border-white/15 dark:bg-white/10 dark:text-emerald-400"
      }`}
    >
      <Icon
        className={iconSize}
        strokeWidth={1.8}
        aria-hidden="true"
      />
    </span>
  );
}