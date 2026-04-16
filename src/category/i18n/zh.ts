import type { CategoryLocaleContent } from '../../types';

const slug = 'games';
const title = '热门挑战与游戏：打字测试与成瘾性速度挑战';
const description = '通过游戏化挑战和热门游戏测试您的技能。100% 离线打字测试、速度挑战及成瘾性游戏。';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: '为什么游戏化挑战如此有效', level: 2 },
    { type: 'paragraph', html: '游戏化挑战通过健康的竞争提高认知能力。大脑释放多巴胺，创造令人满意和难忘的体验。' },
    { type: 'title', text: '数字时代的打字', level: 2 },
    { type: 'paragraph', html: '书写速度是基础。提高 10 WPM 可以节省数小时。设计良好的测试可以同时测量速度和准确性。' },
    { type: 'title', text: '挑战如何运作', level: 2 },
    { type: 'list', items: ['进度的即时反馈', '清晰可量化的规则', '可扩展的难度级别', '挑战自己的纪录'] },
    { type: 'title', text: '经过验证的好处', level: 2 },
    { type: 'paragraph', html: '通过定期的打字测试练习，在 <strong>4-6 周内提高 20-30%</strong>。' },
    { type: 'tip', html: '正确姿势：背部挺直，手肘呈 90°，手腕中立，手指放在起始排。先求指法，后求速度。' },
  ],
};
