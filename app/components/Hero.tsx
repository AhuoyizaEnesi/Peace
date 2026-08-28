import { name, tagline, techSignals } from "@/app/data/profile";

export default function Hero() {
  if (!name && !tagline && techSignals.length === 0) return null;
  return (
    <section>
      {name && <h1 className="text-3xl font-semibold">{name}</h1>}
      {tagline && <p className="mt-2 text-[var(--muted)]">{tagline}</p>}
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
