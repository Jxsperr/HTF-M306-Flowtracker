<template>
    <nav class="mobilemenu">
        <router-link to="/explore">
            <button :class="`tertiary ${activePage=='explore' ? 'active' : ''}`">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 16l2-6l6-2l-2 6l-6 2"></path><circle cx="12" cy="12" r="9"></circle><path d="M12 3v2"></path><path d="M12 19v2"></path><path d="M3 12h2"></path><path d="M19 12h2"></path></g></svg>
            </button>
        </router-link>

        <router-link to="/">
            <button :class="`tertiary ${activePage=='diary' ? 'active' : ''}`">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m3 0v18"></path><path d="M13 8h2"></path><path d="M13 12h2"></path></g></svg>
            </button>
        </router-link>

        <button class="tertiary plus">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"></path><path d="M5 12h14"></path></g></svg>
        </button>

        <router-link to="/statistics">
            <button :class="`tertiary ${activePage=='statistics' ? 'active' : ''}`">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19l4-6l4 2l4-5l4 4v5H4"></path><path d="M4 12l3-4l4 2l5-6l4 4"></path></g></svg>
            </button>
        </router-link>

        <router-link to="/profile">
            <button :class="`tertiary ${activePage=='profile' ? 'active' : ''}`">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="10" r="3"></circle><path d="M6.168 18.849A4 4 0 0 1 10 16h4a4 4 0 0 1 3.834 2.855"></path></g></svg>
            </button>
        </router-link>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const props = defineProps({
    activePage: String
})

const activePage = ref(props.activePage)
</script>

<style scoped>
nav.mobilemenu {
    display: flex;

    box-sizing: border-box;

    position: fixed;
    bottom: 0;
    left: 0;

    justify-content: center;
    align-items: center;

    padding: .5rem;
    padding-bottom: 2rem;

    background-color: var(--col-white);

    box-shadow: var(--shadow-md);

    width: 100%;
}

nav.mobilemenu button {
    margin: 0 .8rem;
}

nav.mobilemenu button.plus {
    margin: 0 1.5rem;
    color: var(--col-white);
    background-color: var(--col-primary);

    border: 3px solid var(--col-primary);
}

nav.mobilemenu button .icon {
    width: 32px;
    height: 32px;
}

nav.mobilemenu button.plus:is(:hover, :active) {
    background-color: transparent;
    color: var(--col-primary);
}

nav.mobilemenu button.active {
    position: relative;
    color: var(--col-black);
}

nav.mobilemenu button.active::after {
    content: '';

    position: absolute;

    left: 50%;
    bottom: 8px;

    translate: -50%;

    height: 4px;
    width: 4px;
    border-radius: 2px;

    background-color: var(--col-black);
}
</style>