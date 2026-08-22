import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'konverter-sensitivitas-mouse-game';
const title = 'Konverter Sensitivitas Mouse Antar Game';
const description = 'Ubah sensitivitas mouse antar game dengan mempertahankan jarak fisik 360 derajat dan eDPI yang akurat.';

const faqItems = [
  { question: 'Konverter Sensitivitas Mouse Antar Game', answer: 'Ubah sensitivitas mouse antar game dengan mempertahankan jarak fisik 360 derajat dan eDPI yang akurat.' },
  { question: 'FAQ 2', answer: 'Answer 2' },
  { question: 'FAQ 3', answer: 'Answer 3' },
  { question: 'FAQ 4', answer: 'Answer 4' },
  { question: 'FAQ 5', answer: 'Answer 5' },
  { question: 'FAQ 6', answer: 'Answer 6' },
];

const howToItems = [
  { name: 'Step 1', text: 'Text 1' },
  { name: 'Step 2', text: 'Text 2' },
  { name: 'Step 3', text: 'Text 3' },
  { name: 'Step 4', text: 'Text 4' },
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
    sourceGameLabel: 'Game saat ini',
    targetGameLabel: 'Game tujuan',
    sourceDpiLabel: 'DPI saat ini',
    targetDpiLabel: 'DPI tujuan',
    sensitivityLabel: 'Sensitivitas dalam game',
    linkDpiLabel: 'Pertahankan DPI yang sama',
    sourceStationLabel: 'Pengaturan saat ini',
    targetStationLabel: 'Pengaturan tujuan',
    guideSourceText: 'Pilih game Anda saat ini, lalu masukkan DPI dan sensitivitas horizontal.',
    guideTargetText: 'Pilih game tujuan. Biarkan DPI terhubung kecuali Anda mengubahnya.',
    guideResultText: 'Salin hasil ke game tujuan dan verifikasi satu putaran penuh 360 derajat.',
    sourceInputHint: 'Temukan nilai ini di perangkat lunak mouse dan pengaturan game Anda.',
    targetInputHint: 'Nilai tujuan muncul di bawah setelah input valid.',
    profileResetText: 'Sensitivitas diatur ulang ke contoh standar. Ganti dengan nilai asli Anda.',
    resultForGameTemplate: '3. Masukkan nilai ini di {game}',
    yawLabel: 'Skala yaw',
    measuredProfileLabel: 'Profil terukur',
    documentedProfileLabel: 'Profil resmi',
    targetSensitivityLabel: 'Masukkan sensitivitas ini',
    copyResultLabel: 'Salin hasil',
    copiedLabel: 'Tersalin',
    swapLabel: 'Balikkan konversi',
    swapButtonLabel: 'Tukar',
    shareLabel: 'Salin tautan',
    shareCopiedLabel: 'Tautan tersalin',
    presetsLabel: 'Preset memori otot',
    presetFastLabel: 'Cepat 22 cm',
    presetBalancedLabel: 'Seimbang 34 cm',
    presetControlLabel: 'Kontrol 50 cm',
    cmUnitLabel: 'Metrik',
    inchUnitLabel: 'Imperial',
    physicalArcLabel: 'Satu putaran penuh',
    sourceEdpiLabel: 'eDPI asal',
    targetEdpiLabel: 'eDPI tujuan',
    countsLabel: 'Pulsa mouse',
    matchQualityLabel: 'Akurasi profil',
    exactMathLabel: 'Nilai yaw resmi',
    calibrationLabel: 'Pemeriksaan fisik disarankan',
    fastBandLabel: 'Zona cepat',
    balancedBandLabel: 'Zona seimbang',
    controlBandLabel: 'Zona kontrol',
    extendedBandLabel: 'Zona diperluas',
    formulaLabel: 'Rumus konversi',
    formulaText: 'sensitivitas tujuan = sensitivitas asal x DPI asal x yaw asal / (DPI tujuan x yaw tujuan)',
    verificationTitle: 'Pemeriksaan pada mousepad',
    verificationText: 'Tandai titik awal di mousepad dan lakukan satu putaran 360 derajat di kedua game.',
    baseAimOnlyText: 'Hanya untuk tembakan dari pinggul (hipfire).',
    invalidInputText: 'Masukkan nilai positif.',
    openGameMenuLabel: 'Buka menu profil game',
  },
  seo: [
    { type: 'title', text: 'Heading 1', level: 2 },
    { type: 'paragraph', html: 'Paragraph 1' },
    { type: 'paragraph', html: 'Paragraph 2' },
    { type: 'title', text: 'Heading 2', level: 2 },
    { type: 'paragraph', html: 'Paragraph 3' },
    {
      type: 'table',
      headers: ['H1', 'H2', 'H3'],
      rows: [
        ['R1C1', 'R1C2', 'R1C3'],
        ['R2C1', 'R2C2', 'R2C3'],
        ['R3C1', 'R3C2', 'R3C3'],
      ],
    },
    { type: 'title', text: 'Heading 3', level: 2 },
    { type: 'paragraph', html: 'Paragraph 4' },
    { type: 'tip', title: 'Tip 1', html: 'Tip content 1' },
    { type: 'title', text: 'Heading 4', level: 2 },
    { type: 'paragraph', html: 'Paragraph 5' },
    { type: 'title', text: 'Heading 5', level: 2 },
    {
      type: 'list',
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
    },
    { type: 'tip', title: 'Tip 2', html: 'Tip content 2' },
  ],
  faqTitle: 'FAQ Title',
  faq: faqItems,
  bibliographyTitle: 'Sources',
  bibliography,
  howTo: howToItems,
  schemas: [appSchema, faqSchema, howToSchema],
};
