import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'muis-gevoeligheid-omrekenen-games';
const title = 'Muis Gevoeligheid Omrekenen Tussen Games';
const description = 'Stel je fysieke muisafstand gelijk tussen competitieve games. Reken hipfire gevoeligheid om met onafhankelijke DPI-waarden en cm per 360.';

const faqItems = [
  {
    "question": "Wat behoudt deze muisgevoeligheidsconverter ?",
    "answer": "Het behoudt de exacte fysieke muisafstand in centimeters voor een 360 graden draai."
  },
  {
    "question": "Waarom verschilt eDPI tussen games ?",
    "answer": "eDPI hangt af van de yaw-schaal en is alleen vergelijkbaar binnen dezelfde game."
  },
  {
    "question": "Verandert het gezichtsveld (FOV) de omrekening ?",
    "answer": "Nee, de fysieke afstand voor 360 graden blijft identiek."
  },
  {
    "question": "Is de omrekening exact ?",
    "answer": "De berekening is exact op basis van de yaw-constanten."
  },
  {
    "question": "Hoe voer ik Fortnite gevoeligheid in ?",
    "answer": "Voer het percentage in als getal, bijvoorbeeld 7 voor 7%."
  },
  {
    "question": "Worden mijn gegevens opgeslagen ?",
    "answer": "Nee, alle gegevens blijven lokaal in je browser."
  }
];

const howToItems = [
  {
    "name": "Kies de brongame",
    "text": "Selecteer je huidige game en voer DPI en gevoeligheid in."
  },
  {
    "name": "Kies de doelgame",
    "text": "Selecteer de doelgame en stel de DPI in."
  },
  {
    "name": "Kopieer de waarde",
    "text": "Kopieer het resultaat naar de spelinstellingen."
  },
  {
    "name": "Controleer de draai",
    "text": "Maak een 360 graden draai op je muismat."
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
    "sourceGameLabel": "Huidige game",
    "targetGameLabel": "Doelgame",
    "sourceDpiLabel": "Huidige DPI",
    "targetDpiLabel": "Doel DPI",
    "sensitivityLabel": "Gevoeligheid in de game",
    "linkDpiLabel": "Zelfde DPI behouden",
    "sourceStationLabel": "Huidige opstelling",
    "targetStationLabel": "Doelopstelling",
    "guideSourceText": "Kies je huidige game, voer de DPI en horizontale gevoeligheid in.",
    "guideTargetText": "Kies de doelgame. Laat DPI gekoppeld tenzij je deze verandert.",
    "guideResultText": "Kopieer het resultaat naar de doelgame en controleer een 360 graden draai.",
    "sourceInputHint": "Vind deze waarden in je muissoftware en spelinstellingen.",
    "targetInputHint": "De doelwaarde verschijnt hieronder zodra de invoer geldig is.",
    "profileResetText": "Gevoeligheid gereset naar voorbeeldwaarde. Vervang deze door jouw waarde.",
    "resultForGameTemplate": "3. Voer deze waarde in in {game}",
    "yawLabel": "Yaw-schaal",
    "measuredProfileLabel": "Gemeten profiel",
    "documentedProfileLabel": "Gedocumenteerd profiel",
    "targetSensitivityLabel": "Voer deze gevoeligheid in",
    "copyResultLabel": "Resultaat kopiëren",
    "copiedLabel": "Gekopieerd",
    "swapLabel": "Omrekening omkeren",
    "swapButtonLabel": "Wisselen",
    "shareLabel": "Link kopiëren",
    "shareCopiedLabel": "Link gekopieerd",
    "presetsLabel": "Voorkeursinstellingen",
    "presetFastLabel": "Snel 22 cm",
    "presetBalancedLabel": "Gebalanceerd 34 cm",
    "presetControlLabel": "Controle 50 cm",
    "cmUnitLabel": "Metrisch",
    "inchUnitLabel": "Imperiaal",
    "physicalArcLabel": "Een volledige draai",
    "sourceEdpiLabel": "Bron eDPI",
    "targetEdpiLabel": "Doel eDPI",
    "countsLabel": "Muispulsen",
    "matchQualityLabel": "Profielnauwkeurigheid",
    "exactMathLabel": "Exacte Yaw-waarde",
    "calibrationLabel": "Fysieke controle aanbevolen",
    "fastBandLabel": "Snelle zone",
    "balancedBandLabel": "Gebalanceerde zone",
    "controlBandLabel": "Controlezone",
    "extendedBandLabel": "Uitgebreide zone",
    "formulaLabel": "Omrekenformule",
    "formulaText": "doelgevoeligheid = brongevoeligheid x bron DPI x bron yaw / (doel DPI x doel yaw)",
    "verificationTitle": "Kalibratie voltooien",
    "verificationText": "Markeer een startpunt op je muismat en maak een 360 graden draai in beide games.",
    "baseAimOnlyText": "Alleen voor basis-hipfire horizontaal.",
    "invalidInputText": "Voer positieve waarden in.",
    "openGameMenuLabel": "Gameprofielmenu openen"
},
  seo: [
    {
        "type": "title",
        "text": "Muisgevoeligheid Omrekenen Met Gelijke Fysieke Afstand",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Gevoeligheidswaarden zijn niet in elke game hetzelfde. Deze converter gebruikt de yaw-schaal om de <strong>cm per 360</strong> te behouden, de fysieke afstand voor een volledige draai."
    },
    {
        "type": "paragraph",
        "html": "Het resultaat is ontworpen voor horizontale hipfire zonder te richten."
    },
    {
        "type": "title",
        "text": "De Formule Voor Gevoeligheidsomrekening",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "<strong>Doelgevoeligheid = brongevoeligheid x bron DPI x bron yaw / (doel DPI x doel yaw).</strong>"
    },
    {
        "type": "table",
        "headers": [
            "Meting",
            "Betekenis",
            "Beste gebruik"
        ],
        "rows": [
            [
                "Gevoeligheid",
                "Waarde in gamemenu",
                "Instelling in game aanpassen"
            ],
            [
                "eDPI",
                "DPI vermenigvuldigd met gevoeligheid",
                "Spelers in dezelfde game vergelijken"
            ],
            [
                "cm per 360",
                "Fysieke afstand op muismat",
                "Gelijke aim behouden tussen games"
            ]
        ]
    },
    {
        "type": "title",
        "text": "Ondersteunde Gameprofielen",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Ondersteunt CS2, Valorant, Apex Legends, Overwatch 2, Fortnite, Quake en Source games."
    },
    {
        "type": "tip",
        "title": "Fortnite Invoerformaat",
        "html": "Voer het percentage in, bijvoorbeeld <strong>7</strong> voor 7 procent."
    },
    {
        "type": "title",
        "text": "Gezichtsveld en 360 Graden Draai",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Een 360 graden draai hangt niet af van het gezichtsveld (FOV)."
    },
    {
        "type": "title",
        "text": "Resultaat in de Game Controleren",
        "level": 2
    },
    {
        "type": "list",
        "items": [
            "Schakel muisversnelling uit.",
            "Lijn de muis uit op een markering.",
            "Maak een volledige 360 graden draai.",
            "Pas de waarde zo nodig aan."
        ]
    },
    {
        "type": "tip",
        "title": "Praktische controle aanbevolen",
        "html": "Doe een test op je muismat voor maximale nauwkeurigheid."
    }
],
  faqTitle: 'Veelgestelde vragen over muisgevoeligheid',
  faq: faqItems,
  bibliographyTitle: 'Bronnen en kalibratiereferenties',
  bibliography,
  howTo: howToItems,
  schemas: [appSchema, faqSchema, howToSchema],
};
