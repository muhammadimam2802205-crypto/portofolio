export default function TiltedMarquee({ items = [] }) {
  // Gandakan array agar teks berjalan tanpa putus (infinite loop)
  const list = [...items, ...items]

  return (
    <section className="relative overflow-hidden bg-paper py-9 md:py-12">
      <div className="relative -left-[5%] w-[110%] -rotate-[1.5deg] border-y border-ink/25 bg-ink py-3 shadow-paper md:py-4">
        <div
          className="flex w-max whitespace-nowrap will-change-transform"
          style={{ animation: 'marquee 38s linear infinite' }}
        >
          {list.map((item, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center px-7 font-display text-xl uppercase tracking-wide text-paper/75 transition-colors duration-300 hover:text-paper md:px-10 md:text-3xl"
            >
              {item}
              <span className="ml-7 h-2 w-2 rotate-45 bg-accent-soft md:ml-10 md:h-2.5 md:w-2.5" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
