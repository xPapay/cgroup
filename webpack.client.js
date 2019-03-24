// webpack.client.js
const commonConfig = require('./webpack.common.js')
const merge = require('webpack-merge')
const webpack = require('webpack')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const config = {
	entry: './src/entry-client.js',
	// TODO: CHECK IF VUE-LOADER HOTRELOAD IS ENABLED
	plugins: [
		new webpack.DefinePlugin({
			'process.env.VUE_ENV': '"client"'
		}),
		new VueSSRClientPlugin()
	],
	optimization: { // TODO: verify that it merged on not overwrote production optimization
		splitChunks: {
			chunks: 'all'
		}
	}
}

module.exports = (env, argv) => {
	if (!argv || argv.mode === 'development') {
		console.log(`We are in development so let's add hot HMR plugin`)
		config.plugins.push(new webpack.HotModuleReplacementPlugin())
		config.entry = ['webpack-hot-middleware/client', config.entry]
	}

	return merge(commonConfig(env, argv), config)
}

