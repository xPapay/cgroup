const path = require('path')
const merge = require('webpack-merge')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const HTMLWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')
// TODO: Import routes from router

const config = {
    entry: './src/entry-prerender.js',
    output: {
        publicPath: '/'
    },
    devtool: 'none',
    mode: 'production',
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, 'public', 'template.html')
        }),
        new PrerenderSPAPlugin({
            staticDir: path.join(__dirname, 'dist'),
            routes: ['/', '/management-team'],
            renderer: new Renderer({
                renderAfterDocumentEvent: 'render-event'
            })
        })
    ]
}

module.exports = (env, argv) => {
    return merge(commonConfig(env, argv), config)
}