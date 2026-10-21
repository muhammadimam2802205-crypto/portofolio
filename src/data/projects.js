export const projects = [
  {
    id: 'ecommerce-api',
    title: 'E-Commerce API',
    year: '2025',
    category: 'Backend & API',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    summary:
      'REST API untuk platform e-commerce dengan autentikasi, keranjang, order, dan integrasi payment gateway.',
    description:
      'Proyek ini menyediakan endpoint lengkap untuk kebutuhan toko online: manajemen produk, autentikasi JWT, keranjang belanja, pembuatan order, dan integrasi payment gateway. Struktur modular dengan validasi input yang ketat dan rate limiting.',
    role: 'Backend Developer',
    highlights: [
      'Autentikasi JWT dengan refresh token',
      'Validasi request dengan Zod',
      'Rate limiting & dokumentasi Swagger',
      'Unit test dengan Jest (80%+ coverage)',
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    link: '#',
  },
  {
    id: 'mobile-fitness',
    title: 'Fitness Tracker App',
    year: '2024',
    category: 'Mobile Development',
    stack: ['React Native', 'Expo', 'SQLite'],
    summary:
      'Aplikasi mobile untuk mencatat latihan harian, target kebugaran, dan progres mingguan.',
    description:
      'Aplikasi mobile offline-first untuk mencatat latihan, menghitung kalori, dan menyimpan riwayat. UI dibuat ringan dan responsif, dengan penyimpanan lokal SQLite agar tetap bisa dipakai tanpa internet.',
    role: 'Mobile Developer',
    highlights: [
      'Offline-first dengan SQLite',
      'Chart progres mingguan',
      'Notifikasi pengingat latihan',
      'Build via EAS & publish ke Play Store',
    ],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80',
    link: '#',
  },
  {
    id: 'dashboard-analytics',
    title: 'Analytics Dashboard',
    year: '2025',
    category: 'Web Development',
    stack: ['React', 'Vite', 'Tailwind', 'Chart.js'],
    summary:
      'Dashboard internal untuk memantau metrik bisnis real-time dengan filter dan ekspor data.',
    description:
      'Dashboard admin untuk tim internal memantau KPI harian. Menampilkan grafik real-time, filter berdasarkan rentang tanggal, dan ekspor ke CSV/PDF. Dibangun di atas React + Vite dengan performa loading yang ringan.',
    role: 'Frontend Developer',
    highlights: [
      'Real-time update via WebSocket',
      'Filter tanggal & kategori',
      'Ekspor CSV & PDF',
      'Role-based access control',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    link: '#',
  },
]