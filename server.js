const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const { createBundleRenderer } = require('vue-server-renderer')
const templatePath = path.resolve(__dirname, './public/template.html')
let template = fs.readFileSync(templatePath, 'utf-8')

const isProd = process.env.NODE_ENV === 'production'

let renderer
let readyPromise

const createRenderer = (serverBundle, clientManifest, template) => {
    renderer = createBundleRenderer(serverBundle, {
        template,
        clientManifest
    })
    console.log('new renderer created')
}

if (isProd) {
    const serverBundle = require('./dist/vue-ssr-server-bundle.json')
    const clientManifest = require('./dist/vue-ssr-client-manifest.json')

    createRenderer(serverBundle, clientManifest, template)
} else {
    // whenever serverBundle, clientManifest or template change, recreate renderer
    const clientConfig = require('./webpack.client')()
    clientConfig.mode = 'development'
    const clientCompiler = webpack(clientConfig)
    const devMiddleware = require('webpack-dev-middleware')(clientCompiler, {
        publicPath: clientConfig.output.publicPath,
        noInfo: true
    })
    const hotMiddleware = require('webpack-hot-middleware')(clientCompiler)

    app.use(devMiddleware)
    app.use(hotMiddleware)

    const serverConfig = require('./webpack.server')()
    const serverCompiler = webpack(serverConfig)
    const MFS = require('memory-fs')

    readyPromise = createBundles(createRenderer)

    function createBundles(createRenderer) {
        let clientManifest
        let serverBundle
    
        const chokidar = require('chokidar')
    
        // recreate renderer
        const update = () => {
            if (clientManifest && serverBundle) {
                createRenderer(serverBundle, clientManifest, template)
                console.log('renderer updated')
            }
        }
    
        // watch for template file changes
        chokidar.watch(templatePath).on('change', () => {
            template = fs.readFileSync(templatePath, 'utf-8')
            console.log('Template file changed')
            update()
        })
    
        // watch for client manifest changes
        const clientManifestReady = new Promise(resolve => {
            clientCompiler.hooks.done.tap('done', (stats) => {
                clientManifest = JSON.parse(
                    devMiddleware.fileSystem.readFileSync(
                        path.join(clientConfig.output.path, 'vue-ssr-client-manifest.json'), 
                        'utf-8'
                    )
                )
                console.log('in client manifest ready')
                resolve()
                update()
            })
        })
    
        const serverBundleReady = new Promise(resolve => {
            const mfs = new MFS()
            serverCompiler.outputFileSystem = mfs
            serverCompiler.watch({}, (err, stats) => {
                serverBundle = JSON.parse(mfs.readFileSync(path.join(serverConfig.output.path, 'vue-ssr-server-bundle.json'), 'utf-8'))
                console.log('in server bundle ready')
                resolve()
                update()
            })
        })
    
        return Promise.all([clientManifestReady, serverBundleReady])
            .then(() => {
                console.log('clientManifest and serverBundle both resolved')
                createRenderer(serverBundle, clientManifest, template)
            })
    }
}

function render(req, res) {
    console.log('server hit')
    const context = {
        url: req.url,
        title: 'Creative Group'
    }

    renderer.renderToString(context)
        .then(html => res.end(html))
        .catch(err => (
            err.statusCode === 404 
                ? res.status(err.statusCode).end('Not found') 
                : res.status(500).end(`Something went wrong ${err}`))
        )
}

app.use('/dist', express.static('dist'))
app.use('/public', express.static('public'))

app.get('*', isProd ? render : (req, res) => {
    readyPromise.then(() => render(req, res))
})

app.listen(4000, () => console.log('Server is listening on http://localhost:4000'))

