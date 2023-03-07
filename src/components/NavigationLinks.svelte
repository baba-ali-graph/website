<script lang="ts">
  import { goto } from '$app/navigation';
  import ArrowLeft from 'src/assets/iconsax/arrow-left.svelte';
  import ArrowRight from 'src/assets/iconsax/arrow-right-1.svelte';
  import { links } from '../utils';
  import { Directions } from '../constants';
  import { uiState } from '../store';

  let nextLinkIndex = 0;
  let isRenderWelcomeAnimation:boolean;

  uiState.subscribe((ui) => {
    isRenderWelcomeAnimation = ui.isRenderWelcomeAnimation;
  });

  const handleNavigate = ({ isForward }) => {
    if (isRenderWelcomeAnimation) {
      uiState.update((prev) => ({ ...prev, isRenderWelcomeAnimation: false }));
    }
    if (isForward && nextLinkIndex < links.length - 1) {
      nextLinkIndex += 1;
      uiState.update((prev) => ({ ...prev, directionMoved: Directions.Forwards }));
    }
    if (!isForward && nextLinkIndex > 0) {
      nextLinkIndex -= 1;
      uiState.update((prev) => ({ ...prev, directionMoved: Directions.Backwards }));
    }
    goto(links[nextLinkIndex], { replaceState: true });
  };
</script>

<nav>
  <div
    class="mr-2 md:mr-4 nav-button"
    title={nextLinkIndex > 0 ? links[nextLinkIndex - 1] : ''}
    on:click={() => handleNavigate({ isForward: false })}
  >
    <ArrowLeft />
  </div>
  <div
    class="nav-button"
    title={nextLinkIndex < links.length - 1 ? links[nextLinkIndex + 1] : ''}
    on:click={() => handleNavigate({ isForward: true })}
  >
    <ArrowRight />
  </div>
</nav>

<style lang="postcss">
  nav {
    @apply flex justify-between  md:text-4xl;
  }

  .nav-button {
    @apply relative px-4 bg-white shadow-lg rounded-md cursor-pointer  inline-grid place-content-center w-10 md:w-16 h-10 md:h-16;
  }
</style>
