<template>
    <nav>
        <img @click="goToRoot" ondragstart="return false" id="logo" src="/logo_color_full.svg">
        <img @click="goToRoot" ondragstart="return false" id="logo_phone" src="/logo_color.svg">
        <div>
            <router-link to="/logout"><a href="#">Logout</a></router-link>
        </div>
    </nav>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

function goToRoot() {
    router.push('/')
}
</script>

<style scoped>
    #logo {
        width: clamp(150px, 20%, 250px);
    }

    #logo_phone {
        display: none;
        width: clamp(35px, 15%, 50px);
    }

    #logo, #logo_phone {
        cursor: pointer;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        padding: 3rem;

        color: black;

        box-sizing: border-box;
    }

    nav div {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
    }

    nav p {
      margin-top: 0;
      margin-bottom: 0;
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