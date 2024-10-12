<script lang="ts">
  import UpcomingMatches from "@components/home/section/upcoming-matches.svelte";
  import UserStatistics from "@components/home/section/user-statistics.svelte";
</script>

<div class="flex flex-col items-center space-y-4">
  <h1 class="text-5xl font-bold text-center">
    Welcome to <span class="text-primary">Tarkams</span>
  </h1>
  <p class="text-neutral text-center">
    The Ultimate sports matchmaking platform for tennis enthusiasts. Connect,
    compete, and climb the leaderboards
  </p>
</div>

<UpcomingMatches />
<UserStatistics />

<style>
</style>
