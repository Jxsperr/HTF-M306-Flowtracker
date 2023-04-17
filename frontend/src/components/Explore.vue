<script setup>
import NavBottom from './NavBottom.vue'
import BlogPostPreview from './BlogPostPreview.vue'
import BlogPostModal from './BlogPostModal.vue'

import { ref } from 'vue';

let posts = [
  {
    id: 0,
    image: 'zen_buddhism.jpg',
    dateCreated: '2023-05-02T14:00:00',
    title: 'Good and Bad Things About Zen Buddhism',
    content: `Zen Buddhism, an ancient practice originating in China over 1,500 years ago, has both positive and negative aspects. On the one hand, it emphasizes mindfulness, meditation, and living in the present moment, which can help reduce stress, improve focus, and increase self-awareness. Studies have shown that practicing mindfulness can lead to reduced anxiety and depression, improved immune function, and better overall well-being.

Zen Buddhism also promotes compassion, kindness, and interconnectedness, fostering a sense of harmony with oneself and others. By following the teachings of Zen Buddhism, practitioners can develop a deeper understanding of themselves and the world around them, leading to a more fulfilling and meaningful life.

However, some critics argue that Zen Buddhism can be overly simplistic, disregarding complex emotions and issues in favor of a detached, unemotional approach. This can make it difficult for some people to fully engage with their feelings and connect with others on a deeper level.

Others find its lack of doctrine or formal structure confusing and difficult to follow. Zen Buddhism often relies on koans, paradoxical statements or questions meant to encourage deep contemplation, which can be challenging for those used to more structured belief systems.

Despite these criticisms, Zen Buddhism remains a popular and influential spiritual practice, offering valuable insights and techniques for navigating the complexities of modern life.`,
    likeCount: 34
  },
  {
    id: 1,
    image: 'you_dont_matter.jpg',
    dateCreated: '2023-05-10T11:00:00',
    title: "Why You Don't Matter and That's Good",
    content: `The idea that we don't matter in the grand scheme of the universe can be both unsettling and liberating. When we consider the vastness of space, the billions of galaxies and stars, and the immense stretches of time, our individual lives can seem incredibly small and insignificant.

However, realizing our insignificance can free us from the pressure of needing to achieve, succeed, or make a lasting impact. This perspective encourages us to focus on the present moment, enjoy our lives, and make the most of our fleeting existence. One study found that adopting a cosmic perspective can increase feelings of gratitude and help individuals prioritize their well-being over material success.

Additionally, understanding that we are just a small part of a vast universe can foster humility, gratitude, and compassion for others, helping us to create more meaningful connections with those around us. Research has shown that developing a sense of awe and wonder at the universe can lead to increased empathy, altruism, and a greater sense of belonging.

In conclusion, embracing our insignificance in the cosmos can provide us with a sense of perspective and purpose, inspiring us to let go of our egos and live more authentic, connected lives.`,
    likeCount: 42
  },
  {
    id: 2,
    image: 'solitude.jpg',
    dateCreated: '2023-04-12T09:15:00',
    title: 'Poem: Solitude',
    content: "In the quiet of the forest's shade,\nA hidden path, with leaves arrayed,\nI find myself in solitude,\nThe world's cacophony subdued.\n\nBeneath the trees, a secret stream,\nWhose waters flow with gentle gleam,\nReflects the thoughts that fill my mind,\nAs I leave the noise of life behind.\n\nHere, in nature's tranquil embrace,\nI find a space to seek my place,\nA haven where my soul can rest,\nAnd ponder life's eternal quest.",
    likeCount: 18
  },
  {
    id: 3,
    image: 'death_is_certain.jpg',
    dateCreated: '2023-05-15T16:00:00',
    title: 'Death is Certain',
    content: `The inevitability of death is a universal truth that can be both unsettling and comforting. Recognizing the certainty of our own demise can help us prioritize what truly matters, appreciate the people and experiences that bring us joy, and make the most of our limited time on Earth. Contemplating death can lead to a deeper appreciation for the beauty and fragility of life, prompting us to live more fully, authentically, and purposefully.

Throughout history, various cultures and spiritual traditions have offered insights on death and the afterlife. Ancient Egyptians believed in a complex system of the afterlife, with the soul passing through various stages before reaching eternal peace. Similarly, the concept of reincarnation in Hinduism and Buddhism suggests that the soul is reborn into different life forms based on one's actions in previous lives.

Modern scientific advancements have also contributed to our understanding of death. Near-death experiences (NDEs) are well-documented phenomena in which individuals report vivid and profound experiences after being revived from the brink of death. These accounts often describe feelings of peace, love, and interconnectedness, providing intriguing glimpses into the nature of consciousness and the potential existence of an afterlife.

Coping with the loss of loved ones is an integral part of the human experience. Grieving is a natural and essential process that allows us to heal, grow, and ultimately find meaning in the face of loss. Different cultures have developed unique rituals and practices for honoring the deceased and commemorating their lives, fostering a sense of connection, closure, and continuity.

As we confront our own mortality, we are often inspired to seek deeper meaning and purpose in our lives. This introspection can lead to personal growth, strengthened relationships, and a renewed sense of gratitude for the gift of life. By embracing the certainty of death, we can cultivate a more meaningful existence, rooted in compassion, empathy, and the pursuit of our truest selves.

In conclusion, acknowledging the inevitability of death can provide us with a powerful catalyst for personal transformation, allowing us to live with greater intention, purpose, and authenticity. By embracing the preciousness of life and the certainty of our own mortality, we can create a more fulfilling and compassionate existence for ourselves and those around us.`,
    likeCount: 35
  },
  {
    id: 4,
    image: 'whisper_of_the_wind.jpg',
    dateCreated: '2023-04-22T09:20:00',
    title: 'Poem: Whisper of the Wind',
    content: "Upon the windswept hill I stand,\nAnd listen to the breeze's command,\nIts gentle whispers call my name,\nAnd beckon me to join their game.\n\nThrough golden fields and emerald trees,\nThe wind's sweet song entwines with ease,\nA melody of life and grace,\nIn nature's boundless, warm embrace.\n\nI close my eyes and breathe it in,\nThe wind's soft touch upon my skin,\nA moment's peace, a soul's reprieve,\nIn harmony with wind, I leave.",
    likeCount: 24
  },
  {
    id: 5,
    image: 'the_lamb_the_slaughterer.jpg',
    dateCreated: '2023-05-20T18:00:00',
    title: 'The Lamb, the Slaughterer',
    content: `The relationship between the lamb and the slaughterer is a metaphor for the duality of life and death, innocence and brutality. In this dynamic, the lamb represents purity, vulnerability, and the innate goodness of living beings, while the slaughterer embodies the harsh, unforgiving nature of the world.

This juxtaposition invites us to reflect on the complexity of existence, the delicate balance between beauty and suffering, and the inherent fragility of life. By contemplating these themes, we can develop a deeper understanding of our place in the world and the importance of compassion and empathy.

Throughout history, the symbolism of the lamb and the slaughterer has been used in various cultural and religious contexts, from the biblical story of Cain and Abel to the sacrificial rituals of ancient civilizations. These stories serve as powerful reminders of the interconnectedness of life and death, and the need for balance and harmony in our actions and relationships.

Moreover, the lamb-slaughterer metaphor can also be seen in modern society, with the ongoing struggle between preserving innocence and confronting the harsh realities of life. It is a reminder that we must strive for empathy and understanding in the face of adversity, and recognize the vulnerability and beauty that exists within each of us.

By embracing the lessons offered by the lamb and the slaughterer, we can learn to appreciate the fleeting nature of life and the importance of nurturing our inner goodness. This awareness can inspire us to cultivate kindness, forgiveness, and resilience in the face of life's challenges.

Furthermore, the lamb-slaughterer dynamic can serve as a powerful reminder of the need for personal growth and self-exploration. As we navigate the complexities of our own existence, we must be willing to confront our inner demons and embrace the beauty and innocence that resides within.

In modern times, environmental and social issues also reflect the tension between innocence and brutality. The destruction of natural habitats and the exploitation of vulnerable populations are just a few examples of the challenges we face in our quest for balance and harmony.

Ultimately, the metaphor of the lamb and the slaughterer encourages us to reflect on the duality of existence and the inherent complexities of life. By contemplating these themes, we can gain a deeper understanding of ourselves, our relationships, and the world around us, fostering a greater sense of compassion, empathy, and interconnectedness.

By delving into the intricate dance of life and death, innocence and brutality, we can learn valuable lessons about our own humanity and the importance of living with intention, purpose, and empathy. In doing so, we can create a more harmonious and meaningful existence for ourselves and those around us, embracing the duality of life with wisdom and grace.`,
    likeCount: 33
  },
  {
    id: 6,
    image: 'river_of_time.jpg',
    dateCreated: '2023-04-30T13:30:00',
    title: 'Poem: The River of Time',
    content: "Along the river's winding course,\nI trace the flow of time's great force,\nIts waters shimmer, gleam, and glide,\nA ceaseless dance of ebb and tide.\n\nBeside the banks, I watch and wait,\nAs life unfolds, both small and great,\nThe river's song, a whispered truth,\nA tale of joy, of love, of youth.\n\nAnd as I stand on time's vast shore,\nI feel its current evermore,\nThe river's flow, both swift and slow,\nCarries me through life's ebb and flow.",
    likeCount: 22
  },
  {
    id: 7,
    image: 'birdsong.jpg',
    dateCreated: '2023-05-25T15:00:00',
    title: "The Symphony of Birdsong: Nature's Music",
    content: `Birdsong, a melodious symphony woven into the fabric of nature, has captivated humans for centuries. These enchanting tunes not only fill our surroundings with life and color but also remind us of our connection to the natural world. By taking time to appreciate birdsong, we can foster a deeper appreciation for the beauty and diversity of life on Earth. Furthermore, immersing ourselves in nature's music can promote relaxation, reduce stress, and inspire our own creativity, as we become attuned to the ever-changing rhythms of the world around us.

Birds communicate through song for various reasons, including attracting mates, defending territories, and conveying information about food sources. Their songs are as diverse as their species, ranging from melodious tunes to complex and intricate vocalizations. Some birds, like the lyrebird and mockingbird, are remarkable mimics, capable of reproducing not only the songs of other birds but also an array of man-made sounds, such as car alarms and camera shutters.

Scientists have discovered that birdsong can have a profound impact on human health and well-being. Research has shown that listening to birdsong can lower blood pressure, reduce stress hormone levels, and improve mental health. The calming effect of birdsong is thought to be linked to our evolutionary history, as our ancestors relied on these natural cues to assess their surroundings and determine whether they were safe.

In our increasingly urbanized world, birdsong serves as a vital reminder of our connection to nature and the importance of preserving our natural environment. As habitat loss and climate change threaten bird populations worldwide, the symphony of birdsong is at risk of fading away. By cultivating a deeper appreciation for the beauty and significance of birdsong, we can become more aware of our impact on the environment and work towards a more sustainable future for all living beings.

In conclusion, the symphony of birdsong offers us a unique opportunity to reconnect with nature, appreciate its beauty, and experience the profound impact it can have on our well-being. By immersing ourselves in nature's music, we can cultivate a deeper connection to the world around us and contribute to the preservation of this incredible natural resource for generations to come.`,
    likeCount: 38
  },
  {
    id: 8,
    image: 'alchemy_of_cooking.jpg',
    dateCreated: '2023-06-01T14:00:00',
    title: 'The Alchemy of Cooking: Transforming Ingredients',
    content: `Cooking is a fascinating alchemical process, transforming raw ingredients into delectable dishes that nourish our bodies and souls. As we explore new flavors, textures, and techniques, we unleash our creativity and embark on a culinary journey that transcends cultural boundaries. The art of cooking fosters connection, both with others and with the Earth that sustains us. By mastering the alchemy of cooking, we can harness the power of transformation, turning simple ingredients into unforgettable experiences that bring joy, comfort, and sustenance to our lives.

The history of cooking can be traced back to the discovery of fire, which allowed our ancestors to cook their food, making it more palatable, easier to digest, and safer to eat. Over time, humans developed a diverse array of cooking techniques, including boiling, grilling, baking, and fermenting, as well as the use of spices and herbs to enhance flavors and preserve food.

In addition to its practical benefits, cooking has long been recognized as a creative outlet and form of self-expression. From ancient Greek symposiums to modern-day dinner parties, the act of preparing and sharing food has been a cornerstone of social interaction and cultural exchange. It has the power to break down barriers, forge new relationships, and unite people from all walks of life.

One of the most fascinating aspects of cooking is its universality. Across cultures and throughout history, people have devised unique culinary traditions, each reflecting the local environment, available ingredients, and cultural influences. For example, the Mediterranean diet emphasizes fresh fruits and vegetables, whole grains, and healthy fats, while Japanese cuisine is known for its delicate balance of flavors, artful presentation, and emphasis on seasonal ingredients.

Cooking can also be a form of meditation, providing an opportunity to quiet the mind and focus on the present moment. The tactile, sensory experience of chopping, stirring, and kneading can be therapeutic, helping to relieve stress and improve mental well-being. In recent years, the concept of "mindful cooking" has gained popularity, encouraging home cooks to approach their culinary endeavors with intention and presence.

The alchemy of cooking extends beyond the transformation of ingredients into dishes; it also has the power to transform our lives. Learning to cook can improve our health, enhance our relationships, and foster a greater sense of connection to the world around us. By embracing the art and science of cooking, we can unlock the potential for personal growth, creativity, and fulfillment.

In conclusion, the alchemy of cooking is a powerful force that transforms not only the ingredients we use but also our lives and the world around us. By embracing the art of cooking, we can unleash our creativity, foster connections with others, and cultivate a deeper appreciation for the beauty and diversity of our planet's culinary traditions. As we continue to explore the boundless possibilities of the kitchen, we can find joy, nourishment, and inspiration in the transformative power of cooking.`,
    likeCount: 45
  },
  {
    id: 9,
    image: 'shadows_mystery.jpg',
    dateCreated: '2023-06-10T16:00:00',
    title: 'The Intrigue of Shadows: Exploring the Mystery of Darkness',
    content: `The Intrigue of Shadows: Exploring the Mystery of Darkness',
content: "Shadows, the elusive playmates of light, have captivated human imagination since time immemorial. These enigmatic figures ignite our curiosity and evoke a sense of mystery and wonder, inviting us to ponder the unknown. From the earliest cave paintings to the chiaroscuro technique of the Renaissance masters, shadows have played a vital role in the realm of art and visual storytelling, shaping our perceptions and adding depth to our experiences.

In literature and folklore, shadows often symbolize the darker aspects of human nature, exploring themes of duality, secrecy, and the hidden self. For example, Robert Louis Stevenson's 'Strange Case of Dr. Jekyll and Mr. Hyde' delves into the struggle between the darkness within and the facade of civility we present to the world. Shadows have also been the subject of countless myths and legends, from the eerie tales of Peter Pan's lost shadow to the haunting stories of shadowy figures that lurk at the periphery of our vision.

Moreover, the study of shadows has led to significant scientific discoveries, such as the understanding of light and the development of sundials for timekeeping. Shadows also play a crucial role in photography and cinematography, helping to set the mood, create atmosphere, and provide visual contrast.

In conclusion, shadows serve as a constant reminder of the duality that exists in our world, embodying both the comforting familiarity of darkness and the eerie uncertainty of the unseen. By exploring the intrigue of shadows, we can embrace the multifaceted nature of reality and delve into the depths of our own psyche, uncovering hidden truths that lie just beyond the edge of perception. Ultimately, shadows invite us to question, contemplate, and engage with the mysteries that surround us.`,
    likeCount: 40
  },
  {
    id: 10,
    image: 'language_of_flowers.jpg',
    dateCreated: '2023-06-20T12:00:00',
    title: 'The Language of Flowers: Unspoken Emotions in Bloom',
    content: `Flowers have long been used to communicate emotions, with each bloom carrying its unique symbolism and meaning. This silent language transcends words, allowing us to express love, gratitude, friendship, and even grief, through the simple gesture of offering a flower. The practice of using flowers as symbols dates back to ancient civilizations, such as the Egyptians, Greeks, and Romans, who believed that flowers possessed divine attributes and used them in various rituals and ceremonies.

The Victorian era saw a resurgence of interest in the language of flowers, as people sought to convey their feelings in a more discreet and elegant manner. During this time, numerous guidebooks were published, detailing the meanings and sentiments associated with various flowers. For instance, red roses symbolize love and passion, while daffodils represent new beginnings and hope.

Today, the art of floral arrangement and the language of flowers continue to flourish, as people use blooms to celebrate milestones, express condolences, and convey emotions without uttering a single word. This non-verbal communication is a powerful tool that transcends cultural barriers and allows us to forge deep connections with others.

In conclusion, the language of flowers offers a unique form of communication that taps into our shared human experience, allowing us to express our deepest emotions with elegance and grace. As we cultivate our knowledge of this ancient practice, we can create meaningful connections with others and forge lasting bonds that blossom and flourish, much like the flowers themselves.`,
    likeCount: 37
  },
  {
    id: 11,
    image: 'embracing_change.jpg',
    dateCreated: '2023-05-05T08:45:00',
    title: 'Embracing Change: Thriving in a World of Uncertainty',
    content: `In a world that is constantly evolving, embracing change is essential for personal growth and success. Rapid advancements in technology, shifting societal values, and the dynamic nature of our global economy require us to adapt and evolve, or risk being left behind. Many people resist change out of fear or a desire for stability, but learning to adapt to new situations can open doors to opportunities and experiences we never imagined. In this blog post, we'll explore the benefits of embracing change and provide some practical tips for developing a more adaptable mindset.

First, embracing change can lead to personal growth and self-improvement. When we step out of our comfort zones and face new challenges, we develop new skills, gain valuable insights, and become more resilient. Change can serve as a catalyst for reinvention, inspiring us to reimagine our lives and pursue new passions.

Second, change often brings new opportunities for success. Whether it's a career shift, a move to a new city, or a change in personal circumstances, unexpected changes can lead to new connections, experiences, and avenues for growth. By staying open to change, we position ourselves to seize opportunities and create the life we truly desire.

Finally, embracing change can foster a more open and flexible mindset, which can enhance our overall well-being. By learning to view change as a natural and inevitable part of life, we can reduce anxiety and develop a greater sense of inner peace.

To cultivate an adaptable mindset, consider the following strategies:

1. Practice mindfulness and self-awareness. Tuning into your thoughts and emotions can help you identify resistance to change and develop a more accepting attitude.

2. Seek out new experiences. Deliberately placing yourself in unfamiliar situations can build your capacity to cope with change and enhance your adaptability.

3. Surround yourself with positive influences. Connect with people who embrace change and encourage growth, as their attitudes can be contagious.

4. Reframe your perspective. Instead of viewing change as a threat, try to see it as an opportunity for growth and self-improvement.

In conclusion, by cultivating an open and flexible attitude, we can learn to thrive in a world of uncertainty and make the most of every situation life throws our way. Embracing change not only opens the door to new experiences and opportunities but also allows us to grow, adapt, and flourish in our ever-changing world.`,
    likeCount: 36
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