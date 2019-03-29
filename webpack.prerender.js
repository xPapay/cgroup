const path = require('path')
const merge = require('webpack-merge')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const HTMLWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')
const Renderer = require('@prerenderer/renderer-jsdom')
// TODO: Import routes from router

const config = {
    entry: './src/entry-prerender.js',
    output: {
        path: path.resolve(__dirname, './prerendered'),
        publicPath: '/'
    },
    devtool: 'none',
    mode: 'production',
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, 'public', 'prerender-template.html')
        }),
        new PrerenderSPAPlugin({
            staticDir: path.join(__dirname, 'prerendered'),
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