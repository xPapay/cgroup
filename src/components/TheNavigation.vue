<template>
    <nav class="navigation" :class="{'navigation--attached': isAttached}" ref="navigation">
        <router-link :to="{name: 'home'}" class="navigation__logo">
            <img :src="isAttached ? require('../assets/logo-light-type-246x60.png') : require('../assets/cg-logo.png')" alt="logo">
        </router-link>
        <div class="menu-wrapper">
            <hamburger-menu :open="mobileMenuOpen" @click="mobileMenuOpen = !mobileMenuOpen" />
            <ul class="navigation__menu menu">
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
    margin-left: 1rem

    & a
        padding: 10px

    &:hover
        color: gray
    
    &:hover .menu__nested
        max-height: 100px

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

        &:hover
            background: lightgray

.router-link-active
    color: #00b9f2
</style>