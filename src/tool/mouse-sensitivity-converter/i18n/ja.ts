import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'mouse-sensitivity-converter-between-games';
const title = 'ゲーム間マウス感度コンバーター';
const description = '360度回転に必要な物理距離とeDPIを維持しながら、ゲーム間でマウス感度を正確に変換します。';

const faqItems = [
  {
    "question": "このコンバーターは何を維持しますか？",
    "answer": "1回転（360度）に必要なマウスパッド上の物理移動距離（cm）を正確に維持します。"
  },
  {
    "question": "なぜeDPIがゲームによって変わるのですか？",
    "answer": "eDPIはゲーム固有のYawスケールに依存するため、異なるゲーム間では直接比較できません。"
  },
  {
    "question": "視野角（FOV）は変換に影響しますか？",
    "answer": "いいえ、腰撃ちでの360度回転物理距離はFOVの影響を受けません。"
  },
  {
    "question": "変換精度は確実ですか？",
    "answer": "各ゲームエンジンのYaw定数に基づいた数学的に正確な計算を行っています。"
  },
  {
    "question": "Fortniteの感度はどのように入力しますか？",
    "answer": "ゲーム内のパーセント数値（例: 7%なら7）を入力してください。"
  },
  {
    "question": "入力した設定データは送信されますか？",
    "answer": "いいえ、すべての計算と設定はブラウザ内でローカルに処理されます。"
  }
];

const howToItems = [
  {
    "name": "現在のゲームを選択",
    "text": "プレイ中のゲームを選び、DPIと感度を入力します。"
  },
  {
    "name": "移行先ゲームを選択",
    "text": "新しいゲームを選び、必要に応じてDPIを設定します。"
  },
  {
    "name": "計算結果をコピー",
    "text": "表示された数値ゲーム内の設定に入力します。"
  },
  {
    "name": "実測テスト",
    "text": "マウスパッド上で360度回転を行い移動距離を確認します。"
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export const content: MouseSensitivityLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "sourceGameLabel": "現在のゲーム",
    "targetGameLabel": "変換先のゲーム",
    "sourceDpiLabel": "現在のDPI",
    "targetDpiLabel": "変換先のDPI",
    "sensitivityLabel": "ゲーム内の感度設定値",
    "linkDpiLabel": "同じDPIを維持する",
    "sourceStationLabel": "現在の設定環境",
    "targetStationLabel": "移行先の設定環境",
    "guideSourceText": "プレイ中のゲームを選び、DPIと腰撃ち感度を入力します。",
    "guideTargetText": "移行先のゲームを選びます。DPI変更がない場合は連携のままにします。",
    "guideResultText": "計算結果を新しいゲームにコピーし、360度回転を確認します。",
    "sourceInputHint": "マウスソフトウェアおよびゲーム内設定から数値を確認してください。",
    "targetInputHint": "正しく入力されると変換後の数値が即座に表示されます。",
    "profileResetText": "選択したゲームの標準サンプル値にリセットされました。",
    "resultForGameTemplate": "3. {game} の設定画面にこの値を入力",
    "yawLabel": "Yawスケール",
    "measuredProfileLabel": "計測済みプロファイル",
    "documentedProfileLabel": "公式ドキュメント値",
    "targetSensitivityLabel": "入力する感度数値",
    "copyResultLabel": "結果をコピー",
    "copiedLabel": "コピー完了",
    "swapLabel": "変換方向を反転",
    "swapButtonLabel": "ゲームを入れ替える",
    "shareLabel": "リンクをコピー",
    "shareCopiedLabel": "リンクをコピーしました",
    "presetsLabel": "エイムプリセット",
    "presetFastLabel": "ハイセンシ 22 cm",
    "presetBalancedLabel": "ミドルセンシ 34 cm",
    "presetControlLabel": "ローセンシ 50 cm",
    "cmUnitLabel": "メートル法 (cm)",
    "inchUnitLabel": "ヤード・ポンド法 (inch)",
    "physicalArcLabel": "360度回転距離",
    "sourceEdpiLabel": "変換元 eDPI",
    "targetEdpiLabel": "変換先 eDPI",
    "countsLabel": "マウスカウント数",
    "matchQualityLabel": "プロファイル信頼度",
    "exactMathLabel": "公式Yaw一致",
    "calibrationLabel": "実測検証を推奨",
    "fastBandLabel": "高速帯域",
    "balancedBandLabel": "バランス帯域",
    "controlBandLabel": "コントロール帯域",
    "extendedBandLabel": "拡張帯域",
    "formulaLabel": "感度変換公式",
    "formulaText": "変換先感度 = 変換元感度 x 変換元DPI x 変換元Yaw / (変換先DPI x 変換先Yaw)",
    "verificationTitle": "マウスパッド上での実測確認",
    "verificationText": "マウスパッド上に目印をつけ、両方のゲームで同じ360度回転を行って移動距離を確認します。ゲーム固有の設定誤差を最小限に抑えます。",
    "baseAimOnlyText": "腰撃ち（Hipfire）専用の計算です。",
    "invalidInputText": "正の数値を入力してください。",
    "openGameMenuLabel": "ゲームプロファイルメニューを開く"
},
  seo: [
    {
        "type": "title",
        "text": "物理移動距離を維持してマウス感度を正確に計算および変換するガイド",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "ゲームごとに感度数値の意味は異なります。このコンバーターは各エンジンのYaw係数を用いて<strong>360度回転に必要な振り向きcm距離</strong>を正確に維持します。異なるDPI設定間でもスムーズなエイム移行が可能です。"
    },
    {
        "type": "paragraph",
        "html": "計算結果は腰撃ち（Hipfire）の水平回転に基づいています。照準器（ADS）や倍率スコープは個別の係数計算が必要です。"
    },
    {
        "type": "title",
        "text": "感度変換の計算公式とYaw係数",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "<strong>変換先感度 = 変換元感度 x 変換元DPI x 変換元Yaw / (変換先DPI x 変換先Yaw)</strong>。Yaw係数はマウスの1カウント入力に対してゲーム内のカメラが何度回転するかを示す定数です。"
    },
    {
        "type": "table",
        "headers": [
            "指標",
            "意味",
            "主な用途"
        ],
        "rows": [
            [
                "感度数値",
                "ゲーム内設定画面の数値",
                "該当ゲームでの設定変更"
            ],
            [
                "eDPI",
                "DPI x 感度数値",
                "同一次元での感度比較"
            ],
            [
                "360度cm",
                "1回転に必要な実測距離",
                "異ゲーム間でのエイム維持"
            ]
        ]
    },
    {
        "type": "title",
        "text": "対応ゲームプロファイルと精度基準",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "CS2、Valorant、Apex Legends、Overwatch 2、Fortnite、SourceおよびQuake系エンジン、Aim Labに対応しています。公式設定値と有志コミュニティの計測値を元に最適な変換結果を提供します。"
    },
    {
        "type": "tip",
        "title": "Fortniteの感度入力形式について",
        "html": "画面に表示されているパーセント数値をそのまま入力します（例: 7%の場合は <strong>7</strong> と入力してください）。"
    },
    {
        "type": "title",
        "text": "視野角（FOV）と360度回転距離の関係",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "自機を中心に360度回転する物理距離は、画面の視野角（FOV）に左右されません。ただし、画面上の視覚的な移動速度の体感はFOVによって変化するため注意が必要です。"
    },
    {
        "type": "title",
        "text": "ゲーム内での正確な動作検証手順",
        "level": 2
    },
    {
        "type": "list",
        "items": [
            "OSおよびマウスドライバーの加速機能を完全無効にします。",
            "マウスパッドの端にマウスの端を合わせ、目印となる壁の壁面を狙います。",
            "真後ろを経由して正確に360度回転させ、定尺で距離を計測します。",
            "必要に応じて設定画面の最低単位で数値を調整します。"
        ]
    },
    {
        "type": "tip",
        "title": "実測確認を推奨",
        "html": "ゲームのアップデートによる仕様変更を防ぐため、実際の移動距離を目視確認してください。"
    }
],
  faqTitle: 'マウス感度変換に関するよくある質問',
  faq: faqItems,
  bibliographyTitle: 'Sources',
  bibliography,
  howTo: howToItems,
  schemas: [appSchema, faqSchema, howToSchema],
};
