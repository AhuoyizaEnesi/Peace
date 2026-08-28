import Image from "next/image";
import type { Project } from "@/app/data/projects";
import ArchitectureStrip from "./ArchitectureStrip";
import LinkButton from "./LinkButton";
import MetricChip from "./MetricChip";
import TechNotes from "./TechNotes";

export default function ProjectCard({ project }: { project: Project }) {
  const {
    title,
    subtitle,
    recognition,
    certificate,
    metrics,
    screenshots,
    architecture,
    blocks,
    notes,
    links,
  } = project;

  const isExternal = /^https?:\/\//.test(certificate ?? "");

  const metricsRow =
    metrics.length > 0 ? (
      <ul className="flex flex-wrap gap-2">
        {metrics.map((m, i) => (
          <li key={`${i}-${m}`}>
            <MetricChip label={m} />
          </li>
        ))}
      </ul>
    ) : null;

  const screenshotList =
    screenshots.length > 0 ? (
      <ul className="flex flex-col gap-3 md:flex-row">
        {screenshots.map((s, i) => (
          <li key={`${i}-${s.src}`} className="min-w-0 flex-1">
            <figure>
              <Image
                src={s.src}
                alt={s.alt}
                width={s.width}
                height={s.height}
                loading="eager"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-auto w-full rounded-xl border border-[var(--border)]"
              />
              {s.caption && (
                <figcaption className="mt-1 text-xs text-[var(--muted)]">
                  {s.caption}
                </figcaption>
              )}
            </figure>
          </li>
        ))}
      </ul>
    ) : null;

  const architectureList =
    architecture.length > 0 ? (
      <div className="space-y-2">
        {architecture.map((nodes, i) => (
          <ArchitectureStrip key={i} nodes={nodes} />
        ))}
      </div>
    ) : null;

  const blockList =
    blocks.length > 0 ? (
      <dl className="space-y-3">
        {blocks.map((b, i) => (
          <div key={`${i}-${b.label}`}>
            <dt className="text-sm font-medium">{b.label}</dt>
            <dd className="text-sm text-[var(--muted)]">{b.body}</dd>
          </div>
        ))}
      </dl>
    ) : null;

  const linkRow =
    links.length > 0 ? (
      <ul className="flex flex-wrap gap-2">
        {links.map((l, i) => (
          <li key={`${i}-${l.label}`}>
            <LinkButton label={l.label} href={l.href} />
          </li>
        ))}
      </ul>
    ) : null;

  return (
    <article className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
      <header className="space-y-1">
        {title && <h2 className="text-xl font-semibold">{title}</h2>}
        {subtitle && <p className="text-[var(--muted)]">{subtitle}</p>}
        {recognition && (
          <p className="text-sm">
            {recognition}
            {certificate && (
              <>
                {" "}
                <a
                  href={certificate}
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-[var(--accent)] underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                >
                  {isExternal ? "Award" : "Certificate"}
                </a>
              </>
            )}
          </p>
        )}
      </header>

      {/* Mobile: single column in spec order. Desktop (md+): two columns. */}
      <div className="mt-4 flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6">
        <div className="order-1 md:order-2 md:col-start-2 md:row-start-1">
          {metricsRow}
        </div>
        <div className="order-2 md:order-1 md:col-start-1 md:row-start-1 md:row-span-2 md:space-y-4">
          {screenshotList}
          {architectureList}
          <div className="hidden md:block">{linkRow}</div>
        </div>
        <div className="order-3 space-y-4 md:col-start-2 md:row-start-2">
          {blockList}
          <TechNotes items={notes} />
        </div>
        <div className="order-4 md:hidden">{linkRow}</div>
      </div>
    </article>
  );
}
