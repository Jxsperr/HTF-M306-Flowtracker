<script setup>
import NavBottom from './NavBottom.vue'
</script>

<template>
    <main>
        <header>
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19l4-6l4 2l4-5l4 4v5H4"></path><path d="M4 12l3-4l4 2l5-6l4 4"></path></g></svg>
            <h1>Statistics</h1>
        </header>
    </main>

    <NavBottom activePage="statistics"></NavBottom>
</template>

<style scoped>
    #entries {
        display: flex;
        justify-content: center;
        align-items: start;
        flex-wrap: wrap;
    }
</style>