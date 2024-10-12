<script lang="ts">
  import { isLoggedIn, username } from "@stores/user";

  let loggedIn = false;
  let currentUsername = "";

  // Subscribe to store changes
  $: loggedIn = $isLoggedIn;
  $: currentUsername = $username;
</script>

<div class="flex items-center justify-between w-full text-white font-bold">
  <a class="text-2xl" href="/" aria-label="Home"><strong>tarkams</strong></a>
  <div class="flex justify-between space-x-2">
    {#if loggedIn}
      <div><a href="/profile" aria-label="Profile">{currentUsername}</a></div>
    {:else}
      <div class="font-semibold">
        <!-- <a href="/login" aria-label="Login">Login</a> -->
      </div>
    {/if}
  </div>
</div>

<style>
</style>
