import type { FramePlannerInput, FramePlannerResult } from './logic';

export type EvaluationTone = 'good' | 'caution' | 'warning';

export interface FrameEvaluation {
  tone: EvaluationTone;
  state: 'inside-vrr' | 'below-vrr' | 'above-vrr' | 'fixed-match' | 'tearing' | 'missed-budget';
  recommendation: 'good' | 'below-vrr' | 'above-vrr' | 'fixed-refresh' | 'tearing' | 'missed-budget';
}

export function evaluateFramePlan(
  input: FramePlannerInput,
  result: FramePlannerResult,
): FrameEvaluation {
  const typical = result.typical;
  if (input.vrrEnabled && typical.band === 'inside-vrr') {
    return { tone: 'good', state: 'inside-vrr', recommendation: 'good' };
  }
  if (input.vrrEnabled && typical.band === 'below-vrr') {
    return { tone: 'caution', state: 'below-vrr', recommendation: 'below-vrr' };
  }
  if (input.vrrEnabled) {
    return { tone: 'caution', state: 'above-vrr', recommendation: 'above-vrr' };
  }
  if (!input.vsyncEnabled) {
    return { tone: 'warning', state: 'tearing', recommendation: 'tearing' };
  }
  if (typical.band === 'matched-refresh') {
    return { tone: 'good', state: 'fixed-match', recommendation: 'fixed-refresh' };
  }
  return { tone: 'caution', state: 'missed-budget', recommendation: 'missed-budget' };
}
