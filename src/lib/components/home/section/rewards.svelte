<script>
  const prizes = [
    { name: "Tennis Racket", icon: "🎾" },
    { name: "Tennis Shoes", icon: "👟" },
    { name: "Tennis Balls", icon: "🟢" },
    { name: "Sports Bag", icon: "🎒" },
    { name: "Wristbands", icon: "💪" },
    { name: "Tennis Lessons", icon: "👨‍🏫" },
  ];
</script>

<section class="rounded-lg drop-shadow bg-white p-8">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-2xl font-bold mb-4 text-primary">
      Hadiah yang Bisa Ditukarkan
    </h2>
    <p class="text-lg mb-8 text-gray-600">
      Ubah kemenanganmu menjadi hadiah keren. Lihat apa saja yang bisa kamu
      menangkan!
    </p>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
      {#each prizes as prize}
        <div
          class="bg-white p-6 rounded-lg transition-transform hover:scale-105 text-center"
        >
          <div class="text-4xl mb-2">{prize.icon}</div>
          <h3 class="text-xl font-semibold text-gray-800">{prize.name}</h3>
        </div>
      {/each}
    </div>
  </div>
</section>
