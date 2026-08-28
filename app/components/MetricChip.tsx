export default function MetricChip({ label }: { label: string }) {
  if (!label) return null;
  return (
    <span className="inline-block rounded-full border border-[var(--accent)] bg-transparent px-2.5 py-0.5 font-mono text-xs text-[var(--accent)]">
      {label}
    </span>
  );
}
