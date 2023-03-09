<script lang="ts">
  import LicenseInfo from '../components/LicenseInfo.svelte';
  import { sectionBackgrounds } from '../constants';
  import { uiState } from '../store';

  let isRenderWelcomeAnimation: boolean;

  uiState.subscribe((ui) => {
    isRenderWelcomeAnimation = ui.isRenderWelcomeAnimation;
  });
</script>

<section
  class={`h-screen relative text-lg  mx-auto  grid text-center place-content-center ${
    isRenderWelcomeAnimation && 'widening'
  }`}
  style="background: {sectionBackgrounds.Home}"
>
  <div>
    <div class=" text-3xl md:text-6xl  m-0 mb-8 grid gap-1">
      <h3 class="m-2">Welcome</h3>
      <h3 class="m-2">I am Baba Ali</h3>
    </div>
    <p class="w-[50vw] mx-auto">
      A creative developer and web engineer who crafts delightful experiences for the digital space.
    </p>
  </div>
  <label for="license-notice" class="notice-button   modal-button"> <i>Notices</i> </label>
</section>

<style>
  /* ANIMATION  */
  @keyframes widening {
    from {
      width: 2%;
    }
    40% {
      width: 15%;
    }
    65% {
      width: 13%;
    }
    to {
      width: 70%;
    }
  }

  .widening {
    animation: widening 2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  }

  /* ELEMENT STYLES */

  h3 {
    font-family: 'Abril Fatface';
  }
  .notice-button {
    display: inline-block;
    position: absolute;
    bottom: 1em;
    right: 1em;
    cursor: pointer;
  }
  a.notice-link:hover {
    text-decoration: underline;
  }
  section {
    width: 70%;
    overflow: hidden;
    position: relative;
  }
</style>
