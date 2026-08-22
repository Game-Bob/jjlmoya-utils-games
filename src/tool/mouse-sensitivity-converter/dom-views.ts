import { evaluateAimBand, evaluateMatchQuality } from './evaluator';
import { getGameProfile } from './logic';
import type { SensitivityResult } from './logic';
import type { StoredSensitivityState } from './storage';
import type { MouseSensitivityUI } from './ui';

function element<T extends Element>(root: ParentNode, selector: string): T {
  const found = root.querySelector<T>(selector);
  if (!found) throw new Error(`Missing sensitivity converter element: ${selector}`);
  return found;
}

function compactNumber(value: number, digits = 2): string {
  return new Intl.NumberFormat('en', { maximumFractionDigits: digits }).format(value);
}

function setText(root: ParentNode, selector: string, text: string): void {
  element<HTMLElement>(root, selector).textContent = text;
}

function profileConfidence(profileId: string, ui: MouseSensitivityUI): string {
  return getGameProfile(profileId).confidence === 'documented'
    ? ui.documentedProfileLabel
    : ui.measuredProfileLabel;
}

function aimBandLabel(result: SensitivityResult, ui: MouseSensitivityUI): string {
  const labels = {
    fast: ui.fastBandLabel,
    balanced: ui.balancedBandLabel,
    control: ui.controlBandLabel,
    extended: ui.extendedBandLabel,
  };
  return labels[evaluateAimBand(result.cmPer360)];
}

function updateProfiles(root: HTMLElement, state: StoredSensitivityState, ui: MouseSensitivityUI): void {
  const source = getGameProfile(state.sourceGameId);
  const target = getGameProfile(state.targetGameId);
  setText(root, '[data-source-yaw]', source.yaw.toString());
  setText(root, '[data-target-yaw]', target.yaw.toString());
  setText(root, '[data-source-confidence]', profileConfidence(source.id, ui));
  setText(root, '[data-target-confidence]', profileConfidence(target.id, ui));
  setText(root, '[data-target-result-label]', ui.resultForGameTemplate.replace('{game}', target.name));
  root.dataset.sourceGame = source.id;
  root.dataset.targetGame = target.id;
}

function updateDistance(root: HTMLElement, state: StoredSensitivityState, result: SensitivityResult, ui: MouseSensitivityUI): void {
  const metric = state.unit === 'metric';
  const primary = metric ? result.cmPer360 : result.inchesPer360;
  const secondary = metric ? result.inchesPer360 : result.cmPer360;
  const primaryUnit = metric ? 'cm' : 'in';
  const secondaryUnit = metric ? 'in' : 'cm';
  setText(root, '[data-distance-primary]', `${compactNumber(primary)} ${primaryUnit}`);
  setText(root, '[data-distance-secondary]', `${compactNumber(secondary)} ${secondaryUnit}`);
  setText(root, '[data-aim-band]', aimBandLabel(result, ui));
}

function updateMetrics(root: HTMLElement, result: SensitivityResult): void {
  setText(root, '[data-source-edpi]', compactNumber(result.sourceEdpi, 1));
  setText(root, '[data-target-edpi]', compactNumber(result.targetEdpi, 1));
  setText(root, '[data-counts]', compactNumber(result.countsPer360, 0));
  const target = getGameProfile(root.dataset.targetGame ?? 'valorant');
  const resultText = result.roundedTargetSensitivity.toFixed(target.precision).replace(/\.?0+$/, '');
  setText(root, '[data-target-result]', resultText);
  element<HTMLElement>(root, '[data-copy-result]').dataset.copyValue = resultText;
}

function updateQuality(root: HTMLElement, state: StoredSensitivityState, ui: MouseSensitivityUI): void {
  const source = getGameProfile(state.sourceGameId);
  const target = getGameProfile(state.targetGameId);
  const quality = evaluateMatchQuality(source, target);
  setText(root, '[data-quality]', quality === 'documented' ? ui.exactMathLabel : ui.calibrationLabel);
  root.dataset.quality = quality;
}

function updateOrbit(root: HTMLElement, result: SensitivityResult): void {
  const normalized = Math.min(1, Math.max(0, (result.cmPer360 - 15) / 65));
  const sweep = `${70 + normalized * 230}deg`;
  const travel = `${18 + normalized * 68}%`;
  root.style.setProperty('--n-orbit-sweep', sweep);
  root.style.setProperty('--n-mouse-travel', travel);
  root.dataset.valid = 'true';
}

export function renderSensitivityLab(
  root: HTMLElement,
  state: StoredSensitivityState,
  result: SensitivityResult,
  ui: MouseSensitivityUI,
): void {
  updateProfiles(root, state, ui);
  updateDistance(root, state, result, ui);
  updateMetrics(root, result);
  updateQuality(root, state, ui);
  updateOrbit(root, result);
  element<HTMLElement>(root, '[data-invalid]').hidden = true;
}

export function renderInvalidSensitivityLab(root: HTMLElement, ui: MouseSensitivityUI): void {
  root.dataset.valid = 'false';
  const invalid = element<HTMLElement>(root, '[data-invalid]');
  invalid.textContent = ui.invalidInputText;
  invalid.hidden = false;
  setText(root, '[data-target-result]', '...');
}
