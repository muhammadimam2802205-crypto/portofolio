export default function BrowserFrame({
  src,
  alt,
  url = 'imam.dev',
  aspect = 'aspect-[4/3]',
  className = '',
  imgClassName = '',
  priority = false,
  children,
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-ink/20 bg-paper-light shadow-photo ${className}`}
    >
      <div className="relative flex items-center gap-1.5 border-b border-ink/15 bg-[#e6dfcd] px-2.5 py-1.5">
        <span className="h-2 w-2 rounded-full bg-[#c26b5a]" />
        <span className="h-2 w-2 rounded-full bg-[#d6ab5b]" />
        <span className="h-2 w-2 rounded-full bg-[#8ea375]" />
        <span className="absolute inset-x-12 truncate text-center text-[9px] tracking-[0.08em] text-ink/45">
          {url}
        </span>
      </div>
      <div className={`relative ${aspect} overflow-hidden bg-paper-dark`}>
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          draggable={false}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
        {children}
      </div>
    </div>
  )
}
