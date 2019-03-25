<template>
    <div class="card">
        <header class="card__header">
            <slot name="image" class="card__header"></slot>
        </header>
        <div class="card__body">
            <h2 class="card__headline" v-if="headline" v-text="headline"></h2>
            <h3 class="card__subheadline" v-if="subheadline" v-text="subheadline"></h3>
            <slot></slot>
        </div>
        <div class="card__button" v-if="button">
            <a :href="button.link" class="button" v-text="button.label"></a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            headline: {
                type: String,
                required: false
            },
            subheadline: {
                type: String,
                required: false
            },
            text: {
                type: String,
                required: false
            },
            button: {
                link: {
                    type: String,
                    default: '#'
                },
                label: {
                    type: String,
                    required: true
                }
            }
        }
    }
</script>

<style scoped lang="sass">
.card
    background: white
    padding: 15px
    text-align: center

.card__headline
    color: #00b9f2
    font-size: 1.75rem
    font-weight: normal

.card__subheadline
    font-size: 1rem

.card__header > img
    max-width: 100%

.card__button
    margin: 40px auto 15px
</style>