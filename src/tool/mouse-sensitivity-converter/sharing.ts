import type { StoredSensitivityState } from './storage';

export function createSensitivityShareUrl(state: StoredSensitivityState, currentUrl: string): string {
  const url = new URL(currentUrl);
  const values = {
    from: state.sourceGameId,
    to: state.targetGameId,
    dpi: String(state.sourceDpi),
    targetDpi: String(state.targetDpi),
    sens: String(state.sourceSensitivity),
    linked: state.linkedDpi ? '1' : '0',
    unit: state.unit,
  };
  Object.entries(values).forEach(([key, value]) => url.searchParams.set(key, value));
  return url.toString();
}

export async function copyWithFeedback(button: HTMLElement, value: string, feedback: string): Promise<void> {
  await navigator.clipboard.writeText(value);
  const label = button.querySelector<HTMLElement>('[data-action-label]');
  if (!label) return;
  const original = label.textContent ?? '';
  label.textContent = feedback;
  window.setTimeout(() => { label.textContent = original; }, 1600);
}
