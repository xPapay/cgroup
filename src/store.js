import Vue from 'vue'
import Vuex from 'vuex'
import PostFetching from './services/PostFetching'

Vue.use(Vuex)

export const createStore = () => {
    return new Vuex.Store({
        state: {
            posts: [],
            currentPost: null
        },
        mutations: {
            SET_POSTS: (state, posts) => state.posts = posts,
            SET_CURRENT_POST: (state, currentPost) => state.currentPost = currentPost
        },
        actions: {
            fetchPosts({ commit }) {
                return PostFetching.getPosts()
                    .then(({ data: posts }) => commit('SET_POSTS', posts))
                    .catch(err => console.log(err))
            },
            fetchPostById({ commit, getters }, id) {
                const post = getters.getPostById(id)
                if (post) {
                    return commit('SET_CURRENT_POST', post)
                }
                return PostFetching.getPostById(id)
                    .then(({ data: post }) => commit('SET_CURRENT_POST', post))
            }
        },
        getters: {
            getPostById: state => id => state.posts.find(post => post.id === id)
        }
    })
}
