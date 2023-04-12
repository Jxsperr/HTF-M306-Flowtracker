import { createApp } from 'vue'
import './style.css'
import AppComponent from './App.vue'
import HomeComponent from "./components/Home.vue"
import StatisticsComponent from "./components/StatisticsComponent.vue"

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: HomeComponent
        },
        {
            path: '/statistics', component: StatisticsComponent
        }
    ]
})

const App = createApp(AppComponent)

App.use(router)
App.mount('#app')
