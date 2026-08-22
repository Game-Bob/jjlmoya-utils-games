import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'mouse-sensitivity-converter-between-games';
const title = '遊戲滑鼠靈敏度轉換器';
const description = '在競技遊戲之間精確轉換滑鼠靈敏度，保持 360 度旋轉所需的實體移動距離與 eDPI。';

const faqItems = [
  {
    "question": "這個靈敏度轉換器保持了什麼？",
    "answer": "它精確維持了在滑鼠墊上旋轉 360 度所需的實體移動距離（公分）。"
  },
  {
    "question": "為什麼 eDPI 轉換到不同遊戲後會改變？",
    "answer": "eDPI 依賴於遊戲引擎的 Yaw 係數，因此無法在不同引擎間直接比較。"
  },
  {
    "question": "視野角度 (FOV) 會影響轉換嗎？",
    "answer": "不會，基礎腰射 360 度旋轉的實體距離不受 FOV 影響。"
  },
  {
    "question": "轉換結果是否精確？",
    "answer": "數學計算完全精確，基於各遊戲官方或實測的 Yaw 常數。"
  },
  {
    "question": "如何輸入 Fortnite 的靈敏度？",
    "answer": "請輸入百分比數字，例如 7% 輸入 7。"
  },
  {
    "question": "我的設定資料會被上傳嗎？",
    "answer": "不會，所有計算與設定接儲存在您的瀏覽器本機。"
  }
];

const howToItems = [
  {
    "name": "選擇來源遊戲",
    "text": "選擇目前的遊戲並輸入 DPI 與靈敏度。"
  },
  {
    "name": "選擇目標遊戲",
    "text": "選擇目標遊戲並確認 DPI 設定。"
  },
  {
    "name": "複製轉換數值",
    "text": "將計算出的目標靈敏度套用到新遊戲。"
  },
  {
    "name": "實測驗證",
    "text": "在滑鼠墊上進行 360 度旋轉測試。"
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TWD' },
};

export const content: MouseSensitivityLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "sourceGameLabel": "目前遊戲",
    "targetGameLabel": "目標遊戲",
    "sourceDpiLabel": "目前 DPI",
    "targetDpiLabel": "目標 DPI",
    "sensitivityLabel": "遊戲內顯示的靈敏度",
    "linkDpiLabel": "保持相同 DPI",
    "sourceStationLabel": "您目前的設定",
    "targetStationLabel": "您的目標設定",
    "guideSourceText": "選擇您正在玩的遊戲，輸入其 DPI 與腰射靈敏度。",
    "guideTargetText": "選擇欲轉移的目標遊戲。若未變更 DPI 請保持連結。",
    "guideResultText": "將計算出的靈敏度複製到目標遊戲，並驗證 360 度旋轉。",
    "sourceInputHint": "請在滑鼠驅動軟體與遊戲設定選單中查看這些數值。",
    "targetInputHint": "輸入有效數值後，目標靈敏度將立即顯示於下方。",
    "profileResetText": "靈敏度已重置為該遊戲的預設範例數值。",
    "resultForGameTemplate": "3. 在 {game} 設定中輸入此數值",
    "yawLabel": "Yaw 比例",
    "measuredProfileLabel": "實測設定檔",
    "documentedProfileLabel": "官方文件設定檔",
    "targetSensitivityLabel": "請輸入此靈敏度",
    "copyResultLabel": "複製結果",
    "copiedLabel": "已複製",
    "swapLabel": "反向轉換",
    "swapButtonLabel": "對調",
    "shareLabel": "複製分享連結",
    "shareCopiedLabel": "連結已複製",
    "presetsLabel": "肌肉記憶預設檔",
    "presetFastLabel": "快速 22 cm",
    "presetBalancedLabel": "均衡 34 cm",
    "presetControlLabel": "控制 50 cm",
    "cmUnitLabel": "公制 (cm)",
    "inchUnitLabel": "英制 (inch)",
    "physicalArcLabel": "360 度旋轉距離",
    "sourceEdpiLabel": "來源 eDPI",
    "targetEdpiLabel": "目標 eDPI",
    "countsLabel": "滑鼠點數",
    "matchQualityLabel": "設定檔可信度",
    "exactMathLabel": "官方 Yaw 完全吻合",
    "calibrationLabel": "建議進行實體校正",
    "fastBandLabel": "快速軌道",
    "balancedBandLabel": "均衡軌道",
    "controlBandLabel": "控制軌道",
    "extendedBandLabel": "延伸軌道",
    "formulaLabel": "靈敏度轉換公式",
    "formulaText": "目標靈敏度 = 來源靈敏度 x 來源 DPI x 來源 Yaw / (目標 DPI x 目標 Yaw)",
    "verificationTitle": "滑鼠墊實體校正",
    "verificationText": "在滑鼠墊上標記起點，並在兩個遊戲中分別進行一次完整的 360 度腰射旋轉以驗證距離。",
    "baseAimOnlyText": "僅適用於基礎水平腰射（Hipfire）。",
    "invalidInputText": "請輸入大於 0 的正數。",
    "openGameMenuLabel": "開啟遊戲設定檔選單"
},
  seo: [
    {
        "type": "title",
        "text": "保持實體移動距離的滑鼠靈敏度精確轉換指南",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "不同遊戲中的靈敏度數值含義並不相同。本轉換器利用各遊戲引擎的 Yaw 係數，精確維持您在滑鼠墊上 <strong>360 度轉身所需的 cm 實體距離</strong>。"
    },
    {
        "type": "paragraph",
        "html": "計算結果專為基礎水平腰射（Hipfire）設計。"
    },
    {
        "type": "title",
        "text": "靈敏度轉換計算公式與 Yaw 係數",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "<strong>目標靈敏度 = 來源靈敏度 x 來源 DPI x 來源 Yaw / (目標 DPI x 目標 Yaw)</strong>"
    },
    {
        "type": "table",
        "headers": [
            "指標",
            "意義",
            "主要用途"
        ],
        "rows": [
            [
                "靈敏度數值",
                "遊戲選單內的設定數值",
                "調整該遊戲內部的靈敏度"
            ],
            [
                "eDPI",
                "DPI 乘以靈敏度",
                "在同一款遊戲內比較玩家靈敏度"
            ],
            [
                "360度 cm",
                "轉身一圈所需的實體距離",
                "跨遊戲保持相同的瞄準肌肉記憶"
            ]
        ]
    },
    {
        "type": "title",
        "text": "支援的遊戲設定檔與精度標準",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "支援 CS2、特戰英豪 (Valorant)、Apex 英雄、鬥陣特攻 2、Fortnite、Source 及 Quake 引擎。"
    },
    {
        "type": "tip",
        "title": "Fortnite 輸入格式",
        "html": "請直接輸入遊戲顯示的百分比數字（例如 7% 請輸入 <strong>7</strong>）。"
    },
    {
        "type": "title",
        "text": "視野角度 (FOV) 與 360 度旋轉距離關係",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "旋轉 360 度所需的實體滑鼠移動距離不受畫面視野角度 (FOV) 影響。"
    },
    {
        "type": "title",
        "text": "如何在遊戲中校正與驗證結果",
        "level": 2
    },
    {
        "type": "list",
        "items": [
            "關閉作業系統與滑鼠驅動程式中的滑鼠加速功能。",
            "將滑鼠對齊滑鼠墊邊緣的固定標記點。",
            "進行一次完整的 360 度腰射旋轉。",
            "若有微小位移，請以最小增量微調數值。"
        ]
    },
    {
        "type": "tip",
        "title": "建議進行實體測試",
        "html": "請在滑鼠墊上進行實測確認，以達成完美的肌肉記憶轉移。"
    }
],
  faqTitle: '滑鼠靈敏度轉換常見問題',
  faq: faqItems,
  bibliographyTitle: '參考來源與校正文獻',
  bibliography,
  howTo: howToItems,
  schemas: [appSchema, faqSchema, howToSchema],
};
