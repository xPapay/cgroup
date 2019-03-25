import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import OurStory from './views/OurStory.vue'
import Rapido from './views/Rapido'
import Recharge from './views/Recharge'
import ManagementTeam from './views/ManagementTeam.vue'

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
            },
            {
                name: 'recharge',
                path: '/recharge',
                component: Recharge
            },
            {
                name: 'management-team',
                path: '/management-team',
                component: ManagementTeam
            }
        ]
    })
}


