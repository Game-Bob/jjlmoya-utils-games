import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'maussensitivitaet-umrechnen-spiele';
const title = 'Maussensitivität Umrechnen Zwischen Spielen';
const description = 'Rechne deine Maussensitivität präzise zwischen Spielen um. Erhalte cm pro 360, eDPI und vergleiche Profile.';

const faqItems = [
  {
    "question": "Was bewahrt dieser Maussensitivitäts-Umrechner?",
    "answer": "Er bewahrt die physische Mausdistanz für eine 360-Grad-Drehung in Zentimetern."
  },
  {
    "question": "Warum unterscheidet sich der eDPI-Wert?",
    "answer": "eDPI ist DPI multipliziert mit der Sensitivität und nur im selben Spiel direkt vergleichbar."
  },
  {
    "question": "Ändert das Sichtfeld (FOV) die Umrechnung?",
    "answer": "Nein, die physische Distanz für 360 Grad bleibt bei Basis-Hipfire identisch."
  },
  {
    "question": "Ist die Umrechnung exakt?",
    "answer": "Die Mathematik ist exakt basierend auf den Yaw-Werten der Spiele."
  },
  {
    "question": "Wie gebe ich die Fortnite-Sensitivitaet ein?",
    "answer": "Gib die Zahl als Prozentwert ein, zum Beispiel 7 fuer 7 Prozent."
  },
  {
    "question": "Werden meine Einstellungen gespeichert?",
    "answer": "Nein, alle Daten bleiben lokal in deinem Browser."
  }
];

const howToItems = [
  {
    "name": "Quell-Setup waehlen",
    "text": "Waehle dein Spiel und gib DPI sowie Sensitivitaet ein."
  },
  {
    "name": "Ziel-Setup waehlen",
    "text": "Waehle das Zielspiel und verbinde oder passe die DPI an."
  },
  {
    "name": "Wert kopieren",
    "text": "Kopiere das berechnete Ergebnis in das Zielspiel."
  },
  {
    "name": "Drehung ueberpruefen",
    "text": "Fuehre eine 360-Grad-Drehung auf dem Mauspad aus."
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export const content: MouseSensitivityLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "sourceGameLabel": "Aktuelles Spiel",
    "targetGameLabel": "Zielspiel",
    "sourceDpiLabel": "Aktuelle DPI",
    "targetDpiLabel": "Ziel DPI",
    "sensitivityLabel": "Sensitivitaet im Spiel",
    "linkDpiLabel": "Gleiche DPI beibehalten",
    "sourceStationLabel": "Dein aktuelles Setup",
    "targetStationLabel": "Dein Ziel-Setup",
    "guideSourceText": "Waehle dein Spiel, gib deine DPI und deine horizontale Sensitivitaet ein.",
    "guideTargetText": "Waehle das Zielspiel. Lasse DPI verknuepft, ausser du aenderst sie.",
    "guideResultText": "Kopiere das Ergebnis in das Zielspiel und ueberpruefe eine 360-Grad-Drehung.",
    "sourceInputHint": "Finde diese Werte in deiner Maus-Software und den Spieleinstellungen.",
    "targetInputHint": "Der Zielwert erscheint unten, sobald die Eingaben gueltig sind.",
    "profileResetText": "Sensitivitaet auf Beispielwert zurueckgesetzt. Ersetze ihn durch deinen Wert.",
    "resultForGameTemplate": "3. Gib diesen Wert in {game} ein",
    "yawLabel": "Yaw-Skala",
    "measuredProfileLabel": "Gemessenes Profil",
    "documentedProfileLabel": "Dokumentiertes Profil",
    "targetSensitivityLabel": "Gib diese Sensitivitaet ein",
    "copyResultLabel": "Ergebnis kopieren",
    "copiedLabel": "Kopiert",
    "swapLabel": "Umrechnung umkehren",
    "swapButtonLabel": "Spiele tauschen",
    "shareLabel": "Link kopieren",
    "shareCopiedLabel": "Link kopiert",
    "presetsLabel": "Voreinstellungen",
    "presetFastLabel": "Schnell 22 cm",
    "presetBalancedLabel": "Ausgewogen 34 cm",
    "presetControlLabel": "Kontrolle 50 cm",
    "cmUnitLabel": "Metrisch",
    "inchUnitLabel": "Imperial",
    "physicalArcLabel": "Eine volle Drehung",
    "sourceEdpiLabel": "Quell-eDPI",
    "targetEdpiLabel": "Ziel-eDPI",
    "countsLabel": "Mausimpulse",
    "matchQualityLabel": "Profilgenauigkeit",
    "exactMathLabel": "Exakter Yaw-Wert",
    "calibrationLabel": "Physische Pruefung empfohlen",
    "fastBandLabel": "Schnelle Orbit-Zone",
    "balancedBandLabel": "Ausgewogene Orbit-Zone",
    "controlBandLabel": "Kontroll-Orbit-Zone",
    "extendedBandLabel": "Erweiterte Orbit-Zone",
    "formulaLabel": "Umrechnungsformel",
    "formulaText": "Ziel-Sensitivitaet = Quell-Sensitivitaet x Quell-DPI x Quell-Yaw / (Ziel-DPI x Ziel-Yaw)",
    "verificationTitle": "Kalibrierung abschliessen",
    "verificationText": "Markiere einen Startpunkt auf deinem Mauspad und fuehre in beiden Spielen eine 360-Grad-Drehung aus.",
    "baseAimOnlyText": "Nur fuer Basis-Hipfire horizontal.",
    "invalidInputText": "Gib positive Werte ein.",
    "openGameMenuLabel": "Spielprofil-Menue oeffnen"
},
  seo: [
    {
        "type": "title",
        "text": "Maussensitivitaet mit gleicher physischer Distanz umrechnen",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Sensitivitaetswerte bedeuten nicht in jedem Spiel dasselbe. Dieser Konverter nutzt die Yaw-Skala jedes Profils, um <strong>cm pro 360</strong> zu bewahren."
    },
    {
        "type": "paragraph",
        "html": "Das Ergebnis basiert auf horizontaler Hipfire-Eingabe ohne Zielfernrohr."
    },
    {
        "type": "title",
        "text": "Die Formel zur Sensitivitaetsumrechnung",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "<strong>Ziel-Sensitivitaet = Quell-Sensitivitaet x Quell-DPI x Quell-Yaw / (Ziel-DPI x Ziel-Yaw).</strong>"
    },
    {
        "type": "table",
        "headers": [
            "Messung",
            "Bedeutung",
            "Beste Nutzung"
        ],
        "rows": [
            [
                "Sensitivitaet",
                "Wert im Spielmenue",
                "Einstellung im Spiel anpassen"
            ],
            [
                "eDPI",
                "DPI mal Sensitivitaet",
                "Vergleich im selben Spiel"
            ],
            [
                "cm pro 360",
                "Physische Distanz fuer 360 Drehung",
                "Gleiches Zielen ueber Spiele hinweg"
            ]
        ]
    },
    {
        "type": "title",
        "text": "Unterstuetzte Spielprofile",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Unterstuetzt CS2, Valorant, Apex Legends, Overwatch 2, Fortnite, Source und Quake."
    },
    {
        "type": "tip",
        "title": "Fortnite Eingabeformat",
        "html": "Gib den Prozentwert ein, z.B. <strong>7</strong> fuer 7 Prozent."
    },
    {
        "type": "title",
        "text": "Sichtfeld und 360 Grad Drehung",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Eine physische 360-Grad-Drehung haengt nicht vom Sichtfeld (FOV) ab."
    },
    {
        "type": "title",
        "text": "Ergebnis im Spiel ueberpruefen",
        "level": 2
    },
    {
        "type": "list",
        "items": [
            "Deaktiviere die Mausbeschleunigung.",
            "Richte die Maus an einer Markierung aus.",
            "Fuehre eine volle 360-Grad-Drehung aus.",
            "Passe den Wert bei Bedarf leicht an."
        ]
    },
    {
        "type": "tip",
        "title": "Praktische Pruefung empfohlen",
        "html": "Vertraue im Zweifel einer physischen Messung auf dem Mauspad."
    }
],
  faqTitle: 'Haeufig gestellte Fragen zur Maussensitivitaet',
  faq: faqItems,
  bibliographyTitle: 'Sources',
  bibliography,
  howTo: howToItems,
  schemas: [appSchema, faqSchema, howToSchema],
};
