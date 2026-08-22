import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'maussensitivitaet-umrechnen-spiele';
const title = 'Maussensitivität Umrechnen Zwischen Spielen';
const description = 'Gleiche deine physische Mausstrecke in allen E-Sport-Spielen ab. Wandle Hipfire-Sensitivität mit separaten DPI-Werten um, vergleiche cm pro 360 und eDPI, und überprüfe gemessene Profile im Spiel.';

const faqItems = [
  {
    "question": "Was bewahrt dieser Maussensitivitäts-Umrechner?",
    "answer": "Er bewahrt die exakte physische Mausdistanz, die für eine vollständige horizontale 360-Grad-Drehung erforderlich ist. Dies wird allgemein als Zentimeter pro 360 oder Zoll pro 360 bezeichnet."
  },
  {
    "question": "Warum unterscheidet sich der eDPI-Wert nach der Umrechnung?",
    "answer": "eDPI ist lediglich DPI multipliziert mit dem Sensitivitätswert im Spiel und ist nur innerhalb von Spielen direkt vergleichbar, die dieselbe Yaw-Skala verwenden. cm pro 360 berücksichtigt den Yaw-Wert der Spiel-Engine und ist die echte universelle Maßeinheit."
  },
  {
    "question": "Ändert das Sichtfeld (FOV) die Umrechnung?",
    "answer": "Das Sichtfeld verändert die wahrgenommene Bewegung und die Zielgröße auf dem Bildschirm, ändert jedoch nicht die physische Distanz für eine grundlegende 360-Grad-Drehung in diesem Modell. Zielfernrohre (ADS) und Spiele mit FOV-abhängiger Skalierung erfordern eine separate Kalibrierung."
  },
  {
    "question": "Ist die umgerechnete Sensitivität 100% exakt?",
    "answer": "Die Berechnung ist für die angezeigten Yaw-Werte mathematisch exakt. Einige Koeffizienten wurden von der Community gemessen, und Spiele-Updates können kleine Abweichungen verursachen. Das Werkzeug markiert diese Fälle zur physischen Prüfung."
  },
  {
    "question": "Wie gebe ich die Fortnite-Sensitivität ein?",
    "answer": "Gib die horizontale Maussensitivität aus dem Fortnite-Menü als Prozentzahl ein, zum Beispiel 7 für 7 Prozent. Dieses Profil deckt nur das horizontale Hipfire ab."
  },
  {
    "question": "Werden meine Einstellungen auf einen Server hochgeladen?",
    "answer": "Nein. Alle Berechnungen und gespeicherten Einstellungen verbleiben lokal in deinem Webbrowser. Die Teilen-Schaltfläche erzeugt einen Link, der nur die von dir eingegebenen Werte enthält."
  }
];

const howToItems = [
  {
    "name": "Quell-Setup wählen",
    "text": "Wähle dein aktuelles Spiel, gib seine horizontale Sensitivität und die verwendete Maus-DPI ein."
  },
  {
    "name": "Ziel-Setup wählen",
    "text": "Wähle das Zielspiel aus. Lasse DPI verknüpft, wenn die Maus-DPI unverändert bleibt, oder ändere sie bei Bedarf."
  },
  {
    "name": "Wert kopieren",
    "text": "Lies die Ziel-Sensitivität ab und kopiere das Ergebnis direkt in die Spieleinstellungen des Zielspiels."
  },
  {
    "name": "Drehung überprüfen",
    "text": "Markiere die Startposition auf dem Mauspad, führe eine 360-Grad-Drehung aus und vergleiche die physische Strecke."
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
    "sourceGameLabel": "Aktuelles Spiel",
    "targetGameLabel": "Zielspiel",
    "sourceDpiLabel": "Aktuelle DPI",
    "targetDpiLabel": "Ziel-DPI",
    "sensitivityLabel": "Sensitivität im Spiel",
    "linkDpiLabel": "Gleiche DPI beibehalten",
    "sourceStationLabel": "Dein aktuelles Setup",
    "targetStationLabel": "Dein Ziel-Setup",
    "guideSourceText": "Wähle dein Spiel, gib deine DPI und deine horizontale Sensitivität ein.",
    "guideTargetText": "Wähle das Zielspiel. Lasse DPI verknüpft, außer du änderst sie.",
    "guideResultText": "Kopiere das hervorgehobene Ergebnis in das Zielspiel und überprüfe eine 360-Grad-Drehung.",
    "sourceInputHint": "Finde diese Werte in deiner Maus-Software und den Spieleinstellungen.",
    "targetInputHint": "Der Zielwert erscheint unten, sobald die Eingabe gültig ist.",
    "profileResetText": "Sensitivität auf Beispielwert zurückgesetzt. Ersetze ihn durch deinen Wert.",
    "resultForGameTemplate": "3. Gib diesen Wert in {game} ein",
    "yawLabel": "Yaw-Skala",
    "measuredProfileLabel": "Gemessenes Profil",
    "documentedProfileLabel": "Offizieller Standard",
    "targetSensitivityLabel": "Gib diese Sensitivität ein",
    "copyResultLabel": "Ergebnis kopieren",
    "copiedLabel": "Kopiert",
    "swapLabel": "Umrechnung umkehren",
    "swapButtonLabel": "Tauschen",
    "shareLabel": "Link kopieren",
    "shareCopiedLabel": "Link kopiert",
    "presetsLabel": "Voreinstellungen für Muskelgedächtnis",
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
    "exactMathLabel": "Offizielle Yaw-Übereinstimmung",
    "calibrationLabel": "Physische Prüfung empfohlen",
    "fastBandLabel": "Schnelle Orbit-Zone",
    "balancedBandLabel": "Ausgewogene Orbit-Zone",
    "controlBandLabel": "Kontroll-Orbit-Zone",
    "extendedBandLabel": "Erweiterte Orbit-Zone",
    "formulaLabel": "Umrechnungsformel",
    "formulaText": "Ziel-Sensitivität = Quell-Sensitivität x Quell-DPI x Quell-Yaw / (Ziel-DPI x Ziel-Yaw)",
    "verificationTitle": "Kalibrierungsschleife schließen",
    "verificationText": "Markiere einen Startpunkt auf deinem Mauspad und führe in beiden Spielen eine volle 360-Grad-Drehung aus. Kleine Abweichungen können durch gerundete Werte, versteckte Multiplikatoren oder geändertes Eingabeverhalten entstehen.",
    "baseAimOnlyText": "Nur für horizontale Hipfire-Eingabe ohne Zielfernrohr. Visier-Sensitivität (ADS), Beschleunigung, vertikale Multiplikatoren und FOV-bezogene Monitorabstände liegen außerhalb dieser Umrechnung.",
    "invalidInputText": "Gib positive Werte ein, um die Berechnung zu starten.",
    "openGameMenuLabel": "Spielprofil-Menü öffnen"
},
  seo: [
    {
        "type": "title",
        "text": "Maussensitivität Mit Exakter Physischer Distanz Umrechnen",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Sensitivitätswerte bedeuten nicht in jedem Spiel dasselbe. Dieser Konverter nutzt die exakte Yaw-Skala jedes Profils, um <strong>cm pro 360</strong> zu bewahren - die physische Mausstrecke, die deine Hand für eine volle horizontale Drehung benötigt. Du kannst zudem unterschiedliche DPI-Werte für das Quell- und Ziel-Setup verwenden."
    },
    {
        "type": "paragraph",
        "html": "Das Ergebnis ist für die grundlegende horizontale Hipfire-Eingabe ohne Zielfernrohr optimiert. Es erhebt keinen Anspruch darauf, das Visierverhalten (ADS) oder den optischen Monitorabstand beizubehalten, da diese Systeme vom Sichtfeld (FOV), Zoomstufen und spielspezifischen Multiplikatoren abhängen."
    },
    {
        "type": "title",
        "text": "Die Mathematische Formel Zur Sensitivitätsumrechnung",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "<strong>Ziel-Sensitivität = Quell-Sensitivität x Quell-DPI x Quell-Yaw / (Ziel-DPI x Ziel-Yaw).</strong> Yaw ist der horizontale Winkel in Grad, den eine Bewegung des Maussensors bei Sensitivität 1 erzeugt. Dieselbe mathematische Beziehung ergibt cm pro 360 über die Formel 2.54 x 360 / (DPI x Sensitivität x Yaw)."
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
                "Sensitivität",
                "Zahlenwert im Spielmenü",
                "Anpassen der Option innerhalb dieses einen Spiels"
            ],
            [
                "eDPI",
                "DPI multipliziert mit der Sensitivität",
                "Vergleich von Spielern innerhalb derselben Yaw-Skala"
            ],
            [
                "cm pro 360",
                "Physische Mausstrecke für 360 Drehung",
                "Gleiches Muskelgedächtnis über verschiedene Spiele hinweg"
            ]
        ]
    },
    {
        "type": "title",
        "text": "Unterstützte Spielprofile und Genauigkeitsstandards",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Die Profilauswahl umfasst Counter Strike 2, Valorant, Apex Legends, Overwatch 2, Fortnite, Quake und Source-Engines sowie Aim Lab. Source und Quake nutzen eine bekannte offizielle Yaw-Konstante. Andere Werte wurden präzise durch die Community gemessen, weshalb die Benutzeroberfläche diese zur physischen Überprüfung kennzeichnet."
    },
    {
        "type": "tip",
        "title": "Fortnite Eingabeformat",
        "html": "Verwende den sichtbaren Prozentwert. Gib <strong>7</strong> ein, wenn das Spiel 7 Prozent anzeigt. Gib nicht 0.07 ein."
    },
    {
        "type": "title",
        "text": "Warum Das Sichtfeld (FOV) Hier Kein Eingabewert Ist",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Eine physische 360-Grad-Drehung basiert rein auf der Winkelrotation und deiner Handbewegung, weshalb das Sichtfeld (FOV) für diese Berechnung nicht erforderlich ist. Das FOV verändert lediglich die wahrgenommene Bildgeschwindigkeit. Spieler, die den gleichen optischen Bildschirmausschnitt anpassen möchten, benötigen ein separates Monitor-Distance-Verfahren."
    },
    {
        "type": "title",
        "text": "So Überprüfst Du Das Ergebnis Direkt Im Spiel",
        "level": 2
    },
    {
        "type": "list",
        "items": [
            "Deaktiviere jegliche Mausbeschleunigung in Windows oder der Maussoftware und nutze die ungezielt Basisansicht.",
            "Richte die Maus an einer festen Markierung auf dem Mauspad aus und visiere einen klaren Referenzpunkt im Spiel an.",
            "Führe eine volle 360-Grad-Drehung aus, kehre zum Referenzpunkt zurück und messe die exakte Strecke deiner Hand.",
            "Wiederhole den Vorgang mehrmals, um Rundungsfehler im Spielmenü aufzudecken, und passe den Zielwert in kleinstmöglichen Schritten an."
        ]
    },
    {
        "type": "tip",
        "title": "Ein Konverter ist ein Werkzeug zum Starten",
        "html": "Spiele-Updates, Konfigurationsdateien und Modus-Multiplikatoren können das echte Verhalten verändern. Nutze den berechneten Wert, vertraue jedoch immer einer physischen 360-Grad-Messung auf deinem Mauspad, wenn ein Profil als gemessen markiert ist."
    }
],
  faqTitle: 'Häufig gestellte Fragen zur Maussensitivität',
  faq: faqItems,
  bibliographyTitle: 'Quellen und Kalibrierungsreferenzen',
  bibliography,
  howTo: howToItems,
  schemas: [appSchema, faqSchema, howToSchema],
};
