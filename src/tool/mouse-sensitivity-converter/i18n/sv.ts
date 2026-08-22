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
    sourceGameLabel: 'Current game',
    targetGameLabel: 'Target game',
    sourceDpiLabel: 'Current DPI',
    targetDpiLabel: 'Target DPI',
    sensitivityLabel: 'Sensitivity shown in that game',
    linkDpiLabel: 'Keep the same DPI',
    sourceStationLabel: 'Your current setup',
    targetStationLabel: 'Your destination setup',
    guideSourceText: 'Choose the game you already use, then copy its DPI and horizontal hipfire sensitivity.',
    guideTargetText: 'Choose the game you want to move to. Leave DPI linked unless you are changing it.',
    guideResultText: 'Copy the highlighted result into the target game, then verify one physical turn.',
    sourceInputHint: 'Find these values in your mouse software and the current game mouse settings.',
    targetInputHint: 'The destination value appears below as soon as the setup is valid.',
    profileResetText: 'Sensitivity reset to a sensible example for the selected game. Replace it with your real value.',
    resultForGameTemplate: '3. Enter this value in {game}',
    yawLabel: 'Yaw scale',
    measuredProfileLabel: 'Measured profile',
    documentedProfileLabel: 'Documented default',
    targetSensitivityLabel: 'Enter this sensitivity',
    copyResultLabel: 'Copy result',
    copiedLabel: 'Copied',
    swapLabel: 'Reverse conversion',
    swapButtonLabel: 'Swap games',
    shareLabel: 'Copy share link',
    shareCopiedLabel: 'Link copied',
    presetsLabel: 'Physical aim presets',
    presetFastLabel: 'Fast 22 cm',
    presetBalancedLabel: 'Balanced 34 cm',
    presetControlLabel: 'Control 50 cm',
    cmUnitLabel: 'Metric',
    inchUnitLabel: 'Imperial',
    physicalArcLabel: 'One full turn',
    sourceEdpiLabel: 'Source eDPI',
    targetEdpiLabel: 'Target eDPI',
    countsLabel: 'Mouse counts',
    matchQualityLabel: 'Profile confidence',
    exactMathLabel: 'Documented yaw match',
    calibrationLabel: 'Physical check recommended',
    fastBandLabel: 'Fast orbit',
    balancedBandLabel: 'Balanced orbit',
    controlBandLabel: 'Control orbit',
    extendedBandLabel: 'Extended orbit',
    formulaLabel: 'Conversion equation',
    formulaText: 'target sensitivity = source sensitivity x source DPI x source yaw / target DPI x target yaw',
    verificationTitle: 'Close the calibration loop',
    verificationText: 'Mark a start point on your mousepad and perform the same full unscoped turn in both games.',
    baseAimOnlyText: 'Base horizontal hipfire only.',
    invalidInputText: 'Enter positive values to restore the orbit.',
    openGameMenuLabel: 'Open game profile menu',
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
