<template>
    <div class="page">
        <the-navigation/>
        <router-view></router-view>
        <the-footer/>
    </div>
</template>

<script>
    import TheFooter from './components/TheFooter.vue';
    import TheNavigation from './components/TheNavigation'
    import 'normalize.css'
    import './assets/app.sass'
    import './assets/iconfont.css'
    export default {
        components: {
            TheFooter,
            TheNavigation
        }
    }
</script>

<style lang="sass">
// there should be only layout styling, e.g. how high-level components lay together
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
    padding: 30px

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
    min-width: 320px

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
</style>