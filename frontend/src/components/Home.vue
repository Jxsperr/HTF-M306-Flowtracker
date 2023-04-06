<script setup>
import { RouterLink } from 'vue-router'

let user = {
    username: 'Noah'
}
</script>

<template>
    <nav>
        <img id="logo" src="/logo_white_full.svg">
        <img id="logo_phone" src="/logo_white.svg">
        <div>
            <p id="username">{{ user.username }}</p>
            <router-link to="/logout"><a href="#">Logout</a></router-link>
        </div>
    </nav>

    <main>
        <h1>Something man</h1>
    </main>
</template>

<style scoped>
    #logo {
        width: clamp(250px, 20%, 400px);
    }

    #logo_phone {
        display: none;
        width: clamp(50px, 5%, 400px);
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        padding: 2rem 2rem;

        background-color: #111;

        box-sizing: border-box;
    }

    nav div {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
    }

    #username {
        margin-right: 1rem;
    }

    @media screen and (max-width: 500px) {
        #logo {
            display: none;
        }

        #logo_phone {
            display: block;
        }
    }
</style>