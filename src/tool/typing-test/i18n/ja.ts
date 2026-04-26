import { bibliography } from '../bibliography';
import type { GamesToolLocaleContent as GamesToolLocaleContentType } from '../../../index';

const slug = 'typing-speed-test';
const title = 'タイピング練習：あなたのタイピング速度を測定しましょう';
const description = 'ゲーム感覚で楽しめる完全オフラインのタイピングテスト。WPM（分間単語数）、正確性、達成度を測定します。自己ベストを更新して、タイピング速度を向上させましょう。';

const faqItems = [
  { question: '平均的なタイピング速度はどれくらいですか？', answer: '成人の平均速度は 40〜60 WPM（分間単語数）です。熟練したタイピストは 70〜100 WPM に達します。最速クラスになると 200 WPM を超えることもあります。このテストで、あなたの現在の立ち位置を確認しましょう。' },
  { question: 'WPM はどのように計算されますか？', answer: '正しく入力された文字数を 5（平均的な単語の長さ）で割り、さらに経過時間（分）で割ります。ミスがあれば自動的に減点されるため、公平な「純粋な速度」が算出されます。' },
  { question: '結果は保存されますか？', answer: 'はい、お使いのブラウザにローカルに保存されます。自己ベストの WPM は自動的に記録されます。あなたが共有しない限り、オンライン上の誰もあなたの結果を見ることはできません。' },
  { question: 'インターネットなしでも正確ですか？', answer: '完全に正確です。このテストはデータをサーバーに送信することなく、100% ブラウザ内で実行されます。つまり、ネットワークの遅延ゼロでミリ秒単位の精度を実現しています。' },
  { question: '上達するのにどれくらいの期間がかかりますか？', answer: '継続的に練習すれば、2〜3 週間で目に見える改善が現れます。劇的な変化（例：50 WPM から 100 WPM）には、3〜6 ヶ月の本格的な練習が必要です。' },
  { question: 'オフラインでも練習できますか？', answer: 'もちろんです。このテストは 100% オフライン対応です。一度読み込めば、インターネットがなくてもプレイできます。旅行中や WiFi が不安定な時でも安心です。' },
];

const howToItems = [
  { name: '入力を開始する', text: 'キーボードを叩き始めると、自動的にタイマーがスタートします。制限時間は 60 秒です。' },
  { name: '正確に入力する', text: '正しい言葉はシアン色で表示され、間違った文字は赤くなります。各単語をミスなく入力し終えるとカウントされます。' },
  { name: '進捗をリアルタイムで確認', text: '入力中、WPM（速度）、正確性、単語数がリアルタイムで更新されます。' },
  { name: '最終結果を確認', text: '終了後、最終的な WPM や正確性が表示されます。結果をシェアすることも可能です。' },
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
    words: '語数',
    wpm: 'WPM',
    accuracy: '正確性',
    timeUp: '終了！',
    playAgain: 'もう一度',
    share: 'シェア',
    copied: 'コピーしました！',
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
      text: '無料タイピングテスト：リアルタイムであなたの正確なWPMを測定',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>タイピングテスト</strong>は、1分間に何語を正確に入力できるか（WPM）を評価する最も正確なツールです。プログラマー、ライター、学生、あるいは仕事で長時間キーボードに触れる方にとって、自分の正確な速度を知ることは生産性向上の第一歩です。このテストは単なる速度だけでなく、「正確性」とそれに基づいた「正味の速度」を測定します。',
    },
    {
      type: 'paragraph',
      html: '一般的なタイピングシミュレーターとは異なり、このテストではミスが最終的な WPM に自動的に減点として反映されます。100 WPM で 30 回ミスをするタイピストは、ミスなしで 70 WPM を出す人よりも「速い」とは言えません。ここでは、水増しされた数字ではなく、<strong>あなたの本当の実力</strong>を測定します。',
    },
    {
      type: 'title',
      text: 'タイピング速度の平均値：2026年最新ベンチマーク',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '特別な訓練を受けていない成人の平均タイピング速度は、<strong>40〜60 WPM</strong> 前後です。ただし、この数値は職業によって大きく異なります。',
    },
    {
      type: 'list',
      items: [
        '<strong>一般ユーザー：</strong> 30〜45 WPM（メール、SNS利用）',
        '<strong>事務・管理職：</strong> 60〜80 WPM（プロとしての標準レベル）',
        '<strong>認定タイピスト：</strong> 90〜120 WPM（正式な指使いをマスターしたレベル）',
        '<strong>プロライター：</strong> 120〜160 WPM（ジャーナリスト、コピーライター）',
        '<strong>世界チャンピオン：</strong> 200+ WPM（ギネス記録：216 WPM）',
      ],
    },
    {
      type: 'paragraph',
      html: 'このテストを受けた多くの人が、自分がプロの平均を下回っていることに気づきます。50 WPM で正確性が 95% の場合、単なる速度練習よりも、基礎となる正確な指運びの改善が必要かもしれません。このテストでは、あなたがどのレベルに位置しているかを明確に示します。',
    },
    {
      type: 'list',
      items: [
        '<strong>初心者 (20〜40 WPM):</strong> キーボードを見ながら、一文字ずつ意識的に入力',
        '<strong>中級者 (40〜70 WPM):</strong> スムーズな入力、時折ミスが発生',
        '<strong>上級者 (70〜120 WPM):</strong> 自然な指運び、ミスが極めて少ない',
        '<strong>プロフェッショナル (120+ WPM):</strong> 競技レベル、ほぼ完璧な正確性',
      ],
    },
    {
      type: 'title',
      text: '2026年、なぜタイピング速度の向上が重要なのか',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '2026年において、速く正確にタイピングできることは単なる「事務スキル」ではありません。あらゆる知識ベースの職業において<strong>必須の競争力</strong>です。',
    },
    {
      type: 'list',
      items: [
        '<strong>プログラマー：</strong> コードは考えるものではなく、書くものです。100 WPM 以上の正確なタイピングは、作業時間を半分に短縮します。',
        '<strong>弁護士・行政書士：</strong> 法律文書は迅速かつ無謬であることが求められます。契約書の誤字脱字は致命的です。',
        '<strong>ジャーナリスト・コンテンツ作成者：</strong> 公開の速さが競争力を左右します。速度が2倍になれば、日々の成果量も2倍になります。',
        '<strong>学生：</strong> 制限時間のある試験やレポート作成では、思考を止めずに書く必要があります。タイピングが遅いと、内容の質も低下します。',
        '<strong>フリーランス：</strong> 時間は直接お金につながります。50 WPM から 100 WPM への向上は、同じ労力で収入を 30〜40% 増やすことと同義です。',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>ROI（投資対効果）は絶大です：</strong> 50 WPM で 200 語の文書に 15 分かかる場合、毎日 2 時間を浪費していることになります。100 WPM なら 7 分で済みます。年間で <strong>260 時間の節約</strong>になり、時給換算すれば大きな経済的利益となります。',
    },
    {
      type: 'title',
      text: 'タイピングテストの受け方：ステップバイステップガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'オンラインタイピングテストは、専門家による認定試験と同じ原理で作られています。制限時間内に入力された「正味の WPM」を測定します。シンプルながら非常に高精度です。',
    },
    {
      type: 'list',
      items: [
        '<strong>時間を選択：</strong> 30秒、60秒、2分から選べます。まずは60秒がおすすめです。',
        '<strong>難易度を選択：</strong> 基本単語、標準、高難易度、記号を含むコードなど。',
        '<strong>入力を開始：</strong> 最初の文字を入力した瞬間にタイマーが作動します。',
        '<strong>リアルタイム更新：</strong> 入力中、WPMや正確性、ミス数が常に表示されます。',
        '<strong>即座に結果を表示：</strong> 終了後、あなたの WPM と自己ベスト、正確性のパーセンテージが表示されます。',
      ],
    },
    {
      type: 'paragraph',
      html: 'アカウント登録も広告もありません。あなたの本当の実力を正確に測定するためだけの環境です。',
    },
    {
      type: 'title',
      text: '測定する指標について',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>WPM (Words Per Minute):</strong> 世界標準の指標です。正しい入力文字数を 5 で割り（標準的な単語長）、それを経過時間で割って算出します。公平性を期すため、ミスが多いと数値が下がるように設計されています。',
    },
    {
      type: 'paragraph',
      html: '<strong>正確性 (%):</strong> 正しく入力された文字の割合です。100% が完璧です。90% は 10 文字に 1 文字ミスがあることを意味します。速度と同様に、正確性も重要です。',
    },
    {
      type: 'paragraph',
      html: '<strong>ミス数：</strong> 間違えた文字の数です。パーセンテージよりも直感的に把握できます。入力中、間違えた文字は赤く表示されます。',
    },
    {
      type: 'paragraph',
      html: '<strong>正解文字数 / 総文字数：</strong> 期待される全テキストに対して、どれだけ正しく入力できたかを示します。',
    },
    {
      type: 'title',
      text: 'タイピング速度に影響を与える要因',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'タイピング速度は常に一定ではありません。認知心理学の研究によると、以下の要因がパフォーマンスに直接影響します。',
    },
    {
      type: 'list',
      items: [
        '<strong>単語への馴染み：</strong> 専門分野の言葉なら、未知の単語より 30% 早く入力できます。',
        '<strong>キーボード配列：</strong> 一般的な QWERTY 配列よりも、人間工学に基づいた配列の方が疲労が少なく、高速入力を維持しやすい傾向があります。',
        '<strong>単語の長さ：</strong> 長い単語は、短い単語の組み合わせよりも 15〜20% 入力速度を低下させます。',
        '<strong>精神的疲労：</strong> 10分以上連続してタイピングを行うと、正確性が 5〜8% 低下します。',
        '<strong>制限時間の圧力：</strong> 短いテストは、長いテストよりもアドレナリンが出てミスが発生しやすくなります。',
      ],
    },
    {
      type: 'tip',
      html: 'エリートタイピスト（120 WPM 以上）は、単に速く指を動かしているわけではありません。<strong>ホームポジション</strong>を完全にマスターしています。左指を ASDF、右指を JKL; に置き、決して手元を見ないようにします。これが 100 WPM を超える唯一の方法です。最初に間違った指使いを覚えると、どんなに練習しても 60〜70 WPM で頭打ちになります。最初は遅くても、正しく学びましょう。',
    },
    {
      type: 'title',
      text: '3ヶ月で 50 WPM から 100 WPM へ：上達スケジュール',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'タイピングの上達には予測可能な学習曲線があります。10 WPM の向上には、約 10 時間の集中練習が必要と言われています。以下が推奨される戦略です。',
    },
    {
      type: 'list',
      items: [
        '<strong>1〜2週目（速度より形）：</strong> 毎日10分、正しい指使いだけに集中します。速度は無視してください。正しいフォームが上達の9割を決めます。',
        '<strong>3〜4週目（徐々に加速）：</strong> 毎日15分に増やします。手元を見ずに入力（ブラインドタッチ）に挑戦してください。一時的に速度は落ちますが、脳が新しいパターンを学習している証拠です。',
        '<strong>5〜8週目（一貫性）：</strong> 毎日20分。実際のメール作成などとテストを交互に行います。毎週 5〜8 WPM の向上が期待できます。',
        '<strong>9〜12週目（特化練習）：</strong> 苦手な単語や記号を集中的に練習します。1日 15〜20 分で十分維持・向上できます。',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>現実的な進歩：</strong> 50 から 80 WPM までは 4〜6 週間。80 から 120 WPM までは 8〜12 週間。それ以上はプロフェッショナルなトレーニングが必要です。',
    },
    {
      type: 'title',
      text: '他人の記録と比べるべきか、自分の記録と比べるべきか',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'スポーツ心理学の研究では、<strong>他人との比較はモチベーションを阻害する</strong>ことがわかっています。常にチャンピオンと比較すると、挫折しやすくなります。トップアスリートは常に「過去の自分」と戦っています。',
    },
    {
      type: 'paragraph',
      html: 'このテストでは自己ベストを自動的に保存します。それがあなたの目標値です。セッションのたびに、ライバルではなく「昨日の自分」を更新することに集中しましょう。スタンフォード大学の研究によると、この思考法は直接の競争よりもモチベーションを 40% 高めます。',
    },
    {
      type: 'paragraph',
      html: '結果を友達にシェアしたいですか？シェアボタンを使えば、SNS にそのままコピーできます。しかし、あなたがまだ2週目なら、6ヶ月練習した友人と比較してはいけません。24週間後のあなたと比較しましょう。',
    },
    {
      type: 'title',
      text: '他のテストと比較して、このテストの精度は？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'タイピングテストの精度は、「どこで」測定されるかに依存します。このテストはブラウザ内で完結しており、以下の利点があります。',
    },
    {
      type: 'list',
      items: [
        '<strong>ネットワーク遅延なし：</strong> サーバーを経由しないため、通信ラグによるタイムロスの影響を受けません。',
        '<strong>高精度タイムスタンプ：</strong> キーが押された瞬間をミリ秒単位で正確に捉えます。',
        '<strong>国際基準の計算式：</strong> (総文字数 / 5) / 時間(分) - ミス数 / 時間(分) という標準的な計算式を使用しています。',
        '<strong>不正防止：</strong> コピー＆ペーストは認識されず、実際のキーボード入力のみをカウントします。',
      ],
    },
    {
      type: 'paragraph',
      html: '性能的には、Monkeytype や Keybr.com と同等の精度を誇ります。オフライン環境でも動作するため、より安定した測定が可能です。',
    },
    {
      type: 'title',
      text: 'このタイピングテストをおすすめする方',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>プログラマー：</strong> コード入力が速くなると、思考に充てる時間が増えます。',
        '<strong>ライター・ジャーナリスト：</strong> 公開までの時間を短縮し、日々の収益性を最大化できます。',
        '<strong>弁護士・事務：</strong> 正確なドキュメント作成スピードは、信頼と直結します。',
        '<strong>学生：</strong> 論文や小論文試験において、タイピング速度は合格を左右する武器になります。',
        '<strong>ゲーマー：</strong> チーム対戦中、迅速なチャット連携は戦術的な優位性をもたらします。',
      ],
    },
    {
      type: 'title',
      text: '上達のためのヒント',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '上達への近道は、長時間練習するよりも「短時間を毎日続ける」ことです。1週間に1回 2時間練習するよりも、毎日10分練習する方が脳の学習効率は圧倒的に高いです。まずは 60 秒間のテストを 3 回繰り返すことから始めましょう。',
    },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
