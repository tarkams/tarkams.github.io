<script lang="ts">
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    import FilledButton from "@components/button/filled-button.svelte";
    import OutlinedButton from "@components/button/outlined-button.svelte";

    if (browser) {
        try {
            (function(h,o,t,j,a,r){ (h as any).hj=(h as any).hj||function(){((h as any).hj.q=(h as any).hj.q||[]).push(arguments)}; (h as any)._hjSettings={hjid:5161229,hjsv:6}; (a as any)=o.getElementsByTagName('head')[0]; (r as any)=o.createElement('script');(r as any).async=1; (r as any).src=t+(h as any)._hjSettings.hjid+j+(h as any)._hjSettings.hjsv; (a as any).appendChild(r); })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');             
        } catch (error) {
            console.error(error);
        }
    }
</script>

<svelte:head>
    <title>Tarkams</title>
    <meta title="Tarkams" name="Tarkams" content="Tarkams" />
</svelte:head>
  
  
<div class="relative flex flex-col md:flex-row items-center justify-between p-8">
    <div class="w-full md:w-1/2 md:pr-8 z-10">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
            Main Santai, Hadiah Serius.
        </h1>
        <div class="text-neutral mb-6 text-center md:text-left">
            <span class="font-semibold">Tarkams</span> adalah platform untuk pemain olahraga rekreasional dan hobi. 
            Mulai dari tenis dan akan berkembang ke olahraga lain, memungkinkan kamu membuat atau bergabung dalam pertandingan, meraih hadiah, dan naik peringkat. 
            Tersedia untuk pengguna gratis dan berbayar.
        </div>
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <FilledButton label="Join the Wishlist" />
            <OutlinedButton onClick={() => goto("/landing-page/tentang-kami")} label="Learn More" />
        </div>
    </div>
    <div class="w-full md:w-1/2 mt-8 md:mt-0">
        <img alt="Tennis court with players" src="/landing-page-tennis.png" class="w-full h-auto rounded-lg shadow-lg" />
    </div>
    <div class="absolute inset-0 bg-cover bg-center z-0 md:hidden" style="background-image: url('/landing-page-tennis.png'); opacity: 0.3;"></div>
</div>

<style>
</style>
