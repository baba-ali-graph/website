<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  import { backInOut } from 'svelte/easing';

  import { fly, fade } from 'svelte/transition';
  import { Directions } from '../constants';
  import { uiState } from '../store';

  export let path = '';

  const duration = 500;
  const movements = { in: -500, out: 500 };

  uiState.subscribe(({ directionMoved }) => {
    movements.in = directionMoved === Directions.Forwards ? 500 : -500;
    movements.out = 50;
  });
</script>

<div class="transition-wrapper">
  {#key path}
    <div
      class="transition-item"
      in:fly={{ x: movements.in, duration, easing: backInOut }}
      out:fly={{ x: movements.out, duration, easing: backInOut }}
    >
      <slot />
    </div>
  {/key}
</div>

<style>
  .transition-wrapper {
    overflow-x: hidden;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }

  .transition-item {
    grid-row: 1;
    grid-column: 1;
  }
</style>
