export default function TiltedMarquee({ items = [] }) {
  // Gandakan array agar teks berjalan tanpa putus (infinite loop)
  const list = [...items, ...items]

  return (
    // Wrapper utama: Putih di atas (menyatu dengan About)
    <section className="relative w-full overflow-hidden bg-[#fafafa]">
      
      {/* ====================================================
          1. LATAR BELAKANG HITAM + SHADOW MIRING
      ==================================================== */}
      <div
        className="absolute inset-0 z-0"
        // GUNAKAN DROP-SHADOW: Membuat bayangan mengikuti bentuk clipPath
        // Nilai -15px artinya bayangan dilempar ke atas (ke area putih)
        style={{ filter: 'drop-shadow(0px -15px 25px rgba(0,0,0,0.4))' }}
      >
        <div
          className="absolute inset-0 bg-[#0a0a0a]"
          // UBAH 100% MENJADI 105%: Trik agar garis putih di bawah hilang total
          style={{ clipPath: 'polygon(0 3rem, 100% 0, 100% 105%, 0 105%)' }}
        >
          {/* Efek Glow marun di belakang teks */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,50,50,0.15)_0%,transparent_70%)] pointer-events-none" />
        </div>
      </div>

      {/* ====================================================
          2. KONTAINER TEKS 
      ==================================================== */}
      <div className="relative z-10 w-[120%] -left-[10%] -rotate-[2.5deg] py-10 md:py-19">
        
        {/* Track Animasi Marquee */}
        <div
          className="flex w-max whitespace-nowrap will-change-transform"
          style={{ animation: 'marquee 35s linear infinite' }}
        >
          {list.map((item, i) => (
            <span
              key={i}
              className="flex items-center shrink-0 px-8 md:px-12 font-display text-3xl md:text-5xl uppercase text-white/50 tracking-tight hover:text-white transition-colors duration-500 cursor-default"
            >
              {item}
              {/* Titik merah marun pemisah */}
              <span className="ml-8 md:ml-12 w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-maroon-light shadow-[0_0_12px_rgba(168,50,50,0.8)]" />
            </span>
          ))}
        </div>

      </div>
      
    </section>
  )
}