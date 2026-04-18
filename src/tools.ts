import type { ToolDefinition } from './types';
import { TYPING_TEST_TOOL } from './tool/typing-test';

export const ALL_TOOLS: ToolDefinition[] = [
  TYPING_TEST_TOOL,
];


export const ALL_ENTRIES = ALL_TOOLS.map(t => t.entry);
