import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import OurStory from './views/OurStory.vue'
import Rapido from './views/Rapido'

Vue.use(Router)

export const createRouter = () => {
    return new Router({
        mode: 'history',
        routes: [
            {
                name: 'home',
                path: '/',
                component: HomePage
            },
            {
                name: 'our-story',
                path: '/our-story',
                component: OurStory
            },
            {
                name: 'rapido',
                path: '/rapido',
                component: Rapido
            }
        ]
    })
}


