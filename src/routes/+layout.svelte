<script>
  import "@styles/app.css";
  import Layout from "@components/layout/base.svelte";
  import Background from "@components/layout/background.svelte";
  import Canvas from "@components/layout/canvas.svelte";
  import Header from "@components/header/base.svelte";
  import Footer from "@components/footer/base.svelte";
  import Navigation from "@components/navigation/base.svelte";
  import PageContainer from "@components/layout/page-container.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    document.body.style.backgroundColor = "#EEEEEE";
  });
</script>

<svelte:head>
  <meta charset="utf-8" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
    rel="stylesheet"
  />
  <script>
    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 5161229, hjsv: 6 };
      a = o.getElementsByTagName("head")[0];
      r = o.createElement("script");
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
  </script>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- <meta name="color-scheme" content="light dark" /> -->
  <script async defer src="https://accounts.google.com/gsi/client"></script>
</svelte:head>

<Layout>
  <Background />
  <Canvas>
    <Header />
    <PageContainer>
      <slot />
    </PageContainer>
    <!-- <Footer /> -->
    <Navigation />
  </Canvas>
</Layout>
