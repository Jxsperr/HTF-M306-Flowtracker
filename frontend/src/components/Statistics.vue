<script setup>
import NavBottom from './NavBottom.vue'
</script>

<template>
    <main>
        <header>
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