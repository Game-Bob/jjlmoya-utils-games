import type { CategoryLocaleContent } from '../../types';

const slug = 'challenges-games';
const title = 'Viral Challenges & Games | Typing Test & Addictive Speed Challenges';
const description = 'Gamified challenges and viral games to test your skills. Typing tests, speed challenges and addictive games 100% offline.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Why Gamified Challenges Work So Well', level: 2 },
    { type: 'paragraph', html: 'Gamified challenges improve cognitive skills through healthy competition. The brain releases dopamine, creating satisfying and memorable experiences.' },
    { type: 'title', text: 'Typing in the Digital Age', level: 2 },
    { type: 'paragraph', html: 'Writing speed is fundamental. A 10 WPM improvement saves hours. Well-designed tests measure both speed and accuracy.' },
    { type: 'title', text: 'How Challenges Work', level: 2 },
    { type: 'list', items: ['Immediate feedback on progress', 'Clear, quantifiable rules', 'Scalable difficulty levels', 'Competition against your own records'] },
    { type: 'title', text: 'Proven Benefits', level: 2 },
    { type: 'paragraph', html: '<strong>Improve 20-30% in 4-6 weeks</strong> of regular typing test practice.' },
    { type: 'tip', html: 'Correct posture: straight back, 90° elbows, neutral wrists, fingers on home row. Form first, speed later.' },
  ],
};
