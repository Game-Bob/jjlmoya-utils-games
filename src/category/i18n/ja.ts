import type { CategoryLocaleContent } from '../../types';

const slug = 'games';
const title = '話題のチャレンジとゲーム：タイピングテストとスピード挑戦';
const description = 'スキルを試すためのゲーム化されたチャレンジと話題のゲーム。タイピングテスト、スピードチャレンジ、そして中毒性のあるゲームを100%オフラインで提供します。';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'なぜゲーム化されたチャレンジが効果的なのか', level: 2 },
    { type: 'paragraph', html: 'ゲーム化されたチャレンジは、健全な競争を通じて認知能力を向上させます。脳はドーパミンを放出し、満足感のある記憶に残る体験を作り出します。' },
    { type: 'title', text: 'デジタル時代のタイピング', level: 2 },
    { type: 'paragraph', html: '書く速度は基本中の基本です。10 WPM の向上は何時間もの節約になります。優れたデザインのテストは、速度と正確性の両方を測定します。' },
    { type: 'title', text: 'チャレンジの仕組み', level: 2 },
    { type: 'list', items: ['進捗に対する即時のフィードバック', '明確で数値化可能なルール', '拡張可能な難易度レベル', '自己ベストとの戦い'] },
    { type: 'title', text: '証明されたメリット', level: 2 },
    { type: 'paragraph', html: '定期的なタイピングテストの練習により、<strong>4〜6週間で20〜30%向上</strong>します。' },
    { type: 'tip', html: '正しい姿勢：背筋を伸ばし、肘は90度、手首は自然な位置に保ち、指はホームポジションに。速度よりもまず正確な形を。' },
  ],
};
