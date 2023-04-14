<template>
    <div class="blogpostpreview" :style="{ backgroundImage: post.image ? `linear-gradient(#0006, #0006), url(${lazyImage})` : 'linear-gradient(#f60e67, #648767)' }">
        <p class="title">{{ post.title }}</p>
        <p class="date">{{ formatDate(post.dateCreated).split(',').splice(0, 2).join(',') }}</p>

        <button @click="toggleContent">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4H6L3 14v2.5"></path><path d="M16 4h2l3 10v2.5"></path><path d="M10 16h4"></path><circle cx="17.5" cy="16.5" r="3.5"></circle><circle cx="6.5" cy="16.5" r="3.5"></circle></g></svg>
            <p>Read</p>
        </button>
    </div>
</template>
  
<script setup>
    import { computed } from 'vue';
    import { formatDate } from '../services/formatDate'

    const props = defineProps({
        post: {
            type: Object,
            required: true
        }
    })

    const lazyImage = computed(() => (props.post.image ? `/explore_images/${props.post.image}` : ''))
</script>

<style scoped>
    .blogpostpreview {
        cursor: pointer;
        user-select: none;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        align-items: start;

        width: calc(33% - 2rem);
        
        border-radius: var(--round);
        
        margin: 1rem;
        padding: 2rem 3rem;

        box-shadow: var(--shadow-sm);

        background-color: var(--col-almost-very-light-gray);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        color: var(--col-white);

        transition: box-shadow var(--transition-time);
    }

    .blogpostpreview:hover {
        box-shadow: var(--shadow-md);
    }

    .blogpostpreview:active {
        box-shadow: var(--shadow-lg);
    }

    .date {
        margin: 0;
        font-size: 1.2rem;
        font-weight: bold;

        opacity: .7;
    }

    .title {
        margin: 0;
        margin-bottom: .5rem;
        font-size: 2rem;
        font-weight: bold;
    }

    button {
        margin: 4rem 0 0 0;
        align-self: flex-end;

        color: var(--col-white);
        border-color: currentColor;

        transition:
            box-shadow var(--transition-time),
            background-color var(--transition-time),
            color var(--transition-time),
            border-color var(--transition-time),
            opacity var(--transition-time);
    }

    .blogpostpreview:hover button {
        background-color: var(--col-primary);
        color: var(--col-white);
        box-shadow: var(--shadow-primary-md);
        border-color: var(--col-primary);
    }

    .blogpostpreview:active button {
        background-color: var(--col-primary-dark);
        border-color: var(--col-primary-dark);
        box-shadow: var(--shadow-primary-lg);
    }

    @media screen and (max-width: 1200px) {
        .blogpostpreview {
            width: calc(50% - 2rem)
        }
    }

    @media screen and (max-width: 800px) {
        .blogpostpreview {
            width: 100%;
            margin-left: 0;
            margin-right: 0;
        }
    }
</style>