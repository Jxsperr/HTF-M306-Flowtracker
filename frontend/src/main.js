import { createApp } from 'vue'
import './style.css'
import AppComponent from './App.vue'
import Diary from "./components/Diary.vue"
import Statistics from "./components/Statistics.vue"
import Explore from "./components/Explore.vue"
import Profile from "./components/Profile.vue"

import { createRouter, createWebHistory } from 'vue-router'
import VueLazyload from 'vue-lazyload'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/explore', component: Explore
        },
        {
            path: '/', component: Diary
        },
        {
            path: '/statistics', component: Statistics
        },
        {
            path: '/profile', component: Profile
        }
    ]
})

const App = createApp(AppComponent)

App.use(VueLazyload)
App.use(router)
App.mount('#app')
