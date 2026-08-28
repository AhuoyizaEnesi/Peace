import Image from "next/image";
import type { Project } from "@/app/data/projects";
import ArchitectureStrip from "./ArchitectureStrip";
import LinkButton from "./LinkButton";
import MetricChip from "./MetricChip";
import TechNotes from "./TechNotes";

export default function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const {
    title,
    subtitle,
    recognition,
    certificate,
    certificateImage,
    metrics,
    screenshots,
    architecture,
    blocks,
    notes,
    links,
    slabColor,
    marginNote,
    photos = [],
    photosCaption,
  } = project;

  const isExternal = /^https?:\/\//.test(certificate ?? "");
  const marker = `${String(index).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  const metricsRow =
    metrics.length > 0 ? (
      <ul className="flex flex-wrap gap-2">
        {metrics.map((m, i) => (
          <li key={`${i}-${m}`}>
            <MetricChip label={m} background={i === 0 ? slabColor : undefined} />
          </li>
        ))}
      </ul>
    ) : null;

  const screenshotList =
    screenshots.length > 0 ? (
      <ul className="flex flex-col gap-3 md:-mr-[calc(1.5rem+24px)] md:flex-row">
        {screenshots.map((s, i) => (
          <li key={`${i}-${s.src}`} className="min-w-0 flex-1">
            <figure>
              <Image
                src={s.src}
                alt={s.alt}
                width={s.width}
                height={s.height}
                loading="eager"
                sizes="(min-width: 768px) 900px, 100vw"
                className="h-auto w-full border-2 border-[var(--border)]"
              />
              {s.caption && (
                <figcaption className="mt-1 font-mono text-xs text-[var(--muted)]">
                  {s.caption}
                </figcaption>
              )}
            </figure>
          </li>
        ))}
      </ul>
    ) : null;

  const photoRow =
    photos.length > 0 ? (
      <figure className="mt-3">
        <ul className="grid gap-3 md:grid-cols-3">
          {photos.map((p, i) => (
            <li key={`${i}-${p.src}`} className="min-w-0">
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                loading="eager"
                sizes="(min-width: 768px) 300px, 100vw"
                className="h-auto w-full border-2 border-[var(--border)]"
              />
            </li>
          ))}
        </ul>
        {photosCaption && (
          <figcaption className="mt-1 font-mono text-xs text-[var(--muted)]">
            {photosCaption}
          </figcaption>
        )}
      </figure>
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
            <dt className="font-mono text-xs lowercase text-[var(--muted)]">
              {b.label}
            </dt>
            <dd className="text-sm">{b.body}</dd>
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
    <div className="md:grid md:grid-cols-[minmax(0,1fr)_130px] md:gap-6">
      <article className="border-2 border-[var(--border)] bg-[var(--card)]">
        <div
          aria-hidden="true"
          className="h-[10px] border-b-2 border-[var(--border)]"
          style={{ background: slabColor }}
        />
        <div className="p-6">
          <header className="space-y-1">
            <div className="flex flex-wrap items-baseline gap-3">
              {title && <h2 className="text-xl font-semibold">{title}</h2>}
              <span className="font-mono text-sm text-[var(--muted)]">{marker}</span>
            </div>
            {subtitle && <p className="text-[var(--muted)]">{subtitle}</p>}
            {marginNote && (
              <p className="font-mono text-xs text-[var(--muted)] md:hidden">
                {marginNote}
              </p>
            )}
            {recognition && (
              <p className="text-sm">
                {recognition}
                {certificate && (isExternal || !certificateImage) && (
                  <>
                    {" "}
                    <a
                      href={certificate}
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="underline decoration-2 underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border)]"
                    >
                      {isExternal ? "Award" : "Certificate"}
                    </a>
                  </>
                )}
              </p>
            )}
            {certificate && !isExternal && certificateImage && (
              <a
                href={certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block w-[180px] max-w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border)]"
              >
                <Image
                  src={certificate}
                  alt={certificateImage.alt}
                  width={certificateImage.width}
                  height={certificateImage.height}
                  loading="eager"
                  sizes="180px"
                  className="h-auto w-full border-2 border-[var(--border)]"
                />
              </a>
            )}
          </header>

          {/* Mobile: metrics, screenshots, blocks, links. Desktop: screenshots full width, then two columns. */}
          <div className="mt-4 flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6">
            <div className="order-2 md:order-1 md:col-span-2">
              {screenshotList}
              {photoRow}
            </div>
            <div className="order-1 md:order-2">{metricsRow}</div>
            <div className="order-3 space-y-4 md:order-3">
              {blockList}
              <TechNotes items={notes} />
            </div>
            <div className="order-4 space-y-4 md:order-4 md:col-start-1 md:row-start-3">
              {architectureList}
              {linkRow}
            </div>
          </div>
        </div>
      </article>
      {marginNote && (
        <aside className="hidden pt-4 font-mono text-xs leading-relaxed text-[var(--muted)] md:block">
          {marginNote}
        </aside>
      )}
    </div>
  );
}
