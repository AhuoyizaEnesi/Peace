export default function TechNotes({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <details className="text-sm">
      <summary className="cursor-pointer font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border)]">
        Technical Notes
      </summary>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-[var(--muted)]">
        {items.map((item, i) => (
          <li key={`${i}-${item}`}>{item}</li>
        ))}
      </ul>
    </details>
  );
}
