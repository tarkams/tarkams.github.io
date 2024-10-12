<script lang="ts">
  import InputLabel from "@components/input/input-label.svelte";

  export let label = "Select an option";
  export let options: Array<{
    value: string | number;
    label: string;
    disabled?: boolean;
  }> = [];
  export let value: string | number | null = null;
</script>

<div class="w-full mt-8 space-y-2">
  <InputLabel {label} />
  <select
    bind:value
    class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
  >
    <option value={null}>Please select</option>
    {#each options as option}
      <option value={option.value} disabled={option.disabled}
        >{option.label}</option
      >
    {/each}
  </select>
</div>
