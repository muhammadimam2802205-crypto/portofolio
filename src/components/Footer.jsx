export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-base">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
        <p>
          © {new Date().getFullYear()} Muhammad Imam. Dibangun dengan React &amp;
          Tailwind.
        </p>
        <p className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-maroon-light animate-pulse" />
          Tersedia untuk proyek baru
        </p>
      </div>
    </footer>
  )
}