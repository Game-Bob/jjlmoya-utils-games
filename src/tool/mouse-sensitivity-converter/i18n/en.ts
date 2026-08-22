import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'mouse-sensitivity-converter-between-games';
const title = 'Mouse Sensitivity Converter Between Games';
const description = 'Match your physical mouse travel across competitive games. Convert hipfire sensitivity with separate DPI values, inspect cm per 360 and eDPI, then verify measured profiles in game.';

const faqItems = [
  { question: 'What does this mouse sensitivity converter preserve?', answer: 'It preserves the physical mouse distance required for one complete 360 degree horizontal turn. This is commonly called cm per 360 or inches per 360.' },
  { question: 'Why is eDPI different after converting to another game?', answer: 'eDPI is DPI multiplied by the sensitivity number, so it is only directly comparable inside games that use the same yaw scale. cm per 360 includes the game yaw value and is the cross game measurement preserved here.' },
  { question: 'Does field of view change the conversion?', answer: 'Field of view changes perceived motion and target scale, but it does not change the physical distance for a base 360 degree turn in this model. Scoped aim, ADS and games with FOV dependent scaling need separate calibration.' },
  { question: 'Is the converted sensitivity exact?', answer: 'The arithmetic is exact for the displayed yaw values. Several game coefficients are community measured rather than officially published, and game updates or hidden multipliers can introduce a small difference. The tool marks those cases for physical verification.' },
  { question: 'How do I enter Fortnite sensitivity?', answer: 'Enter the horizontal mouse sensitivity shown by Fortnite as a percentage number, such as 7 for 7 percent. This profile covers base horizontal hipfire only.' },
  { question: 'Are my settings uploaded?', answer: 'No. Calculation and saved preferences stay in your browser. The share button creates a URL containing only the game, DPI, sensitivity and display unit values you entered.' },
];

const howToItems = [
  { name: 'Choose the source setup', text: 'Select your current game, enter its base horizontal sensitivity and enter the DPI used with that game.' },
  { name: 'Choose the target setup', text: 'Select the destination game. Keep DPI linked if the mouse DPI is unchanged, or unlink it and enter the new DPI.' },
  { name: 'Copy the converted value', text: 'Read the target sensitivity and the shared physical arc. Copy the result into the target game base horizontal sensitivity setting.' },
  { name: 'Verify one complete turn', text: 'Mark the mouse start position, turn exactly 360 degrees in both games and compare travel. Fine tune if either profile is marked for calibration.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
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
    verificationText: 'Mark a start point on your mousepad and perform the same full unscoped turn in both games. Small differences can come from rounded settings, hidden multipliers or updated input behavior.',
    baseAimOnlyText: 'Base horizontal hipfire only. ADS, scopes, acceleration, vertical multipliers and FOV based monitor distance matching are outside this conversion.',
    invalidInputText: 'Enter positive values to restore the orbit.',
    openGameMenuLabel: 'Open game profile menu',
  },
  seo: [
    { type: 'title', text: 'Convert Mouse Sensitivity With a Shared Physical Distance', level: 2 },
    { type: 'paragraph', html: 'Sensitivity numbers do not mean the same thing in every game. This converter uses each profile yaw scale to preserve <strong>cm per 360</strong>, the physical mouse distance needed for one complete horizontal turn. You can also use different DPI values for the source and target setup.' },
    { type: 'paragraph', html: 'The result is designed for base horizontal hipfire input. It does not claim to preserve scoped perception, ADS behavior or monitor distance because those systems may depend on field of view, zoom and game specific multipliers.' },
    { type: 'title', text: 'The Sensitivity Conversion Formula', level: 2 },
    { type: 'paragraph', html: '<strong>Target sensitivity = source sensitivity x source DPI x source yaw / target DPI x target yaw.</strong> Yaw is the number of horizontal degrees produced by one mouse count at sensitivity 1. The same relationship gives cm per 360 as 2.54 x 360 divided by DPI x sensitivity x yaw.' },
    {
      type: 'table',
      headers: ['Measurement', 'Meaning', 'Best use'],
      rows: [
        ['Sensitivity', 'The number entered in one game', 'Changing a setting inside that game'],
        ['eDPI', 'DPI multiplied by game sensitivity', 'Comparing players inside the same yaw scale'],
        ['cm per 360', 'Physical travel for one full turn', 'Matching base aim across different games'],
      ],
    },
    { type: 'title', text: 'Supported Game Profiles and Confidence', level: 2 },
    { type: 'paragraph', html: 'The initial profiles cover Counter Strike 2, Valorant, Apex Legends, Overwatch 2, Fortnite, Quake and Source defaults, and Aim Lab native sensitivity. Source and Quake expose a known default yaw convention. Several other coefficients are stable community measurements rather than official developer specifications, so the interface labels them for calibration.' },
    { type: 'tip', title: 'Fortnite input format', html: 'Use the visible horizontal percentage number. Enter <strong>7</strong> when the game shows 7 percent. Do not enter 0.07.' },
    { type: 'title', text: 'Why Field of View Is Not an Input Here', level: 2 },
    { type: 'paragraph', html: 'A physical 360 degree match is based on rotation and mouse travel, so field of view is not required for this calculation. FOV still changes how fast the image appears to cross the screen. Players who want matching screen displacement at a chosen zoom need a separate monitor distance method.' },
    { type: 'title', text: 'How to Verify the Result in Game', level: 2 },
    {
      type: 'list',
      items: [
        'Disable mouse acceleration and use the base unscoped view in both games.',
        'Place the mouse against a repeatable mark and aim at a clear reference point.',
        'Move through one complete turn, return to the reference and measure physical travel.',
        'Repeat several turns to expose rounding drift, then adjust the target value by the smallest available increment.',
      ],
    },
    { type: 'tip', title: 'A converter is a starting instrument', html: 'Game updates, configuration files and per mode multipliers can change real behavior. Keep the calculated value, but trust a careful physical 360 degree check when the profile is marked as measured.' },
  ],
  faqTitle: 'Mouse sensitivity conversion questions',
  faq: faqItems,
  bibliographyTitle: 'Sources and calibration references',
  bibliography,
  howTo: howToItems,
  schemas: [appSchema, faqSchema, howToSchema],
};
