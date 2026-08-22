import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { MouseSensitivityLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'conversor-sensibilidad-raton-juegos';
const title = 'Conversor de Sensibilidad de Ratón Entre Juegos';
const description = 'Convierte tu sensibilidad de ratón entre juegos manteniendo tu distancia física por 360 grados, DPI personalizado y precisión en partidas competitivas.';

const faqItems = [
  { question: '¿Qué mantiene exacto este conversor de sensibilidad de ratón?', answer: 'Preserva la distancia física exacta que recorre tu ratón para completar un giro horizontal de 360 grados, conocido como centímetros por 360.' },
  { question: '¿Por qué mi eDPI cambia al convertir a otro juego?', answer: 'El eDPI es simplemente la multiplicación del DPI por la sensibilidad del juego y solo es comparable en títulos con la misma escala yaw. Los centímetros por 360 son la medida universal real.' },
  { question: '¿El campo de visión (FOV) afecta a la conversión?', answer: 'El FOV altera la velocidad percibida y el tamaño de los objetivos, pero no la distancia física necesaria para girar 360 grados en la vista cadera (hipfire).' },
  { question: '¿La conversión es 100% exacta?', answer: 'Los cálculos matemáticos son exactos según las constantes yaw de cada juego. En títulos con coeficientes aproximados por la comunidad, se sugiere una pequeña comprobación física.' },
  { question: '¿Cómo introduzco la sensibilidad de Fortnite?', answer: 'Escribe el porcentaje horizontal tal como aparece en el menú de Fortnite, por ejemplo 7 para un 7 por ciento.' },
  { question: '¿Mis datos se envían a algún servidor?', answer: 'No. Todo el cálculo y las preferencias permanecen en tu navegador. El enlace de compartir solo guarda los parámetros en la propia URL.' },
];

const howToItems = [
  { name: 'Selecciona tu juego de origen', text: 'Elige tu juego actual e introduce la sensibilidad horizontal y el DPI de tu ratón.' },
  { name: 'Elige el juego de destino', text: 'Selecciona el juego al que deseas migrar. Deja el DPI vinculado si no vas a cambiar la configuración de tu ratón.' },
  { name: 'Copia el valor convertido', text: 'Lee la sensibilidad de destino resultante y cópiala directamente en los ajustes de ratón del nuevo juego.' },
  { name: 'Verifica el giro completo', text: 'Marca la posición de inicio del ratón, realiza un giro de 360 grados en ambos juegos y comprueba la distancia física.' },
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
    sourceGameLabel: 'Juego de origen',
    targetGameLabel: 'Juego de destino',
    sourceDpiLabel: 'DPI de origen',
    targetDpiLabel: 'DPI de destino',
    sensitivityLabel: 'Sensibilidad mostrada en el juego',
    linkDpiLabel: 'Mantener el mismo DPI',
    sourceStationLabel: 'Tu configuración actual',
    targetStationLabel: 'Tu configuración de destino',
    guideSourceText: 'Elige el juego que ya usas, copia su DPI y tu sensibilidad horizontal sin apuntar.',
    guideTargetText: 'Elige el juego al que vas a cambiar. Deja el DPI vinculado si no vas a modificar tu ratón.',
    guideResultText: 'Copia el resultado destacado en tu nuevo juego y comprueba tu giro físico en alfombrilla.',
    sourceInputHint: 'Encuentra estos datos en el software de tu ratón y en el menú del juego.',
    targetInputHint: 'El valor final de sensibilidad se actualiza al instante.',
    profileResetText: 'Sensibilidad ajustada al ejemplo base del juego seleccionado. Introduce tu valor real.',
    resultForGameTemplate: '3. Introduce este valor en {game}',
    yawLabel: 'Escala yaw',
    measuredProfileLabel: 'Perfil medido',
    documentedProfileLabel: 'Perfil oficial',
    targetSensitivityLabel: 'Sensibilidad a introducir',
    copyResultLabel: 'Copiar resultado',
    copiedLabel: 'Copiado',
    swapLabel: 'Invertir conversión',
    swapButtonLabel: 'Intercambiar juegos',
    shareLabel: 'Copiar enlace',
    shareCopiedLabel: 'Enlace copiado',
    presetsLabel: 'Ajustes de memoria muscular',
    presetFastLabel: 'Rápido 22 cm',
    presetBalancedLabel: 'Equilibrado 34 cm',
    presetControlLabel: 'Control 50 cm',
    cmUnitLabel: 'Métrico',
    inchUnitLabel: 'Imperial',
    physicalArcLabel: 'Giro de 360 grados',
    sourceEdpiLabel: 'eDPI de origen',
    targetEdpiLabel: 'eDPI de destino',
    countsLabel: 'Pulsos de ratón',
    matchQualityLabel: 'Confianza de la conversión',
    exactMathLabel: 'Constante yaw oficial',
    calibrationLabel: 'Comprobación recomendada',
    fastBandLabel: 'Órbita rápida',
    balancedBandLabel: 'Órbita equilibrada',
    controlBandLabel: 'Órbita de control',
    extendedBandLabel: 'Órbita extendida',
    formulaLabel: 'Fórmula de conversión',
    formulaText: 'sensibilidad destino = sensibilidad origen x DPI origen x yaw origen / (DPI destino x yaw destino)',
    verificationTitle: 'Ajuste fino en alfombrilla',
    verificationText: 'Coloca el ratón en una marca de tu alfombrilla y realiza un giro completo de 360 grados sin apuntar en ambos juegos para verificar la equivalencia exacta.',
    baseAimOnlyText: 'Conversión calculada para disparo desde la cadera. La mira telescópica (ADS) y las aceleraciones requieren calibración independiente.',
    invalidInputText: 'Introduce valores mayores que cero para calcular la conversión.',
    openGameMenuLabel: 'Abrir menú de perfiles de juego',
  },
  seo: [
    { type: 'title', text: 'Convierte Tu Sensibilidad Conservando Tu Memoria Muscular', level: 2 },
    { type: 'paragraph', html: 'La sensibilidad numérica no es equivalente entre distintos juegos. Este conversor utiliza la constante yaw exacta de cada motor de juego para garantizar que recorras la misma cantidad de <strong>centímetros por 360</strong> en tu alfombrilla.' },
    { type: 'paragraph', html: 'La conversión está optimizada para la vista horizontal desde la cadera (hipfire), asegurando que tu puntería y tiempo de reacción permanezcan intactos al cambiar de título.' },
    { type: 'title', text: 'Fórmula Matemática Empleada', level: 2 },
    { type: 'paragraph', html: '<strong>Sensibilidad destino = sensibilidad origen x DPI origen x yaw origen / (DPI destino x yaw destino).</strong> La constante yaw representa cuántos grados gira tu cámara por cada pulso enviado por el sensor del ratón.' },
    {
      type: 'table',
      headers: ['Métrica', 'Definición', 'Uso principal'],
      rows: [
        ['Sensibilidad', 'Valor numérico del menú del juego', 'Ajustar la opción dentro de ese juego'],
        ['eDPI', 'DPI multiplicado por la sensibilidad', 'Comparar jugadores dentro del mismo motor'],
        ['cm por 360', 'Distancia física en alfombrilla', 'Mantener puntería idéntica entre juegos distintos'],
      ],
    },
    { type: 'title', text: 'Perfiles de Juego Soportados', level: 2 },
    { type: 'paragraph', html: 'Incluye soporte probado para Counter Strike 2, Valorant, Apex Legends, Overwatch 2, Fortnite, juegos de motor Source y Quake, y Aim Lab.' },
    { type: 'tip', title: 'Formato en Fortnite', html: 'Escribe el valor porcentual tal como se muestra en pantalla. Si usas <strong>7%</strong>, introduce el número <strong>7</strong>.' },
    { type: 'title', text: 'Por Qué el FOV No Cambia la Distancia 360', level: 2 },
    { type: 'paragraph', html: 'Girar 360 grados sobre tu propio eje requiere exactamente la misma distancia física independientemente del ángulo de visión de tu pantalla.' },
    { type: 'title', text: 'Cómo Comprobar el Giro en Tu Alfombrilla', level: 2 },
    {
      type: 'list',
      items: [
        'Desactiva cualquier tipo de aceleración de ratón en Windows o el software de tu ratón.',
        'Alinea el ratón en el borde de tu alfombrilla apuntando a una referencia en el juego.',
        'Realiza un giro de 360 grados y mide la distancia exacta recorrida por tu mano.',
        'Ajusta el valor final en pasos mínimos si detectas ligeras variaciones de redondeo.',
      ],
    },
    { type: 'tip', title: 'Calibración física recomendada', html: 'Pequeñas actualizaciones de juego o redondeos en menús pueden variar ligeramente. Haz una prueba visual en el juego para un ajuste perfecto.' },
  ],
  faqTitle: 'Preguntas frecuentes sobre la conversión de sensibilidad',
  faq: faqItems,
  bibliographyTitle: 'Fuentes y referencias de calibración',
  bibliography,
  howTo: howToItems,
  schemas: [appSchema, faqSchema, howToSchema],
};
