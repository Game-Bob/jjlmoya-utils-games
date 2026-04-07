export { gamesCategory } from './category';
export { default as GamesCategorySEO } from './category/GamesCategorySEO.astro';

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

export { ALL_TOOLS } from './tools';
export { TYPING_TEST_TOOL, typingTest } from './tool/typing-test';

export type { ToolLocaleContent as GamesToolLocaleContent } from './types';

