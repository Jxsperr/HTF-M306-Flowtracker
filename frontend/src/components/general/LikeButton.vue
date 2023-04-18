<template>
        <button @click="() => like()" :class="`${ isLiked ? 'liked' : '' }`">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M19.5 13.572L12 21l-7.5-7.428m0 0A5 5 0 1 1 12 7.006a5 5 0 1 1 7.5 6.572" fill="currentColor" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <p class="likeCount">{{ likeCount }}</p>
        </button>
</template>

<script setup>
    import { ref } from 'vue'
    
    const props = defineProps({
        id: Number,
        likeCount: Number,
        isLiked: Boolean
    })

    const id = ref(props.id)
    const likeCount = ref(props.likeCount)
    const isLiked = ref(props.isLiked)

    function like() {
        if(isLiked.value === false){
            isLiked.value = true
            likeCount.value++
        } else {
            isLiked.value = false
            likeCount.value--
        }
    }
</script>

<style scoped>
    .likeCount {
        font-weight: 900;
        font-size: 1.3rem;

        user-select: none;
    }

    .liked {
        background-color: var(--col-primary);
        color: var(--col-white);
        box-shadow: var(--shadow-primary-md);
    }

    button:active {
        background-color: var(--col-primary-dark);
    }
</style>