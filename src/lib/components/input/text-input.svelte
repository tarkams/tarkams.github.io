<script lang="ts">
  import InputErrorMessage from "@components/input/input-error-message.svelte";
  import InputLabel from "@components/input/input-label.svelte";

  export let label: string = "";
  export let value: string;
  export let error: string = "";
  export let onInput: (value: string) => void;
  export let className: string = "";

  function handleInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    onInput(inputValue);
  }
</script>

<div class="{className} w-full space-y-2">
  <InputLabel {label} />
  <input
    type="text"
    {value}
    on:input={handleInput}
    class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
    class:border-red-500={error !== null}
  />
  <InputErrorMessage errorMessage={error} />
</div>
