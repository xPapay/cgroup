<template>
    <div class="page">
        <router-view></router-view>
    </div>
</template>

<script>
    import TheNavigation from './components/TheNavigation.vue';
    import 'normalize.css'
    import './assets/app.sass'
    export default {

    }
</script>

<style lang="sass">
.section
    background: white
    padding-top: 40px
    padding-bottom: 40px


.section:nth-child(odd)
    background: #f6f6f6

.section__separator
    width: 100%
    height: 1px
    background: #dedede
    margin: 40px 0

.section__headline
    text-align: center
    font-size: 1.75rem
    padding: 30px

.row
    display: flex
    flex-wrap: wrap

.row--narrow
    max-width: 800px
    margin: 0 auto

.col
    flex-basis: 40%
    flex-grow: 1
    min-width: 320px
    margin: 0 20px

.bigger-font
    font-size: 1.25rem

.flex-grid
    display: flex
    flex-wrap: wrap
    align-items: center
    justify-content: space-around

    &--no-resize > *
        flex: 0

.button
    border-radius: 20px
    background: #1e3847
    color: #eee
    padding: 12px 20px
    transition: background .4s

    &:hover
        background: #0092bf
</style>