import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'convertisseur-sensibilite-souris-jeux';
const title = 'Convertisseur de Sensibilité Souris Entre Jeux';
const description = 'Convertissez votre sensibilité de souris entre jeux vidéo en conservant votre distance physique pour 360 degrés et votre eDPI.';

const faqItems = [
  { question: 'Que conserve ce convertisseur de sensibilité ?', answer: 'Il conserve la distance physique nécessaire pour un tour complet de 360 degrés en centimètres.' },
  { question: 'Pourquoi le eDPI change-t-il entre deux jeux ?', answer: 'Le eDPI dépend du moteur du jeu et n est comparable que sur une même échelle yaw.' },
  { question: 'Le FOV modifie-t-il la conversion ?', answer: 'Non, la distance physique pour effectuer un tour complet de 360 degrés reste identique.' },
  { question: 'La conversion est-elle exacte ?', answer: 'Oui, les calculs sont exacts selon les constantes yaw des jeux.' },
  { question: 'Comment entrer la sensibilité de Fortnite ?', answer: 'Entrez le pourcentage directement, par exemple 7 pour 7%.' },
  { question: 'Mes données sont-elles enregistrées ?', answer: 'Non, tout reste localement dans votre navigateur.' },
];

const howToItems = [
  { name: 'Choisir le jeu source', text: 'Sélectionnez votre jeu actuel, puis entrez le DPI et la sensibilité.' },
  { name: 'Choisir le jeu cible', text: 'Sélectionnez le jeu cible et conservez ou modifiez le DPI.' },
  { name: 'Copier le résultat', text: 'Copiez la sensibilité cible calculée dans votre jeu.' },
  { name: 'Vérifier en jeu', text: 'Effectuez un tour de 360 degrés sur votre tapis pour valider.' },
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
    sourceGameLabel: 'Jeu actuel',
    targetGameLabel: 'Jeu cible',
    sourceDpiLabel: 'DPI actuel',
    targetDpiLabel: 'DPI cible',
    sensitivityLabel: 'Sensibilité affichée dans le jeu',
    linkDpiLabel: 'Conserver le même DPI',
    sourceStationLabel: 'Configuration actuelle',
    targetStationLabel: 'Configuration cible',
    guideSourceText: 'Choisissez votre jeu actuel, puis entrez le DPI et la sensibilité horizontale.',
    guideTargetText: 'Choisissez le jeu cible. Laissez le DPI lié sauf si vous le modifiez.',
    guideResultText: 'Copiez le résultat dans le jeu cible, puis vérifiez un tour complet.',
    sourceInputHint: 'Trouvez ces valeurs dans le logiciel de votre souris et les réglages du jeu.',
    targetInputHint: 'La valeur cible apparaît ci-dessous dès que la saisie est valide.',
    profileResetText: 'Sensibilité réinitialisée sur un exemple. Remplacez-la par votre valeur.',
    resultForGameTemplate: '3. Entrez cette valeur dans {game}',
    yawLabel: 'Échelle yaw',
    measuredProfileLabel: 'Profil mesuré',
    documentedProfileLabel: 'Profil officiel',
    targetSensitivityLabel: 'Entrez cette sensibilité',
    copyResultLabel: 'Copier le résultat',
    copiedLabel: 'Copié',
    swapLabel: 'Inverser la conversion',
    swapButtonLabel: 'Échanger',
    shareLabel: 'Copier le lien',
    shareCopiedLabel: 'Lien copié',
    presetsLabel: 'Préréglages physiques',
    presetFastLabel: 'Rapide 22 cm',
    presetBalancedLabel: 'Équilibré 34 cm',
    presetControlLabel: 'Contrôle 50 cm',
    cmUnitLabel: 'Métrique',
    inchUnitLabel: 'Impérial',
    physicalArcLabel: 'Un tour complet',
    sourceEdpiLabel: 'eDPI source',
    targetEdpiLabel: 'eDPI cible',
    countsLabel: 'Impulsions souris',
    matchQualityLabel: 'Confiance du profil',
    exactMathLabel: 'Correspondance yaw exacte',
    calibrationLabel: 'Vérification physique recommandée',
    fastBandLabel: 'Zone rapide',
    balancedBandLabel: 'Zone équilibrée',
    controlBandLabel: 'Zone contrôle',
    extendedBandLabel: 'Zone étendue',
    formulaLabel: 'Formule de conversion',
    formulaText: 'sensibilité cible = sensibilité source x DPI source x yaw source / (DPI cible x yaw cible)',
    verificationTitle: 'Finaliser l étalonnage',
    verificationText: 'Marquez un point de départ sur votre tapis et effectuez un tour de 360 degrés dans les deux jeux.',
    baseAimOnlyText: 'Tir depuis la hanche uniquement.',
    invalidInputText: 'Entrez des valeurs positives.',
    openGameMenuLabel: 'Ouvrir le menu des profils de jeu',
  },
  seo: [
    { type: 'title', text: 'Convertir la sensibilité en conservant la distance physique', level: 2 },
    { type: 'paragraph', html: 'Les chiffres de sensibilité ne signifient pas la même chose dans chaque jeu. Ce convertisseur utilise l échelle yaw pour maintenir les <strong>cm par 360</strong>.' },
    { type: 'paragraph', html: 'Le résultat est conçu pour le tir depuis la hanche (hipfire).' },
    { type: 'title', text: 'La formule de conversion de sensibilité', level: 2 },
    { type: 'paragraph', html: '<strong>Sensibilité cible = sensibilité source x DPI source x yaw source / (DPI cible x yaw cible).</strong>' },
    {
      type: 'table',
      headers: ['Mesure', 'Signification', 'Meilleure utilisation'],
      rows: [
        ['Sensibilité', 'Valeur dans le menu du jeu', 'Ajuster un réglage dans le jeu'],
        ['eDPI', 'DPI multiplié par la sensibilité', 'Comparer les joueurs sur le même jeu'],
        ['cm par 360', 'Distance physique sur le tapis', 'Conserver le même shoot entre jeux'],
      ],
    },
    { type: 'title', text: 'Profils de jeux qualifiés', level: 2 },
    { type: 'paragraph', html: 'Compatible CS2, Valorant, Apex Legends, Overwatch 2, Fortnite, Quake et moteurs Source.' },
    { type: 'tip', title: 'Format Fortnite', html: 'Entrez la valeur en pourcentage, par exemple <strong>7</strong> pour 7 pour cent.' },
    { type: 'title', text: 'Champ de vision et distance 360', level: 2 },
    { type: 'paragraph', html: 'Un tour physique de 360 degrés ne dépend pas du champ de vision (FOV).' },
    { type: 'title', text: 'Comment vérifier le résultat en jeu', level: 2 },
    {
      type: 'list',
      items: [
        'Désactivez l accélération de la souris.',
        'Alignez la souris sur un repère du tapis.',
        'Faites un tour complet de 360 degrés.',
        'Ajustez légèrement si nécessaire.',
      ],
    },
    { type: 'tip', title: 'Vérification pratique recommandée', html: 'Faites une vérification visuelle sur votre tapis de souris pour un confort optimal.' },
  ],
  faqTitle: 'Foire aux questions sur la sensibilité souris',
  faq: faqItems,
  bibliographyTitle: 'Sources et références',
  bibliography,
  howTo: howToItems,
  schemas: [appSchema, faqSchema, howToSchema],
};
