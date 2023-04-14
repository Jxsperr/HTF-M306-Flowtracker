<template>
    <div class="post">
        <header v-if="post.image" :style="{ backgroundImage: `url(/explore_images/${post.image})` }"></header>

        <div class="body">
            <p class="title">{{ post.title }}</p>

            <p class="date">{{ post.dateCreated }}</p>
            <p class="content">{{ post.content }}</p>

            <div class="bottom">
                <LikeButton :id="id" :likeCount="post.likeCount"></LikeButton>
                <button class="tertiary">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="6" r="3"></circle><circle cx="18" cy="18" r="3"></circle><path d="M8.7 10.7l6.6-3.4"></path><path d="M8.7 13.3l6.6 3.4"></path></g></svg>
                </button>
            </div>
        </div>
    </div>
</template>
  
<script setup>
    import LikeButton from './LikeButton.vue'

    const props = defineProps({
        post: {
            type: Object,
            required: true
        }
    })
</script>

<style scoped>
    .post {
        box-sizing: border-box;

        background-color: var(--col-very-light-gray);

        border-radius: var(--round);
        margin: 1rem auto;

        width: 100%;

        box-shadow: var(--shadow-sm);

        transition: box-shadow var(--transition-time);
    }

    .post .body {
        padding: 2rem 4rem 4rem 4rem;
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

    .post header {
        width: 100%;
        height: 300px;

        background-color: var(--col-almost-very-light-gray);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        border-top-left-radius: var(--round);
        border-top-right-radius: var(--round);
    }

    @media screen and (max-width: 600px) {
        .post .body {
            padding: 1rem 2rem 2rem 2rem;
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