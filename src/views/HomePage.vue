<template>
    <div>
        <the-header 
            headline="Tomorrow Is Exciting"
            subheadline="A subheadline"
        >
            <the-navigation />
        </the-header>
        <section class="section">
            <div class="awards">
                <div class="awards__headline">Awards</div>
                <div class="awards__list flex-grid flex-grid--no-resize">
                    <img src="../assets/FDGazellen-logo.jpg" alt="FDGazellen logo">
                    <img src="../assets/Deloitte-logo.jpg" alt="FDGazellen logo">
                </div>
            </div>
            <div class="section__separator"></div>
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
            <div class="section__separator"></div>
            <h2 class="section__headline">Our Partners</h2>
            <p>Our international business partners trust us to deliver e-commerce best practice and innovative technology to obtain hyper-efficient online distribution worldwide. Our promise to them includes data-driven marketing, the highest levels of order handling, safe payment, fastest delivery, and excellent customer support to ensure their customer’s satisfaction.</p>
            <div class="flex-grid flex-grid--no-resize">
                <img class="partner-logo" src="../assets/Partner-apple-1.jpg" alt="Apple logo">
                <img class="partner-logo" src="../assets/Partner-google-2.jpg" alt="Google logo">
                <img class="partner-logo" src="../assets/Partner-spoty-3.jpg" alt="Spotify logo">
                <img class="partner-logo" src="../assets/Partner-Sony-5.jpg" alt="Sony logo">
                <img class="partner-logo" src="../assets/Partner-xbox-6.jpg" alt="Xbox logo">
            </div>
        </section>
        <section class="section">
            <h2 class="section__headline">Our Brands</h2>
            <div class="row row--narrow">
                <div class="col">
                    <cta-card>
                        <template v-slot:image>
                            <img src="../assets/recharge-logo-01.jpg" alt="Recharge logo">
                        </template>
                    </cta-card>
                </div>
                <div class="col">
                    <cta-card>
                        <template v-slot:image>
                            <img src="../assets/Rapido_header.jpg" alt="Rapido logo">
                        </template>
                    </cta-card>
                </div>
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
</style>