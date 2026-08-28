export type DisplayUnit = 'metric' | 'imperial';

export interface StoredSensitivityState {
  sourceGameId: string;
  targetGameId: string;
  sourceDpi: number;
  targetDpi: number;
  sourceSensitivity: number;
  linkedDpi: boolean;
  unit: DisplayUnit;
}

const STORAGE_KEY = 'mouse-sensitivity-converter-state-v2';

export function loadSensitivityState(): StoredSensitivityState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as StoredSensitivityState : null;
  } catch {
    return null;
  }
}

export function saveSensitivityState(state: StoredSensitivityState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}
