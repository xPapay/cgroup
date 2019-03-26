<template>
    <div>
        <the-header :background="require('../assets/tech-header-01.jpg')">
            <the-navigation />
        </the-header>
        <section class="section tech-insights">
            <div class="content">
                <h2 class="section__headline">Insights into our technology</h2>
                <div class="row row--narrow bigger-font">
                    <div class="col tech-insights__col">
                        <p>
                            Our technology has been key to our commercial success. Putting our customers first and delivering a fast user experience is at the centre of our technology developments.
                        </p>
                        <p>
                            To handle the multitude of orders worldwide each day, we’ve created our own proprietary software solution based on open source technology. By using a highly modular service oriented architecture we’re able to reuse components for our different e-commerce platforms.
                        </p>
                    </div>
                    <div class="col tech-insights__col">
                        <p>
                            The tech department consist of about 20 colleagues and is rapidly growing. To date we have developers, test engineers, scrum masters, system administrators and an architect on board. We work with self-organizing Scrum teams. Every single one of them is focused on technological improvements.
                        </p>
                        <p>
                            Each month we climb up the technological ladder to do things better, faster and simpler. Our open and informal culture is an important success factor to this.
                        </p>
                    </div>
                </div>
                <div class="row row--narrow bigger-font">
                    <div class="col tech-insights__col">
                        <p>In our growing company there is always room for like-minded people, so take a look at our <a href="https://tech.cg.nl/jobs/" target="_blank" rel="noopener">career opportunities</a>.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="content text-center">
                <h2 class="section__headline">Roadmap</h2>
                <div class="row row--narrow">
                    <strong class="bigger-font">At Creative Group we are continuously innovating our platform and building new features for our business.</strong>
                    <p class="bigger-font">As a tech company, we believe that improvements to our platform are essential to keep it future proof. It ensures high quality of our services to the customers, it enables growth and it’s fun to work on. To achieve this, we work with a roadmap focused on technology we want to adopt or improve.</p>
                    <p class="bigger-font">This year, the main goal of the tech roadmap is scalability. We want to make our platform ready for a tenfold increase in visitors and ensure a fast user experience in certain regions in the world. Also, as we grow in office space and number of employees, we need to make sure that every tech employee is able to work on our platform while increasing its quality.</p>
                </div>
            </div>
        </section>
        <section class="section microservices">
            <div class="content">
                <h2 class="section__headline text-left">Microservices</h2>
                <div class="row">
                    <div class="col">
                        <strong class="bigger-font">At Creative Group we are continuously innovating our platform and building new features for our business.</strong>
                        <div class="row">
                            <div class="col microservices__col">
                                <p>
                                    Our PSP was integrated in each one of those platforms. However, when we switched to another PSP, we extracted this functionality into a payment gateway. This is how our first service was born. This approach enabled the reuse of our technology and made maintenance easier. Until 2015 when we came in contact with micro services.
                                </p>
                            </div>
                            <div class="col microservices__col">
                                <p>
                                    We were quickly convinced by its advantages over our current service-oriented architecture and decided to work towards this in the coming years. This year we have put our first true micro services into production and prepare for the orchestration of a large amount of micro services.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col text-right">
                        <img :src="require('../assets/microservices-01.jpg')">
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="content">
                <div class="row">
                    <div class="col">
                        <img :src="require('../assets/cloud-01.png')">
                    </div>
                    <div class="col">
                        <h2 class="section__headline text-left">Cloud</h2>
                        <strong class="bigger-font">At Creative Group we are continuously innovating our platform and building new features for our business.</strong>
                        <div class="row">
                            <div class="col microservices__col">
                                <p>
                                    Our PSP was integrated in each one of those platforms. However, when we switched to another PSP, we extracted this functionality into a payment gateway. This is how our first service was born. This approach enabled the reuse of our technology and made maintenance easier. Until 2015 when we came in contact with micro services.
                                </p>
                            </div>
                            <div class="col microservices__col">
                                <p>
                                    We were quickly convinced by its advantages over our current service-oriented architecture and decided to work towards this in the coming years. This year we have put our first true micro services into production and prepare for the orchestration of a large amount of micro services.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="content">
                <div class="row">
                    <div class="col microservices__col">
                        <h2>Test automation</h2>
                        <strong class="bigger-font">How do we guarantee quality in an ever-changing environment and keep our time-to-market as short as possible?</strong>
                        <p>
                            We focus on achieving a good balance between manual and automatic testing. For our functional automated tests, we are working hard on establishing the testing pyramid, which focuses mostly on unit and integration tests and to a lesser extent on user-interface tests. For unit testing we currently use Rspec and PHPUnit and for user-interface testing we use Cypress. Besides functional testing we are also about to start automated non-functional testing.
                        </p>
                        <p>
                            For us this means that we primarily focus on performance, usability on mobile devices and recoverability. While test automation is essential for our success, so is manual testing. All new features are tested manually as we believe that test automation only is not enough to provide the pleasant journey that we’d always want our customers to experience.
                        </p>
                    </div>
                    <div class="col microservices__col">
                        <h2>Test automation</h2>
                        <strong class="bigger-font">How do we guarantee quality in an ever-changing environment and keep our time-to-market as short as possible?</strong>
                        <p>
                            We focus on achieving a good balance between manual and automatic testing. For our functional automated tests, we are working hard on establishing the testing pyramid, which focuses mostly on unit and integration tests and to a lesser extent on user-interface tests. For unit testing we currently use Rspec and PHPUnit and for user-interface testing we use Cypress. Besides functional testing we are also about to start automated non-functional testing.
                        </p>
                        <p>
                            For us this means that we primarily focus on performance, usability on mobile devices and recoverability. While test automation is essential for our success, so is manual testing. All new features are tested manually as we believe that test automation only is not enough to provide the pleasant journey that we’d always want our customers to experience.
                        </p>
                    </div>
                </div>
                <div class="separator"></div>
                <div class="flex-grid flex-grid--no-resize">
                    <img class="partner-logo" src="../assets/Partner-apple-1.jpg" alt="Apple logo">
                    <img class="partner-logo" src="../assets/Partner-google-2.jpg" alt="Google logo">
                    <img class="partner-logo" src="../assets/Partner-spoty-3.jpg" alt="Spotify logo">
                    <img class="partner-logo" src="../assets/Partner-Sony-5.jpg" alt="Sony logo">
                    <img class="partner-logo" src="../assets/Partner-xbox-6.jpg" alt="Xbox logo">
                    <img class="partner-logo" src="../assets/Partner-nintendo-8.jpg" alt="Nintendo logo">
                    <img class="partner-logo" src="../assets/Partner-paysafe-9.jpg" alt="Paysafe logo">
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import TheNavigation from '../components/TheNavigation.vue'
    import TheHeader from '../components/TheHeader.vue'
    export default {
        components: {
            TheNavigation,
            TheHeader
        }
    }
</script>

<style scoped lang="sass">
.tech-insights__col
    padding: 0 1rem

.microservices__col
    min-width: 250px
    margin-right: 1rem
</style>