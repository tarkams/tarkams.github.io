<script lang="ts">
  import { page } from "$app/stores";
  import IconButton from "@components/button/icon-button.svelte";
  import { Icon } from "svelte-icons-pack";
  import {
    BsHouseDoor,
    BsListStars,
    BsTrophy,
    BsPlusCircleFill,
    BsPersonCircle,
  } from "svelte-icons-pack/bs";

  const menuItems = [
    { name: "Home", icon: BsHouseDoor, href: "/", isDisabled: false },
    { name: "Match", icon: BsListStars, href: "/match", isDisabled: true },
  ];

  const rightMenuItems = [
    {
      name: "Leaderboard",
      icon: BsTrophy,
      href: "/leaderboard",
      isDisabled: true,
    },
    {
      name: "Profile",
      icon: BsPersonCircle,
      href: "/profile",
      isDisabled: true,
    },
  ];

  $: allMenuItems = [...menuItems, ...rightMenuItems];
  $: showNavBar = allMenuItems.some((item) => $page.url.pathname === item.href);
</script>

{#if showNavBar}
  <nav
    class="fixed bottom-0 w-full bg-white shadow-lg max-w-[768px] h-16 flex flex-col justify-center items-center"
  >
    <div
      class="absolute bottom-16 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-white"
    ></div>
    <div class="relative flex justify-between items-center p-2 w-full">
      <div class="flex w-5/12 justify-around">
        {#each menuItems as item}
          {#if item.isDisabled}
            <div class="flex flex-col items-center text-sm text-gray-400">
              <Icon src={item.icon} size="24" />
              <span>Coming Soon</span>
            </div>
          {:else}
            <a
              href={item.href}
              class="flex flex-col items-center text-sm"
              class:text-primary={$page.url.pathname === item.href}
              class:text-gray-400={$page.url.pathname !== item.href}
            >
              <Icon src={item.icon} size="24" />
              <span>{item.name}</span>
            </a>
          {/if}
        {/each}
      </div>

      <IconButton
        icon={BsPlusCircleFill}
        className="p-1 absolute left-1/2 -translate-x-1/2 -top-5 bg-gray-400"
        size={32}
      />
      <div class="flex w-5/12 justify-around">
        {#each rightMenuItems as item}
          {#if item.isDisabled}
            <div class="flex flex-col items-center text-sm text-gray-400 w-1/2">
              <Icon src={item.icon} size="24" />
              <span>Coming Soon</span>
            </div>
          {:else}
            <a
              href={item.href}
              class="flex flex-col items-center text-sm w-1/5"
              class:text-primary={$page.url.pathname === item.href}
              class:text-gray-400={$page.url.pathname !== item.href}
            >
              <Icon src={item.icon} size="24" />
              <span>{item.name}</span>
            </a>
          {/if}
        {/each}
      </div>
    </div>
  </nav>
{/if}
