export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { TYPING_TEST_TOOL } from './tool/typing-test';
import { MOUSE_SENSITIVITY_CONVERTER_TOOL } from './tool/mouse-sensitivity-converter';
import { GAME_FPS_HZ_FRAME_TIME_PLANNER_TOOL } from './tool/game-fps-hz-frame-time-planner';

export const ALL_TOOLS: ToolDefinition[] = [
  TYPING_TEST_TOOL,
  MOUSE_SENSITIVITY_CONVERTER_TOOL,
  GAME_FPS_HZ_FRAME_TIME_PLANNER_TOOL,
];


