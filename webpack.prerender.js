const path = require('path')
const merge = require('webpack-merge')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const HTMLWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')()
// TODO: Import routes from router

module.exports = merge(commonConfig, {
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
            routes: ['/', '/our-story'],
            renderer: new Renderer({
                renderAfterDocumentEvent: 'render-event'
            })
        })
    ]
})