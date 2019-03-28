<template>
    <div>
        <the-header 
            :background="require('../assets/images/wwu-header-05-1920x904.jpg')"
            headline="Welcome To Our Unique Adventure"
        >
            <the-navigation />
            <template v-slot:cta>
                <a href="#" class="button button--light header__button">See our vacancies</a>
            </template>
        </the-header>
        <section class="section">
            <div class="content">
                <div class="row row--narrow">
                    <div class="col">
                        <p class="bigger-font">We are first movers, continuously changing our playing field, disrupting the way we exchange digital value. We’re transitioning an old, outdated system into the online world of today and tomorrow.</p>
                        <p class="bigger-font">How? With our high-tech platforms upon which everyone around the globe can purchase and exchange digital value quickly, easily and safely.</p>
                    </div>
                    <div class="col">
                        <p class="bigger-font">We’re an ambitious, 100% digital, scalable company ready to fulfill our potential of becoming a unicorn. We’re rapidly growing, with change as the only constant.</p>
                        <p class="bigger-font">We have just a few tickets in place for eager, ambitious, hungry people to join our adventure. These tickets are reserved for people who want to conquer the world with us.</p>
                        <strong>Are you ready for the ride?</strong>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="content">
                <h2 class="section__headline">
                    Tomorrow is exciting. Join the adventure.Only a few tickets left
                </h2>
                <fluid-grid>
                    <template v-slot:col-1>
                        <div>
                            <img :src="require('../assets/images/01.jpg')">
                        </div>
                        <div>
                            <img :src="require('../assets/images/05.jpg')">
                        </div>
                        <div>
                            <img :src="require('../assets/images/08.jpg')">
                        </div>
                        <div>
                            <img :src="require('../assets/images/11.jpg')">
                        </div>
                        <div>
                            <img :src="require('../assets/images/14-1024x1000.jpg')">
                        </div>
                        <div>
                            <img :src="require('../assets/images/17.jpg')">
                        </div>
                        <div>
                            <img :src="require('../assets/images/18.jpg')">
                        </div>
                        <div>
                            <img :src="require('../assets/images/21.jpg')">
                        </div>
                    </template>

                    <template v-slot:col-2>
                        <div>
                            <img :src="require('../assets/images/02-1024x817.jpg')">
                        </div>
                        <div>
                            <img :src="require('../assets/images/04.jpg')">
                        </div>
                        <div>
                            <img :src="require('../assets/images/07.jpg')">
                        </div>
                        <div>
                            <img :src="require('../assets/images/09.jpg')">
                        </div>
                        <div>
                            <img :src="require('../assets/images/12-1024x595.jpg')">
                        </div>
                        <div>
                            <img :src="require('../assets/images/15-683x1024.jpg')">
                        </div>
                        <div>
                            <img :src="require('../assets/images/20.jpg')">
                        </div>
                    </template>
                    <template v-slot:col-3>
                        <div>
                            <img :src="require('../assets/images/03-759x1024.jpg')">
                        </div>
                        <div>
                            <img :src="require('../assets/images/06.jpg')">
                        </div>
                        <div>
                            <img :src="require('../assets/images/10.jpg')">
                        </div>
                        <div>
                            <img :src="require('../assets/images/13.jpg')">
                        </div>
                        <div>
                            <img :src="require('../assets/images/16.jpg')">
                        </div>
                        <div>
                            <img :src="require('../assets/images/19.jpg')">
                        </div>
                        
                    </template>
                </fluid-grid>
            </div>
        </section>
        <section class="section values">
            <div class="content">
                <h2 class="section__headline">
                    What we stand for?
                </h2>
                <p class="bigger-font">
                    We have a strong culture created by passionate, ambitious people sharing the same beliefs. Our values are our essential beliefs, they are our DNA. Everything we do, aim for and create within Creative Group aligns with these values.
                </p>
                <div class="row values__row">
                    <div class="col values__col">
                        <h2>Customers first</h2>
                        <p>
                            Happy, satisfied customers are at the core of what we do. Their needs and thoughts are our engine, our starting point. That’s why we put them first. We listen to our customers and always devote ourselves to satisfying their needs. The best user experience and exceeding our customer’s expectations is number one for us.
                        </p>
                        <h2>Deliver always</h2>
                        <p>Results drive us. We set smart goals, commit and deliver. We look forward: always having our goals in mind, ready for action, creating a better tomorrow. We strive to be as agile as we can possibly be. We test, improve and experiment, step by step, determined to win. We focus and finish, working together towards our goals.</p>
                    </div>
                    <div class="col values__col">
                        <img :src="require('../assets/images/wwu-tile-01.jpg')" alt="Our values">
                    </div>
                </div>
                <div class="row values__row">
                    <div class="col values__col">
                        <img :src="require('../assets/images/wwu-tile-01.jpg')" alt="Our values">
                    </div>
                    <div class="col values__col">
                        <h2>Customers first</h2>
                        <p>
                            Happy, satisfied customers are at the core of what we do. Their needs and thoughts are our engine, our starting point. That’s why we put them first. We listen to our customers and always devote ourselves to satisfying their needs. The best user experience and exceeding our customer’s expectations is number one for us.
                        </p>
                        <h2>Deliver always</h2>
                        <p>Results drive us. We set smart goals, commit and deliver. We look forward: always having our goals in mind, ready for action, creating a better tomorrow. We strive to be as agile as we can possibly be. We test, improve and experiment, step by step, determined to win. We focus and finish, working together towards our goals.</p>
                    </div>
                </div>
            </div>
        </section>
        <section 
            class="section" 
            :style="{
                background: `url(${require('../assets/images/bg-activites-02.jpg')}) 50% 35% no-repeat`,
                backgroundSize: 'cover'
            }">
            <div class="content">
                <h2 class="color-light light-font text-center">
                    Your adventure. We offer you an adventure you will find once in your lifetime.
                    You’ll be a part of our high growth, technology driven, 100% digital, global scale-up company, based in the Netherlands.
                </h2>
                <div class="row row--narrow color-light m-top-l">
                    <p class="col higher-lines margin-s bigger-font">
                        We offer our customers and partners a powerful and responsive technology. 
                        Our partners trust us to provide great online distribution; 
                        offering regional flexibility and personalised promotions to the end user.
                    </p>
                    <p class="col higher-lines margin-s bigger-font">
                        Through Rapido, multiple international brands access high-reach media 
                        channels for introductions of new products and boosting special promotions.
                    </p>
                </div>
            </div>
        </section>
        <section class="section communities">
            <div class="content">
                <div class="row row--narrow">
                    <h2 class="section__headline">As a Creative Group employee, you can be a part of these communities:</h2>
                    <div class="col text-center communities__col">
                        <img :src="require('../assets/images/CG_Active-1-150x150.png')">
                        <h3>CG Active</h3>
                        <p>Take part in the weekly bootcamp or yoga sessions with your team, grab an apple from the fruit basket and be well.</p>
                    </div>
                    <div class="col text-center communities__col">
                        <img :src="require('../assets/images/CG_Active-1-150x150.png')">
                        <h3>CG Active</h3>
                        <p>Take part in the weekly bootcamp or yoga sessions with your team, grab an apple from the fruit basket and be well.</p>
                    </div>
                    <div class="col text-center communities__col">
                        <img :src="require('../assets/images/CG_Active-1-150x150.png')">
                        <h3>CG Active</h3>
                        <p>Take part in the weekly bootcamp or yoga sessions with your team, grab an apple from the fruit basket and be well.</p>
                    </div>
                    <div class="col text-center communities__col">
                        <img :src="require('../assets/images/CG_Active-1-150x150.png')">
                        <h3>CG Active</h3>
                        <p>Take part in the weekly bootcamp or yoga sessions with your team, grab an apple from the fruit basket and be well.</p>
                    </div>
                </div>
                <div class="row row--narrow text-center m-top-l">
                    <div class="col">
                        <h3>When we grow, you grow</h3>
                        <p class="bigger-font">You’ll find new responsibilities and learn from new challenges each and every day. No dullness, guaranteed. We expect a lot from you and you can expect a lot in return. You can expect to learn what it’s like to be an entrepreneur. That’s because you will be one when you join us.</p>
                    </div>
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
                <h2>Ready to change tomorrow? We’re looking forward to meeting you.</h2>
                <a href="#" class="button m-top-l">See our vacancies</a>
            </div>
        </section>
        <section class="section section--dark">
            <div class="content">
                <h2 class="section__headline">From our team</h2>
                <div class="row row--narrow">
                    <hooper :wheelControl="false" v-cloak>
                        <slide>
                            <div class="testimonial">
                                <img class="testimonial__avatar":src="require('../assets/images/Linda-02.jpg')" alt="Linda">
                                <p class="testimonial__intro">My name is Linda and I have been working at Creative Group since December 2016.</p>
                                <p>
                                    I started as a Financial Controller, and half a year later I got a broader role and responsibilities as Manager Finance &amp; Control. From January 2018 onwards, I’ve taken on the role of Chief Financial Officer.
                                </p>
                                <p>
                                    It is my responsibility to take care of the right balance in our growth. I like to work with my team to ensure that we are in control, but also working in a bold way to achieve the longer-term goals for Creative Group. 
                                    The (growth) ambition and the potential of Creative Group is enormous, which is what I love about this company the most! Creative Group is constantly in motion. This brings out financial, fiscal, legal and other challenges. I find myself stimulated on every subject. 
                                </p>
                                <p>
                                    We openly ‘Love Change’. Change can be exciting and bring many opportunities such as big challenges, new collaborations, which all stimulate personal growth. By embracing change, I have managed to achieve rapid personal development, and that makes me proud and grateful for what I’m doing now. 
                                    Finally I would like to mention that big changes in life are inevitable as I've experienced myself - they aren't always positive! But finding a way to be positive even about bad changes is a great way to find strength and purpose. 
                                    Life at Creative Group is a roller coaster, and I really enjoy the ride!
                                </p>
                            </div>
                        </slide>
                        <slide>
                            <div class="testimonial">
                                <img class="testimonial__avatar":src="require('../assets/images/Linda-02.jpg')" alt="Linda">
                                <p class="testimonial__intro">My name is Linda and I have been working at Creative Group since December 2016.</p>
                                <p>
                                    I started as a Financial Controller, and half a year later I got a broader role and responsibilities as Manager Finance &amp; Control. From January 2018 onwards, I’ve taken on the role of Chief Financial Officer.
                                </p>
                                <p>
                                    It is my responsibility to take care of the right balance in our growth. I like to work with my team to ensure that we are in control, but also working in a bold way to achieve the longer-term goals for Creative Group. 
                                    The (growth) ambition and the potential of Creative Group is enormous, which is what I love about this company the most! Creative Group is constantly in motion. This brings out financial, fiscal, legal and other challenges. I find myself stimulated on every subject. 
                                </p>
                                <p>
                                    We openly ‘Love Change’. Change can be exciting and bring many opportunities such as big challenges, new collaborations, which all stimulate personal growth. By embracing change, I have managed to achieve rapid personal development, and that makes me proud and grateful for what I’m doing now. 
                                    Finally I would like to mention that big changes in life are inevitable as I've experienced myself - they aren't always positive! But finding a way to be positive even about bad changes is a great way to find strength and purpose. 
                                    Life at Creative Group is a roller coaster, and I really enjoy the ride!
                                </p>
                            </div>
                        </slide>
                        <slide>
                            <div class="testimonial">
                                <img class="testimonial__avatar":src="require('../assets/images/Linda-02.jpg')" alt="Linda">
                                <p class="testimonial__intro">My name is Linda and I have been working at Creative Group since December 2016.</p>
                                <p>
                                    I started as a Financial Controller, and half a year later I got a broader role and responsibilities as Manager Finance &amp; Control. From January 2018 onwards, I’ve taken on the role of Chief Financial Officer.
                                </p>
                                <p>
                                    It is my responsibility to take care of the right balance in our growth. I like to work with my team to ensure that we are in control, but also working in a bold way to achieve the longer-term goals for Creative Group. 
                                    The (growth) ambition and the potential of Creative Group is enormous, which is what I love about this company the most! Creative Group is constantly in motion. This brings out financial, fiscal, legal and other challenges. I find myself stimulated on every subject. 
                                </p>
                                <p>
                                    We openly ‘Love Change’. Change can be exciting and bring many opportunities such as big challenges, new collaborations, which all stimulate personal growth. By embracing change, I have managed to achieve rapid personal development, and that makes me proud and grateful for what I’m doing now. 
                                    Finally I would like to mention that big changes in life are inevitable as I've experienced myself - they aren't always positive! But finding a way to be positive even about bad changes is a great way to find strength and purpose. 
                                    Life at Creative Group is a roller coaster, and I really enjoy the ride!
                                </p>
                            </div>
                        </slide>
                        <hooper-navigation slot="hooper-addons"></hooper-navigation>
                        <hooper-pagination slot="hooper-addons"></hooper-pagination>
                    </hooper>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import TheNavigation from '../components/TheNavigation.vue'
    import TheHeader from '../components/TheHeader.vue'
    import 'hooper/dist/hooper.css'
    import { 
        Hooper, 
        Slide, 
        Navigation as HooperNavigation,
        Pagination as HooperPagination
    } from 'hooper'
    import FluidGrid from '../components/FluidGrid.vue'

    export default {
        components: {
            TheNavigation,
            TheHeader,
            Hooper,
            Slide,
            HooperNavigation,
            HooperPagination,
            FluidGrid
        },
        metaInfo: {
            title: 'Working With Us'
        }
    }
</script>

<style scoped lang="sass">
.hooper
    height: auto

.header__button:hover
    color: #666 !important

.values__col
    min-width: 280px

.values__col > img
    max-width: 100%
    padding: 25px

.values__row
    align-items: center

.testimonial__intro
    font-weight: bolder

.testimonial__avatar
    float: left
    border-radius: 50%
    width: 180px
    margin: 50px 40px 40px 40px

.communities__col
    max-width: 280px

@media screen and (max-width: 400px)
    .testimonial__avatar
        float: none

</style>