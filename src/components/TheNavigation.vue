<template>
    <nav class="navigation" :class="{'navigation--attached': isAttached}" ref="navigation">
        <router-link :to="{name: 'home'}" class="navigation__logo">
            <img :src="isAttached ? require('../assets/images/logo-light-type-246x60.png') : require('../assets/images/cg-logo.png')" alt="logo">
        </router-link>
        <div class="menu-wrapper">
            <div class="hamburger-wrapper">
                <hamburger-menu 
                    :color="isAttached ? 'black' : 'white'"
                    :open="mobileMenuOpen" 
                    @click="mobileMenuOpen = !mobileMenuOpen" 
                />
            </div>
            <ul class="navigation__menu menu" :class="{'navigation__menu--open': mobileMenuOpen}">
                <li class="menu__item"><router-link :to="{name: 'our-story'}">Our Story</router-link></li>
                <li class="menu__item">
                    <div class="menu__item menu__item--parent">Our Brands</div>
                    <div class="menu__nested">
                        <div class="menu__item"><router-link :to="{name: 'rapido'}">Rapido</router-link></div>
                        <div class="menu__item"><router-link :to="{name: 'recharge'}">Recharge</router-link></div>
                    </div>
                </li>
                <li class="menu__item"><router-link :to="{name: 'management-team'}">Management Team</router-link></li>
                <li class="menu__item"><router-link :to="{name: 'working-with-us'}">Working With Us</router-link></li>
                <li class="menu__item"><router-link :to="{name: 'our-tech'}">Our Tech</router-link></li>
                <li class="menu__item"><router-link :to="{name: 'contact'}">Contact</router-link></li>
            </ul>
            <div class="page-overlay" v-if="mobileMenuOpen"></div>
        </div>
    </nav>
</template>

<script>
    import { throttle } from 'lodash'
    import HamburgerMenu from './HamburgerMenu'
    export default {
        components: {
            HamburgerMenu,
        },
        data() {
            return {
                isAttached: false,
                mobileMenuOpen: false
            }
        },
        mounted() {
            this.isAttached = window.scrollY >= this.$refs.navigation.clientHeight
            this.throttledToggleSidebar = throttle(this.toggleSidebar, 200)
            window.addEventListener('scroll', this.throttledToggleSidebar)
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.throttledToggleSidebar)
        },
        methods: {
            toggleSidebar() {
                if (!this.isAttached && window.scrollY >= this.$refs.navigation.clientHeight) {
                    return this.isAttached = true
                }

                if (this.isAttached && window.scrollY < this.$refs.navigation.clientHeight) {
                    return this.isAttached = false
                }
            }
        }
    }
</script>

<style scoped lang="sass">
.navigation
    display: flex
    align-items: center
    justify-content: space-between
    z-index: 800
    padding: 10px 15px
    transition: all 0.8s

.navigation__logo
    z-index: 999

.navigation--attached
    background: white
    box-shadow: 0 2px 15px 0 rgba(180, 180, 180, 0.5)

    & .menu__item
        color: black

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
    position: relative

    & a
        padding: 10px

    &:hover
        color: gray
    
    &:hover .menu__nested
        max-height: 500px

.menu__item--parent:after
    content: '>'
    display: inline-block
    margin-left: 5px
    transform: scaleX(1.25) scaleY(0.7) rotate(90deg)

.menu__nested
    max-height: 0
    overflow: hidden
    position: absolute
    background: white
    transition: all 0.3s
    box-shadow: 0 2px 15px 0 rgba(180, 180, 180, 0.5)

    .menu__item
        padding: 15px
        color: gray
        border-top: 1px solid rgba(200, 200, 200, 0.4)
        transition: all .3s

        &:hover
            background: rgba(200, 200, 200, 0.4)

.router-link-active
    color: #00b9f2

.hamburger-wrapper
    display: none

@media screen and (max-width: 1200px)
    .page-overlay
        content: ''
        display: block
        position: fixed
        top: 0
        left: 0
        bottom: 0
        right: 0
        background: black
        opacity: 0.8

    .hamburger-wrapper
        display: block
        position: relative
        z-index: 999

    .navigation__menu
        display: none

        .menu__item
            margin-top: 1rem
            color: white

            &:hover
                color: gray
                background: none

        &--open
            display: flex
            flex-direction: column
            position: fixed
            left: 50%
            top: 50%
            transform: translate(-50%, -50%)
            z-index: 999

            .menu__nested
                position: initial
                background: none
                box-shadow: none

                .menu__item
                    border: none

</style>