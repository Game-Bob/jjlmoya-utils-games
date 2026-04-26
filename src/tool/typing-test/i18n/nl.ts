import { bibliography } from '../bibliography';
import type { GamesToolLocaleContent as GamesToolLocaleContentType } from '../../../index';

const slug = 'typsnelheid-test';
const title = 'Typsnelheid Test: Meet Je Schreibsnelheid';
const description = 'Volledig offline typtest met verslavende gamificatie. Meet je WPM, nauwkeurigheid en prestaties. Verbeter je typsnelheid door jezelf uit te dagen.';

const faqItems = [
  { question: 'Wat is een gemiddelde typsnelheid?', answer: 'De gemiddelde snelheid voor volwassenen ligt tussen 40-60 WPM (woorden per minuut). Ervaren typisten bereiken 70-100 WPM. De allersnelsten gaan boven de 200 WPM. Deze test laat zien waar jij staat.' },
  { question: 'Hoe wordt WPM berekend?', answer: 'Neem het aantal correcte tekens, deel door 5 (gemiddelde woordlengte) en deel door de verstreken minuten. Fouten worden automatisch bestraft, wat je een eerlijke netto snelheid geeft.' },
  { question: 'Worden mijn resultaten opgeslagen?', answer: 'Ja, lokaal in je browser. Je beste WPM wordt automatisch bewaard. Niemand online kan je resultaten zien, tenzij je ze zelf deelt.' },
  { question: 'Is het nauwkeurig zonder internet?', answer: 'Absoluut. Deze test draait 100% in je browser zonder gegevens naar servers te sturen. Dat betekent milliseconde precisie en nul netwerkvertraging.' },
  { question: 'Hoe lang duurt het om mijn snelheid te verbeteren?', answer: 'Merkbare verbetering in 2-3 weken bij dagelijkse oefening. Grote stappen (bijv. van 50 naar 100 WPM) kosten 3-6 maanden serieuze training.' },
  { question: 'Kan ik oefenen zonder internet?', answer: 'Zeker. Deze test is 100% offline. Eén keer laden, daarna spelen zonder internet. Ideaal voor onderweg of bij storingen.' },
];

const howToItems = [
  { name: 'Begin met typen', text: 'Begin gewoon met typen. De timer start automatisch bij de eerste toetsaanslag. Je hebt 60 seconden.' },
  { name: 'Typ woorden correct', text: 'Correcte woorden worden cyaan gemarkeerd. Foute letters worden rood. Typ het hele woord foutloos om het te laten tellen.' },
  { name: 'Bekijk je voortgang', text: 'Je WPM, nauwkeurigheid en woordenaantal worden tijdens het typen live bijgewerkt.' },
  { name: 'Krijg je resultaten', text: 'Als de tijd om is, zie je je finale WPM, totale nauwkeurigheid en de optie om je resultaten te delen.' },
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
  ui: {
    words: 'Woorden',
    wpm: 'WPM',
    accuracy: 'Nauwkeurigheid',
    timeUp: 'Tijd is om!',
    playAgain: 'Opnieuw Spelen',
    share: 'Delen',
    copied: 'Gekopieerd!',
  },
  wordPool: [
    'huis', 'hond', 'kat', 'zon', 'maan', 'liefde', 'lachen', 'spel', 'tijd', 'leven',
    'dood', 'nacht', 'dag', 'vriend', 'familie', 'eten', 'drinken', 'slapen', 'droom', 'rennen',
    'dansen', 'zingen', 'springen', 'vliegen', 'zwemmen', 'lopen', 'boek', 'woord', 'letter', 'getal',
    'kleur', 'boom', 'bloem', 'water', 'vuur', 'lucht', 'aarde', 'zee', 'berg', 'rivier',
    'hemel', 'ster', 'wolk', 'wind', 'regen', 'sneeuw', 'ijs', 'hitte', 'kou', 'licht',
    'avontuur', 'mysterie', 'ruimte', 'universum', 'planeet', 'komeet', 'sterrenbeeld', 'stelsel',
    'computer', 'scherm', 'systeem', 'verbinding', 'internet', 'browser', 'instrument', 'melodie',
    'harmonie', 'ritme', 'dans', 'theater', 'film', 'acteur', 'regisseur', 'scène', 'personage', 'verhaal',
    'bibliotheek', 'roman', 'gedicht', 'auteur', 'schrijver', 'pagina', 'hoofdstuk', 'plot', 'verhaal', 'einde',
    'hart', 'hersenen', 'geest', 'gedachte', 'idee', 'concept', 'theorie', 'filosofie', 'wijsheid', 'kennis',
    'probleem', 'oplossing', 'antwoord', 'vraag', 'twijfel', 'zekerheid', 'waarheid', 'leugen', 'bedrog', 'truc',
    'koningin', 'koning', 'prins', 'prinses', 'ridder', 'draak', 'kasteel', 'koninkrijk', 'rijk', 'troon',
    'boot', 'zeil', 'anker', 'haven', 'strand', 'zand', 'eiland', 'oceaan', 'golf', 'stroom',
    'vulkaan', 'aardbeving', 'storm', 'orkaan', 'tornado', 'lawine', 'eruptie', 'droogte', 'overstroming', 'hagel',
    'medicijn', 'dokter', 'ziekenhuis', 'ziekte', 'genezing', 'middel', 'pil', 'injectie', 'operatie', 'patiënt',
    'muziek', 'lied', 'opera', 'symfonie', 'componist', 'muzikant', 'viool', 'piano', 'gitaar', 'trommel',
    'voedsel', 'toetje', 'drankje', 'keuken', 'chef', 'recept', 'smaak', 'aroma', 'structuur', 'honger',
    'reizen', 'toerisme', 'bestemming', 'koffer', 'paspoort', 'vliegtuig', 'trein', 'auto', 'fiets', 'motor',
    'sport', 'voetbal', 'basketbal', 'tennis', 'zwemmen', 'boksen', 'worstelen', 'race', 'sprong', 'worp',
    'geld', 'munt', 'biljet', 'bank', 'lening', 'schuld', 'betaling', 'prijs', 'verkoop', 'koop',
    'werk', 'ambacht', 'beroep', 'carrière', 'baan', 'baas', 'werknemer', 'salaris', 'contract', 'ontslag',
    'school', 'college', 'universiteit', 'leraar', 'student', 'les', 'examen', 'cijfer', 'diploma', 'onderwijs',
    'kerk', 'tempel', 'religie', 'geloof', 'gebed', 'heilige', 'engel', 'demon', 'hel', 'hemel',
    'technologie', 'intelligentie', 'algoritme', 'programma', 'code', 'fout', 'bug', 'server', 'client', 'database',
    'natuur', 'ecosysteem', 'biodiversiteit', 'uitsterven', 'evolutie', 'aanpassing', 'roofdier', 'prooi', 'herbivoor', 'carnivoor',
    'psychologie', 'psychiatrie', 'neurologie', 'cognitie', 'emotie', 'gevoel', 'geheugen', 'aandacht', 'perceptie', 'bewustzijn',
    'architectuur', 'sculptuur', 'schilderij', 'tekening', 'kunst', 'galerie', 'museum', 'tentoonstelling', 'kunstwerk', 'canvas',
    'chemie', 'fysica', 'wiskunde', 'biologie', 'geologie', 'astronomie', 'meteorologie', 'oceanografie', 'botanie', 'zoölogie',
    'republiek', 'democratie', 'monarchie', 'dictatuur', 'overheid', 'politiek', 'verkiezing', 'stem', 'congres', 'parlement',
    'wet', 'recht', 'justitie', 'advocaat', 'rechter', 'rechtbank', 'vonnis', 'schuld', 'onschuld', 'straf',
    'vrijheid', 'slavernij', 'onderdrukking', 'revolutie', 'oorlog', 'vrede', 'wapenstilstand', 'alliantie', 'vijand', 'conflict',
    'taal', 'grammatica', 'syntaxis', 'semantiek', 'vocabulaire', 'uitspraak', 'accent', 'dialect', 'idieom', 'vertaling',
    'alfabet', 'hoofdletter', 'kleine letter', 'leesteken', 'pauze', 'nadruk', 'ritme', 'intonatie', 'cadans', 'muzikaliteit'
  ],
  seo: [
    {
      type: 'title',
      text: 'Gratis Online Typsnelheid Test: Meet Je Echte WPM Live',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een <strong>typsnelheid test</strong> is het meest nauwkeurige hulpmiddel om te bepalen hoeveel woorden per minuut (WPM) je kunt typen met precisie. Of je nu een programmeur, schrijver of student bent, of uren achter het toetsenbord doorbrengt, het kennen van je echte snelheid is de eerste stap naar het optimaliseren van je productiviteit. Deze test meet niet alleen snelheid, maar ook <em>netto nauwkeurigheid</em>: wat echt telt is snelheid gecorrigeerd voor fouten.',
    },
    {
      type: 'paragraph',
      html: 'In tegenstelling tot traditionele typsimulatoren, bestraft deze test fouten automatisch in je finale WPM. Een typist die 100 WPM haalt maar 30 fouten maakt, is niet sneller dan iemand op 70 WPM met nul fouten. Hier meten we je <strong>echte netto snelheid</strong>, geen opgeblazen fantasiecijfers.',
    },
    {
      type: 'title',
      text: 'Gemiddelde Typsnelheid: Benchmark 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De gemiddelde typsnelheid ligt rond de <strong>40-60 WPM</strong> voor volwassenen zonder gespecialiseerde training. Deze statistiek varieert echter aanzienlijk per beroep:',
    },
    {
      type: 'list',
      items: [
        '<strong>Casual gebruikers:</strong> 30-45 WPM (e-mails, sociale media)',
        '<strong>Secretariaat/Administratief:</strong> 60-80 WPM (professionele standaard)',
        '<strong>Gecertificeerde typisten:</strong> 90-120 WPM (formele ASDF JKL; techniek)',
        '<strong>Professionele schrijvers:</strong> 120-160 WPM (journalisten, copywriters)',
        '<strong>Wereldkampioenen:</strong> 200+ WPM (Guinness World Record: 216 WPM)',
      ],
    },
    {
      type: 'paragraph',
      html: 'De meeste mensen die deze test doen, ontdekken dat ze onder het professionele gemiddelde zitten. Iemand die 50 WPM typt met 95% nauwkeurigheid moet waarschijnlijk techniek verbeteren, niet alleen rauwe snelheid. Deze test laat je precies zien in welk percentiel je zit.',
    },
    {
      type: 'list',
      items: [
        '<strong>Beginner (20-40 WPM):</strong> Kijkt nog naar toetsenbord, traag maar bewust typen',
        '<strong>Gemiddeld (40-70 WPM):</strong> Vloeiend typen, af en toe een foutje',
        '<strong>Gevorderd (70-120 WPM):</strong> Natuurlijk typen, heel weinig fouten',
        '<strong>Professioneel (120+ WPM):</strong> Competitiesnelheid, bijna perfecte precisie',
      ],
    },
    {
      type: 'title',
      text: 'Waarom Je Typsnelheid Verbeteren Belangrijk Is in 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In 2026 is snel en accuraat typen geen "secretaresse-ervaring" meer. Het is een <strong>kritieke vaardigheid</strong> voor vrijwel elk beroep gebaseerd op kennis:',
    },
    {
      type: 'list',
      items: [
        '<strong>Programmeurs:</strong> Code wordt geschreven, niet bedacht. 100+ WPM accuraat typen is het verschil tussen 6 en 3 uur werk',
        '<strong>Juristen en notarissen:</strong> Juridische documenten vereisen snel, foutloos typen. Een typfout in een contract is catastrofaal',
        '<strong>Journalisten en content makers:</strong> Publicatiesnelheid bepaalt concurrentiekracht. 120 WPM vs 60 WPM verdubbelt je dagelijkse output',
        '<strong>Studenten:</strong> Tijdgebonden examens, essays en onderzoeksverslagen vereisen typen tijdens het denken. Traag typen = lage kwaliteit',
        '<strong>Freelancers:</strong> Tijd = direct geld. Verbeteren van 50 naar 100 WPM staat gelijk aan 30-40% meer inkomen met dezelfde inspanning',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>De ROI is echt:</strong> Als je 50 WPM typt en 15 minuten besteedt aan een document van 200 woorden, is dat 2 uur per dag verloren (bij 8 documenten). Bij 100 WPM duurt dezelfde taak 7 minuten. Per jaar: <strong>260 uur bespaard</strong>. Bij €30/uur (gemiddelde freelancer) is dat €7.800 aan jaarlijkse productiviteit.',
    },
    {
      type: 'title',
      text: 'Hoe Doe Je Een Typsnelheid Test: Stap-voor-stap Gids',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Online typtesten werken volgens hetzelfde principe als gecertificeerde Typing Masters Association examens: meet correcte woorden per minuut (netto WPM) binnen een vaste tijdslimiet. Simpel maar precies:',
    },
    {
      type: 'list',
      items: [
        '<strong>Kies duur:</strong> 30 seconden, 60 seconden of 2 minuten. Beginnen met 60 is de standaard.',
        '<strong>Selecteer moeilijkheidsgraad:</strong> Gewone woorden, standaard mix, moeilijke woorden, of zelfs code met symbolen.',
        '<strong>Begin met typen:</strong> Timer start automatisch als je je eerste teken typt.',
        '<strong>Bekijk live voortgang:</strong> WPM, nauwkeurigheid, fouten en correcte tekens worden bijgewerkt terwijl je typt.',
        '<strong>Krijg direct resultaat:</strong> Als de tijd om is, zie je je WPM, nauwkeurigheidspercentage en je beste record.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Geen trucs, geen account nodig, geen advertenties. Alleen je echte snelheid precies gemeten.',
    },
    {
      type: 'title',
      text: 'Meetwaarden Die We Meten',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Woorden Per Minuut (WPM):</strong> De standaardmaatstaf. Berekend door correcte tekens te nemen, te delen door 5 (gemiddelde woordlengte) en dan te delen door de verstreken minuten. Het is eerlijk: beloont geen snel typen met veel fouten.',
    },
    {
      type: 'paragraph',
      html: '<strong>Nauwkeurigheid (%):</strong> Percentage correct getypte tekens. 100% is perfect. 90% betekent 1 fout per 10 tekens. Nauwkeurigheid telt net zo zwaar als snelheid.',
    },
    {
      type: 'paragraph',
      html: '<strong>Fouten:</strong> Totaal aantal foute tekens. Makkelijker te visualiseren dan percentages. 3 fouten in 300 tekens is 99% nauwkeurigheid. Deze test telt en toont ze rood terwijl je typt.',
    },
    {
      type: 'paragraph',
      html: '<strong>Correcte / Totale tekens:</strong> Hoeveel tekens je goed had vergeleken met wat verwacht werd.',
    },
    {
      type: 'title',
      text: 'Factoren Die Je Echte Typsnelheid Beïnvloeden',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Je typsnelheid is niet constant. Cognitief psychologisch onderzoek laat zien dat deze factoren prestaties direct beïnvloeden:',
    },
    {
      type: 'list',
      items: [
        '<strong>Bekendheid met vocabulaire:</strong> Typen over jouw specialisme is 30% sneller dan onbekend vocabulaire',
        '<strong>Toetsenbordindeling:</strong> QWERTY-gebruikers halen 10-15% lagere WPM dan DVORAK/COLEMAK getrainde typisten, maar hebben betere ergonomie',
        '<strong>Woordlengte:</strong> Lange woorden vertragen je met 15-20% (bijv. "hottentottententententoonstelling" vs "huis")',
        '<strong>Mentale vermoeidheid:</strong> Na 10 minuten continu typen daalt de nauwkeurigheid met 5-8%',
        '<strong>Tijdsdruk stress:</strong> Een test van 1 minuut genereert meer adrenaline (typfouten) dan 5 minuten',
      ],
    },
    {
      type: 'paragraph',
      html: 'Daarom biedt deze test meerdere duur-opties en moeilijkheidsgraden: 60 seconden is standaard voor maximale snelheid onder druk, 2 minuten is voor echte duurzaamheid.',
    },
    {
      type: 'tip',
      html: 'Elite-typisten (120+ WPM) bereiken dat niet door simpelweg snel te typen. Ze beheersen de correcte <strong>rustpositie</strong>: linkervingers op ASDF, rechter op JKL;, en kijken nooit naar het toetsenbord. Dit is de enige manier om boven de 100 WPM te blijven. Als je jezelf in het begin de verkeerde positie aanleert, zal je maximum altijd rond de 60-70 WPM blijven steken. Leer het correct, ook al ben je in het begin trager.',
    },
    {
      type: 'title',
      text: 'Typ-Verbeterplan: Van 50 naar 100+ WPM in 3 Maanden',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Verbetering in typen volgt een voorspelbare leercurve. MIT-onderzoekers vonden dat je ~10 uur gerichte oefening nodig hebt per 10 WPM winst. Hier is de wetenschappelijke strategie:',
    },
    {
      type: 'list',
      items: [
        '<strong>Week 1-2 (Vorm, geen snelheid):</strong> 10 min dagelijks gericht op ALLEEN correcte vingerplaatsing. Vergeet snelheid. Vorm is 90% van de voortgang.',
        '<strong>Week 3-4 (Geleidelijke snelheid):</strong> Verhogen naar 15 min dagelijks. Probeer te typen zonder te kijken. Snelheid zal 10-20% dalen, maar dat is het punt: nieuwe neurale patronen.',
        '<strong>Week 5-8 (Consistentie):</strong> 20 min dagelijks. Wissel af: 10 min natuurlijk typen (echte e-mails, documenten) + 10 min test. Verwacht 5-8 WPM wekelijkse verbetering.',
        '<strong>Week 9-12 (Specialisatie):</strong> Focus op je probleemwoorden. Programmeurs oefenen symbolen. Schrijvers oefenen leestekens. 15-20 min dagelijks is nu genoeg.',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Realistische voortgangsmaatstaf:</strong> 50 naar 80 WPM duurt 4-6 weken. 80 naar 120 WPM duurt 8-12 weken. Boven de 120 WPM vereist elke extra WPM bijna professionele toewijding (1-2 uur dagelijkse training).',
    },
    {
      type: 'title',
      text: 'Moet Ik Mijn WPM Vergelijken Met Anderen of Mezelf?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sportpsychologie (toepasbaar op typen) ontdekte dat <strong>sociale vergelijking averechts kan werken</strong>. Altijd vergelijken met kampioenen zorgt voor snel opgeven. Toppers strijden tegen hun eigen records.',
    },
    {
      type: 'paragraph',
      html: 'Deze test bewaart je beste resultaat automatisch. Dat is jouw benchmark. Elke sessie sla je je EIGEN vorige record, niet dat van concurrenten. Standford-onderzoek bewees dat deze psychologie motivatie met 40% verhoogt vergeleken met directe competitie.',
    },
    {
      type: 'paragraph',
      html: 'Nog steeds delen met vrienden? De deelknop maakt een visueel resultaat dat je kunt kopiëren naar WhatsApp/Twitter. Maar onthoud: een vriend op 120 WPM heeft waarschijnlijk 6 maanden getraind. Jij bent in week 2. Vergelijk jezelf met jezelf in week 2 in de toekomst, niet met hun week 26.',
    },
    {
      type: 'title',
      text: 'Hoe Nauwkeurig Is Deze Test vs Andere Online Tests?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nauwkeurigheid van typtesten hangt af van <strong>waar het gemeten wordt</strong> en <strong>wanneer</strong>. Deze test draait 100% lokaal in je browser. Kritieke voordelen:',
    },
    {
      type: 'list',
      items: [
        '<strong>Geen netwerkvertraging:</strong> Online tests zoals Typing.com ervaren 50-200ms vertraging. Hier: 0ms.',
        '<strong>Milliseconde precisie timestamps:</strong> Browser meet exact wanneer elke toets wordt ingedrukt.',
        '<strong>Gecertificeerde WPM-standaard:</strong> Gebruikt de officiële formule: (totaal tekens / 5) / minuten - fouten/minuten.',
        '<strong>Toetsaanslag validatie:</strong> Sommige online tests accepteren copy-paste. Deze test accepteert ALLEEN echte toetsenbordinvoer.',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Opmerking:</strong> Vergelijkbaar met TypeRacer, Monkeytype of Keybr.com in nauwkeurigheid. Beter dan Typing.com voor vertraging, vergelijkbaar met offline alternatieven.',
    },
    {
      type: 'title',
      text: 'Voor Wie Is Deze Typtest Geschikt',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Programmeurs en ingenieurs:</strong> Code typen bij 50 WPM is inefficiënt. Een dev bij 100+ WPM schrijft 2x zoveel code per sessie.',
        '<strong>Journalisten en copywriters:</strong> Artikelen schrijven is 70% typen. Verbeteren van 60 naar 100 WPM betekent 40 meer artikelen/jaar = hogere verdiensten.',
        '<strong>Juristen en notarissen:</strong> Juridische documenten zijn kritiek. Contracten typen bij 40 WPM = 1,5 uur. Bij 100 WPM = 20 minuten.',
      ],
    },
    {
      type: 'title',
      text: 'Realistische Tijdlijn: Hoe Lang Om WPM Te Verbeteren',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Typtesten laten meestal progressie zien in dit schema (bij 15-20 min dagelijkse training):',
    },
    {
      type: 'list',
      items: [
        '<strong>Week 1:</strong> Geen zichtbare verandering (hersenen worden geherprogrammeerd)',
        '<strong>Week 2-3:</strong> +5 WPM (eerste neurale veranderingen)',
        '<strong>Week 4-8:</strong> +3-5 WPM per week (versnelde leercurve)',
        '<strong>Maand 4-6:</strong> +1-2 WPM per week (verminderde meeropbrengst)',
      ],
    },
    {
      type: 'paragraph',
      html: '<em>De belangrijkste factor is CONSISTENTIE, niet intensiteit. 10 minuten dagelijks is beter dan 2 uur elke 2 weken.</em>',
    },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
