import { typingTest } from './entry';
export * from './entry';
export const TYPING_TEST_TOOL: ToolDefinition = {
  entry: typingTest,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
