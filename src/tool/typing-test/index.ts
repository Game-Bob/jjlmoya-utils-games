import type { GamesToolEntry, ToolDefinition, ToolLocaleContent } from '../../types';
import TypingTestComponent from './component.astro';
import TypingTestSEO from './seo.astro';
import TypingTestBibliography from './bibliography.astro';

export interface TypingTestUI {
  words: string;
  wpm: string;
  accuracy: string;
  timeUp: string;
  playAgain: string;
  share: string;
  copied: string;
}

export type TypingTestLocaleContent = ToolLocaleContent<TypingTestUI>;

export const typingTest: GamesToolEntry<TypingTestUI> = {
  id: 'typing-test',
  icons: { bg: 'mdi:keyboard', fg: 'mdi:lightning-bolt' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const TYPING_TEST_TOOL: ToolDefinition = {
  entry: typingTest,
  Component: TypingTestComponent,
  SEOComponent: TypingTestSEO,
  BibliographyComponent: TypingTestBibliography,
};
