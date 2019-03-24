<template>
    <div class="card">
        <header class="card__header">
            <slot name="image" class="card__header"></slot>
        </header>
        <div class="card__body">
            <h3 class="card__title">The future of payments.</h3>
            <p>For expats who want to support their loved ones back home and for top-up users on the go, Recharge is the best place for recharging and paying accounts anywhere in the world from a mobile device.</p>
        </div>
        <div class="card__button">
            <a href="#" class="button">Learn more</a>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="sass">
.card
    background: white
    padding: 15px

.card__header
    min-height: 220px

    & > img
        max-width: 100%

.card__button
    text-align: center
    margin: 40px auto 15px
</style>