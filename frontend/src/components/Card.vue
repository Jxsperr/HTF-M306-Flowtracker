<template>
    <div class="entry">
        <div class="emojis">
            <Emoji v-for="emotion of entryEmotions" :emotionId="emotion"></Emoji>
        </div>

        <p class="title">{{ trimStringToWords(entryTitle) }}</p>
        <p class="description" v-if="entryDescription">{{ trimStringToWords(entryDescription) }}</p>

        <div class="bottom">
            <p class="date">{{ dateCreated }}</p>
            <div class="buttons">
                <button class="tertiary" @click="edit">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3"></path><path d="M9 15h3l8.5-8.5a1.5 1.5 0 0 0-3-3L9 12v3"></path><path d="M16 5l3 3"></path></g></svg>
                </button>
                <button class="tertiary" @click="delete">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12"></path><path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path></g></svg>
                </button>
            </div>
        </div>
    </div>
  </template>
  
<script setup>
    import { ref } from 'vue'
    import Emoji from './Emoji.vue'

    const props = defineProps({
        entry: {
            type: Object,
            required: true
        }
    })

    const dateCreated = ref(props.entry.dateCreated)
    const entryEmotions = ref(props.entry.emotions)
    const entryTitle = ref(props.entry.title)
    const entryDescription = ref(props.entry.description)

    function edit() {
    // Implement edit functionality
    }

    function remove() {
    // Implement delete functionality
    }

    function trimStringToWords(str) {
    if (str.length > 200) {
        str = str.substring(0, 200);
        str = str.substring(0, Math.min(str.length, str.lastIndexOf(" ")));
        str += '...';
    }
    return str;
    }
</script>

<style scoped>
    .entry {
        position: relative;

        background-color: var(--col-very-light-gray);

        border-radius: var(--round);
        margin: 1rem auto;

        width: 100%;

        padding: 4rem 4rem 2.5rem 4rem;
        box-shadow: var(--shadow-sm);

        transition: box-shadow var(--transition-time);
    }

    .entry:is(:hover, :active) {
        box-shadow: var(--shadow-md);
    }

    .entry:hover .buttons {
        opacity: 1;
    }

    .bottom {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        margin-top: 2rem;
    }

    .buttons {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;

        opacity: 0;

        transition: opacity var(--transition-time);
    }

    .entry:has(:hover, :active) header {
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
        .entry {
            padding: 2rem 2rem 2rem 2rem;
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
</style>