<script setup>
import { ref, watch, onUpdated, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  bold: {
    type: Boolean,
    required: false,
    default: true
  }
})

const optionsRef = ref(props.options)
const selectedOption = ref(null)
const selectRef = ref(null)
const measureRef = ref(null)

const emits = defineEmits(['update-option'])

onUpdated(() => {
  nextTick(()=>{
    selectedOption.value = optionsRef.value.find(option => option.selected === true) || optionsRef.value[0]
    resizeSelect()
  })
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

onMounted(async () => {
  selectedOption.value = optionsRef.value.find(option => option.selected === true) || optionsRef.value[0]
  resizeSelect()
  window.addEventListener('resize', resizeSelect)
  await nextTick()
  resizeSelect()
})


onBeforeUnmount(()=>{
  window.removeEventListener('resize', resizeSelect)
})
</script>

<template>
  <div :class="{
    'select-container': true,
    bold: props.bold
  }">
    <select ref="selectRef" @change="selectOption($event.target.value)" :value="selectedOption?.value || ''">
      <option v-for="option in optionsRef" :value="option.value || option.label">
        {{ option.label }}
      </option>
    </select>
    <span ref="measureRef" class="hidden"></span>
  </div>
</template>


<style>
.bold select, .bold .hidden {
  font-weight: 900;
  font-size: 2.25rem;
  padding: 0em 2.5rem 0 .5rem;
}

.select-container {
  position: relative;
  display: inline-block;
}

select {
    appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path fill='%23f60e67' d='M7 10l5 5 5-5z'/></svg>");
    background-repeat: no-repeat;
    background-position: right;
    background-size: 1em;

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
}

@media screen and (max-width: 350px) {
  select, .hidden, option {
    font-size: 1.5rem;
  }
  
  select, .hidden {
    padding: 0em 1.5rem 0 .5rem;
  }
}
</style>