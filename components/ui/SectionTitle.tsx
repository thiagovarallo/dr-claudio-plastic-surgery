type Props = {
  eyebrow: string;
  title: string;
  id?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  size?: "md" | "lg";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  id,
  align = "left",
  tone = "dark",
  size = "md",
  className,
}: Props) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className ?? ""}`}>
      <p
        className={`text-[10px] font-semibold uppercase tracking-[0.52em] ${
          tone === "dark" ? "text-ink-soft" : "text-white/80"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-1 font-extrabold uppercase leading-[0.95] tracking-tight ${
          size === "lg" ? "text-[34px] sm:text-[44px]" : "text-[30px] sm:text-[34px]"
        } ${tone === "dark" ? "text-ink" : "text-white"}`}
      >
        {title}
      </h2>
    </div>
  );
}
