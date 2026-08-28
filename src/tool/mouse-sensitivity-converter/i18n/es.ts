import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'conversor-sensibilidad-raton-juegos';
const title = 'Conversor de Sensibilidad de Ratón Entre Juegos';
const description = 'Iguala tu distancia física de ratón entre juegos competitivos. Convierte la sensibilidad sin apuntar con valores de DPI independientes, calcula cm por 360 y eDPI, y verifica perfiles medidos en el juego.';

const faqItems = [
  {
    "question": "¿Qué mantiene exacto este conversor de sensibilidad de ratón?",
    "answer": "Preserva la distancia física exacta que requiere tu ratón para completar un giro horizontal de 360 grados. Esto se conoce comúnmente como centímetros por 360 o pulgadas por 360."
  },
  {
    "question": "¿Por qué mi eDPI cambia al convertir a otro juego?",
    "answer": "El eDPI es simplemente la multiplicación del DPI por el número de sensibilidad del juego y solo se puede comparar directamente en títulos que utilicen la misma escala yaw. Los centímetros por 360 incluyen la constante yaw del motor y son la medida universal real que se conserva aquí."
  },
  {
    "question": "¿El campo de visión (FOV) altera la conversión?",
    "answer": "El campo de visión modifica la percepción visual de movimiento y el tamaño relativo de los objetivos, pero no altera la distancia física para un giro básico de 360 grados en este modelo. El apuntado con mira (ADS) y juegos con escalado dependiente del FOV requieren calibración independiente."
  },
  {
    "question": "¿La sensibilidad convertida es 100% exacta?",
    "answer": "Los cálculos matemáticos son exactos para las constantes yaw mostradas. Algunos coeficientes han sido medidos por la comunidad en lugar de ser publicados oficialmente por los desarrolladores, y las actualizaciones o multiplicadores ocultos pueden introducir pequeñas diferencias. La herramienta marca estos casos para su verificación física."
  },
  {
    "question": "¿Cómo introduzco la sensibilidad de Fortnite?",
    "answer": "Introduce la sensibilidad horizontal de ratón tal como aparece en el menú de Fortnite en formato porcentual, por ejemplo 7 para un 7 por ciento. Este perfil cubre únicamente la vista horizontal sin apuntar."
  },
  {
    "question": "¿Se suben mis datos a algún servidor?",
    "answer": "No. Todo el cálculo y las preferencias guardadas permanecen de forma privada en tu navegador web. El botón de compartir crea un enlace URL que solo contiene el juego, DPI, sensibilidad y unidad de medida que introdujiste."
  }
];

const howToItems = [
  {
    "name": "Elige la configuración de origen",
    "text": "Selecciona tu juego actual, introduce su sensibilidad horizontal básica y escribe el DPI de ratón utilizado."
  },
  {
    "name": "Elige la configuración de destino",
    "text": "Selecciona el juego de destino. Mantén el DPI vinculado si la sensibilidad de tu ratón no cambia, o desvincúlalo para escribir el nuevo DPI."
  },
  {
    "name": "Copia el valor convertido",
    "text": "Consulta la sensibilidad de destino y el arco físico resultante. Copia el valor en la opción de sensibilidad horizontal sin apuntar del nuevo juego."
  },
  {
    "name": "Verifica un giro completo",
    "text": "Marca la posición inicial de tu ratón, gira 360 grados exactos en ambos títulos y compara el recorrido de tu mano. Ajusta si el perfil lo requiere."
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: MouseSensitivityLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "sourceGameLabel": "Juego actual",
    "targetGameLabel": "Juego de destino",
    "sourceDpiLabel": "DPI actual",
    "targetDpiLabel": "DPI de destino",
    "sensitivityLabel": "Sensibilidad mostrada en el juego",
    "linkDpiLabel": "Mantener el mismo DPI",
    "sourceStationLabel": "Tu configuración actual",
    "targetStationLabel": "Tu configuración de destino",
    "guideSourceText": "Elige el juego que ya usas, copia su DPI y tu sensibilidad horizontal sin apuntar.",
    "guideTargetText": "Elige el juego al que vas a cambiar. Deja el DPI vinculado si no vas a modificar tu ratón.",
    "guideResultText": "Copia el resultado destacado en tu nuevo juego y comprueba tu giro físico en alfombrilla.",
    "sourceInputHint": "Encuentra estos datos en el software de tu ratón y en el menú del juego.",
    "targetInputHint": "El valor final de sensibilidad se actualiza al instante.",
    "profileResetText": "Sensibilidad ajustada al ejemplo base del juego seleccionado. Introduce tu valor real.",
    "resultForGameTemplate": "3. Introduce este valor en {game}",
    "yawLabel": "Escala yaw",
    "measuredProfileLabel": "Perfil medido",
    "documentedProfileLabel": "Predeterminado oficial",
    "targetSensitivityLabel": "Sensibilidad a introducir",
    "copyResultLabel": "Copiar resultado",
    "copiedLabel": "Copiado",
    "swapLabel": "Invertir conversión",
    "swapButtonLabel": "Intercambiar",
    "shareLabel": "Copiar enlace",
    "shareCopiedLabel": "Enlace copiado",
    "presetsLabel": "Ajustes de memoria muscular",
    "presetFastLabel": "Rápido 22 cm",
    "presetBalancedLabel": "Equilibrado 34 cm",
    "presetControlLabel": "Control 50 cm",
    "cmUnitLabel": "Métrico",
    "inchUnitLabel": "Imperial",
    "physicalArcLabel": "Un giro completo",
    "sourceEdpiLabel": "eDPI de origen",
    "targetEdpiLabel": "eDPI de destino",
    "countsLabel": "Pulsos de ratón",
    "matchQualityLabel": "Confianza de la conversión",
    "exactMathLabel": "Constante yaw oficial",
    "calibrationLabel": "Comprobación recomendada",
    "fastBandLabel": "Órbita rápida",
    "balancedBandLabel": "Órbita equilibrada",
    "controlBandLabel": "Órbita de control",
    "extendedBandLabel": "Órbita extendida",
    "formulaLabel": "Ecuación de conversión",
    "formulaText": "sensibilidad destino = sensibilidad origen x DPI origen x yaw origen / (DPI destino x yaw destino)",
    "verificationTitle": "Cierra el bucle de calibración",
    "verificationText": "Marca un punto de inicio en tu alfombrilla y realiza el mismo giro completo sin apuntar en ambos juegos. Pequeñas diferencias pueden deberse a redondeos en ajustes, multiplicadores ocultos o actualizaciones del comportamiento de entrada.",
    "baseAimOnlyText": "Solo disparo horizontal desde la cadera. El apuntado con mira (ADS), aceleraciones, multiplicadores verticales y el ajuste de distancia al monitor basado en FOV quedan fuera de esta conversión.",
    "invalidInputText": "Introduce valores positivos para restaurar la órbita.",
    "openGameMenuLabel": "Abrir menú de perfiles de juego"
},
  seo: [
    {
        "type": "title",
        "text": "Convierte Tu Sensibilidad de Ratón Compartiendo una Distancia Física Exacta",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Los valores numéricos de sensibilidad no significan lo mismo en todos los juegos. Este conversor utiliza la constante yaw exacta de cada perfil para garantizar que recorras los mismos <strong>centímetros por 360</strong>, la distancia física que necesita tu mano para realizar un giro horizontal completo. También te permite utilizar valores de DPI independientes para la configuración de origen y destino."
    },
    {
        "type": "paragraph",
        "html": "El resultado está optimizado para la vista horizontal básica desde la cadera (hipfire). No pretende conservar la percepción visual al usar miras telescópicas (ADS) ni la distancia al monitor, ya que estos sistemas dependen del campo de visión (FOV), el nivel de zoom y los multiplicadores específicos de cada título."
    },
    {
        "type": "title",
        "text": "Fórmula Matemática Empleada Para la Conversión",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "<strong>Sensibilidad destino = sensibilidad origen x DPI origen x yaw origen / (DPI destino x yaw destino).</strong> La constante yaw representa cuántos grados horizontales gira tu cámara por cada pulso enviado por el sensor del ratón con sensibilidad 1. Esta misma relación nos permite calcular los centímetros por 360 mediante la fórmula 2.54 x 360 / (DPI x sensibilidad x yaw)."
    },
    {
        "type": "table",
        "headers": [
            "Medición",
            "Significado",
            "Mejor uso"
        ],
        "rows": [
            [
                "Sensibilidad",
                "Valor numérico dentro del menú del juego",
                "Ajustar la opción dentro de ese juego en particular"
            ],
            [
                "eDPI",
                "DPI multiplicado por la sensibilidad del juego",
                "Comparar jugadores dentro del mismo motor y escala yaw"
            ],
            [
                "cm por 360",
                "Distancia física en alfombrilla para 360 grados",
                "Mantener tu memoria muscular idéntica entre juegos distintos"
            ]
        ]
    },
    {
        "type": "title",
        "text": "Perfiles de Juego Soportados y Niveles de Confianza",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Los perfiles iniciales cubren Counter Strike 2, Valorant, Apex Legends, Overwatch 2, Fortnite, motores Source y Quake predeterminados, y la sensibilidad nativa de Aim Lab. Los juegos Source y Quake utilizan una constante yaw predeterminada ampliamente documentada. Otros coeficientes han sido medidos minuciosamente por la comunidad, por lo que la interfaz los señala claramente para una comprobación práctica."
    },
    {
        "type": "tip",
        "title": "Formato de entrada en Fortnite",
        "html": "Utiliza el valor porcentual tal como se muestra en pantalla. Introduce el número <strong>7</strong> cuando el juego muestre 7 por ciento. No introduzcas 0.07."
    },
    {
        "type": "title",
        "text": "Por Qué el Campo de Visión (FOV) No Es una Entrada en Esta Conversión",
        "level": 2
    },
    {
        "type": "paragraph",
        "html": "Una equivalencia física a 360 grados se basa únicamente en la rotación angular y el desplazamiento de tu mano, por lo que el campo de visión no influye en este cálculo. El FOV cambia únicamente la velocidad percibida del movimiento en pantalla. Los jugadores que deseen igualar el desplazamiento visual entre diferentes niveles de zoom deben recurrir a un método independiente de distancia al monitor."
    },
    {
        "type": "title",
        "text": "Cómo Verificar el Resultado Directamente en el Juego",
        "level": 2
    },
    {
        "type": "list",
        "items": [
            "Desactiva cualquier tipo de aceleración de ratón en Windows o el software del fabricante y utiliza la vista básica sin apuntar.",
            "Coloca el ratón junto a una marca fija de tu alfombrilla y apunta a una referencia visual clara dentro del juego.",
            "Realiza un giro completo de 360 grados hasta volver a la referencia inicial y mide la distancia exacta recorrida por tu mano.",
            "Repite el proceso varias veces para detectar cualquier desviación por redondeo en los menús y ajusta el valor final en la menor cifra posible."
        ]
    },
    {
        "type": "tip",
        "title": "Un conversor es un instrumento de partida",
        "html": "Las actualizaciones de los juegos, archivos de configuración y multiplicadores por modo pueden alterar el comportamiento real. Conserva el valor calculado, pero confía siempre en una comprobación física de 360 grados en tu alfombrilla cuando el perfil esté marcado como medido."
    }
],
  faqTitle: 'Preguntas frecuentes sobre la conversión de sensibilidad de ratón',
  faq: faqItems,
  bibliographyTitle: 'Fuentes y referencias de calibración',
  bibliography,
  howTo: howToItems,
  schemas: [appSchema, faqSchema, howToSchema],
};
