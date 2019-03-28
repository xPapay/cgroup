<template>
    <div>
        <the-header :background="require('../assets/images/blog-cover.jpg')">
            <the-navigation />
        </the-header>
        <section class="section">
            <div class="content">
                <h1>Blog</h1>
                <div class="posts-grid">
                    <template v-for="post in posts">
                        <router-link :to="url(post)" :key="post.id" class="post-grid__post">
                            <post-preview
                                :key="post.id"
                                :post="post"
                            />
                        </router-link>
                    </template>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import TheNavigation from '../components/TheNavigation'
    import TheHeader from '../components/TheHeader'
    import PostPreview from '../components/PostPreview'
    import { mapState } from 'vuex'
    const slugify = require('slugify')

    export default {
        components: {
            TheNavigation,
            TheHeader,
            PostPreview
        },
        computed: mapState(['posts']),

        serverPrefetch() {
            return this.$store.dispatch('fetchPosts')
        },

        mounted() {
            if (this.posts.length < 1) {
                this.$store.dispatch('fetchPosts')
            }
        },

        methods: {
            url(post) {
                const { title, id } = post
                return { 
                    name: 'post-show', 
                    params: { id, title: slugify(title, { lower: true })}
                }
            }
        },
        metaInfo: {
            title: 'Blog'
        }
    }
</script>

<style scoped lang="sass">
.post-grid__post
    display: block
    margin: 2rem 0
</style>