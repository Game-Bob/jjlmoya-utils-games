import type { CategoryLocaleContent } from '../../types';

const slug = 'games';
const title = '바이럴 챌린지 및 게임: 타자 테스트 및 중독성 있는 속도 도전';
const description = '실력을 테스트할 수 있는 게임화된 챌린지와 바이럴 게임입니다. 타자 테스트, 속도 도전 및 중독성 있는 게임을 100% 오프라인으로 즐겨보세요.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: '게임화된 챌린지가 효과적인 이유', level: 2 },
    { type: 'paragraph', html: '게임화된 챌린지는 건강한 경쟁을 통해 인지 능력을 향상시킵니다. 뇌는 도파민을 방출하여 만족스럽고 기억에 남는 경험을 만듭니다.' },
    { type: 'title', text: '디지털 시대의 타자', level: 2 },
    { type: 'paragraph', html: '입력 속도는 기본 중의 기본입니다. 10 WPM 향상은 수 시간의 시간을 절약해줍니다. 잘 설계된 테스트는 속도와 정확도를 모두 측정합니다.' },
    { type: 'title', text: '챌린지 작동 방식', level: 2 },
    { type: 'list', items: ['진행 상황에 대한 즉각적인 피드백', '명확하고 정량화 가능한 규칙', '확장 가능한 난이도 수준', '자신의 기록과의 경쟁'] },
    { type: 'title', text: '입증된 이점', level: 2 },
    { type: 'paragraph', html: '정기적인 타자 테스트 연습으로 <strong>4~6주 안에 20~30% 향상</strong>할 수 있습니다.' },
    { type: 'tip', html: '올바른 자세: 등을 펴고, 팔꿈치는 90도, 손목은 중립, 손가락은 기본 위치에 둡니다. 속도보다 자세가 먼저입니다.' },
  ],
};
