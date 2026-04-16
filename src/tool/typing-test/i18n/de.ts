import type { GamesToolLocaleContent as GamesToolLocaleContentType } from '../../../index';

const slug = 'tippgeschwindigkeit-test';
const title = 'Tippgeschwindigkeit Test: Messen Sie Ihre Schreibgeschwindigkeit';
const description = 'Vollständig lokaler Tipptest mit motivierender Gamification. Messen Sie Ihre WPM, Genauigkeit und Erfolge. Verbessern Sie Ihre Tippgeschwindigkeit im Selbstvergleich.';

const faqItems = [
  { question: 'Was ist eine durchschnittliche Tippgeschwindigkeit?', answer: 'Der Durchschnitt liegt bei Erwachsenen bei 40-60 WPM (Wörter pro Minute). Geübte Schreiber erreichen 70-100 WPM. Die schnellsten Tipper schaffen über 200 WPM. Dieser Test zeigt Ihnen, wo Sie stehen.' },
  { question: 'Wie wird WPM berechnet?', answer: 'Die Anzahl der richtigen Zeichen wird durch 5 geteilt (durchschnittliche Wortlänge) und dann durch die verstrichenen Minuten. Dies bestraft Fehler automatisch und ergibt eine faire Netto-Geschwindigkeit.' },
  { question: 'Werden meine Ergebnisse gespeichert?', answer: 'Ja, lokal in Ihrem Browser. Ihre beste WPM wird automatisch gespeichert. Niemand online sieht Ihre Ergebnisse, es sei denn, Sie teilen sie.' },
  { question: 'Ist der Test ohne Internet präzise?', answer: 'Absolut. Dieser Test läuft zu 100 % in Ihrem Browser, ohne Daten an Server zu senden. Das bedeutet Millisekunden-Präzision ohne Netzwerklatenz.' },
  { question: 'Wie lange dauert es, bis ich mich verbessere?', answer: 'Spürbare Verbesserungen sind in 2-3 Wochen bei konsequentem Training möglich. Große Sprünge (z. B. von 50 auf 100 WPM) dauern 3-6 Monate ernsthafter Übung.' },
  { question: 'Kann ich ohne Internet üben?', answer: 'Ja. Dieser Test ist zu 100 % offline verfügbar. Einmal laden, dann ohne Internetverbindung nutzen. Ideal für Reisen oder WLAN-Ausfälle.' },
];

const howToItems = [
  { name: 'Tippen starten', text: 'Fangen Sie einfach an zu tippen. Der Timer startet automatisch beim ersten Tastendruck. Sie haben 60 Sekunden Zeit.' },
  { name: 'Wörter korrekt tippen', text: 'Richtige Wörter werden cyan hervorgehoben. Falsche Buchstaben werden rot. Schließen Sie jedes Wort fehlerfrei ab, damit es zählt.' },
  { name: 'Fortschritt live beobachten', text: 'Ihre WPM, Genauigkeit und Wortanzahl werden während des Tippens in Echtzeit aktualisiert.' },
  { name: 'Ergebnisse erhalten', text: 'Nach Ablauf der Zeit sehen Sie Ihre finale WPM, die Gesamtgenauigkeit und die Option, Ihr Ergebnis zu teilen.' },
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howToItems.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: GamesToolLocaleContentType = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  bibliographyTitle: 'Quellen',
  ui: {
    words: 'Wörter',
    wpm: 'WPM',
    accuracy: 'Genauigkeit',
    timeUp: 'Zeit abgelaufen!',
    playAgain: 'Noch einmal spielen',
    share: 'Teilen',
    copied: 'Kopiert!',
  },
  wordPool: [
    'haus', 'hund', 'katze', 'sonne', 'mond', 'liebe', 'lachen', 'spiel', 'zeit', 'leben',
    'tod', 'nacht', 'tag', 'freund', 'familie', 'essen', 'trinken', 'schlafen', 'traum', 'laufen',
    'tanzen', 'singen', 'springen', 'fliegen', 'schwimmen', 'gehen', 'buch', 'wort', 'buchstabe', 'zahl',
    'farbe', 'baum', 'blume', 'wasser', 'feuer', 'luft', 'erde', 'meer', 'berg', 'fluss',
    'himmel', 'stern', 'wolke', 'wind', 'regen', 'schnee', 'eis', 'hitze', 'kälte', 'licht',
    'abenteuer', 'geheimnis', 'weltraum', 'universum', 'planet', 'komet', 'sternbild', 'galaxie',
    'computer', 'bildschirm', 'system', 'verbindung', 'internet', 'browser', 'instrument', 'melodie',
    'harmonie', 'rhythmus', 'tanz', 'theater', 'film', 'schauspieler', 'regisseur', 'szene', 'charakter', 'geschichte',
    'bibliothek', 'roman', 'gedicht', 'autor', 'schriftsteller', 'seite', 'kapitel', 'handlung', 'erzählung', 'ende',
    'herz', 'gehirn', 'geist', 'gedanke', 'idee', 'konzept', 'theorie', 'philosophie', 'weisheit', 'wissen',
    'problem', 'lösung', 'antwort', 'frage', 'zweifel', 'gewissheit', 'wahrheit', 'lüge', 'täuschung', 'trick',
    'königin', 'könig', 'prinz', 'prinzessin', 'ritter', 'drache', 'schloss', 'königreich', 'imperium', 'thron',
    'boot', 'segel', 'anker', 'hafen', 'strand', 'sand', 'insel', 'ozean', 'welle', 'strömung',
    'vulkan', 'erdbeben', 'sturm', 'hurrikan', 'tornado', 'lawine', 'eruptio', 'dürre', 'flut', 'hagel',
    'medizin', 'arzt', 'krankenhaus', 'krankheit', 'heilung', 'heilmittel', 'pille', 'injektion', 'chirurgie', 'patient',
    'musik', 'lied', 'oper', 'symphonie', 'komponist', 'musiker', 'violine', 'klavier', 'gitarre', 'trommel',
    'essen', 'nachtisch', 'getränk', 'küche', 'chef', 'rezept', 'geschmack', 'aroma', 'textur', 'hunger',
    'reise', 'tourismus', 'ziel', 'koffer', 'reisepass', 'flugzeug', 'zug', 'auto', 'fahrrad', 'motorrad',
    'sport', 'fußball', 'basketball', 'tennis', 'schwimmen', 'boxen', 'ringen', 'rennen', 'sprung', 'wurf',
    'geld', 'münze', 'geldschein', 'bank', 'kredit', 'schulden', 'zahlung', 'preis', 'verkauf', 'kauf',
    'arbeit', 'handwerk', 'beruf', 'karriere', 'beschäftigung', 'chef', 'angestellter', 'gehalt', 'vertrag', 'kündigung',
    'schule', 'college', 'universität', 'lehrer', 'student', 'lektion', 'prüfung', 'note', 'diplom', 'bildung',
    'kirche', 'tempel', 'religion', 'glaube', 'gebet', 'heiliger', 'engel', 'dämon', 'hölle', 'himmel',
    'technologie', 'intelligenz', 'algorithmus', 'programm', 'code', 'fehler', 'bug', 'server', 'client', 'datenbank',
    'natur', 'ökosystem', 'biodiversität', 'aussterben', 'evolution', 'anpassung', 'raubtier', 'beute', 'pflanzenfresser', 'fleischfresser',
    'psychologie', 'psychiatrie', 'neurologie', 'kognition', 'emotion', 'gefühl', 'gedächtnis', 'aufmerksamkeit', 'wahrnehmung', 'bewusstsein',
    'architektur', 'skulptur', 'malerei', 'zeichnung', 'kunst', 'galerie', 'museum', 'ausstellung', 'kunstwerk', 'leinwand',
    'chemie', 'physik', 'mathematik', 'biologie', 'geologie', 'astronomie', 'meteorologie', 'ozeanographie', 'botanik', 'zoologie',
    'republik', 'demokratie', 'monarchie', 'diktatur', 'regierung', 'politik', 'wahl', 'stimme', 'kongress', 'parlament',
    'gesetz', 'recht', 'justiz', 'anwalt', 'richter', 'gericht', 'urteil', 'schuld', 'unschuld', 'strafe',
    'freiheit', 'sklaverei', 'unterdrückung', 'revolution', 'krieg', 'frieden', 'waffenstillstand', 'allianz', 'feind', 'konflikt',
    'sprache', 'grammatik', 'syntax', 'semantik', 'vokabular', 'aussprache', 'akzent', 'dialekt', 'idiom', 'übersetzung',
    'alphabet', 'großbuchstaben', 'kleinbuchstaben', 'satzzeichen', 'pause', 'betonung', 'rhythmus', 'intonation', 'kadenz', 'musikalität'
  ],
  seo: [
    {
      type: 'title',
      text: 'Kostenloser Schreibgeschwindigkeitstest: Messen Sie Ihre WPM in Echtzeit',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein <strong>Schreibgeschwindigkeitstest</strong> ist das präziseste Werkzeug, um zu bewerten, wie viele Wörter pro Minute (WPM) Sie fehlerfrei tippen können. Ob Sie Programmierer, Autor oder Student sind oder einfach viel Zeit am Keyboard verbringen – die eigene Geschwindigkeit zu kennen, ist der erste Schritt zur Produktivitätssteigerung. Dieser Test misst nicht nur das Tempo, sondern die <em>Nettogenauigkeit</em>: Es zählt die Geschwindigkeit abzüglich der Fehler.',
    },
    {
      type: 'paragraph',
      html: 'Im Gegensatz zu herkömmlichen Tipp-Simulatoren zieht dieser Test Fehler automatisch von Ihrer finalen WPM ab. Wer 100 WPM tippt, aber 30 Fehler macht, ist nicht schneller als jemand mit 70 WPM ohne Fehler. Wir messen Ihre <strong>wahre Nettogeschwindigkeit</strong>, keine künstlich aufgeblähten Zahlen.',
    },
    {
      type: 'title',
      text: 'Durchschnittliche Tippgeschwindigkeit: Benchmark 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die durchschnittliche Schreibgeschwindigkeit von Erwachsenen ohne spezielles Training liegt bei etwa <strong>40-60 WPM</strong>. Je nach Beruf variiert dieser Wert jedoch erheblich:',
    },
    {
      type: 'list',
      items: [
        '<strong>Gelegenheitsnutzer:</strong> 30-45 WPM (E-Mails, soziale Medien)',
        '<strong>Sekretariat/Verwaltung:</strong> 60-80 WPM (professioneller Standard)',
        '<strong>Zertifizierte Schreibkräfte:</strong> 90-120 WPM (formelles Zehnfinger-System)',
        '<strong>Professionelle Autoren:</strong> 120-160 WPM (Journalisten, Texter)',
        '<strong>Weltmeister:</strong> 200+ WPM (Guinness-Weltrekord: 216 WPM)',
      ],
    },
    {
      type: 'paragraph',
      html: 'Die meisten Nutzer stellen fest, dass sie unter dem professionellen Durchschnitt liegen. Wer 50 WPM mit 95 % Genauigkeit tippt, sollte eher an der Technik als an der reinen Geschwindigkeit arbeiten. Dieser Test zeigt Ihnen genau, wo Sie im Vergleich stehen.',
    },
    {
      type: 'list',
      items: [
        '<strong>Anfänger (20-40 WPM):</strong> Blick noch oft auf die Tastatur, langsames, bewusstes Tippen',
        '<strong>Fortgeschritten (40-70 WPM):</strong> Flüssiges Schreiben, gelegentliche Fehler',
        '<strong>Profi (70-120 WPM):</strong> Natürliches Tippen, sehr wenige Fehler',
        '<strong>Experte (120+ WPM):</strong> Wettbewerbsniveau, nahezu perfekte Genauigkeit',
      ],
    },
    {
      type: 'title',
      text: 'Warum eine höhere Tippgeschwindigkeit 2026 wichtig ist',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Im Jahr 2026 ist schnelles und präzises Tippen keine reine „Sekretariatsaufgabe“ mehr. Es ist eine <strong>Schlüsselqualifikation</strong> in fast jedem wissensbasierten Beruf:',
    },
    {
      type: 'list',
      items: [
        '<strong>Programmierer:</strong> Code wird geschrieben, nicht nur gedacht. 100+ WPM machen oft den Unterschied zwischen 6 und 3 Stunden Arbeit aus.',
        '<strong>Juristen:</strong> Rechtliche Dokumente erfordern schnelles, fehlerfreies Tippen. Ein Tippfehler in einem Vertrag kann fatal sein.',
        '<strong>Journalisten:</strong> Die Publikationsgeschwindigkeit entscheidet über die Reichweite. 120 WPM verdoppeln im Vergleich zu 60 WPM den täglichen Output.',
        '<strong>Studenten:</strong> Zeitdruck bei Prüfungen und Hausarbeiten verlangt nach schnellem Tippen beim Denken. Langsames Tippen mindert die Qualität.',
        '<strong>Freelancer:</strong> Zeit ist Geld. Eine Steigerung von 50 auf 100 WPM kann den Umsatz bei gleichem Aufwand um 30-40 % erhöhen.',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Der ROI ist real:</strong> Wer 50 WPM tippt und 15 Minuten für ein 200-Wörter-Dokument braucht, verliert täglich 2 Stunden (bei 8 Dokumenten). Mit 100 WPM dauert dies nur 7 Minuten. Pro Jahr: <strong>260 gesparte Stunden</strong>. Bei einem Stundensatz von 30 € sind das 7.800 € Produktivitätsgewinn jährlich.',
    },
    {
      type: 'title',
      text: 'Schritt-für-Schritt-Anleitung zum Tipptest',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Online-Tipptests folgen denselben Prinzipien wie zertifizierte Prüfungen: Messung der korrekten Wörter pro Minute (Netto-WPM) innerhalb eines Zeitlimits. Einfach, aber präzise:',
    },
    {
      type: 'list',
      items: [
        '<strong>Dauer wählen:</strong> 30 Sekunden, 60 Sekunden oder 2 Minuten. 60 ist der Standard.',
        '<strong>Schwierigkeit wählen:</strong> Häufige Wörter, Standard-Mix oder schwierige Begriffe.',
        '<strong>Tippen starten:</strong> Der Timer beginnt mit dem ersten Tastendruck.',
        '<strong>Live-Vorschau:</strong> WPM, Genauigkeit und Fehler aktualisieren sich sofort.',
        '<strong>Ergebnis sehen:</strong> Am Ende erhalten Sie Ihre WPM, die Genauigkeit und Ihren persönlichen Rekord.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Keine Tricks, kein Account nötig, keine Werbung. Einfach Ihre echte Geschwindigkeit, präzise gemessen.',
    },
    {
      type: 'title',
      text: 'Unsere Messwerte',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Wörter pro Minute (WPM):</strong> Der Standardmesswert. Berechnet aus korrekten Zeichen geteilt durch 5, geteilt durch die Zeit. Belohnt nicht blindes Tempo bei hoher Fehlerquote.',
    },
    {
      type: 'paragraph',
      html: '<strong>Genauigkeit (%):</strong> Anteil der richtig getippten Zeichen. 100 % ist perfekt. 90 % bedeutet ein Fehler auf zehn Zeichen. Genauigkeit ist genauso wichtig wie Tempo.',
    },
    {
      type: 'paragraph',
      html: '<strong>Fehler:</strong> Gesamtzahl falscher Zeichen. Anschaulicher als Prozentwerte. Dieser Test markiert sie während des Tippens rot.',
    },
    {
      type: 'paragraph',
      html: '<strong>Richtige / Gesamte Zeichen:</strong> Zeigt, wie viel Text Sie im Limit geschafft haben.',
    },
    {
      type: 'title',
      text: 'Faktoren für Ihre Schreibgeschwindigkeit',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Geschwindigkeit ist nicht konstant. Kognitive Forschung zeigt, dass folgende Faktoren die Leistung beeinflussen:',
    },
    {
      type: 'list',
      items: [
        '<strong>Vokabular-Vertrautheit:</strong> Bei Fachbegriffen aus dem eigenen Bereich ist man bis zu 30 % schneller.',
        '<strong>Tastaturlayout:</strong> QWERTZ-Nutzer haben oft etwas geringere WPM als DVORAK-Nutzer, dafür ist das Layout standardisiert.',
        '<strong>Wortlänge:</strong> Lange Wörter bremsen um 15-20 % (z. B. „Donaudampfschifffahrtsgesellschaft“ vs. „Haus“).',
        '<strong>Ermüdung:</strong> Nach 10 Minuten Dauertipper sinkt die Genauigkeit spürbar.',
        '<strong>Zeitdruck:</strong> Ein 1-Minuten-Test erzeugt mehr Stress (und Tippfehler) als ein 5-Minuten-Durchlauf.',
      ],
    },
    {
      type: 'tip',
      html: 'Elite-Tipper (120+ WPM) werden nicht durch schnelles Tippen so gut, sondern durch die richtige <strong>Grundposition</strong>: Linke Finger auf ASDF, rechte auf JKL;, ohne auf die Tastatur zu schauen. Das ist der einzige Weg für dauerhafte 100+ WPM. Wer falsch lernt, stagniert oft bei 60-70 WPM. Lernen Sie es richtig, auch wenn es am Anfang langsamer ist.',
    },
    {
      type: 'title',
      text: 'Trainingsplan: In 3 Monaten von 50 auf 100+ WPM',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Fortschritte folgen einer Lernkurve. Forscher haben herausgefunden, dass man ca. 10 Stunden gezieltes Training für ein Plus von 10 WPM benötigt. Die Strategie:',
    },
    {
      type: 'list',
      items: [
        '<strong>Woche 1-2 (Form vor Speed):</strong> 10 Min. täglich NUR auf die Fingerstellung achten. Geschwindigkeit ignorieren. Die Form macht 90 % des Erfolgs aus.',
        '<strong>Woche 3-4 (Blind schreiben):</strong> 15 Min. täglich. Tippen, ohne auf die Tasten zu sehen. Das Tempo sinkt erst mal – das ist normal bei neuen neuronalen Mustern.',
        '<strong>Woche 5-8 (Konstanz):</strong> 20 Min. täglich. Mix aus Naturalschreiben (E-Mails) und Tests. Erwartete Steigerung: 5-8 WPM pro Woche.',
        '<strong>Woche 9-12 (Spezialisierung):</strong> Fokus auf Problemwörter. Programmierer üben Symbole, Autoren Satzzeichen. 15-20 Min. täglich reichen aus.',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Realistische Ziele:</strong> 50 auf 80 WPM in 4-6 Wochen. 80 auf 120 WPM in 8-12 Wochen. Über 120 WPM erfordert fast professionelle Hingabe (1-2 Stunden Training täglich).',
    },
    {
      type: 'title',
      text: 'WPM-Vergleich: Mit anderen oder mit mir selbst?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sportpsychologie zeigt: <strong>Soziale Vergleiche können demotivieren</strong>. Wer sich nur mit Champions misst, gibt schneller auf. Top-Athleten messen sich an ihren eigenen Rekorden.',
    },
    {
      type: 'paragraph',
      html: 'Dieser Test speichert Ihren Bestwert automatisch. Das ist Ihr Maßstab. Schlagen Sie Ihren eigenen Rekord. Das steigert die Motivation laut Studien um bis zu 40 % mehr als direkter Wettbewerb.',
    },
    {
      type: 'paragraph',
      html: 'Möchten Sie trotzdem teilen? Der Teilen-Button kopiert Ihr Ergebnis für Messenger oder soziale Medien. Aber denken Sie daran: Jemand mit 120 WPM hat vielleicht Monate trainiert. Vergleichen Sie Ihre Woche 2 mit Ihrer eigenen Zukunft, nicht mit deren Woche 26.',
    },
    {
      type: 'title',
      text: 'Wie präzise ist dieser Test?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Genauigkeit hängt von <strong>Ort und Zeitpunkt der Messung</strong> ab. Dieser Test läuft lokal in Ihrem Browser:',
    },
    {
      type: 'list',
      items: [
        '<strong>Keine Netzwerklatenz:</strong> Keine Verzögerung durch Serververbindungen (0 ms Latenz).',
        '<strong>Millisekunden-Präzision:</strong> Der Browser misst die Tastendrücke exakt im Moment des Geschehens.',
        '<strong>Zertifizierter Standard:</strong> Nutzung der offiziellen WPM-Formel.',
        '<strong>Keine Manipulation:</strong> Nur echte Tastatureingaben werden gewertet, kein Copy-Paste.',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Vergleichbarkeit:</strong> Die Ergebnisse sind vergleichbar mit TypeRacer, Monkeytype oder Keybr.com.',
    },
    {
      type: 'title',
      text: 'Für wen dieser Test geeignet ist',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Programmierer:</strong> Schnelleres Tippen bedeutet mehr Zeit fürs Lösen von Problemen.',
        '<strong>Texter & Journalisten:</strong> Höheres Tempo steigert direkt den Output und das Einkommen.',
        '<strong>Juristen & Verwaltung:</strong> Fehlerfreie Dokumente in Rekordzeit sind ein massiver Wettbewerbsvorteil.',
        '<strong>Studenten:</strong> Weniger Stress in zeitbegrenzten Prüfungen durch flüssiges Tippen.',
      ],
    },
    {
      type: 'title',
      text: 'Realistischer Zeitplan zur Verbesserung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Regelmäßiges Training (15-20 Min. täglich) führt meist zu dieser Kurve:',
    },
    {
      type: 'list',
      items: [
        '<strong>Woche 1:</strong> Mentale Umstellung, kaum messbare Steigerung.',
        '<strong>Woche 2-3:</strong> Erste Fortschritte (+5 WPM).',
        '<strong>Woche 4-8:</strong> Schneller Zuwachs (+3-5 WPM/Woche).',
        '<strong>Monat 3+:</strong> Kontinuierliche Festigung der Geschwindigkeit.',
      ],
    },
    {
      type: 'paragraph',
      html: '<em>Der Schlüssel ist REGLMÄSSIGKEIT, nicht Intensität. 10 Minuten täglich sind besser als 2 Stunden alle zwei Wochen.</em>',
    },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography: [
    {
      name: 'Wikipedia - Wörter pro Minute',
      url: 'https://de.wikipedia.org/wiki/W%C3%B6rter_pro_Minute',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
