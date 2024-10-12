<script lang="ts">
  import { Icon } from "svelte-icons-pack";
  import { BsCashCoin, BsPeopleFill, BsTrophyFill } from "svelte-icons-pack/bs";
  import FilledButton from "@components/button/filled-button.svelte";
  import Benefits from "./section/benefits.svelte";
  import Leaderboard from "./section/leaderboard.svelte";
  import OngoingMatches from "./section/ongoing-matches.svelte";
  import Rewards from "./section/rewards.svelte";
</script>

<div class="p-8 rounded-lg space-y-8">
  <div class="mb-16">
    <h1 class="text-2xl md:text-5xl text-center text-white md:mt-0 mt-16">
      Selamat Datang di <span class="font-bold">Tarkams</span>
    </h1>
    <p class="text-white text-center mt-4 text-sm md:text-xl">
      Main, Klaim Diamond, Tebus Hadiahnya!
    </p>
    <div class="mt-6 flex justify-center">
      <a href="/tentang-tarkams">
        <FilledButton
          label="Tentang Kami"
          on:click={() => (window.location.href = "/tentang-tarkams")}
        />
      </a>
    </div>
  </div>
  <Benefits />
  <Rewards />
</div>

<style>
</style>
