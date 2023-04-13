<script setup>
import NavTop from './NavTop.vue'
import NavBottom from './NavBottom.vue'

import BlogPost from './BlogPost.vue'

let posts = [
  {
    id: 0,
    dateCreated: '2023-04-01T10:00:00',
    title: 'The Art of Mindfulness',
    content: "Mindfulness is the practice of being fully present in the moment, without judgment or distraction. It's a simple concept, yet it can have profound effects on our mental and emotional well-being. By practicing mindfulness, we can cultivate greater self-awareness, reduce stress, and improve our overall quality of life. In this blog post, we'll explore the benefits of mindfulness, along with some simple techniques for incorporating it into your daily routine.",
    likeCount: 27
  },
  {
    id: 1,
    dateCreated: '2023-04-05T15:30:00',
    title: 'Cultivating Gratefulness',
    content: "Gratefulness is a powerful emotion that can transform our outlook on life. By actively practicing gratitude, we can shift our focus away from negative thoughts and toward the abundance of positivity that surrounds us. In this blog post, we'll discuss the benefits of cultivating gratefulness, and share some practical tips for incorporating gratitude into your daily life. From keeping a gratitude journal to expressing appreciation for the people around you, there are countless ways to nurture a grateful heart.",
    likeCount: 35
  },
  {
    id: 2,
    dateCreated: '2023-04-10T12:00:00',
    title: 'The Power of Self-Reflection',
    content: "Self-reflection is a crucial aspect of personal growth and self-improvement. By taking the time to reflect on our thoughts, feelings, and actions, we can gain valuable insights into our strengths, weaknesses, and areas for growth. In this blog post, we'll discuss the importance of self-reflection, along with some practical strategies for implementing it in your daily life. From journaling to meditation, there are numerous tools available to help you cultivate a habit of self-reflection and foster personal growth.",
    likeCount: 42
  },
  {
    id: 3,
    dateCreated: '2023-04-12T09:15:00',
    title: 'Poem: Solitude',
    content: "In the quiet of the forest's shade,\nA hidden path, with leaves arrayed,\nI find myself in solitude,\nThe world's cacophony subdued.\n\nBeneath the trees, a secret stream,\nWhose waters flow with gentle gleam,\nReflects the thoughts that fill my mind,\nAs I leave the noise of life behind.\n\nHere, in nature's tranquil embrace,\nI find a space to seek my place,\nA haven where my soul can rest,\nAnd ponder life's eternal quest.",
    likeCount: 18
  },
  {
    id: 4,
    dateCreated: '2023-04-14T18:30:00',
    title: 'Embracing Stillness in a Busy World',
    content: "In our fast-paced society, it's easy to get caught up in the constant whirlwind of activity. Embracing stillness is a powerful way to counterbalance the busyness of our lives and reconnect with our inner selves. In this blog post, we'll explore the benefits of stillness and share practical tips for cultivating moments of quiet reflection throughout your day. From mindful breathing exercises to quiet walks in nature, learn how to integrate stillness into your daily routine and experience the profound impact it can have on your well-being.",
    likeCount: 29
  },
  {
    id: 5,
    dateCreated: '2023-04-18T11:45:00',
    title: 'A Journey of Self-Discovery',
    content: "Embarking on a journey of self-discovery is an essential step towards personal growth and self-improvement. By delving into our innermost thoughts, emotions, and desires, we can gain a deeper understanding of ourselves and our place in the world. In this blog post, we'll discuss the importance of self-discovery and share practical strategies for exploring your inner landscape. From journaling to mindfulness practices, learn how to embark on your own journey of self-discovery and unlock your full potential.",
    likeCount: 32
  },
  {
    id: 6,
    dateCreated: '2023-04-22T09:20:00',
    title: 'Poem: Whisper of the Wind',
    content: "Upon the windswept hill I stand,\nAnd listen to the breeze's command,\nIts gentle whispers call my name,\nAnd beckon me to join their game.\n\nThrough golden fields and emerald trees,\nThe wind's sweet song entwines with ease,\nA melody of life and grace,\nIn nature's boundless, warm embrace.\n\nI close my eyes and breathe it in,\nThe wind's soft touch upon my skin,\nA moment's peace, a soul's reprieve,\nIn harmony with wind, I leave.",
    likeCount: 24
  },
  {
    id: 7,
    dateCreated: '2023-04-26T16:00:00',
    title: 'The Transformative Power of Mindful Meditation',
    content: "Mindful meditation is a powerful practice that has been shown to have numerous mental, emotional, and physical benefits. By focusing our attention on the present moment and observing our thoughts and feelings without judgment, we can foster greater self-awareness, reduce stress, and enhance our overall well-being. In this blog post, we'll delve into the transformative power of mindful meditation and share practical guidance for incorporating it into your daily routine. Discover the profound impact that mindful meditation can have on your life, and begin your journey towards greater peace and clarity today.",
    likeCount: 37
  },
  {
    id: 8,
    dateCreated: '2023-04-30T13:30:00',
    title: 'Poem: The River of Time',
    content: "Along the river's winding course,\nI trace the flow of time's great force,\nIts waters shimmer, gleam, and glide,\nA ceaseless dance of ebb and tide.\n\nBeside the banks, I watch and wait,\nAs life unfolds, both small and great,\nThe river's song, a whispered truth,\nA tale of joy, of love, of youth.\n\nAnd as I stand on time's vast shore,\nI feel its current evermore,\nThe river's flow, both swift and slow,\nCarries me through life's ebb and flow.",
    likeCount: 22
  }
]

posts = posts.sort((a, b) => {
    const dateA = new Date(a.dateCreated);
    const dateB = new Date(b.dateCreated);

    return dateB - dateA;
  })

</script>

<template>
  <NavTop></NavTop>

    <main>
        <header>
          <h1>Explore</h1>
        </header>
        <BlogPost v-for="post of posts" :post="post"></BlogPost>
    </main>

    <NavBottom activePage="explore"></NavBottom>
</template>

<style scoped>
    #entries {
        display: flex;
        justify-content: center;
        align-items: start;
        flex-wrap: wrap;
    }
</style>