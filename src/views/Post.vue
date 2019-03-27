<template>
    <div class="section section--dark">
        <the-navigation class="navigation--attached"/>
        <div class="content">
            <article class="post">
                <header class="post__header" :style="{backgroundImage: `url(${currentPost.thumbnail})`}"></header>
                <div class="post__body">
                    <h1 class="post__headline" v-text="currentPost.title"></h1>
                    <!-- TODO: DO NOT ESCAPE HTML STRINGS, IT CAN BE BUILT IN PAGE BUILDER -->
                    <div class="post__content" v-text="currentPost.body"></div>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
    import TheNavigation from '../components/TheNavigation.vue';
    import { mapState } from 'vuex';
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
        computed: mapState(['currentPost']),
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

<style scoped lang="sass">
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

</style>