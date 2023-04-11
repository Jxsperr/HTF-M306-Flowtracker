<template>
    <div class="entry">
        <p class="date">{{ dateCreated }}</p>

        <p class="description" v-if="entryDescription">{{ trimStringToWords(entryDescription) }}</p>

        <div class="emojis">
            <p class="emoji" v-for="emotion of entryEmotions">
                {{ emotions.find(e => e.id === emotion).emoji }}
            </p>
        </div>

        <header>
            <div class="buttons">
                <button class="md" @click="edit">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3"></path><path d="M9 15h3l8.5-8.5a1.5 1.5 0 0 0-3-3L9 12v3"></path><path d="M16 5l3 3"></path></g></svg>
                </button>
                <button class="md" @click="delete">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12"></path><path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path></g></svg>
                </button>
            </div>
        </header>
    </div>
  </template>
  
<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        entry: {
            type: Object,
            required: true
        }
    })

    const emotions = [
        { id: 0, title: 'Joy', emoji: '😊' },
        { id: 1, title: 'Sadness', emoji: '😔' },
        { id: 2, title: 'Anger', emoji: '🤬' },
        { id: 3, title: 'Fear', emoji: '😨' },
        { id: 4, title: 'Love', emoji: '❤️' },
        { id: 5, title: 'Surprise', emoji: '😮' },
        { id: 6, title: 'Disgust', emoji: '🤢' },
        { id: 7, title: 'Trust', emoji: '👍' },
        { id: 8, title: 'Anticipation', emoji: '🤔' }
    ]

    const dateCreated = ref(props.entry.dateCreated)
    const entryEmotions = ref(props.entry.emotions)
    const entryDescription = ref(props.entry.description)

    function edit() {
    // Implement edit functionality
    }

    function remove() {
    // Implement delete functionality
    }

    function trimStringToWords(str) {
    if (str.length > 100) {
        str = str.substring(0, 100);
        str = str.substring(0, Math.min(str.length, str.lastIndexOf(" ")));
        str += '...';
    }
    return str;
    }
</script>

<style>
    .entry {
        position: relative;

        overflow: hidden;

        border: 1px solid #fff3;
        border-radius: 8px;
        margin: 1rem;

        width: clamp(150px, 50%, 300px);
        height: 100%;

        padding: 1.7rem 2rem;
    }

    header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        padding: 1rem;
        box-sizing: border-box;

        opacity: 0;
        backdrop-filter: blur(0) brightness(1);

        transition: backdrop-filter .3s, opacity .3s;

        display: block;
    }

    header .buttons {
        display: flex;
        flex-wrap: nowrap;
        justify-content: end;
        align-items: end;
        width: 100%;
        height: 100%;
    }

    .entry:has(:hover, :active) header {
        opacity: 1;
        backdrop-filter: blur(2px) brightness(.7);
    }

    header .buttons button {
        margin: 0 .3rem;
    }

    header .buttons button:last-of-type {
        margin-right: 0;
    }

    .date {
        margin-top: 0;
    }

    .emojis {
        display: flex;
    }

    .emoji {
        margin: 0;
    }

    .description {
        font-weight: 200;
        font-style: italic;
    }
</style>