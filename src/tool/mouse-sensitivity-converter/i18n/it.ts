import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'convertitore-sensibilita-mouse-giochi';
const title = 'Convertitore di Sensibilità Mouse Tra Giochi';
const description = 'Adatta la distanza fisica del mouse tra i giochi competitivi. Converti la sensibilità hipfire con DPI separati, calcola cm per 360 ed eDPI, e verifica i profili nel gioco.';

const faqItems = [
  {
    "question": "Cosa mantiene questo convertitore di sensibilità ?",
    "answer": "Mantiene la distanza fisica esatta in centimetri per completare una rotazione di 360 gradi."
  },
  {
    "question": "Perché il valore eDPI cambia tra i giochi ?",
    "answer": "L eDPI dipende dal motore del gioco ed è confrontabile solo sulla stessa scala yaw."
  },
  {
    "question": "Il campo visivo (FOV) modifica la conversione ?",
    "answer": "No, la distanza fisica per 360 gradi rimane identica."
  },
  {
    "question": "La conversione è esatta ?",
    "answer": "I calcoli sono matematicamente esatti in base alle costanti yaw."
  },
  {
    "question": "Come inserire la sensibilità di Fortnite ?",
    "answer": "Inserisci il numero percentuale come appare nel menu, ad esempio 7 per 7%."
  },
  {
    "question": "I miei dati vengono salvati ?",
    "answer": "No, tutti i dati rimangono locali nel tuo browser."
  }
];

const howToItems = [
  {
    "name": "Scegli il gioco di origine",
    "text": "Seleziona il gioco attuale, poi inserisci DPI e sensibilità."
  },
  {
    "name": "Scegli il gioco di destinazione",
    "text": "Seleziona il gioco di destinazione e imposta il DPI."
  },
  {
    "name": "Copia il valore",
    "text": "Copia la sensibilità risultante nelle impostazioni del nuovo gioco."
  },
  {
    "name": "Verifica la rotazione",
    "text": "Esegui una rotazione di 360 gradi sul tappetino per verificare."
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
    "sourceGameLabel": "Gioco attuale",
    "targetGameLabel": "Gioco di destinazione",
    "sourceDpiLabel": "DPI attuale",
    "targetDpiLabel": "DPI di destinazione",
    "sensitivityLabel": "Sensibilità nel gioco",
    "linkDpiLabel": "Mantenere lo stesso DPI",
    "sourceStationLabel": "Configurazione attuale",
    "targetStationLabel": "Configurazione di destinazione",
    "guideSourceText": "Scegli il gioco attuale, poi inserisci DPI e sensibilità orizzontale.",
    "guideTargetText": "Scegli il gioco di destinazione. Lascia il DPI collegato se non lo modifichi.",
    "guideResultText": "Copia il risultato nel nuovo gioco e verifica una rotazione di 360 gradi.",
    "sourceInputHint": "Trova questi valori nel software del mouse e nelle impostazioni di gioco.",
    "targetInputHint": "Il valore appare qui sotto non appena la configurazione è valida.",
    "profileResetText": "Sensibilità ripristinata su un esempio base. Sostituiscila con il tuo valore reale.",
    "resultForGameTemplate": "3. Inserisci questo valore in {game}",
    "yawLabel": "Scala yaw",
    "measuredProfileLabel": "Profilo misurato",
    "documentedProfileLabel": "Profilo ufficiale",
    "targetSensitivityLabel": "Inserisci questa sensibilità",
    "copyResultLabel": "Copia risultato",
    "copiedLabel": "Copiato",
    "swapLabel": "Inverti conversione",
    "swapButtonLabel": "Scambia",
    "shareLabel": "Copia link",
    "shareCopiedLabel": "Link copiato",
    "presetsLabel": "Preimpostazioni di mirino",
    "presetFastLabel": "Veloce 22 cm",
    "presetBalancedLabel": "Bilanciato 34 cm",
    "presetControlLabel": "Controllo 50 cm",
    "cmUnitLabel": "Metrico",
    "inchUnitLabel": "Imperiale",
    "physicalArcLabel": "Giro completo a 360 gradi",
    "sourceEdpiLabel": "eDPI di origine",
    "targetEdpiLabel": "eDPI di destinazione",
    "countsLabel": "Impulsi del mouse",
    "matchQualityLabel": "Affidabilità del profilo",
    "exactMathLabel": "Valore yaw ufficiale",
    "calibrationLabel": "Verifica fisica consigliata",
    "fastBandLabel": "Zona veloce",
    "balancedBandLabel": "Zona bilanciata",
    "controlBandLabel": "Zona di controllo",
    "extendedBandLabel": "Zona estesa",
    "formulaLabel": "Formula di conversione",
    "formulaText": "sensibilità destinazione = sensibilità origine x DPI origine x yaw origine / (DPI destinazione x yaw destinazione)",
    "verificationTitle": "Verifica su tappetino",
    "verificationText": "Segna un punto di partenza sul tappetino ed esegui un giro a 360 gradi in entrambi i giochi.",
    "baseAimOnlyText": "Esclusivamente per tiro dalla cintola (hipfire).",
    "invalidInputText": "Inserisci valori positivi.",
    "openGameMenuLabel": "Apri menu dei profili di gioco"
},
  seo: [
    {
        "type": "title",
        "text": "Convertire la Sensibilità del Mouse Mantenendo la Distanza Fisica",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "I valori numerici di sensibilità non sono equivalenti tra giochi diversi. Questo convertitore utilizza la costante yaw di ciascun motore per preservare i <strong>cm per 360</strong>, ovvero la distanza fisica necessaria alla tua mano per compiere una rotazione completa."
    },
    {
        "type": "paragraph",
        "html": "La conversione è ottimizzata per la vista orizzontale senza mirino (hipfire). Non mira a preservare la percezione con mirini (ADS) poiché dipende dal campo visivo (FOV) e dallo zoom."
    },
    {
        "type": "title",
        "text": "La Formula di Conversione della Sensibilità",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "<strong>Sensibilità destinazione = sensibilità origine x DPI origine x yaw origine / (DPI destinazione x yaw destinazione).</strong> Il valore yaw rappresenta quanti gradi ruota la telecamera per ogni impulso inviato dal mouse a sensibilità 1."
    },
    {
        "type": "table",
        "headers": [
            "Misurazione",
            "Significato",
            "Migliore utilizzo"
        ],
        "rows": [
            [
                "Sensibilità",
                "Valore nel menu del gioco",
                "Regolare l opzione nel gioco"
            ],
            [
                "eDPI",
                "DPI moltiplicato per la sensibilità",
                "Confrontare i giocatori nello stesso gioco"
            ],
            [
                "cm per 360",
                "Distanza fisica sul tappetino",
                "Mantenere la stessa mira tra giochi"
            ]
        ]
    },
    {
        "type": "title",
        "text": "Profili di Gioco Supportati",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Supporta CS2, Valorant, Apex Legends, Overwatch 2, Fortnite, Quake e motori Source. I profili misurati dalla community sono segnalati per una verifica pratica."
    },
    {
        "type": "tip",
        "title": "Formato Fortnite",
        "html": "Inserisci il valore percentuale visibile nel gioco, ad esempio <strong>7</strong> per 7 per cento."
    },
    {
        "type": "title",
        "text": "Perché il Campo Visivo Non Influisce Sulla Distanza 360",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Una rotazione di 360 gradi sul proprio asse richiede la stessa distanza fisica indipendentemente dal campo visivo (FOV)."
    },
    {
        "type": "title",
        "text": "Come Verificare il Risultato in Gioco",
        "level": 2
    },
    {
        "type": "list",
        "items": [
            "Disattiva l accelerazione del mouse.",
            "Allinea il mouse a un riferimento fisso sul tappetino.",
            "Esegui una rotazione completa di 360 gradi.",
            "Regola leggermente il valore se necessario."
        ]
    },
    {
        "type": "tip",
        "title": "Verifica pratica consigliata",
        "html": "Fai una prova sul tappetino per garantire la massima precisione. Per un confronto affidabile usa lo stesso DPI, la stessa risoluzione e lo stesso rapporto d aspetto durante la verifica. La distanza fisica resta il riferimento più solido, mentre FOV, zoom e impostazioni visive possono cambiare la percezione."
    }
],
  faqTitle: 'Domande frequenti sulla sensibilità del mouse',
  faq: faqItems,
  bibliographyTitle: 'Fonti e riferimenti di calibrazione',
  bibliography,
  howTo: howToItems,
  schemas: [appSchema, faqSchema, howToSchema],
};
