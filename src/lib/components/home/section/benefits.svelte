<script lang="ts">
  import { Icon } from "svelte-icons-pack";
  import { BsCashCoin, BsPeopleFill, BsTrophyFill } from "svelte-icons-pack/bs";

  const benefits = [
    {
      icon: BsPeopleFill,
      title: "Temukan Partner Bermain",
      description:
        "Gratis cari dan temukan rekan bermain untuk pertandingan yang menantang dan menyenangkan.",
    },
    {
      icon: BsTrophyFill,
      title: "Menang dan Dapatkan Diamond",
      description:
        "Tingkatkan performa permainanmu dan kumpulkan diamond tanpa batas",
    },
    {
      icon: BsCashCoin,
      title: "Tebus Hadiah Menarik",
      description:
        "Tukarkan Diamond dengan hadiah eksklusif dan berbagai keuntungan istimewa",
    },
  ];
</script>

<div class="grid grid-cols-1 gap-12 rounded-lg drop-shadow bg-white p-8">
  {#each benefits as benefit}
    <div class="flex space-x-4">
      <div
        class="bg-primary rounded-lg p-2 h-10 w-10 flex justify-center items-center"
      >
        <Icon src={benefit.icon} size="48" color="white" />
      </div>
      <div class="flex flex-col">
        <h2 class="text-xl font-semibold mb-2 text-primary">
          {benefit.title}
        </h2>
        <p class="text-neutral">{benefit.description}</p>
      </div>
    </div>
  {/each}
</div>
