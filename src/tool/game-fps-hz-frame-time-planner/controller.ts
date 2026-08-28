import { evaluateFramePlan } from './evaluator';
import { calculateFramePlan, type FramePlannerInput } from './logic';
import { renderInterpretation, renderMetrics, renderTable, renderTimeline } from './dom-views';
import { loadFramePlannerState, saveFramePlannerState } from './storage';
import type { GameFrameTimeUI } from './ui';

const defaults: FramePlannerInput = {
  fpsMin: 72,
  fpsTypical: 100,
  fpsMax: 118,
  refreshHz: 144,
  vrrEnabled: true,
  vrrMinHz: 48,
  vrrMaxHz: 144,
  vsyncEnabled: true,
};

function query<T extends Element>(root: ParentNode, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Missing frame planner element: ${selector}`);
  return element;
}

function numberInput(root: ParentNode, name: string): HTMLInputElement {
  return query<HTMLInputElement>(root, `[data-field="${name}"]`);
}

function readNumber(input: HTMLInputElement, fallback: number): number {
  const value = Number(input.value);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function readInput(root: ParentNode, previous: FramePlannerInput): FramePlannerInput {
  return {
    fpsMin: readNumber(numberInput(root, 'fpsMin'), previous.fpsMin),
    fpsTypical: readNumber(numberInput(root, 'fpsTypical'), previous.fpsTypical),
    fpsMax: readNumber(numberInput(root, 'fpsMax'), previous.fpsMax),
    refreshHz: readNumber(numberInput(root, 'refreshHz'), previous.refreshHz),
    vrrEnabled: query<HTMLInputElement>(root, '[data-field="vrrEnabled"]').checked,
    vrrMinHz: readNumber(numberInput(root, 'vrrMinHz'), previous.vrrMinHz),
    vrrMaxHz: readNumber(numberInput(root, 'vrrMaxHz'), previous.vrrMaxHz),
    vsyncEnabled: query<HTMLInputElement>(root, '[data-field="vsyncEnabled"]').checked,
  };
}

function setInput(root: ParentNode, state: FramePlannerInput): void {
  Object.entries(state).forEach(([name, value]) => {
    const field = root.querySelector<HTMLInputElement>(`[data-field="${name}"]`);
    if (!field) return;
    if (typeof value === 'boolean') field.checked = value;
    else field.value = String(value);
  });
}

function updateVrrFields(root: ParentNode): void {
  const enabled = query<HTMLInputElement>(root, '[data-field="vrrEnabled"]').checked;
  ['vrrMinHz', 'vrrMaxHz'].forEach((name) => {
    const field = numberInput(root, name);
    field.disabled = !enabled;
  });
  query<HTMLElement>(root, '[data-vrr-fields]').dataset.disabled = String(!enabled);
}

function updatePresetState(root: ParentNode, refreshHz: number): void {
  root.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach((button) => {
    button.toggleAttribute('aria-pressed', Number(button.dataset.preset) === refreshHz);
  });
}

export function initFramePlanner(root: HTMLElement, ui: GameFrameTimeUI): void {
  const stored = loadFramePlannerState();
  let state: FramePlannerInput = { ...defaults, ...stored };
  setInput(root, state);

  const render = (): void => {
    state = readInput(root, state);
    const result = calculateFramePlan(state);
    const evaluation = evaluateFramePlan(state, result);
    renderTimeline(query(root, '[data-timeline]'), result, ui);
    renderInterpretation(query(root, '[data-interpretation]'), result, evaluation, ui);
    renderMetrics(query(root, '[data-metrics]'), result, state, ui);
    renderTable(query(root, '[data-table]'), result, ui);
    query<HTMLElement>(root, '[data-note]').textContent = ui.noteText;
    updateVrrFields(root);
    updatePresetState(root, state.refreshHz);
    saveFramePlannerState(state);
  };

  root.querySelectorAll<HTMLInputElement>('input[data-field]').forEach((field) => {
    field.addEventListener('input', render);
    field.addEventListener('change', render);
  });
  root.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach((button) => {
    button.addEventListener('click', () => {
      numberInput(root, 'refreshHz').value = button.dataset.preset ?? String(defaults.refreshHz);
      render();
    });
  });
  render();
}
