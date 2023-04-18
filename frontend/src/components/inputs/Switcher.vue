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

function selectOption(option){
    if(selectedOption.value) selectedOption.value.selected = false

    selectedOption.value = option
    option.selected = true
    
    option.onSelected()
}
</script>

<template>
    <div class="switcher">
        <button v-for="option of optionsRef" :class="{
            selected: option.selected
        }" @click="selectOption(option)">{{ option.label }}</button>
    </div>
</template>

<style>
    .switcher {
        width: fit-content;
        display: flex;
        background-color: var(--col-very-light-gray);
        margin: 0 auto 2rem auto;

        box-shadow: var(--shadow-inset-sm);

        border-radius: calc(var(--round) * 100);
    }

    .switcher button {
        font-size: 1.2rem;
        margin: .5rem;
        border: 0;
        box-shadow: none;
        color: var(--col-black);
        padding: .3rem 1.3rem;
    }

    .switcher button.selected {
        background-color: var(--col-primary);
        color: var(--col-white);

        box-shadow: var(--shadow-primary-sm);
    }

    .switcher button:hover {
        color: var(--col-white);
        box-shadow: var(--shadow-primary-md);
    }

    .switcher button:active {
        background-color: var(--col-primary-dark);
    }
</style>