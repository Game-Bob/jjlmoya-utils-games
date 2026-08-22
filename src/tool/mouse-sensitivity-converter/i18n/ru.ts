import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'konverter-chuvstvitelnosti-myshi-igr';
const title = 'Конвертер чувствительности мыши между играми';
const description = 'Переводите чувствительность мыши между играми с сохранением физического расстояния на 360 градусов и eDPI.';

const faqItems = [
  {
    "question": "Что сохраняет этот конвертер чувствительности?",
    "answer": "Он сохраняет физическое расстояние в сантиметрах для полного разворота на 360 градусов."
  },
  {
    "question": "Почему изменяется значение eDPI при конвертации?",
    "answer": "eDPI зависит от коэффициента yaw конкретного игрового движка."
  },
  {
    "question": "Влияет ли угол обзора FOV на конвертацию?",
    "answer": "Нет, дистанция для поворота на 360 градусов от бедра остается неизменной."
  },
  {
    "question": "Насколько точен математический расчет?",
    "answer": "Расчет математически точен на основе официальных и измеренных констант yaw."
  },
  {
    "question": "Как ввести чувствительность для Fortnite?",
    "answer": "Вводите число процентов так, как в меню, например 7 для 7%."
  },
  {
    "question": "Сохраняются ли мои данные на сервере?",
    "answer": "Нет, все вычисления выполняются исключительно локально в вашем браузере."
  }
];

const howToItems = [
  {
    "name": "Выберите исходную игру",
    "text": "Укажите текущую игру, ее DPI и чувствительность."
  },
  {
    "name": "Выберите целевую игру",
    "text": "Выберите новую игру и при необходимости измените DPI."
  },
  {
    "name": "Скопируйте значение",
    "text": "Вставьте полученную чувствительность в настройки игры."
  },
  {
    "name": "Проверьте разворот",
    "text": "Сделайте полный оборот на коврике для проверки."
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
    "sourceGameLabel": "Текущая игра",
    "targetGameLabel": "Целевая игра",
    "sourceDpiLabel": "Текущий DPI",
    "targetDpiLabel": "Целевой DPI",
    "sensitivityLabel": "Чувствительность в игре",
    "linkDpiLabel": "Сохранять тот же DPI",
    "sourceStationLabel": "Ваша текущая настройка",
    "targetStationLabel": "Целевая настройка",
    "guideSourceText": "Выберите текущую игру, укажите DPI и чувствительность от бедра.",
    "guideTargetText": "Выберите целевую игру. Оставьте DPI привязанным, если не меняете его.",
    "guideResultText": "Скопируйте полученное значение в новую игру и проверьте разворот.",
    "sourceInputHint": "Найдите эти данные в ПО мыши и настройках игры.",
    "targetInputHint": "Итоговое значение появится ниже сразу после ввода.",
    "profileResetText": "Значение сброшено на стандартный пример для выбранной игры.",
    "resultForGameTemplate": "3. Введите это значение в {game}",
    "yawLabel": "Шкала yaw",
    "measuredProfileLabel": "Измеренный профиль",
    "documentedProfileLabel": "Официальный профиль",
    "targetSensitivityLabel": "Введите эту чувствительность",
    "copyResultLabel": "Скопировать результат",
    "copiedLabel": "Скопировано",
    "swapLabel": "Обратная конвертация",
    "swapButtonLabel": "Поменять игры местами",
    "shareLabel": "Скопировать ссылку",
    "shareCopiedLabel": "Ссылка скопирована",
    "presetsLabel": "Пресеты мышечной памяти",
    "presetFastLabel": "Быстрый 22 см",
    "presetBalancedLabel": "Сбалансированный 34 см",
    "presetControlLabel": "Контроль 50 см",
    "cmUnitLabel": "Метрическая",
    "inchUnitLabel": "Имперская",
    "physicalArcLabel": "Полный разворот",
    "sourceEdpiLabel": "Исходный eDPI",
    "targetEdpiLabel": "Целевой eDPI",
    "countsLabel": "Отсчеты мыши",
    "matchQualityLabel": "Точность профиля",
    "exactMathLabel": "Точное совпадение yaw",
    "calibrationLabel": "Рекомендуется физическая проверка",
    "fastBandLabel": "Быстрая зона",
    "balancedBandLabel": "Сбалансированная зона",
    "controlBandLabel": "Зона контроля",
    "extendedBandLabel": "Расширенная зона",
    "formulaLabel": "Формула конвертации",
    "formulaText": "целевая чувствительность = исх. чувствительность x исх. DPI x исх. yaw / (целевой DPI x целевой yaw)",
    "verificationTitle": "Проверка на коврике",
    "verificationText": "Отметьте точку старта на коврике и сделайте полный разворот на 360 градусов в обеих играх для проверки.",
    "baseAimOnlyText": "Только для стрельбы от бедра.",
    "invalidInputText": "Введите положительные значения.",
    "openGameMenuLabel": "Открыть меню профилей игр"
},
  seo: [
    {
        "type": "title",
        "text": "Конвертация чувствительности мыши с сохранением дистанции",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Значения чувствительности различаются в разных играх. Конвертер использует угловой коэффициент yaw каждого движка для сохранения физического расстояния в <strong>сантиметрах на разворот 360 градусов</strong> на вашем коврике."
    },
    {
        "type": "paragraph",
        "html": "Расчет предназначен для базового обзора от бедра без использования оптических прицелов."
    },
    {
        "type": "title",
        "text": "Математическая формула расчета чувствительности",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "<strong>Целевая чувствительность = исх. чувствительность x исх. DPI x исх. yaw / (целевой DPI x целевой yaw).</strong> Коэффициент yaw определяет угол поворота камеры за один импульс сенсора."
    },
    {
        "type": "table",
        "headers": [
            "Метрика",
            "Определение",
            "Применение"
        ],
        "rows": [
            [
                "Чувствительность",
                "Значение в меню настройки игры",
                "Изменение настройки в игре"
            ],
            [
                "eDPI",
                "DPI умноженный на чувствительность",
                "Сравнение игроков в одном движке"
            ],
            [
                "см на 360",
                "Физическое расстояние на коврике",
                "Сохранение прицела между разными играми"
            ]
        ]
    },
    {
        "type": "title",
        "text": "Поддерживаемые профили игр и точность",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Поддерживаются CS2, Valorant, Apex Legends, Overwatch 2, Fortnite, Quake и игры на движке Source. Профили с погрешностью отмечены для калибровки."
    },
    {
        "type": "tip",
        "title": "Формат ввода Fortnite",
        "html": "Вводите число процентов так, как оно указано в меню игры. Например, для 7% введите число <strong>7</strong>."
    },
    {
        "type": "title",
        "text": "Угол обзора FOV и дистанция полного разворота",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Полный разворот на 360 градусов вокруг своей оси требует одинакового физического перемещения мыши независимо от угла обзора экрана."
    },
    {
        "type": "title",
        "text": "Проверка и калибровка результата в игре",
        "level": 2
    },
    {
        "type": "list",
        "items": [
            "Отключите любую акселерацию мыши в операционной системе.",
            "Установите мышь у края коврика и наведите прицел на ориентир.",
            "Сделайте полный оборот на 360 градусов и измерьте расстояние.",
            "При необходимости скорректируйте значение минимальным шагом."
        ]
    },
    {
        "type": "tip",
        "title": "Рекомендуется физическая проверка",
        "html": "Сделайте контрольный замер на коврике для идеальной настройки прицеливания."
    }
],
  faqTitle: 'Частые вопросы о конвертации чувствительности',
  faq: faqItems,
  bibliographyTitle: 'Sources',
  bibliography,
  howTo: howToItems,
  schemas: [appSchema, faqSchema, howToSchema],
};
