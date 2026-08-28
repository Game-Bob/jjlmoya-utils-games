export interface FramePlannerInput {
  fpsMin: number;
  fpsTypical: number;
  fpsMax: number;
  refreshHz: number;
  vrrEnabled: boolean;
  vrrMinHz: number;
  vrrMaxHz: number;
  vsyncEnabled: boolean;
}

export type FrameBand =
  | 'below-vrr'
  | 'inside-vrr'
  | 'above-vrr'
  | 'below-refresh'
  | 'matched-refresh'
  | 'above-refresh';

export interface FrameSample {
  fps: number;
  frameTimeMs: number;
  band: FrameBand;
  fitsRefreshBudget: boolean;
}

export interface FramePlannerResult {
  refreshPeriodMs: number;
  samples: FrameSample[];
  typical: FrameSample;
  vrWindowText: string;
  syncMode: 'vrr-vsync' | 'vrr-uncapped' | 'fixed-vsync' | 'fixed-uncapped';
}

export function frameTimeMs(fps: number): number {
  return 1000 / fps;
}

export function refreshPeriodMs(refreshHz: number): number {
  return frameTimeMs(refreshHz);
}

function fixedRefreshBand(fps: number, refreshHz: number): FrameBand {
  const tolerance = 0.0001;
  if (Math.abs(fps - refreshHz) <= tolerance) return 'matched-refresh';
  return fps < refreshHz ? 'below-refresh' : 'above-refresh';
}

function vrrBand(fps: number, input: FramePlannerInput): FrameBand {
  if (fps < input.vrrMinHz) return 'below-vrr';
  if (fps > input.vrrMaxHz) return 'above-vrr';
  return 'inside-vrr';
}

function sampleFor(fps: number, input: FramePlannerInput): FrameSample {
  const band = input.vrrEnabled
    ? vrrBand(fps, input)
    : fixedRefreshBand(fps, input.refreshHz);
  return {
    fps,
    frameTimeMs: frameTimeMs(fps),
    band,
    fitsRefreshBudget: fps >= input.refreshHz,
  };
}

function sortedDistinct(values: number[]): number[] {
  return [...new Set(values)].sort((left, right) => left - right);
}

export function calculateFramePlan(input: FramePlannerInput): FramePlannerResult {
  const samples = sortedDistinct([input.fpsMin, input.fpsTypical, input.fpsMax]).map(
    (fps) => sampleFor(fps, input),
  );
  const typical = sampleFor(input.fpsTypical, input);
  return {
    refreshPeriodMs: refreshPeriodMs(input.refreshHz),
    samples,
    typical,
    vrWindowText: `${input.vrrMinHz}-${input.vrrMaxHz} Hz`,
    syncMode: resolveSyncMode(input),
  };
}

function resolveSyncMode(
  input: FramePlannerInput,
): FramePlannerResult['syncMode'] {
  if (input.vrrEnabled && input.vsyncEnabled) return 'vrr-vsync';
  if (input.vrrEnabled) return 'vrr-uncapped';
  if (input.vsyncEnabled) return 'fixed-vsync';
  return 'fixed-uncapped';
}
