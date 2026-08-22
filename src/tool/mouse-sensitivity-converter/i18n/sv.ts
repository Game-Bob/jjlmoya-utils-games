import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'mousensitivitet-omvandlare-spel';
const title = 'Mössensitivitet Omvandlare Mellan Spel';
const description = 'Matcha din fysiska mussträcka mellan alla e-sportspel. Omvandla hipfire-sensitivitet med separata DPI-värden och beräkna cm per 360.';

const faqItems = [
  {
    "question": "Vad bevarar denna omvandlare för mössensitivitet ?",
    "answer": "Den bevarar det exakta fysiska avståndet i centimeter för en 360-graders vridning."
  },
  {
    "question": "Varför skiljer sig eDPI mellan spel ?",
    "answer": "eDPI beror på yaw-skalan och är bara jämförbart inom samma spel."
  },
  {
    "question": "Ändrar synfältet (FOV) omvandlingen ?",
    "answer": "Nej, det fysiska avståndet för 360 grader är detsamma."
  },
  {
    "question": "Är omvandlingen exakt ?",
    "answer": "Beräkningen är exakt baserat på yaw-konstanterna."
  },
  {
    "question": "Hur anger jag Fortnite-sensitivitet ?",
    "answer": "Ange procenttalet, t.ex. 7 för 7%."
  },
  {
    "question": "Sparas mina uppgifter ?",
    "answer": "Nej, alla uppgifter stannar lokalt i din webbläsare."
  }
];

const howToItems = [
  {
    "name": "Välj källspel",
    "text": "Välj nuvarande spel och ange DPI och sensitivitet."
  },
  {
    "name": "Välj målspel",
    "text": "Välj målspel och ställ in DPI."
  },
  {
    "name": "Kopiera värdet",
    "text": "Kopiera resultatet till det nya spelets inställningar."
  },
  {
    "name": "Kontrollera vridningen",
    "text": "Gör en 360-graders vridning på musmattan."
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
};

export const content: MouseSensitivityLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "sourceGameLabel": "Nuvarande spel",
    "targetGameLabel": "Målspel",
    "sourceDpiLabel": "Nuvarande DPI",
    "targetDpiLabel": "Mål-DPI",
    "sensitivityLabel": "Sensitivitet i spelet",
    "linkDpiLabel": "Behåll samma DPI",
    "sourceStationLabel": "Nuvarande inställning",
    "targetStationLabel": "Målinställning",
    "guideSourceText": "Välj ditt nuvarande spel, ange DPI och din horisontella sensitivitet.",
    "guideTargetText": "Välj målspel. Låt DPI vara länkad om du inte ändrar den.",
    "guideResultText": "Kopiera resultatet till målspelet och kontrollera en 360-graders vridning.",
    "sourceInputHint": "Hitta dessa värden i din musprogramvara och spelinställningar.",
    "targetInputHint": "Målvärdet visas nedan så snart inmatningen är giltig.",
    "profileResetText": "Sensitiviteten återställd till exempelvärde. Ersätt med ditt eget värde.",
    "resultForGameTemplate": "3. Ange detta värde i {game}",
    "yawLabel": "Yaw-skala",
    "measuredProfileLabel": "Uppmätt profil",
    "documentedProfileLabel": "Dokumenterad profil",
    "targetSensitivityLabel": "Ange denna sensitivitet",
    "copyResultLabel": "Kopiera resultat",
    "copiedLabel": "Kopierat",
    "swapLabel": "Vänd omvandling",
    "swapButtonLabel": "Växla",
    "shareLabel": "Kopiera länk",
    "shareCopiedLabel": "Länk kopierad",
    "presetsLabel": "Snabbval för minne",
    "presetFastLabel": "Snabb 22 cm",
    "presetBalancedLabel": "Balanserad 34 cm",
    "presetControlLabel": "Kontroll 50 cm",
    "cmUnitLabel": "Metrisk",
    "inchUnitLabel": "Imperial",
    "physicalArcLabel": "En hel vridning",
    "sourceEdpiLabel": "Käll-eDPI",
    "targetEdpiLabel": "Mål-eDPI",
    "countsLabel": "Musimpulser",
    "matchQualityLabel": "Profilprecision",
    "exactMathLabel": "Exakt Yaw-värde",
    "calibrationLabel": "Fysisk kontroll rekommenderas",
    "fastBandLabel": "Snabb zon",
    "balancedBandLabel": "Balanserad zon",
    "controlBandLabel": "Kontrollzon",
    "extendedBandLabel": "Utökad zon",
    "formulaLabel": "Omvandlingsformel",
    "formulaText": "målsensitivitet = källsensitivitet x käll-DPI x käll-yaw / (mål-DPI x mål-yaw)",
    "verificationTitle": "Slutför kalibrering",
    "verificationText": "Markera en startpunkt på musmattan och gör en 360-graders vridning i båda spelen.",
    "baseAimOnlyText": "Endast för bas-hipfire horisontellt.",
    "invalidInputText": "Ange positiva värden.",
    "openGameMenuLabel": "Öppna spelprofilmeny"
},
  seo: [
    {
        "type": "title",
        "text": "Omvandla Mössensitivitet Med Samma Fysiska Distans",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Sensitivitetsvärden betyder inte samma sak i alla spel. Denna omvandlare använder yaw-skalan för att bevara <strong>cm per 360</strong>."
    },
    {
        "type": "paragraph",
        "html": "Resultatet är utformat för bas-hipfire."
    },
    {
        "type": "title",
        "text": "Formeln För Omvandling Av Sensitivitet",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "<strong>Målsensitivitet = källsensitivitet x käll-DPI x käll-yaw / (mål-DPI x mål-yaw).</strong>"
    },
    {
        "type": "table",
        "headers": [
            "Mätning",
            "Betydelse",
            "Bästa användning"
        ],
        "rows": [
            [
                "Sensitivitet",
                "Värde i spelmenyn",
                "Ändra inställning i spelet"
            ],
            [
                "eDPI",
                "DPI multiplicerat med sensitivitet",
                "Jämföra spelare i samma spel"
            ],
            [
                "cm per 360",
                "Fysiskt avstånd på musmattan",
                "Behålla samma sikte mellan spel"
            ]
        ]
    },
    {
        "type": "title",
        "text": "Spelprofiler Som Stöds",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Stödjer CS2, Valorant, Apex Legends, Overwatch 2, Fortnite, Quake och Source."
    },
    {
        "type": "tip",
        "title": "Fortnite-Format",
        "html": "Ange procentvärdet som visas, t.ex. <strong>7</strong> för 7 procent."
    },
    {
        "type": "title",
        "text": "Varför Synfält Inte Påverkar 360",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "En 360-graders vridning beror inte på synfältet (FOV)."
    },
    {
        "type": "title",
        "text": "Hur Du Kontrollerar Resultatet i Spelet",
        "level": 2
    },
    {
        "type": "list",
        "items": [
            "Stäng av musacceleration.",
            "Rikta in musen mot ett märke.",
            "Gör en hel 360-graders vridning.",
            "Justera värdet vid behov."
        ]
    },
    {
        "type": "tip",
        "title": "Praktisk kontroll rekommenderas",
        "html": "Testa på musmattan för att säkerställa perfekt precision."
    }
],
  faqTitle: 'Vanliga frågor om mössensitivitet',
  faq: faqItems,
  bibliographyTitle: 'Källor och kalibreringsreferenser',
  bibliography,
  howTo: howToItems,
  schemas: [appSchema, faqSchema, howToSchema],
};
