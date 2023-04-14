<template>
    <div :class="{
        'input-container': true,
        'big': size==='big'
        }">
      <input
        ref="inputRef"
        :id="id"
        v-model="inputValue"
        @focus="handleFocus"
        @blur="handleBlur"
        class="input-field"
      />
      <label :for="id" :class="{ 'floating-label': isFloating }">{{ label }}</label>
    </div>
  </template>
  
<script setup>
  import { ref, watch, onMounted } from "vue";
  
  const props = defineProps({
      id: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      modelValue: {
        type: String,
        default: "",
      },
      size: {
        type: String,
        default: "small"
      }
    })

    const emit = defineEmits(['update:modelValue'])

    const inputRef = ref(null)
    const inputValue = ref(props.modelValue)
    const isFloating = ref(false)

    function updateFloating() {
    isFloating.value = inputValue.value !== ""
    }

    watch(inputValue, newValue => {
    emit("update:modelValue", newValue)
    updateFloating()
    })

    onMounted(updateFloating)

    const handleFocus = () => isFloating.value = true

    const handleBlur = () => updateFloating()
</script>
  
  <style scoped>
  .input-container {
    position: relative;

    margin-top: 3rem;
  }
  
  .input-field {
    box-sizing: border-box;

    width: 100%;
    padding: 1rem;
    border: 0;
    border-radius: var(--round);
    outline: none;
    font-size: .8rem;

    background-color: var(--col-almost-very-light-gray);
  }

  .big .input-field {
    font-size: 1.5rem;
  }
  
  .floating-label {
    left: .5rem;
    top: -1rem;
    font-size: 1rem;
    color: var(--col-darker-gray);
  }

  .big .floating-label {
    font-size: 1rem;
  }
  
  label {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5rem;
    color: var(--col-dark-gray);
    pointer-events: none;
    transition: left var(--transition-time), top var(--transition-time), font-size var(--transition-time), color var(--transition-time);
  }

  .big label {
    font-size: 2rem;
  }
  </style>
  