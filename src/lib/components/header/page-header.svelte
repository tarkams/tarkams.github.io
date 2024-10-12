<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  import { isLoggedIn, username } from "@stores/user";
  import { onMount } from "svelte";
  import { Icon } from "svelte-icons-pack";
  import { BsChevronLeft } from "svelte-icons-pack/bs";

  export let isAllowBack = true;

  let loggedIn = false;
  let currentUsername = "";
  let title = "Tarkams";

  onMount(() => {
    title = document.title || "Tarkams";
  });

  afterNavigate(() => {
    title = document.title || "Tarkams";
  });

  // Subscribe to store changes
  $: loggedIn = $isLoggedIn;
  $: currentUsername = $username;

  function goBack() {
    history.back();
  }
</script>

<div class="flex items-center w-full relative">
  {#if isAllowBack}
    <button class="text-primary absolute left-0" on:click={goBack}>
      <Icon src={BsChevronLeft} />
    </button>
  {/if}
  <h1 class="text-primary flex-grow text-center">{title}</h1>
</div>

<style>
</style>
