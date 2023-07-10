<script lang="ts">
  import { uiState } from 'src/store';
  import { hireFormAction } from 'src/api';
  import { MSG_SENT, ERR_MSG } from 'src/constants';
  import CategoryPicker from './CategoryPicker.svelte';

  // Icons
  import Shop from 'src/assets/iconsax/shop.svelte';
  import Station from 'src/assets/iconsax/devices-1.svelte';
  import Logic from 'src/assets/iconsax/hierarchy-square-3.svelte';
  import Tools from 'src/assets/iconsax/shapes.svelte';
  import IconX from 'src/assets/iconsax/close-circle.svelte';
  const ERROR_DURATION = 4000;

  let name = '';
  let contactInfo = '';
  let category = '';
  let misc = '';

  let isOpen: boolean;
  let errorMsg: null | string;
  let successMsg: null | string;

  let isLoading = false;

  uiState.subscribe((ui) => {
    isOpen = ui.isHireFormOpen;
  });

  const close = () => uiState.update((ui) => ({ ...ui, isHireFormOpen: !ui.isHireFormOpen }));

  const handleCategory = (selCategory: string) => {
    category = selCategory;
  };

  const handleSubmit = async (evt: { target: HTMLFormElement }) => {
    const form = new FormData(evt.target);
    let reqBody = <Record<string, any>>{};
    //@ts-ignore
    for (let [key, val] of form) {
      reqBody[key] = val;
    }

    try {
      isLoading = true;
      const resp = await hireFormAction({ ...reqBody, category });
      successMsg = MSG_SENT;
    } catch (err) {
      errorMsg = ERR_MSG;
    } finally {
      isLoading = false;
    }
  };

  $: if (errorMsg) {
    setTimeout(() => (errorMsg = null), ERROR_DURATION);
  }
</script>

<div class={`hm-wrapper ${isOpen ? 'block top-0' : ' top-[-400%]'}`}>
  <form class="content" on:submit|preventDefault={handleSubmit}>
    <p class="my-8 md:text-2xl text-xl">
      I am so happy that you want to work on something with me. Once you fill this form, I'll reach
      out to you within a short while and things are gonna take off from there.
    </p>

    {#if errorMsg}
      <div class="text-red-400 my-4">{errorMsg}</div>
    {/if}
    <div class="form-control mb-4">
      <label for="name" class="input-group">
        <span class="label-text"> Name</span>
        <input
          name="name"
          bind:value={name}
          type="text"
          placeholder="What do you go by?"
          class=" input-bordered text-white w-full input-lg"
        />
      </label>
    </div>

    <div class="form-control block w-full mb-4">
      <span class=" md:text-2xl text-lg"> What category best describes your use case</span>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 mb-4 items-center w-full">
      <CategoryPicker
        Icon={Shop}
        label="E-Commerce"
        onChange={handleCategory}
        selected={category}
      />
      <CategoryPicker
        Icon={Station}
        label="Marketing Website"
        onChange={handleCategory}
        selected={category}
      />
      <CategoryPicker
        Icon={Logic}
        label="Custom Software"
        onChange={handleCategory}
        selected={category}
      />
      <CategoryPicker
        Icon={Tools}
        label="Bots & Integration"
        onChange={handleCategory}
        selected={category}
      />
    </div>

    <div class="mb-4 form-control">
      <label for="contactInfo" class="input-group">
        <span class="label-text"> Contact Info </span>
        <input
          name="contactInfo"
          bind:value={contactInfo}
          class=" block w-full text-white  input-lg"
          placeholder="e.g email, twitter etc"
        />
      </label>
    </div>

    <div class="form-control">
      <textarea
        name="misc"
        placeholder="Any other info you would like to tell me?"
        bind:value={misc}
        class="p-4 block w-full text-white input-bg"
      />
    </div>
    <div class="mb-4" />

    <div class="flex justify-center w-full">
      {#if successMsg}
        <div>{successMsg}</div>
      {:else if isLoading}
        <i> Submitting in a jiffy...</i>
      {:else}
        <button type="submit" class="btn btn-large"> Submit </button>
      {/if}
    </div>
  </form>
  <div class="mb-[10em]" />

  {#if isOpen}
    <button class="close-button" on:click={close}> <IconX /></button>
  {/if}
</div>

<style lang="postcss">
  .hm-wrapper {
    @apply absolute w-screen min-h-screen text-gray-800  bg-yellow-200 transition-all duration-300 z-[10000];
  }

  .content {
    @apply py-4 md:px-4  w-10/12 md:w-[40em]  h-full mx-auto   gap-4;
  }

  .close-button {
    @apply w-14 h-14 fixed inline-grid place-items-center  bg-red-400 shadow-md rounded-full right-4 bottom-4 md:bottom-8;
  }
</style>
