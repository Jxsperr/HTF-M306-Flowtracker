<script setup>
    import Emoji from '../../general/Emoji.vue'

    import { formatDate } from '../../../services/formatDate'

    const props = defineProps({
        flow: Object
    })

    const emits = defineEmits(['remove', 'edit'])

    const maxTitleLength = 50;
    function trimStringToWords(str) {
        if (str.length > maxTitleLength) {
            str = str.substring(0, maxTitleLength);
            str = str.substring(0, Math.min(str.length, str.lastIndexOf(" ")));
            str += '...';
        }
        return str;
    }
</script>

<template>
    <div class="flowpreview">
        <div class="emojis" v-if="flow.emotions">
            <Emoji v-for="(emotionId, index) in flow.emotions" size="small" :emotionId="emotionId" :key="emotionId + '-' + index" />
        </div>

        <p class="title">{{ trimStringToWords(flow.title) }}</p>

        <div class="bottom">
            <p class="date">{{ formatDate(flow.dateCreated) }}</p>
        </div>
    </div>
  </template>

<style scoped>
    .flowpreview {
        position: relative;
        cursor: pointer;
        user-select: none;

        box-sizing: border-box;

        background-color: var(--col-very-light-gray);

        border-radius: var(--round);

        width: 100%;

        padding: 2rem;
        box-shadow: var(--shadow-sm);

        transition: box-shadow var(--transition-time);
    }

    .flowpreview:is(:hover, :active) {
        box-shadow: var(--shadow-md);
    }

    .flowpreview:hover .buttons {
        opacity: 1;
    }

    .bottom {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        margin-top: .5rem;
    }

    .buttons {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;

        opacity: 0;

        transition: opacity var(--transition-time);
    }

    .flowpreview:has(:hover, :active) header {
        opacity: 1;
    }

    .buttons button {
        margin: 0 .3rem;
    }

    .buttons button:last-of-type {
        margin-right: 0;
    }

    .date {
        margin: 0;

        font-size: 1.2rem;

        font-weight: bold;

        opacity: .5;
    }

    .title {
        font-size: 1.5rem;
        font-weight: bold;
        margin: .5rem 0 0 0;
    }

    .emojis {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 600px) {
        .flowpreview {
            padding: 2rem;
        }
    }

    @media screen and (max-width: 350px) {
        .title {
            font-size: 1.5rem;
        }

        .flowpreview {
            padding: 1rem;
        }
    }

    @media screen and (max-width: 500px) {
        .date {
            align-self: start;
        }
    }
</style>