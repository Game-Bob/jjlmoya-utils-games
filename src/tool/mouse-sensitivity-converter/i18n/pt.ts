import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'conversor-sensibilidade-mouse-jogos';
const title = 'Conversor de Sensibilidade de Mouse Entre Jogos';
const description = 'Converta a sensibilidade do mouse entre jogos mantendo a distância física percorrida para um giro completo de 360 graus.';

const faqItems = [
  { question: 'Conversor de Sensibilidade de Mouse Entre Jogos', answer: 'Converta a sensibilidade do mouse entre jogos mantendo a distância física percorrida para um giro completo de 360 graus.' },
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
    sourceGameLabel: 'Jogo atual',
    targetGameLabel: 'Jogo de destino',
    sourceDpiLabel: 'DPI atual',
    targetDpiLabel: 'DPI de destino',
    sensitivityLabel: 'Sensibilidade no jogo',
    linkDpiLabel: 'Manter o mesmo DPI',
    sourceStationLabel: 'Sua configuração atual',
    targetStationLabel: 'Sua configuração de destino',
    guideSourceText: 'Escolha seu jogo atual, insira o DPI e sua sensibilidade horizontal sem mirar.',
    guideTargetText: 'Escolha o jogo de destino. Mantenha o DPI vinculado a menos que vá alterá-lo.',
    guideResultText: 'Copie o resultado para o novo jogo e verifique uma volta completa de 360 graus.',
    sourceInputHint: 'Encontre esses valores no software do mouse e no menu de opções do jogo.',
    targetInputHint: 'O valor final aparece abaixo assim que a configuração for válida.',
    profileResetText: 'Sensibilidade redefinida para um exemplo padrão. Substitua pelo seu valor real.',
    resultForGameTemplate: '3. Insira este valor em {game}',
    yawLabel: 'Escala yaw',
    measuredProfileLabel: 'Perfil medido',
    documentedProfileLabel: 'Perfil oficial',
    targetSensitivityLabel: 'Insira esta sensibilidade',
    copyResultLabel: 'Copiar resultado',
    copiedLabel: 'Copiado',
    swapLabel: 'Inverter conversão',
    swapButtonLabel: 'Trocar',
    shareLabel: 'Copiar link',
    shareCopiedLabel: 'Link copiado',
    presetsLabel: 'Ajustes de memória muscular',
    presetFastLabel: 'Rápido 22 cm',
    presetBalancedLabel: 'Equilibrado 34 cm',
    presetControlLabel: 'Controle 50 cm',
    cmUnitLabel: 'Métrico',
    inchUnitLabel: 'Imperial',
    physicalArcLabel: 'Giro de 360 graus',
    sourceEdpiLabel: 'eDPI de origem',
    targetEdpiLabel: 'eDPI de destino',
    countsLabel: 'Pulsos do mouse',
    matchQualityLabel: 'Confiança da conversão',
    exactMathLabel: 'Constante yaw oficial',
    calibrationLabel: 'Verificação física recomendada',
    fastBandLabel: 'Órbita rápida',
    balancedBandLabel: 'Órbita equilibrada',
    controlBandLabel: 'Órbita de controle',
    extendedBandLabel: 'Órbita estendida',
    formulaLabel: 'Fórmula de conversão',
    formulaText: 'sensibilidade destino = sensibilidade origem x DPI origem x yaw origem / (DPI destino x yaw destino)',
    verificationTitle: 'Ajuste fino no mousepad',
    verificationText: 'Coloque o mouse em uma marca no mousepad e faça uma volta completa de 360 graus em ambos os jogos.',
    baseAimOnlyText: 'Conversão calculada apenas para tiro livre (hipfire).',
    invalidInputText: 'Insira valores maiores que zero.',
    openGameMenuLabel: 'Abrir menu de perfis de jogo',
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
