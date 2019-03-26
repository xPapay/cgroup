<template>
    <footer class="footer">
        <div class="content row">
            <div class="col">
                <h2>Contact</h2>
                <p>Amsteldijk 216, 1079 LK Amsterdam</p>
                <p>info@cg.nl</p>
                <p>+31 (0) 88 006 4190</p>
            </div>
            <div class="col">
                <h2>Company</h2>
                <ul class="footer__menu footer-menu" v-for="link in links">
                    <li class="footer-menu__item" :key="link.name"><router-link :to="{name: link.name}">{{ link.label }}</router-link></li>
                </ul>
            </div>
            <div class="separator"></div>
            <div class="footer__copyright">
                <small>© 2019 Creative Group. All right reserved.</small>
                <div>
                    <small><a href="#">Cookie Policy</a> - <a href="#">Sitemap</a></small>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import { linksMixin } from '../mixins/LinksMixin.js'
    export default {
        mixins: [linksMixin]
    }
</script>

<style scoped lang="sass">
.footer
    padding: 20px
    background: #2c3e50
    color: white

.footer__menu
    list-style: none
    padding: 0

.footer-menu__item
    color: #00b9f2
    margin: 20px 0
    text-transform: capitalize

.footer-menu__item > a
    padding: 5px 0

.footer a
    transition: color .3s

.footer a:hover
    color: #00b9f2

</style>