<script setup>
import { RouterLink } from 'vue-router'
import Card from './Card.vue'

let user = {
    username: 'Noah'
}

let entries = [
  {
    id: 0,
    emotions: [0, 1],
    dateCreated: '2023-04-11T14:30:00',
    description: 'Feeling both joy and sadness today'
  },
  {
    id: 1,
    emotions: [2, 3],
    dateCreated: '2023-04-10T10:00:00',
    description: 'Felt angry and fearful during a difficult conversation'
  },
  {
    id: 2,
    emotions: [4, 0],
    dateCreated: '2023-04-09T18:45:00',
    description: ''
  },
  {
    id: 3,
    emotions: [5],
    dateCreated: '2023-04-08T08:15:00',
    description: 'Surprised by a thoughtful gesture from a friend'
  },
  {
    id: 4,
    emotions: [6],
    dateCreated: '2023-04-07T12:30:00',
    description: ''
  },
  {
    id: 5,
    emotions: [7],
    dateCreated: '2023-04-06T16:20:00',
    description: 'Trusting my instincts and making a big decision'
  },
  {
    id: 6,
    emotions: [3, 8],
    dateCreated: '2023-04-05T09:45:00',
    description: 'Feeling nervous but excited about an upcoming event'
  },
  {
    id: 7,
    emotions: [0],
    dateCreated: '2023-04-04T20:00:00',
    description: ''
  },
  {
    id: 8,
    emotions: [1, 2],
    dateCreated: '2023-04-03T11:10:00',
    description: 'Dealing with a difficult situation that is making me feel sad and angry'
  },
  {
    id: 9,
    emotions: [4],
    dateCreated: '2023-04-02T14:00:00',
    description: 'Feeling love and gratitude for my family'
  }
]

entries = entries.map(entry => {
    entry.dateCreated = new Date(entry.dateCreated).toLocaleString().split(':')
    entry.dateCreated.pop()
    entry.dateCreated = entry.dateCreated.join(':')

    return entry
})
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
        <section id="actions">
            <button>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"></path><path d="M5 12h14"></path></g></svg>
                <p>New Entry</p>
            </button>
        </section>

        <section id="entries">
            <card class="entry" v-for="entry of entries" :entry="entry"></card>
        </section>
    </main>
</template>

<style scoped>
    #actions {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 2rem;
        padding: 0 1rem;
    }

    #entries {
        display: flex;
        justify-content: center;
        align-items: start;
        flex-wrap: wrap;
    }

    #logo {
        width: clamp(150px, 20%, 250px);
    }

    #logo_phone {
        display: none;
        width: clamp(35px, 15%, 50px);
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        padding: 1.5rem 1.5rem;

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