<script setup>
import { ref } from 'vue'

const props = defineProps({
    options: {
        type: Array,
        required: true
    }
})

const optionsRef = ref(props.options)
const selectedOption = ref(null)

if(optionsRef.value.some(_option => _option.selected))
    selectedOption.value = optionsRef.value.find(_option => _option.selected)

function selectOption(event) {
  const selectedLabel = event.target.value
  const selectedOption = optionsRef.value.find((option) => option.label === selectedLabel)

  if (selectedOption) {
    if (selectedOption.value) selectedOption.value.selected = false

    selectedOption.value = selectedOption
    selectedOption.selected = true

    selectedOption.onSelected()
  }
}
</script>

<template>
    <select @change="selectOption($event)">
        <option v-for="option in optionsRef" :value="option.label">
            {{ option.label }}
        </option>
    </select>
</template>

<style>
select {
    appearance: none; /* Remove the default arrow */
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path fill='%23f60e67' d='M7 10l5 5 5-5z'/></svg>");
    background-repeat: no-repeat;
    background-position: right; /* Adjust the arrow's position */
    background-size: 1em; /* Adjust the arrow's size */

    height: 1.5em;
    padding: 0em 2.5rem 0 .5rem;
    line-height: 1.5em;

    display: block;
    width: fit-content;
    background-color: var(--col-very-light-gray);

    font-size: 2.25rem;

    background-color: transparent;
    border: 0;

    color: var(--col-primary);

    font-weight: 400;

    outline: none;

    cursor: pointer;
}

option {
    font-size: 2.25rem;
    font-weight: 400;
    color: var(--col-black);
    background-color: var(--col-very-light-gray);
    padding: 0.25em 0.5em;
    margin: 0.25em 0;
    border: none;
}

option:hover {
    background-color: var(--col-secondary);
}

</style>