import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'convertisseur-sensibilite-souris-jeux';
const title = 'Convertisseur de Sensibilité Souris Entre Jeux';
const description = 'Ajustez votre distance physique de souris entre jeux compétitifs. Convertissez la sensibilité hipfire avec des valeurs DPI indépendantes, calculez les cm par 360 et eDPI, et vérifiez les profils mesurés en jeu.';

const faqItems = [
  {
    "question": "Que préserve ce convertisseur de sensibilité souris ?",
    "answer": "Il préserve la distance physique exacte nécessaire pour effectuer un tour complet à 360 degrés en centimètres ou en pouces."
  },
  {
    "question": "Pourquoi le eDPI est-il différent après conversion ?",
    "answer": "Le eDPI est le DPI multiplié par la sensibilité et n est directement comparable que dans les jeux utilisant la même échelle yaw. Les cm par 360 incluent la constante du moteur et constituent la mesure réelle."
  },
  {
    "question": "Le champ de vision modifie-t-il la conversion ?",
    "answer": "Le champ de vision modifie la perception visuelle mais ne change pas la distance physique pour un tour complet à 360 degrés en vue hanche (hipfire)."
  },
  {
    "question": "La sensibilité convertie est-elle exacte ?",
    "answer": "Le calcul mathématique est exact selon les valeurs yaw. Une vérification physique reste recommandée si le profil a été mesuré par la communauté."
  },
  {
    "question": "Comment entrer la sensibilité de Fortnite ?",
    "answer": "Entrez la valeur en pourcentage affichée dans le jeu, par exemple 7 pour 7 pour cent."
  },
  {
    "question": "Mes paramètres sont-ils envoyés sur un serveur ?",
    "answer": "Non. Tout le calcul reste en local dans votre navigateur web."
  }
];

const howToItems = [
  {
    "name": "Choisir la configuration source",
    "text": "Sélectionnez votre jeu actuel, son DPI et sa sensibilité horizontale sans viser."
  },
  {
    "name": "Choisir la configuration cible",
    "text": "Sélectionnez le jeu de destination et ajustez le DPI si nécessaire."
  },
  {
    "name": "Copier la valeur convertie",
    "text": "Copiez le résultat dans les paramètres de souris du jeu cible."
  },
  {
    "name": "Vérifier un tour complet",
    "text": "Effectuez un tour de 360 degrés sur votre tapis de souris pour valider l étalonnage."
  }
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
    "sourceGameLabel": "Jeu actuel",
    "targetGameLabel": "Jeu cible",
    "sourceDpiLabel": "DPI actuel",
    "targetDpiLabel": "DPI cible",
    "sensitivityLabel": "Sensibilité affichée dans le jeu",
    "linkDpiLabel": "Conserver le même DPI",
    "sourceStationLabel": "Votre configuration actuelle",
    "targetStationLabel": "Votre configuration cible",
    "guideSourceText": "Choisissez le jeu que vous utilisez déjà, puis copiez son DPI et sa sensibilité horizontale sans viser.",
    "guideTargetText": "Choisissez le jeu cible. Laissez le DPI lié sauf si vous modifiez la sensibilité de la souris.",
    "guideResultText": "Copiez le résultat surbrillé dans le jeu cible, puis vérifiez un tour physique.",
    "sourceInputHint": "Trouvez ces valeurs dans le logiciel de votre souris et les paramètres du jeu.",
    "targetInputHint": "La valeur de destination apparaît ci-dessous dès que la saisie est valide.",
    "profileResetText": "Sensibilité réinitialisée sur un exemple standard. Remplacez-la par votre vraie valeur.",
    "resultForGameTemplate": "3. Entrez cette valeur dans {game}",
    "yawLabel": "Échelle yaw",
    "measuredProfileLabel": "Profil mesuré",
    "documentedProfileLabel": "Profil officiel",
    "targetSensitivityLabel": "Entrez cette sensibilité",
    "copyResultLabel": "Copier le résultat",
    "copiedLabel": "Copié",
    "swapLabel": "Inverser la conversion",
    "swapButtonLabel": "Échanger",
    "shareLabel": "Copier le lien",
    "shareCopiedLabel": "Lien copié",
    "presetsLabel": "Préréglages de visée physique",
    "presetFastLabel": "Rapide 22 cm",
    "presetBalancedLabel": "Équilibré 34 cm",
    "presetControlLabel": "Contrôle 50 cm",
    "cmUnitLabel": "Métrique",
    "inchUnitLabel": "Impérial",
    "physicalArcLabel": "Un tour complet",
    "sourceEdpiLabel": "eDPI source",
    "targetEdpiLabel": "eDPI cible",
    "countsLabel": "Impulsions souris",
    "matchQualityLabel": "Confiance du profil",
    "exactMathLabel": "Correspondance yaw officielle",
    "calibrationLabel": "Vérification physique recommandée",
    "fastBandLabel": "Orbite rapide",
    "balancedBandLabel": "Orbite équilibrée",
    "controlBandLabel": "Orbite de contrôle",
    "extendedBandLabel": "Orbite étendue",
    "formulaLabel": "Équation de conversion",
    "formulaText": "sensibilité cible = sensibilité source x DPI source x yaw source / (DPI cible x yaw cible)",
    "verificationTitle": "Finaliser l étalonnage sur tapis",
    "verificationText": "Marquez un point de départ sur votre tapis de souris et effectuez le même tour complet sans viser dans les deux jeux pour vérifier l équivalence exacte. De petites différences peuvent provenir d arrondis ou de multiplicateurs masqués.",
    "baseAimOnlyText": "Tir horizontal depuis la hanche uniquement. Le viseur (ADS), l accélération et le calcul selon le champ de vision nécessitent un étalonnage séparé.",
    "invalidInputText": "Entrez des valeurs positives pour calculer la conversion.",
    "openGameMenuLabel": "Ouvrir le menu des profils de jeu"
},
  seo: [
    {
        "type": "title",
        "text": "Convertir la Sensibilité Souris Avec une Distance Physique Partagée",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Les valeurs de sensibilité ne signifient pas la même chose dans tous les jeux. Ce convertisseur utilise l échelle yaw de chaque profil pour préserver les <strong>cm par 360</strong>, soit la distance physique exacte nécessaire à votre main pour effectuer un tour horizontal complet. Vous pouvez également utiliser des valeurs DPI différentes pour chaque configuration."
    },
    {
        "type": "paragraph",
        "html": "Le résultat est optimisé pour le tir horizontal depuis la hanche (hipfire). Il ne prétend pas conserver la perception avec viseur (ADS) car ces systèmes dépendent du champ de vision (FOV), du zoom et de paramètres spécifiques à chaque titre."
    },
    {
        "type": "title",
        "text": "La Formule Mathématique de Conversion de Sensibilité",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "<strong>Sensibilité cible = sensibilité source x DPI source x yaw source / (DPI cible x yaw cible).</strong> Le yaw est le nombre de degrés horizontaux produits par une impulsion de souris à la sensibilité 1. Cette relation permet de calculer les cm par 360 via la formule 2.54 x 360 / (DPI x sensibilité x yaw)."
    },
    {
        "type": "table",
        "headers": [
            "Mesure",
            "Signification",
            "Meilleur usage"
        ],
        "rows": [
            [
                "Sensibilité",
                "Le nombre entré dans un jeu",
                "Modifier un réglage dans ce jeu en particulier"
            ],
            [
                "eDPI",
                "DPI multiplié par la sensibilité",
                "Comparer les joueurs sur le même moteur et la même échelle yaw"
            ],
            [
                "cm par 360",
                "Distance physique sur le tapis pour 360 degrés",
                "Conserver exactement le même shoot entre jeux différents"
            ]
        ]
    },
    {
        "type": "title",
        "text": "Profils de Jeux Pris en Charge et Confiance",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Les profils couvrent Counter Strike 2, Valorant, Apex Legends, Overwatch 2, Fortnite, les moteurs Source et Quake, et Aim Lab. Source et Quake utilisent une valeur officielle connue. D autres coefficients ayant été mesurés par la communauté, l interface les signale pour étalonnage sur votre tapis."
    },
    {
        "type": "tip",
        "title": "Format de saisie Fortnite",
        "html": "Utilisez le pourcentage horizontal visible. Entrez <strong>7</strong> lorsque le jeu affiche 7 pour cent. N entrez pas 0.07."
    },
    {
        "type": "title",
        "text": "Pourquoi le Champ de Vision N Est Pas une Entrée Ici",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Une correspondance physique à 360 degrés est basée uniquement sur la rotation et le déplacement de la souris, le champ de vision n est donc pas requis. Le FOV modifie la vitesse visuelle à l écran. Les joueurs souhaitant un alignement selon le zoom doivent utiliser une méthode distincte basée sur l écran."
    },
    {
        "type": "title",
        "text": "Comment Vérifier le Résultat en Jeu",
        "level": 2
    },
    {
        "type": "list",
        "items": [
            "Désactivez l accélération de la souris et utilisez la vue de base non visée dans les deux jeux.",
            "Placez la souris contre un repère répétable sur votre tapis et visiez un point précis dans le jeu.",
            "Effectuez un tour complet à 360 degrés et mesurez la distance exacte parcourue par votre main.",
            "Répétez plusieurs tours pour détecter la dérive d arrondi, puis ajustez la valeur cible au minimum disponible."
        ]
    },
    {
        "type": "tip",
        "title": "Un convertisseur est un instrument de départ",
        "html": "Faites confiance à une vérification physique précise à 360 degrés sur votre tapis lorsque le profil est marqué comme mesuré par la communauté."
    }
],
  faqTitle: 'Foire aux questions sur la sensibilité de la souris',
  faq: faqItems,
  bibliographyTitle: 'Sources et références d étalonnage',
  bibliography,
  howTo: howToItems,
  schemas: [appSchema, faqSchema, howToSchema],
};
