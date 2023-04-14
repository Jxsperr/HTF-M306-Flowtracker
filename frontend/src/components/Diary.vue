<script setup>
import DiaryEntry from './DiaryEntry.vue'
import NavBottom from './NavBottom.vue'
import { monthNames } from '../services/formatDate'

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
    dateCreated: '2023-03-10T10:00:00',
    title: 'Challenging Conversation',
    description: 'Felt angry and fearful during a difficult conversation at work, as I had to confront a colleague about their performance.'
  },
  {
    id: 2,
    emotions: [4, 0],
    dateCreated: '2023-02-09T18:45:00',
    title: 'Joyful Love',
    description: ''
  },
  {
    id: 3,
    emotions: [5],
    dateCreated: '2023-01-08T08:15:00',
    title: 'Unexpected Surprise',
    description: 'Surprised by a thoughtful gesture from a friend who sent me a care package just when I needed it most.'
  },
  {
    id: 4,
    emotions: [6],
    dateCreated: '2022-12-07T12:30:00',
    title: 'Unpleasant Experience',
    description: ''
  },
  {
    id: 5,
    emotions: [7],
    dateCreated: '2022-11-06T16:20:00',
    title: 'Big Decision',
    description: 'Trusting my instincts and making a big decision about my career path, feeling both excited and scared about the future.'
  },
  {
    id: 6,
    emotions: [3, 8],
    dateCreated: '2022-10-05T09:45:00',
    title: 'Anticipating Change',
    description: 'Feeling nervous but excited about an upcoming event, not knowing what to expect but hoping for the best.'
  },
  {
    id: 7,
    emotions: [0],
    dateCreated: '2022-09-04T20:00:00',
    title: 'Simple Joy',
    description: ''
  },
  {
    id: 8,
    emotions: [1, 2],
    dateCreated: '2022-08-03T11:10:00',
    title: 'Sadness and Anger',
    description: 'Dealing with a difficult situation that is making me feel sad and angry, as I struggle to find a way to resolve the issue.'
  },
  {
    id: 9,
    emotions: [4],
    dateCreated: '2022-07-02T14:00:00',
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
  },
  {
    id: 13,
    emotions: [0, 4],
    dateCreated: '2022-06-15T17:30:00',
    title: 'Appreciating Nature',
    description: 'Spent time in nature today, feeling joy and love as I admired the beauty of the world around me and the peacefulness it brought.'
  },
  {
    id: 14,
    emotions: [1, 5, 7],
    dateCreated: '2022-05-27T19:45:00',
    title: 'Grateful for Support',
    description: 'Feeling sadness due to a personal loss, but also surprise and trust in the support I received from friends and family.'
  },
  {
    id: 15,
    emotions: [2, 6, 8],
    dateCreated: '2022-04-18T21:10:00',
    title: 'Disgusted by Injustice',
    description: 'Witnessed an act of injustice today, which made me feel angry, disgusted, and anticipating the need for change.'
  }
]

function groupEntriesByMonth(entries) {
  const groupedEntries = {}

  entries.forEach(entry => {
    const date = new Date(entry.dateCreated)
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()
    const key = `${month} ${year}`

    if (!groupedEntries[key]) {
      groupedEntries[key] = []
    }

    groupedEntries[key].push(entry)

    groupedEntries[key].sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
  })

  return groupedEntries
}

entries = groupEntriesByMonth(entries)
</script>

<template>
    <main>
        <header>
          <h1>Diary</h1>
        </header>

        <section class="group" v-for="(group, date) in entries">
            <h2>{{ date.split(' ')[0] }}<span class="year">{{ date.split(' ')[1] }}</span></h2>

            <DiaryEntry class="entry" v-for="entry of group" :entry="entry"></DiaryEntry>
        </section>
    </main>

    <NavBottom activePage="diary"></NavBottom>
</template>

<style scoped>
    .group {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }

    h2 .year {
      margin-left: 1rem;
      color: var(--col-dark-gray);
    }
</style>