import { writable } from 'svelte/store';
import { Directions } from './constants';
export const uiState = writable({
  isHireFormOpen: false,
  directionMoved: Directions.Idle,
  isRenderWelcomeAnimation: true
});
