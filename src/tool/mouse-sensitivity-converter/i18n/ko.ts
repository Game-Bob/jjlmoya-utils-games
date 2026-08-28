import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'mouse-sensitivity-converter-between-games';
const title = '게임 간 마우스 감도 변환기';
const description = '경쟁형 게임 간에 실제 마우스 이동 거리를 일치시키세요. 독립된 DPI 값으로 지향사격 감도를 변환하고 360도 cm 및 eDPI를 계산합니다.';

const faqItems = [
  {
    "question": "이 감도 변환기는 무엇을 보존하나요?",
    "answer": "360도 회전에 필요한 마우스패드 상의 실제 이동 거리(cm)를 정확히 보존합니다."
  },
  {
    "question": "왜 eDPI 값이 게임마다 다른가요?",
    "answer": "eDPI는 게임 고유의 Yaw 스케일에 의존하므로 서로 다른 게임 간에는 직접 비교할 수 없습니다."
  },
  {
    "question": "시야각(FOV)이 변환에 영향을 주나요?",
    "answer": "아니요, 기본 360도 회전 물리 거리는 FOV 변경에 영향을 받지 않습니다."
  },
  {
    "question": "변환 정확도는 확실한가요?",
    "answer": "각 게임 엔진의 Yaw 상수를 기반으로 한 수학적으로 정확한 계산입니다."
  },
  {
    "question": "포트나이트 감도는 어떻게 입력하나요?",
    "answer": "게임 내 퍼센트 수치(예: 7%면 7)를 입력하세요."
  },
  {
    "question": "입력한 설정 값이 서버에 저장되나요?",
    "answer": "아니요, 모든 계산 및 설정은 브라우저 내에서만 처리됩니다."
  }
];

const howToItems = [
  {
    "name": "현재 게임 선택",
    "text": "현재 게임과 DPI, 감도를 입력하세요."
  },
  {
    "name": "목표 게임 선택",
    "text": "목표 게임을 선택하고 DPI를 확인하세요."
  },
  {
    "name": "변환 값 복사",
    "text": "계산된 목표 감도를 게임에 적용하세요."
  },
  {
    "name": "회전 검증",
    "text": "마우스패드에서 360도 회전을 확인하세요."
  }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToItems.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
};

export const content: MouseSensitivityLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "sourceGameLabel": "현재 게임",
    "targetGameLabel": "목표 게임",
    "sourceDpiLabel": "현재 DPI",
    "targetDpiLabel": "목표 DPI",
    "sensitivityLabel": "게임 내 감도 설정값",
    "linkDpiLabel": "동일한 DPI 유지",
    "sourceStationLabel": "현재 설정 환경",
    "targetStationLabel": "목표 설정 환경",
    "guideSourceText": "현재 플레이 중인 게임을 선택하고 DPI와 지향사격 감도를 입력하세요.",
    "guideTargetText": "이동할 게임을 선택하세요. DPI 변경이 없다면 연결 상태를 유지하세요.",
    "guideResultText": "변환된 감도 값을 목표 게임에 입력하고 360도 회전 거리를 확인하세요.",
    "sourceInputHint": "마우스 소프트웨어 및 게임 내 설정 메뉴에서 값을 확인하세요.",
    "targetInputHint": "올바른 값을 입력하면 목표 감도가 즉시 표시됩니다.",
    "profileResetText": "선택한 게임의 기본 예시 값으로 감도가 초기화되었습니다.",
    "resultForGameTemplate": "3. {game} 설정 화면에 이 값을 입력하세요",
    "yawLabel": "Yaw 스케일",
    "measuredProfileLabel": "측정된 프로필",
    "documentedProfileLabel": "공식 프로필",
    "targetSensitivityLabel": "입력할 감도 값",
    "copyResultLabel": "결과 복사",
    "copiedLabel": "복사됨",
    "swapLabel": "변환 방향 반전",
    "swapButtonLabel": "맞바꾸기",
    "shareLabel": "링크 복사",
    "shareCopiedLabel": "링크가 복사되었습니다",
    "presetsLabel": "에임 프리셋",
    "presetFastLabel": "빠름 22 cm",
    "presetBalancedLabel": "밸런스 34 cm",
    "presetControlLabel": "컨트롤 50 cm",
    "cmUnitLabel": "미터법 (cm)",
    "inchUnitLabel": "야드파운드법 (inch)",
    "physicalArcLabel": "360도 회전 거리",
    "sourceEdpiLabel": "원본 eDPI",
    "targetEdpiLabel": "목표 eDPI",
    "countsLabel": "마우스 카운트",
    "matchQualityLabel": "프로필 신뢰도",
    "exactMathLabel": "공식 Yaw 일치",
    "calibrationLabel": "실제 측정 권장",
    "fastBandLabel": "빠른 궤도",
    "balancedBandLabel": "균형 궤도",
    "controlBandLabel": "제어 궤도",
    "extendedBandLabel": "확장 궤도",
    "formulaLabel": "감도 변환 공식",
    "formulaText": "목표 감도 = 원본 감도 x 원본 DPI x 원본 Yaw / (목표 DPI x 목표 Yaw)",
    "verificationTitle": "마우스패드 실제 측정",
    "verificationText": "마우스패드에 시작 위치를 표시하고 두 게임 모두에서 동일하게 360도 회전을 수행하여 거리를 비교하세요.",
    "baseAimOnlyText": "지향사격(Hipfire) 전용 변환입니다.",
    "invalidInputText": "양수 값을 입력해 주세요.",
    "openGameMenuLabel": "게임 프로필 메뉴 열기"
},
  seo: [
    {
        "type": "title",
        "text": "실제 이동 거리를 유지하는 마우스 감도 변환 가이드",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "감도 수치는 게임마다 의미하는 바가 다릅니다. 이 변환기는 각 게임의 Yaw 상수를 사용하여 <strong>360도 회전 cm 거리</strong>를 정확하게 보존합니다."
    },
    {
        "type": "paragraph",
        "html": "계산 결과는 기본 수평 지향사격(Hipfire) 기준입니다."
    },
    {
        "type": "title",
        "text": "감도 변환 계산 공식과 Yaw 상수",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "<strong>목표 감도 = 원본 감도 x 원본 DPI x 원본 Yaw / (목표 DPI x 목표 Yaw)</strong>"
    },
    {
        "type": "table",
        "headers": [
            "지표",
            "의미",
            "주요 용도"
        ],
        "rows": [
            [
                "감도 수치",
                "게임 메뉴 내 설정값",
                "해당 게임 내부 설정 변경"
            ],
            [
                "eDPI",
                "DPI x 감도 수치",
                "동일 게임 내 플레이어 감도 비교"
            ],
            [
                "360도 cm",
                "1회전에 필요한 실제 마우스 이동 거리",
                "다른 게임 간 에임 감각 유지"
            ]
        ]
    },
    {
        "type": "title",
        "text": "지원 게임 프로필 및 정확도 기준",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "CS2, 발로란트, 에이펙스 레전드, 오버워치 2, 포트나이트, 소스 및 퀘이크 엔진을 공식 지원합니다."
    },
    {
        "type": "tip",
        "title": "포트나이트 입력 방식",
        "html": "게임 화면에 표시된 퍼센트 수치를 그대로 입력하세요 (예: 7%인 경우 <strong>7</strong> 입력)."
    },
    {
        "type": "title",
        "text": "시야각(FOV)과 360도 회전 거리의 관계",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "360도 회전에 필요한 실제 마우스 이동 거리는 화면 시야각(FOV)의 영향을 받지 않습니다."
    },
    {
        "type": "title",
        "text": "게임 내 결과 검증 및 교정 방법",
        "level": 2
    },
    {
        "type": "list",
        "items": [
            "마우스 가속도를 비활성화하세요.",
            "마우스패드 가장자리에 마우스를 정확히 맞추세요.",
            "360도 회전을 수행하여 실측 거리를 확인하세요.",
            "필요한 경우 최소 단위로 값을 미세 조정하세요."
        ]
    },
    {
        "type": "tip",
        "title": "실제 측정 검증 권장",
        "html": "마우스패드에서 직접 회전 거리를 확인하여 감도를 검증하세요."
    }
],
  faqTitle: '마우스 감도 변환 자주 묻는 질문',
  faq: faqItems,
  bibliographyTitle: '출처 및 캘리브레이션 참조',
  bibliography,
  howTo: howToItems,
  schemas: [appSchema, faqSchema, howToSchema],
};
