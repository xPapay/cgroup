<template>
    <header class="header">
        <slot></slot>
        <div class="center">
            <h1 v-if="headline" v-text="headline" class="headline"></h1>
            <h3 v-if="subheadline" v-text="subheadline" class="subheadline"></h3>
        </div>
    </header>
</template>

<script>
    export default {
        props: {
            headline: {
                type: String
            },
            subheadline: {
                type: String
            }
        }
    }
</script>

<style scoped lang="sass">
.header
    height: 475px
    background: lightpink
    position: relative

.headline
    font-size: 4rem
    margin-bottom: 1rem

.subheadline
    font-size: 1.5rem

.headline, .subheadline
    color: white

.center
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

</style>