import type { GamesToolLocaleContent as GamesToolLocaleContentType } from '../../../index';

const slug = 'tes-kecepatan-mengetik';
const title = 'Tes Kecepatan Mengetik: Ukur Kecepatan Mengetik Anda';
const description = 'Tes mengetik sepenuhnya offline dengan gamifikasi yang seru. Ukur KPM (WPM) Anda, akurasi, dan pencapaian. Berlomba dengan diri sendiri dan tingkatkan kecepatan mengetik Anda.';

const faqItems = [
  { question: 'Berapa rata-rata kecepatan mengetik?', answer: 'Kecepatan rata-rata orang dewasa adalah 40-60 KPM (kata per menit). Pengetik mahir mencapai 70-100 KPM. Pengetik tercepat melampaui 200 KPM. Tes ini menunjukkan posisi Anda.' },
  { question: 'Bagaimana KPM dihitung?', answer: 'Ambil karakter yang benar, bagi dengan 5 (panjang kata rata-rata), bagi dengan menit yang berlalu. Ini secara otomatis mengurangi skor untuk kesalahan, memberikan Anda kecepatan bersih yang adil.' },
  { question: 'Apakah hasil saya disimpan?', answer: 'Ya, secara lokal di browser Anda. KPM terbaik Anda disimpan secara otomatis. Tidak ada orang lain yang melihat hasil Anda kecuali Anda membagikannya.' },
  { question: 'Apakah ini akurat tanpa internet?', answer: 'Sangat akurat. Tes ini berjalan 100% di browser Anda tanpa mengirim data ke server. Itu berarti presisi milidetik, nol latensi jaringan.' },
  { question: 'Berapa lama untuk meningkatkan kecepatan saya?', answer: 'Peningkatan nyata dalam 2-3 minggu dengan latihan konsisten. Perubahan drastis (misalnya, dari 50 ke 100 KPM) butuh 3-6 bulan latihan serius.' },
  { question: 'Bisakah saya berlatih tanpa internet?', answer: 'Tentu. Tes ini 100% offline. Muat sekali, lalu mainkan tanpa internet. Sangat cocok untuk perjalanan atau saat WiFi mati.' },
];

const howToItems = [
  { name: 'Mulai mengetik', text: 'Mulai saja mengetik. Timer dimulai otomatis pada ketukan pertama. Anda memiliki waktu 60 detik.' },
  { name: 'Ketik kata dengan benar', text: 'Kata yang benar akan di-highlight warna cyan. Huruf yang salah berubah menjadi merah. Selesaikan setiap kata tanpa kesalahan agar terhitung.' },
  { name: 'Pantau kemajuan langsung', text: 'KPM, akurasi, dan jumlah kata Anda diperbarui secara real-time saat Anda mengetik.' },
  { name: 'Dapatkan hasil akhir', text: 'Setelah waktu habis, lihat KPM akhir Anda, akurasi total, dan opsi untuk membagikan hasil.' },
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howToItems.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: GamesToolLocaleContentType = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  bibliographyTitle: 'Referensi',
  ui: {
    words: 'Kata',
    wpm: 'KPM',
    accuracy: 'Akurasi',
    timeUp: 'Waktu Habis!',
    playAgain: 'Main Lagi',
    share: 'Bagikan',
    copied: 'Disalin!',
  },
  wordPool: [
    'rumah', 'anjing', 'kucing', 'matahari', 'bulan', 'cinta', 'tawa', 'permainan', 'waktu', 'hidup',
    'mati', 'malam', 'siang', 'teman', 'keluarga', 'makan', 'minum', 'tidur', 'mimpi', 'lari',
    'joget', 'nyanyi', 'lompat', 'terbang', 'renang', 'jalan', 'buku', 'kata', 'huruf', 'angka',
    'warna', 'pohon', 'bunga', 'air', 'api', 'udara', 'bumi', 'laut', 'gunung', 'sungai',
    'langit', 'bintang', 'awan', 'angin', 'hujan', 'salju', 'es', 'panas', 'dingin', 'cahaya',
    'petualangan', 'misteri', 'luar angkasa', 'alam semesta', 'planet', 'komet', 'rasi bintang', 'galaksi',
    'komputer', 'layar', 'sistem', 'koneksi', 'internet', 'browser', 'instrumen', 'melodi',
    'harmoni', 'ritme', 'tari', 'teater', 'film', 'aktor', 'sutradara', 'adegan', 'karakter', 'cerita',
    'perpustakaan', 'novel', 'puisi', 'penulis', 'pengarang', 'halaman', 'bab', 'alur', 'narasi', 'akhir',
    'hati', 'otak', 'pikiran', 'ide', 'konsep', 'teori', 'filsafat', 'kebijaksanaan', 'pengetahuan',
    'masalah', 'solusi', 'jawaban', 'pertanyaan', 'ragu', 'kepastian', 'kebenaran', 'bohong', 'penipuan', 'trik',
    'ratu', 'raja', 'pangeran', 'putri', 'ksatria', 'naga', 'istana', 'kerajaan', 'kekaisaran', 'takhta',
    'perahu', 'layar', 'jangkar', 'pelabuhan', 'pantai', 'pasir', 'pulau', 'samudera', 'gelombang', 'arus',
    'gunung berapi', 'gempa bumi', 'badai', 'topan', 'tornado', 'longsor', 'erupsi', 'kekeringan', 'banjir', 'hujan es',
    'obat', 'dokter', 'rumah sakit', 'penyakit', 'sembuh', 'ramuan', 'pil', 'suntikan', 'operasi', 'pasien',
    'musik', 'lagu', 'opera', 'simfoni', 'komposer', 'musisi', 'biola', 'piano', 'gitar', 'drum',
    'makanan', 'pencuci mulut', 'minuman', 'dapur', 'koki', 'resep', 'rasa', 'aroma', 'tekstur', 'lapar',
    'wisata', 'turisme', 'destinasi', 'koper', 'paspor', 'pesawat', 'kereta', 'mobil', 'sepeda', 'motor',
    'olahraga', 'sepak bola', 'bola basket', 'tenis', 'renang', 'tinju', 'gulat', 'balapan', 'lompat', 'lempar',
    'uang', 'koin', 'tagihan', 'bank', 'pinjaman', 'hutang', 'pembayaran', 'harga', 'jual', 'beli',
    'kerja', 'dagang', 'profesi', 'karir', 'pekerjaan', 'bos', 'karyawan', 'gaji', 'kontrak', 'resign',
    'sekolah', 'kampus', 'universitas', 'guru', 'siswa', 'pelajaran', 'ujian', 'nilai', 'diploma', 'pendidikan',
    'gereja', 'kuil', 'agama', 'iman', 'doa', 'santo', 'malaikat', 'iblis', 'neraka', 'surga',
    'teknologi', 'kecerdasan', 'algoritma', 'program', 'kode', 'error', 'bug', 'server', 'client', 'database',
    'alam', 'ekosistem', 'biodiversitas', 'kepunahan', 'evolusi', 'adaptasi', 'predator', 'mangsa', 'herbivora', 'karnivora',
    'psikologi', 'psikiatri', 'neurologi', 'kognisi', 'emosi', 'perasaan', 'memori', 'perhatian', 'persepsi', 'kesadaran',
    'arsitektur', 'patung', 'lukisan', 'gambar', 'seni', 'galeri', 'museum', 'pameran', 'karya seni', 'kanvas',
    'kimia', 'fisika', 'matematika', 'biologi', 'geologi', 'astronomi', 'meteorologi', 'oseanografi', 'botani', 'zoologi',
    'republik', 'demokrasi', 'monarki', 'diktator', 'pemerintah', 'politik', 'pemilihan', 'suara', 'kongres', 'parlemen',
    'hukum', 'hak', 'keadilan', 'pengacara', 'hakim', 'pengadilan', 'vonis', 'salah', 'tidak bersalah', 'hukuman',
    'kebebasan', 'perbudakan', 'penindasan', 'revolusi', 'perang', 'damai', 'gencatan senjata', 'aliansi', 'musuh', 'konflik',
    'bahasa', 'tata bahasa', 'sintaksis', 'semantik', 'kosakata', 'pengucapan', 'aksen', 'dialek', 'idiom', 'terjemahan',
    'alfabet', 'huruf besar', 'huruf kecil', 'tanda baca', 'jeda', 'penekanan', 'ritme', 'intonasi', 'irama', 'musikalitas'
  ],
  seo: [
    {
      type: 'title',
      text: 'Tes Kecepatan Mengetik Online Gratis: Ukur KPM Real-Time Anda',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Tes kecepatan mengetik</strong> adalah alat paling akurat untuk mengevaluasi berapa banyak kata per menit (KPM) yang dapat Anda ketik dengan akurasi. Baik Anda seorang programmer, penulis, mahasiswa, atau menghabiskan waktu berjam-jam di depan keyboard, mengetahui kecepatan nyata Anda adalah langkah pertama untuk mengoptimalkan produktivitas. Tes ini tidak hanya mengukur kecepatan, tetapi juga <em>akurasi bersih</em>: yang benar-benar penting adalah kecepatan yang dikoreksi untuk kesalahan.',
    },
    {
      type: 'paragraph',
      html: 'Berbeda dengan simulator mengetik tradisional, tes ini secara otomatis mengurangi skor untuk kesalahan dalam KPM akhir Anda. Seorang pengetik yang menulis 100 KPM tetapi membuat 30 kesalahan tidak lebih cepat dari seseorang yang mengetik 70 KPM dengan nol kesalahan. Di sini kami mengukur <strong>kecepatan bersih Anda yang sesungguhnya</strong>, bukan angka fantasi yang berlebihan.',
    },
    {
      type: 'title',
      text: 'Rata-Rata Kecepatan Mengetik: Tolok Ukur 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kecepatan mengetik rata-rata berkisar antara <strong>40-60 KPM</strong> untuk orang dewasa tanpa pelatihan khusus. Namun, metrik ini sangat bervariasi berdasarkan profesi:',
    },
    {
      type: 'list',
      items: [
        '<strong>Pengguna kasual:</strong> 30-45 KPM (email, media sosial)',
        '<strong>Sekretaris/Administrasi:</strong> 60-80 KPM (standar profesional)',
        '<strong>Pengetik bersertifikat:</strong> 90-120 KPM (teknik formal ASDF JKL;)',
        '<strong>Penulis profesional:</strong> 120-160 KPM (jurnalis, copywriter)',
        '<strong>Juara dunia:</strong> 200+ KPM (Rekor Dunia Guinness: 216 KPM)',
      ],
    },
    {
      type: 'paragraph',
      html: 'Kebanyakan orang yang mengikuti tes ini menyadari bahwa mereka berada di bawah rata-rata profesional. Seseorang yang mengetik pada 50 KPM dengan akurasi 95% mungkin perlu meningkatkan teknik, bukan hanya kecepatan kasar. Tes ini menunjukkan dengan tepat di persentil mana Anda berada.',
    },
    {
      type: 'list',
      items: [
        '<strong>Pemula (20-40 KPM):</strong> Masih melihat keyboard, mengetik lambat tapi sadar',
        '<strong>Menengah (40-70 KPM):</strong> Mengetik lancar, kesalahan sesekali',
        '<strong>Lanjutan (70-120 KPM):</strong> Mengetik alami, sangat sedikit kesalahan',
        '<strong>Profesional (120+ KPM):</strong> Kecepatan kompetitor, akurasi hampir sempurna',
      ],
    },
    {
      type: 'title',
      text: 'Mengapa Meningkatkan Kecepatan Mengetik Penting di 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Di tahun 2026, mengetik cepat dan akurat bukan lagi "keterampilan sekretaris". Ini adalah <strong>kompetensi kritis</strong> untuk hampir semua profesi berbasis pengetahuan:',
    },
    {
      type: 'list',
      items: [
        '<strong>Programmer:</strong> Kode itu ditulis, bukan dipikirkan. Mengetik 100+ KPM dengan akurat adalah perbedaan antara 6 dan 3 jam kerja',
        '<strong>Pengacara dan notaris:</strong> Dokumen hukum menuntut pengetikan yang cepat dan bebas kesalahan. Typo dalam kontrak bisa berakibat fatal',
        '<strong>Jurnalis dan pembuat konten:</strong> Kecepatan publikasi menentukan daya saing. 120 KPM vs 60 KPM menggandakan output harian Anda',
        '<strong>Mahasiswa:</strong> Ujian berjangka waktu, esai, dan makalah penelitian menuntut mengetik sambil berpikir. Mengetik lambat = kualitas rendah',
        '<strong>Freelancer:</strong> Waktu = uang langsung. Meningkatkan dari 50 ke 100 KPM setara dengan kenaikan pendapatan 30-40% dengan upaya yang sama',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>ROI-nya nyata:</strong> Jika Anda mengetik 50 KPM dan menghabiskan 15 menit untuk dokumen 200 kata, itu berarti 2 jam harian terbuang (asumsi 8 dokumen). Pada 100 KPM, tugas yang sama memakan waktu 7 menit. Per tahun: <strong>260 jam dihemat</strong>. Pada €30/jam (rata-rata freelancer), itu berarti €7.800 dalam produktivitas tahunan.',
    },
    {
      type: 'title',
      text: 'Cara Mengikuti Tes Kecepatan Mengetik: Panduan Langkah Demi Langkah',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tes mengetik online bekerja dengan prinsip yang sama seperti ujian Typing Masters Association yang tersertifikasi: mengukur kata yang benar per menit (KPM bersih) dalam batas waktu tetap. Sederhana namun presisi:',
    },
    {
      type: 'list',
      items: [
        '<strong>Pilih durasi:</strong> 30 detik, 60 detik, atau 2 menit. Mulai dengan 60 adalah standar.',
        '<strong>Pilih kesulitan:</strong> Kata-kata umum, campuran standar, kata-kata sulit, atau bahkan kode dengan simbol.',
        '<strong>Mulai mengetik:</strong> Timer dimulai otomatis saat Anda mengetik karakter pertama.',
        '<strong>Pantau kemajuan langsung:</strong> KPM, akurasi, kesalahan, dan karakter yang benar diperbarui saat Anda mengetik.',
        '<strong>Dapatkan hasil instan:</strong> Saat waktu habis, lihat KPM Anda, persentase akurasi, dan rekor terbaik Anda.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Tanpa trik, tanpa perlu akun, tanpa iklan. Hanya kecepatan sejati Anda yang diukur dengan presisi.',
    },
    {
      type: 'title',
      text: 'Metrik yang Kami Ukur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Kata Per Menit (KPM):</strong> Metrik standar. Dihitung dengan mengambil karakter yang benar, dibagi 5 (panjang kata rata-rata), lalu dibagi menit yang berlalu. Ini adil: tidak menghargai pengetikan cepat dengan banyak kesalahan.',
    },
    {
      type: 'paragraph',
      html: '<strong>Akurasi (%):</strong> Persentase karakter yang diketik dengan benar. 100% adalah sempurna. 90% berarti 1 kesalahan per 10 karakter. Akurasi sama pentingnya dengan kecepatan.',
    },
    {
      type: 'paragraph',
      html: '<strong>Kesalahan:</strong> Jumlah total karakter yang salah. Lebih mudah divisualisasikan daripada persentase. 3 kesalahan dalam 300 karakter adalah akurasi 99%. Tes ini menghitung dan menunjukkannya dengan warna merah saat Anda mengetik.',
    },
    {
      type: 'paragraph',
      html: '<strong>Karakter Benar / Total:</strong> Berapa banyak karakter yang Anda dapatkan dengan benar dibandingkan yang diharapkan. Memberi Anda gambaran seberapa jauh Anda melalui teks tersebut.',
    },
    {
      type: 'title',
      text: 'Faktor-Faktor yang Mempengaruhi Kecepatan Mengetik Anda yang Sebenarnya',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kecepatan mengetik Anda tidak konstan. Penelitian psikologi kognitif menunjukkan faktor-faktor ini berdampak langsung pada kinerja:',
    },
    {
      type: 'list',
      items: [
        '<strong>Keakraban kosakata:</strong> Mengetik tentang spesialisasi Anda 30% lebih cepat daripada kosakata asing',
        '<strong>Layout keyboard:</strong> Pengguna QWERTY mendapatkan KPM 10-15% lebih rendah daripada pengetik terlatih DVORAK/COLEMAK, tetapi ergonominya lebih baik',
        '<strong>Panjang kata:</strong> Kata yang panjang memperlambat Anda 15-20% (misalnya "elektrokardioensefalogram" vs "rumah")',
        '<strong>Kelelahan mental:</strong> Setelah 10 menit terus-menerus, akurasi turun 5-8%',
        '<strong>Stres tekanan waktu:</strong> Tes 1 menit menghasilkan lebih banyak adrenalin (typo) daripada 5 menit',
      ],
    },
    {
      type: 'paragraph',
      html: 'Itulah mengapa tes ini menawarkan beberapa durasi dan kesulitan: 60 detik adalah standar untuk kecepatan maksimal di bawah tekanan, 2 menit memungkinkan keberlanjutan nyata.',
    },
    {
      type: 'tip',
      html: 'Pengetik elit (120+ KPM) tidak mencapainya dengan mengetik cepat. Mereka menguasai <strong>posisi istirahat</strong> yang benar: jari kiri pada ASDF, kanan pada JKL;, tidak pernah melihat keyboard. Ini satu-satunya cara untuk mempertahankan 100+ KPM. Jika Anda mempelajari posisi yang salah sejak awal, maksimum Anda akan selalu berada di 60-70 KPM, tidak peduli seberapa banyak latihan. Belajarlah dengan benar, meski lambat di awal.',
    },
    {
      type: 'title',
      text: 'Rencana Peningkatan Mengetik: 50 ke 100+ KPM dalam 3 Bulan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Peningkatan mengetik mengikuti kurva belajar yang dapat diprediksi. Peneliti MIT menemukan Anda butuh ~10 jam latihan terfokus per kenaikan 10 KPM. Berikut strategi ilmiahnya:',
    },
    {
      type: 'list',
      items: [
        '<strong>Minggu 1-2 (Bentuk, bukan kecepatan):</strong> 10 menit setiap hari fokus HANYA pada penempatan jari yang benar. Lupakan kecepatan. Bentuk adalah 90% dari kemajuan.',
        '<strong>Minggu 3-4 (Kecepatan bertahap):</strong> Tingkatkan ke 15 menit setiap hari. Mencoba mengetik tanpa melihat. Kecepatan akan turun 10-20%, tetapi itulah intinya: pola saraf baru.',
        '<strong>Minggu 5-8 (Konsistensi):</strong> 20 menit setiap hari. Selang-seling: 10 menit mengetik alami (email asli, dokumen) + 10 menit tes. Harapkan peningkatan 5-8 KPM setiap minggu.',
        '<strong>Minggu 9-12 (Spesialisasi):</strong> Fokus pada kata-kata yang sulit bagi Anda. Programmer melatih simbol. Penulis melatih tanda baca. 15-20 menit setiap hari sudah cukup sekarang.',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Metrik kemajuan yang realistis:</strong> 50 ke 80 KPM butuh 4-6 minggu. 80 ke 120 KPM butuh 8-12 minggu. Di atas 120 KPM, setiap tambahan KPM membutuhkan dedikasi yang hampir profesional (latihan harian 1-2 jam).',
    },
    {
      type: 'title',
      text: 'Haruskah Saya Membandingkan KPM Saya Dengan Orang Lain atau Diri Sendiri?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Psikologi kinerja olahraga (berlaku untuk mengetik) menemukan bahwa <strong>perbandingan sosial bisa berbalik menyerang</strong>. Selalu membandingkan dengan juara menyebabkan cepat menyerah. Atlet top bersaing dengan rekor mereka sendiri.',
    },
    {
      type: 'paragraph',
      html: 'Tes ini menyimpan hasil terbaik Anda secara otomatis. Itulah tolok ukur Anda. Setiap sesi, Anda mengalahkan rekor ANDA sebelumnya, bukan kompetitor. Penelitian Stanford membuktikan psikologi ini meningkatkan motivasi 40% lebih banyak daripada persaingan langsung.',
    },
    {
      type: 'paragraph',
      html: 'Masih ingin berbagi dengan teman? Tombol bagikan membuat hasil visual yang dapat Anda salin ke WhatsApp/Twitter. Tapi ingat: seorang teman yang mencapai 120 KPM mungkin sudah berlatih selama 6 bulan. Anda di minggu ke-2. Bandingkan diri Anda dengan diri Anda sendiri di minggu ke-2 di masa depan, bukan minggu ke-26 mereka.',
    },
    {
      type: 'title',
      text: 'Seberapa Akurat Tes ini vs Tes Online Lainnya?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Akurasi tes mengetik bergantung pada <strong>di mana tes itu diukur</strong> dan <strong>kapan</strong>. Tes ini berjalan 100% secara lokal di browser Anda, tidak ada data server yang dikirim. Keunggulan kritis:',
    },
    {
      type: 'list',
      items: [
        '<strong>Tidak ada latensi jaringan:</strong> Tes online seperti Typing.com mengalami latensi 50-200ms tergantung koneksi. Di sini: 0ms.',
        '<strong>Timestamp presisi milidetik:</strong> Browser mengukur dengan tepat kapan setiap tombol ditekan, tanpa penundaan server',
        '<strong>Standar KPM tersertifikasi:</strong> Menggunakan formula resmi: (total karakter / 5) / menit - kesalahan/menit',
        '<strong>Validasi ketukan tombol:</strong> Beberapa tes online menerima salin-tempel. Tes ini HANYA menerima input keyboard asli',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Catatan:</strong> Sebanding dengan TypeRacer, Monkeytype, atau Keybr.com dalam hal akurasi. Lebih baik dari Typing.com untuk latensi, serupa dengan alternatif offline.',
    },
    {
      type: 'title',
      text: 'Siapa yang Sebaiknya Menggunakan Tes Mengetik ini',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Programmer dan engineer:</strong> Mengetik kode di 50 KPM tidak efisien. Seorang dev di 100+ KPM menulis kode 2x lebih banyak per sesi. ROI tinggi untuk gaji senior.',
        '<strong>Jurnalis dan copywriter:</strong> Menulis artikel adalah 70% mengetik. Meningkatkan dari 60 ke 100 KPM berarti 40 artikel lebih banyak/tahun = tambahan pendapatan freelancer sebesar €15.000+.',
        '<strong>Pengacara dan notaris:</strong> Dokumen hukum itu kritis. Mengetik kontrak pada 40 KPM = 1,5 jam. Pada 100 KPM = 20 menit. Selisihnya: +€200/dokumen.',
        '<strong>Mahasiswa (terutama ujian masuk perguruan tinggi):</strong> Batas waktu sangat kritis. 120 KPM memungkinkan Anda menulis esai lengkap tanpa stres. 40 KPM = 3 halaman tidak lengkap = nilai berkurang 1 poin.',
        '<strong>Transkriptor dan sekretaris:</strong> Mengetik adalah 100% pekerjaan Anda. Beralih dari 70 ke 120 KPM hampir menjamin promosi dan kenaikan gaji.',
        '<strong>Gamer kompetitif (esports):</strong> Banyak game butuh chat cepat (CS2, Valorant). 100+ KPM = keuntungan chat taktis.',
      ],
    },
    {
      type: 'title',
      text: 'Timeline Realistis: Berapa Lama untuk Meningkatkan KPM',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tes mengetik biasanya menunjukkan perkembangan dalam timeline ini (dengan latihan terfokus 15-20 menit setiap hari):',
    },
    {
      type: 'list',
      items: [
        '<strong>Minggu 1:</strong> Tidak ada perubahan yang terlihat (pemrograman ulang otak)',
        '<strong>Minggu 2-3:</strong> +5 KPM (perubahan saraf pertama)',
        '<strong>Minggu 4-8:</strong> +3-5 KPM per minggu (kurva belajar yang dipercepat)',
        '<strong>Minggu 9-12:</strong> +2-3 KPM per minggu (plateau kecil)',
        '<strong>Bulan 4-6:</strong> +1-2 KPM per minggu (hasil yang berkurang)',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Intinya:</strong>',
    },
    {
      type: 'list',
      items: [
        '40 ke 70 KPM: 4-6 minggu (latihan harian)',
        '70 ke 100 KPM: 8-12 minggu',
        '100 ke 150+ KPM: 4-6 bulan (membutuhkan latihan yang sangat terfokus)',
      ],
    },
    {
      type: 'paragraph',
      html: '<em>Faktor kuncinya adalah KONSISTENSI, bukan intensitas. 10 menit setiap hari mengalahkan 2 jam setiap 2 minggu. Otak belajar melalui pengulangan berjarak, bukan maraton.</em>',
    },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography: [
    {
      name: 'Wikipedia - Kata per menit',
      url: 'https://id.wikipedia.org/wiki/Kata_per_menit',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
