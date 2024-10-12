<script lang="ts">
  export let label: string = "Text";
  export let onClick: () => void = () => {};
  export let className: string = "";
</script>

<button
  class="{className} rounded px-8 py-2 bg-primary text-white"
  on:click={onClick}
>
  <span>{label}</span>
</button>
