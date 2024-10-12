<script lang="ts">
    import FilledButton from "@components/button/filled-button.svelte";
    import OutlinedButton from "@components/button/outlined-button.svelte";
    import Benefits from "@components/home/section/benefits.svelte";
    import Leaderboard from "@components/home/section/leaderboard.svelte";
    import { browser } from "$app/environment";

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
  
<div class="relative flex flex-col items-center p-8">
    <div class="flex flex-col space-y-16 items-center max-w-4xl">
        <div class="flex flex-col items-center space-y-4">
            <h1 class="text-5xl font-bold text-center">
                Tentang Kami
            </h1>
        </div>         
        <div class="rounded-lg drop-shadow bg-white p-8 w-full">
            <h2 class="text-2xl font-semibold text-primary mb-4">Ringkasan Eksekutif</h2>
            <p class="mb-4">Tarkams adalah platform matchmaking olahraga yang awalnya berfokus pada tenis dan akan terus berkembang ke olahraga lain. Di sini, kamu bisa membuat dan bergabung dalam pertandingan, berkompetisi di liga, serta mengumpulkan diamond yang bisa kamu tukarkan dengan hadiah menarik.</p>
            <p class="mb-4">Tarkams bertujuan untuk membuat olahraga jadi lebih seru, kompetitif, dan menguntungkan. Kami ingin mengubah cara pemain amatir menikmati olahraga kesukaan mereka, sekaligus memberikan kesempatan untuk mendapatkan reward lewat model langganan bagi pengguna gratis dan berbayar.</p>
        </div>

        <div class="rounded-lg drop-shadow bg-white p-8 w-full">
            <h2 class="text-2xl font-semibold text-primary mb-4">Visi dan Misi</h2>
            <h3 class="text-xl font-semibold mb-2">Visi</h3>
            <p class="mb-4">Menjadi platform utama yang menghubungkan atlet rekreasional, memberikan ruang tidak hanya untuk bertanding, tapi juga untuk mendapatkan hadiah, meningkatkan kemampuan, dan berpartisipasi dalam komunitas olahraga.</p>
            <h3 class="text-xl font-semibold mb-2">Misi</h3>
            <p>Menciptakan lingkungan olahraga yang berkelanjutan dan inklusif di mana semua pemain, baik pemula maupun berpengalaman, bisa terhubung, berkompetisi, dan mencapai pertumbuhan melalui olahraga.</p>
        </div>

        <div class="rounded-lg drop-shadow bg-white p-8 w-full">
            <h2 class="text-2xl font-semibold text-primary mb-4">Masalah yang Dihadapi</h2>
            <p class="mb-4">Banyak penggemar olahraga amatir yang kesulitan mencari lawan tanding yang selevel, terutama di wilayah seperti Indonesia, di mana turnamen dan liga belum banyak tersedia. Solusi yang ada saat ini juga sering kali tidak memberikan insentif atau hadiah yang berarti untuk partisipasi rutin.</p>
            <ul class="list-disc pl-5">
                <li>Sulitnya menemukan lawan tanding yang selevel.</li>
                <li>Kurangnya motivasi karena tidak ada hadiah atau insentif.</li>
                <li>Turnamen yang berbayar membuat banyak pemain malas ikut karena biaya yang tidak sebanding dengan keuntungan.</li>
            </ul>
        </div>

        <div class="rounded-lg drop-shadow bg-white p-8 w-full">
            <h2 class="text-2xl font-semibold text-primary mb-4">Solusi dari Tarkams</h2>
            <p class="mb-4">Tarkams hadir dengan solusi yang memudahkan kamu untuk:</p>
            <ul class="list-disc pl-5">
                <li>Cari lawan tanding selevel, sehingga pertandingan lebih seru dan adil.</li>
                <li>Dapatkan hadiah (diamond) setiap kali kamu menang, yang bisa kamu tukarkan dengan berbagai hadiah menarik.</li>
                <li>Ikuti liga dan turnamen untuk mengasah kemampuanmu dan naik peringkat.</li>
            </ul>
            <p class="mb-4">Dengan model langganan yang berbeda antara pengguna gratis dan berbayar, Tarkams menawarkan cara yang seru dan mudah untuk terus aktif bermain dan mendapatkan manfaat dari setiap pertandingan.</p>
        </div>

        <div class="rounded-lg drop-shadow bg-white p-8 w-full">
            <h2 class="text-2xl font-semibold text-primary mb-4">Fitur Utama di Tarkams</h2>
            <h3 class="text-xl font-semibold mb-2">Matchmaking</h3>
            <p class="mb-4">Tarkams memudahkan kamu untuk menemukan lawan tanding yang sesuai dengan level kemampuanmu.</p>
            <h3 class="text-xl font-semibold mb-2">Liga dan Turnamen</h3>
            <p class="mb-4">Kamu bisa bergabung di berbagai liga dan turnamen untuk uji kemampuanmu. Tingkatkan peringkatmu di leaderboard dan tunjukkan bahwa kamu bisa jadi yang terbaik.</p>
            <h3 class="text-xl font-semibold mb-2">Sistem Diamond</h3>
            <p class="mb-4">Setiap kali kamu menang, kamu akan mendapatkan diamond yang bisa ditukarkan dengan berbagai hadiah menarik. Kamu bisa menggunakan diamond untuk beli tiket pertandingan atau menukarnya dengan hadiah lainnya.</p>
            <h3 class="text-xl font-semibold mb-2">Model Langganan</h3>
            <p>Tarkams menawarkan dua jenis pengguna: Gratis dan Berbayar, dengan keuntungan yang berbeda.</p>
            <p>Pengguna Gratis: Mendapatkan jumlah tiket pertandingan terbatas per bulan.</p>
            <p>Pengguna Berbayar: Mendapatkan lebih banyak tiket pertandingan dan berbagai keuntungan tambahan lainnya.</p>
        </div>

        <div class="rounded-lg drop-shadow bg-white p-8 w-full">
            <h2 class="text-2xl font-semibold text-primary mb-4">Potensi Masa Depan</h2>
            <p>Tarkams tidak hanya berhenti di tenis. Kami akan memperluas platform ini ke berbagai cabang olahraga lain, seperti bulu tangkis, golf, dan olahraga lari. Kami percaya, dengan terus menambah olahraga dan fitur baru, Tarkams akan menjadi tempat utama bagi para penggemar olahraga untuk berkumpul, berkompetisi, dan menang.</p>
        </div>

        <div class="rounded-lg drop-shadow bg-white p-8 w-full">
            <h2 class="text-2xl font-semibold text-primary mb-4">Kesimpulan</h2>
            <p>Tarkams hadir untuk menciptakan pengalaman olahraga yang lebih seru dan kompetitif bagi semua pemain, baik pemula maupun yang sudah berpengalaman. Dengan fitur matchmaking, liga dan turnamen, serta sistem reward berbasis diamond, Tarkams adalah tempat di mana kamu bisa menantang dirimu dan mendapatkan hadiah nyata dari setiap kemenangan.</p>
        </div>


        <div class="flex flex-col items-center space-y-4">
            <h2 class="text-3xl font-semibold text-center">Ayo, gabung di Tarkams dan mulai bertanding!</h2>
            <div class="flex space-x-4">
                <FilledButton label="Mulai Sekarang" />
            </div>
        </div>
    </div>
</div>

<style>
</style>
