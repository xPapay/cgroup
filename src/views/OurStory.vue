<template>
    <div>
        <the-header
            headline="A Journey Of Creative Disruption"
            subheadline="Leading The Exchange Of Digital Value Internationally"
            :background="require('../assets/images/OurStory_Header_05.jpg')"
        >
            <the-navigation />
        </the-header>
        <section class="section">
            <div class="content">
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
                        <li v-for="image in images" :key="image.name" class="our-story-gallery__item">
                            <img 
                                :src="image.name" 
                                :alt="image.alt"
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
            </div>
        </section>
        <section class="section">
            <div class="content flex-grid">
                <cta-card
                    :key="1"
                    class="feature-card flex-grid__feature-card"
                >
                    <img :src="require('../assets/images/Icon-1-Tech-150x150.jpg')">                
                    <h2 class="feature-card__title">Cutting-edge technology</h2>
                    <h4 class="feature-card__subtitle">Our mentality for technology is a central driver of our journey</h4>
                    <p class="feature-card__text">To handle millions of orders worldwide each day, we’ve created our own software solution based on open source technology. By using a highly modular and service-oriented architecture, we are able to continuously update and improve the user experience of our multiple brands online.</p>
                </cta-card>
                <cta-card
                    :key="2"
                    class="feature-card flex-grid__feature-card"
                >
                    <img :src="require('../assets/images/Icon-1-Tech-150x150.jpg')">                
                    <h2 class="feature-card__title">Cutting-edge technology</h2>
                    <h4 class="feature-card__subtitle">Our mentality for technology is a central driver of our journey</h4>
                    <p class="feature-card__text">To handle millions of orders worldwide each day, we’ve created our own software solution based on open source technology. By using a highly modular and service-oriented architecture, we are able to continuously update and improve the user experience of our multiple brands online.</p>
                </cta-card>
                <cta-card
                    :key="3"
                    class="feature-card flex-grid__feature-card"
                >
                    <img :src="require('../assets/images/Icon-1-Tech-150x150.jpg')">                
                    <h2 class="feature-card__title">Cutting-edge technology</h2>
                    <h4 class="feature-card__subtitle">Our mentality for technology is a central driver of our journey</h4>
                    <p class="feature-card__text">To handle millions of orders worldwide each day, we’ve created our own software solution based on open source technology. By using a highly modular and service-oriented architecture, we are able to continuously update and improve the user experience of our multiple brands online.</p>
                </cta-card>
                <cta-card
                    :key="4"
                    class="feature-card flex-grid__feature-card"
                >
                    <img :src="require('../assets/images/Icon-1-Tech-150x150.jpg')">                
                    <h2 class="feature-card__title">Cutting-edge technology</h2>
                    <h4 class="feature-card__subtitle">Our mentality for technology is a central driver of our journey</h4>
                    <p class="feature-card__text">To handle millions of orders worldwide each day, we’ve created our own software solution based on open source technology. By using a highly modular and service-oriented architecture, we are able to continuously update and improve the user experience of our multiple brands online.</p>
                </cta-card>
                <cta-card
                    :key="5"
                    class="feature-card flex-grid__feature-card"
                >
                    <img :src="require('../assets/images/Icon-1-Tech-150x150.jpg')">                
                    <h2 class="feature-card__title">Cutting-edge technology</h2>
                    <h4 class="feature-card__subtitle">Our mentality for technology is a central driver of our journey</h4>
                    <p class="feature-card__text">To handle millions of orders worldwide each day, we’ve created our own software solution based on open source technology. By using a highly modular and service-oriented architecture, we are able to continuously update and improve the user experience of our multiple brands online.</p>
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
                    {name: require('../assets/images/OurStory_thumb_06.jpg'), alt: "Creative's group story"},
                    {name: require('../assets/images/OurStory_thumb_05.jpg'), alt: "Creative's group story"},
                    {name: require('../assets/images/OurStory_thumb_04.jpg'), alt: "Creative's group story"},
                    {name: require('../assets/images/OurStory_thumb_03.jpg'), alt: "Creative's group story"}
                ]
            }
        },
        methods: {
            showLightbox(imageName) {
                this.$refs.lightbox.show(imageName)
            }
        },
        metaInfo: {
            title: 'Our Story'
        }
    }
</script>

<style scoped lang="sass">
.our-story-gallery
    justify-content: space-between

.our-story-gallery__item
    cursor: pointer
    flex-basis: 22%
    min-width: 150px
    flex-grow: 1
    margin: 10px

    img
        max-width: 100%

.feature-card
    text-align: center
    min-width: 280px
    max-width: 400px

.feature-card__title
    color: #00b9f2
    font-size: 2rem
    font-weight: normal

.feature-card__text
    text-align: justify

.feature-card__image
    max-width: 100%

.flex-grid__feature-card
    flex-basis: 30%
    flex-grow: 1
    margin: 1.5rem 10px
</style>