import { renderInvalidSensitivityLab, renderSensitivityLab } from './dom-views';
import {
  GAME_PROFILES,
  convertSensitivity,
  getGameProfile,
  isValidSensitivityInput,
  sensitivityForDistance,
} from './logic';
import { loadSensitivityState, saveSensitivityState } from './storage';
import type { DisplayUnit, StoredSensitivityState } from './storage';
import type { MouseSensitivityUI } from './ui';
import { copyWithFeedback, createSensitivityShareUrl } from './sharing';

interface ControllerContext {
  root: HTMLElement;
  ui: MouseSensitivityUI;
}

type GameSide = 'source' | 'target';

const DEFAULT_STATE: StoredSensitivityState = {
  sourceGameId: 'valorant',
  targetGameId: 'cs2',
  sourceDpi: 800,
  targetDpi: 800,
  sourceSensitivity: 0.35,
  linkedDpi: true,
  unit: 'metric',
};

function element<T extends Element>(root: ParentNode, selector: string): T {
  const found = root.querySelector<T>(selector);
  if (!found) throw new Error(`Missing controller element: ${selector}`);
  return found;
}

function field(root: HTMLElement, name: string): HTMLInputElement {
  return element<HTMLInputElement>(root, `[data-field="${name}"]`);
}

function readState(root: HTMLElement): StoredSensitivityState {
  return {
    sourceGameId: field(root, 'sourceGameId').value,
    targetGameId: field(root, 'targetGameId').value,
    sourceDpi: field(root, 'sourceDpi').valueAsNumber,
    targetDpi: field(root, 'targetDpi').valueAsNumber,
    sourceSensitivity: field(root, 'sourceSensitivity').valueAsNumber,
    linkedDpi: root.dataset.linkedDpi === 'true',
    unit: root.dataset.unit === 'imperial' ? 'imperial' : 'metric',
  };
}

function isKnownGame(id: string | undefined): boolean {
  return Boolean(id && GAME_PROFILES.some((profile) => profile.id === id));
}

function normalizedState(candidate: Partial<StoredSensitivityState> | null): StoredSensitivityState {
  if (!candidate) return DEFAULT_STATE;
  const state = { ...DEFAULT_STATE, ...candidate };
  const validGames = isKnownGame(state.sourceGameId) && isKnownGame(state.targetGameId);
  const validNumbers = [state.sourceDpi, state.targetDpi, state.sourceSensitivity]
    .every((value) => Number.isFinite(value) && Number(value) > 0);
  return validGames && validNumbers ? state : DEFAULT_STATE;
}

function stateFromUrl(): Partial<StoredSensitivityState> | null {
  const params = new URL(window.location.href).searchParams;
  if (!params.has('from')) return null;
  return {
    sourceGameId: params.get('from') ?? DEFAULT_STATE.sourceGameId,
    targetGameId: params.get('to') ?? DEFAULT_STATE.targetGameId,
    sourceDpi: Number(params.get('dpi')),
    targetDpi: Number(params.get('targetDpi')),
    sourceSensitivity: Number(params.get('sens')),
    linkedDpi: params.get('linked') !== '0',
    unit: params.get('unit') === 'imperial' ? 'imperial' : 'metric',
  };
}

function setSelectedGame(root: HTMLElement, side: GameSide, gameId: string): void {
  const profile = getGameProfile(gameId);
  field(root, `${side}GameId`).value = gameId;
  element<HTMLElement>(root, `[data-select-trigger="${side}"] [data-select-label]`).textContent = profile.name;
  root.querySelectorAll<HTMLElement>(`[data-game-option][data-side="${side}"]`).forEach((option) => {
    const active = option.dataset.gameOption === gameId;
    option.setAttribute('aria-selected', String(active));
    option.classList.toggle('is-active', active);
  });
}

function setState(root: HTMLElement, state: StoredSensitivityState): void {
  setSelectedGame(root, 'source', state.sourceGameId);
  setSelectedGame(root, 'target', state.targetGameId);
  field(root, 'sourceDpi').value = String(state.sourceDpi);
  field(root, 'targetDpi').value = String(state.targetDpi);
  field(root, 'sourceSensitivity').value = String(state.sourceSensitivity);
  root.dataset.linkedDpi = String(state.linkedDpi);
  root.dataset.unit = state.unit;
  updateToggleStates(root);
}

function updateToggleStates(root: HTMLElement): void {
  element<HTMLElement>(root, '[data-action="link-dpi"]').setAttribute('aria-pressed', root.dataset.linkedDpi ?? 'true');
  root.querySelectorAll<HTMLElement>('[data-unit]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.unit === root.dataset.unit));
  });
  field(root, 'targetDpi').disabled = root.dataset.linkedDpi === 'true';
}

function recalculate(context: ControllerContext): void {
  const state = readState(context.root);
  const input = { ...state };
  if (!isValidSensitivityInput(input)) {
    renderInvalidSensitivityLab(context.root, context.ui);
    return;
  }
  const result = convertSensitivity(input);
  renderSensitivityLab(context.root, state, result, context.ui);
  saveSensitivityState(state);
}

function closeMenus(root: HTMLElement, except?: HTMLElement): void {
  root.querySelectorAll<HTMLElement>('[data-game-select]').forEach((select) => {
    if (select === except) return;
    select.dataset.open = 'false';
    element<HTMLElement>(select, '[data-select-trigger]').setAttribute('aria-expanded', 'false');
  });
}

function toggleMenu(context: ControllerContext, trigger: HTMLElement): void {
  const select = trigger.closest<HTMLElement>('[data-game-select]');
  if (!select) return;
  const opening = select.dataset.open !== 'true';
  closeMenus(context.root, opening ? select : undefined);
  select.dataset.open = String(opening);
  trigger.setAttribute('aria-expanded', String(opening));
  if (opening) element<HTMLElement>(select, '[aria-selected="true"]').focus();
}

function chooseGame(context: ControllerContext, option: HTMLElement): void {
  const side = option.dataset.side as GameSide;
  const gameId = option.dataset.gameOption;
  if (!gameId || !isKnownGame(gameId)) return;
  setSelectedGame(context.root, side, gameId);
  if (side === 'source') resetSourceSensitivity(context, gameId);
  closeMenus(context.root);
  recalculate(context);
}

function resetSourceSensitivity(context: ControllerContext, gameId: string): void {
  field(context.root, 'sourceSensitivity').value = String(getGameProfile(gameId).defaultSensitivity);
  const notice = element<HTMLElement>(context.root, '[data-profile-change]');
  notice.textContent = context.ui.profileResetText;
  notice.hidden = false;
  window.setTimeout(() => { notice.hidden = true; }, 2600);
}

function synchronizeInput(context: ControllerContext, input: HTMLInputElement): void {
  if (input.dataset.field === 'sourceDpi' && context.root.dataset.linkedDpi === 'true') {
    field(context.root, 'targetDpi').value = input.value;
  }
  recalculate(context);
}

function applyPreset(context: ControllerContext, button: HTMLElement): void {
  const distance = Number(button.dataset.distance);
  const state = readState(context.root);
  const sensitivity = sensitivityForDistance(state.sourceGameId, state.sourceDpi, distance);
  field(context.root, 'sourceSensitivity').value = String(sensitivity);
  recalculate(context);
}

function reverseConversion(context: ControllerContext): void {
  const state = readState(context.root);
  if (!isValidSensitivityInput(state)) return;
  const result = convertSensitivity(state);
  setState(context.root, {
    ...state,
    sourceGameId: state.targetGameId,
    targetGameId: state.sourceGameId,
    sourceDpi: state.targetDpi,
    targetDpi: state.sourceDpi,
    sourceSensitivity: result.roundedTargetSensitivity,
  });
  recalculate(context);
}

function toggleDpiLink(context: ControllerContext): void {
  const linked = context.root.dataset.linkedDpi !== 'true';
  context.root.dataset.linkedDpi = String(linked);
  if (linked) field(context.root, 'targetDpi').value = field(context.root, 'sourceDpi').value;
  updateToggleStates(context.root);
  recalculate(context);
}

function setUnit(context: ControllerContext, button: HTMLElement): void {
  context.root.dataset.unit = button.dataset.unit as DisplayUnit;
  updateToggleStates(context.root);
  recalculate(context);
}

function handleAction(context: ControllerContext, button: HTMLElement): void {
  const action = button.dataset.action;
  if (action === 'swap') reverseConversion(context);
  if (action === 'link-dpi') toggleDpiLink(context);
  if (action === 'preset') applyPreset(context, button);
  if (action === 'unit') setUnit(context, button);
  if (action === 'copy-result') void copyWithFeedback(button, button.dataset.copyValue ?? '', context.ui.copiedLabel);
  if (action === 'share') void copyWithFeedback(button, createSensitivityShareUrl(readState(context.root), window.location.href), context.ui.shareCopiedLabel);
}

function handleClick(context: ControllerContext, event: MouseEvent): void {
  const target = event.target as HTMLElement;
  const option = target.closest<HTMLElement>('[data-game-option]');
  const trigger = target.closest<HTMLElement>('[data-select-trigger]');
  const action = target.closest<HTMLElement>('[data-action]');
  if (option) chooseGame(context, option);
  else if (trigger) toggleMenu(context, trigger);
  else if (action) handleAction(context, action);
}

function moveOptionFocus(option: HTMLElement, direction: number): void {
  const options = Array.from(option.parentElement?.querySelectorAll<HTMLElement>('[data-game-option]') ?? []);
  const index = options.indexOf(option);
  options[(index + direction + options.length) % options.length]?.focus();
}

function handleTriggerKey(context: ControllerContext, event: KeyboardEvent, trigger: HTMLElement): void {
  if (['Enter', ' ', 'ArrowDown'].includes(event.key)) {
    event.preventDefault();
    toggleMenu(context, trigger);
  }
}

function handleOptionKey(context: ControllerContext, event: KeyboardEvent, option: HTMLElement): void {
  if (['Enter', ' '].includes(event.key)) {
    event.preventDefault();
    chooseGame(context, option);
  } else if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
    event.preventDefault();
    moveOptionFocus(option, event.key === 'ArrowDown' ? 1 : -1);
  }
}

function handleKeyboard(context: ControllerContext, event: KeyboardEvent): void {
  const target = event.target as HTMLElement;
  const trigger = target.closest<HTMLElement>('[data-select-trigger]');
  const option = target.closest<HTMLElement>('[data-game-option]');
  if (trigger) handleTriggerKey(context, event, trigger);
  else if (option) handleOptionKey(context, event, option);
  if (event.key === 'Escape') closeMenus(context.root);
}

function initialize(root: HTMLElement): void {
  const ui = JSON.parse(element<HTMLScriptElement>(root, '[data-ui-copy]').textContent ?? '{}') as MouseSensitivityUI;
  const context = { root, ui };
  const initial = normalizedState(stateFromUrl() ?? loadSensitivityState());
  setState(root, initial);
  recalculate(context);
  root.addEventListener('click', (event) => handleClick(context, event));
  root.addEventListener('keydown', (event) => handleKeyboard(context, event));
  root.addEventListener('input', (event) => synchronizeInput(context, event.target as HTMLInputElement));
  document.addEventListener('click', (event) => {
    if (!root.contains(event.target as Node)) closeMenus(root);
  });
}

export function initMouseSensitivityConverters(): void {
  document.querySelectorAll<HTMLElement>('[data-sensitivity-lab]').forEach(initialize);
}
