<template>
    <div>
        <the-header 
            headline="Tomorrow Is Exciting"
            subheadline="A subheadline"
            :background="require('../assets/Home_Header_CG-02-1920x1045.jpg')"
        />
        <section class="section">
            <div class="awards">
                <div class="awards__headline">Awards</div>
                <div class="awards__list flex-grid flex-grid--no-resize">
                    <img src="../assets/FDGazellen-logo.jpg" alt="FDGazellen logo">
                    <img src="../assets/Deloitte-logo.jpg" alt="FDGazellen logo">
                </div>
            </div>
            <div class="separator"></div>
            <h2 class="section__headline">We develop the latest technology for exchanging digital value, and bring it to consumers via market leading international brands</h2>
            <div class="row row--narrow">
                <div class="col">
                    <p class="bigger-font">At Creative Group we help everyone worldwide to purchase, send or exchange digital value as simple and safe as possible.</p>
                    <p class="bigger-font"><strong>How?</strong> With a strong passion for technology and with an entrepreneurial DNA, we have developed the best smart platforms to make the global exchange of digital value as simple and safe as possible.</p>
                </div>
                <div class="col">
                    <p class="bigger-font">Our brands are active in more than 130 countries, processing millions of online transactions to connect the services of our partners with consumers worldwide.</p>
                </div>
            </div>
            <div class="separator"></div>
            <h2 class="section__headline">Our Partners</h2>
            <p class="text-center">Our international business partners trust us to deliver e-commerce best practice and innovative technology to obtain hyper-efficient online distribution worldwide. Our promise to them includes data-driven marketing, the highest levels of order handling, safe payment, fastest delivery, and excellent customer support to ensure their customer’s satisfaction.</p>
            <div class="flex-grid flex-grid--no-resize">
                <img class="partner-logo" src="../assets/Partner-apple-1.jpg" alt="Apple logo">
                <img class="partner-logo" src="../assets/Partner-google-2.jpg" alt="Google logo">
                <img class="partner-logo" src="../assets/Partner-spoty-3.jpg" alt="Spotify logo">
                <img class="partner-logo" src="../assets/Partner-Sony-5.jpg" alt="Sony logo">
                <img class="partner-logo" src="../assets/Partner-xbox-6.jpg" alt="Xbox logo">
                <img class="partner-logo" src="../assets/Partner-nintendo-8.jpg" alt="Nintendo logo">
                <img class="partner-logo" src="../assets/Partner-paysafe-9.jpg" alt="Paysafe logo">
            </div>
        </section>
        <section class="section">
            <h2 class="section__headline">Our Brands</h2>
            <div class="row row--narrow">
                <div class="flex-grid">
                    <cta-card
                        :key="1"
                        class="brand-card flex-grid__brand-card"
                    >
                        <div class="brand-card__body">
                            <img class="brand-card__image" src="../assets/recharge-logo-01.jpg" alt="Recharge logo">
                            <h4 class="brand-card__title">The future of payments</h4>
                            <p>For expats who want to support their loved ones back home and for top-up users on the go, Recharge is the best place for recharging and paying accounts anywhere in the world from a mobile device.</p>
                        </div>
                        <div class="brand-card__footer m-top-l">
                            <router-link :to="{name: 'recharge'}" class="button">Learn more</router-link>
                        </div>
                    </cta-card>
                    <cta-card
                        :key="2"
                        class="brand-card flex-grid__brand-card"
                    >
                        <div class="brand-card__body">
                            <img class="brand-card__image" src="../assets/Rapido_header.jpg" alt="Rapido logo">
                            <h4 class="brand-card__title">Releasing digital value</h4>                            
                            <p>For all top-up users who want to enjoy a continuous service; Rapido is the best and largest online store, with the broadest selection of e-vouchers and the fastest delivery.</p>
                        </div>
                        <div class="brand-card__footer m-top-l">
                            <router-link :to="{name: 'rapido'}" class="button">Learn more</router-link>
                        </div>
                    </cta-card>
                </div>
            </div>
        </section>
        <section 
            class="section text-center" 
            :style="{
                background: `url(${require('../assets/rapido_banner.jpg')}) center no-repeat`,
                backgroundSize: 'cover'
            }">
            <h2>We are always looking for talent</h2>
            <a href="#" class="button m-top-l">See our vacancies</a>
        </section>
    </div>
</template>

<script>
    import TheHeader from '../components/TheHeader.vue';
    import CtaCard from '../components/CtaCard.vue';

    export default {
        components: {
            TheHeader,
            CtaCard
        }
    }
</script>

<style scoped lang="sass">
.awards__headline
    text-transform: uppercase
    text-align: center
    color: gray
    font-weight: bold
    font-size: 1.25rem
    margin-bottom: 40px

.partner-logo
    max-width: 150px
    margin: 10px

.brand-card
    text-align: center
    display: flex
    flex-direction: column
    justify-content: space-between

.brand-card__image
    max-width: 100%

.flex-grid__brand-card
    flex-basis: 40%
    flex-grow: 1
</style>