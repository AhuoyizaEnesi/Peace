export default function LinkButton({
  label,
  href,
}: {
  label: string;
  href: string | null;
}) {
  if (!label) return null;
  const base =
    "inline-block rounded-md border border-[var(--border)] px-3 py-1.5 text-sm";
  if (href) {
    return (
      <a
        href={href}
        className={`${base} text-[var(--text)] hover:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]`}
      >
        {label}
      </a>
    );
  }
  return (
    <span aria-disabled="true" className={`${base} text-[var(--muted)]`}>
      {label}
    </span>
  );
}
