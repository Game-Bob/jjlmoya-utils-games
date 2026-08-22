import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'fare-hassasiyeti-donusturucu-oyunlar';
const title = 'Oyunlar Arası Fare Hassasiyeti Dönüştürücü';
const description = 'Oyundaki fare hassasiyetinizi 360 derece dönme mesafesini ve eDPI değerinizi koruyarak diğer oyunlara dönüştürün.';

const faqItems = [
  { question: 'Oyunlar Arası Fare Hassasiyeti Dönüştürücü', answer: 'Oyundaki fare hassasiyetinizi 360 derece dönme mesafesini ve eDPI değerinizi koruyarak diğer oyunlara dönüştürün.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
};

export const content: MouseSensitivityLocaleContent = {
  slug,
  title,
  description,
  ui: {
    sourceGameLabel: 'Mevcut oyun',
    targetGameLabel: 'Hedef oyun',
    sourceDpiLabel: 'Mevcut DPI',
    targetDpiLabel: 'Hedef DPI',
    sensitivityLabel: 'Oyun içi hassasiyet',
    linkDpiLabel: 'Aynı DPI değerini koru',
    sourceStationLabel: 'Mevcut kurulum',
    targetStationLabel: 'Hedef kurulum',
    guideSourceText: 'Oynadığınız oyunu seçin, DPI ve yatay hassasiyetinizi girin.',
    guideTargetText: 'Hedef oyunu seçin. DPI değiştirmeyecekseniz bağlı bırakın.',
    guideResultText: 'Sonucu hedef oyuna kopyalayın ve 360 derecelik dönüşü doğrulayın.',
    sourceInputHint: 'Bu değerleri fare yazılımınızda ve oyun ayarlarında bulabilirsiniz.',
    targetInputHint: 'Hedef değer geçerli giriş yapıldığında aşağıda görünür.',
    profileResetText: 'Hassasiyet varsayılan örneğe sıfırlandı. Kendi değerinizle değiştirin.',
    resultForGameTemplate: '3. Bu değeri {game} oyununa girin',
    yawLabel: 'Yaw ölçeği',
    measuredProfileLabel: 'Ölçülen profil',
    documentedProfileLabel: 'Resmi profil',
    targetSensitivityLabel: 'Bu hassasiyeti girin',
    copyResultLabel: 'Sonucu kopyala',
    copiedLabel: 'Kopyalandı',
    swapLabel: 'Dönüştürmeyi tersine çevir',
    swapButtonLabel: 'Değiştir',
    shareLabel: 'Bağlantıyı kopyala',
    shareCopiedLabel: 'Bağlantı kopyalandı',
    presetsLabel: 'Kas hafızası ayarları',
    presetFastLabel: 'Hızlı 22 cm',
    presetBalancedLabel: 'Dengeli 34 cm',
    presetControlLabel: 'Kontrol 50 cm',
    cmUnitLabel: 'Metrik',
    inchUnitLabel: 'İngiliz',
    physicalArcLabel: 'Tam bir dönüş',
    sourceEdpiLabel: 'Kaynak eDPI',
    targetEdpiLabel: 'Hedef eDPI',
    countsLabel: 'Fare vuruşları',
    matchQualityLabel: 'Profil doğruluğu',
    exactMathLabel: 'Resmi Yaw sabiti',
    calibrationLabel: 'Fiziksel kontrol önerilir',
    fastBandLabel: 'Hızlı bölge',
    balancedBandLabel: 'Dengeli bölge',
    controlBandLabel: 'Kontrol bölgesi',
    extendedBandLabel: 'Genişletilmiş bölge',
    formulaLabel: 'Dönüştürme formülü',
    formulaText: 'hedef hassasiyet = kaynak hassasiyet x kaynak DPI x kaynak yaw / (hedef DPI x hedef yaw)',
    verificationTitle: 'Mousepad üzerinde doğrulama',
    verificationText: 'Mousepad üzerine bir başlangıç noktası koyun ve her iki oyunda da 360 derecelik bir dönüş yapın.',
    baseAimOnlyText: 'Yalnızca kalçadan atış (hipfire) içindir.',
    invalidInputText: 'Pozitif değerler girin.',
    openGameMenuLabel: 'Oyun profili menüsünü aç',
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
