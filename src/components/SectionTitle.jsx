export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-10 md:mb-14">
      {eyebrow && (
        <p className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-maroon-light font-medium mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-5xl text-white leading-tight tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm md:text-base text-white/60 max-w-xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}