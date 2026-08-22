import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'konverter-sensitivitas-mouse-game';
const title = 'Konverter Sensitivitas Mouse Antar Game';
const description = 'Samakan jarak fisik mouse Anda di semua game kompetitif. Konversi sensitivitas hipfire dengan nilai DPI terpisah dan hitung cm per 360.';

const faqItems = [
  {
    "question": "Apa yang dipertahankan konverter ini ?",
    "answer": "Mempertahankan jarak fisik mouse dalam sentimeter untuk putaran 360 derajat."
  },
  {
    "question": "Mengapa eDPI berbeda antar game ?",
    "answer": "eDPI tergantung skala yaw game dan hanya bisa dibandingkan di game yang sama."
  },
  {
    "question": "Apakah FOV mengubah konversi ?",
    "answer": "Tidak, jarak fisik untuk 360 derajat tetap sama."
  },
  {
    "question": "Apakah konversinya akurat ?",
    "answer": "Perhitungan akurat secara matematis berdasarkan konstanta yaw."
  },
  {
    "question": "Bagaimana cara memasukkan sensitivitas Fortnite ?",
    "answer": "Masukkan angka persentasenya, contoh 7 untuk 7%."
  },
  {
    "question": "Apakah data saya disimpan ?",
    "answer": "Tidak, semua data tetap lokal di browser Anda."
  }
];

const howToItems = [
  {
    "name": "Pilih game asal",
    "text": "Pilih game Anda dan masukkan DPI serta sensitivitas."
  },
  {
    "name": "Pilih game tujuan",
    "text": "Pilih game tujuan dan atur DPI."
  },
  {
    "name": "Salin nilainya",
    "text": "Salin hasil ke pengaturan game baru."
  },
  {
    "name": "Uji putaran",
    "text": "Lakukan putaran 360 derajat di mousepad."
  }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToItems.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
};

export const content: MouseSensitivityLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "sourceGameLabel": "Game saat ini",
    "targetGameLabel": "Game tujuan",
    "sourceDpiLabel": "DPI saat ini",
    "targetDpiLabel": "DPI tujuan",
    "sensitivityLabel": "Sensitivitas dalam game",
    "linkDpiLabel": "Pertahankan DPI yang sama",
    "sourceStationLabel": "Pengaturan saat ini",
    "targetStationLabel": "Pengaturan tujuan",
    "guideSourceText": "Pilih game Anda saat ini, lalu masukkan DPI dan sensitivitas horizontal.",
    "guideTargetText": "Pilih game tujuan. Biarkan DPI terhubung kecuali Anda mengubahnya.",
    "guideResultText": "Salin hasil ke game tujuan dan verifikasi satu putaran penuh 360 derajat.",
    "sourceInputHint": "Temukan nilai ini di perangkat lunak mouse dan pengaturan game Anda.",
    "targetInputHint": "Nilai tujuan muncul di bawah setelah input valid.",
    "profileResetText": "Sensitivitas diatur ulang ke contoh standar. Ganti dengan nilai asli Anda.",
    "resultForGameTemplate": "3. Masukkan nilai ini di {game}",
    "yawLabel": "Skala yaw",
    "measuredProfileLabel": "Profil terukur",
    "documentedProfileLabel": "Profil resmi",
    "targetSensitivityLabel": "Masukkan sensitivitas ini",
    "copyResultLabel": "Salin hasil",
    "copiedLabel": "Tersalin",
    "swapLabel": "Balikkan konversi",
    "swapButtonLabel": "Tukar",
    "shareLabel": "Salin tautan",
    "shareCopiedLabel": "Tautan tersalin",
    "presetsLabel": "Preset memori otot",
    "presetFastLabel": "Cepat 22 cm",
    "presetBalancedLabel": "Seimbang 34 cm",
    "presetControlLabel": "Kontrol 50 cm",
    "cmUnitLabel": "Metrik",
    "inchUnitLabel": "Imperial",
    "physicalArcLabel": "Satu putaran penuh",
    "sourceEdpiLabel": "eDPI asal",
    "targetEdpiLabel": "eDPI tujuan",
    "countsLabel": "Pulsa mouse",
    "matchQualityLabel": "Akurasi profil",
    "exactMathLabel": "Nilai yaw resmi",
    "calibrationLabel": "Pemeriksaan fisik disarankan",
    "fastBandLabel": "Zona cepat",
    "balancedBandLabel": "Zona seimbang",
    "controlBandLabel": "Zona kontrol",
    "extendedBandLabel": "Zona diperluas",
    "formulaLabel": "Rumus konversi",
    "formulaText": "sensitivitas tujuan = sensitivitas asal x DPI asal x yaw asal / (DPI tujuan x yaw tujuan)",
    "verificationTitle": "Pemeriksaan pada mousepad",
    "verificationText": "Tandai titik awal di mousepad dan lakukan satu putaran 360 derajat di kedua game.",
    "baseAimOnlyText": "Hanya untuk tembakan dari pinggul (hipfire).",
    "invalidInputText": "Masukkan nilai positif.",
    "openGameMenuLabel": "Buka menu profil game"
},
  seo: [
    {
        "type": "title",
        "text": "Konversi Sensitivitas Mouse Dengan Jarak Fisik Yang Sama",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Angka sensitivitas berbeda di setiap game. Konverter ini menggunakan skala yaw untuk mempertahankan <strong>cm per 360</strong>."
    },
    {
        "type": "paragraph",
        "html": "Hasil dirancang untuk tampilan hipfire horizontal."
    },
    {
        "type": "title",
        "text": "Rumus Konversi Sensitivitas",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "<strong>Sensitivitas tujuan = sensitivitas asal x DPI asal x yaw asal / (DPI tujuan x yaw tujuan).</strong>"
    },
    {
        "type": "table",
        "headers": [
            "Pengukuran",
            "Arti",
            "Penggunaan terbaik"
        ],
        "rows": [
            [
                "Sensitivitas",
                "Angka di menu game",
                "Mengubah pengaturan game"
            ],
            [
                "eDPI",
                "DPI dikali sensitivitas",
                "Membandingkan pemain di game sama"
            ],
            [
                "cm per 360",
                "Jarak fisik pada mousepad",
                "Menjaga aim antar game"
            ]
        ]
    },
    {
        "type": "title",
        "text": "Profil Game Yang Didukung",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Mendukung CS2, Valorant, Apex Legends, Overwatch 2, Fortnite, Quake, dan Source."
    },
    {
        "type": "tip",
        "title": "Format Fortnite",
        "html": "Masukkan angka persentase, misalnya <strong>7</strong> untuk 7 persen."
    },
    {
        "type": "title",
        "text": "Mengapa FOV Tidak Memengaruhi 360",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Putaran 360 derajat tidak bergantung pada sudut pandang (FOV)."
    },
    {
        "type": "title",
        "text": "Cara Memeriksa Hasil di Dalam Game",
        "level": 2
    },
    {
        "type": "list",
        "items": [
            "Matikan akselerasi mouse.",
            "Luruskan mouse ke titik acuan.",
            "Lakukan putaran penuh 360 derajat.",
            "Sesuaikan nilai jika perlu."
        ]
    },
    {
        "type": "tip",
        "title": "Tes fisik disarankan",
        "html": "Lakukan pengujian langsung di mousepad Anda."
    }
],
  faqTitle: 'Pertanyaan umum tentang sensitivitas mouse',
  faq: faqItems,
  bibliographyTitle: 'Sumber dan referensi kalibrasi',
  bibliography,
  howTo: howToItems,
  schemas: [appSchema, faqSchema, howToSchema],
};
