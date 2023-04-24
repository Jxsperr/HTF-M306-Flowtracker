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
    <Modal modal-title="Remove Flow" title="Remove Flow?" @close="cancelRemoveFlow">
        <template #content>
        <p>It will be gone <b>forever.</b></p>
        <div class="deleteModalButtons">
            <button class="filled" @click="cancelRemoveFlow">
                <p>Cancel</p>
            </button>
            
            <button @click="removeFlow">
                <p>Remove</p>
            </button>
        </div>
        </template>
    </Modal>
</template>

<style scoped>
  .deleteModalButtons {
    display: flex;
    flex-wrap: wrap;
  }

  .deleteModalButtons button:first-of-type {
    margin-right: 1rem;
  }

  .deleteModalButtons button {
    margin-bottom: 0;
  }

  @media screen and (max-width: 350px) {
    .deleteModalButtons {
        flex-direction: column;
        align-items: stretch;
    }

    .deleteModalButtons button:first-of-type {
        margin-top: 4rem;
        margin-right: 0;
    }
  }
</style>