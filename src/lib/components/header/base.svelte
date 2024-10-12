<script lang="ts">
  import { isLoggedIn, username } from "@stores/user";
  import MainHeader from "@components/header/main-header.svelte";
  import PageHeader from "@components/header/page-header.svelte";
  import { page } from "$app/stores";

  let loggedIn = false;
  let currentUsername = "";

  // Subscribe to store changes
  $: loggedIn = $isLoggedIn;
  $: currentUsername = $username;
  $: isHomepage = $page.url.pathname === "/";
</script>

<div class="absolute z-50 w-full max-w-[768px]">
  <div class="p-4 justify-between h-16">
    {#if isHomepage}
      <MainHeader />
    {:else}
      <PageHeader />
    {/if}
  </div>
  <!-- <div class="h-8 bg-gradient-to-b from-white to-transparent -mt-1"></div> -->
</div>

<style>
</style>
