<template>
    <div>
        <the-header :background="require('../assets/Rapido_header-1920x1280.jpg')">
            <the-navigation />
        </the-header>
        <section class="section">
            <div class="awards">
                <div class="flex-grid flex-grid--no-resize">
                    <img src="../assets/FDGazellen-logo.jpg" alt="FDGazellen logo">
                </div>
            </div>
            <h2 class="section__headline">Transitioning the top-up market from offline to the online space</h2>
            <div class="row row--narrow">
                <div class="col">
                    <p class="bigger-font">Rapido is the best and largest online top-up store, with the broadest selection of e-vouchers and a strong promise of fastest delivery, enabling a continued service without interruptions for top-up users worldwide.</p>
                </div>
                <div class="col">
                    <p class="bigger-font">With the Rapido platform and its strong digital marketing engine, we un-tap new markets and discover new customer segments for our partners, supporting them in their expansion globally. Rapido operates in multiple countries with highly localised websites to provide customers with the most accessible and convenient experience, ensuring their satisfaction and repeat purchase.</p>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="flex-grid features">
                <cta-card 
                    :key="1"
                    headline="Cutting-edge technology"
                    subheadline="Our mentality for technology is a central driver of our journey"
                    class="features__card"
                >
                    <template v-slot:image>
                        <img :src="require('../assets/Icon-1-Tech-150x150.jpg')">
                    </template>
                    <template>
                        <p class="features-card__text">To handle millions of orders worldwide each day, we’ve created our own software solution based on open source technology. By using a highly modular and service-oriented architecture, we are able to continuously update and improve the user experience of our multiple brands online.</p>
                    </template>
                </cta-card>
                <cta-card 
                    :key="2"
                    headline="Cutting-edge technology"
                    subheadline="Our mentality for technology is a central driver of our journey"
                    class="features__card"
                >
                    <template v-slot:image>
                        <img :src="require('../assets/Icon-1-Tech-150x150.jpg')">
                    </template>
                    <template>
                        <p class="features-card__text">To handle millions of orders worldwide each day, we’ve created our own software solution based on open source technology. By using a highly modular and service-oriented architecture, we are able to continuously update and improve the user experience of our multiple brands online.</p>
                    </template>
                </cta-card>
                <cta-card 
                    :key="3"
                    headline="Cutting-edge technology"
                    subheadline="Our mentality for technology is a central driver of our journey"
                    class="features__card"
                >
                    <template v-slot:image>
                        <img :src="require('../assets/Icon-1-Tech-150x150.jpg')">
                    </template>
                    <template>
                        <p class="features-card__text">To handle millions of orders worldwide each day, we’ve created our own software solution based on open source technology. By using a highly modular and service-oriented architecture, we are able to continuously update and improve the user experience of our multiple brands online.</p>
                    </template>
                </cta-card>
                <cta-card 
                    :key="4"
                    headline="Cutting-edge technology"
                    subheadline="Our mentality for technology is a central driver of our journey"
                    class="features__card"
                >
                    <template v-slot:image>
                        <img :src="require('../assets/Icon-1-Tech-150x150.jpg')">
                    </template>
                    <template>
                        <p class="features-card__text">To handle millions of orders worldwide each day, we’ve created our own software solution based on open source technology. By using a highly modular and service-oriented architecture, we are able to continuously update and improve the user experience of our multiple brands online.</p>
                    </template>
                </cta-card>
                <cta-card 
                    :key="5"
                    headline="Cutting-edge technology"
                    subheadline="Our mentality for technology is a central driver of our journey"
                    class="features__card"
                >
                    <template v-slot:image>
                        <img :src="require('../assets/Icon-1-Tech-150x150.jpg')">
                    </template>
                    <template>
                        <p class="features-card__text">To handle millions of orders worldwide each day, we’ve created our own software solution based on open source technology.</p>
                    </template>
                </cta-card>
            </div>
        </section>
        <section 
            class="section" 
            :style="{
                background: `url(${require('../assets/rapido_Behind_Copy-03.jpg')}) 50% 35% no-repeat`,
                backgroundSize: 'cover'
            }">
            <h2 class="color-light light-font text-center">Rapido is a certified platform for iTunes, Google Play, Sony PSN, Xbox, Netflix, Spotify and many other leading brands in entertainment, telecom, gaming and the prepaid credit industry.</h2>
            <div class="flex color-light">
                <p class="higher-lines margin-s">
                    We offer our customers and partners a powerful and responsive technology. 
                    Our partners trust us to provide great online distribution; 
                    offering regional flexibility and personalised promotions to the end user.
                </p>
                <p class="higher-lines margin-s">
                    Through Rapido, multiple international brands access high-reach media 
                    channels for introductions of new products and boosting special promotions.
                </p>
                <p class="higher-lines margin-s">
                    In many countries, Rapido is the preferred brand for ongoing top-up purchases 
                    by consumers. Customers love us for our large product assortment, 
                    instant delivery and great seasonal promotions.
                </p>
            </div>
        </section>
        <section 
            class="section text-center" 
            :style="{
                background: `url(${require('../assets/rapido_banner.jpg')}) center no-repeat`,
                backgroundSize: 'cover'
            }">
            <h2>We are always looking for talent</h2>
            <a href="#" class="button margin-s">See our vacancies</a>
            or
            <a href="#" class="button button--light margin-s">Visit the Rapido website</a>            
        </section>
    </div>
</template>

<script>
    import TheHeader from '../components/TheHeader.vue';
    import TheNavigation from '../components/TheNavigation.vue';
    import CtaCard from '../components/CtaCard.vue';
    export default {
        components: {
            TheHeader,
            TheNavigation,
            CtaCard
        }
    }
</script>

<style scoped lang="sass">
.features__card
    flex-basis: 30%
    min-width: 280px
    margin-top: 30px

.features-card__text
    text-align: justify
</style>