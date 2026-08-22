export { typingTest } from './tool/typing-test/entry';
export type { TypingTestUI, TypingTestLocaleContent } from './tool/typing-test/entry';
export { mouseSensitivityConverter } from './tool/mouse-sensitivity-converter/entry';
export type { MouseSensitivityLocaleContent } from './tool/mouse-sensitivity-converter/entry';
export type { MouseSensitivityUI } from './tool/mouse-sensitivity-converter/ui';
export { gamesCategory } from './category';
import { typingTest } from './tool/typing-test/entry';
import { mouseSensitivityConverter } from './tool/mouse-sensitivity-converter/entry';

export const ALL_ENTRIES = [typingTest, mouseSensitivityConverter];
