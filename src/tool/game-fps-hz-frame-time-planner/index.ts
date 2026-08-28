import type { ToolDefinition } from '../../types';
import { gameFpsHzFrameTimePlanner } from './entry';

export * from './entry';

export const GAME_FPS_HZ_FRAME_TIME_PLANNER_TOOL: ToolDefinition = {
  entry: gameFpsHzFrameTimePlanner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
