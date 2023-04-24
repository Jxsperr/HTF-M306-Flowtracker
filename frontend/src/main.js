import { createApp } from 'vue'
import './style.css'
import AppComponent from './App.vue'
import Flows from "./components/views/flows/Flows.vue"
import Statistics from "./components/views/statistics/Statistics.vue"
import Explore from "./components/views/explore/Explore.vue"
import Settings from "./components/views/settings/Settings.vue"

import { createRouter, createWebHistory } from 'vue-router'
import VueLazyload from 'vue-lazyload'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/explore', component: Explore
        },
        {
            path: '/', redirect: '/flows'
        },
        {
            path: '/flows', component: Flows
        },
        {
            path: '/statistics', component: Statistics
        },
        {
            path: '/settings', component: Settings
        },
        {
            path: '/:pathMatch(.*)*', redirect: '/'
        }
    ]
})

const App = createApp(AppComponent)

App.use(VueLazyload)
App.use(router)
App.mount('#app')
