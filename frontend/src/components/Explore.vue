<script setup>
import NavBottom from './NavBottom.vue'
import BlogPostPreview from './BlogPostPreview.vue'
import BlogPostModal from './BlogPostModal.vue'

import { ref } from 'vue';

let posts = [
  {
    id: 1,
    image: 'zen_buddhism.jpg',
    dateCreated: '2023-05-02T14:00:00',
    title: 'Good and Bad Things About Zen Buddhism',
    content: "Zen Buddhism, an ancient practice originating in China, has both positive and negative aspects. On the one hand, it emphasizes mindfulness, meditation, and living in the present moment, which can help reduce stress, improve focus, and increase self-awareness. Additionally, Zen Buddhism promotes compassion, kindness, and interconnectedness, fostering a sense of harmony with oneself and others. However, some critics argue that Zen Buddhism can be overly simplistic, disregarding complex emotions and issues. Others find its lack of doctrine or formal structure confusing and difficult to follow.",
    likeCount: 34
  },
  {
    id: 2,
    image: 'you_dont_matter.jpg',
    dateCreated: '2023-05-10T11:00:00',
    title: "Why You Don't Matter and That's Good",
    content: "The idea that we don't matter in the grand scheme of the universe can be liberating. Realizing our insignificance can free us from the pressure of needing to achieve, succeed, or make a lasting impact. This perspective encourages us to focus on the present moment, enjoy our lives, and make the most of our fleeting existence. Additionally, understanding that we are just a small part of a vast universe can foster humility, gratitude, and compassion for others, helping us to create more meaningful connections with those around us.",
    likeCount: 42
  },
  {
    id: 3,
    image: 'solitude.jpg',
    dateCreated: '2023-04-12T09:15:00',
    title: 'Poem: Solitude',
    content: "In the quiet of the forest's shade,\nA hidden path, with leaves arrayed,\nI find myself in solitude,\nThe world's cacophony subdued.\n\nBeneath the trees, a secret stream,\nWhose waters flow with gentle gleam,\nReflects the thoughts that fill my mind,\nAs I leave the noise of life behind.\n\nHere, in nature's tranquil embrace,\nI find a space to seek my place,\nA haven where my soul can rest,\nAnd ponder life's eternal quest.",
    likeCount: 18
  },
  {
    id: 4,
    image: 'death_is_certain.jpg',
    dateCreated: '2023-05-15T16:00:00',
    title: 'Death is Certain',
    content: "The inevitability of death is a universal truth that can be both unsettling and comforting. Recognizing the certainty of our own demise can help us prioritize what truly matters, appreciate the people and experiences that bring us joy, and make the most of our limited time on Earth. Additionally, acknowledging death's inevitability can encourage us to confront and process our fears, allowing us to live more fully and authentically. Ultimately, accepting the certainty of death can provide us with a sense of perspective and purpose, inspiring us to embrace the preciousness of life.",
    likeCount: 35
  },
  {
    id: 6,
    image: 'whisper_of_the_wind.jpg',
    dateCreated: '2023-04-22T09:20:00',
    title: 'Poem: Whisper of the Wind',
    content: "Upon the windswept hill I stand,\nAnd listen to the breeze's command,\nIts gentle whispers call my name,\nAnd beckon me to join their game.\n\nThrough golden fields and emerald trees,\nThe wind's sweet song entwines with ease,\nA melody of life and grace,\nIn nature's boundless, warm embrace.\n\nI close my eyes and breathe it in,\nThe wind's soft touch upon my skin,\nA moment's peace, a soul's reprieve,\nIn harmony with wind, I leave.",
    likeCount: 24
  },
  {
    id: 7,
    image: 'the_lamb_the_slaughterer.jpg',
    dateCreated: '2023-05-20T18:00:00',
    title: 'The Lamb, the Slaughterer',
    content: "The relationship between the lamb and the slaughterer is a metaphor for the duality of life and death, innocence and brutality. In this dynamic, the lamb represents purity, vulnerability, and the innate goodness of living beings, while the slaughterer embodies the harsh, unforgiving nature of the world. This juxtaposition invites us to reflect on the complexity of existence, the delicate balance between beauty and suffering, and the inherent fragility of life. By contemplating these themes, we can develop a deeper understanding of our place in the world and the importance of compassion and empathy.",
    likeCount: 33
  },
  {
    id: 8,
    image: 'river_of_time.jpg',
    dateCreated: '2023-04-30T13:30:00',
    title: 'Poem: The River of Time',
    content: "Along the river's winding course,\nI trace the flow of time's great force,\nIts waters shimmer, gleam, and glide,\nA ceaseless dance of ebb and tide.\n\nBeside the banks, I watch and wait,\nAs life unfolds, both small and great,\nThe river's song, a whispered truth,\nA tale of joy, of love, of youth.\n\nAnd as I stand on time's vast shore,\nI feel its current evermore,\nThe river's flow, both swift and slow,\nCarries me through life's ebb and flow.",
    likeCount: 22
  },
  {
    id: 9,
    image: 'birdsong.jpg',
    dateCreated: '2023-05-25T15:00:00',
    title: "The Symphony of Birdsong: Nature's Music",
    content: "Birdsong, a melodious symphony woven into the fabric of nature, has captivated humans for centuries. These enchanting tunes not only fill our surroundings with life and color but also remind us of our connection to the natural world. By taking time to appreciate birdsong, we can foster a deeper appreciation for the beauty and diversity of life on Earth. Furthermore, immersing ourselves in nature's music can promote relaxation, reduce stress, and inspire our own creativity, as we become attuned to the ever-changing rhythms of the world around us.",
    likeCount: 38
  },
  {
    id: 10,
    image: 'alchemy_of_cooking.jpg',
    dateCreated: '2023-06-01T14:00:00',
    title: 'The Alchemy of Cooking: Transforming Ingredients',
    content: "Cooking is a fascinating alchemical process, transforming raw ingredients into delectable dishes that nourish our bodies and souls. As we explore new flavors, textures, and techniques, we unleash our creativity and embark on a culinary journey that transcends cultural boundaries. The art of cooking fosters connection, both with others and with the Earth that sustains us. By mastering the alchemy of cooking, we can harness the power of transformation, turning simple ingredients into unforgettable experiences that bring joy, comfort, and sustenance to our lives.",
    likeCount: 45
  },
  {
    id: 11,
    image: 'shadows_mystery.jpg',
    dateCreated: '2023-06-10T16:00:00',
    title: 'The Intrigue of Shadows: Exploring the Mystery of Darkness',
    content: "Shadows, the elusive playmates of light, have captivated human imagination since time immemorial. These enigmatic figures ignite our curiosity and evoke a sense of mystery and wonder, inviting us to ponder the unknown. Shadows serve as a reminder of the duality that exists in our world, embodying both the comforting familiarity of darkness and the eerie uncertainty of the unseen. By exploring the intrigue of shadows, we can embrace the multifaceted nature of reality and delve into the depths of our own psyche, uncovering hidden truths that lie just beyond the edge of perception.",
    likeCount: 40
  },
  {
    id: 12,
    image: 'language_of_flowers.jpg',
    dateCreated: '2023-06-20T12:00:00',
    title: 'The Language of Flowers: Unspoken Emotions in Bloom',
    content: "Flowers have long been used to communicate emotions, with each bloom carrying its unique symbolism and meaning. This silent language transcends words, allowing us to express love, gratitude, friendship, and even grief, through the simple gesture of offering a flower. By understanding the language of flowers, we can tap into a world of unspoken communication, conveying our deepest emotions with elegance and grace. As we cultivate our knowledge of this ancient practice, we can create meaningful connections with others and forge lasting bonds that blossom and flourish, much like the flowers themselves.",
    likeCount: 37
  },
  {
    id: 11,
    dateCreated: '2023-06-20T16:00:00',
    title: 'A Blog Post Without A Header Image: A Retrospective',
    content: "Shadows, the elusive playmates of light, have captivated human imagination since time immemorial. These enigmatic figures ignite our curiosity and evoke a sense of mystery and wonder, inviting us to ponder the unknown. Shadows serve as a reminder of the duality that exists in our world, embodying both the comforting familiarity of darkness and the eerie uncertainty of the unseen. By exploring the intrigue of shadows, we can embrace the multifaceted nature of reality and delve into the depths of our own psyche, uncovering hidden truths that lie just beyond the edge of perception.",
    likeCount: 1000
  }
]

posts = posts.sort((a, b) => {
    const dateA = new Date(a.dateCreated);
    const dateB = new Date(b.dateCreated);

    return dateB - dateA;
  })

const activePost = ref(null)
</script>

<template>
    <main class="explorebody">
        <header>
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 16l2-6l6-2l-2 6l-6 2"></path><circle cx="12" cy="12" r="9"></circle><path d="M12 3v2"></path><path d="M12 19v2"></path><path d="M3 12h2"></path><path d="M19 12h2"></path></g></svg>
          <h1>Explore</h1>
        </header>
        <section class="posts">
          <BlogPostPreview v-for="post of posts" :post="post" @click="activePost = post"></BlogPostPreview>
        </section>
    </main>

    <NavBottom activePage="explore"></NavBottom>

    <BlogPostModal v-if="activePost" :post="activePost" @close="activePost=null" />
</template>

<style scoped>
.posts {
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  align-items: start;
}

.explorebody {
  max-width: 1400px;
}
</style>