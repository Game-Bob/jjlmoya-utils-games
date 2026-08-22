import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'mousensitivitet-omvandlare-spel';
const title = 'Mössensitivitet Omvandlare Mellan Spel';
const description = 'Omvandla din mössensitivitet mellan spel och behåll din fysiska distans för en hel 360 graders vridning.';

const faqItems = [
  { question: 'Mössensitivitet Omvandlare Mellan Spel', answer: 'Omvandla din mössensitivitet mellan spel och behåll din fysiska distans för en hel 360 graders vridning.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
};

export const content: MouseSensitivityLocaleContent = {
  slug,
  title,
  description,
  ui: {
    sourceGameLabel: 'Nuvarande spel',
    targetGameLabel: 'Målspel',
    sourceDpiLabel: 'Nuvarande DPI',
    targetDpiLabel: 'Mål-DPI',
    sensitivityLabel: 'Sensitivitet i spelet',
    linkDpiLabel: 'Behåll samma DPI',
    sourceStationLabel: 'Nuvarande inställning',
    targetStationLabel: 'Målinställning',
    guideSourceText: 'Välj ditt nuvarande spel, ange DPI och din horisontella sensitivitet.',
    guideTargetText: 'Välj målspel. Låt DPI vara länkad om du inte ändrar den.',
    guideResultText: 'Kopiera resultatet till målspelet och kontrollera en 360-graders vridning.',
    sourceInputHint: 'Hitta dessa värden i din musprogramvara och spelinställningar.',
    targetInputHint: 'Målvärdet visas nedan så snart inmatningen är giltig.',
    profileResetText: 'Sensitiviteten återställd till exempelvärde. Ersätt med ditt eget värde.',
    resultForGameTemplate: '3. Ange detta värde i {game}',
    yawLabel: 'Yaw-skala',
    measuredProfileLabel: 'Uppmätt profil',
    documentedProfileLabel: 'Dokumenterad profil',
    targetSensitivityLabel: 'Ange denna sensitivitet',
    copyResultLabel: 'Kopiera resultat',
    copiedLabel: 'Kopierat',
    swapLabel: 'Vänd omvandling',
    swapButtonLabel: 'Växla',
    shareLabel: 'Kopiera länk',
    shareCopiedLabel: 'Länk kopierad',
    presetsLabel: 'Snabbval för minne',
    presetFastLabel: 'Snabb 22 cm',
    presetBalancedLabel: 'Balanserad 34 cm',
    presetControlLabel: 'Kontroll 50 cm',
    cmUnitLabel: 'Metrisk',
    inchUnitLabel: 'Imperial',
    physicalArcLabel: 'En hel vridning',
    sourceEdpiLabel: 'Käll-eDPI',
    targetEdpiLabel: 'Mål-eDPI',
    countsLabel: 'Musimpulser',
    matchQualityLabel: 'Profilprecision',
    exactMathLabel: 'Exakt Yaw-värde',
    calibrationLabel: 'Fysisk kontroll rekommenderas',
    fastBandLabel: 'Snabb zon',
    balancedBandLabel: 'Balanserad zon',
    controlBandLabel: 'Kontrollzon',
    extendedBandLabel: 'Utökad zon',
    formulaLabel: 'Omvandlingsformel',
    formulaText: 'målsensitivitet = källsensitivitet x käll-DPI x käll-yaw / (mål-DPI x mål-yaw)',
    verificationTitle: 'Slutför kalibrering',
    verificationText: 'Markera en startpunkt på musmattan och gör en 360-graders vridning i båda spelen.',
    baseAimOnlyText: 'Endast för bas-hipfire horisontellt.',
    invalidInputText: 'Ange positiva värden.',
    openGameMenuLabel: 'Öppna spelprofilmeny',
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
