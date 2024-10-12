<script lang="ts">
  export let label: string = "Text";
  export let onClick: () => void = () => {};
  export let className: string = "";
</script>

<button
  class="{className} text-primary font-semibold text-center"
  on:click={onClick}
>
  <span>{label}</span>
</button>
