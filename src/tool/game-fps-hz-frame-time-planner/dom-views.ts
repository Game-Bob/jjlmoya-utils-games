import type { FrameEvaluation } from './evaluator';
import type { FramePlannerResult } from './logic';
import type { GameFrameTimeUI } from './ui';

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[character] ?? character;
  });
}

function sampleStatus(sample: FramePlannerResult['samples'][number], ui: GameFrameTimeUI): string {
  const labels: Record<string, string> = {
    'below-vrr': ui.belowVrrStatus,
    'inside-vrr': ui.insideVrrStatus,
    'above-vrr': ui.aboveVrrStatus,
    'below-refresh': ui.belowRefreshStatus,
    'matched-refresh': ui.matchedRefreshStatus,
    'above-refresh': ui.aboveRefreshStatus,
  };
  return labels[sample.band] ?? sample.band;
}

function frameBar(sample: FramePlannerResult['samples'][number], index: number): string {
  const width = Math.max(70, Math.min(220, sample.frameTimeMs * 10));
  const x = 74 + index * 268;
  const color = frameColor(sample.band);
  return `<g class="frame-bar frame-bar-${color}"><rect x="${x}" y="78" width="${width}" height="72" rx="12"/><text x="${x + width / 2}" y="114" text-anchor="middle">${sample.fps} FPS</text><text class="frame-bar-sub" x="${x + width / 2}" y="136" text-anchor="middle">${sample.frameTimeMs.toFixed(1)} ms</text></g>`;
}

function frameColor(band: FramePlannerResult['samples'][number]['band']): string {
  if (band === 'inside-vrr' || band === 'matched-refresh') return 'good';
  if (band === 'below-vrr' || band === 'below-refresh') return 'caution';
  return 'warning';
}

function refreshPulses(): string {
  return Array.from({ length: 8 }, (_, index) => {
    const x = 40 + index * 118;
    return `<line class="refresh-pulse" x1="${x}" y1="38" x2="${x}" y2="190"/><circle class="refresh-dot" cx="${x}" cy="38" r="5"/>`;
  }).join('');
}

export function renderTimeline(
  element: HTMLElement,
  result: FramePlannerResult,
  ui: GameFrameTimeUI,
): void {
  const bars = result.samples.map((sample, index) => frameBar(sample, index)).join('');
  element.innerHTML = `<svg class="cadence-svg" viewBox="0 0 900 230" role="img" aria-label="${escapeHtml(ui.sceneLabel)}"><text class="svg-label" x="40" y="22">${escapeHtml(ui.refreshPulseLabel)}</text>${refreshPulses()}<line class="cadence-track" x1="40" y1="190" x2="860" y2="190"/>${bars}<text class="svg-label svg-label--bottom" x="40" y="219">${escapeHtml(ui.frameLabel)}</text></svg>`;
}

function resultCopy(evaluation: FrameEvaluation, ui: GameFrameTimeUI): string {
  const text: Record<FrameEvaluation['recommendation'], string> = {
    good: ui.resultGoodText,
    'below-vrr': ui.resultBelowVrrText,
    'above-vrr': ui.resultAboveVrrText,
    'fixed-refresh': ui.resultFixedRefreshText,
    tearing: ui.resultTearingText,
    'missed-budget': ui.resultMissedBudgetText,
  };
  return text[evaluation.recommendation];
}

export function renderInterpretation(
  element: HTMLElement,
  result: FramePlannerResult,
  evaluation: FrameEvaluation,
  ui: GameFrameTimeUI,
): void {
  const toneLabel = getToneLabel(evaluation.tone, ui);
  const fitLabel = result.typical.fitsRefreshBudget ? ui.frameFitsLabel : ui.frameMissesLabel;
  const vrrLabel = result.typical.band === 'inside-vrr' ? ui.insideVrrLabel : ui.outsideVrrLabel;
  element.dataset.tone = evaluation.tone;
  element.innerHTML = `<div class="interpretation-signal"><span class="signal-dot"></span><span>${escapeHtml(toneLabel)}</span></div><p class="interpretation-headline">${escapeHtml(resultCopy(evaluation, ui))}</p><div class="interpretation-facts"><span>${escapeHtml(fitLabel)}</span><span>${escapeHtml(vrrLabel)}</span></div>`;
}

function getToneLabel(tone: FrameEvaluation['tone'], ui: GameFrameTimeUI): string {
  if (tone === 'good') return ui.resultGoodLabel;
  if (tone === 'caution') return ui.resultCautionLabel;
  return ui.resultWarningLabel;
}

export function renderMetrics(
  element: HTMLElement,
  result: FramePlannerResult,
  input: { refreshHz: number; vrrEnabled: boolean; vrrMinHz: number; vrrMaxHz: number; vsyncEnabled: boolean },
  ui: GameFrameTimeUI,
): void {
  const syncLabel = getSyncLabel(input, ui);
  element.innerHTML = `<div class="metric"><span>${escapeHtml(ui.typicalFpsLabel)}</span><strong>${result.typical.fps} FPS</strong></div><div class="metric"><span>${escapeHtml(ui.frameTimeLabel)}</span><strong>${result.typical.frameTimeMs.toFixed(2)} ms</strong></div><div class="metric"><span>${escapeHtml(ui.refreshBudgetLabel)}</span><strong>${result.refreshPeriodMs.toFixed(2)} ms</strong></div><div class="metric"><span>${escapeHtml(ui.monitorLabel)}</span><strong>${input.refreshHz} Hz</strong></div><div class="metric"><span>${escapeHtml(ui.vrRangeLabel)}</span><strong>${input.vrrEnabled ? `${input.vrrMinHz}-${input.vrrMaxHz} Hz` : ui.vrrOffText}</strong></div><div class="metric"><span>${escapeHtml(ui.syncModeLabel)}</span><strong>${escapeHtml(syncLabel)}</strong></div>`;
}

function getSyncLabel(
  input: { vrrEnabled: boolean; vsyncEnabled: boolean },
  ui: GameFrameTimeUI,
): string {
  const vrrText = input.vrrEnabled ? ui.vrrOnText : ui.vrrOffText;
  const vsyncText = input.vsyncEnabled ? ui.vsyncOnText : ui.vsyncOffText;
  return `${vrrText} + ${vsyncText}`;
}

export function renderTable(
  element: HTMLElement,
  result: FramePlannerResult,
  ui: GameFrameTimeUI,
): void {
  const rows = result.samples.map((sample) => `<tr><th scope="row">${sample.fps} FPS</th><td>${sample.frameTimeMs.toFixed(2)} ms</td><td>${escapeHtml(sampleStatus(sample, ui))}</td></tr>`).join('');
  element.innerHTML = `<table><thead><tr><th scope="col">${escapeHtml(ui.tableFpsLabel)}</th><th scope="col">${escapeHtml(ui.tableFrameTimeLabel)}</th><th scope="col">${escapeHtml(ui.tableStatusLabel)}</th></tr></thead><tbody>${rows}</tbody></table>`;
}
