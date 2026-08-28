import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'konverter-chuvstvitelnosti-myshi-igr';
const title = 'Конвертер Чувствительности Мыши Между Играми';
const description = 'Сопоставьте физическое расстояние мыши в киберспортивных играх. Переводите чувствительность от бедра с независимым DPI и см на 360.';

const faqItems = [
  {
    "question": "Что сохраняет этот конвертер чувствительности ?",
    "answer": "Он сохраняет физическое расстояние в сантиметрах для полного разворота на 360 градусов."
  },
  {
    "question": "Почему изменяется значение eDPI ?",
    "answer": "eDPI зависит от коэффициента yaw конкретного игрового движка."
  },
  {
    "question": "Влияет ли угол обзора FOV на конвертацию ?",
    "answer": "Нет, дистанция для поворота на 360 градусов от бедра остается неизменной."
  },
  {
    "question": "Насколько точен расчет ?",
    "answer": "Расчет математически точен на основе констант yaw."
  },
  {
    "question": "Как ввести чувствительность Fortnite ?",
    "answer": "Вводите число процентов так, как в меню, например 7 для 7%."
  },
  {
    "question": "Сохраняются ли мои данные ?",
    "answer": "Нет, все вычисления выполняются исключительно в вашем браузере."
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB' },
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
    "swapButtonLabel": "Поменять",
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
    "verificationText": "Отметьте точку старта на коврике и сделайте полный разворот на 360 градусов в обеих играх.",
    "baseAimOnlyText": "Только для стрельбы от бедра.",
    "invalidInputText": "Введите положительные значения.",
    "openGameMenuLabel": "Открыть меню профилей игр"
},
  seo: [
    {
        "type": "title",
        "text": "Конвертация Чувствительности Мыши С Сохранением Дистанции",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Числовые значения чувствительности различаются в играх. Конвертер использует угловой коэффициент yaw каждого движка для сохранения <strong>см на 360 градусов</strong>, то есть физического расстояния на коврике."
    },
    {
        "type": "paragraph",
        "html": "Расчет предназначен для базового обзора от бедра без прицела."
    },
    {
        "type": "title",
        "text": "Формула Расчета Чувствительности",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "<strong>Целевая чувствительность = исх. чувствительность x исх. DPI x исх. yaw / (целевой DPI x целевой yaw).</strong>"
    },
    {
        "type": "table",
        "headers": [
            "Метрика",
            "Значение",
            "Применение"
        ],
        "rows": [
            [
                "Чувствительность",
                "Число в меню игры",
                "Изменение настройки в игре"
            ],
            [
                "eDPI",
                "DPI умноженный на чувствительность",
                "Сравнение игроков в одной игре"
            ],
            [
                "см на 360",
                "Расстояние на коврике",
                "Сохранение прицела между играми"
            ]
        ]
    },
    {
        "type": "title",
        "text": "Поддерживаемые Игровые Профили",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Поддерживаются CS2, Valorant, Apex Legends, Overwatch 2, Fortnite, Quake и игры на движке Source."
    },
    {
        "type": "tip",
        "title": "Формат Fortnite",
        "html": "Вводите значение процентов, например <strong>7</strong> для 7 процентов."
    },
    {
        "type": "title",
        "text": "Угол Обзора FOV и Дистанция 360",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Разворот на 360 градусов не зависит от угла обзора экрана (FOV)."
    },
    {
        "type": "title",
        "text": "Проверка Результата в Играх",
        "level": 2
    },
    {
        "type": "list",
        "items": [
            "Отключите акселерацию мыши в системе.",
            "Установите мышь у края коврика.",
            "Сделайте полный разворот на 360 градусов.",
            "При необходимости скорректируйте значение."
        ]
    },
    {
        "type": "tip",
        "title": "Рекомендуется замер на коврике",
        "html": "Сделайте реальный контрольный замер на коврике для лучшей точности. Для честного сравнения используйте одинаковые DPI, разрешение и соотношение сторон в обеих играх. Физическое расстояние остаётся главным ориентиром, а FOV, масштаб и графические параметры могут менять ощущение прицеливания. Повторите полный разворот несколько раз и проверьте, возвращается ли курсор к той же точке. Если результат заметно отличается, сначала проверьте ускорение мыши, настройки драйвера, частоту опроса и фактическое значение DPI. Сохраните итоговый профиль вместе с условиями замера, чтобы его можно было восстановить после смены игры или оборудования. Проверяйте настройки после обновлений."
    }
],
  faqTitle: 'Часто задаваемые вопросы о чувствительности мыши',
  faq: faqItems,
  bibliographyTitle: 'Источники и ссылки для калибровки',
  bibliography,
  howTo: howToItems,
  schemas: [appSchema, faqSchema, howToSchema],
};
