<template>
    <nav class="navigation">
        <div class="navigation__logo">
            <img src="../assets/cg-logo.png" alt="logo">
        </div>
        <ul class="navigation__menu menu">
            <li class="menu__item"><router-link :to="{name: 'our-story'}">Our Story</router-link></li>
            <li class="menu__item">
                <div class="menu__item menu__item--parent">Our Brands</div>
                <div class="menu__item menu__item--nested">Rapido</div>
                <div class="menu__item menu__item--nested">Recharge</div>
            </li>
            <li class="menu__item">Management Team</li>
            <li class="menu__item">Working With Us</li>
            <li class="menu__item">Our Tech</li>
            <li class="menu__item">Contact</li>
        </ul>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="sass">
.navigation
    display: flex
    align-items: center
    position: relative
    z-index: 800

.navigation__menu
    flex-grow: 1

.menu
    display: inline-flex
    list-style: none
    justify-content: space-between

.menu__item
    text-transform: uppercase
    color: white
    font-size: 0.9rem
    transition: color .3s

    &:hover
        color: gray
    
    &:hover .menu__item--nested
        visibility: visible

.menu__item--parent:after
    content: '>'
    display: inline-block
    margin-left: 5px
    transform: scaleX(1.25) scaleY(0.7) rotate(90deg)

.menu__item--nested
    visibility: hidden

.router-link-active
    color: #00b9f2

</style>