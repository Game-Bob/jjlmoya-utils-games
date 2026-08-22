import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'przelicznik-czulosci-myszy-gry';
const title = 'Przelicznik Czułości Myszy Między Grami';
const description = 'Przelicz czułość myszy między grami zachowując fizyczną odległość potrzebną do obrotu o 360 stopni oraz eDPI.';

const faqItems = [
  { question: 'Przelicznik Czułości Myszy Między Grami', answer: 'Przelicz czułość myszy między grami zachowując fizyczną odległość potrzebną do obrotu o 360 stopni oraz eDPI.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
};

export const content: MouseSensitivityLocaleContent = {
  slug,
  title,
  description,
  ui: {
    sourceGameLabel: 'Obecna gra',
    targetGameLabel: 'Docelowa gra',
    sourceDpiLabel: 'Obecne DPI',
    targetDpiLabel: 'Docelowe DPI',
    sensitivityLabel: 'Czułość w grze',
    linkDpiLabel: 'Zachowaj to samo DPI',
    sourceStationLabel: 'Obecna konfiguracja',
    targetStationLabel: 'Docelowa konfiguracja',
    guideSourceText: 'Wybierz grę, w którą grasz, wpisz DPI oraz czułość poziomą bez celowania.',
    guideTargetText: 'Wybierz grę docelową. Pozostaw DPI połączone, chyba że je zmieniasz.',
    guideResultText: 'Skopiuj wynik do nowej gry i sprawdź pełny obrót o 360 stopni.',
    sourceInputHint: 'Znajdź te wartości w oprogramowaniu myszy i ustawieniach gry.',
    targetInputHint: 'Wynik docelowy pojawi się poniżej po wpisaniu poprawnych danych.',
    profileResetText: 'Czułość zresetowana do wartości przykładowej. Wpisz swoją wartość.',
    resultForGameTemplate: '3. Wpisz tę wartość w {game}',
    yawLabel: 'Skala yaw',
    measuredProfileLabel: 'Zmierzony profil',
    documentedProfileLabel: 'Oficjalny profil',
    targetSensitivityLabel: 'Wpisz tę czułość',
    copyResultLabel: 'Kopiuj wynik',
    copiedLabel: 'Skopiowano',
    swapLabel: 'Odwróć przeliczenie',
    swapButtonLabel: 'Zamień',
    shareLabel: 'Kopiuj link',
    shareCopiedLabel: 'Link skopiowany',
    presetsLabel: 'Ustawienia pamięci mięśniowej',
    presetFastLabel: 'Szybki 22 cm',
    presetBalancedLabel: 'Zrównoważony 34 cm',
    presetControlLabel: 'Kontrola 50 cm',
    cmUnitLabel: 'Metryczne',
    inchUnitLabel: 'Calowe',
    physicalArcLabel: 'Pełny obrót 360 stopni',
    sourceEdpiLabel: 'Źródłowe eDPI',
    targetEdpiLabel: 'Docelowe eDPI',
    countsLabel: 'Impulsy myszy',
    matchQualityLabel: 'Dokładność profilu',
    exactMathLabel: 'Oficjalny stały wskaźnik yaw',
    calibrationLabel: 'Zalecane sprawdzanie fizyczne',
    fastBandLabel: 'Szybka strefa',
    balancedBandLabel: 'Zrównoważona strefa',
    controlBandLabel: 'Strefa kontroli',
    extendedBandLabel: 'Rozszerzona strefa',
    formulaLabel: 'Wzór przeliczenia',
    formulaText: 'czułość docelowa = czułość źródłowa x DPI źródłowe x yaw źródłowe / (DPI docelowe x yaw docelowe)',
    verificationTitle: 'Sprawdzenie na podkładce',
    verificationText: 'Zaznacz punkt startowy na podkładce i wykonaj pełny obrót o 360 stopni w obu grach.',
    baseAimOnlyText: 'Wyłącznie dla strzelania z biodra (hipfire).',
    invalidInputText: 'Wpisz wartości dodatnie.',
    openGameMenuLabel: 'Otwórz menu profili gier',
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
