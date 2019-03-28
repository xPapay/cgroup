import { createApp } from './main'

export default context => {
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp()
        router.push(context.url)
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()
            if (!matchedComponents.length) {
                reject({ statusCode: 404 })
            }
            // serverPrefetch lifecycle hook should be called
            context.rendered = () => {
                context.state = store.state
                context.meta = app.$meta()
            }

            resolve(app)
        }, reject)
    })
}
