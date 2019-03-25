<template>
    <div>
        <the-header
            headline="A Journey Of Creative Disruption"
            subheadline="Leading The Exchange Of Digital Value Internationally"
            :background="require('../assets/OurStory_Header_05.jpg')"
        >
            <the-navigation />
        </the-header>
        <section class="section">
            <h2 class="section__headline">Since the start of our journey, we have disrupted several markets by developing new solutions for the exchange of digital value.</h2>
            <div class="row row--narrow">
                <div class="col">
                    <p class="bigger-font">The Creative Group was founded by Dutch entrepreneurs Robin Weesie and Dirk Ueberbach, who are still around to advise us from time to time.</p>
                    <p class="bigger-font">In the last 5 years, we have been growing rapidly by opening up new markets, adding multiple services to our offering and engaging with new customers online.</p>
                </div>
                <div class="col">
                    <p class="bigger-font">We started in the Netherlands as the first e-voucher website. Today, we operate multiple brands in more than 130 countries from our Amsterdam and Nijmegen offices.</p>
                </div>
            </div>
            <div class="row row--narrow">
                <ul class="col flex-grid flex-grid--no-resize our-story-gallery">
                    <li v-for="image in images" :key="image.name">
                        <img 
                            :src="image.name" 
                            :alt="image.alt"
                            class="our-story-gallery__item"
                            @click="showLightbox(image.name)" 
                        >
                    </li>
                </ul>
            </div>
            <no-ssr>
                <lightbox
                    id="my-lightbox"
                    ref="lightbox"
                    :images="images"
                />
            </no-ssr>
        </section>
        <section class="section">
            <div class="flex-grid why-us">
                <cta-card 
                    :key="1"
                    headline="Cutting-edge technology"
                    subheadline="Our mentality for technology is a central driver of our journey"
                    class="why-us__card"
                >
                    <template v-slot:image>
                        <img :src="require('../assets/Icon-1-Tech-150x150.jpg')">
                    </template>
                    <template>
                        <p class="why-us-card__text">To handle millions of orders worldwide each day, we’ve created our own software solution based on open source technology. By using a highly modular and service-oriented architecture, we are able to continuously update and improve the user experience of our multiple brands online.</p>
                    </template>
                </cta-card>
                <cta-card 
                    :key="2"
                    headline="Cutting-edge technology"
                    subheadline="Our mentality for technology is a central driver of our journey"
                    class="why-us__card"
                >
                    <template v-slot:image>
                        <img :src="require('../assets/Icon-1-Tech-150x150.jpg')">
                    </template>
                    <template>
                        <p class="why-us-card__text">To handle millions of orders worldwide each day, we’ve created our own software solution based on open source technology. By using a highly modular and service-oriented architecture, we are able to continuously update and improve the user experience of our multiple brands online.</p>
                    </template>
                </cta-card>
                <cta-card 
                    :key="3"
                    headline="Cutting-edge technology"
                    subheadline="Our mentality for technology is a central driver of our journey"
                    class="why-us__card"
                >
                    <template v-slot:image>
                        <img :src="require('../assets/Icon-1-Tech-150x150.jpg')">
                    </template>
                    <template>
                        <p class="why-us-card__text">To handle millions of orders worldwide each day, we’ve created our own software solution based on open source technology. By using a highly modular and service-oriented architecture, we are able to continuously update and improve the user experience of our multiple brands online.</p>
                    </template>
                </cta-card>
                <cta-card 
                    :key="4"
                    headline="Cutting-edge technology"
                    subheadline="Our mentality for technology is a central driver of our journey"
                    class="why-us__card"
                >
                    <template v-slot:image>
                        <img :src="require('../assets/Icon-1-Tech-150x150.jpg')">
                    </template>
                    <template>
                        <p class="why-us-card__text">To handle millions of orders worldwide each day, we’ve created our own software solution based on open source technology. By using a highly modular and service-oriented architecture, we are able to continuously update and improve the user experience of our multiple brands online.</p>
                    </template>
                </cta-card>
                <cta-card 
                    :key="5"
                    headline="Cutting-edge technology"
                    subheadline="Our mentality for technology is a central driver of our journey"
                    class="why-us__card"
                >
                    <template v-slot:image>
                        <img :src="require('../assets/Icon-1-Tech-150x150.jpg')">
                    </template>
                    <template>
                        <p class="why-us-card__text">To handle millions of orders worldwide each day, we’ve created our own software solution based on open source technology.</p>
                    </template>
                </cta-card>
            </div>
        </section>
    </div>
</template>

<script>
    import TheNavigation from '../components/TheNavigation.vue'
    import TheHeader from '../components/TheHeader.vue'
    import CtaCard from '../components/CtaCard.vue'
    import NoSSR from 'vue-no-ssr'
    import Lightbox from 'vue-my-photos'
    export default {
        components: {
            TheNavigation,
            TheHeader,
            CtaCard,
            Lightbox,
            'no-ssr': NoSSR
        },
        computed: {
            images() {
                return [
                    {name: require('../assets/OurStory_thumb_06.jpg'), alt: "Creative's group story"},
                    {name: require('../assets/OurStory_thumb_05.jpg'), alt: "Creative's group story"},
                    {name: require('../assets/OurStory_thumb_04.jpg'), alt: "Creative's group story"},
                    {name: require('../assets/OurStory_thumb_03.jpg'), alt: "Creative's group story"}
                ]
            }
        },
        methods: {
            showLightbox(imageName) {
                this.$refs.lightbox.show(imageName)
            }
        }
    }
</script>

<style scoped lang="sass">
.our-story-gallery
    justify-content: space-between

.our-story-gallery__item
    max-width: 180px
    cursor: pointer

.why-us__card
    flex-basis: 30%
    min-width: 280px
    margin-top: 30px

.why-us-card__text
    text-align: justify
</style>