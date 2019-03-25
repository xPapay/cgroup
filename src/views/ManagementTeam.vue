<template>
    <div>
        <the-header :background="require('../assets/Hero_Image-05-1920x714.png')">
            <the-navigation />
        </the-header>
        <section class="section section--dark">
            <h2 class="section__headline">Meet the management team</h2>
            <div class="flex-grid">
                <cta-card
                    key="1"
                    class="feature-card flex-grid__feature-card"
                >
                    <img class="feature-card__image" :src="require('../assets/Gunther_Profile-1-255x255.jpg')">                
                    <h3 class="feature-card__title">Günther Vogelpoel</h3>
                    <h4 class="feature-card__subtitle muted-text">CEO</h4>
                    <p class="feature-card__text">Günther (48) is an experienced CEO with background in the telecoms industry and as a market challenger. He is one of the main idealists behind our future plans and a great team activator keeping us focused.</p>
                    <p class="feature-card__text">He joined Creative Group in May of 2017 to accelerate our growth and lead us in our global expansion.</p>
                </cta-card>
                <cta-card
                    key="2"
                    class="feature-card flex-grid__feature-card"
                >
                    <img class="feature-card__image" :src="require('../assets/Linda_Profile-1-255x255.jpg')">                
                    <h3 class="feature-card__title">Günther Vogelpoel</h3>
                    <h4 class="feature-card__subtitle muted-text">CEO</h4>
                    <p class="feature-card__text">Günther (48) is an experienced CEO with background in the telecoms industry and as a market challenger. He is one of the main idealists behind our future plans and a great team activator keeping us focused.</p>
                    <p class="feature-card__text">He joined Creative Group in May of 2017 to accelerate our growth and lead us in our global expansion.</p>
                </cta-card>
                <cta-card
                    key="3"
                    class="feature-card flex-grid__feature-card"
                >
                    <img class="feature-card__image" :src="require('../assets/Bas_Photo-255x255.jpg')">                
                    <h3 class="feature-card__title">Günther Vogelpoel</h3>
                    <h4 class="feature-card__subtitle muted-text">CEO</h4>
                    <p class="feature-card__text">Günther (48) is an experienced CEO with background in the telecoms industry and as a market challenger. He is one of the main idealists behind our future plans and a great team activator keeping us focused.</p>
                    <p class="feature-card__text">He joined Creative Group in May of 2017 to accelerate our growth and lead us in our global expansion.</p>
                </cta-card>
                <cta-card
                    key="4"
                    class="feature-card flex-grid__feature-card"
                >
                    <img class="feature-card__image" :src="require('../assets/Martijn_Profile-1-255x255.jpg')">                
                    <h3 class="feature-card__title">Günther Vogelpoel</h3>
                    <h4 class="feature-card__subtitle muted-text">CEO</h4>
                    <p class="feature-card__text">Günther (48) is an experienced CEO with background in the telecoms industry and as a market challenger. He is one of the main idealists behind our future plans and a great team activator keeping us focused.</p>
                    <p class="feature-card__text">He joined Creative Group in May of 2017 to accelerate our growth and lead us in our global expansion.</p>
                </cta-card>
                <cta-card
                    key="5"
                    class="feature-card flex-grid__feature-card"
                >
                    <img class="feature-card__image" :src="require('../assets/Wibo_Profile-1-255x255.jpg')">                
                    <h3 class="feature-card__title">Günther Vogelpoel</h3>
                    <h4 class="feature-card__subtitle muted-text">CEO</h4>
                    <p class="feature-card__text">Günther (48) is an experienced CEO with background in the telecoms industry and as a market challenger. He is one of the main idealists behind our future plans and a great team activator keeping us focused.</p>
                    <p class="feature-card__text">He joined Creative Group in May of 2017 to accelerate our growth and lead us in our global expansion.</p>
                </cta-card>
                <cta-card
                    key="6"
                    class="feature-card flex-grid__feature-card"
                >
                    <img class="feature-card__image" :src="require('../assets/Martine_Profile-1-255x255.jpg')">                
                    <h3 class="feature-card__title">Günther Vogelpoel</h3>
                    <h4 class="feature-card__subtitle muted-text">CEO</h4>
                    <p class="feature-card__text">Günther (48) is an experienced CEO with background in the telecoms industry and as a market challenger. He is one of the main idealists behind our future plans and a great team activator keeping us focused.</p>
                    <p class="feature-card__text">He joined Creative Group in May of 2017 to accelerate our growth and lead us in our global expansion.</p>
                </cta-card>
            </div>
        </section>
    </div>
</template>

<script>
    import TheHeader from '../components/TheHeader.vue'
    import TheNavigation from '../components/TheNavigation.vue'
    import CtaCard from '../components/CtaCard.vue'
    export default {
        components: {
            TheHeader,
            TheNavigation,
            CtaCard
        }
    }
</script>

<style scoped lang="sass">
.feature-card
    text-align: center
    min-width: 250px
    max-width: 400px

.feature-card__text
    text-align: justify

.feature-card__image
    width: 100%

.flex-grid__feature-card
    flex-basis: 30%
    flex-grow: 1
    margin: 1.5rem 10px
</style>