<template>
    <div class="page">
        <router-view></router-view>
        <the-footer/>
    </div>
</template>

<script>
    import TheFooter from './components/TheFooter.vue';
    import TheNavigation from './components/TheNavigation'
    import 'normalize.css'
    import './assets/styles/app.sass'
    import './assets/styles/iconfont.css'
    export default {
        components: {
            TheFooter,
            TheNavigation
        },
        metaInfo: {
            title: '',
            titleTemplate: '%s | Creative Group'
        }
    }
</script>

<style lang="sass">
img 
    filter: blur(5px)

.content
    max-width: 1140px
    margin: 0 auto
    padding-left: 15px
    padding-right: 15px

.section
    background: white
    padding-top: 40px
    padding-bottom: 40px

.section--dark
    background: #f6f6f6

.section:nth-child(odd)
    background: #f6f6f6

.section__headline
    text-align: center
    font-size: 1.75rem
    padding: 0 30px
    padding-left: 0

.row
    display: flex
    flex-wrap: wrap
    justify-content: space-between

.row--narrow
    max-width: 800px
    margin: 0 auto

.col
    flex-basis: 40%
    flex-grow: 1
    min-width: 280px

    & > img
        max-width: 100%

.col--no-grow
    flex-grow: 0

.bigger-font
    font-size: 1.25rem

.higher-lines
    line-height: 2

.light-font
    font-weight: lighter

.text-center
    text-align: center

.text-right
    text-align: right

.text-left
    text-align: left

.muted-text
    color: lightgray
    font-weight: normal

.margin-s
    margin: 0.8rem

.m-top-l
    margin-top: 2.5rem

.flex
    display: flex

.flex-grid
    display: flex
    flex-wrap: wrap
    align-items: stretch
    justify-content: space-around

    &--no-resize
        align-items: center

    &--no-resize > *
        flex: 0

.col-3
    flex-basis: 30%
    flex: 1

.button
    cursor: pointer
    border: none
    display: inline-block
    border-radius: 20px
    background: #1e3847
    color: #eee
    padding: 12px 20px
    transition: all .4s

    &--light
        background: white
        color: #666
        border: 1px solid white

        &:hover
            color: #0092bf
            background: rgba(255, 255, 255, 0.4) !important

    &:hover
        background: #0092bf

.min-w-180
    min-width: 180px

.separator
    width: 100%
    height: 1px
    background: #ddd
    opacity: 0.2
    margin: 40px 0

.color-light
    color: white

[v-cloak]
    display: none

.navigation
    position: fixed
    top: 0
    left: 0
    right: 0

.lightbox
    z-index: 999 !important

.hooper,
.hooper-next,
.hooper-prev
    outline: none

.hooper-indicator
    width: 15px !important
    height: 15px !important
    border-radius: 50% !important
    outline: none
</style>