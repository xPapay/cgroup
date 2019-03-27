import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import OurStory from './views/OurStory.vue'
import Rapido from './views/Rapido'
import Recharge from './views/Recharge'
import ManagementTeam from './views/ManagementTeam.vue'
import WorkingWithUs from './views/WorkingWithUs'
import OurTech from './views/OurTech.vue';
import Contact from './views/Contact'
import Blog from './views/Blog'
import Post from './views/Post'

Vue.use(Router)

export const routes = [
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
    },
    {
        name: 'working-with-us',
        path: '/working-with-us',
        component: WorkingWithUs
    },
    {
        name: 'our-tech',
        path: '/our-tech',
        component: OurTech
    },
    {
        name: 'contact',
        path: '/contact',
        component: Contact
    },
    {
        name: 'blog',
        path: '/blog',
        component: Blog
    },
    {
        name: 'post-show',
        path: '/blog/:title/:id',
        component: Post,
        props: true
    }
]

export const createRouter = () => {
    return new Router({
        mode: 'history',
        routes,
        scrollBehavior(to, from, savedPosition) {
            return { x: 0, y: 0 }
        }
    })
}


