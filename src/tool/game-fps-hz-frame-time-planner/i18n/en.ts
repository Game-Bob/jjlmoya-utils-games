import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { GameFrameTimeLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'game-fps-hz-frame-time-planner';
const title = 'Game FPS Hz Frame Time Planner';
const description = 'Compare game frame time with monitor refresh, VRR and VSync settings to understand where frames fit, repeat or risk tearing.';

const faqItems = [
  {
    question: 'What does frame time mean?',
    answer: 'Frame time is the time available to produce one frame, expressed in milliseconds. It is calculated as 1000 divided by FPS, so 60 FPS is about 16.67 ms per frame.',
  },
  {
    question: 'Why does a 144 Hz monitor have a 6.94 ms budget?',
    answer: 'A 144 Hz display refreshes 144 times per second. Dividing 1000 milliseconds by 144 gives a refresh interval of about 6.94 ms.',
  },
  {
    question: 'What does VRR change?',
    answer: 'Variable refresh rate lets a compatible display adjust its refresh timing to the game within a supported range. The planner marks FPS inside or outside the range; it does not measure the monitor or driver behavior.',
  },
  {
    question: 'What happens when FPS is higher than monitor Hz?',
    answer: 'A fixed refresh display cannot show every completed frame. With VSync off, extra frames can increase the chance of visible tearing. With VSync on, output is normally constrained by the synchronization path.',
  },
  {
    question: 'Is this a stutter detector?',
    answer: 'No. It is a planning tool using FPS values you provide. It cannot observe frame-time spikes, render queues, input latency, dropped frames or a specific game engine.',
  },
  {
    question: 'Should I cap FPS below the VRR maximum?',
    answer: 'A cap just below the configured VRR maximum is a common starting point when you want to avoid repeatedly hitting the top of the range. Test the result in your game because driver, game and display behavior differ.',
  },
];

const howToItems = [
  { name: 'Enter the game signal', text: 'Enter your minimum, usual and maximum FPS. If you only know one value, repeat it in the three fields so the timeline shows a single state.' },
  { name: 'Describe the display', text: 'Enter the monitor refresh rate. Enable VRR when the display supports adaptive sync and enter its lower and upper range.' },
  { name: 'Choose synchronization', text: 'Set VSync to match the setting you want to evaluate. The planner keeps VRR and VSync separate because they affect different parts of the display path.' },
  { name: 'Read the cadence', text: 'Compare each frame tile with the refresh pulses. Use the recommendation and the table to choose a sensible FPS cap or decide whether to investigate a real frame-time capture.' },
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

export const content: GameFrameTimeLocaleContent = {
  slug,
  title,
  description,
  ui: {
    workflowLabel: 'Read the cadence',
    workflowText: 'Tell the planner what the game produces, describe the display, then compare frame tiles with its refresh pulses.',
    signalSectionLabel: '1. Game signal',
    fpsMinLabel: 'Lowest FPS',
    fpsTypicalLabel: 'Usual FPS',
    fpsMaxLabel: 'Highest FPS',
    fpsHint: 'Use a recent in-game range or repeat one known FPS.',
    displaySectionLabel: '2. Display timing',
    refreshLabel: 'Monitor refresh',
    refreshHint: 'The fixed refresh ceiling used to calculate the frame budget.',
    vrrLabel: 'Variable refresh rate',
    vrrHint: 'Enable for Adaptive Sync, FreeSync or G-SYNC compatible modes.',
    vrrMinLabel: 'VRR floor',
    vrrMaxLabel: 'VRR ceiling',
    vsyncLabel: 'VSync enabled',
    presetsLabel: 'Quick monitor presets',
    preset60Label: '60 Hz',
    preset120Label: '120 Hz',
    preset144Label: '144 Hz',
    preset240Label: '240 Hz',
    sceneLabel: 'Frame tiles crossing monitor refresh pulses',
    refreshPulseLabel: 'REFRESH PULSES',
    frameLabel: 'GAME FRAMES',
    frameTimeLabel: 'Frame time',
    refreshBudgetLabel: 'Refresh budget',
    interpretationLabel: 'What the cadence says',
    typicalFpsLabel: 'Usual output',
    monitorLabel: 'Monitor',
    vrRangeLabel: 'VRR window',
    syncModeLabel: 'Sync path',
    vrrOnText: 'VRR on',
    vrrOffText: 'VRR off',
    vsyncOnText: 'VSync on',
    vsyncOffText: 'VSync off',
    resultGoodLabel: 'Cadence has room',
    resultCautionLabel: 'Cadence needs attention',
    resultWarningLabel: 'Tearing is possible',
    resultGoodText: 'Your usual FPS sits inside the active VRR window, so the display can follow the game signal.',
    resultBelowVrrText: 'Your usual FPS falls below the VRR floor. Expect repeats or uneven cadence until the game stays inside the window.',
    resultAboveVrrText: 'Your usual FPS exceeds the VRR ceiling. A cap below the ceiling is a useful starting point for testing.',
    resultFixedRefreshText: 'Your usual FPS matches the fixed refresh rate. This is the cleanest fixed-refresh target in this simple model.',
    resultTearingText: 'With VSync and VRR off, the display can scan while a new frame is arriving. Tearing is possible at every FPS.',
    resultMissedBudgetText: 'Your usual frame takes longer than one refresh interval. Expect repeated display intervals or judder when the cadence cannot be absorbed.',
    frameFitsLabel: 'Fits one refresh interval',
    frameMissesLabel: 'Longer than one refresh interval',
    insideVrrLabel: 'Inside VRR window',
    outsideVrrLabel: 'Outside VRR window',
    tearingPossibleLabel: 'Tearing possible',
    containedLabel: 'Sync contained',
    tableFpsLabel: 'Game FPS',
    tableFrameTimeLabel: 'Frame time',
    tableStatusLabel: 'Cadence reading',
    belowVrrStatus: 'Below VRR floor',
    insideVrrStatus: 'Inside VRR window',
    aboveVrrStatus: 'Above VRR ceiling',
    belowRefreshStatus: 'Below fixed refresh',
    matchedRefreshStatus: 'Matches refresh',
    aboveRefreshStatus: 'Above fixed refresh',
    noteLabel: 'Keep the model honest',
    noteText: 'This is a planning model, not a sensor. Real frame-time spikes, queue depth, driver limits and display behavior need an in-game capture.',
    invalidInputText: 'Enter positive values to restore the cadence.',
  },
  seo: [
    { type: 'title', text: 'How FPS and Refresh Rate Become Frame Time', level: 2 },
    { type: 'paragraph', html: 'Frame time is the inverse of frame rate: <strong>1000 / FPS</strong> gives milliseconds per frame. A 60 FPS game has about 16.67 ms for each frame, while 144 FPS has about 6.94 ms. Comparing those values with the monitor refresh interval makes an FPS number easier to interpret.' },
    { type: 'paragraph', html: 'The planner uses three declared points - lowest, usual and highest FPS - so it can show whether your performance range stays in one cadence zone or crosses a boundary. It does not sample the game, measure latency or claim that a stable average is a stable frame time.' },
    { type: 'title', text: 'Reading a Fixed Refresh Display', level: 2 },
    { type: 'table', headers: ['Signal', 'Frame time', 'Interpretation'], rows: [['60 FPS', '16.67 ms', 'Matches a 60 Hz interval'], ['120 FPS', '8.33 ms', 'Fits below a 144 Hz interval'], ['240 FPS', '4.17 ms', 'Exceeds a 144 Hz refresh ceiling']] },
    { type: 'paragraph', html: 'A frame that takes longer than one refresh interval can miss the next presentation opportunity. A frame rate above the refresh ceiling can produce work the panel cannot show at once. These are timing relationships, not a guarantee of perceived smoothness.' },
    { type: 'title', text: 'What VRR and VSync Mean in This Model', level: 2 },
    { type: 'paragraph', html: 'Variable refresh rate allows a compatible display to adapt its timing within a supported floor and ceiling. VSync describes a synchronization choice that can contain presentation to refresh timing, but it can also change latency and how missed intervals appear. Keep both switches explicit when comparing scenarios.' },
    { type: 'tip', title: 'Use the VRR ceiling as a test point', html: 'If your usual FPS sits above the VRR ceiling, try a cap just below it and compare actual frame-time consistency. The right value depends on the game, driver and display, so treat the cap as an experiment rather than a universal rule.' },
    { type: 'title', text: 'When the Planner Is Not Enough', level: 2 },
    { type: 'list', items: ['Use a frame-time graph when FPS is stable but motion still feels uneven.', 'Check the minimum and 1% low values when a short hitch matters more than the average.', 'Test the game at the same resolution, graphics settings and display mode used for play.', 'Treat the VRR range as a hardware setting to verify, not an assumed promise for every connection or mode.'] },
    { type: 'tip', title: 'A clean number is not a clean capture', html: 'This tool helps you choose what to test. It cannot see spikes, queue depth, scanout timing or a game-specific limiter. Confirm important decisions with a real frame-time capture.' },
  ],
  faqTitle: 'FPS and refresh rate questions',
  faq: faqItems,
  bibliographyTitle: 'Technical references',
  bibliography,
  howTo: howToItems,
  schemas: [appSchema, faqSchema, howToSchema],
};
