<template>
    <div>
        <the-header :background="require('../assets/images/Rapido_header-1920x1280.jpg')">
            <the-navigation />
        </the-header>
        <section class="section">
            <div class="content">
                <div class="awards">
                    <div class="flex-grid flex-grid--no-resize">
                        <img src="../assets/images/FDGazellen-logo.jpg" alt="FDGazellen logo">
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
            </div>
        </section>
        <section 
            class="section" 
            :style="{
                background: `url(${require('../assets/images/rapido_Behind_Copy-03.jpg')}) 50% 35% no-repeat`,
                backgroundSize: 'cover'
            }">
            <div class="content">
                <h2 class="color-light light-font text-center">Rapido is a certified platform for iTunes, Google Play, Sony PSN, Xbox, Netflix, Spotify and many other leading brands in entertainment, telecom, gaming and the prepaid credit industry.</h2>
                <div class="flex-grid color-light">
                    <p class="higher-lines margin-s min-w-180 col-3">
                        We offer our customers and partners a powerful and responsive technology. 
                        Our partners trust us to provide great online distribution; 
                        offering regional flexibility and personalised promotions to the end user.
                    </p>
                    <p class="higher-lines margin-s min-w-180 col-3">
                        Through Rapido, multiple international brands access high-reach media 
                        channels for introductions of new products and boosting special promotions.
                    </p>
                    <p class="higher-lines margin-s min-w-180 col-3">
                        In many countries, Rapido is the preferred brand for ongoing top-up purchases 
                        by consumers. Customers love us for our large product assortment, 
                        instant delivery and great seasonal promotions.
                    </p>
                </div>
            </div>
        </section>
        <section 
            class="section text-center" 
            :style="{
                background: `url(${require('../assets/images/rapido_banner.jpg')}) center no-repeat`,
                backgroundSize: 'cover'
            }">
            <div class="content">
                <h2>We are always looking for talent</h2>
                <a href="#" class="button margin-s">See our vacancies</a>
                or
                <a href="#" class="button button--light margin-s">Visit the Rapido website</a>  
            </div>          
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
        },
        metaInfo: {
            title: 'Rapido'
        }
    }
</script>

<style scoped lang="sass">
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