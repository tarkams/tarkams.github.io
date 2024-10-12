<script>
  import { formatNumber } from "@utils/common-helper";

  export let totalMatches = 100;
  export let wins = 65;
  export let losses = 35;
  export let balance = 1000;
  export let leaderboardRank = 42;
  export let createdMatches = 20;
  export let joinedMatches = 80;

  const primaryColor = "#4CAF50";
  const secondaryColor = "#1B5E20";

  $: winRate = Math.round((wins / totalMatches) * 100);
  $: strokeDasharray = 2 * Math.PI * 45; // Circumference of the circle
  $: strokeDashoffset = strokeDasharray * (1 - winRate / 100);
</script>

<div class="rounded-lg w-full">
  <h2 class="text-2xl font-bold mb-6 text-primary">User Statistics</h2>
  <div class="grid grid-cols-3 gap-4">
    <div class="bg-white rounded-lg p-4 shadow-md text-center">
      <h3 class="text-sm font-semibold mb-2">Total Matches</h3>
      <p class="text-2xl font-bold">{totalMatches}</p>
    </div>
    <div
      class="bg-white rounded-lg p-4 shadow-md text-center flex flex-col justify-between"
    >
      <h3 class="text-sm font-semibold mb-2">Wins</h3>
      <p class="text-2xl font-bold text-green-600">{wins}</p>
    </div>
    <div
      class="bg-white rounded-lg p-4 shadow-md text-center flex flex-col justify-between"
    >
      <h3 class="text-sm font-semibold mb-2">Losses</h3>
      <p class="text-2xl font-bold text-red-600">{losses}</p>
    </div>
    <div class="bg-white rounded-lg p-4 shadow-md text-center col-span-3">
      <h3 class="text-sm font-semibold mb-2">Win Rate</h3>
      <div class="relative inline-block">
        <svg class="w-32 h-32" viewBox="0 0 100 100">
          <defs>
            <linearGradient
              id="circleGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stop-color={primaryColor} />
              <stop offset="100%" stop-color={secondaryColor} />
            </linearGradient>
          </defs>
          <circle
            class="text-gray-200 stroke-current"
            stroke-width="10"
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
          />
          <circle
            stroke-width="10"
            stroke-linecap="round"
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="url(#circleGradient)"
            stroke-dasharray={strokeDasharray}
            stroke-dashoffset={strokeDashoffset}
            transform="rotate(-90 50 50)"
          >
            <animate
              attributeName="stroke-dashoffset"
              from={strokeDasharray}
              to={strokeDashoffset}
              dur="1s"
              fill="freeze"
            />
          </circle>
        </svg>
        <div class="absolute inset-0 flex items-center justify-center">
          <span class="text-2xl font-bold">{winRate}%</span>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-2 gap-4 mt-4 text-neutral">
    <div class="bg-white rounded-lg p-4 shadow-md text-center">
      <h3 class="text-sm font-semibold mb-2">Diamonds</h3>
      <p class="text-2xl font-bold">{formatNumber(balance)}</p>
    </div>
    <div class="bg-white rounded-lg p-4 shadow-md text-center">
      <h3 class="text-sm font-semibold mb-2">Leaderboard Rank</h3>
      <p class="text-2xl font-bold">#{leaderboardRank}</p>
    </div>
    <div class="bg-white rounded-lg p-4 shadow-md text-center">
      <h3 class="text-sm font-semibold mb-2">Created Matches</h3>
      <p class="text-2xl font-bold">{createdMatches}</p>
    </div>
    <div class="bg-white rounded-lg p-4 shadow-md text-center">
      <h3 class="text-sm font-semibold mb-2">Joined Matches</h3>
      <p class="text-2xl font-bold">{joinedMatches}</p>
    </div>
  </div>
</div>
