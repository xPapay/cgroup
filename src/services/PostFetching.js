import axios from 'axios'

const baseURL = 'http://cg-cms.lukaspapay.com'

const client = axios.create({
    baseURL,   // TODO: extract to env variable
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

function rewriteToAbsolutePath(content) {
    return content.replace(/(\/.*\.(jpg|jpeg|png|svg|gif))/gi, `${baseURL}$1`)
}

export default {
    getPosts() {
        // return client.get('/posts')
        return client.post('graphql', {
            query: `query {
                posts {
                    id, title, thumbnail {
                        url
                    }, body
                }
            }`
        }).then(({ data }) => {
            return data.data.posts.map(post => {
                post.thumbnail.url = rewriteToAbsolutePath(post.thumbnail.url)
                post.body = rewriteToAbsolutePath(post.body)
                return post
            })
        })
    },

    getPostById(id) {
        // return client.get('/posts/' + id)
        return client.post('graphql', {
            query: `query {
                post(id: ${id}) {
                    id, title, thumbnail {
                        url
                    }, body
                }
            }`
        }).then(({ data }) => {
            let post = data.data.post
            post.thumbnail.url = rewriteToAbsolutePath(post.thumbnail.url)
            post.body = rewriteToAbsolutePath(post.body)
            return post
        })
    }
}