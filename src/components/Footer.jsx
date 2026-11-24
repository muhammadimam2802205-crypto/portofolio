export default function Footer() {
  return (
    <footer className="border-t border-ink/15">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 text-[10px] uppercase tracking-[0.16em] text-ink/40 sm:flex-row md:px-10">
        <p>
          © {new Date().getFullYear()} Muhammad Imam — React, Vite &amp; Tailwind
          CSS
        </p>
        <p className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Terbuka untuk magang &amp; kolaborasi
        </p>
      </div>
    </footer>
  )
}
