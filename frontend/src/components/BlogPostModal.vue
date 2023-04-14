<template>
    <div class="container">
        <div class="background" @click="closeModal"></div>

        <div class="post">
            <header :style="{ backgroundImage: post.image ? `linear-gradient(#0006, #0000), url(/explore_images/${post.image})` : 'linear-gradient(#f60e67, #648767)' }">
                <button class="tertiary closebutton" @click="closeModal">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></g></svg>
                </button>
            </header>

            <div class="body">
                <p class="title">{{ post.title }}</p>
                <p class="date">{{ formatDate(post.dateCreated).split(',').splice(0, 2).join(',') }}</p>

                <p class="content">{{ post.content }}</p>

                <div class="bottom">
                    <LikeButton :id="id" :likeCount="post.likeCount"></LikeButton>
                    <button class="tertiary">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="6" r="3"></circle><circle cx="18" cy="18" r="3"></circle><path d="M8.7 10.7l6.6-3.4"></path><path d="M8.7 13.3l6.6 3.4"></path></g></svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
    import { defineEmits } from 'vue'
    import { formatDate } from '../services/formatDate'
    import LikeButton from './LikeButton.vue'

    const props = defineProps({
        post: {
            type: Object,
            required: true
        }
    })

    const emits = defineEmits(['close'])

    function closeModal(){
        emits('close')
    }
</script>

<style scoped>
    .container {
        position: fixed;
        top: 0;
        left: 0;
        box-sizing: border-box;
        
        width: 100vw;
        height: 100%;

        overflow-y: scroll;
    }
    .background {
        position: fixed;
        box-sizing: border-box;

        cursor: pointer;

        top: 0;
        left: 0;

        width: 100vw;
        height: 100%;

        z-index: -1;

        background-color: var(--col-light-gray);
    }
    .post {
        position: relative;
        
        z-index: 2;
        display: block;
        box-sizing: border-box;

        margin: 1rem auto;

        width: calc(100vw - 4rem);
        max-width: 800px;

        border-radius: var(--round);

        box-shadow: var(--shadow-lg);

        background-color: var(--col-white);

        border-radius: var(--round);
        overflow: hidden;

        transition: box-shadow var(--transition-time);
    }

    .post .body {
        padding: 2rem 4rem 4rem 4rem;
    }

    .bottom {
        border-top: 2px solid var(--col-very-light-gray);
        margin-top: 5rem;
        padding-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .date {
        margin: 0 1.5rem 0 0;

        font-size: 1.2rem;

        font-weight: bold;

        opacity: .7;
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
        min-height: 300px;

        background-color: var(--col-almost-very-light-gray);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        padding: 2rem 3rem;
        box-sizing: border-box;

        color: var(--col-white);

        border-top-left-radius: var(--round);
        border-top-right-radius: var(--round);
    }

    header .title {
        margin-top: 0;
    }

    .closebutton {
        position: absolute;
        right: 1rem;
        top: 1rem;
        margin: 0;

        color: var(--col-white);
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

.content {
    transition: opacity 1s, scale 1s;
}

.contentToggle {
    margin: 4rem auto 0 auto;
}
</style>