import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'przelicznik-czulosci-myszy-gry';
const title = 'Przelicznik Czułości Myszy Między Grami';
const description = 'Dopasuj fizyczną odległość myszy między grami e-sportowymi. Przelicz czułość z biodra z niezależnym DPI i cm na 360.';

const faqItems = [
  {
    "question": "Co zachowuje ten przelicznik czułości myszy ?",
    "answer": "Zachowuje dokładną odległość fizyczną w centymetrach potrzebną do wykonania obrotu o 360 stopni."
  },
  {
    "question": "Dlaczego eDPI różni się między grami ?",
    "answer": "eDPI zależy od wskaźnika yaw i jest porównywalne tylko w obrębie tej samej gry."
  },
  {
    "question": "Czy pole widzenia (FOV) zmienia przeliczenie ?",
    "answer": "Nie, odległość fizyczna dla 360 stopni pozostaje taka sama."
  },
  {
    "question": "Czy przeliczenie jest dokładne ?",
    "answer": "Obliczenia są dokładne na podstawie stałych yaw."
  },
  {
    "question": "Jak wpisać czułość z Fortnite ?",
    "answer": "Wpisz liczbę procentową, np. 7 dla 7%."
  },
  {
    "question": "Czy moje dane są zapisywane ?",
    "answer": "Nie, wszystkie dane pozostają w Twojej przeglądarce."
  }
];

const howToItems = [
  {
    "name": "Wybierz grę źródłową",
    "text": "Wybierz obecną grę i wpisz DPI oraz czułość."
  },
  {
    "name": "Wybierz grę docelową",
    "text": "Wybierz grę docelową i ustaw DPI."
  },
  {
    "name": "Skopiuj wartość",
    "text": "Skopiuj wynik do ustawień nowej gry."
  },
  {
    "name": "Sprawdź obrót",
    "text": "Wykonaj obrót o 360 stopni na podkładce."
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
};

export const content: MouseSensitivityLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "sourceGameLabel": "Obecna gra",
    "targetGameLabel": "Docelowa gra",
    "sourceDpiLabel": "Obecne DPI",
    "targetDpiLabel": "Docelowe DPI",
    "sensitivityLabel": "Czułość w grze",
    "linkDpiLabel": "Zachowaj to samo DPI",
    "sourceStationLabel": "Obecna konfiguracja",
    "targetStationLabel": "Docelowa konfiguracja",
    "guideSourceText": "Wybierz grę, w którą grasz, wpisz DPI oraz czułość poziomą bez celowania.",
    "guideTargetText": "Wybierz grę docelową. Pozostaw DPI połączone, chyba że je zmieniasz.",
    "guideResultText": "Skopiuj wynik do nowej gry i sprawdź pełny obrót o 360 stopni.",
    "sourceInputHint": "Znajdź te wartości w oprogramowaniu myszy i ustawieniach gry.",
    "targetInputHint": "Wynik docelowy pojawi się poniżej po wpisaniu poprawnych danych.",
    "profileResetText": "Czułość zresetowana do wartości przykładowej. Wpisz swoją wartość.",
    "resultForGameTemplate": "3. Wpisz tę wartość w {game}",
    "yawLabel": "Skala yaw",
    "measuredProfileLabel": "Zmierzony profil",
    "documentedProfileLabel": "Oficjalny profil",
    "targetSensitivityLabel": "Wpisz tę czułość",
    "copyResultLabel": "Kopiuj wynik",
    "copiedLabel": "Skopiowano",
    "swapLabel": "Odwróć przeliczenie",
    "swapButtonLabel": "Zamień",
    "shareLabel": "Kopiuj link",
    "shareCopiedLabel": "Link skopiowany",
    "presetsLabel": "Ustawienia pamięci mięśniowej",
    "presetFastLabel": "Szybki 22 cm",
    "presetBalancedLabel": "Zrównoważony 34 cm",
    "presetControlLabel": "Kontrola 50 cm",
    "cmUnitLabel": "Metryczne",
    "inchUnitLabel": "Calowe",
    "physicalArcLabel": "Pełny obrót 360 stopni",
    "sourceEdpiLabel": "Źródłowe eDPI",
    "targetEdpiLabel": "Docelowe eDPI",
    "countsLabel": "Impulsy myszy",
    "matchQualityLabel": "Dokładność profilu",
    "exactMathLabel": "Oficjalny stały wskaźnik yaw",
    "calibrationLabel": "Zalecane sprawdzanie fizyczne",
    "fastBandLabel": "Szybka strefa",
    "balancedBandLabel": "Zrównoważona strefa",
    "controlBandLabel": "Strefa kontroli",
    "extendedBandLabel": "Rozszerzona strefa",
    "formulaLabel": "Wzór przeliczenia",
    "formulaText": "czułość docelowa = czułość źródłowa x DPI źródłowe x yaw źródłowe / (DPI docelowe x yaw docelowe)",
    "verificationTitle": "Sprawdzenie na podkładce",
    "verificationText": "Zaznacz punkt startowy na podkładce i wykonaj pełny obrót o 360 stopni w obu grach.",
    "baseAimOnlyText": "Wyłącznie dla strzelania z biodra (hipfire).",
    "invalidInputText": "Wpisz wartości dodatnie.",
    "openGameMenuLabel": "Otwórz menu profili gier"
},
  seo: [
    {
        "type": "title",
        "text": "Przeliczanie Czułości Myszy z Zachowaniem Odległości Fizycznej",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Wartości czułości różnią się w zależności od gry. Ten przelicznik wykorzystuje wskaźnik yaw, aby zachować <strong>cm na 360</strong>, czyli dokładną odległość na podkładce."
    },
    {
        "type": "paragraph",
        "html": "Wynik odnosi się do strzelania z biodra (hipfire)."
    },
    {
        "type": "title",
        "text": "Wzór Przeliczania Czułości",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "<strong>Czułość docelowa = czułość źródłowa x DPI źródłowe x yaw źródłowe / (DPI docelowe x yaw docelowe).</strong>"
    },
    {
        "type": "table",
        "headers": [
            "Pomiary",
            "Znaczenie",
            "Najlepsze użycie"
        ],
        "rows": [
            [
                "Czułość",
                "Wartość w menu gry",
                "Zmiana ustawienia w grze"
            ],
            [
                "eDPI",
                "DPI pomnożone przez czułość",
                "Porównywanie graczy w tej samej grze"
            ],
            [
                "cm na 360",
                "Odległość na podkładce",
                "Zachowanie celności między grami"
            ]
        ]
    },
    {
        "type": "title",
        "text": "Obsługiwane Profile Gier",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Obsługuje CS2, Valorant, Apex Legends, Overwatch 2, Fortnite, Quake i silniki Source."
    },
    {
        "type": "tip",
        "title": "Format w Fortnite",
        "html": "Wpisz wartość procentową widoczną w grze, np. <strong>7</strong> dla 7 procent."
    },
    {
        "type": "title",
        "text": "Dlaczego Pole Widzenia Nie Wpływa na 360",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Obrót o 360 stopni wymaga tej samej odległości fizycznej niezależnie od pola widzenia (FOV)."
    },
    {
        "type": "title",
        "text": "Jak Sprawdzić Wynik w Grze",
        "level": 2
    },
    {
        "type": "list",
        "items": [
            "Wyłącz akcelerację myszy.",
            "Ustaw mysz przy znaczniku na podkładce.",
            "Wykonaj pełny obrót o 360 stopni.",
            "Dostosuj wartość w razie potrzeby."
        ]
    },
    {
        "type": "tip",
        "title": "Zalecany test praktyczny",
        "html": "Zrób pomiar na podkładce dla uzyskania idealnej celności."
    }
],
  faqTitle: 'Często zadawane pytania dotyczące czułości myszy',
  faq: faqItems,
  bibliographyTitle: 'Źródła i referencje kalibracji',
  bibliography,
  howTo: howToItems,
  schemas: [appSchema, faqSchema, howToSchema],
};
