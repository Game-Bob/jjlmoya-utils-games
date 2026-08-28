import { describe, expect, it } from 'vitest';
import {
  convertSensitivity,
  getGameProfile,
  isValidSensitivityInput,
  roundTo,
  sensitivityForDistance,
} from './logic';

describe('mouse sensitivity conversion', () => {
  it('preserves Source engine sensitivity at equal DPI', () => {
    const result = convertSensitivity({
      sourceGameId: 'cs2',
      targetGameId: 'apex',
      sourceDpi: 800,
      targetDpi: 800,
      sourceSensitivity: 1.25,
    });
    expect(result.roundedTargetSensitivity).toBe(1.25);
    expect(result.cmPer360).toBeCloseTo(41.564, 3);
    expect(result.inchesPer360).toBeCloseTo(16.364, 3);
    expect(result.countsPer360).toBeCloseTo(13090.909, 3);
  });

  it('converts Valorant to Counter Strike 2', () => {
    const result = convertSensitivity({
      sourceGameId: 'valorant',
      targetGameId: 'cs2',
      sourceDpi: 800,
      targetDpi: 800,
      sourceSensitivity: 0.35,
    });
    expect(result.roundedTargetSensitivity).toBe(1.1136);
    expect(result.sourceEdpi).toBe(280);
    expect(result.targetEdpi).toBeCloseTo(890.909, 3);
  });

  it('accounts for a target DPI change', () => {
    const result = convertSensitivity({
      sourceGameId: 'overwatch2',
      targetGameId: 'valorant',
      sourceDpi: 800,
      targetDpi: 1600,
      sourceSensitivity: 5,
    });
    expect(result.roundedTargetSensitivity).toBe(0.2357);
  });

  it('uses the visible Fortnite percentage number', () => {
    const result = convertSensitivity({
      sourceGameId: 'fortnite',
      targetGameId: 'valorant',
      sourceDpi: 800,
      targetDpi: 800,
      sourceSensitivity: 7,
    });
    expect(result.cmPer360).toBeCloseTo(29.394, 3);
    expect(result.roundedTargetSensitivity).toBe(0.5555);
  });

  it('derives sensitivity from a requested physical distance', () => {
    const sensitivity = sensitivityForDistance('cs2', 800, 40);
    const result = convertSensitivity({
      sourceGameId: 'cs2',
      targetGameId: 'valorant',
      sourceDpi: 800,
      targetDpi: 800,
      sourceSensitivity: sensitivity,
    });
    expect(result.cmPer360).toBeCloseTo(40, 8);
  });

  it('rounds decimal output predictably', () => {
    expect(roundTo(1.23456, 3)).toBe(1.235);
  });

  it('rejects unknown profiles and invalid values', () => {
    expect(() => getGameProfile('missing')).toThrow('Unknown game profile');
    expect(isValidSensitivityInput({ sourceGameId: 'cs2', targetGameId: 'valorant', sourceDpi: 0, targetDpi: 800, sourceSensitivity: 1 })).toBe(false);
    expect(() => convertSensitivity({ sourceGameId: 'cs2', targetGameId: 'valorant', sourceDpi: 800, targetDpi: Number.NaN, sourceSensitivity: 1 })).toThrow('positive finite values');
    expect(() => sensitivityForDistance('cs2', 800, -1)).toThrow('positive finite values');
  });
});
