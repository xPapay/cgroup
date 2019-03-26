<template>
    <div 
        class="hamburger" 
        :class="{'hamburger--open': open}" 
        @click="$emit('click')"
    >
        <div class="hamburger__line" :style="{background: color}"></div>
        <div class="hamburger__line" :style="{background: color}"></div>
        <div class="hamburger__line" :style="{background: color}"></div>
    </div>
</template>

<script>
    export default {
        props: {
            open: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                default: 'black'
            }
        }
    }
</script>

<style scoped lang="sass">
.hamburger
    width: 40px
    height: 30px
    display: flex
    flex-direction: column
    justify-content: space-between
    position: relative
    cursor: pointer

    &--open > .hamburger__line:nth-child(2)
        width: 0

    &--open .hamburger__line
        position: absolute
        top: 50%
    
    &--open .hamburger__line:nth-child(1)
        transform: rotateZ(45deg) translateY(-50%)

    &--open .hamburger__line:nth-child(3)
        transform: rotateZ(-45deg) translateY(-50%)

.hamburger__line
    width: 100%
    height: 3px
    background: gray
    transition: all .3s ease-in-out
    
</style>