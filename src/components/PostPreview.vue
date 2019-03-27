<template>
    <article class="post-preview">
        <div class="post-preview__thumbnail" :style="{backgroundImage: `url(${post.thumbnail.url})`}"></div>
        <div class="post-preview__body">
            <header class="post-preview__header">
                <h2 class="post-preview__title" v-text="post.title"></h2>
                <span class="post-preview__timestamp" v-if="post.timestamp" v-text="post.timestamp"></span>
            </header>
            <div class="post-preview__excerpt" v-text="excerpt"></div>
        </div>
    </article>
</template>

<script>
    export default {
        props: {
            post: {
                title: {
                    type: String,
                    required: true
                },
                body: {
                    type: String,
                    required: true
                },
                thumbnail: {
                    url: {
                        type: String,
                        default: require('../assets/images/01.jpg')
                    }
                },
                timestamp: {
                    type: String,
                    reuired: false
                }
            }
        },
        computed: {
            excerpt() {
                const length = 300
                const { body } = this.post
                return body.length > length
                    ? body.substring(0, length) + '...'
                    : body
            }
        }
    }
</script>

<style scoped lang="sass">
.post-preview
    background: white
    box-shadow: 0 4px 15px 0 rgba(180, 180, 180, 0.5)
    display: flex
    flex-wrap: wrap

.post-preview__thumbnail
    flex-basis: 15%
    background-color: gray
    background-repeat: no-repeat
    background-size: cover
    background-position: center
    flex-grow: 1
    min-width: 200px
    min-height: 150px

.post-preview__header
    display: flex
    justify-content: space-between

.post-preview__timestamp
    font-size: 0.8rem
    color: gray

.post-preview__title
    margin-top: 10px

.post-preview__body
    flex-basis: 70%
    flex-grow: 1
    padding: 15px
</style>