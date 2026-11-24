export const statusMeta = {
  completed: {
    label: 'Selesai',
    className: 'border-emerald-800/25 bg-emerald-800/10 text-emerald-900',
    dot: 'bg-emerald-700',
  },
  inProgress: {
    label: 'Dalam Pengembangan',
    className: 'border-amber-800/25 bg-amber-700/10 text-amber-900',
    dot: 'bg-amber-600',
  },
}

export const projects = [
  {
    id: 'order-service-microservices',
    title: 'Order Service — UTS Microservices',
    shortTitle: 'Order Service',
    year: '2026',
    category: 'Backend & API',
    status: 'completed',
    role: 'Backend Developer — order-service',
    summary:
      'Implementasi order-service untuk sistem e-commerce microservices: checkout dari keranjang, detail pesanan, daftar pesanan per user, dan pembayaran.',
    overview:
      'Order Service adalah bagian yang saya kerjakan dalam tugas UTS sistem e-commerce microservices. Sistemnya terdiri dari empat service dan empat database; fokus pengerjaan saya ada pada order-service, sementara product-service, cart-service, dan review-service dipakai sesuai kontrak yang sudah disediakan.',
    context:
      'Pada arsitektur monolit, proses checkout, produk, keranjang, dan ulasan bercampur dalam satu basis kode. Tugas ini memisahkan tiap domain menjadi service sendiri agar batas tanggung jawab dan database lebih jelas. Tantangan utamanya adalah menjaga konsistensi data pesanan saat berkomunikasi dengan service lain.',
    solution:
      'Order-service dibangun dengan Laravel 13/PHP 8.4 dan MySQL. Controller mengurus status HTTP dan format error, service layer mengurus validasi bisnis dan transaksi database, sedangkan client HTTP menangani komunikasi ke cart-service dan product-service. Nama dan harga produk disimpan sebagai snapshot di order item agar riwayat pesanan tidak berubah ketika data produk diperbarui. Seluruh sistem dijalankan dengan Docker Compose.',
    workflow: [
      'Client mengirim POST /orders dengan user_id.',
      'Order-service mengambil isi keranjang user dari cart-service.',
      'Setiap produk divalidasi ke product-service, termasuk ketersediaan stok.',
      'Pesanan dan item disimpan dalam satu transaksi database dengan snapshot nama dan harga.',
      'PATCH /orders/{id}/pay mengubah status PENDING menjadi PAID.',
      'Status yang tidak valid dikembalikan sebagai 409, sedangkan kegagalan service dependency sebagai 503.',
    ],
    features: [
      'Checkout dari keranjang melalui POST /orders',
      'Detail pesanan dan daftar pesanan per user dengan filter status',
      'Pembayaran pesanan lewat PATCH /orders/{id}/pay',
      'Validasi produk dan stok ke product-service',
      'Snapshot nama dan harga produk pada setiap order item',
      'Penanganan error 409 dan 503 yang eksplisit',
      'Endpoint health check /health',
    ],
    scope: [
      'Membangun order-service dengan Laravel 13/PHP 8.4 dan MySQL',
      'Merancang alur checkout dan pembayaran beserta penanganan error',
      'Menghubungkan order-service ke cart-service dan product-service',
      'Menyiapkan Docker Compose untuk menjalankan seluruh sistem secara lokal',
    ],
    note: 'Product-service, cart-service, dan review-service tidak saya ubah. Ketiganya dipakai apa adanya sesuai kontrak tugas, sehingga teknologi di dalamnya tidak dihitung sebagai bagian dari pengerjaan saya.',
    stack: ['Laravel 13', 'PHP 8.4', 'MySQL 8', 'REST API', 'Docker Compose'],
    stackGroups: [
      {
        label: 'Service yang saya kerjakan',
        items: ['Laravel 13', 'PHP 8.4', 'MySQL 8', 'REST API'],
      },
      {
        label: 'Infrastruktur',
        items: ['Docker', 'Docker Compose'],
      },
      {
        label: 'Service lain di ekosistem',
        items: ['Node.js / Express', 'Laravel', 'Python / Flask', 'PostgreSQL', 'MongoDB'],
      },
    ],
    repo: 'https://github.com/muhammadimam2802205-crypto/microservice',
    demo: null,
    image: '/projects/order-service.svg',
  },
  {
    id: 'toko-online',
    title: 'Toko Online — Platform E-Commerce',
    shortTitle: 'Toko Online',
    year: '2026',
    category: 'Full-Stack Web',
    status: 'completed',
    role: 'Full-Stack Developer',
    summary:
      'Aplikasi e-commerce Laravel dengan katalog, keranjang AJAX, checkout, pelacakan pesanan, ulasan, wishlist, dan dashboard admin/owner.',
    overview:
      'Toko Online adalah aplikasi e-commerce yang mencakup alur belanja dari katalog sampai pesanan selesai. Ada tiga peran pengguna—pelanggan, admin, dan owner—masing-masing dengan halaman dan hak akses sendiri.',
    context:
      'Pemilik toko membutuhkan satu tempat untuk mengelola produk, pesanan, pembayaran, dan pelanggan. Di sisi lain, pembeli membutuhkan alur belanja yang cepat, termasuk keranjang yang bisa diperbarui tanpa memuat ulang halaman.',
    solution:
      'Frontend memakai Blade, Tailwind CSS, Alpine.js, dan Vite. Keranjang diperbarui lewat AJAX, sedangkan checkout, pembatalan, refund, dan penyelesaian pesanan ditangani controller terpisah. Hak akses dipisahkan dengan middleware role untuk admin dan owner. Leaflet dipakai untuk menampilkan peta lokasi pesanan, dan dashboard owner menyediakan laporan serta analitik keranjang yang ditinggalkan.',
    workflow: [
      'Pelanggan melihat katalog, detail produk, dan menambahkan produk ke keranjang.',
      'Keranjang diperbarui lewat AJAX, lalu checkout membuat pesanan.',
      'Pelanggan memantau status, membatalkan, mengajukan refund, atau menyelesaikan pesanan.',
      'Setelah pesanan selesai, pelanggan dapat memberi ulasan dan menyimpan wishlist.',
      'Admin mengelola produk, kategori, pesanan, dan pengaturan pembayaran.',
      'Owner memantau laporan, pelanggan, dan analitik keranjang yang ditinggalkan.',
    ],
    features: [
      'Katalog produk, halaman detail, dan tombol chat WhatsApp',
      'Keranjang belanja AJAX dengan pembaruan jumlah dan harga',
      'Checkout serta pelacakan status pesanan',
      'Pembatalan, refund, dan penyelesaian pesanan',
      'Ulasan produk setelah pesanan selesai serta daftar wishlist',
      'Dashboard admin dan owner dengan pembatasan role',
      'Analitik abandoned cart dan pengingat pelanggan',
      'Peta lokasi pesanan menggunakan Leaflet',
      'Notifikasi pesanan untuk pelanggan',
    ],
    scope: [
      'Membangun alur pelanggan: katalog, keranjang, checkout, pesanan, ulasan, dan wishlist',
      'Membuat dashboard admin dan owner beserta middleware pembatasan role',
      'Mengintegrasikan Leaflet untuk peta lokasi pesanan',
      'Menambahkan analitik keranjang dan pengingat pelanggan',
    ],
    stack: ['Laravel 10', 'PHP 8.1', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'Leaflet'],
    stackGroups: [
      {
        label: 'Backend',
        items: ['Laravel 10', 'PHP 8.1', 'Sanctum'],
      },
      {
        label: 'Frontend',
        items: ['Blade', 'Tailwind CSS', 'Alpine.js', 'Bootstrap 5', 'Leaflet', 'Vite'],
      },
      {
        label: 'Database & Auth',
        items: ['MySQL', 'Laravel Breeze', 'Role middleware'],
      },
    ],
    repo: 'https://github.com/muhammadimam2802205-crypto/toko_online',
    demo: null,
    image: '/projects/toko-online.svg',
  },
  {
    id: 'sistem-perpustakaan',
    title: 'Sistem Informasi Perpustakaan',
    shortTitle: 'Perpustakaan',
    year: '2026',
    category: 'Full-Stack Web',
    status: 'completed',
    role: 'Full-Stack Developer',
    summary:
      'Sistem perpustakaan untuk buku, anggota, peminjaman, denda, dan perbaikan buku, dengan verifikasi OTP email dan pemisahan role admin/anggota.',
    overview:
      'Sistem Informasi Perpustakaan mengelola data buku dan anggota, transaksi peminjaman, pengembalian, denda, serta kondisi buku. Registrasi dan login diverifikasi dengan kode OTP yang dikirim ke email.',
    context:
      'Pencatatan peminjaman manual menyulitkan pemantauan stok, jatuh tempo, denda, dan buku yang perlu diperbaiki. Aplikasi ini memusatkan proses tersebut dengan hak akses yang jelas antara admin dan anggota.',
    solution:
      'Aplikasi dibangun dengan Laravel 12, Blade, dan MySQL, memakai AdminLTE dan Bootstrap untuk tampilan. Tabel users menyimpan role, dan middleware check.role membatasi aksi khusus admin. Kode OTP disimpan di tabel terpisah dan dikirim lewat mail. Peminjaman mengurangi stok buku; pengembalian memperbarui transaksi dan menghitung denda berdasarkan keterlambatan. Admin mengonfirmasi pembayaran denda dan mencatat perbaikan buku.',
    workflow: [
      'Anggota mendaftar, lalu memverifikasi kode OTP yang dikirim ke email.',
      'Anggota mencari buku dan mengajukan peminjaman.',
      'Sistem mencatat transaksi, mengurangi stok, dan menetapkan jatuh tempo.',
      'Saat pengembalian, sistem menghitung denda jika melewati jatuh tempo.',
      'Anggota melihat denda, lalu admin mengonfirmasi pembayaran.',
      'Admin mencatat perbaikan buku serta mengelola kategori dan anggota.',
    ],
    features: [
      'Registrasi, login, dan kirim ulang OTP email',
      'Role admin dan anggota dengan middleware check.role',
      'CRUD buku, kategori, anggota, dan transaksi',
      'Peminjaman dan pengembalian dengan perhitungan denda',
      'Konfirmasi pembayaran denda',
      'Pencatatan perbaikan buku',
      'Import data buku dari API eksternal',
      'Manajemen stok dan cover buku',
    ],
    scope: [
      'Membangun modul autentikasi dengan verifikasi OTP email',
      'Membuat CRUD buku, kategori, anggota, dan transaksi',
      'Menerapkan alur peminjaman, pengembalian, dan perhitungan denda',
      'Membuat konfirmasi pembayaran denda dan pencatatan perbaikan buku',
      'Menambahkan import data buku dari API',
    ],
    stack: ['Laravel 12', 'PHP 8.2', 'MySQL', 'AdminLTE', 'Bootstrap', 'Vite'],
    stackGroups: [
      {
        label: 'Backend',
        items: ['Laravel 12', 'PHP 8.2'],
      },
      {
        label: 'Frontend',
        items: ['Blade', 'AdminLTE 3.2', 'Bootstrap 5', 'Vite'],
      },
      {
        label: 'Database & Auth',
        items: ['MySQL', 'OTP email', 'Role middleware'],
      },
    ],
    repo: 'https://github.com/muhammadimam2802205-crypto/Perpustakaan',
    demo: null,
    image: '/projects/perpustakaan.svg',
  },
  {
    id: 'data-sekolah',
    title: 'Sistem Informasi & Pemetaan Sekolah',
    shortTitle: 'Data Sekolah',
    year: '2026',
    category: 'Web & GIS',
    status: 'completed',
    role: 'Full-Stack Developer',
    summary:
      'Platform data sekolah dengan direktori publik, peta sebaran, pengelolaan operator, dan laporan untuk super admin.',
    overview:
      'Aplikasi ini menggabungkan pendataan sekolah dengan peta interaktif. Ada halaman publik untuk direktori dan detail sekolah, area admin/operator untuk memperbarui data, serta area super admin untuk mengelola seluruh sekolah dan operator.',
    context:
      'Data sekolah tersebar dan sulit dilihat sebarannya. Dibutuhkan satu sistem yang menyimpan profil sekolah sekaligus menampilkan lokasinya di peta, dengan hak akses yang sesuai untuk pengelola data.',
    solution:
      'Dibangun dengan CodeIgniter 4 dan MySQL. Tiga level akses dipisahkan: publik, admin/operator, dan super admin. Operator hanya mengelola profil, visi, kepala sekolah, dan lokasi sekolahnya; super admin mengelola data sekolah, operator, peta, dan laporan. Leaflet dipakai untuk peta sebaran dengan koordinat latitude/longitude dari database.',
    workflow: [
      'Pengunjung membuka direktori atau halaman publik sekolah.',
      'Halaman detail menampilkan profil, visi, kepala sekolah, dan lokasi sekolah.',
      'Operator login dan memperbarui data sekolahnya.',
      'Super admin mengelola seluruh sekolah dan akun operator.',
      'Peta menampilkan sebaran sekolah dari koordinat yang tersimpan.',
      'Super admin melihat laporan data sekolah.',
    ],
    features: [
      'Direktori dan halaman detail sekolah untuk publik',
      'Peta sebaran sekolah dengan Leaflet',
      'Role super admin, admin/operator, dan publik',
      'Pengelolaan profil, visi, kepala sekolah, dan lokasi',
      'Manajemen akun operator',
      'Laporan data sekolah untuk super admin',
      'Halaman publik full-screen untuk informasi sekolah',
    ],
    scope: [
      'Membangun halaman publik direktori dan detail sekolah',
      'Membuat peta sebaran sekolah dengan Leaflet',
      'Menerapkan pemisahan hak akses super admin dan operator',
      'Membuat pengelolaan profil sekolah, visi, kepala sekolah, dan lokasi',
      'Menambahkan manajemen operator dan laporan data sekolah',
    ],
    stack: ['CodeIgniter 4', 'PHP 8.2', 'MySQL', 'Leaflet', 'Bootstrap'],
    stackGroups: [
      {
        label: 'Backend',
        items: ['CodeIgniter 4', 'PHP 8.2'],
      },
      {
        label: 'Frontend',
        items: ['PHP Views', 'Bootstrap', 'Leaflet'],
      },
      {
        label: 'Database & Peta',
        items: ['MySQL', 'Leaflet', 'Latitude / Longitude'],
      },
    ],
    repo: 'https://github.com/muhammadimam2802205-crypto/project-based-learning-',
    demo: null,
    image: '/projects/data-sekolah.svg',
  },
  {
    id: 'omdb-movie-catalog',
    title: 'OMDb Movie Catalog',
    shortTitle: 'OMDb Catalog',
    year: '2026',
    category: 'Web App',
    status: 'completed',
    role: 'Full-Stack Developer',
    summary:
      'Katalog film berbasis Laravel yang memakai OMDb API untuk pencarian dan detail film, dengan favorit, panel kontrol, dan antarmuka dua bahasa.',
    overview:
      'OMDb Movie Catalog adalah aplikasi web untuk mencari film dan menyimpannya ke daftar favorit. Data film diambil langsung dari OMDb API, sedangkan data pengguna dan favorit disimpan di database aplikasi.',
    context:
      'Informasi film biasanya tersebar di banyak sumber. Aplikasi ini menyatukan pencarian, detail, dan koleksi favorit dalam satu alur, sekaligus menyediakan pilihan bahasa Indonesia dan Inggris.',
    solution:
      'Laravel menangani autentikasi, routing, dan penyimpanan favorit, sedangkan GuzzleHTTP memanggil OMDb API. MovieService memisahkan logika pencarian dan detail dari controller. Middleware bahasa menyimpan pilihan locale di session dan menerjemahkan antarmuka. Panel kontrol memakai template Stisla untuk tabel film dan daftar favorit.',
    workflow: [
      'Pengguna mendaftar atau masuk.',
      'Pengguna mencari film; MovieService mengirim query ke OMDb API.',
      'Hasil pencarian ditampilkan dengan pagination, lalu detail film diambil lewat IMDb ID.',
      'Film dapat ditambahkan atau dihapus dari favorit.',
      'Pilihan bahasa disimpan di session dan dipakai di seluruh halaman.',
    ],
    features: [
      'Pencarian film dan pagination lewat OMDb API',
      'Halaman detail film berdasarkan IMDb ID',
      'Favorit per pengguna (tambah dan hapus)',
      'Registrasi, login, dan logout',
      'Panel kontrol untuk daftar film dan favorit',
      'Pergantian bahasa Indonesia dan Inggris',
      'Penanganan error saat OMDb API gagal diakses',
    ],
    scope: [
      'Membangun alur autentikasi dan halaman pencarian film',
      'Mengintegrasikan OMDb API lewat GuzzleHTTP dan service layer',
      'Membuat fitur favorit dan panel kontrol',
      'Menerapkan middleware bahasa serta terjemahan antarmuka',
    ],
    stack: ['Laravel 12', 'PHP 8.2', 'MySQL', 'OMDb API', 'Blade', 'Bootstrap'],
    stackGroups: [
      {
        label: 'Backend',
        items: ['Laravel 12', 'PHP 8.2', 'GuzzleHTTP'],
      },
      {
        label: 'Frontend',
        items: ['Blade', 'Stisla', 'Bootstrap', 'JavaScript'],
      },
      {
        label: 'Database & API',
        items: ['MySQL', 'OMDb API'],
      },
    ],
    repo: 'https://github.com/muhammadimam2802205-crypto/omdb_Muhammadimam',
    demo: null,
    image: '/projects/omdb.svg',
  },
  {
    id: 'kedai-ummi',
    title: 'Kedai Ummi — Aplikasi Pemesanan Makanan',
    shortTitle: 'Kedai Ummi',
    year: '2026',
    category: 'Mobile App',
    status: 'completed',
    role: 'Mobile Developer',
    summary:
      'Aplikasi Flutter untuk UMKM Kedai Ummi: pesan makanan dengan layanan dine-in, takeaway, dan delivery, lengkap dengan panel admin dan pelacakan pesanan.',
    overview:
      'Kedai Ummi adalah aplikasi pemesanan makanan untuk UMKM yang menjual kebab, burger, bakso, mie ayam, lotek, nasi goreng, dan aneka minuman. Ada dua peran—pelanggan dan admin kedai—dalam satu aplikasi Android yang juga dapat dijalankan di web.',
    context:
      'Pesanan yang masuk lewat chat dan catatan manual menyulitkan pemilik kedai memantau menu, pembayaran, dan pengiriman. Aplikasi ini menyatukan katalog, keranjang, checkout, pembayaran, dan pengelolaan operasional dalam satu alur.',
    solution:
      'Dibangun dengan Flutter dan Dart, memakai Riverpod untuk state management serta go_router untuk navigasi dengan guard role. Data disimpan di perangkat melalui shared_preferences dan diisolasi di lib/data agar mudah dipindahkan ke API Laravel. Tampilan memakai design token, widget reusable, dan motion system untuk transisi halaman, onboarding, skeleton, serta micro-interaction. Versi web memakai penanganan gambar berbasis blob agar unggah bukti pembayaran tetap berjalan.',
    workflow: [
      'Pelanggan membuka aplikasi, melewati onboarding, lalu masuk atau mendaftar.',
      'Pelanggan memilih menu, varian, jumlah, dan menambahkan produk ke keranjang.',
      'Checkout menentukan layanan dine-in, takeaway, atau delivery beserta alamat dan zona tarif.',
      'Pelanggan memilih pembayaran tunai, transfer, atau QRIS lalu mengunggah bukti bila diperlukan.',
      'Admin memverifikasi pembayaran, memproses pesanan, dan menugaskan kurir untuk delivery.',
      'Pelanggan memantau status lewat timeline dan melihat riwayat pesanan.',
    ],
    features: [
      'Peran pelanggan dan admin dalam satu aplikasi',
      'Layanan dine-in, takeaway, dan delivery',
      'Katalog menu dengan pencarian, kategori, varian, dan foto asli',
      'Keranjang, checkout, dan pemilihan meja atau alamat',
      'Pembayaran tunai, transfer, dan QRIS dengan verifikasi admin',
      'Unggah bukti bayar dan pelacakan status pesanan',
      'Dashboard admin, CRUD produk/kategori, zona, kurir, dan meja',
      'Laporan penjualan dan pengaturan status kedai',
      'Onboarding, splash, dan motion system yang menghormati reduced motion',
      'Build web dan Android dari satu basis kode Flutter',
    ],
    scope: [
      'Membangun alur pelanggan dari katalog sampai pelacakan pesanan',
      'Membuat panel admin untuk pesanan, produk, pembayaran, dan pengiriman',
      'Menerapkan Riverpod, go_router, dan guard role',
      'Menyusun design token, widget reusable, dan motion system',
      'Menyiapkan penyimpanan lokal yang siap diganti API Laravel',
      'Menjalankan flutter analyze, 24 tes, serta build Android dan web',
    ],
    note: 'Versi MVP berjalan dengan penyimpanan lokal perangkat dan data contoh. Harga, foto, rekening, serta zona pengiriman masih perlu diganti data asli Kedai Ummi sebelum dipakai operasional.',
    stack: ['Flutter', 'Dart', 'Riverpod', 'go_router', 'SharedPreferences', 'Android'],
    stackGroups: [
      {
        label: 'Mobile',
        items: ['Flutter', 'Dart', 'Android', 'Web build'],
      },
      {
        label: 'State & Navigation',
        items: ['Riverpod', 'go_router'],
      },
      {
        label: 'Data & Penyimpanan',
        items: ['shared_preferences', 'LocalStore'],
      },
    ],
    repo: 'https://github.com/muhammadimam2802205-crypto/warung-ummi',
    demo: null,
    image: '/projects/kedai-ummi.svg',
  },
]
