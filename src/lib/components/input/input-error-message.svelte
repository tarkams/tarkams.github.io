<script lang="ts">
  export let errorMessage: string;
</script>

{#if errorMessage}
  <div class="text-red-500 text-sm">{errorMessage}</div>
{/if}
