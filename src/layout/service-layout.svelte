<script lang="ts">
  import { onMount } from 'svelte';

  export let title: string = '';
</script>

<section>
  <div class="wrapper">
    <div class="content">
      <h3 class="content-title">{title}</h3>

      <div class="content-body">
        <slot name="description" />
      </div>
    </div>

    <div class="illustration-wrapper">
      <slot name="illustration" />
    </div>
  </div>
</section>

<style lang="postcss">
  section {
    --safe-bg-color: var(--bg-color, transparent);
    --safe-text-color: var(--fg-color, white);
    @apply grid md:place-items-center h-screen;
  }

  .wrapper {
    background-color: var(--safe-bg-color);
    color: var(--safe-text-color);

    @apply flex flex-col-reverse items-center md:flex-row justify-center md:justify-between py-8 md:p-16;
    @apply h-screen md:h-[65%];
  }

  .content {
    @apply md:w-1/2 w-10/12;
  }

  .content-title {
    font-family: 'Abril Fatface', 'Rubik Dirt';

    @apply text-3xl md:text-5xl my-4 text-center md:text-left;
  }

  .content-body {
    @apply text-lg md:text-2xl text-justify md:text-left;
  }

  .illustration-wrapper {
    @apply w-[21em] md:w-[42em] md:h-[31em] order-1 md:mb-0 mb-4;
  }

  .illustration-wrapper img {
    @apply h-full w-full relative bottom-[10.25em];
  }
</style>
