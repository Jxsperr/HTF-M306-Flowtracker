<script setup>
import Modal from '../../general/Modal.vue'

const emits = defineEmits(['close', 'remove'])

function cancelRemoveFlow(){
    emits('close')
}

function removeFlow(){
    emits('remove')
}
</script>

<template>
    <Modal modal-title="Delete Flow" title="Delete Flow?" @close="cancelRemoveFlow">
        <template #content>
        <p>It will be gone <b>forever.</b></p>
        <div class="deleteModalButtons">
            <button class="filled" @click="cancelRemoveFlow">
            <p>Cancel</p>
            </button>
            
            <button @click="removeFlow">
            <p>Delete</p>
            </button>
        </div>
        </template>
    </Modal>
</template>

<style scoped>
  .deleteModalButtons {
  display: flex;
  }

  .deleteModalButtons button:first-of-type {
    margin-right: 1rem;
  }
</style>