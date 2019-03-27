<template>
    <div class="section section--dark">
        <the-navigation class="navigation--attached"/>
        <div class="content">
            <article class="post">
                <header class="post__header" :style="{backgroundImage: thumbnail}"></header>
                <div class="post__body">
                    <h1 class="post__headline" v-text="title"></h1>
                    <div class="post__content" v-html="body"></div>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
    import TheNavigation from '../components/TheNavigation.vue';
    import { mapState } from 'vuex';
    const marked = require('marked')

    export default {
        components: {
            TheNavigation
        },
        props: {
            id: {
                type: [String, Number],
                required: true
            }
        },
        computed: {
            ...mapState(['currentPost']),
            body() {
                return this.currentPost
                    ? marked(this.currentPost.body)
                    : ''
            },
            thumbnail() {
                return this.currentPost 
                    ? `url(${this.currentPost.thumbnail.url})`
                    : 'none'
            },
            title() {
                return this.currentPost
                    ? this.currentPost.title
                    : ''
            }
        },
        serverPrefetch() {
            return this.$store.dispatch('fetchPostById', this.id)
        },
        mounted() {
            if (!this.currentPost || this.currentPost.id !== this.id) {
                return this.$store.dispatch('fetchPostById', this.id)
            }
        }
    }
</script>

<style lang="sass">
.post
    margin-top: 8rem
    margin-bottom: 8rem
    background: white
    box-shadow: 0 4px 15px 0 rgba(180, 180, 180, 0.5)

.post__header
    width: 100%
    padding-top: 30%
    min-height: 150px
    max-height: 300px
    background-color: gray
    background-size: cover
    background-repeat: no-repeat
    background-position: center

.post__body
    padding: 1rem

.post__content
    img
        max-width: 100%

    p
        line-height: 1.75
        color: #333

</style>