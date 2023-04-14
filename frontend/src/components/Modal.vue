<script setup>
const props = defineProps({
    modalTitle: String,
    title: String,
    show: Boolean
})

const emit = defineEmits(['close'])

function closeModal(){
    emit('close')
}
</script>

<template>
    <div v-if="props.show" class="container">
        <div class="background" @click="closeModal"></div>

        <div class="modal">
            <header class="titlebar">
                <p>{{ props.modalTitle }}</p>
                <button class="tertiary closebutton" @click="closeModal">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></g></svg>
                </button>
            </header>

            <div class="content">
                <h2 class="title" v-if="props.title">{{ props.title }}</h2>
                <slot class="title" name="title"></slot>
                
                <slot class="content" name="content"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100%;

    overflow-y: scroll;
}
.background {
    position: fixed;

    cursor: pointer;

    top: 0;
    left: 0;

    width: 100vw;
    height: 100%;

    background-color: var(--col-light-gray);
}
.modal {
    position: relative;
    
    display: block;
    box-sizing: border-box;

    margin: 1rem auto;

    width: 100%;
    max-width: 800px;

    border-radius: var(--round);

    box-shadow: var(--shadow-lg);

    background-color: var(--col-white);
}

.titlebar {
    display: flex;
    padding: 1rem 1rem 1rem 4rem;
    width: 100%;

    box-sizing: border-box;

    justify-content: space-between;
    align-items: center;

    border-top-left-radius: var(--round);
    border-top-right-radius: var(--round);
}

.closebutton {
    margin: 0 0 0 1rem;
}

.titlebar p {
    width: 100%;
    margin: 0;

    color: var(--col-dark-gray);
}

.title {
    margin-top: 5rem;
}

.content {
    padding: 2rem 4rem 4rem 4rem;
}

@media screen and (max-width: 600px) {
    .modal {
        width: calc(100vw - 2rem);
    }

    .content {
        padding: 1rem;
    }

    .titlebar {
        padding: 1rem 1rem 1rem 2rem;
    }
}
</style>