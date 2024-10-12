<script lang="ts">
  import { Icon } from "svelte-icons-pack";

  export let icon: any;
  export let onClick: () => void = () => {};
  export let className: string = "";
  export let size: number = 16;
</script>

<button
  class="{className} bg-primary text-white p-2 rounded-full"
  on:click={onClick}
>
  <Icon src={icon} {size} />
</button>
