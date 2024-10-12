<script lang="ts">
  import { isLoggedIn, username } from "@stores/user";
  import { formatNumber } from "@utils/common-helper";
  import { Icon } from "svelte-icons-pack";
  import { BsPencilSquare } from "svelte-icons-pack/bs";
  import { goto } from "$app/navigation";

  let name: string = "";
  let email: string = "";
  let freeDiamonds: number = 0;
  let earnedDiamonds: number = 0;
  let level: number = 0;
  let utr: string | number = 0.0;
  let win: number = 0;
  let lose: number = 0;
  let winRate: string | number = "-";
  let location: string = "-";
  let club: string = "-";
  let subscription: number = 0;

  const userData = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    currency: {
      free_diamonds: 200,
      earned_diamonds: 4000,
    },
    level: 1,
    utr: 7.8,
    stats: {
      win: 9,
      lose: 1,
    },
    location: {
      city: "Jakarta",
      country: "Indonesia",
    },
    club: "Tennis Club",
    subscription: 1,
  };

  const skillLevel: { [key: number]: { label: string; value: number } } = {
    0: {
      label: "Beginner",
      value: 0,
    },
    1: {
      label: "Intermediate",
      value: 36,
    },
    2: {
      label: "Advanced",
      value: 72,
    },
    3: {
      label: "Pro",
      value: 100,
    },
  };

  // Subscribe to store changes
  $: loggedIn = $isLoggedIn;
  $: currentUsername = $username;
  $: ({
    name,
    email,
    currency: { free_diamonds: freeDiamonds, earned_diamonds: earnedDiamonds },
    level,
    utr,
    stats: { win, lose },
    club,
    subscription,
  } = userData);

  $: location = `${userData.location.city}, ${userData.location.country}`;
  $: winRate = win + lose > 0 ? ((win / (win + lose)) * 100).toFixed(1) : 0;

  function handleLogout(e: Event) {
    username.set("");
    isLoggedIn.set(false);
  }
</script>

<svelte:head>
  <title>Profile</title>
  <meta name="Profile" content="Profile" />
</svelte:head>

<div class="relative flex flex-col items-center p-4">
  <button
    class="absolute text-primary m-8 top-0 right-0"
    on:click={() => goto("/profile/edit")}
  >
    <Icon src={BsPencilSquare} />
  </button>
  <div class="relative w-32 h-32 rounded-full mb-4 bg-neutral-light">
    {#if subscription}
      <div
        class="absolute bottom-0 right-0 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full"
      >
        PRO
      </div>
    {/if}
  </div>

  <h1 class="text-2xl font-semibold mt-0 text-primary">{name}</h1>
  <h2 class="text-secondary">{email}</h2>

  <div
    class="flex w-full mt-8 drop-shadow-lg bg-white rounded p-4 divide-x text-center"
  >
    <div class="w-1/2">
      <div class="text-primary font-semibold">Free Diamonds</div>
      <div class="text-neutral-dark">{formatNumber(freeDiamonds)}</div>
    </div>
    <div class="w-1/2">
      <div class="text-primary font-semibold">Earned Diamonds</div>
      <div class="text-neutral-dark">{formatNumber(earnedDiamonds)}</div>
    </div>
  </div>

  <div class="w-full mt-8 space-y-2">
    <div class="text-primary font-bold">Level</div>
    <div class="flex justify-between items-center space-x-8">
      <div class="relative flex-grow ml-8">
        <div class="h-2 bg-neutral-light rounded-full">
          <div
            class="h-full bg-primary rounded-full"
            style={`width: ${skillLevel[level].value}%;`}
          ></div>
        </div>
        <div
          class="relative flex justify-between text-xs text-neutral-dark mt-2"
        >
          {#each Object.entries(skillLevel) as [key, data]}
            <div
              class="absolute"
              style="left: {data.value}%; transform: translateX(-50%);"
            >
              <div
                class={key == level.toString()
                  ? "font-semibold text-primary"
                  : ""}
              >
                {data.label}
              </div>
            </div>
          {/each}
        </div>
      </div>
      <div
        class="border rounded bg-white drop-shadow flex flex-col items-center round px-4 py-2 m-2"
      >
        <div class="text-primary font-semibold">UTR</div>
        <div class="text-neutral-dark">{utr.toFixed(1)}</div>
      </div>
    </div>
  </div>

  <div class="w-full mt-8 space-y-2">
    <div class="text-primary font-bold">Statistics</div>
    <div class="flex divide-x w-full justify-between">
      <div class="p-4 flex flex-col items-center w-1/3">
        <div class="text-primary font-semibold">Win</div>
        <div class="text-neutral-dark">{win}</div>
      </div>
      <div class="p-4 flex flex-col items-center w-1/3">
        <div class="text-primary font-semibold">Lose</div>
        <div class="text-neutral-dark">{lose}</div>
      </div>
      <div class="p-4 flex flex-col items-center w-1/3">
        <div class="text-primary font-semibold">Win Rate</div>
        <div class="text-neutral-dark">{winRate ? winRate + "%" : "-"}</div>
      </div>
    </div>
  </div>

  <div class="w-full mt-8 space-y-2">
    <div class="text-primary font-bold">Location</div>
    <div class="text-neutral-dark">{location}</div>
  </div>

  <div class="w-full mt-8 space-y-2">
    <div class="text-primary font-bold">Club</div>
    <div class="text-neutral-dark">{club}</div>
  </div>

  <button class="mt-16 text-primary flex items-center">
    <span>Logout</span>
  </button>
</div>
