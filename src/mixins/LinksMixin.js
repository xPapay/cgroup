import { routes } from '../router.js'

export const linksMixin = {
    computed: {
        links() {
            return routes.filter(route => route.path.search(/\/:./) === -1 && !['/'].includes(route.path))
                .map(route => (
                    { ...route, label: route.name.replace(/-/g, ' ') }
                ))
        }
    }
}
