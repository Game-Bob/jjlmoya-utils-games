import type { GameProfile } from './logic';

export type AimBand = 'fast' | 'balanced' | 'control' | 'extended';
export type MatchQuality = 'documented' | 'calibrate';

export function evaluateAimBand(cmPer360: number): AimBand {
  if (cmPer360 < 25) return 'fast';
  if (cmPer360 < 40) return 'balanced';
  if (cmPer360 < 65) return 'control';
  return 'extended';
}

export function evaluateMatchQuality(source: GameProfile, target: GameProfile): MatchQuality {
  return source.confidence === 'documented' && target.confidence === 'documented'
    ? 'documented'
    : 'calibrate';
}
