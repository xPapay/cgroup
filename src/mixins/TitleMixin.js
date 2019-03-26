function getTitle(vm) {
    const { title } = vm
    if (title) {
        return typeof title === 'function'
            ? title.call(vm)
            : title
    }
}

const serverTitle = {
    created() {
        const title = getTitle(this)
        if (title) {
            this.$ssrContext.title = title
        }
    }
}

const clientTitle = {
    mounted() {
        const title = getTitle(this)
        if (title) {
            document.title = title
        }
    }
}

export default process.env.VUE_ENV === 'server'
    ? serverTitle
    : clientTitle
