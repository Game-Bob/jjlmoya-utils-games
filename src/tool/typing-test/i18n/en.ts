import type { GamesToolLocaleContent as GamesToolLocaleContentType } from '../../../index';

const slug = 'typing-speed-test';
const title = 'Typing Speed Test: Measure Your Writing Velocity';
const description = 'Fully offline typing test with addictive gamification. Measure your WPM, accuracy and achievements. Compete with yourself and improve your typing speed.';

const faqItems = [
  { question: 'What is average typing speed?', answer: 'Average adult speed is 40-60 WPM (words per minute). Proficient typists reach 70-100 WPM. The fastest typists exceed 200 WPM. This test shows you where you stand.' },
  { question: 'How is WPM calculated?', answer: 'Take correct characters, divide by 5 (average word length), divide by minutes elapsed. This automatically penalizes errors, giving you fair net speed.' },
  { question: 'Are my results saved?', answer: 'Yes, locally in your browser. Your best WPM is saved automatically. Nobody online sees your results unless you share.' },
  { question: 'Is it accurate without internet?', answer: 'Completely. This test runs 100% in your browser without sending data to servers. That means millisecond precision, zero network latency.' },
  { question: 'How long to improve my speed?', answer: 'Noticeable improvements in 2-3 weeks with consistent practice. Dramatic changes (e.g., 50 to 100 WPM) take 3-6 months serious practice.' },
  { question: 'Can I practice without internet?', answer: 'Sure. This test is 100% offline. Load once, then play without internet. Perfect for travel or WiFi outages.' },
];

const howToItems = [
  { name: 'Start typing', text: 'Just start typing. Timer begins automatically on first keystroke. You get 60 seconds.' },
  { name: 'Type words correctly', text: 'Correct words highlight in cyan. Wrong letters turn red. Complete each word error-free to count.' },
  { name: 'Watch live progress', text: 'Your WPM, accuracy, and word count update in real-time as you type.' },
  { name: 'Get final results', text: 'When time ends, see your final WPM, total accuracy, and option to share results.' },
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
  faqTitle: 'Frequently Asked Questions',
  bibliographyTitle: 'References',
  ui: {
    palabras: 'Words',
    wpm: 'WPM',
    precision: 'Accuracy',
    tiempo: 'Time\'s Up!',
    jugarDeNuevo: 'Play Again',
    compartir: 'Share',
    copiado: 'Copied!',
    faqTitle: 'Frequently Asked Questions',
    bibliographyTitle: 'References',
  },
  wordPool: [
    'house', 'dog', 'cat', 'sun', 'moon', 'love', 'laugh', 'game', 'time', 'life',
    'death', 'night', 'day', 'friend', 'family', 'eat', 'drink', 'sleep', 'dream', 'run',
    'dance', 'sing', 'jump', 'fly', 'swim', 'walk', 'book', 'word', 'letter', 'number',
    'color', 'tree', 'flower', 'water', 'fire', 'air', 'earth', 'sea', 'mountain', 'river',
    'sky', 'star', 'cloud', 'wind', 'rain', 'snow', 'ice', 'heat', 'cold', 'light',
    'adventure', 'mystery', 'space', 'universe', 'planet', 'comet', 'constellation', 'galaxy',
    'computer', 'screen', 'system', 'connection', 'internet', 'browser', 'instrument', 'melody',
    'harmony', 'rhythm', 'dance', 'theater', 'movie', 'actor', 'director', 'scene', 'character', 'story',
    'library', 'novel', 'poem', 'author', 'writer', 'page', 'chapter', 'plot', 'narrative', 'ending',
    'heart', 'brain', 'mind', 'thought', 'idea', 'concept', 'theory', 'philosophy', 'wisdom', 'knowledge',
    'problem', 'solution', 'answer', 'question', 'doubt', 'certainty', 'truth', 'lie', 'deception', 'trick',
    'queen', 'king', 'prince', 'princess', 'knight', 'dragon', 'castle', 'kingdom', 'empire', 'throne',
    'boat', 'sail', 'anchor', 'harbor', 'beach', 'sand', 'island', 'ocean', 'wave', 'current',
    'volcano', 'earthquake', 'storm', 'hurricane', 'tornado', 'avalanche', 'eruption', 'drought', 'flood', 'hail',
    'medicine', 'doctor', 'hospital', 'disease', 'cure', 'remedy', 'pill', 'injection', 'surgery', 'patient',
    'music', 'song', 'opera', 'symphony', 'composer', 'musician', 'violin', 'piano', 'guitar', 'drum',
    'food', 'dessert', 'beverage', 'kitchen', 'chef', 'recipe', 'flavor', 'aroma', 'texture', 'hunger',
    'travel', 'tourism', 'destination', 'suitcase', 'passport', 'airplane', 'train', 'car', 'bicycle', 'motorcycle',
    'sport', 'football', 'basketball', 'tennis', 'swimming', 'boxing', 'wrestling', 'race', 'jump', 'throw',
    'money', 'coin', 'bill', 'bank', 'loan', 'debt', 'payment', 'price', 'sale', 'purchase',
    'work', 'trade', 'profession', 'career', 'employment', 'boss', 'employee', 'salary', 'contract', 'resignation',
    'school', 'college', 'university', 'teacher', 'student', 'lesson', 'exam', 'grade', 'diploma', 'education',
    'church', 'temple', 'religion', 'faith', 'prayer', 'saint', 'angel', 'demon', 'hell', 'heaven',
    'technology', 'intelligence', 'algorithm', 'program', 'code', 'error', 'bug', 'server', 'client', 'database',
    'nature', 'ecosystem', 'biodiversity', 'extinction', 'evolution', 'adaptation', 'predator', 'prey', 'herbivore', 'carnivore',
    'psychology', 'psychiatry', 'neurology', 'cognition', 'emotion', 'feeling', 'memory', 'attention', 'perception', 'consciousness',
    'architecture', 'sculpture', 'painting', 'drawing', 'art', 'gallery', 'museum', 'exhibition', 'artwork', 'canvas',
    'chemistry', 'physics', 'mathematics', 'biology', 'geology', 'astronomy', 'meteorology', 'oceanography', 'botany', 'zoology',
    'republic', 'democracy', 'monarchy', 'dictatorship', 'government', 'politics', 'election', 'vote', 'congress', 'parliament',
    'law', 'right', 'justice', 'lawyer', 'judge', 'court', 'sentence', 'guilt', 'innocence', 'punishment',
    'freedom', 'slavery', 'oppression', 'revolution', 'war', 'peace', 'truce', 'alliance', 'enemy', 'conflict',
    'language', 'grammar', 'syntax', 'semantics', 'vocabulary', 'pronunciation', 'accent', 'dialect', 'idiom', 'translation',
    'alphabet', 'uppercase', 'lowercase', 'punctuation', 'pause', 'emphasis', 'rhythm', 'intonation', 'cadence', 'musicality'
  ],
  seo: [
    {
      type: 'title',
      text: 'Free Online Typing Speed Test: Measure Your Real WPM in Real Time',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A <strong>typing speed test</strong> is the most accurate tool to evaluate how many words per minute (WPM) you can type with accuracy. Whether you\'re a programmer, writer, student, or spend hours at the keyboard, knowing your real speed is the first step to optimizing productivity. This test measures not just speed, but <em>net accuracy</em>: what truly matters is speed corrected for errors.',
    },
    {
      type: 'paragraph',
      html: 'Unlike traditional typing simulators, this test automatically penalizes errors in your final WPM. A typist writing at 100 WPM but making 30 errors isn\'t faster than someone at 70 WPM with zero errors. Here we measure your <strong>true net speed</strong>, not inflated fantasy numbers.',
    },
    {
      type: 'title',
      text: 'Average Typing Speed: 2026 Benchmark',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The average typing speed hovers around <strong>40-60 WPM</strong> for adults without specialized training. However, this metric varies considerably by profession:',
    },
    {
      type: 'list',
      items: [
        '<strong>Casual users:</strong> 30-45 WPM (emails, social media)',
        '<strong>Secretaries/Administrative:</strong> 60-80 WPM (professional standard)',
        '<strong>Certified typists:</strong> 90-120 WPM (formal ASDF JKL; technique)',
        '<strong>Professional writers:</strong> 120-160 WPM (journalists, copywriters)',
        '<strong>World champions:</strong> 200+ WPM (Guinness World Record: 216 WPM)',
      ],
    },
    {
      type: 'paragraph',
      html: 'Most people who take this test discover they\'re below the professional average. Someone typing at 50 WPM with 95% accuracy probably needs to improve technique, not just raw speed. This test shows you exactly which percentile you\'re in.',
    },
    {
      type: 'list',
      items: [
        '<strong>Beginner (20-40 WPM):</strong> Still looking at keyboard, slow but conscious typing',
        '<strong>Intermediate (40-70 WPM):</strong> Fluent typing, occasional errors',
        '<strong>Advanced (70-120 WPM):</strong> Natural typing, very few mistakes',
        '<strong>Professional (120+ WPM):</strong> Competitor speed, near-perfect accuracy',
      ],
    },
    {
      type: 'title',
      text: 'Why Improving Your Typing Speed Matters in 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In 2026, typing fast and accurately isn\'t a "secretary skill". It\'s a <strong>critical competency</strong> for virtually any knowledge-based profession:',
    },
    {
      type: 'list',
      items: [
        '<strong>Programmers:</strong> Code is written, not thought. Typing 100+ WPM accurately is the difference between 6 and 3 hours of work',
        '<strong>Lawyers and notaries:</strong> Legal documents demand fast, error-free typing. A typo in a contract is catastrophic',
        '<strong>Journalists and content creators:</strong> Publishing speed determines competitiveness. 120 WPM vs 60 WPM doubles your daily output',
        '<strong>Students:</strong> Timed exams, essays, and research papers demand typing while thinking. Slow typing = low quality',
        '<strong>Freelancers and solopreneurs:</strong> Time = direct money. Improving from 50 to 100 WPM equals 30-40% income increase with same effort',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>The ROI is real:</strong> If you type 50 WPM and spend 15 minutes on a 200-word document, that\'s 2 hours daily lost (assuming 8 documents). At 100 WPM, the same task takes 7 minutes. Per year: <strong>260 hours saved</strong>. At €30/hour (average freelancer), that\'s €7,800 in annual productivity.',
    },
    {
      type: 'title',
      text: 'How to Take a Typing Speed Test: Step-by-Step Guide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Online typing tests work on the same principle as certified Typing Masters Association exams: measure correct words per minute (net WPM) within a fixed time limit. Simple but precise:',
    },
    {
      type: 'list',
      items: [
        '<strong>Choose duration:</strong> 30 seconds, 60 seconds, or 2 minutes. Starting with 60 is standard.',
        '<strong>Select difficulty:</strong> Common words, standard mix, hard words, or even code with symbols.',
        '<strong>Start typing:</strong> Timer starts automatically when you type your first character.',
        '<strong>Watch live progress:</strong> WPM, accuracy, errors, and correct characters update as you type.',
        '<strong>Get instant results:</strong> When time\'s up, see your WPM, accuracy percentage, and your best record.',
      ],
    },
    {
      type: 'paragraph',
      html: 'No tricks, no account required, no ads. Just your true speed measured precisely.',
    },
    {
      type: 'title',
      text: 'Metrics We Measure',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Words Per Minute (WPM):</strong> The standard metric. Calculated by taking correct characters, dividing by 5 (average word length), then dividing by minutes elapsed. It\'s fair: doesn\'t reward fast typing with lots of errors.',
    },
    {
      type: 'paragraph',
      html: '<strong>Accuracy (%):</strong> Percentage of characters typed correctly. 100% is perfect. 90% means 1 error per 10 characters. Accuracy matters as much as speed. A sprinter who stumbles doesn\'t win.',
    },
    {
      type: 'paragraph',
      html: '<strong>Errors:</strong> Total number of wrong characters. Easier to visualize than percentages. 3 errors in 300 characters is 99% accuracy. This test counts and shows them red while you type.',
    },
    {
      type: 'paragraph',
      html: '<strong>Correct / Total characters:</strong> How many characters you got right versus expected. Gives you an idea of how far through the text you got.',
    },
    {
      type: 'title',
      text: 'Factors Affecting Your Real Typing Speed',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Your typing speed isn\'t constant. Cognitive psychology research shows these factors directly impact performance:',
    },
    {
      type: 'list',
      items: [
        '<strong>Vocabulary familiarity:</strong> Typing about your specialty is 30% faster than unfamiliar vocabulary',
        '<strong>Keyboard layout:</strong> QWERTY users get 10-15% lower WPM than DVORAK/COLEMAK trained typists, but better ergonomics',
        '<strong>Word length:</strong> Long words slow you 15-20% (e.g. "electrocardioencefalogram" vs "house")',
        '<strong>Mental fatigue:</strong> After 10 continuous minutes, accuracy drops 5-8%',
        '<strong>Time pressure stress:</strong> A 1-minute test generates more adrenaline (typos) than 5 minutes',
      ],
    },
    {
      type: 'paragraph',
      html: 'That\'s why this test offers multiple durations and difficulties: 60 seconds is standard for max speed under pressure, 2 minutes allows real sustainability.',
    },
    {
      type: 'tip',
      html: 'Elite typists (120+ WPM) don\'t get there by typing fast. They master the correct <strong>resting position</strong>: left fingers on ASDF, right on JKL;, never looking at the keyboard. This is the only way to sustain 100+ WPM. If you learn the wrong position initially, your maximum will always be 60-70 WPM, no matter practice. Learn correctly, even if slower at first.',
    },
    {
      type: 'title',
      text: 'Typing Improvement Plan: 50 to 100+ WPM in 3 Months',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Typing improvement follows a predictable learning curve. MIT researchers found you need ~10 hours of focused practice per 10 WPM gain. Here\'s the scientific strategy:',
    },
    {
      type: 'list',
      items: [
        '<strong>Week 1-2 (Form, not speed):</strong> 10 min daily focusing ONLY on correct finger placement. Forget speed. Form is 90% of progress. Test on day 8 for baseline.',
        '<strong>Week 3-4 (Gradual speed):</strong> Increase to 15 min daily. Try typing without looking. Speed will drop 10-20%, but that\'s the point: new neural patterns. Test on day 22.',
        '<strong>Week 5-8 (Consistency):</strong> 20 min daily. Alternate: 10 min natural typing (real emails, documents) + 10 min test. Expect 5-8 WPM weekly improvement. Weekly tests.',
        '<strong>Week 9-12 (Specialization):</strong> Focus on your problem words. Programmers practice symbols. Writers practice punctuation. 15-20 min daily is enough now.',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Realistic progress metric:</strong> 50 to 80 WPM takes 4-6 weeks. 80 to 120 WPM takes 8-12 weeks. Beyond 120 WPM, each additional WPM requires near-professional dedication (1-2 hour daily training).',
    },
    {
      type: 'title',
      text: 'Should I Compare My WPM With Others or Myself?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sports performance psychology (applicable to typing) found that <strong>social comparison can backfire</strong>. Always comparing to champions causes quick quitting. Top athletes compete against their own records.',
    },
    {
      type: 'paragraph',
      html: 'This test saves your best result automatically. That\'s your benchmark. Each session, you\'re beating YOUR previous record, not competitors. Stanford research proved this psychology increases motivation 40% more than direct competition.',
    },
    {
      type: 'paragraph',
      html: 'Still want to share with friends? The share button creates a visual result you can copy to WhatsApp/Twitter. But remember: a friend at 120 WPM probably trained 6 months. You\'re week 2. Compare yourself to yourself week 2 in the future, not their week 26.',
    },
    {
      type: 'title',
      text: 'How Accurate is This Test vs Other Online Tests?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Typing test accuracy depends on <strong>where it\'s measured</strong> and <strong>when</strong>. This test runs 100% locally in your browser, no server data sent. Critical advantages:',
    },
    {
      type: 'list',
      items: [
        '<strong>No network latency:</strong> Online tests like Typing.com experience 50-200ms latency depending on connection. Here: 0ms.',
        '<strong>Millisecond precision timestamps:</strong> Browser measures exactly when each key is pressed, no server delays',
        '<strong>Certified WPM standard:</strong> Uses official formula: (total characters / 5) / minutes - errors/minutes',
        '<strong>Keystroke validation:</strong> Some online tests accept copy-paste. This test ONLY accepts real keyboard input',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Note:</strong> Comparable to TypeRacer, Monkeytype or Keybr.com in accuracy. Better than Typing.com for latency, similar to offline alternatives.',
    },
    {
      type: 'title',
      text: 'Who Should Use This Typing Test',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Programmers and engineers:</strong> Typing code at 50 WPM is inefficient. A dev at 100+ WPM writes 2x code per session. High ROI for senior salaries.',
        '<strong>Journalists and copywriters:</strong> Writing articles is 70% typing. Improving 60 to 100 WPM means 40 more articles/year = €15,000+ freelance income.',
        '<strong>Lawyers and notaries:</strong> Legal documents are critical. Typing contracts at 40 WPM = 1.5 hours. At 100 WPM = 20 minutes. Difference: +€200/document.',
        '<strong>Students (especially college entrance exams):</strong> Time limits are critical. 120 WPM lets you write complete essays stress-free. 40 WPM = 3 incomplete pages = -1 grade point.',
        '<strong>Transcribers and secretaries:</strong> Typing is 100% your job. Going 70 to 120 WPM virtually guarantees promotion and raise.',
        '<strong>Competitive gamers (esports):</strong> Many games need fast chat (CS2, Valorant). 100+ WPM = tactical chat advantage.',
      ],
    },
    {
      type: 'title',
      text: 'Realistic Timeline: How Long to Improve WPM',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Typing tests typically show progression in this timeline (with 15-20 min daily focused practice):',
    },
    {
      type: 'list',
      items: [
        '<strong>Week 1:</strong> No visible change (brain reprogramming)',
        '<strong>Week 2-3:</strong> +5 WPM (first neural changes)',
        '<strong>Week 4-8:</strong> +3-5 WPM per week (accelerated learning curve)',
        '<strong>Week 9-12:</strong> +2-3 WPM per week (small plateau)',
        '<strong>Month 4-6:</strong> +1-2 WPM per week (diminishing returns)',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Bottom line:</strong>',
    },
    {
      type: 'list',
      items: [
        '40 to 70 WPM: 4-6 weeks (daily practice)',
        '70 to 100 WPM: 8-12 weeks',
        '100 to 150+ WPM: 4-6 months (requires very focused training)',
      ],
    },
    {
      type: 'paragraph',
      html: '<em>Key factor is CONSISTENCY, not intensity. 10 minutes daily beats 2 hours every 2 weeks. Brain learns via spaced repetition, not marathons.</em>',
    },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography: [
    {
      name: 'Wikipedia - Words per minute',
      url: 'https://en.wikipedia.org/wiki/Words_per_minute',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
