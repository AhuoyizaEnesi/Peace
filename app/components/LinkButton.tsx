export default function LinkButton({
  label,
  href,
  variant = "box",
}: {
  label: string;
  href: string | null;
  variant?: "box" | "text";
}) {
  if (!label) return null;
  const focus =
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border)]";
  if (variant === "text") {
    if (!href) return null;
    return (
      <a
        href={href}
        className={`inline-block border-b-[3px] border-[var(--border)] pb-0.5 text-sm text-[var(--text)] hover:text-[var(--muted)] ${focus}`}
      >
        {label}
      </a>
    );
  }
  const base = "inline-block border-2 px-3 py-1.5 text-sm";
  if (href) {
    return (
      <a
        href={href}
        className={`${base} border-[var(--border)] bg-[var(--card)] text-[var(--text)] hover:bg-[var(--bg)] ${focus}`}
      >
        {label}
      </a>
    );
  }
  return (
    <span
      aria-disabled="true"
      className={`${base} border-dashed border-[var(--border)] text-[var(--muted)]`}
    >
      {label}
    </span>
  );
}
