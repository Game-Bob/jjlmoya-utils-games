import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'conversor-sensibilidade-mouse-jogos';
const title = 'Conversor de Sensibilidade de Mouse Entre Jogos';
const description = 'Iguale sua distância física de mouse entre jogos competitivos. Converta a sensibilidade hipfire com valores DPI independentes, calcula cm por 360 e eDPI.';

const faqItems = [
  {
    "question": "O que este conversor de sensibilidade preserva ?",
    "answer": "Ele preserva a distância física exata em centímetros para uma volta completa de 360 graus."
  },
  {
    "question": "Por que o eDPI muda entre jogos ?",
    "answer": "O eDPI depende da escala yaw do jogo e só é comparável no mesmo motor."
  },
  {
    "question": "O campo de visão (FOV) afeta a conversão ?",
    "answer": "Não, a distância física para 360 graus permanece idêntica."
  },
  {
    "question": "A conversão é exata ?",
    "answer": "Os cálculos são exatos com base nas constantes yaw."
  },
  {
    "question": "Como inserir a sensibilidade do Fortnite ?",
    "answer": "Insira o número percentual diretamente, por exemplo 7 para 7%."
  },
  {
    "question": "Meus dados são salvos ?",
    "answer": "Não, todos os dados permanecem locais no seu navegador."
  }
];

const howToItems = [
  {
    "name": "Escolha o jogo de origem",
    "text": "Selecione o jogo atual e insira DPI e sensibilidade."
  },
  {
    "name": "Escolha o jogo de destino",
    "text": "Selecione o jogo de destino e ajuste o DPI."
  },
  {
    "name": "Copie o valor",
    "text": "Copie o resultado para as configurações do novo jogo."
  },
  {
    "name": "Verifique o giro",
    "text": "Faça um giro de 360 graus no mousepad para testar."
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
    "sourceGameLabel": "Jogo atual",
    "targetGameLabel": "Jogo de destino",
    "sourceDpiLabel": "DPI atual",
    "targetDpiLabel": "DPI de destino",
    "sensitivityLabel": "Sensibilidade no jogo",
    "linkDpiLabel": "Manter o mesmo DPI",
    "sourceStationLabel": "Sua configuração atual",
    "targetStationLabel": "Sua configuração de destino",
    "guideSourceText": "Escolha seu jogo atual, insira o DPI e sua sensibilidade horizontal sem mirar.",
    "guideTargetText": "Escolha o jogo de destino. Mantenha o DPI vinculado a menos que vá alterá-lo.",
    "guideResultText": "Copie o resultado para o novo jogo e verifique uma volta completa de 360 graus.",
    "sourceInputHint": "Encontre esses valores no software do mouse e no menu de opções do jogo.",
    "targetInputHint": "O valor final aparece abaixo assim que a configuração for válida.",
    "profileResetText": "Sensibilidade redefinida para um exemplo padrão. Substitua pelo seu valor real.",
    "resultForGameTemplate": "3. Insira este valor em {game}",
    "yawLabel": "Escala yaw",
    "measuredProfileLabel": "Perfil medido",
    "documentedProfileLabel": "Perfil oficial",
    "targetSensitivityLabel": "Insira esta sensibilidade",
    "copyResultLabel": "Copiar resultado",
    "copiedLabel": "Copiado",
    "swapLabel": "Inverter conversão",
    "swapButtonLabel": "Trocar",
    "shareLabel": "Copiar link",
    "shareCopiedLabel": "Link copiado",
    "presetsLabel": "Ajustes de memória muscular",
    "presetFastLabel": "Rápido 22 cm",
    "presetBalancedLabel": "Equilibrado 34 cm",
    "presetControlLabel": "Controle 50 cm",
    "cmUnitLabel": "Métrico",
    "inchUnitLabel": "Imperial",
    "physicalArcLabel": "Giro de 360 graus",
    "sourceEdpiLabel": "eDPI de origem",
    "targetEdpiLabel": "eDPI de destino",
    "countsLabel": "Pulsos do mouse",
    "matchQualityLabel": "Confiança da conversão",
    "exactMathLabel": "Constante yaw oficial",
    "calibrationLabel": "Verificação física recomendada",
    "fastBandLabel": "Órbita rápida",
    "balancedBandLabel": "Órbita equilibrada",
    "controlBandLabel": "Órbita de controle",
    "extendedBandLabel": "Órbita estendida",
    "formulaLabel": "Fórmula de conversão",
    "formulaText": "sensibilidade destino = sensibilidade origem x DPI origem x yaw origem / (DPI destino x yaw destino)",
    "verificationTitle": "Ajuste fino no mousepad",
    "verificationText": "Coloque o mouse em uma marca no mousepad e faça uma volta completa de 360 graus em ambos os jogos.",
    "baseAimOnlyText": "Conversão calculada apenas para tiro livre (hipfire).",
    "invalidInputText": "Insira valores maiores que zero.",
    "openGameMenuLabel": "Abrir menu de perfis de jogo"
},
  seo: [
    {
        "type": "title",
        "text": "Converter a Sensibilidade do Mouse Mantendo a Distância Física",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Os valores de sensibilidade não são equivalentes entre jogos diferentes. Este conversor usa a constante yaw para preservar os <strong>cm por 360</strong>, a distância exata necessária para um giro completo."
    },
    {
        "type": "paragraph",
        "html": "A conversão é otimizada para a visão horizontal sem mira (hipfire). Não garante equivalência visual ao usar miras telescópicas (ADS)."
    },
    {
        "type": "title",
        "text": "A Fórmula de Conversão de Sensibilidade",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "<strong>Sensibilidade destino = sensibilidade origem x DPI origem x yaw origem / (DPI destino x yaw destino).</strong>"
    },
    {
        "type": "table",
        "headers": [
            "Métrica",
            "Significado",
            "Melhor uso"
        ],
        "rows": [
            [
                "Sensibilidade",
                "Valor no menu do jogo",
                "Ajustar no jogo"
            ],
            [
                "eDPI",
                "DPI multiplicado pela sensibilidade",
                "Comparar jogadores no mesmo jogo"
            ],
            [
                "cm por 360",
                "Distância física no mousepad",
                "Manter a mesma mira entre jogos"
            ]
        ]
    },
    {
        "type": "title",
        "text": "Perfis de Jogos Suportados",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Suporta CS2, Valorant, Apex Legends, Overwatch 2, Fortnite, Quake e motores Source."
    },
    {
        "type": "tip",
        "title": "Formato Fortnite",
        "html": "Insira o valor percentual exibido no jogo, por exemplo <strong>7</strong> para 7 por cento."
    },
    {
        "type": "title",
        "text": "Por Que o Campo de Visão Não Altera a Distância 360",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Um giro de 360 graus requer a mesma distância física independentemente do campo de visão (FOV)."
    },
    {
        "type": "title",
        "text": "Como Verificar o Resultado no Jogo",
        "level": 2
    },
    {
        "type": "list",
        "items": [
            "Desative a aceleração do mouse.",
            "Alinhe o mouse em uma marca no mousepad.",
            "Faça uma volta completa de 360 graus.",
            "Ajuste o valor se necessário."
        ]
    },
    {
        "type": "tip",
        "title": "Verificação prática recomendada",
        "html": "Faça um teste no mousepad para garantir a máxima precisão. Para comparar com confiança, mantenha o mesmo DPI, resolução e proporção de tela nos dois jogos. A distância física é o melhor ponto de referência, enquanto FOV, zoom e opções visuais podem mudar a sensação da mira. Repita o movimento várias vezes e ajuste apenas depois de confirmar que o percurso no mousepad está consistente. Registre o valor final e a distância usada para poder retornar ao perfil anterior caso uma atualização do jogo altere a sensação."
    }
],
  faqTitle: 'Perguntas frequentes sobre sensibilidade do mouse',
  faq: faqItems,
  bibliographyTitle: 'Fontes e referências de calibração',
  bibliography,
  howTo: howToItems,
  schemas: [appSchema, faqSchema, howToSchema],
};
