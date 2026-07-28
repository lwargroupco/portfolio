type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
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