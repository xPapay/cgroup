import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const createStore = () => {
    return new Vuex.Store({
        state: {
            headline: '',
            somethingElse: 'is something else'
        },
        mutations: {
            SET_HEADLINE: (state, headline) => state.headline = headline
        },
        actions: {
            fetchHeadline({ commit }) {
                return new Promise(resolve => {
                    setTimeout(() => resolve('Fetched Headline'), 1500)
                }).then(headline => commit('SET_HEADLINE', headline))
            },
            setHeadline( { commit }, headline) {
                console.log(headline)
                commit('SET_HEADLINE', headline)
            }
        }
    })
}
