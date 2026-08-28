import { name, tagline, techSignals } from "@/app/data/profile";

const slabs = ["var(--slab-1)", "var(--slab-2)", "var(--slab-3)"];

export default function Hero() {
  if (!name && !tagline && techSignals.length === 0) return null;
  return (
    <section>
      {name && (
        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          {name}
        </h1>
      )}
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <span className="inline-block border-2 border-[var(--border)] bg-[var(--slab-1)] px-2 py-1 font-mono text-xs text-[var(--text)]">
          builds real-time systems
        </span>
        <ul aria-hidden="true" className="flex gap-2">
          {slabs.map((c) => (
            <li
              key={c}
              className="h-4 w-4 border-2 border-[var(--border)]"
              style={{ background: c }}
            />
          ))}
        </ul>
      </div>
      {tagline && <p className="mt-4 text-[var(--muted)]">{tagline}</p>}
      {techSignals.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-[var(--muted)]">
          {techSignals.map((s, i) => (
            <li key={`${i}-${s}`}>{s}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
