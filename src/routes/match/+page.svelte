<script lang="ts">
  let matches = [
    {
      id: 1,
      host: "John Doe",
      level: "Intermediate",
      location: "Central Park",
      status: "Open",
    },
    {
      id: 2,
      host: "Jane Smith",
      level: "Advanced",
      location: "Grand Slam Court",
      status: "Ongoing",
    },
    {
      id: 3,
      host: "Alex Johnson",
      level: "Beginner",
      location: "City Tennis Arena",
      status: "Open",
    },
    {
      id: 4,
      host: "Chris Lee",
      level: "Advanced",
      location: "Eastside Sports Complex",
      status: "Completed",
    },
  ];

  // Function to handle joining a match
  const joinMatch = (matchId: number) => {
    console.log(`Joining match with ID: ${matchId}`);
    // Implement your join match logic here (e.g., API call, update UI, etc.)
  };
</script>

<svelte:head>
  <title>Match</title>
  <meta name="Match" content="Match" />
</svelte:head>

<div>
  <article>
    <header>Tanding Tennis</header>
    <p>
      Ayo ikut tanding tennis di-sini, berikut tandingan tennis yang ada
      di-dekatmu, segera join dan langsung bermain tenis
    </p>
  </article>
  <section class="container">
    <h2>Available Matches</h2>

    <!-- Match Table -->
    <table role="grid">
      <thead>
        <tr>
          <th>Host Player</th>
          <th>Player Level</th>
          <th>Location</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {#each matches as match}
          <tr>
            <td>{match.host}</td>
            <td>{match.level}</td>
            <td>{match.location}</td>
            <td>{match.status}</td>
            <td>
              {#if match.status === "Open"}
                <button on:click={() => joinMatch(match.id)} class="outline"
                  >Join</button
                >
              {:else}
                <span>N/A</span>
              {/if}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </section>
</div>
