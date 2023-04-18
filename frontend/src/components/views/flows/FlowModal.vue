<script setup>
    import Emoji from '../../general/Emoji.vue'

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
    <div class="container">
        <div class="background" @click="closeModal"></div>

        <div class="flow">
            <div class="body">
                <header>
                    <button class="tertiary" @click="closeModal">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></g></svg>
                    </button>
                </header>

                <div class="emojis" v-if="flow.emotions">
                    <Emoji v-for="(emotionId, index) in flow.emotions" :emotionId="emotionId" :key="emotionId + '-' + index" />
                </div>

                <p class="title">{{ flow.title }}</p>
                <p class="description" v-if="flow.description">{{ flow.description }}</p>

                <p class="date">{{ formatDate(flow.dateCreated) }}</p>
            </div>
            
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

        </div>

    </div>
</template>

<style scoped>
    .container {
        position: fixed;
        top: 0;
        left: 0;
        box-sizing: border-box;
        
        width: 100vw;
        height: 100%;

        overflow-y: scroll;

        z-index: 200;
    }

    .background {
        position: fixed;

        cursor: pointer;

        top: 0;
        left: 0;

        width: 100vw;
        height: 100%;

        z-index: -1;

        background-color: var(--col-light-gray);
    }

    .flow {
        position: relative;

        z-index: 2;
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        box-sizing: border-box;

        background-color: var(--col-very-light-gray);

        border-radius: var(--round);
        margin: 2rem auto;

        width: calc(100% - 4rem);

        max-width: 800px;

        background-color: var(--col-white);

        padding: 4rem;
        box-shadow: var(--shadow-md);

        transition: box-shadow var(--transition-time);
    }

    .bottom {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        margin-top: 2rem;
    }

    header {
        display: flex;
        justify-content: end;
        margin-bottom: 1rem;
        margin-top: -4rem;
        margin-right: -3rem;
    }

    .buttons {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;

        transition: opacity var(--transition-time);
    }

    .flow:has(:hover, :active) header {
        opacity: 1;
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
        .flow {
            padding: 2rem;
        }

        header {
            margin-bottom: 1rem;
            margin-top: -2rem;
            margin-right: -1rem;
        }

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

    
    @media screen and (max-width: 450px) {
        .flow {
            width: 100%;
            min-height: 100%;
            margin: 0;

            border-radius: 0;
        }
    }

    @media screen and (max-width: 350px) {
        .title {
            font-size: 1.5rem;
        }

        .flow {
            padding: 1rem;
        }

        header {
            margin-bottom: 1rem;
            margin-top: -1rem;
            margin-right: 0;
        }
    }
</style>