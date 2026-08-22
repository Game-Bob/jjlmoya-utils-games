import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'muis-gevoeligheid-omrekenen-games';
const title = 'Muis Gevoeligheid Omrekenen Tussen Games';
const description = 'Reken je muisgevoeligheid eenvoudig om tussen verschillende games. Behoud je fysieke 360 graden afstand en eDPI.';

const faqItems = [
  { question: 'Muis Gevoeligheid Omrekenen Tussen Games', answer: 'Reken je muisgevoeligheid eenvoudig om tussen verschillende games. Behoud je fysieke 360 graden afstand en eDPI.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: MouseSensitivityLocaleContent = {
  slug,
  title,
  description,
  ui: {
    sourceGameLabel: 'Huidige game',
    targetGameLabel: 'Doelgame',
    sourceDpiLabel: 'Huidige DPI',
    targetDpiLabel: 'Doel DPI',
    sensitivityLabel: 'Gevoeligheid in de game',
    linkDpiLabel: 'Zelfde DPI behouden',
    sourceStationLabel: 'Huidige opstelling',
    targetStationLabel: 'Doelopstelling',
    guideSourceText: 'Kies je huidige game, voer de DPI en horizontale gevoeligheid in.',
    guideTargetText: 'Kies de doelgame. Laat DPI gekoppeld tenzij je deze verandert.',
    guideResultText: 'Kopieer het resultaat naar de doelgame en controleer een 360 graden draai.',
    sourceInputHint: 'Vind deze waarden in je muissoftware en spelinstellingen.',
    targetInputHint: 'De doelwaarde verschijnt hieronder zodra de invoer geldig is.',
    profileResetText: 'Gevoeligheid gereset naar voorbeeldwaarde. Vervang deze door jouw waarde.',
    resultForGameTemplate: '3. Voer deze waarde in in {game}',
    yawLabel: 'Yaw-schaal',
    measuredProfileLabel: 'Gemeten profiel',
    documentedProfileLabel: 'Gedocumenteerd profiel',
    targetSensitivityLabel: 'Voer deze gevoeligheid in',
    copyResultLabel: 'Resultaat kopiëren',
    copiedLabel: 'Gekopieerd',
    swapLabel: 'Omrekening omkeren',
    swapButtonLabel: 'Wisselen',
    shareLabel: 'Link kopiëren',
    shareCopiedLabel: 'Link gekopieerd',
    presetsLabel: 'Voorkeursinstellingen',
    presetFastLabel: 'Snel 22 cm',
    presetBalancedLabel: 'Gebalanceerd 34 cm',
    presetControlLabel: 'Controle 50 cm',
    cmUnitLabel: 'Metrisch',
    inchUnitLabel: 'Imperiaal',
    physicalArcLabel: 'Een volledige draai',
    sourceEdpiLabel: 'Bron eDPI',
    targetEdpiLabel: 'Doel eDPI',
    countsLabel: 'Muispulsen',
    matchQualityLabel: 'Profielnauwkeurigheid',
    exactMathLabel: 'Exacte Yaw-waarde',
    calibrationLabel: 'Fysieke controle aanbevolen',
    fastBandLabel: 'Snelle zone',
    balancedBandLabel: 'Gebalanceerde zone',
    controlBandLabel: 'Controlezone',
    extendedBandLabel: 'Uitgebreide zone',
    formulaLabel: 'Omrekenformule',
    formulaText: 'doelgevoeligheid = brongevoeligheid x bron DPI x bron yaw / (doel DPI x doel yaw)',
    verificationTitle: 'Kalibratie voltooien',
    verificationText: 'Markeer een startpunt op je muismat en maak een 360 graden draai in beide games.',
    baseAimOnlyText: 'Alleen voor basis-hipfire horizontaal.',
    invalidInputText: 'Voer positieve waarden in.',
    openGameMenuLabel: 'Gameprofielmenu openen',
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
