export default function MetricChip({
  label,
  background = "var(--bg)",
}: {
  label: string;
  background?: string;
}) {
  if (!label) return null;
  return (
    <span
      className="inline-block border-2 border-[var(--border)] px-2.5 py-0.5 font-mono text-xs lowercase text-[var(--text)]"
      style={{ background }}
    >
      {label}
    </span>
  );
}
