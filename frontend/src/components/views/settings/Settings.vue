<script setup>
import NavBottom from '../../layout/NavBottom.vue'
</script>

<template>
    <main>
        <header>
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065z"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
          <h1>Settings</h1>
        </header>

        <section>
          <div id="links">
            <a href="#">Profile</a>
            <a href="#">Privacy</a>
            <a href="#">Notifications</a>
            <a href="#">About</a>
            <a href="#">Terms of Service</a>
          </div>
        </section>
    </main>

    <NavBottom activePage="settings"></NavBottom>
</template>

<style scoped>
#links {
  width: fit-content;
  margin: auto;
}

#links a {
  display: block;
  width: fit-content;

  margin: 1rem;

  font-size: 2rem;
}

section {
  display: flex;

  justify-content: space-between;
}

h2 {
  margin: 0;
}
</style>