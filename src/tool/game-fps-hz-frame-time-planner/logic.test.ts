import { describe, expect, it } from 'vitest';
import { calculateFramePlan, frameTimeMs, refreshPeriodMs, type FramePlannerInput } from './logic';
import { evaluateFramePlan } from './evaluator';

const baseInput: FramePlannerInput = {
  fpsMin: 72,
  fpsTypical: 100,
  fpsMax: 118,
  refreshHz: 144,
  vrrEnabled: true,
  vrrMinHz: 48,
  vrrMaxHz: 144,
  vsyncEnabled: true,
};

describe('game FPS and frame time logic', () => {
  it('converts FPS and refresh rate to milliseconds', () => {
    expect(frameTimeMs(60)).toBeCloseTo(16.6667, 4);
    expect(refreshPeriodMs(144)).toBeCloseTo(6.9444, 4);
  });

  it('sorts and de-duplicates the declared performance range', () => {
    const result = calculateFramePlan({ ...baseInput, fpsMin: 100, fpsTypical: 72, fpsMax: 100 });
    expect(result.samples.map((sample) => sample.fps)).toEqual([72, 100]);
    expect(result.typical.fps).toBe(72);
  });

  it('classifies values below, inside and above the VRR window', () => {
    const result = calculateFramePlan({ ...baseInput, fpsMin: 30, fpsTypical: 100, fpsMax: 180 });
    expect(result.samples.map((sample) => sample.band)).toEqual(['below-vrr', 'inside-vrr', 'above-vrr']);
    expect(result.typical.fitsRefreshBudget).toBe(false);
  });

  it('classifies fixed refresh values around the refresh rate', () => {
    const result = calculateFramePlan({ ...baseInput, vrrEnabled: false, fpsMin: 60, fpsTypical: 144, fpsMax: 240 });
    expect(result.samples.map((sample) => sample.band)).toEqual(['below-refresh', 'matched-refresh', 'above-refresh']);
    expect(result.syncMode).toBe('fixed-vsync');
  });

  it('resolves every synchronization mode', () => {
    expect(calculateFramePlan(baseInput).syncMode).toBe('vrr-vsync');
    expect(calculateFramePlan({ ...baseInput, vsyncEnabled: false }).syncMode).toBe('vrr-uncapped');
    expect(calculateFramePlan({ ...baseInput, vrrEnabled: false }).syncMode).toBe('fixed-vsync');
    expect(calculateFramePlan({ ...baseInput, vrrEnabled: false, vsyncEnabled: false }).syncMode).toBe('fixed-uncapped');
  });

  it('evaluates VRR states', () => {
    const below = { ...baseInput, fpsTypical: 30 };
    const above = { ...baseInput, fpsTypical: 200 };
    expect(evaluateFramePlan(below, calculateFramePlan(below)).recommendation).toBe('below-vrr');
    expect(evaluateFramePlan(above, calculateFramePlan(above)).recommendation).toBe('above-vrr');
    expect(evaluateFramePlan(baseInput, calculateFramePlan(baseInput)).tone).toBe('good');
  });

  it('evaluates fixed refresh and tearing states', () => {
    const matched = { ...baseInput, vrrEnabled: false, fpsTypical: 144 };
    const missed = { ...baseInput, vrrEnabled: false, fpsTypical: 100 };
    const tearing = { ...matched, vsyncEnabled: false };
    expect(evaluateFramePlan(matched, calculateFramePlan(matched)).recommendation).toBe('fixed-refresh');
    expect(evaluateFramePlan(missed, calculateFramePlan(missed)).recommendation).toBe('missed-budget');
    expect(evaluateFramePlan(tearing, calculateFramePlan(tearing)).recommendation).toBe('tearing');
  });
});
