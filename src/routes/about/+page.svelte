<script>
  // About content
  const mission =
    "At TARKAMS, we connect tennis players from all skill levels to create a fun, competitive, and social environment. Whether you're a beginner or a seasoned pro, we help you find the perfect match to improve your game and enjoy the sport.";

  const features = [
    "Easy matchmaking based on skill level",
    "Real-time match updates and notifications",
    "Detailed player profiles with stats and rankings",
    "Join or host local matches with a click",
    "A community of tennis lovers",
  ];
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<!-- About Section -->
<section class="container">
  <h1>About TARKAMS</h1>

  <!-- Mission Statement -->
  <section class="mission">
    <h2>Our Mission</h2>
    <p>{mission}</p>
  </section>

  <!-- Features Section -->
  <section class="features">
    <h2>Why Choose TARKAMS?</h2>
    <ul>
      {#each features as feature}
        <li>{feature}</li>
      {/each}
    </ul>
  </section>

  <!-- CTA -->
  <section class="cta">
    <h2>Ready to Play?</h2>
    <p>
      Join the TARKAMS community today and start finding your perfect tennis
      match!
    </p>
    <a href="/match" class="contrast">Get Started</a>
  </section>
</section>

<!-- Custom Styles -->
<style>
  section {
    margin-top: 2rem;
  }

  h1,
  h2 {
    color: var(--primary);
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    text-align: center;
    max-width: 768px;
    margin: 0 auto 2rem;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    margin-top: 2rem;
    text-align: center;
  }

  ul li {
    background-color: var(--gray-light);
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    font-size: 1.1rem;
  }

  .cta {
    text-align: center;
    margin-top: 3rem;
  }

  .cta a {
    padding: 0.8rem 1.5rem;
    font-size: 1.2rem;
    border-radius: 8px;
  }
</style>
