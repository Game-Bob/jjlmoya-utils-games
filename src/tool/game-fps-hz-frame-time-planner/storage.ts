import type { FramePlannerInput } from './logic';

const STORAGE_KEY = 'jjlmoya-games-frame-planner';

export function loadFramePlannerState(): Partial<FramePlannerInput> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return {};
    return parsed as Partial<FramePlannerInput>;
  } catch {
    return {};
  }
}

export function saveFramePlannerState(input: FramePlannerInput): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {}
}
