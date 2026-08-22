export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { TYPING_TEST_TOOL } from './tool/typing-test';
import { MOUSE_SENSITIVITY_CONVERTER_TOOL } from './tool/mouse-sensitivity-converter';

export const ALL_TOOLS: ToolDefinition[] = [
  TYPING_TEST_TOOL,
  MOUSE_SENSITIVITY_CONVERTER_TOOL,
];


