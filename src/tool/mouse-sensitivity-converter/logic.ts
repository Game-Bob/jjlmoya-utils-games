export type ProfileConfidence = 'documented' | 'measured';

export interface GameProfile {
  id: string;
  name: string;
  yaw: number;
  precision: number;
  confidence: ProfileConfidence;
  usesPercent: boolean;
  defaultSensitivity: number;
}

export interface SensitivityInput {
  sourceGameId: string;
  targetGameId: string;
  sourceDpi: number;
  targetDpi: number;
  sourceSensitivity: number;
}

export interface SensitivityResult {
  targetSensitivity: number;
  roundedTargetSensitivity: number;
  cmPer360: number;
  inchesPer360: number;
  countsPer360: number;
  sourceEdpi: number;
  targetEdpi: number;
}

export const GAME_PROFILES: readonly GameProfile[] = [
  { id: 'cs2', name: 'Counter Strike 2', yaw: 0.022, precision: 4, confidence: 'documented', usesPercent: false, defaultSensitivity: 1.25 },
  { id: 'valorant', name: 'Valorant', yaw: 0.07, precision: 4, confidence: 'measured', usesPercent: false, defaultSensitivity: 0.35 },
  { id: 'apex', name: 'Apex Legends', yaw: 0.022, precision: 4, confidence: 'measured', usesPercent: false, defaultSensitivity: 1.25 },
  { id: 'overwatch2', name: 'Overwatch 2', yaw: 0.0066, precision: 3, confidence: 'measured', usesPercent: false, defaultSensitivity: 4.2 },
  { id: 'fortnite', name: 'Fortnite', yaw: 0.005555, precision: 3, confidence: 'measured', usesPercent: true, defaultSensitivity: 7 },
  { id: 'quake', name: 'Quake and Source', yaw: 0.022, precision: 4, confidence: 'documented', usesPercent: false, defaultSensitivity: 1.25 },
  { id: 'aimlab', name: 'Aim Lab native', yaw: 0.022, precision: 4, confidence: 'measured', usesPercent: false, defaultSensitivity: 1.25 },
];

export function getGameProfile(id: string): GameProfile {
  const profile = GAME_PROFILES.find((candidate) => candidate.id === id);
  if (!profile) throw new Error(`Unknown game profile: ${id}`);
  return profile;
}

export function isValidSensitivityInput(input: SensitivityInput): boolean {
  const numbers = [input.sourceDpi, input.targetDpi, input.sourceSensitivity];
  const profilesExist = GAME_PROFILES.some(({ id }) => id === input.sourceGameId)
    && GAME_PROFILES.some(({ id }) => id === input.targetGameId);
  return profilesExist && numbers.every((value) => Number.isFinite(value) && value > 0);
}

export function roundTo(value: number, precision: number): number {
  const factor = 10 ** precision;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

export function convertSensitivity(input: SensitivityInput): SensitivityResult {
  if (!isValidSensitivityInput(input)) throw new Error('Sensitivity inputs must be positive finite values');
  const source = getGameProfile(input.sourceGameId);
  const target = getGameProfile(input.targetGameId);
  const sourceTurnRate = input.sourceDpi * input.sourceSensitivity * source.yaw;
  const targetSensitivity = sourceTurnRate / (input.targetDpi * target.yaw);
  const countsPer360 = 360 / (input.sourceSensitivity * source.yaw);
  const cmPer360 = (countsPer360 / input.sourceDpi) * 2.54;
  return {
    targetSensitivity,
    roundedTargetSensitivity: roundTo(targetSensitivity, target.precision),
    cmPer360,
    inchesPer360: cmPer360 / 2.54,
    countsPer360,
    sourceEdpi: input.sourceDpi * input.sourceSensitivity,
    targetEdpi: input.targetDpi * targetSensitivity,
  };
}

export function sensitivityForDistance(gameId: string, dpi: number, cmPer360: number): number {
  if (![dpi, cmPer360].every((value) => Number.isFinite(value) && value > 0)) {
    throw new Error('DPI and distance must be positive finite values');
  }
  const profile = getGameProfile(gameId);
  return (2.54 * 360) / (dpi * profile.yaw * cmPer360);
}
