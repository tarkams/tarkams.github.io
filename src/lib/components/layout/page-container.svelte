<script>
  import { page } from "$app/stores";
</script>

<main class="relative {$page.url.pathname !== '/' ? 'mt-16' : ''}">
  <slot />
</main>
