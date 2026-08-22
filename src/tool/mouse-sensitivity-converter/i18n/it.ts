import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'convertitore-sensibilita-mouse-giochi';
const title = 'Convertitore di Sensibilità Mouse Tra Giochi';
const description = 'Converti la sensibilità del mouse tra i giochi mantenendo la distanza fisica per 360 gradi ed eDPI personalizzati.';

const faqItems = [
  { question: 'Convertitore di Sensibilità Mouse Tra Giochi', answer: 'Converti la sensibilità del mouse tra i giochi mantenendo la distanza fisica per 360 gradi ed eDPI personalizzati.' },
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
    sourceGameLabel: 'Gioco attuale',
    targetGameLabel: 'Gioco di destinazione',
    sourceDpiLabel: 'DPI attuale',
    targetDpiLabel: 'DPI di destinazione',
    sensitivityLabel: 'Sensibilità nel gioco',
    linkDpiLabel: 'Mantenere lo stesso DPI',
    sourceStationLabel: 'Configurazione attuale',
    targetStationLabel: 'Configurazione di destinazione',
    guideSourceText: 'Scegli il gioco attuale, poi inserisci DPI e sensibilità orizzontale.',
    guideTargetText: 'Scegli il gioco di destinazione. Lascia il DPI collegato se non lo modifichi.',
    guideResultText: 'Copia il risultato nel nuovo gioco e verifica una rotazione di 360 gradi.',
    sourceInputHint: 'Trova questi valori nel software del mouse e nelle impostazioni di gioco.',
    targetInputHint: 'Il valore appare qui sotto non appena la configurazione è valida.',
    profileResetText: 'Sensibilità ripristinata su un esempio base. Sostituiscila con il tuo valore reale.',
    resultForGameTemplate: '3. Inserisci questo valore in {game}',
    yawLabel: 'Scala yaw',
    measuredProfileLabel: 'Profilo misurato',
    documentedProfileLabel: 'Profilo ufficiale',
    targetSensitivityLabel: 'Inserisci questa sensibilità',
    copyResultLabel: 'Copia risultato',
    copiedLabel: 'Copiato',
    swapLabel: 'Inverti conversione',
    swapButtonLabel: 'Scambia',
    shareLabel: 'Copia link',
    shareCopiedLabel: 'Link copiato',
    presetsLabel: 'Preimpostazioni di mirino',
    presetFastLabel: 'Veloce 22 cm',
    presetBalancedLabel: 'Bilanciato 34 cm',
    presetControlLabel: 'Controllo 50 cm',
    cmUnitLabel: 'Metrico',
    inchUnitLabel: 'Imperiale',
    physicalArcLabel: 'Giro completo a 360 gradi',
    sourceEdpiLabel: 'eDPI di origine',
    targetEdpiLabel: 'eDPI di destinazione',
    countsLabel: 'Impulsi del mouse',
    matchQualityLabel: 'Affidabilità del profilo',
    exactMathLabel: 'Valore yaw ufficiale',
    calibrationLabel: 'Verifica fisica consigliata',
    fastBandLabel: 'Zona veloce',
    balancedBandLabel: 'Zona bilanciata',
    controlBandLabel: 'Zona di controllo',
    extendedBandLabel: 'Zona estesa',
    formulaLabel: 'Formula di conversione',
    formulaText: 'sensibilità destinazione = sensibilità origine x DPI origine x yaw origine / (DPI destinazione x yaw destinazione)',
    verificationTitle: 'Verifica su tappetino',
    verificationText: 'Segna un punto di partenza sul tappetino ed esegui un giro a 360 gradi in entrambi i giochi.',
    baseAimOnlyText: 'Esclusivamente per tiro dalla cintola (hipfire).',
    invalidInputText: 'Inserisci valori positivi.',
    openGameMenuLabel: 'Apri menu dei profili di gioco',
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
