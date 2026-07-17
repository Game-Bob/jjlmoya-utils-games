import { bibliography } from '../bibliography';
import type { GamesToolLocaleContent as GamesToolLocaleContentType } from '../../../index';

const slug = 'typing-speed-test';
const title = '打字速度测试：衡量您的输入速率';
const description = '完全离线的趣味打字测试工具。测量您的 WPM（每分钟词数）、准确率和成就。挑战自我，不断提升打字速度。';

const faqItems = [
  { question: '成年人的平均打字速度是多少？', answer: '成年人的平均打字速度为每分钟 40-60 个词 (WPM)。熟练的打字员可达到 70-100 WPM。顶尖高手甚至能超过 200 WPM。通过测试看看您处于什么水平。' },
  { question: 'WPM 是如何计算的？', answer: '我们将正确的字符数除以 5（平均单词长度），再除以耗时（分钟）。由于系统会自动扣除错误项，因此得出的数字是您真实的\"净速度\"。' },
  { question: '我的测试结果会被保存吗？', answer: '是的，结果保存在您的浏览器本地。系统会自动保存您的最佳 WPM。除非您主动分享，否则在线的其他任何人都无法看到您的结果。' },
  { question: '没有网络时测试准确吗？', answer: '完全准确。此测试 100% 在您的浏览器中运行，不向服务器发送任何数据。这意味着您可以体验到毫秒级的精准度和零网络延迟。' },
  { question: '提高打字速度需要多长时间？', answer: '通过持续练习，您可以在 2-3 周内看到明显的进步。要实现质的飞跃（如从 50 加倍至 100 WPM），则通常需要 3-6 个月的刻苦练习。' },
  { question: '我可以离线练习吗？', answer: '当然可以。此测试是 100% 离线的。加载一次后，即可在无网状态下随时开启。非常适合旅行或在 WiFi 不稳定时使用。' },
];

const howToItems = [
  { name: '开始录入', text: '只需开始打字，计时器会在按下第一个键时自动开启。您总共有 60 秒时间。' },
  { name: '准确输入单词', text: '正确的字符会以青色高亮，错误的字母则会变红。您必须改对单词才能计入成绩。' },
  { name: '实时查看进度', text: '您的 WPM、准确率和单词数会在您输入时实时更新。' },
  { name: '获取最终结果', text: '测试结束后，您可以查看最终 WPM、总体准确率，并可选择分享您的成绩。' },
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
    words: '词数',
    wpm: 'WPM',
    accuracy: '准确率',
    timeUp: '时间到！',
    playAgain: '再试一次',
    share: '分享',
    copied: '已复制！',
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
      text: '免费在线打字速度测试：实时、精准测量您的真实 WPM',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>打字速度测试</strong>是评估您每分钟能准确输入多少个词 (WPM) 的最有效工具。无论您是程序员、作家、学生还是长时间伏案工作的白领，了解自己的实时打字速度都是优化工作效率的第一步。本测试不仅衡量输入频率，更有意义的是由于它测量了<em>净准确率</em>：即扣除错误后的真实速度。',
    },
    {
      type: 'paragraph',
      html: '与传统的打字模拟器不同，本测试会自动在您的最终 WPM 成绩中扣除错误分。一个录入速度 100 WPM 但出现了 30 个错误的打字员，其实并不如速度 70 WPM 但零错误的人高效。在这里，我们测量的是<strong>真实的净速度</strong>，而非虚高的无效数字。',
    },
    {
      type: 'title',
      text: '打字速度平均水平：2026 年行业标准',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '对于没有接受过专业训练的成年人，平均打字速度通常在 <strong>40-60 WPM</strong> 之间。然而，这一指标因职业背景不同而存在显著差异：',
    },
    {
      type: 'list',
      items: [
        '<strong>普通用户：</strong> 30-45 WPM（日常邮件、社交媒体社交）',
        '<strong>助理/行政人员：</strong> 60-80 WPM（职场通用标准）',
        '<strong>专业打字员：</strong> 90-120 WPM（熟练掌握盲打及 ASDF 键位标准）',
        '<strong>文字工作者：</strong> 120-160 WPM（如速记员、资深编辑）',
        '<strong>世界顶级高手：</strong> 200+ WPM（吉尼斯纪录保持者：216 WPM）',
      ],
    },
    {
      type: 'paragraph',
      html: '大多数人在参与测试后会惊讶地发现，自己的速度其实低于职场平均水平。如果您的成绩在 50 WPM 左右且准确率低于 95%，那么相比于盲目提速，更应该纠正指法。本测试能让您看清自己的准确排位，从而有针对性地改进。',
    },
    {
      type: 'list',
      items: [
        '<strong>入门级 (20-40 WPM):</strong> 仍需查看键盘，输入较慢且需高度专注',
        '<strong>进阶级 (40-70 WPM):</strong> 录入流利，伴有少量偶然性错误',
        '<strong>高级 (70-120 WPM):</strong> 肌肉记忆自然发力，错误极少',
        '<strong>专业级 (120+ WPM):</strong> 竞技级速率，近乎完美的准确度',
      ],
    },
    {
      type: 'title',
      text: '2026 年：为什么提高打字速度至关重要',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '步入 2026 年，快速准确的录入已不再是单纯的\"文秘技能\"。对任何知识型专业人士而言，这都是一项<strong>核心竞争力</strong>：',
    },
    {
      type: 'list',
      items: [
        '<strong>程序员：</strong> 代码是用键盘敲出来的。100+ WPM 的准确录入意味着完成同样的工作您只需要原来一半的时间。',
        '<strong>法律专业人士：</strong> 法律文件对准确性要求极高。合同中的任何错别字都可能引发毁灭性后果。',
        '<strong>内容创作者：</strong> 这种行业\"快即是生存\"。速度翻倍，日产量也能直接翻倍。',
        '<strong>学生：</strong> 限时考试、学术论文等工作对\"边想边打\"能力要求极高。打字慢会导致思维中断，从而影响产出质量。',
        '<strong>自由职业者：</strong> 时间就是金钱。将速度从 50 WPM 提升至 100 WPM，等于以同样的精力提高了 30-40% 的直接收入。',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>投资回报率极高：</strong> 如果您打字速度为 50 WPM，在处理一份 200 词的文档时需要 15 分钟；假设每天处理 8 份，则每年会浪费数百小时。若提升至 100 WPM，一年可节省 <strong>260 个小时</strong>，直接价值上万元产出。',
    },
    {
      type: 'title',
      text: '打字测试操作步骤：简易指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '本在线打字测试遵循国际权威机构准则：在固定时间内测量每分钟录入的正确单词量。科学、标准且直观：',
    },
    {
      type: 'list',
      items: [
        '<strong>选择时长：</strong> 30 秒、60 秒或 2 分钟。60 秒为全球通用基准。',
        '<strong>难度设置：</strong> 包含常用词汇、代码符号或高难度文学词汇。',
        '<strong>触发计时：</strong> 无需等待起跑指令，按下第一个键时自动倒计时。',
        '<strong>实时反馈：</strong> 系统会在页面顶端实时刷新 WPM、准确率和错误计数。',
        '<strong>最终评分：</strong> 计时结束后立即展现综合评分及您的历史最佳记录。',
      ],
    },
    {
      type: 'paragraph',
      html: '界面极简，无需注册，无广告干扰。随时随地，测出您的真实实力。',
    },
    {
      type: 'title',
      text: '我们测量的核心指标',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>每分钟词数 (WPM):</strong> 国际通行指标。公式：(总正确字符数 / 5) / 耗时。该公式综合考虑了错误带来的时间损失，非常公平。',
    },
    {
      type: 'paragraph',
      html: '<strong>准确率 (%):</strong> 敲击正确的字符比例。100% 代表完美录入。准确率不仅影响 WPM 计算值，更是专业能力的体现。',
    },
    {
      type: 'paragraph',
      html: '<strong>错误计数：</strong> 录入错误的字符总数。实时变红提示，建议先纠错再继续，以维持高连击。',
    },
    {
      type: 'title',
      text: '影响实际打字速度的潜在因素',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '打字速度并非固定不变。认知心理学研究表明以下因素会直接干扰您的发挥：',
    },
    {
      type: 'list',
      items: [
        '<strong>词汇熟悉度：</strong> 录入专业领域内的词汇比录入生僻词快 30% 以上。',
        '<strong>键盘布局：</strong> QWERTY 用户相比于 DVORAK 等人体工学版用户，在极致速度上略逊，但具有通用性优势。',
        '<strong>单词长度：</strong> 处理长难单词会使整体节奏下降约 15-20%。',
        '<strong>精力消耗：</strong> 连续高强度录入 10 分钟后，由于大脑疲惫，准确率会显著下滑。',
      ],
    },
    {
      type: 'tip',
      html: '精英打字员 (120+ WPM) 的秘诀并非在于手速飞快，而在于保持正确的<strong>初始手型</strong>：左手四指于 ASDF，右手四指于 JKL;，并且视线永远不离开屏幕。这是突破 100 WPM 大关的唯一路径。如果您初期养成了错误的指法习惯，练习再多也难逃 60 WPM 的瓶颈期。',
    },
    {
      type: 'title',
      text: '进阶计划：3 个月内从 50 WPM 提升至 100+ WPM',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '提升打字速度遵循典型的学习曲线。根据相关实证研究，每提升 10 WPM 大约需要 10 小时的专项训练。以下是科学的进阶策略：',
    },
    {
      type: 'list',
      items: [
        '<strong>第 1-2 周（重质不重量）：</strong> 每日 10 分钟。完全无视速度，只关注指法是否归位。正确的肌肉记忆是提速的前提。',
        '<strong>第 3-4 周（强制盲打）：</strong> 每日练习增至 15 分钟。坚决不看键盘。此时速度会骤降，这属于脑部重构神经网络的正常现象。',
        '<strong>第 5-8 周（巩固与持久）：</strong> 每日 20 分钟。结合实际工作文本进行练习。每周预期提速 5-8 WPM。',
        '<strong>第 9-12 周（专项补强）：</strong> 专门练习那些容易出错的生僻单词或特殊符号。每日 15 分钟即可产生质变。',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>核心要点：</strong> 贵在坚持，不在强度。每天 10 分钟的效果远好于两周一次的大爆发。大脑是通过\"间歇性重复\"来学习和巩固技能的。',
    },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
