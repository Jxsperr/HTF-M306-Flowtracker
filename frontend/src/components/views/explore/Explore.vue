<script setup>
import NavBottom from '../../layout/NavBottom.vue'
import BlogPostPreview from './BlogPostPreview.vue'
import BlogPostModal from './BlogPostModal.vue'

import { ref } from 'vue'

import { posts as postsData } from '../../../mockData'

const activePost = ref(null)
const posts = ref([])

posts.value = postsData

posts.value = posts.value.sort((a, b) => {
    const dateA = new Date(a.dateCreated)
    const dateB = new Date(b.dateCreated)

    return dateB - dateA
  })

// set the post as the active post in the modal and mark as read in the array
function setPostActive(post) {
  let idx = posts.value.findIndex(_post => _post.id === post.id)
  posts.value[idx].read = true

  activePost.value = post
}
</script>

<template>
    <main>
        <header>
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 16l2-6l6-2l-2 6l-6 2"></path><circle cx="12" cy="12" r="9"></circle><path d="M12 3v2"></path><path d="M12 19v2"></path><path d="M3 12h2"></path><path d="M19 12h2"></path></g></svg>
          <h1>Explore</h1>
        </header>

        <section class="posts">
          <BlogPostPreview class="post" v-for="post of posts" :post="post" @click="setPostActive(post)"></BlogPostPreview>
        </section>
    </main>

    <NavBottom activePage="explore"></NavBottom>

    <BlogPostModal v-if="activePost" :post="activePost" @close="activePost=null" />
</template>

<style scoped>
.posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
}

.post:nth-child(10n + 1),
.post:nth-child(10n + 7) {
  grid-column-end: span 2;
}

@media screen and (max-width: 1100px) {
  .posts {
    grid-template-columns: repeat(2, 1fr);
  }

  .post:nth-child(10n + 1),
  .post:nth-child(10n + 7) {
    grid-column-end: span 1;
    grid-row-end: span 2;
  }
}

@media screen and (max-width: 750px) {
  .posts {
    grid-template-columns: 1fr;
  }
  
  .post:nth-child(10n + 1),
  .post:nth-child(10n + 7) {
    grid-row-end: span 1;
  }
}
</style>