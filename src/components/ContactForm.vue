<template>
    <div>
        <input type="text" placeholder="Your Name">
        <input type="email" placeholder="Your E-mail" required>
        <input type="text" placeholder="Your Phone">
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button class="button">Send Message</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="sass">
input,
textarea
    display: block
    margin: 20px 0
    padding: 10px
    border: 1px solid #dedede
    outline: none
    width: 100%
    resize: none
</style>