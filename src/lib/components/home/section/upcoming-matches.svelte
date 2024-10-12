<script>
  import FilledButton from "@components/button/filled-button.svelte";

  // Mock data for upcoming matches
  let upcomingMatches = [
    {
      id: 1,
      date: "2024-03-15",
      time: "14:00",
      players: ["Player A"],
      location: "Tennis Court 1",
    },
    {
      id: 2,
      date: "2024-03-16",
      time: "10:00",
      players: ["Player C"],
      location: "Tennis Court 2",
    },
    {
      id: 3,
      date: "2024-03-17",
      time: "16:00",
      players: ["Player E"],
      location: "Tennis Court 3",
    },
  ];
</script>

<section class="w-full">
  <h2 class="text-2xl font-bold mb-4 text-primary">Upcoming Matches</h2>
  {#if upcomingMatches.length > 0}
    <ul class="space-y-4">
      {#each upcomingMatches as match (match.id)}
        <li
          class="bg-neutral-light rounded-lg p-4 flex justify-between items-end"
        >
          <div>
            <p><span class="font-semibold">Date:</span> {match.date}</p>
            <p><span class="font-semibold">Time:</span> {match.time}</p>
            <p>
              <span class="font-semibold">Players:</span>
              {match.players.join(" vs ")}
            </p>
            <p><span class="font-semibold">Location:</span> {match.location}</p>
          </div>
          <FilledButton label="Join" />
        </li>
      {/each}
    </ul>
  {:else}
    <p class="text-gray-600">No upcoming matches available at the moment.</p>
  {/if}
</section>
