export { gamesCategory } from './category';
export const GamesCategorySEO = () => import('./category/GamesCategorySEO.astro').then((m) => m.default);

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  GamesToolEntry,
  GamesCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';
export { TYPING_TEST_TOOL, typingTest } from './tool/typing-test';
export { MOUSE_SENSITIVITY_CONVERTER_TOOL, mouseSensitivityConverter } from './tool/mouse-sensitivity-converter';
export type { MouseSensitivityLocaleContent } from './tool/mouse-sensitivity-converter/entry';
export type { MouseSensitivityUI } from './tool/mouse-sensitivity-converter/ui';

export type { ToolLocaleContent as GamesToolLocaleContent } from './types';

