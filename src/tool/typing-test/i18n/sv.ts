import { bibliography } from '../bibliography';
import type { TypingTestLocaleContent as TypingTestLocaleContentType } from '../entry';

const slug = 'typtest-svensk';
const title = 'Typtest: Mät din Skrivhastighet';
const description = 'Fullständigt offline-typtest med beroendeframkallande gamification. Mät din WPM, noggrannhet och framsteg. Tävla mot dig själv och förbättra din hastighet.';

const faqItems = [
  { question: 'Vad är en genomsnittlig skrivhastighet?', answer: 'Genomsnittet för vuxna är 40-60 WPM (ord per minut). Skickliga maskinskrivare når 70-100 WPM. De snabbaste överskrider 200 WPM. Det här testet visar var du ligger.' },
  { question: 'Hur beräknas WPM?', answer: 'Vi tar antalet korrekta tecken, delar med 5 (genomsnittlig ordlängd) och delar med antal minuter. Detta bestraffar automatiskt fel, vilket ger dig en rättvis nettohastighet.' },
  { question: 'Sparas mina resultat?', answer: 'Ja, lokalt i din webbläsare. Din bästa WPM sparas automatiskt. Ingen online ser dina resultat om du inte väljer att dela dem.' },
  { question: 'Är det exakt utan internet?', answer: 'Helt och hållet. Detta test körs till 100 % i din webbläsare utan att skicka data till servrar. Det innebär millisekunders precision och noll nätverksfördröjning.' },
  { question: 'Hur lång tid tar det att förbättra hastigheten?', answer: 'Märkbara förbättringar sker på 2-3 veckor med konsekvent övning. Dramatiska förändringar (t.ex. 50 till 100 WPM) tar 3-6 månader av seriös träning.' },
  { question: 'Kan jag öva utan internet?', answer: 'Självklart. Det här testet är 100 % offline. Ladda en gång, spela sedan utan internet. Perfekt för resor eller när WiFi ligger nere.' },
];

const howToItems = [
  { name: 'Börja skriva', text: 'Börja bara skriva. Timern startar automatiskt vid första tangenttryckningen. Du har 60 sekunder på dig.' },
  { name: 'Skriv orden korrekt', text: 'Korrekta ord markeras i cyan. Felaktiga bokstäver blir röda. Slutför varje ord felfritt för att det ska räknas.' },
  { name: 'Följ framstegen live', text: 'Din WPM, noggrannhet och antal ord uppdateras i realtid medan du skriver.' },
  { name: 'Få ditt slutresultat', text: 'När tiden är ute ser du din slutliga WPM, total noggrannhet och alternativet att dela ditt resultat.' },
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

export const content: TypingTestLocaleContentType = {
  slug,
  title,
  description,
  ui: {
    words: 'Ord',
    wpm: 'WPM',
    accuracy: 'Noggrannhet',
    timeUp: 'Tiden är ute!',
    playAgain: 'Spela igen',
    share: 'Dela',
    copied: 'Kopierat!',
  },
  wordPool: [
    'hus', 'hund', 'katt', 'sol', 'måne', 'kärlek', 'skratt', 'spel', 'tid', 'liv',
    'död', 'natt', 'dag', 'vän', 'familj', 'äta', 'dricka', 'sova', 'dröm', 'springa',
    'dansa', 'sjungma', 'hoppa', 'flyga', 'simma', 'gå', 'bok', 'ord', 'bokstav', 'nummer',
    'färg', 'träd', 'blomma', 'vatten', 'eld', 'luft', 'jord', 'hav', 'berg', 'flod',
    'himmel', 'stjärna', 'moln', 'vind', 'regn', 'snö', 'is', 'värme', 'kyla', 'ljus',
    'äventyr', 'mysterium', 'rymd', 'universum', 'planet', 'komet', 'stjärnbild', 'galax',
    'dator', 'skärm', 'system', 'anslutning', 'internet', 'webbläsare', 'instrument', 'melodi',
    'harmoni', 'rytm', 'dans', 'teater', 'film', 'skådespelare', 'regissör', 'scen', 'karaktär', 'berättelse',
    'bibliotek', 'roman', 'dikt', 'författare', 'skribent', 'sida', 'kapitel', 'handling', 'narrativ', 'slut',
    'hjärta', 'hjärna', 'sinne', 'tanke', 'idé', 'koncept', 'teori', 'filosofi', 'visdom', 'kunskap',
    'problem', 'lösning', 'svar', 'fråga', 'tvivel', 'visshet', 'sanning', 'lögn', 'bedrägeri', 'trick',
    'drottning', 'kung', 'prins', 'prinsessa', 'riddare', 'drake', 'slott', 'kungarike', 'imperium', 'tron',
    'båt', 'segel', 'ankare', 'hamn', 'strand', 'sand', 'ö', 'ocean', 'våg', 'ström',
    'vulkan', 'jordbävning', 'storm', 'orkan', 'tornado', 'lavin', 'utbrott', 'torka', 'översvämning', 'hagel',
    'medicin', 'läkare', 'sjukhus', 'sjukdom', 'botemedel', 'remedy', 'piller', 'injektion', 'kirurgi', 'patient',
    'musik', 'sång', 'opera', 'symfoni', 'kompositör', 'musiker', 'violin', 'piano', 'gitarr', 'trumma',
    'mat', 'efterrätt', 'dryck', 'kök', 'kock', 'recept', 'smak', 'arom', 'textur', 'hunger',
    'resa', 'turism', 'destination', 'resväska', 'pass', 'flygplan', 'tåg', 'bil', 'cykel', 'motorcykel',
    'sport', 'fotboll', 'basket', 'tennis', 'simning', 'boxning', 'brottning', 'lopp', 'hopp', 'kast',
    'pengar', 'mynt', 'sedel', 'bank', 'lån', 'skuld', 'betalning', 'pris', 'rea', 'köp',
    'arbete', 'hantverk', 'yrke', 'karriär', 'anställning', 'chef', 'anställd', 'lön', 'kontrakt', 'uppsägning',
    'skola', 'college', 'universitet', 'lärare', 'student', 'lektion', 'prov', 'betyg', 'diplom', 'utbildning',
    'kyrka', 'tempel', 'religion', 'tro', 'bön', 'helgon', 'ängel', 'demon', 'helvete', 'himmel',
    'teknologi', 'intelligens', 'algoritm', 'program', 'kod', 'fel', 'bugg', 'server', 'klient', 'databas',
    'natur', 'ekosystem', 'biodiversitet', 'utrotning', 'evolution', 'anpassning', 'rovdjur', 'byte', 'växtätare', 'köttätare'
  ],
  seo: [
    {
      type: 'title',
      text: 'Gratis Typtest Online: Mät din Verkliga WPM i Realtid',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ett <strong>typtest</strong> är det mest exakta verktyget för att utvärdera hur många ord per minut (WPM) du kan skriva med god noggrannhet. Oavsett om du är programmerare, skribent eller student, är vetskapen om din verkliga hastighet första steget mot att optimera din produktivitet. Det här testet mäter inte bara hastighet utan även <em>nettonoggrannhet</em>: det som verkligen räknas är hastigheten korrigerad för fel.',
    },
    {
      type: 'paragraph',
      html: 'Till skillnad från traditionella typsimulatorer drar det här testet automatiskt av för fel i din slutliga WPM. En person som skriver i 100 WPM men gör 30 fel är inte snabbare än någon som skriver i 70 WPM med noll fel. Här mäter vi din <strong>sanna nettohastighet</strong>, inte uppblåsta fantasifigurer.',
    },
    {
      type: 'title',
      text: 'Genomsnittlig Skrivhastighet: Benchmark 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Den genomsnittliga skrivhastigheten ligger runt <strong>40-60 WPM</strong> för vuxna utan specialträning. Detta varierar dock kraftigt beroende på yrke:',
    },
    {
      type: 'list',
      items: [
        '<strong>Vardagsanvändare:</strong> 30-45 WPM (e-post, sociala medier)',
        '<strong>Administrativ personal:</strong> 60-80 WPM (professionell standard)',
        '<strong>Certifierade maskinskrivare:</strong> 90-120 WPM (formell ASDF-teknik)',
        '<strong>Professionella skribenter:</strong> 120-160 WPM (journalister, copywriters)',
        '<strong>Världsmästare:</strong> 200+ WPM (Guinness världsrekord: 216 WPM)',
      ],
    },
    {
      type: 'paragraph',
      html: 'De flesta som gör det här testet upptäcker att de ligger under det professionella genomsnittet. Den som skriver 50 WPM med 95 % noggrannhet behöver förmodligen förbättra tekniken, inte bara råhastigheten. Testet visar exakt var du befinner dig.',
    },
    {
      type: 'title',
      text: 'Varför det Spelar Roll att Förbättra din Skrivhastighet 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'År 2026 är att skriva snabbt och korrekt inte bara en färdighet för sekreterare. Det är en <strong>kritisk kompetens</strong> för praktiskt taget alla kunskapsbaserade yrken.',
    },
    {
      type: 'list',
      items: [
        '<strong>Programmerare:</strong> Kod skrivs, den tänks inte bara ut. Att skriva 100+ WPM sparar timmar av arbete.',
        '<strong>Jurister:</strong> Juridiska dokument kräver snabb och felfri skrift. Ett stavfel i ett kontrakt kan vara katastrofalt.',
        '<strong>Journalister:</strong> Publiceringstakt avgör konkurrenskraften. 120 WPM jämfört med 60 WPM fördubblar din dagliga produktion.',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>ROI är verklig:</strong> Om du skriver 50 WPM och lägger 15 minuter på ett dokument på 200 ord, förlorar du 2 timmar om dagen (vid 8 dokument). Med 100 WPM tar samma uppgift 7 minuter. Per år: <strong>260 timmar sparade</strong>.',
    },
    {
      type: 'title',
      text: 'Hur man Gör ett Typtest: Steg-för-steg-guide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Webbaserade typtester fungerar enligt samma princip som certifierade prov: de mäter korrekta ord per minut (netto WPM) under en viss tid. Enkelt men exakt:',
    },
    {
      type: 'list',
      items: [
        '<strong>Välj tid:</strong> 30 sekunder, 60 sekunder eller 2 minuter. 60 är standard.',
        '<strong>Välj svårighetsgrad:</strong> Vanliga ord, standardblandning eller svåra ord.',
        '<strong>Börja skriva:</strong> Timern startar automatiskt när du trycker på första tangenten.',
        '<strong>Se resultatet direkt:</strong> När tiden är ute ser du din WPM, noggrannhet och ditt rekord.',
      ],
    },
    {
      type: 'title',
      text: 'Faktorer som Påverkar din Skrivhastighet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ditt tempo är inte konstant. Forskning visar att faktorer som ordförråd, tangentbordslayout och mental trötthet spelar in. Efter 10 minuters kontinuerlig skrift sjunker ofta noggrannheten markant.',
    },
    {
      type: 'tip',
      html: 'Elit-skrivare (120+ WPM) når dit genom att bemästra <strong>grundpositionen</strong>: vänster fingrar på ASDF, höger på JKL; och att aldrig titta på tangentbordet. Det är den enda vägen till att nå över 100 WPM långsiktigt.',
    },
    { type: 'title', text: 'Daglig träning', level: 2 },
    { type: 'paragraph', html: 'Korta, regelbundna pass bygger stabila fingerrörelser. Tio fokuserade minuter om dagen är bättre än ett långt pass med flera veckors mellanrum.' },
    { type: 'paragraph', html: 'Prioritera noggrannhet innan du höjer tempot. En jämn hastighet med få fel är mer användbar än ett tillfälligt rekord.' },
    { type: 'title', text: 'Ergonomi vid tangentbordet', level: 2 },
    { type: 'paragraph', html: 'Slappna av i axlarna, håll handlederna naturligt och placera skärmen i ögonhöjd. Avsluta passet om du får ont.' },
    { type: 'paragraph', html: 'Tryck inte hårdare än nödvändigt. Ett lätt anslag minskar tröttheten och gör det lättare att hålla en jämn rytm.' },
    { type: 'title', text: 'Öva på verkliga uppgifter', level: 2 },
    { type: 'paragraph', html: 'Blanda vanlig text med siffror, skiljetecken och kod om du skriver i arbetet. En lista med enkla ord motsvarar inte alla situationer.' },
    { type: 'paragraph', html: 'Träna separat på ord och tangentkombinationer där du ofta gör fel. Riktad repetition ger bättre effekt än att bara förlänga testet.' },
    { type: 'paragraph', html: 'Jämför resultat med samma tid och svårighetsgrad. Då visar förändringen i WPM och precision den verkliga utvecklingen.' },
    { type: 'title', text: 'Tolka dina resultat', level: 2 },
    { type: 'paragraph', html: 'Ett enskilt bra resultat beskriver inte hela färdigheten. Titta på genomsnittet av flera försök och om du kan hålla tempot utan fler fel.' },
    { type: 'paragraph', html: 'Trötthet, buller och stress kan tillfälligt sänka resultatet. Skriv gärna ner omständigheterna när du testar.' },
    { type: 'paragraph', html: 'När du byter språk eller tangentbordslayout behöver fingrarna vänja sig igen. En kortvarig hastighetsminskning är då normal.' },
    { type: 'title', text: 'Pauser och hälsa', level: 2 },
    { type: 'paragraph', html: 'Vila blicken och rör på händerna var 20-30 minut. En bra teknik gör det möjligt att träna längre med mindre belastning.' },
    { type: 'paragraph', html: 'Ignorera inte ihållande obehag. Avsluta träningen och kontakta vården eller en specialist om problemet fortsätter.' },
    { type: 'paragraph', html: 'Sätt ett personligt mål, till exempel färre fel i svåra ord eller några fler WPM med samma precision.' },
    { type: 'paragraph', html: 'Regelbundenhet slår intensitet. Ett kort pass är värdefullt när du återkommer till det enligt en plan.' },
    { type: 'paragraph', html: 'Analysera misstagen efter testet innan du startar om. Feedbacken visar vad nästa övning bör fokusera på.' },
    { type: 'paragraph', html: 'När precisionen förbättras ökar ofta hastigheten av sig själv, eftersom du inte behöver stanna och rätta texten.' },
    { type: 'paragraph', html: 'Jämför dig främst med dina tidigare resultat. Olika språk, tangentbord och förutsättningar gör andras rekord svåra att jämföra.' },
    { type: 'paragraph', html: 'Om resultaten varierar mycket bör du först stabilisera handposition och rytm innan du jagar högre hastighet.' },
    { type: 'paragraph', html: 'Välj ett konkret fokus för nästa pass. Ett tydligt mål är lättare att kontrollera än en allmän önskan om att skriva snabbare.' },
    { type: 'paragraph', html: 'Använd både långsamma och snabba övningar: långsam precision bygger teknik och korta intervaller tränar tempo.' },
    { type: 'paragraph', html: 'Låt fingrarna återgå till grundpositionen efter varje rörelse. Det minskar onödiga förflyttningar och gör nästa tangent lättare att hitta.' },
    { type: 'paragraph', html: 'Öva i den layout och på det språk du faktiskt använder. En hög poäng i en ovan miljö säger mindre om din vardagliga effektivitet.' },
    { type: 'paragraph', html: 'Ta en paus mellan mätningar så att resultatet inte påverkas av trötta händer. Kvalitet är viktigare än många repetitioner.' },
    { type: 'paragraph', html: 'Spara datum och precision tillsammans med WPM. På så sätt ser du om förbättringen håller över tid. För en rättvis jämförelse bör du använda samma språk, tangentbordslayout och testlängd varje gång. Svenska tecken, siffror och skiljetecken kan förändra rytmen, så jämför främst resultat från likadana testförhållanden. Använd resultatet som återkoppling, inte som ett absolut betyg. Om WPM ökar samtidigt som noggrannheten faller behöver du sänka tempot och bygga upp en jämnare teknik innan du försöker slå nästa rekord. Ett enkelt träningsupplägg är att börja med fem minuter lugn precision, fortsätta med ett normalt test och avsluta med en kort intervall där du fokuserar på rytm. Den ordningen gör framstegen lättare att hålla över tid. Följ också hur noggrannheten utvecklas mellan passen, eftersom en jämn förbättring säger mer än ett enstaka toppresultat.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
