import type { ToolDefinition } from '../../types';
import { mouseSensitivityConverter } from './entry';

export * from './entry';

export const MOUSE_SENSITIVITY_CONVERTER_TOOL: ToolDefinition = {
  entry: mouseSensitivityConverter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
