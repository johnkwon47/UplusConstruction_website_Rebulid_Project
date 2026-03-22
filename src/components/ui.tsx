export function SectionLabel({ en, className }: { en: string; className?: string }) {
  return (
    <span
      className={`micro-label text-white/40 block mb-8 ${className ?? ""}`}
    >
      {en}
    </span>
  );
}

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16 ${className ?? ""}`}>
      {children}
    </div>
  );
}

export function ContainerWide({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1800px] px-6 md:px-10 lg:px-16 ${className ?? ""}`}>
      {children}
    </div>
  );
}

export function Divider({ className }: { className?: string }) {
  return <div className={`divider ${className ?? ""}`} />;
}

export function PremiumButton({
  children,
  variant = "primary",
  className,
  href,
  type,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  href?: string;
  type?: "button" | "submit";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 text-[13px] font-semibold tracking-wider uppercase transition-all duration-400 ease-out";

  const variants = {
    primary:
      "bg-black text-white px-10 py-4 hover:bg-near-black active:scale-[0.98]",
    secondary:
      "bg-white text-black px-10 py-4 border border-black hover:bg-black hover:text-white active:scale-[0.98]",
    outline:
      "bg-transparent text-white px-10 py-4 border border-white/40 hover:bg-white hover:text-black active:scale-[0.98]",
    ghost:
      "bg-transparent text-black px-0 py-2 hover:opacity-60 border-b border-black",
  };

  const classes = `${base} ${variants[variant]} ${className ?? ""}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </a>
    );
  }

  return (
    <button type={type ?? "button"} className={classes}>
      {children}
    </button>
  );
}
