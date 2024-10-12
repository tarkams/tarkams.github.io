<script lang="ts">
  import InputErrorMessage from "@components/input/input-error-message.svelte";
  import InputLabel from "@components/input/input-label.svelte";

  export let label: string = "";
  export let value: number | undefined = undefined;
  export let error: string = "";
  export let onInput: (value: number | undefined) => void;
  export let className: string = "";
  export let min: number | undefined = undefined;
  export let max: number | undefined = undefined;
  export let step: number | undefined = undefined;

  function handleInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    const numericValue = inputValue === "" ? undefined : parseFloat(inputValue);
    onInput(numericValue);
  }
</script>

<div class="{className} w-full space-y-2">
  <InputLabel {label} />
  <input
    type="number"
    value={value ?? ""}
    on:input={handleInput}
    {min}
    {max}
    {step}
    class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
    class:border-red-500={error !== ""}
  />
  <InputErrorMessage errorMessage={error} />
</div>
