<script setup>
    import Emoji from '../../general/Emoji.vue'
    import Modal from '../../general/Modal.vue';
    import { formatDate } from '../../../services/formatDate'

    const props = defineProps({
        flow: Object
    })

    const emits = defineEmits(['remove', 'edit', 'close'])

    function edit() {
        emits('edit', props.flow.id)
    }

    function remove() {
        emits('remove', props.flow.id)
    }

    function closeModal() {
        emits('close')
    }
</script>

<template>
    <Modal @close="closeModal">
        <template #content>
            <div class="emojis" v-if="flow.emotions">
                <Emoji v-for="(emotionId, index) in flow.emotions" :emotionId="emotionId" :key="emotionId + '-' + index" />
            </div>

            <p class="title">{{ flow.title }}</p>
            <p class="description" v-if="flow.description">{{ flow.description }}</p>

            <p class="date">{{ formatDate(flow.dateCreated) }}</p>

            <div class="bottom">
                <div class="buttons">
                    <button class="tertiary" @click="edit">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3"></path><path d="M9 15h3l8.5-8.5a1.5 1.5 0 0 0-3-3L9 12v3"></path><path d="M16 5l3 3"></path></g></svg>
                    </button>
                    <button class="tertiary" @click="remove">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12"></path><path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path></g></svg>
                    </button>
                </div>
            </div>
        </template>
    </Modal>
</template>

<style scoped>
    .bottom {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: end;
        width: 100%;

        flex-grow: 1;

        justify-self: flex-end;

        margin-top: 2rem;
    }

    .buttons {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;

        transition: opacity var(--transition-time);
    }

    .buttons button {
        margin: 0 .3rem;
    }

    .buttons button:last-of-type {
        margin-right: 0;
    }

    .date {
        margin: 0 1.5rem 0 0;

        font-size: 1.2rem;

        font-weight: bold;

        opacity: .5;
    }

    .description {
        white-space: pre-wrap;
    }

    .title {
        font-size: 2rem;
        font-weight: bold;
    }

    .emojis {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 600px) {
        .emojis {
            margin-bottom: 1rem;
        }
    }

    
    @media screen and (max-width: 500px) {
        .bottom {
            flex-direction: column;
        }

        .date {
            align-self: start;
        }

        .buttons {
            align-self: flex-end;
            margin-top: 1rem;
        }
    }

    @media screen and (max-width: 350px) {
        .title {
            font-size: 1.5rem;
        }
    }
</style>