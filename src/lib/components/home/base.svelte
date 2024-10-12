<script>
  import AfterLogin from "./after-login.svelte";
  import BeforeLogin from "./before-login.svelte";
  import LandingPage from "./landing-page.svelte";
  import { onMount } from "svelte";

  let imageSrc = "/home-photo-2.webp";
  let showButton = false;

  const imageList = [
    "/home-photo-2.webp",
    "/home-photo-3.webp",
    "/home-photo-4.webp",
    "/home-photo-5.webp",
    "/home-photo-6.webp",
  ];

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    showButton = urlParams.get("debug") === "1";
  });

  function changeBackground() {
    const currentIndex = imageList.indexOf(imageSrc);
    const nextIndex = (currentIndex + 1) % imageList.length;
    imageSrc = imageList[nextIndex];
  }
</script>

<div class="relative w-full">
  <div
    class="bg-cover h-64 md:h-96 relative"
    style="background-image: url({imageSrc});"
  >
    <div class="absolute inset-0 bg-black opacity-60"></div>
  </div>
  <div class="mx-auto px-4 relative -mt-72">
    <div class="flex flex-col space-y-8 items-center">
      <!-- <BeforeLogin /> -->
      <!-- <AfterLogin /> -->
      <LandingPage />
      {#if showButton}
        <button on:click={changeBackground} class="bg-white p-2 rounded"
          >Change Background</button
        >
      {/if}
    </div>
  </div>
</div>
