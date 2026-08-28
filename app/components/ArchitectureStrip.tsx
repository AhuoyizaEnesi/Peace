export default function ArchitectureStrip({ nodes }: { nodes: string[] }) {
  if (nodes.length === 0) return null;
  return (
    <ol className="flex flex-wrap items-center gap-2 font-mono text-xs">
      {nodes.map((node, i) => (
        <li key={`${i}-${node}`} className="flex items-center gap-2">
          {i > 0 && (
            <span aria-hidden="true" className="text-[var(--muted)]">
              →
            </span>
          )}
          <span className="rounded-md border border-[var(--border)] px-2 py-1">
            {node}
          </span>
        </li>
      ))}
    </ol>
  );
}
