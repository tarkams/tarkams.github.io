<script lang="ts">
  import IconButton from "@components/button/icon-button.svelte";
import TextButton from "@components/button/text-button.svelte";
import { isLoggedIn, username } from "@stores/user";
  import { formatNumber } from "@utils/common-helper";
  import { Icon } from "svelte-icons-pack";
  import { BsCamera } from "svelte-icons-pack/bs";

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
    diamonds: {
      free: 200,
      earned: 4000,
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

  const locationList = [
    "Jakarta selatan",
    "Jakarta Barat",
    "Jakarta Utara",
    "Tangerang",
    "Jakarta Timur",
    "Bogor",
    "Bekasi",
  ]

  const skillLevel: { [key: number]: { label: string; value: number } } = {
    0: {
      label: "Beginner",
      value: 0,
    },
    1: {
      label: "Intermediate",
      value: 33,
    },
    2: {
      label: "Advanced",
      value: 66,
    },
    3: {
      label: "Pro",
      value: 100,
    },
  };
let nameError = ''
  // Subscribe to store changes
  $: loggedIn = $isLoggedIn;
  $: currentUsername = $username;
  $: ({
    name,
    email,
    diamonds: { free: freeDiamonds, earned: earnedDiamonds },
    level,
    utr,
    stats: { win, lose },
    club,
    subscription,
  } = userData);

  $: location = `${userData.location.city}`;
  $: winRate = win + lose > 0 ? ((win / (win + lose)) * 100).toFixed(1) : 0;

  function handleLogout(e: Event) {
    username.set("");
    isLoggedIn.set(false);
  }

  function validateName(value: string): boolean {
    if (value.trim() === "") {
      nameError = "Name cannot be empty";
      return false;
    }
    if (!/^[a-zA-Z\s-]+$/.test(value)) {
      nameError = "Name can only contain letters, spaces, and hyphens";
      return false;
    }
    nameError = "";
    return true;
  }
</script>

<div class="relative flex flex-col items-center w-full">
  <div class="relative w-32 h-32 rounded-full bg-neutral-light">
    <IconButton className="absolute bottom-0 right-0" icon={BsCamera} onClick={() => {
      console.log('Change profile picture clicked');
    }}/>
  </div>

  <div class="w-full mt-8 space-y-2">
    <div class="text-primary font-bold">Name</div>
    <input
      type="text"
      value={name}
      on:input={(event) => {
        const value = (event.target as HTMLInputElement).value;
        name = value;
        validateName(value);
      }}
      class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      class:border-red-500={nameError}
    />
    {#if nameError}
      <div class="text-red-500 text-sm mt-1">{nameError}</div>
    {/if}
  </div>

  <div class="w-full mt-8 space-y-2">
    <div class="text-primary font-bold">Level</div>
    <select
      bind:value={level}
      class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {#each Object.entries(skillLevel) as [key, data]}
        <option value={parseInt(key)}>{data.label}</option>
      {/each}
    </select>
  </div>

  <div class="w-full mt-8 space-y-2">
    <div class="text-primary font-bold">UTR</div>
    <input
      type="number"
      value={name}
      on:input={(event) => {
        const value = (event.target as HTMLInputElement).value;
        name = value;
      }}
      class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      class:border-red-500={nameError}
    />
    {#if nameError}
      <div class="text-red-500 text-sm mt-1">{nameError}</div>
    {/if}
  </div>

  <div class="w-full mt-8 space-y-2">
    <div class="text-primary font-bold">Location</div>
    <select
      bind:value={location}
      class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {#each locationList as loc}
        <option value={loc}>{loc}</option>
      {/each}
    </select>
  </div>

  <div class="w-full mt-8 space-y-2">
    <div class="text-primary font-bold">Club</div>
    <input
      type="text"
      value={club}
      on:input={(event) => {
        const value = (event.target as HTMLInputElement).value;
        club = value;
        validateName(value);
      }}
      class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      class:border-red-500={nameError}
    />
    {#if nameError}
      <div class="text-red-500 text-sm mt-1">{nameError}</div>
    {/if}
  </div>
  <TextButton label="Save" className="mt-8"/>
</div>
