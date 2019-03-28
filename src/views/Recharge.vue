<template>
    <div>
        <the-header :background="require('../assets/images/Recharge_header-01-1920x1280.jpg')">
            <the-navigation />
        </the-header>
        <section class="section">
            <div class="content">
                <div class="awards">
                    <div class="awards__list flex-grid flex-grid--no-resize">
                        <img src="../assets/images/Deloitte-logo.jpg" alt="FDGazellen logo">
                    </div>
                </div>
                <h2 class="section__headline">The future of payment, without borders.</h2>
                <div class="row row--narrow">
                    <div class="col">
                        <p class="bigger-font">Recharge enables everyone to recharge accounts from a mobile device. Currently our focus is on helping expats to support and help loved-ones back home by recharging their mobile accounts from abroad in a few seconds.</p>
                    </div>
                    <div class="col">
                        <p class="bigger-font">The near future of Recharge is a payment app offering the most convenient way to recharge and pay all major living cost from anywhere and by anyone.</p>
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
                <div class="row row--narrow color-light">
                    <p class="col higher-lines margin-s">
                        We offer our customers and partners a powerful and responsive technology. 
                        Our partners trust us to provide great online distribution; 
                        offering regional flexibility and personalised promotions to the end user.
                    </p>
                    <p class="col higher-lines margin-s">
                        Through Rapido, multiple international brands access high-reach media 
                        channels for introductions of new products and boosting special promotions.
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
    import TheNavigation from '../components/TheNavigation.vue'
    import TheHeader from '../components/TheHeader.vue'
    import CtaCard from '../components/CtaCard.vue'
    export default {
        components: {
            TheNavigation,
            TheHeader,
            CtaCard
        },
        metaInfo: {
            title: 'Recharge'
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

.awards__list img
    max-width: 100%
</style>