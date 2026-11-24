const PAPER_GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")"

export default function PhotoPrint({
  src,
  alt,
  caption,
  note = '2026',
  className = '',
  imgClassName = '',
  priority = false,
}) {
  return (
    <figure
      className={`paper-card relative border border-ink/20 p-2.5 shadow-photo sm:p-3 ${className}`}
    >
      <div className="relative overflow-hidden border border-ink/15 bg-paper-dark">
        <img
          src={src}
          alt={alt}
          width="800"
          height="1000"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          draggable={false}
          className={`aspect-[4/5] w-full object-cover ${imgClassName}`}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-multiply"
          style={{ backgroundImage: PAPER_GRAIN }}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 shadow-[inset_0_0_28px_rgba(23,22,20,0.14)]"
        />
      </div>

      <figcaption className="flex items-end justify-between gap-3 px-0.5 pt-2.5">
        <span className="min-w-0 truncate text-[8px] font-semibold uppercase tracking-[0.2em] text-ink/55">
          {caption}
        </span>
        <span className="shrink-0 font-editorial text-[11px] italic leading-none text-accent">
          {note}
        </span>
      </figcaption>
    </figure>
  )
}
