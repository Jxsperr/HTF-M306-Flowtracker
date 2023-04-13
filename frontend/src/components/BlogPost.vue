<template>
    <div class="post">
        <p class="title">{{ title }}</p>

        <p class="date">{{ dateCreated }}</p>
        <p class="content">{{ content }}</p>

        <div class="bottom">
            <LikeButton :id="id" :likeCount="likeCount"></LikeButton>
            <button class="tertiary">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="6" r="3"></circle><circle cx="18" cy="18" r="3"></circle><path d="M8.7 10.7l6.6-3.4"></path><path d="M8.7 13.3l6.6 3.4"></path></g></svg>
            </button>
        </div>
    </div>
</template>
  
<script setup>
    import { ref } from 'vue'
    import { formatDate } from '../services/formatDate';
    import LikeButton from './LikeButton.vue'

    const props = defineProps({
        post: {
            type: Object,
            required: true
        }
    })

    const id = ref(props.post.id)
    const dateCreated = ref(formatDate(props.post.dateCreated))
    const title = ref(props.post.title)
    const content = ref(props.post.content)
    const likeCount = ref(props.post.likeCount)
</script>

<style scoped>
    .post {
        position: relative;

        box-sizing: border-box;

        background-color: var(--col-very-light-gray);

        border-radius: var(--round);
        margin: 3rem auto;

        width: 100%;

        padding: 4rem;
        box-shadow: var(--shadow-sm);

        transition: box-shadow var(--transition-time);
    }

    .post:is(:hover, :active) {
        box-shadow: var(--shadow-md);
    }

    .post:hover .buttons {
        opacity: 1;
    }

    .bottom {
        border-top: 2px solid var(--col-very-light-gray);
        margin-top: 5rem;
        padding-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .buttons {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;

        opacity: 0;

        transition: opacity var(--transition-time);
    }

    .post:has(:hover, :active) header {
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

    .content {
        white-space: pre-wrap;
    }

    .title {
        margin-bottom: .5rem;
        margin-right: 1rem;
        font-size: 2rem;
        font-weight: bold;
    }

    @media screen and (max-width: 600px) {
        .post {
            padding: 2rem;
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