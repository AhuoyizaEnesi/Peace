export default function ArchitectureStrip({ nodes }: { nodes: string[] }) {
  if (nodes.length === 0) return null;
  return (
    <p className="font-mono text-xs text-[var(--text)]">{nodes.join(" \u2192 ")}</p>
  );
}
