export function XGrid({ rows = 2, cols = 6, className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`grid gap-x-2.5 gap-y-1 font-sans text-[11px] leading-none text-ink/55 ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: rows * cols }).map((_, index) => (
        <span key={index}>×</span>
      ))}
    </div>
  )
}

export function TornEdge({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 160"
      fill="currentColor"
      className={className}
      preserveAspectRatio="none"
    >
      <path d="M24 0 L5 3 L17 10 L3 16 L19 23 L6 30 L21 37 L4 44 L18 51 L2 58 L20 65 L5 72 L22 79 L3 86 L19 93 L6 100 L21 107 L4 114 L18 121 L2 128 L20 135 L5 142 L22 149 L3 156 L24 159 Z" />
    </svg>
  )
}

export function TapeStrip({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`h-5 w-24 border border-ink/10 bg-[#d7ccb2]/80 shadow-sm ${className}`}
    />
  )
}
