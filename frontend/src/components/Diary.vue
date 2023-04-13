<script setup>
import DiaryEntry from './DiaryEntry.vue'
import NavTop from './NavTop.vue'
import NavBottom from './NavBottom.vue'

import {formatDate} from '../services/formatDate.js'

let entries = [
  {
    id: 0,
    emotions: [0, 1],
    dateCreated: '2023-04-11T14:30:00',
    title: 'Mixed Emotions',
    description: 'Feeling both joy and sadness today as I met an old friend and remembered the good times, but also felt the weight of time passing.'
  },
  {
    id: 1,
    emotions: [2, 3],
    dateCreated: '2023-04-10T10:00:00',
    title: 'Challenging Conversation',
    description: 'Felt angry and fearful during a difficult conversation at work, as I had to confront a colleague about their performance.'
  },
  {
    id: 2,
    emotions: [4, 0],
    dateCreated: '2023-04-09T18:45:00',
    title: 'Joyful Love',
    description: ''
  },
  {
    id: 3,
    emotions: [5],
    dateCreated: '2023-04-08T08:15:00',
    title: 'Unexpected Surprise',
    description: 'Surprised by a thoughtful gesture from a friend who sent me a care package just when I needed it most.'
  },
  {
    id: 4,
    emotions: [6],
    dateCreated: '2023-04-07T12:30:00',
    title: 'Unpleasant Experience',
    description: ''
  },
  {
    id: 5,
    emotions: [7],
    dateCreated: '2023-04-06T16:20:00',
    title: 'Big Decision',
    description: 'Trusting my instincts and making a big decision about my career path, feeling both excited and scared about the future.'
  },
  {
    id: 6,
    emotions: [3, 8],
    dateCreated: '2023-04-05T09:45:00',
    title: 'Anticipating Change',
    description: 'Feeling nervous but excited about an upcoming event, not knowing what to expect but hoping for the best.'
  },
  {
    id: 7,
    emotions: [0],
    dateCreated: '2023-04-04T20:00:00',
    title: 'Simple Joy',
    description: ''
  },
  {
    id: 8,
    emotions: [1, 2],
    dateCreated: '2023-04-03T11:10:00',
    title: 'Sadness and Anger',
    description: 'Dealing with a difficult situation that is making me feel sad and angry, as I struggle to find a way to resolve the issue.'
  },
  {
    id: 9,
    emotions: [4],
    dateCreated: '2023-04-02T14:00:00',
    title: 'Family Love',
    description: 'Feeling love and gratitude for my family as we spent quality time together, cherishing the bonds we share.'
  },
  {
    id: 10,
    emotions: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    dateCreated: '2023-04-12T10:30:00',
    title: 'Emotional Rollercoaster',
    description: 'Today was filled with every emotion imaginable, from joy to fear, as I navigated through a series of challenging and rewarding experiences.'
  },
  {
    id: 11,
    emotions: [4, 5, 0, 1],
    dateCreated: '2023-04-12T12:15:00',
    title: 'Unexpected Reunion',
    description: 'Ran into an old friend today, which brought back feelings of love, surprise, joy, and a touch of sadness for the times gone by.'
  },
  {
    id: 12,
    emotions: [2, 3, 7, 8],
    dateCreated: '2023-04-12T15:00:00',
    title: 'Navigating Conflict',
    description: 'Handled a disagreement at work, feeling anger, fear, trust in my abilities, and anticipation for the outcome.'
  }
]

entries = entries.sort((a, b) => {
    const dateA = new Date(a.dateCreated);
    const dateB = new Date(b.dateCreated);

    return dateB - dateA;
  })
</script>

<template>
  <NavTop></NavTop>

    <main>
        <header>
          <h1>Diary</h1>
        </header>

        <section id="entries">
            <DiaryEntry class="entry" v-for="entry of entries" :entry="entry"></DiaryEntry>
        </section>
    </main>

    <NavBottom activePage="diary"></NavBottom>
</template>

<style scoped>
    #entries {
        display: flex;
        justify-content: center;
        align-items: start;
        flex-wrap: wrap;
    }
</style>