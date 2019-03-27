import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:3000',   // TODO: extract to env variable
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getPosts() {
        return client.get('/posts')
    },

    getPostById(id) {
        return client.get('/posts/' + id)
    }
}