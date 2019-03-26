import Vue from 'vue'
import App from './App'
import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'

const router = createRouter()
const store = createStore()

sync(store, router)

router.beforeEach((to, from, next) => {
    const matchedComponents = router.getMatchedComponents(to)
    if (matchedComponents.length < 0) {
        next()
    }

    Promise.all(matchedComponents.map(component => fetchAsyncData(component, to)))
        .then(() => {
            matchedComponents[0].beforeRouteEnter = (to, from, next) => {
                next(() => document.dispatchEvent(new Event('render-event')))
            }
            next()
        })
})

function fetchAsyncData(component, route) {
    const { asyncData } = component
    if (asyncData) {
        return asyncData({ store, route })
    }
}

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
