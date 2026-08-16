import { bibliography } from '../bibliography';
import type { GamesToolLocaleContent as GamesToolLocaleContentType } from '../../../index';

const slug = 'test-predkosci-pisania';
const title = 'Test Prędkości Pisania: Zmierz Szybkość Swojego Pisania';
const description = 'W pełni offline\'owy test pisania na klawiaturze z wciągającymi elementami gry. Zmierz swoje WPM, dokładność i osiągnięcia. Rywalizuj ze sobą i poprawiaj rekordy.';

const faqItems = [
  { question: 'Jaka jest średnia prędkość pisania?', answer: 'Średnia prędkość osoby dorosłej to 40-60 WPM (słów na minutę). Sprawni maszyniści osiągają 70-100 WPM. Najszybsi przekraczają 200 WPM. Ten test pokaże Ci, w którym miejscu jesteś.' },
  { question: 'Jak obliczane jest WPM?', answer: 'Bierzemy liczbę poprawnych znaków, dzielimy przez 5 (średnia długość słowa) i dzielimy przez upływające minuty. System automatycznie uwzględnia błędy, dając sprawiedliwy wynik netto.' },
  { question: 'Czy moje wyniki są zapisywane?', answer: 'Tak, lokalnie w Twojej przeglądarce. Twój najlepszy wynik WPM zapisuje się automatycznie. Nikt w sieci nie widzi Twoich wyników, chyba że się nimi pochwalisz.' },
  { question: 'Czy test jest dokładny bez internetu?', answer: 'Całkowicie. Ten test działa w 100% w Twojej przeglądarce bez wysyłania danych na serwery. Oznacza to precyzję co do milisekundy i brak opóźnień sieciowych.' },
  { question: 'Jak długo trzeba ćwiczyć, by pisać szybciej?', answer: 'Zauważalna poprawa następuje po 2-3 tygodniach regularnych ćwiczeń. Wyraźne zmiany (np. z 50 do 100 WPM) wymagają 3-6 miesięcy poważnego treningu.' },
  { question: 'Czy mogę ćwiczyć bez dostępu do sieci?', answer: 'Oczywiście. Ten test jest w 100% offline. Załaduj go raz, a potem graj bez internetu. Idealne w podróży lub podczas awarii WiFi.' },
];

const howToItems = [
  { name: 'Zacznij pisać', text: 'Po prostu zacznij pisać. Stoper ruszy automatycznie przy pierwszym naciśnięciu klawisza. Masz 60 sekund.' },
  { name: 'Pisz słowa poprawnie', text: 'Poprawne słowa podświetlają się na cyjanowo. Błędne litery zmieniają kolor na czerwony. Musisz wpisać słowo bezbłędnie, by zostało zaliczone.' },
  { name: 'Śledź postępy na żywo', text: 'Twoje WPM, dokładność i licznik słów aktualizują się w czasie rzeczywistym podczas pisania.' },
  { name: 'Odbierz wynik końcowy', text: 'Gdy czas dobiegnie końca, zobaczysz swoje ostateczne WPM, całkowitą dokładność i opcję udostępnienia wyniku.' },
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
    words: 'Słowa',
    wpm: 'WPM',
    accuracy: 'Dokładność',
    timeUp: 'Koniec Czasu!',
    playAgain: 'Zagraj Ponownie',
    share: 'Udostępnij',
    copied: 'Skopiowano!',
  },
  wordPool: [
    'dom', 'pies', 'kot', 'słońce', 'księżyc', 'miłość', 'śmiech', 'gra', 'czas', 'życie',
    'śmierć', 'noc', 'dzień', 'przyjaciel', 'rodzina', 'jeść', 'pić', 'spać', 'sen', 'biegać',
    'tańczyć', 'śpiewać', 'skakać', 'latać', 'pływać', 'chodzić', 'książka', 'słowo', 'litera', 'liczba',
    'kolor', 'drzewo', 'kwiatek', 'woda', 'ogień', 'powietrze', 'ziemia', 'morze', 'góra', 'rzeka',
    'niebo', 'gwiazda', 'chmura', 'wiatr', 'deszcz', 'śnieg', 'lód', 'ciepło', 'zimno', 'światło',
    'przygoda', 'zagadka', 'kosmos', 'wszechświat', 'planeta', 'kometa', 'gwiazdozbiór', 'galaktyka',
    'komputer', 'ekran', 'system', 'połączenie', 'internet', 'przeglądarka', 'instrument', 'melodia',
    'harmonia', 'rytm', 'taniec', 'teatr', 'film', 'aktor', 'reżyser', 'scena', 'postać', 'historia',
    'biblioteka', 'powieść', 'wiersz', 'autor', 'pisarz', 'strona', 'rozdział', 'fabuła', 'narracja', 'koniec',
    'serce', 'mózg', 'umysł', 'myśl', 'pomysł', 'koncepcja', 'teoria', 'filozofia', 'mądrość', 'wiedza',
    'problem', 'rozwiązanie', 'odpowiedź', 'pytanie', 'wątpliwość', 'pewność', 'prawda', 'kłamstwo', 'podstęp', 'sztuczka',
    'królowa', 'król', 'książę', 'księżniczka', 'rycerz', 'smok', 'zamek', 'królestwo', 'imperium', 'tron',
    'łódź', 'żagiel', 'kotwica', 'port', 'plaża', 'piasek', 'wyspa', 'ocean', 'fala', 'prąd',
    'wulkan', 'trzęsienie', 'burza', 'huragan', 'tornado', 'lawina', 'erupcja', 'susza', 'powódź', 'grad',
    'medycyna', 'lekarz', 'szpital', 'choroba', 'lekarstwo', 'remedium', 'pigułka', 'zastrzyk', 'operacja', 'pacjent',
    'muzyka', 'piosenka', 'opera', 'symfonia', 'kompozytor', 'muzyk', 'skrzypce', 'pianino', 'gitara', 'bęben',
    'jedzenie', 'deser', 'napój', 'kuchnia', 'szef', 'przepis', 'smak', 'aromat', 'tekstura', 'głód',
    'podróż', 'turystyka', 'cel', 'walizka', 'paszport', 'samolot', 'pociąg', 'samochód', 'rower', 'motocykl',
    'sport', 'piłka', 'koszykówka', 'tenis', 'pływanie', 'boks', 'zapasy', 'wyścig', 'skok', 'rzut',
    'pieniądze', 'moneta', 'banknot', 'bank', 'pożyczka', 'dług', 'płatność', 'cena', 'sprzedaż', 'kupno',
    'praca', 'handel', 'zawód', 'kariera', 'zatrudnienie', 'szef', 'pracownik', 'pensja', 'kontrakt', 'rezygnacja',
    'szkoła', 'uczelnia', 'uniwersytet', 'nauczyciel', 'student', 'lekcja', 'egzamin', 'ocena', 'dyplom', 'edukacja',
    'kościół', 'świątynia', 'religia', 'wiara', 'modlitwa', 'święty', 'anioł', 'demon', 'piekło', 'niebo',
    'technologia', 'inteligencja', 'algorytm', 'program', 'kod', 'błąd', 'serwer', 'klient', 'baza',
    'natura', 'ekosystem', 'bioróżnorodność', 'wymieranie', 'ewolucja', 'adaptacja', 'drapieżnik', 'ofiara', 'roślinożerca', 'mięsożerca',
    'psychologia', 'psychiatria', 'neurologia', 'poznanie', 'emocja', 'uczucie', 'pamięć', 'uwaga', 'percepcja', 'świadomość',
    'architektura', 'rzeźba', 'malarstwo', 'rysunek', 'sztuka', 'galeria', 'muzeum', 'wystawa', 'dzieło', 'płótno',
    'chemia', 'fizyka', 'matematyka', 'biologia', 'geologia', 'astronomia', 'meteorologia', 'oceanografia', 'botanika', 'zoologia',
    'republika', 'demokracja', 'monarchia', 'dyktatura', 'rząd', 'polityka', 'wybory', 'głos', 'kongres', 'parlament',
    'prawo', 'sprawiedliwość', 'prawnik', 'sędzia', 'sąd', 'wyrok', 'wina', 'niewinność', 'kara',
    'wolność', 'niewolnictwo', 'ucisk', 'rewolucja', 'wojna', 'pokój', 'rozejm', 'sojusz', 'wróg', 'konflikt',
    'język', 'gramatyka', 'składnia', 'semantyka', 'słownictwo', 'wymowa', 'akcent', 'dialekt', 'idiom', 'tłumaczenie',
    'alfabet', 'wielkie', 'małe', 'interpunkcja', 'pauza', 'akcent', 'rytm', 'intonacja', 'kadencja', 'muzykalność'
  ],
  seo: [
    {
      type: 'title',
      text: 'Darmowy Test Prędkości Pisania Online: Zmierz Swoje WPM w Czasie Rzeczywistym',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Test prędkości pisania</strong> to najdokładniejsze narzędzie do oceny, ile słów na minutę (WPM) potrafisz napisać bez błędów. Niezależnie od tego, czy jesteś programistą, pisarzem, studentem, czy spędzasz godziny przy klawiaturze, poznanie swojej rzeczywistej szybkości to pierwszy krok do optymalizacji produktywności. Ten test mierzy nie tylko czystą prędkość, ale <em>dokładność netto</em>: liczy się szybkość skorygowana o popełnione błędy.',
    },
    {
      type: 'paragraph',
      html: 'W przeciwieństwie do tradycyjnych symulatorów pisania, ten test automatycznie odejmuje błędy od końcowego wyniku WPM. Maszynista piszący 100 WPM, ale robiący 30 błędów, nie jest szybszy od kogoś, kto pisze 70 WPM z zerową liczbą pomyłek. Tutaj mierzymy Twoją <strong>prawdziwą prędkość netto</strong>, a nie zawyżone, nierealne liczby.',
    },
    {
      type: 'title',
      text: 'Średnia Prędkość Pisania: Standardy 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Średnia prędkość pisania dorosłych bez specjalistycznego przeszkolenia oscyluje wokół <strong>40-60 WPM</strong>. Jednak wskaźnik ten różni się znacznie w zależności od profesji:',
    },
    {
      type: 'list',
      items: [
        '<strong>Użytkownicy okazjonalni:</strong> 30-45 WPM (e-maile, media społecznościowe)',
        '<strong>Pracownicy biurowi/administracja:</strong> 60-80 WPM (standard zawodowy)',
        '<strong>Certyfikowani maszyniści:</strong> 90-120 WPM (formalna technika bezwzrokowa)',
        '<strong>Zawodowi pisarze:</strong> 120-160 WPM (dziennikarze, copywriterzy)',
        '<strong>Mistrzowie świata:</strong> 200+ WPM (Rekord Guinnessa: 216 WPM)',
      ],
    },
    {
      type: 'paragraph',
      html: 'Większość osób wykonujących ten test odkrywa, że plasuje się poniżej średniej zawodowej. Ktoś piszący 50 WPM z dokładnością 95% prawdopodobnie musi popracować nad techniką, a nie tylko nad surową szybkością. Ten test pokaże Ci dokładnie, w którym percentylu się znajdujesz.',
    },
    {
      type: 'list',
      items: [
        '<strong>Początkujący (20-40 WPM):</strong> Wciąż zerka na klawiaturę, pisanie powolne i świadome',
        '<strong>Średniozaawansowany (40-70 WPM):</strong> Płynne pisanie, okazjonalne błędy',
        '<strong>Zaawansowany (70-120 WPM):</strong> Naturalne pisanie, bardzo mało pomyłek',
        '<strong>Profesjonalista (120+ WPM):</strong> Szybkość zawodnicza, niemal perfekcyjna dokładność',
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego Poprawa Prędkości Pisania ma Znaczenie w 2026 Roku',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W 2026 roku szybkie i dokładne pisanie nie jest już tylko "umiejętnością sekretarską". To <strong>kluczowa kompetencja</strong> w praktycznie każdym zawodzie opartym na wiedzy:',
    },
    {
      type: 'list',
      items: [
        '<strong>Programiści:</strong> Kod się pisze, a nie tylko wymyśla. Pisanie ponad 100 WPM to różnica między 6 a 3 godzinami pracy',
        '<strong>Prawnicy i notariusze:</strong> Dokumenty prawne wymagają szybkości i bezbłędności. Literówka w kontrakcie bywa katastrofalna',
        '<strong>Dziennikarze i twórcy treści:</strong> Szybkość publikacji decyduje o konkurencyjności. 120 WPM vs 60 WPM podwaja Twój dzienny nakład pracy',
        '<strong>Studenci:</strong> Egzaminy na czas, eseje i prace naukowe wymagają pisania w tempie myślenia. Wolne pisanie = niska jakość',
        '<strong>Freelancerzy:</strong> Czas to bezpośrednio pieniądz. Przejście z 50 do 100 WPM to wzrost dochodu o 30-40% przy tym samym wysiłku',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Zwrot z inwestycji (ROI) jest realny:</strong> Jeśli piszesz 50 WPM i poświęcasz 15 minut na dokument o długości 200 słów, tracisz 2 godziny dziennie (zakładając 8 dokumentów). Przy 100 WPM to samo zadanie zajmuje 7 minut. W skali roku: <strong>260 zaoszczędzonych godzin</strong>. To tysiące złotych zysku z produktywności.',
    },
    {
      type: 'title',
      text: 'Jak Wykonać Test Pisania: Przewodnik Krok po Kroku',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Internetowe testy pisania działają na tej samej zasadzie co certyfikowane egzaminy Typing Masters Association: mierzą poprawne słowa na minutę (netto WPM) w określonym limicie czasu. Proste, ale precyzyjne:',
    },
    {
      type: 'list',
      items: [
        '<strong>Wybierz czas trwania:</strong> 30 sekund, 60 sekund lub 2 minuty. Standardem jest 60.',
        '<strong>Wybierz trudność:</strong> Częste słowa, miks standardowy, trudne słowa lub kod z symbolami.',
        '<strong>Zacznij pisać:</strong> Stoper ruszy w momencie naciśnięcia pierwszego klawisza.',
        '<strong>Śledź postępy:</strong> WPM, dokładność i błędy aktualizują się na bieżąco.',
        '<strong>Otrzymaj wynik:</strong> Po upływie czasu zobaczysz swoje WPM, procent dokładności i swój rekord.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Bez sztuczek, bez wymaganych kont, bez reklam. Tylko Twoja prawdziwa prędkość mierzona precyzyjnie.',
    },
    {
      type: 'title',
      text: 'Metryki, które Mierzymy',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Słowa na Minutę (WPM):</strong> Standardowa metryka. Obliczana jako (liczba poprawnych znaków / 5) / czas w minutach. To sprawiedliwe: nie premiuje szybkiego walenia w klawisze z mnóstwem błędów.',
    },
    {
      type: 'paragraph',
      html: '<strong>Dokładność (%):</strong> Procent poprawnie wpisanych znaków. 100% to ideał. 90% oznacza jeden błąd na każde 10 znaków. Dokładność liczy się tak samo jak szybkość.',
    },
    {
      type: 'paragraph',
      html: '<strong>Błędy:</strong> Całkowita liczba złych znaków. Łatwiejsza do wyobrażenia niż procenty. Test zaznacza je na czerwono w trakcie pisania.',
    },
    {
      type: 'title',
      text: 'Czynniki Wpływające na Twoją Rzeczywistą Prędkość',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Prędkość pisania nie jest stała. Badania psychologii poznawczej pokazują, że te czynniki bezpośrednio wpływają na wydajność:',
    },
    {
      type: 'list',
      items: [
        '<strong>Znajomość słownictwa:</strong> Pisanie w Twojej specjalizacji jest o 30% szybsze niż w przypadku obcego słownictwa',
        '<strong>Układ klawiatury:</strong> Użytkownicy QWERTY osiągają o 10-15% niższe WPM niż osoby przeszkolone na DVORAK/COLEMAK, ale mają lepszą dostępność sprzętu',
        '<strong>Długość słów:</strong> Długie słowa spowalniają o 15-20% (np. "konstantynopolitańczykiewiczówna" vs "dom")',
        '<strong>Zmęczenie psychiczne:</strong> Po 10 minutach ciągłego pisania dokładność spada o 5-8%',
        '<strong>Stres spowodowany czasem:</strong> Test 1-minutowy generuje więcej adrenaliny (literówek) niż test 5-minutowy',
      ],
    },
    {
      type: 'tip',
      html: 'Elitarni maszyniści (120+ WPM) nie doszli do tego poprzez szybkie ruszanie palcami. Opanowali poprawną <strong>pozycję spoczynkową</strong>: lewe palce na ASDF, prawe na JKL; i nigdy nie patrzą na klawiaturę. To jedyny sposób na stabilne 100+ WPM. Jeśli nauczysz się złą metodą, Twój sufit zawsze będzie na poziomie 60-70 WPM.',
    },
    {
      type: 'title',
      text: 'Plan Poprawy Pisania: od 50 do 100+ WPM w 3 Miesiące',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Tydzień 1-2 (Forma, nie szybkość):</strong> 10 min dziennie skupiając się WYŁĄCZNIE na poprawnym ułożeniu palców. Zapomnij o szybkości. Forma to 90% sukcesu.',
        '<strong>Tydzień 3-4 (Pisanie bezwzrokowe):</strong> Zwiększ do 15 min dziennie. Próbuj pisać bez patrzenia. Szybkość spadnie o 10-20%, ale o to chodzi: tworzysz nowe wzorce neuronowe.',
        '<strong>Tydzień 5-8 (Konsekwencja):</strong> 20 min dziennie. Przeplataj: 10 min naturalnego pisania (maile) + 10 min testu. Oczekuj poprawy o 5-8 WPM tygodniowo.',
        '<strong>Tydzień 9-12 (Specjalizacja):</strong> Skup się na trudnych słowach. Programiści ćwiczą symbole. Pisarze interpunkcję.',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Kluczem jest SYSTEMATYCZNOŚĆ, a nie intensywność. 10 minut dziennie bije na głowę 2 godziny raz na dwa tygodnie.</strong>',
    },
    { type: 'title', text: 'Codzienny trening pisania', level: 2 },
    { type: 'paragraph', html: 'Krótka, regularna praktyka utrwala ruchy palców. Dziesięć minut skupienia każdego dnia daje lepsze rezultaty niż długa sesja raz na kilka tygodni.' },
    { type: 'paragraph', html: 'Najpierw pracuj nad dokładnością, a dopiero potem zwiększaj tempo. Stabilny poziom błędów jest ważniejszy niż chwilowy rekord.' },
    { type: 'title', text: 'Postawa i wygoda', level: 2 },
    { type: 'paragraph', html: 'Rozluźnij ramiona, trzymaj nadgarstki w naturalnej pozycji i ustaw ekran na wysokości oczu. Przerwij ćwiczenie, jeśli pojawi się ból.' },
    { type: 'paragraph', html: 'Nie naciskaj klawiszy mocniej, niż trzeba. Lekki dotyk ogranicza zmęczenie i pomaga utrzymać równy rytm.' },
    { type: 'title', text: 'Ćwiczenia przydatne w pracy', level: 2 },
    { type: 'paragraph', html: 'Włączaj do ćwiczeń liczby, znaki interpunkcyjne i fragmenty kodu, jeśli używasz klawiatury zawodowo. Sama lista prostych słów nie odwzoruje wszystkich realnych zadań.' },
    { type: 'paragraph', html: 'Ćwicz także słowa, przy których najczęściej się zatrzymujesz. Powtarzanie trudnych połączeń jest skuteczniejsze niż bezmyślne wydłużanie testu.' },
    { type: 'paragraph', html: 'Porównuj wyniki przy tej samej długości i poziomie trudności. Wtedy zmiana WPM i dokładności rzeczywiście pokazuje postęp.' },
    { type: 'title', text: 'Jak czytać swoje wyniki', level: 2 },
    { type: 'paragraph', html: 'Jeden wyjątkowo dobry wynik nie opisuje całej umiejętności. Zwracaj uwagę na średnią z kilku prób i na to, czy potrafisz utrzymać tempo bez rosnącej liczby błędów.' },
    { type: 'paragraph', html: 'Zmęczenie, hałas i stres mogą chwilowo obniżyć wynik. Zapisuj warunki testu, aby nie wyciągać pochopnych wniosków.' },
    { type: 'paragraph', html: 'Zmiana układu klawiatury lub języka wymaga ponownego przyzwyczajenia palców. Początkowy spadek prędkości jest wtedy naturalny.' },
    { type: 'title', text: 'Bezpieczne przerwy', level: 2 },
    { type: 'paragraph', html: 'Co 20-30 minut odpocznij od ekranu i poruszaj dłońmi. Zdrowa technika pozwala ćwiczyć dłużej i zmniejsza ryzyko przeciążenia.' },
    { type: 'paragraph', html: 'Nie ignoruj utrzymującego się dyskomfortu. Zakończ sesję i w razie potrzeby skonsultuj problem ze specjalistą.' },
    { type: 'paragraph', html: 'Najlepszym celem jest własna, dokładna i powtarzalna prędkość, a nie kopiowanie wyniku innej osoby.' },
    { type: 'paragraph', html: 'Ustal mały cel na następną sesję: mniej błędów w trudnych słowach albo kilka WPM przy zachowaniu tej samej dokładności.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
