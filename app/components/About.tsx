import { about, links } from "@/app/data/profile";
import LinkButton from "./LinkButton";

export default function About() {
  const entries = [
    { label: "GitHub", href: links.github },
    { label: "LinkedIn", href: links.linkedin },
    { label: "Email", href: links.email ? `mailto:${links.email}` : "" },
    { label: "Resume", href: links.resume },
  ].filter((e) => e.href);

  if (!about && entries.length === 0) return null;
  return (
    <section>
      <h2 className="text-xl font-semibold">About</h2>
      {about && <p className="mt-3 max-w-prose text-[var(--muted)]">{about}</p>}
      <ul className="mt-4 flex flex-wrap gap-2">
        {entries.map((e) => (
          <li key={e.label}>
            <LinkButton label={e.label} href={e.href} />
          </li>
        ))}
      </ul>
    </section>
  );
}
