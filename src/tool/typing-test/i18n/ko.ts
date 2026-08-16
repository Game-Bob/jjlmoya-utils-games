import { bibliography } from '../bibliography';
import type { GamesToolLocaleContent as GamesToolLocaleContentType } from '../../../index';

const slug = 'typing-speed-test';
const title = '타자 속도 테스트: 당신의 타자 실력을 측정해보세요';
const description = '완전 오프라인 기반의 게임화된 타자 연습 도구입니다. WPM(분당 단어 수), 정확도, 성취도를 측정하고 어제보다 더 빠른 타자 속도에 도전해보세요.';

const faqItems = [
  { question: '평균적인 타자 속도는 어느 정도인가요?', answer: '성인의 평균 속도는 40-60 WPM(분당 단어 수)입니다. 숙련된 타자 사용자는 70-100 WPM에 도달하며, 전문가 수준은 200 WPM을 넘기도 합니다. 이 테스트로 현재 실력을 확인해보세요.' },
  { question: 'WPM은 어떻게 계산되나요?', answer: '입력한 총 글자 수를 5(평균 단어 길이)로 나누고, 이를 경과 시간(분)으로 나눕니다. 오타는 자동으로 감점 처리되어 공정한 순수 타자 속도를 제공합니다.' },
  { question: '테스트 결과가 저장되나요?', answer: '네, 브라우저의 로컬 저장소에 저장됩니다. 최고 기록인 WPM은 자동으로 기록되며, 사용자가 직접 공유하지 않는 한 온라인에 노출되지 않습니다.' },
  { question: '인터넷 연결 없이도 정확한가요?', answer: '매우 정확합니다. 100% 브라우저 내에서 실행되며 서버로 데이터를 전송하지 않습니다. 밀리초 단위의 정밀도를 보장하며 네트워크 지연이 전혀 없습니다.' },
  { question: '얼마나 연습해야 실력이 늘까요?', answer: '꾸준히 연습하면 2~3주 안에 눈에 띄는 향상을 경험할 수 있습니다. 50 WPM에서 100 WPM과 같은 비약적인 발전은 3~6개월의 집중적인 연습이 필요합니다.' },
  { question: '오프라인 환경에서도 연습할 수 있나요?', answer: '네. 이 도구는 완전 오프라인을 지원합니다. 한 번 로드하면 인터넷 없이도 언제 어디서나 연습할 수 있어 여행 중에도 유용합니다.' },
];

const howToItems = [
  { name: '입력 시작', text: '화면에 보이는 단어를 입력하기 시작하면 타이머가 자동으로 작동합니다. 제한 시간은 60초입니다.' },
  { name: '정확한 입력', text: '맞게 입력한 글자는 청록색으로, 틀린 글자는 빨간색으로 표시됩니다. 단어 단위로 정확히 입력해야 점수로 인정됩니다.' },
  { name: '실시간 현황 확인', text: '입력하는 동안 WPM, 정확도, 완료한 단어 수가 실시간으로 업데이트됩니다.' },
  { name: '최종 결과 확인', text: '시간이 종료되면 최종 WPM과 정확도를 확인하고 기록을 공유할 수 있습니다.' },
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
    words: '단어',
    wpm: 'WPM',
    accuracy: '정확도',
    timeUp: '시간 종료!',
    playAgain: '다시 하기',
    share: '공유하기',
    copied: '복사 완료!',
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
      text: '무료 타자 속도 테스트: 실시간 WPM 측정 및 정확도 분석',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>타자 속도 테스트</strong>는 1분당 정확하게 입력할 수 있는 단어 수(WPM)를 평가하는 가장 정밀한 도구입니다. 개발자, 작가, 학생은 물론 키보드 사용 시간이 많은 현대인에게 자신의 실제 속도를 아는 것은 생산성 향상의 첫걸음입니다. 이 테스트는 단순한 속도뿐만 아니라 오타를 제외한 <em>순수 정확도</em>를 측정합니다.',
    },
    {
      type: 'paragraph',
      html: '일반적인 타자 연습기와 달리, 본 테스트는 최종 WPM에서 오타에 대한 감점을 자동으로 진행합니다. 100 WPM으로 입력하면서 30개의 오타를 내는 것보다 오타 없이 70 WPM으로 입력하는 것이 훨씬 더 효율적이기 때문입니다. 여기에서 꾸며진 숫자가 아닌 <strong>당신의 진짜 실력</strong>을 확인하세요.',
    },
    {
      type: 'title',
      text: '타자 속도 평균: 2026년 벤치마크',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '별도의 전문 훈련을 받지 않은 성인의 평균 타자 속도는 약 <strong>40-60 WPM</strong>입니다. 하지만 직업군에 따라 이 수치는 크게 달라집니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>일반 사용자:</strong> 30-45 WPM (이메일, SNS 등)',
        '<strong>사무/행정직:</strong> 60-80 WPM (전문가 표준 수준)',
        '<strong>전문 타자 타이피스트:</strong> 90-120 WPM (ASDF 정석 타법 마스터)',
        '<strong>전문 작가/기자:</strong> 120-160 WPM (빠른 원고 작성 능력)',
        '<strong>세계 챔피언급:</strong> 200+ WPM (기네스 세계 기록: 216 WPM)',
      ],
    },
    {
      type: 'paragraph',
      html: '대부분의 사용자가 테스트 후 자신이 전문가 평균보다 낮다는 점을 발견합니다. 95% 정확도에 50 WPM 수준이라면 무작정 속도를 높이기보다 올바른 타법 연습이 선행되어야 합니다. 이 테스트는 현재 당신이 어느 위치에 있는지 정확히 보여줍니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>초보자 (20-40 WPM):</strong> 키보드를 간간히 확인하며 입력하는 단계',
        '<strong>중급자 (40-70 WPM):</strong> 원활한 입력이 가능하나 가끔 오타가 발생하는 단계',
        '<strong>상급자 (70-120 WPM):</strong> 자연스러운 입력과 매우 낮은 오타율을 보이는 단계',
        '<strong>전문가 (120+ WPM):</strong> 경쟁적인 속도와 완벽에 가까운 정확도를 갖춘 단계',
      ],
    },
    {
      type: 'title',
      text: '2026년, 타자 속도가 왜 중요한가',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '2026년 현재, 빠르고 정확한 타자 실력은 단순한 사무 보조 기술이 아닙니다. 모든 지식 기반 전문직에게 <strong>치명적인 경쟁력</strong>입니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>프로그래머:</strong> 코드는 생각의 도구입니다. 100+ WPM의 정밀한 타자는 6시간 작업을 3시간으로 단축시킵니다.',
        '<strong>법률 전문가:</strong> 법적 문서는 신속함과 정확성이 생명입니다. 계약서의 오타 하나는 심각한 문제를 야기할 수 있습니다.',
        '<strong>콘텐츠 크리에이터:</strong> 발행 속도가 경쟁력입니다. 타자 속도가 2배 빠르면 일일 생산량도 2배가 됩니다.',
        '<strong>학생:</strong> 제한 시간이 있는 시험이나 논문 작성 시 생각과 동시에 글을 써야 합니다. 느린 타자는 품질 저하로 이어집니다.',
        '<strong>프리랜서:</strong> 시간은 곧 돈입니다. 50 WPM에서 100 WPM으로 실력을 키우는 것은 수익을 30-40% 올리는 효과가 있습니다.',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>매우 높은 투자 가치:</strong> 50 WPM인 사람이 200단어 문서를 작성하는 데 15분이 걸린다면, 매일 2시간 이상을 낭비하게 됩니다. 100 WPM이라면 7분이면 충분합니다. 이는 연간 <strong>260시간의 여유</strong>를 제공합니다.',
    },
    {
      type: 'title',
      text: '테스트 진행 가이드: 단계별 안내',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '본 테스트는 국제 표준인 단어 수(Net WPM)를 기준으로 측정됩니다. 사용 방법은 매우 간단하지만 결과는 정교합니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>시간 선택:</strong> 30초, 60초, 2분 중 원하는 시간을 선택하세요. 60초가 표준입니다.',
        '<strong>난이도 조절:</strong> 기본 단어부터 기호가 포함된 복잡한 문장까지 선택 가능합니다.',
        '<strong>입력 개시:</strong> 첫 번째 키를 누르는 순간 타이머가 시작됩니다.',
        '<strong>실시간 체크:</strong> WPM, 정확도, 오타 수가 실시간으로 화면에 표시됩니다.',
        '<strong>즉각적인 결과:</strong> 종료 후 종합 분석 결과와 최고 기록을 확인하세요.',
      ],
    },
    {
      type: 'paragraph',
      html: '가입이나 로그인이 필요 없으며 광고도 없습니다. 오직 당신의 실력을 측정하는 데 집중하세요.',
    },
    {
      type: 'title',
      text: '측정 기준 및 지표',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>WPM (Words Per Minute):</strong> 국제 표준 지표입니다. (총 타수 / 5) / 경과 시간으로 계산하며 오타를 낸 경우 해당 분량만큼 차감됩니다.',
    },
    {
      type: 'paragraph',
      html: '<strong>정확도 (%):</strong> 전체 입력 값 중 올바르게 입력한 비율입니다. 100%는 완벽함을 의미합니다.',
    },
    {
      type: 'paragraph',
      html: '<strong>오타 현황:</strong> 잘못 입력한 글자의 총수입니다. 테스트 도중 빨간색으로 표시되어 즉시 인지할 수 있습니다.',
    },
    {
      type: 'title',
      text: '실제 타자 속도에 영향을 미치는 요인들',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '타자 속도는 환경에 따라 달라질 수 있습니다. 연구에 따르면 다음 요소들이 성과에 영향을 미칩니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>어휘 익숙도:</strong> 자신이 잘 아는 분야의 단어는 모르는 단어보다 30% 더 빨리 입력할 수 있습니다.',
        '<strong>키보드 배열:</strong> 일반적인 쿼티(QWERTY) 배열과 인체공학적 배열에 따라 피로도와 속도 차이가 발생합니다.',
        '<strong>단어의 길이:</strong> 긴 단어가 포함될수록 리듬이 깨져 속도가 15-20% 감소할 수 있습니다.',
        '<strong>정신적 피로:</strong> 10분 이상 연속으로 타자를 칠 경우 정확도가 5-8% 하락하는 경향이 있습니다.',
      ],
    },
    {
      type: 'tip',
      html: '최상위권 사용자(120+ WPM)는 단순히 손을 빨리 움직이는 것이 아니라 <strong>기본 위치(Home Position)</strong>를 엄격히 지킵니다. 왼쪽 손가락은 ASDF, 오른쪽은 JKL;에 두고 키보드를 보지 않는 습관이 100 WPM을 넘는 유일한 방법입니다.',
    },
    {
      type: 'title',
      text: '상위 1%를 향한 3개월 훈련 계획',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '타자 실력 향상에도 과학적인 접근이 필요합니다. MIT 연구에 따르면 10 WPM 향상에 약 10시간의 집중 훈련이 필요합니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>1-2주차 (자세 교정):</strong> 속도보다는 오직 손가락의 위치와 리듬에만 집중하세요. 올바른 자세가 향후 발전을 결정합니다.',
        '<strong>3-4주차 (탈키보드 연습):</strong> 키보드를 아예 보지 않고 치는 연습을 하세요. 일시적으로 속도는 떨어지지만 뇌에 새로운 신경망이 형성되는 과정입니다.',
        '<strong>5-8주차 (일관성 유지):</strong> 매일 20분씩 투자하세요. 실제 문서 작성과 병행하며 테스트를 치르면 매주 5-8 WPM씩 성장하는 것을 볼 수 있습니다.',
        '<strong>9-12주차 (특수 훈련):</strong> 자주 틀리는 단어나 기호, 숫자를 집중 훈련하여 마무리 완성도를 높이세요.',
      ],
    },
    {
      type: 'paragraph',
      html: '중요한 것은 "꾸준함"입니다. 한 번에 2시간 연습하는 것보다 매일 10분씩 연습하는 것이 뇌의 반복 학습 효과를 극대화합니다.',
    },
    { type: 'title', text: '매일 연습하는 방법', level: 2 },
    { type: 'paragraph', html: '짧은 시간이라도 매일 연습하면 손가락의 움직임이 안정됩니다. 몇 주에 한 번 긴 시간 연습하는 것보다 집중해서 10분씩 반복하는 편이 효과적입니다.' },
    { type: 'paragraph', html: '처음에는 속도보다 정확도를 우선하세요. 오타가 나는 키 조합을 따로 연습하면 실제 작업에서도 실수가 줄어듭니다.' },
    { type: 'title', text: '편안한 자세와 키보드 사용', level: 2 },
    { type: 'paragraph', html: '어깨에 힘을 빼고 손목을 자연스럽게 유지하며, 화면은 눈높이에 맞추세요. 통증이 생기면 즉시 쉬어야 합니다.' },
    { type: 'paragraph', html: '키를 세게 누르지 말고 손가락을 홈 포지션으로 돌아오게 하세요. 가벼운 움직임은 피로를 줄이고 일정한 속도를 유지하는 데 도움이 됩니다.' },
    { type: 'title', text: '실전 입력 능력 키우기', level: 2 },
    { type: 'paragraph', html: '연습 문장에 일반 문장뿐 아니라 숫자, 기호, 문장 부호를 포함하세요. 프로그래밍이나 업무 문서를 입력할 때 필요한 움직임을 함께 익힐 수 있습니다.' },
    { type: 'paragraph', html: '한 번의 최고 기록보다 여러 번 반복했을 때의 평균 속도를 확인하면 자신의 실제 능력을 더 정확하게 알 수 있습니다.' },
    { type: 'paragraph', html: '연습이 정체되면 시간을 늘리기보다 어려운 단어와 자주 틀리는 조합을 찾아 한 번에 하나씩 개선하세요.' },
    { type: 'title', text: '진행 상황 기록하기', level: 2 },
    { type: 'paragraph', html: '날짜, WPM, 정확도, 실수 유형을 기록하면 작은 향상도 확인할 수 있습니다. 기록은 다음 연습의 목표를 정하는 데 유용합니다.' },
    { type: 'paragraph', html: '피곤하거나 집중이 어려운 날의 점수는 능력을 판단하는 기준으로 사용하지 마세요. 컨디션을 함께 기록하면 결과를 올바르게 해석할 수 있습니다.' },
    { type: 'paragraph', html: '새로운 키보드 배열이나 언어를 사용할 때는 잠시 속도가 떨어지는 것이 정상입니다. 정확한 손가락 위치를 먼저 익히면 다시 회복됩니다.' },
    { type: 'title', text: '건강한 연습 습관', level: 2 },
    { type: 'paragraph', html: '20~30분마다 손가락과 눈을 쉬게 하세요. 올바른 자세와 규칙적인 휴식은 장시간 입력에서 속도보다 더 중요한 기본 조건입니다.' },
    { type: 'paragraph', html: '통증을 참고 기록을 올리려고 하지 마세요. 불편함이 계속되면 연습을 중단하고 필요한 경우 전문가에게 상담받으세요.' },
    { type: 'paragraph', html: '목표는 다른 사람의 점수를 복사하는 것이 아니라, 같은 조건에서 자신의 정확도와 지속 가능한 속도를 조금씩 높이는 것입니다.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
