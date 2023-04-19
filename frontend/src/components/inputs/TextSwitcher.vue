<script setup>
import { ref, watch, watchEffect, onMounted } from 'vue'

const props = defineProps({
  options: {
    type: Array,
    required: true
  }
})

const optionsRef = ref(props.options)
const selectedOption = ref(null)
const selectRef = ref(null)
const measureRef = ref(null)

const emits = defineEmits(['update-option'])

watchEffect(() => {
  selectedOption.value = optionsRef.value.find(option => option.selected === true) || optionsRef.value[0]
  resizeSelect()
})

watch(
  () => props.options,
  newOptions => {
    optionsRef.value = newOptions
  },
  { immediate: true }
)

function selectOption(newOptionValue) {
  const newSelectedOption = optionsRef.value.find(option => option.label === newOptionValue)

  if (newSelectedOption) {
    if (selectedOption.value) selectedOption.value.selected = false

    selectedOption.value = newSelectedOption
    newSelectedOption.selected = true

    if (selectedOption.value.onSelected) selectedOption.value.onSelected()
  }

  emits('update-option', newOptionValue)
  resizeSelect()
}

function resizeSelect() {
  if (!selectRef.value || !measureRef.value) return

  const selectedText = selectedOption.value.label
  measureRef.value.textContent = selectedText
  selectRef.value.style.width = `${measureRef.value.offsetWidth}px`
}

onMounted(() => {
  resizeSelect()
})
</script>

<template>
  <div class="select-container">
    <select ref="selectRef" @change="selectOption($event.target.value)" :value="selectedOption ? selectedOption.value : ''">
      <option v-for="option in optionsRef" :value="option.value || option.label">
        {{ option.label }}
      </option>
    </select>
    <span ref="measureRef" class="hidden"></span>
  </div>
</template>


<style>
.select-container {
  position: relative;
  display: inline-block;
}

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

.hidden {
  visibility: hidden;
  position: absolute;
  white-space: nowrap;
  font-size: 2.25rem;
  font-weight: 400;
  padding: 0em 2.5rem 0 .5rem;
}
</style>