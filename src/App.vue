<template>
    <div class="page">
        <router-view></router-view>
        <the-footer/>
    </div>
</template>

<script>
    import TheFooter from './components/TheFooter.vue';
    import 'normalize.css'
    import './assets/app.sass'
    export default {
        components: {
            TheFooter,
        }
    }
</script>

<style lang="sass">
// there should be only layout styling, e.g. how high-level components lay together
.section
    background: white
    padding-top: 40px
    padding-bottom: 40px


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

.text-center
    text-align: center

.m-top-l
    margin-top: 2.5rem

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
    display: inline-block
    border-radius: 20px
    background: #1e3847
    color: #eee
    padding: 12px 20px
    transition: background .4s

    &:hover
        background: #0092bf

.separator
    width: 100%
    height: 1px
    background: #ddd
    opacity: 0.2
    margin: 40px 0
    // box-shadow: 0 1px 2px 0 #dedede
</style>