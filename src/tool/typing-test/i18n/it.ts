import { bibliography } from '../bibliography';
import type { GamesToolLocaleContent as GamesToolLocaleContentType } from '../../../index';

const slug = 'test-velocita-scrittura';
const title = 'Test di Velocità di Scrittura: Misura la tua Rapidità';
const description = 'Test di digitazione completamente offline con gamification coinvolgente. Misura il tuo WPM, la precisione e gli obiettivi raggiunti. Migliora la tua velocità di scrittura.';

const faqItems = [
  { question: 'Qual è la velocità media di scrittura?', answer: 'La velocità media di un adulto è di 40-60 WPM (parole al minuto). I dattilografi esperti raggiungono 70-100 WPM. I più veloci superano i 200 WPM. Questo test ti mostra a che punto sei.' },
  { question: 'Come viene calcolato il WPM?', answer: 'Si prendono i caratteri corretti, si divide per 5 (lunghezza media di una parola) e si divide per i minuti trascorsi. Questo penalizza automaticamente gli errori, fornendo una velocità netta corretta.' },
  { question: 'I miei risultati vengono salvati?', answer: 'Sì, localmente nel tuo browser. Il tuo miglior WPM viene salvato automaticamente. Nessuno online vede i tuoi risultati a meno che tu non li condivida.' },
  { question: 'È accurato senza internet?', answer: 'Completamente. Questo test viene eseguito al 100% nel tuo browser senza inviare dati ai server. Ciò significa precisione al millisecondo e zero latenza di rete.' },
  { question: 'Quanto tempo ci vuole per migliorare?', answer: 'Miglioramenti visibili in 2-3 settimane con una pratica costante. Cambiamenti drastici (es. da 50 a 100 WPM) richiedono 3-6 mesi di pratica seria.' },
  { question: 'Posso esercitarmi offline?', answer: 'Certamente. Questo test è offline al 100%. Caricalo una volta e poi gioca senza internet. Perfetto per i viaggi o interruzioni WiFi.' },
];

const howToItems = [
  { name: 'Inizia a scrivere', text: 'Inizia semplicemente a digitare. Il timer parte automaticamente alla prima pressione dei tasti. Hai 60 secondi.' },
  { name: 'Digita correttamente', text: 'Le parole corrette sono evidenziate in ciano. Le lettere sbagliate diventano rosse. Completa ogni parola senza errori per farla contare.' },
  { name: 'Osserva i progressi', text: 'Il tuo WPM, la precisione e il conteggio delle parole si aggiornano in tempo reale mentre scrivi.' },
  { name: 'Ottieni i risultati', text: 'Al termine del tempo, visualizza il tuo WPM finale, la precisione totale e l\'opzione per condividere i risultati.' },
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
    words: 'Parole',
    wpm: 'WPM',
    accuracy: 'Precisione',
    timeUp: 'Tempo Scaduto!',
    playAgain: 'Gioca Ancora',
    share: 'Condividi',
    copied: 'Copiato!',
  },
  wordPool: [
    'casa', 'cane', 'gatto', 'sole', 'luna', 'amore', 'risata', 'gioco', 'tempo', 'vita',
    'morte', 'notte', 'giorno', 'amico', 'famiglia', 'mangiare', 'bere', 'dormire', 'sogno', 'correre',
    'ballare', 'cantare', 'saltare', 'volare', 'nuotare', 'camminare', 'libro', 'parola', 'lettera', 'numero',
    'colore', 'albero', 'fiore', 'acqua', 'fuoco', 'aria', 'terra', 'mare', 'montagna', 'fiume',
    'cielo', 'stella', 'nuvola', 'vento', 'pioggia', 'neve', 'ghiaccio', 'calore', 'freddo', 'luce',
    'avventura', 'mistero', 'spazio', 'universo', 'pianeta', 'cometa', 'costellazione', 'galassia',
    'computer', 'schermo', 'sistema', 'connessione', 'internet', 'browser', 'strumento', 'melodia',
    'armonia', 'ritmo', 'danza', 'teatro', 'film', 'attore', 'regista', 'scena', 'personaggio', 'storia',
    'biblioteca', 'romanzo', 'poesia', 'autore', 'scrittore', 'pagina', 'capitolo', 'trama', 'narrativa', 'fine',
    'cuore', 'cervello', 'mente', 'pensiero', 'idea', 'concetto', 'teoria', 'filosofia', 'saggezza', 'conoscenza',
    'problema', 'soluzione', 'risposta', 'domanda', 'dubbio', 'certezza', 'verità', 'bugia', 'inganno', 'trucco',
    'regina', 're', 'principe', 'principessa', 'cavaliere', 'drago', 'castello', 'regno', 'impero', 'trono',
    'barca', 'vela', 'ancora', 'porto', 'spiaggia', 'sabbia', 'isola', 'oceano', 'onda', 'corrente',
    'vulcano', 'terremoto', 'tempesta', 'uragano', 'tornado', 'valanga', 'eruzione', 'siccità', 'alluvione', 'grandine',
    'medicina', 'medico', 'ospedale', 'malattia', 'cura', 'rimedio', 'pillola', 'iniezione', 'chirurgia', 'paziente',
    'musica', 'canzone', 'opera', 'sinfonia', 'compositore', 'musicista', 'violino', 'pianoforte', 'chitarra', 'tamburo',
    'cibo', 'dolce', 'bevanda', 'cucina', 'chef', 'ricetta', 'sapore', 'aroma', 'consistenza', 'fame',
    'viaggio', 'turismo', 'destinazione', 'valigia', 'passaporto', 'aereo', 'treno', 'auto', 'bicicletta', 'motocicletta',
    'sport', 'calcio', 'basket', 'tennis', 'nuoto', 'pugilato', 'lotta', 'corsa', 'salto', 'lancio',
    'denaro', 'moneta', 'banconota', 'banca', 'prestito', 'debito', 'pagamento', 'prezzo', 'vendita', 'acquisto',
    'lavoro', 'mestiere', 'professione', 'carriera', 'occupazione', 'capo', 'dipendente', 'stipendio', 'contratto', 'dimissioni',
    'scuola', 'college', 'università', 'insegnante', 'studente', 'lezione', 'esame', 'voto', 'diploma', 'istruzione',
    'chiesa', 'tempio', 'religione', 'fede', 'preghiera', 'santo', 'angelo', 'demone', 'inferno', 'paradiso',
    'tecnologia', 'intelligenza', 'algoritmo', 'programma', 'codice', 'errore', 'bug', 'server', 'client', 'database',
    'natura', 'ecosistema', 'biodiversità', 'estinzione', 'evoluzione', 'adattamento', 'predatore', 'preda', 'erbivoro', 'carnivoro',
    'psicologia', 'psichiatria', 'neurologia', 'cognizione', 'emozione', 'sentimento', 'memoria', 'attenzione', 'percezione', 'coscienza',
    'architettura', 'scultura', 'pittura', 'disegno', 'arte', 'galleria', 'museo', 'mostra', 'opera', 'tela',
    'chimica', 'fisica', 'matematica', 'biologia', 'geologia', 'astronomia', 'meteorologia', 'oceanografia', 'botanica', 'zoologia',
    'repubblica', 'democrazia', 'monarchia', 'dittatura', 'governo', 'politica', 'elezione', 'voto', 'congresso', 'parlamento',
    'legge', 'diritto', 'giustizia', 'avvocato', 'giudice', 'tribunale', 'sentenza', 'colpa', 'innocenza', 'punizione',
    'libertà', 'schiavitù', 'oppressione', 'rivoluzione', 'guerra', 'pace', 'tregua', 'alleanza', 'nemico', 'conflitto',
    'linguaggio', 'grammatica', 'sintassi', 'semantica', 'vocabolario', 'pronuncia', 'accento', 'dialetto', 'idioma', 'traduzione',
    'alfabeto', 'maiuscolo', 'minuscolo', 'punteggiatura', 'pausa', 'enfasi', 'ritmo', 'intonazione', 'cadenza', 'musicalità'
  ],
  seo: [
    {
      type: 'title',
      text: 'Test di Velocità di Scrittura Online: Misura il tuo WPM in Tempo Reale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un <strong>test di velocità di scrittura</strong> è lo strumento più accurato per valutare quante parole al minuto (WPM) puoi digitare con precisione. Che tu sia un programmatore, uno scrittore, uno studente o trascorra ore alla tastiera, conoscere la tua velocità reale è il primo passo per ottimizzare la produttività. Questo test misura non solo la velocità, ma la <em>precisione netta</em>: ciò che conta davvero è la velocità corretta per gli errori.',
    },
    {
      type: 'paragraph',
      html: 'A differenza dei simulatori di digitazione tradizionali, questo test penalizza automaticamente gli errori nel tuo WPM finale. Un dattilografo che scrive a 100 WPM ma commette 30 errori non è più veloce di qualcuno a 70 WPM con zero errori. Qui misuriamo la tua <strong>vera velocità netta</strong>, non numeri gonfiati dalla fantasia.',
    },
    {
      type: 'title',
      text: 'Velocità Media di Scrittura: Benchmark 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La velocità media di scrittura si aggira intorno a <strong>40-60 WPM</strong> per gli adulti senza una formazione specifica. Tuttavia, questa metrica varia considerevolmente in base alla professione:',
    },
    {
      type: 'list',
      items: [
        '<strong>Utenti occasionali:</strong> 30-45 WPM (email, social media)',
        '<strong>Segretari/Amministrativi:</strong> 60-80 WPM (standard professionale)',
        '<strong>Dattilografi certificati:</strong> 90-120 WPM (tecnica formale ASDF JKL;)',
        '<strong>Scrittori professionisti:</strong> 120-160 WPM (giornalisti, copywriter)',
        '<strong>Campioni del mondo:</strong> 200+ WPM (Guinness World Record: 216 WPM)',
      ],
    },
    {
      type: 'paragraph',
      html: 'La maggior parte delle persone che esegue questo test scopre di essere al di sotto della media professionale. Chi scrive a 50 WPM con una precisione del 95% probabilmente deve migliorare la tecnica, non solo la velocità bruta. Questo test ti mostra esattamente in quale percentile ti trovi.',
    },
    {
      type: 'list',
      items: [
        '<strong>Principiante (20-40 WPM):</strong> Guarda ancora la tastiera, digitazione lenta ma consapevole',
        '<strong>Intermedio (40-70 WPM):</strong> Digitazione fluida, errori occasionali',
        '<strong>Avanzato (70-120 WPM):</strong> Digitazione naturale, pochissimi errori',
        '<strong>Professionale (120+ WPM):</strong> Velocità da competizione, precisione quasi perfetta',
      ],
    },
    {
      type: 'title',
      text: 'Perché Migliorare la Velocità di Scrittura è Importante nel 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nel 2026, scrivere velocemente e con precisione non è una "abilità da segretaria". È una <strong>competenza critica</strong> per praticamente qualsiasi professione basata sulla conoscenza:',
    },
    {
      type: 'list',
      items: [
        '<strong>Programmatori:</strong> Il codice viene scritto, non solo pensato. Scrivere a più di 100 WPM con precisione fa la differenza tra 6 e 3 ore di lavoro',
        '<strong>Avvocati e notai:</strong> I documenti legali richiedono una digitazione veloce e senza errori. Un errore di battitura in un contratto è catastrofico',
        '<strong>Giornalisti e creatori di contenuti:</strong> La velocità di pubblicazione determina la competitività. 120 WPM contro 60 WPM raddoppia la produzione giornaliera',
        '<strong>Studenti:</strong> Esami a tempo, saggi e tesine richiedono di scrivere mentre si pensa. Digitazione lenta = bassa qualità',
        '<strong>Freelance e solopreneur:</strong> Tempo = denaro diretto. Migliorare da 50 a 100 WPM equivale a un aumento del reddito del 30-40% a parità di sforzo',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Il ROI è reale:</strong> Se scrivi a 50 WPM e impieghi 15 minuti per un documento di 200 parole, sono 2 ore al giorno perse (ipotizzando 8 documenti). A 100 WPM, lo stesso compito richiede 7 minuti. All\'anno: <strong>260 ore risparmiate</strong>. A 30 €/ora (media freelance), sono 7.800 € di produttività annuale.',
    },
    {
      type: 'title',
      text: 'Come Eseguire un Test di Velocità di Scrittura: Guida Passo-Passo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I test di digitazione online funzionano sullo stesso principio degli esami certificati della Typing Masters Association: misurano le parole corrette al minuto (WPM netti) entro un limite di tempo fisso. Semplice ma preciso:',
    },
    {
      type: 'list',
      items: [
        '<strong>Scegli la durata:</strong> 30 secondi, 60 secondi o 2 minuti. Iniziare con 60 è lo standard.',
        '<strong>Seleziona la difficoltà:</strong> Parole comuni, mix standard, parole difficili o persino codice con simboli.',
        '<strong>Inizia a scrivere:</strong> Il timer parte automaticamente quando digiti il primo carattere.',
        '<strong>Osserva i progressi:</strong> WPM, precisione, errori e caratteri corretti si aggiornano mentre scrivi.',
        '<strong>Ottieni risultati istantanei:</strong> Allo scadere del tempo, visualizza il tuo WPM, la percentuale di precisione e il tuo record migliore.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Nessun trucco, nessun account richiesto, nessuna pubblicità. Solo la tua vera velocità misurata con precisione.',
    },
    {
      type: 'title',
      text: 'Metriche che Misuriamo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Parole al Minuto (WPM):</strong> La metrica standard. Calcolata prendendo i caratteri corretti, dividendo per 5 (lunghezza media della parola) e dividendo per i minuti trascorsi. È equo: non premia la digitazione veloce con molti errori.',
    },
    {
      type: 'paragraph',
      html: '<strong>Precisione (%):</strong> Percentuale di caratteri digitati correttamente. 100% è la perfezione. 90% significa 1 errore ogni 10 caratteri. La precisione conta quanto la velocità. Un velocista che inciampa non vince.',
    },
    {
      type: 'paragraph',
      html: '<strong>Errori:</strong> Numero totale di caratteri errati. Più facile da visualizzare rispetto alle percentuali. 3 errori su 300 caratteri corrispondono al 99% di precisione. Questo test li conta e li mostra in rosso mentre scrivi.',
    },
    {
      type: 'paragraph',
      html: '<strong>Caratteri Corretti / Totali:</strong> Quanti caratteri hai azzeccato rispetto a quelli previsti. Ti dà un\'idea di quanto sei andato avanti nel testo.',
    },
    {
      type: 'title',
      text: 'Fattori che Influenzano la tua Velocità di Scrittura Reale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La tua velocità di digitazione non è costante. La ricerca in psicologia cognitiva mostra che questi fattori influenzano direttamente le prestazioni:',
    },
    {
      type: 'list',
      items: [
        '<strong>Familiarità con il vocabolario:</strong> Scrivere della propria specialità è il 30% più veloce rispetto a un vocabolario sconosciuto',
        '<strong>Layout della tastiera:</strong> Gli utenti QWERTY ottengono un WPM inferiore del 10-15% rispetto ai dattilografi addestrati DVORAK/COLEMAK, ma hanno una migliore ergonomia',
        '<strong>Lunghezza della parola:</strong> Le parole lunghe rallentano del 15-20% (es. "precipitevolissimevolmente" vs "casa")',
        '<strong>Fatica mentale:</strong> Dopo 10 minuti continui, la precisione cala del 5-8%',
        '<strong>Stress da pressione temporale:</strong> Un test di 1 minuto genera più adrenalina (errori) rispetto a uno di 5 minuti',
      ],
    },
    {
      type: 'paragraph',
      html: 'Ecco perché questo test offre più durate e difficoltà: 60 secondi è lo standard per la velocità massima sotto pressione, 2 minuti consentono una reale sostenibilità.',
    },
    {
      type: 'tip',
      html: 'I dattilografi d\'élite (120+ WPM) non ci arrivano scrivendo velocemente. Padroneggiano la corretta <strong>posizione di riposo</strong>: dita sinistre su ASDF, dita destre su JKL;, senza mai guardare la tastiera. Questo è l\'unico modo per mantenere più di 100 WPM. Se impari inizialmente la posizione sbagliata, il tuo massimo sarà sempre 60-70 WPM, indipendentemente dalla pratica. Impara correttamente, anche se all\'inizio sarai più lento.',
    },
    {
      type: 'title',
      text: 'Piano di Miglioramento della Digitazione: da 50 a 100+ WPM in 3 Mesi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il miglioramento della digitazione segue una curva di apprendimento prevedibile. I ricercatori del MIT hanno scoperto che sono necessarie circa 10 ore di pratica focalizzata per ogni guadagno di 10 WPM. Ecco la strategia scientifica:',
    },
    {
      type: 'list',
      items: [
        '<strong>Settimana 1-2 (Forma, non velocità):</strong> 10 minuti al giorno concentrandosi SOLO sul corretto posizionamento delle dita. Dimentica la velocità. La forma è il 90% del progresso. Test al giorno 8 per il benchmark.',
        '<strong>Settimana 3-4 (Velocità graduale):</strong> Passa a 15 minuti al giorno. Prova a scrivere senza guardare. La velocità scenderà del 10-20%, ma è proprio questo il punto: nuovi schemi neurali. Test al giorno 22.',
        '<strong>Settimana 5-8 (Costanza):</strong> 20 minuti al giorno. Alterna: 10 minuti di digitazione naturale (email reali, documenti) + 10 minuti di test. Aspettati un miglioramento di 5-8 WPM a settimana. Test settimanali.',
        '<strong>Settimana 9-12 (Specializzazione):</strong> Concentrati sulle tue parole problematiche. I programmatori esercitano i simboli. Gli scrittori esercitano la punteggiatura. 15-20 minuti al giorno sono ora sufficienti.',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Metrica di progresso realistica:</strong> Da 50 a 80 WPM richiede 4-6 settimane. Da 80 a 120 WPM richiede 8-12 settimane. Oltre i 120 WPM, ogni WPM aggiuntivo richiede una dedizione quasi professionale (1-2 ore di allenamento quotidiano).',
    },
    {
      type: 'title',
      text: 'Dovrei Confrontare il mio WPM con gli Altri o con me Stesso?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La psicologia della prestazione sportiva (applicabile alla digitazione) ha scoperto che il <strong>confronto sociale può essere controproducente</strong>. Confrontarsi sempre con i campioni causa un rapido abbandono. I migliori atleti competono contro i propri record.',
    },
    {
      type: 'paragraph',
      html: 'Questo test salva automaticamente il tuo miglior risultato. Quello è il tuo punto di riferimento. Ogni sessione, batti il TUO record precedente, non i concorrenti. La ricerca di Stanford ha dimostrato che questa psicologia aumenta la motivazione del 40% in più rispetto alla competizione diretta.',
    },
    {
      type: 'paragraph',
      html: 'Vuoi ancora condividere con gli amici? Il pulsante di condivisione crea un risultato visivo che puoi copiare su WhatsApp/Twitter. Ma ricorda: un amico a 120 WPM probabilmente si è allenato per 6 mesi. Tu sei alla settimana 2. Confrontati con te stesso della settimana 2 nel futuro, non con la loro settimana 26.',
    },
    {
      type: 'title',
      text: 'Quanto è Accurato questo Test Rispetto ad Altri Test Online?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'accuratezza del test di digitazione dipende da <strong>dove viene misurato</strong> e <strong>quando</strong>. Questo test viene eseguito al 100% localmente nel tuo browser, nessun dato viene inviato al server. Vantaggi critici:',
    },
    {
      type: 'list',
      items: [
        '<strong>Nessuna latenza di rete:</strong> Test online come Typing.com risentono di una latenza di 50-200ms a seconda della connessione. Qui: 0ms.',
        '<strong>Timestamp con precisione al millisecondo:</strong> Il browser misura esattamente quando viene premuto ogni tasto, senza ritardi del server',
        '<strong>Standard WPM certificato:</strong> Utilizza la formula ufficiale: (caratteri totali / 5) / minuti - errori/minuti',
        '<strong>Validazione dei tasti premuti:</strong> Alcuni test online accettano il copia-incolla. Questo test accetta SOLO input reali da tastiera',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Nota:</strong> Paragonabile a TypeRacer, Monkeytype o Keybr.com per accuratezza. Meglio di Typing.com per la latenza, simile alle alternative offline.',
    },
    {
      type: 'title',
      text: 'Chi Dovrebbe Usare questo Test di Scrittura',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Programmatori e ingegneri:</strong> Scrivere codice a 50 WPM è inefficiente. Uno sviluppatore a oltre 100 WPM scrive il doppio del codice per sessione. Alto ROI per stipendi senior.',
        '<strong>Giornalisti e copywriter:</strong> Scrivere articoli è per il 70% digitazione. Migliorare da 60 a 100 WPM significa 40 articoli in più all\'anno = +15.000 € di reddito freelance.',
        '<strong>Avvocati e notai:</strong> I documenti legali sono critici. Scrivere contratti a 40 WPM = 1,5 ore. A 100 WPM = 20 minuti. Differenza: +200 €/documento.',
        '<strong>Studenti (soprattutto esami universitari):</strong> I limiti di tempo sono fondamentali. 120 WPM ti permettono di scrivere saggi completi senza stress. 40 WPM = 3 pagine incomplete = -1 voto.',
        '<strong>Trascrittori e segretari:</strong> La digitazione è al 100% il tuo lavoro. Passare da 70 a 120 WPM garantisce virtualmente promozioni e aumenti.',
        '<strong>Giocatori competitivi (esports):</strong> Molti giochi necessitano di chat veloce (CS2, Valorant). 100+ WPM = vantaggio tattico in chat.',
      ],
    },
    {
      type: 'title',
      text: 'Timeline Realistica: Quanto Tempo ci Vuole per Migliorare il WPM',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I test di digitazione in genere mostrano una progressione in questa timeline (con 15-20 minuti di pratica focalizzata giornaliera):',
    },
    {
      type: 'list',
      items: [
        '<strong>Settimana 1:</strong> Nessun cambiamento visibile (riprogrammazione cerebrale)',
        '<strong>Settimana 2-3:</strong> +5 WPM (primi cambiamenti neurali)',
        '<strong>Settimana 4-8:</strong> +3-5 WPM a settimana (curva di apprendimento accelerata)',
        '<strong>Settimana 9-12:</strong> +2-3 WPM a settimana (piccolo plateau)',
        '<strong>Mese 4-6:</strong> +1-2 WPM a settimana (rendimenti decrescenti)',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>In sintesi:</strong>',
    },
    {
      type: 'list',
      items: [
        'Da 40 a 70 WPM: 4-6 settimane (pratica quotidiana)',
        'Da 70 a 100 WPM: 8-12 settimane',
        'Da 100 a 150+ WPM: 4-6 mesi (richiede un allenamento molto mirato)',
      ],
    },
    {
      type: 'paragraph',
      html: '<em>Il fattore chiave è la COSTANZA, non l\'intensità. 10 minuti al giorno battono 2 ore ogni 2 settimane. Il cervello impara tramite la ripetizione spaziata, non le maratone.</em>',
    },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
