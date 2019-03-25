<template>
    <div>
        <the-header :background="require('../assets/Collage_31.jpg')">
            <the-navigation />
        </the-header>
        <section class="section contact">
            <div class="row">
                <div class="col col-map">
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Amsteldijk%20216%2C%201079%20LK%20Amsterdam&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            </iframe>
                        </div>
                    </div>
                </div>
                <div class="col col-contact-form">
                    <div class="contact-info">
                        <div class="address"><i class="icon icon-marker"/>Address: Amsteldijk 216, 1079 LK Amsterdam</div>
                        <div class="phone"><i class="icon icon-phone"/>Phone: +31 (0) 88 006 4190</div>
                        <div class="email"><i class="icon icon-envelope"/>E-mail: info@cg.nl</div>
                    </div>
                    <div class="separator"></div>
                    <h3>Send us a message</h3>
                    <contact-form class="contact-form"/>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import TheNavigation from '../components/TheNavigation.vue'
    import TheHeader from '../components/TheHeader.vue'
    import ContactForm from '../components/ContactForm.vue';

    export default {
        components: {
            TheNavigation,
            TheHeader,
            ContactForm
        }
    }
</script>

<style scoped lang="sass">
.mapouter
    position: relative
    text-align: right
    height: 100%
    width: 100%


.gmap_canvas 
    overflow: hidden
    background: none !important
    height: 100%
    width: 100%

.col
    margin-top: 1rem

.col-map
    min-height: 500px
    flex-basis: 60%

.col-contact-form
    flex-basis: 30%
    margin-left: 2rem

.contact-info > *
    margin-bottom: 1rem

.icon
    font-size: 1.5rem
    vertical-align: middle
    margin-right: 0.75rem
</style>